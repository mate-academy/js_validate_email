'use strict';

/**
 * @param {string} email
 *
 * @returns {boolean}
 */
function validateEmail(email) {
  // Check if email contains @ symbol
  if (!email.includes('@')) {
    return false;
  }

  const parts = email.split('@');

  // Email should have exactly one @ symbol
  if (parts.length !== 2) {
    return false;
  }

  const [personalInfo, domain] = parts;

  // Personal info and domain cannot be empty
  if (!personalInfo || !domain) {
    return false;
  }

  // Personal info cannot start or end with dot
  if (personalInfo.startsWith('.') || personalInfo.endsWith('.')) {
    return false;
  }

  // Domain cannot start with dot
  if (domain.startsWith('.')) {
    return false;
  }

  // Check for double dots in personal info
  if (personalInfo.includes('..')) {
    return false;
  }

  // Personal info validation: letters, digits, -, _, and . (not consecutive)
  // Allowed characters: A-Z, a-z, 0-9, -, _, .
  const personalInfoRegex = /^[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*$/;

  if (!personalInfoRegex.test(personalInfo)) {
    return false;
  }

  // Domain validation: letters, digits, hyphens, and dots
  // Domain should have at least one dot and valid characters
  const domainRegex = /^[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;

  if (!domainRegex.test(domain)) {
    return false;
  }

  return true;
}

module.exports = validateEmail;
