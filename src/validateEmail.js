'use strict';

/**
 * @param {string} email
 *
 * @returns {boolean}
 */
function validateEmail(email) {
  // eslint-disable-next-line
  const validEmailMask = /^[A-Za-z0-9]+([._-]?[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;

  if (email.match(validEmailMask)) {
    return true;
  }

  return false;
}

module.exports = validateEmail;
