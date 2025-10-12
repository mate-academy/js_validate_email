'use strict';

/**
 * Sprawdza poprawność adresu email.
 *
 * Wymagania:
 * - Dokładnie jeden znak '@'
 * - Local-part: [A-Za-z0-9_-]+ segmenty, oddzielone pojedynczą kropką
 *   - Bez wiodących, końcowych ani podwójnych kropek
 * - Domena: [A-Za-z0-9-] etykiety oddzielone kropkami
 *   - Co najmniej jedna kropka
 *   - Bez '_' w domenie
 * - TLD może mieć 1 lub więcej znaków
 *
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
  const validEmailMask = /^[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;
  return validEmailMask.test(email);
}

module.exports = validateEmail;


