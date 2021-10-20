'use strict';

/**
 * @param {string} email
 *
 * @returns {boolean}
 */
function validateEmail(email) {
  // eslint-disable-next-line
  // please check my comment in request 
  const validEmailMask = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,66})$/);

  if (email.match(validEmailMask)) {
    return true;
  }

  return false;
}

module.exports = validateEmail;
