'use strict';

/**
 * @param {string} email
 *
 * @returns {boolean}
 */
function validateEmail(email) {
  const validEmailMask =
    /^[a-z0-9_-]+(?:\.[a-z0-9_-]+)*@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i;

  return validEmailMask.test(email) && !/\s/.test(email);
}

module.exports = validateEmail;
