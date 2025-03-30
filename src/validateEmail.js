'use strict';

/**
 * @param {string} email
 *
 * @returns {boolean}
 */
function validateEmail(email) {
  // eslint-disable-next-line
  const validEmailMask = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\./i);

  if (email.match(validEmailMask)) {
    return true;
  }

  return false;
}

module.exports = { validateEmail };
