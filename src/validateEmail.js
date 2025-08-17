'use strict';

function validateEmail(email) {
  if (typeof email !== 'string') return false;
  const parts = email.split('@');
  if (parts.length !== 2) return false;

  const [personal, domain] = parts;

  if (!personal || !domain) return false;
  if (personal.startsWith('.') || personal.endsWith('.')) return false;
  if (personal.includes('..')) return false;

  const personalRegex = /^[A-Za-z0-9._-]+$/;
  if (!personalRegex.test(personal)) return false;

  const invalidChars = /[!$%&'*+/=?^`{|}~]/;
  if (invalidChars.test(personal)) return false;

  const domainRegex = /^[A-Za-z0-9.-]+\.[A-Za-z]{1,}$/;
  if (!domainRegex.test(domain)) return false;

  return true;
}

module.exports = validateEmail;
