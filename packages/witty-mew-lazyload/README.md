# lazyload

Benefits:

- saves unnecessary bandwidth
- fast loading, high performance, images loaded on view
- supports any image type (JPEG photographs are most appropriate)
- supports responsive images (srcset and sizes attributes)
- supports CSS background images
- small: 1,300 bytes of JavaScript, 445 bytes of CSS (minified)
- any CSS reveal effect can be applied
- no external dependencies - works with any framework
- works in all modern browsers (IE10+)
- progressively-enhanced to work in older browsers
- easy to use

## Usage

```javascript
lazyload
  .create({
    root: document,
    elements: document.querySelectorAll("img"),
    threshold: 0
  })
  .on("enter", (entries, observer) => {
    // to do
  })
  .on("leave", (entries, observer) => {
    // to do
  })
  .on("error", error => {
    // to do
  });
```

## 문서구조

- 사용자의 화면에 보여지는 영역을 `viewport`라고한다.
- (`viewport` 기준)`element.getBoundingClientRect()` api를 호출하면, margin을 제외한 영역이다. 만약 css `transform` 속성이 적용되어있다면, 적용된 정보를 리턴한다.(`getBoundingClientRect` api가 존재하지않는다면, offsetLeft, offsetTop 프로퍼티를 사용한다.)
- `element.clientWidth`와 `element.clientHeight`은 margin, border를 제외한 영역이다.
- `element.offsetParent`는 기준이되는 element를 리턴한다. 만약, 부모 중 CSS position의 값이 static인 td, th, table 엘리먼트가 있다면 이 엘리먼트가 offsetParent가 된다.
- (문서 기준)`window.pageYoffset`과 `window.pageXoffset` 프로퍼티는 스크롤된 크기를 리턴한다.
- `viewport`의 좌표와 `pageYoffset` 또는 `pageXoffset` 값을 더하면 문서상의 좌표를 알 수 있다.
- `window.scrollTo(x: number, y: number)` api를 이용하여 스크롤 위치를 이동시킬 수 있다.
- `window.innerWidth`와 `window.innerHeight`은 viewport의 크기이다.
- `screen.width`와 `screen.height` 디스플레이의 해상도이다.

## BDD

- feature : 테스트 대상의 기능/책임을 명시한다.
- scenario : 테스트 목적에 대한 상황을 설명한다.
- given
- when
- then

## References

- [너는 나를 본다: 지연 방법, 레이지 로드와 IntersectionObserver의 동작](https://github.com/codepink/codepink.github.com/wiki/%EB%84%88%EB%8A%94-%EB%82%98%EB%A5%BC-%EB%B3%B8%EB%8B%A4:-%EC%A7%80%EC%97%B0-%EB%B0%A9%EB%B2%95,-%EB%A0%88%EC%9D%B4%EC%A7%80-%EB%A1%9C%EB%93%9C%EC%99%80-IntersectionObserver%EC%9D%98-%EB%8F%99%EC%9E%91)
