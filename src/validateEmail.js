'use strict';
/* eslint-disable no-max-len */
/**
 * @param {string} email
 *
 * @returns {boolean}
 */

/**
 * @param {string} email
 *
 * @returns {boolean}
 */

/**
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
  const emailRegex = new RegExp(
  // eslint-disable-next-line max-len
    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{1,}$/i
  );

  return emailRegex.test(email);
}

module.exports = validateEmail;
