function isInViewport(element) {
  const viewport_height = document.documentElement.clientHeight;
  const viewport_width = document.documentElement.clientWidth;
  const dimension = element.getBoundingClientRect();

  const viewport = { width: viewport_width, height: viewport_height };

  if (!dimension.width || !dimension.height) {
    return false;
  }

  return (
    isInViewportWidth(viewport, dimension) &&
    isInViewportHeight(viewport, dimension)
  );
}

function isInViewportWidth(viewport, dimension) {
  return isInLeft() || isInRight();
}

function isInLeft(viewport_width, dimension_left) {
  return dimension_left >= 0 && dimension_left < viewport_width;
}

function isInRight(viewport_width, dimension_right) {
  return dimension_right >= 0 && dimension_right < viewport_width;
}

function isInViewportHeight(viewport, dimension) {
  return (
    isInTop(viewport.heigth, dimension.top) ||
    isInBottom(viewport.height, dimension.bottom)
  );
}

function isInTop(viewport_height, dimension_top) {
  return dimension_top >= 0 && dimension_top < viewport_height;
}

function isInBottom(viewport_height, dimension_bottom) {
  return dimension_bottom >= 0 && dimension_bottom < viewport_height;
}

module.exports = isInViewport;
