/**
 * Intersection Observer API를 제공하는지 판단한다.
 * @returns {boolean}
 */
export default function isIntersectionObserver() {
    return "IntersectionObserver" in window;
}
