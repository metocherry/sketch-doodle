# `joyful-clipboard`

> TODO: description

## Usage

### clip.copyText(text: string)

```javascript
document.getElementById("create_btn").addEventListener("click", function () {
  clip.copyText(document.querySelector("#p1").textContent);
});
```

### clip.copyElement(element: Element)

```javascript
document.getElementById("create_btn").addEventListener("click", function () {
  clip.copyElement(document.querySelector("#p1"));
});
```
