'use strict';

/**
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
  // regex: user@sub.domain.tld, TLD min. 2 znaki, nie kończy się kropką
  const validEmailMask = /^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/i;
  return validEmailMask.test(email);
}

module.exports = validateEmail;

