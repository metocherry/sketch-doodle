import "./main.scss"
import Editor from "tui-editor";
import Viewer from "tui-editor/dist/tui-editor-Viewer";

import guide from "./docs/guide.md";

const section = document.querySelector(".markdown-section");
const button = document.querySelector(".presentation-btn");
button.addEventListener("click", () => {
  section.innerHTML = "";

  const viwer = new Viewer({
    el: section,
    height: "100%",
    initialValue: window.decodeURIComponent(guide)
  });
});

const editor = new Editor({
  el: section,
  initialEditType: "markdown",
  previewStyle: "vertical",
  height: "100%",
  initialValue: window.decodeURIComponent(guide)
});
