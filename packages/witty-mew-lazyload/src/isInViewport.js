/**
 * @typedef {object} viewport - 브라우저의 view size 정보
 * @property {number} width
 * @property {number} height
 */

/**
 * @typedef {object} dimension - element의 position 정보
 * @property {number} left
 * @property {number} right
 * @property {number} top
 * @property {number} bottom
 */

/**
 * element가 viewport 안에 존재하는지 판단한다.
 * @function
 * @param {Element} element
 * @returns {boolean}
 */
function isInViewport(element) {
  const viewport_width = document.documentElement.clientWidth;
  const viewport_height = document.documentElement.clientHeight;
  const dimension = element.getBoundingClientRect();

  const viewport = { width: viewport_width, height: viewport_height };

  if (!dimension.width || !dimension.height) {
    return false;
  }

  return isInViewportWidth(viewport, dimension) && isInViewportHeight(viewport, dimension);
}

/**
 * element가 viewport width 안에 존재하는지 판단한다.
 * @function
 * @param {viewport} viewport
 * @param {dimension} dimesion
 * @returns {boolean}
 */
function isInViewportWidth(viewport, dimension) {
  return isInLeft(viewport.width, dimension.left) || isInRight(viewport.width, dimension.right);
}

/**
 * element가 viewport 좌측 기준, 오른쪽에 있는지 판단한다.
 * @function
 * @private
 * @param {number} viewport_width
 * @param {number} dimesion_left
 * @returns {boolean}
 */
function isInLeft(viewport_width, dimension_left) {
  return dimension_left >= 0 && dimension_left < viewport_width;
}

/**
 * element가 viewport 오른족 기준, 왼쪽에 있는지 판단한다.
 * @function
 * @private
 * @param {number} viewport_width
 * @param {number} dimesion_right
 * @returns {boolean}
 */
function isInRight(viewport_width, dimension_right) {
  return dimension_right >= 0 && dimension_right < viewport_width;
}

/**
 * element가 viewport 오른족 기준, 왼쪽에 있는지 판단한다.
 * @function
 * @private
 * @param {number} viewport_width
 * @param {number} dimesion_right
 * @returns {boolean}
 */
function isInViewportHeight(viewport, dimension) {
  return isInTop(viewport.height, dimension.top) || isInBottom(viewport.height, dimension.bottom);
}

/**
 * element가 viewport top 기준, 아래쪽에 있는지 판단한다.
 * @function
 * @private
 * @param {number} viewport_height
 * @param {number} dimesion_top
 * @returns {boolean}
 */
function isInTop(viewport_height, dimension_top) {
  return dimension_top >= 0 && dimension_top < viewport_height;
}

/**
 * element가 viewport bottom 기준, 위쪽에 있는지 판단한다.
 * @function
 * @private
 * @param {number} viewport_height
 * @param {number} dimesion_top
 * @returns {boolean}
 */
function isInBottom(viewport_height, dimension_bottom) {
  return dimension_bottom >= 0 && dimension_bottom < viewport_height;
}

module.exports = isInViewport;
