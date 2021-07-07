'use strict';

/**
 * @param {string} email
 *
 * @returns {boolean}
 */
function validateEmail(email) {
  // eslint-disable-next-line
  const validEmailMask = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/);

  if (email.match(validEmailMask)) {
    return true;
  }

  return false;
}

module.exports = validateEmail;
