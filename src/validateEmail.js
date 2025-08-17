'use strict';

function validateEmail(email) {
  if (typeof email !== 'string') return false;

  const parts = email.split('@');
  if (parts.length !== 2) return false;

  const [personal, domain] = parts;

  if (!personal || !domain) return false;
  if (personal.startsWith('.') || personal.endsWith('.')) return false;
  if (personal.includes('..')) return false;

  const personalAllowed = /^[a-zA-Z0-9._-]+$/;
  if (!personalAllowed.test(personal)) return false;

  const invalidChars = /[!$%&'*+/=?^{}|~]/;
  if (invalidChars.test(personal)) return false;

  const domainAllowed = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
  if (!domainAllowed.test(domain)) return false;

  return true;
}

module.exports = { validateEmail };
