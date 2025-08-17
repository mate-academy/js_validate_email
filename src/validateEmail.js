'use strict';

function validateEmail(email) {
  if (typeof email !== 'string') return false;

  const parts = email.split('@');
  if (parts.length !== 2) return false;

  const [personalInfo, domain] = parts;

  if (!personalInfo || !domain) return false;

  if (personalInfo.startsWith('.') || personalInfo.endsWith('.')) return false;
  if (personalInfo.includes('..')) return false;

  if (!/^[A-Za-z0-9._-]+$/.test(personalInfo)) return false;
  if (/[!$%&'*+/=?^{}|~]/.test(personalInfo)) return false;

  if (!/^[A-Za-z0-9.-]+$/.test(domain)) return false;
  if (domain.startsWith('-') || domain.endsWith('-')) return false;
  if (!domain.includes('.')) return false;

  return true;
}

module.exports = validateEmail;
