'use strict';

/**
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
  const parts = email.split('@');

  // musi być dokładnie jeden @
  if (parts.length !== 2) {
    return false;
  }

  const [personal, domain] = parts;

  // personal_info checks
  if (!personal || personal.startsWith('.') || personal.endsWith('.')) {
    return false;
  }

  if (/\.{2,}/.test(personal)) {
    return false;
  } // podwójne kropki niedozwolone

  if (!/^[A-Za-z0-9._-]+$/.test(personal)) {
    return false;
  } // allow-list wystarczy

  // domain checks
  if (!domain || domain.startsWith('.')) {
    return false;
  }

  // stricter policy: końcowa kropka w domenie niedozwolona
  if (!/^[A-Za-z0-9.-]+$/.test(domain)) {
    return false;
  }

  // domena musi mieć przynajmniej jedną kropkę
  if (!domain.includes('.')) {
    return false;
  }

  return true;
}

module.exports = validateEmail;
