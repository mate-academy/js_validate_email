'use strict';

function validateEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }

  const parts = email.split('@');

  if (parts.length !== 2) {
    return false;
  }

  const [local, domain] = parts;

  // local and domain must exist and cannot start or end with '.'
  if (
    !local
    || !domain
    || local.startsWith('.')
    || local.endsWith('.')
    || domain.startsWith('.')
    || domain.endsWith('.')
  ) {
    return false;
  }

  // no double dots in local part
  if (local.includes('..')) {
    return false;
  }

  // forbidden characters in local part
  if (/[^a-zA-Z0-9._-]/.test(local)) {
    return false;
  }

  // domain must contain at least one dot
  const domainParts = domain.split('.');

  if (domainParts.length < 2 || domainParts.some(part => part.length === 0)) {
    return false;
  }

  // only letters, numbers, hyphens, and dots in domain
  if (!/^[a-zA-Z0-9.-]+$/.test(domain)) {
    return false;
  }

  return true;
}

module.exports = {
  validateEmail,
};
