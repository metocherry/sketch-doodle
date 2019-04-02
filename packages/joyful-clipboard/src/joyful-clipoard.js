// w3c spec - https://www.w3.org/TR/clipboard-apis/#override-copy

var clip = (function (global) {
  /**
   * @type {boolean} clipboard 비동기 지원여부
   */
  var is_async = !!global.navigator.clipboard;

  /**
   * @type {boolean} window selection 지원여부
   */
  var is_selection = !!window.getSelection;

  var MESSAGE = {
    SUCCESS: "Copying to clipboard was successful.",
    ERROR: "Could not copy text.",
    NOT_SUPPORT: "Please press Ctrl/Cmd+C to copy."
  };

  var logger = {
    log: function log(message) {
      console.log(message);
    },
    error: function error(message) {
      console.error(message);
    }
  };

  // Asynchronous Clipboard API
  function asyncClipboard(text) {
    return global.navigator.clipboard.writeText(text)
      .then(
        function () {
          logger.log(MESSAGE.SUCCESS);
        },
        function (error) {
          logger.error(MESSAGE.ERROR + " : " + error);
        }
      );
  }

  // Asynchronous Clipboard API - fallback with selection
  function fallbackClipboardWithSelection(element) {
    var range = document.createRange();
    var selection = window.getSelection();

    range.selectNode(element);
    selection.addRange(range);

    try {
      var is_succeed = document.execCommand("copy");
      is_succeed ? logger.log(MESSAGE.SUCCESS) : logger.error(MESSAGE.ERROR);
    } catch (error) {
      logger.error(MESSAGE.NOT_SUPPORT + ": " + error);
    }

    selection.removeAllRanges();
  }

  // Asynchronous Clipboard API - fallback with textarea element
  function fallbackClipboardWithTextarea(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      var is_succeed = document.execCommand("copy");
      is_succeed ? logger.log(MESSAGE.SUCCESS) : logger.error(MESSAGE.ERROR);
    } catch (error) {
      logger.error(MESSAGE.NOT_SUPPORT + ": " + error);
    }

    document.body.removeChild(textarea);
  }

  return {
    copyText: function copyText(text) {
      if (is_async) {
        asyncClipboard(text);
        return;
      }

      fallbackClipboardWithTextarea(text);
    },

    copyElement: function copyElement(element) {
      if (is_async) {
        asyncClipboard(element.textContent);
        return;
      }

      if (is_selection) {
        fallbackClipboardWithSelection(element);
        return;
      }

      fallbackClipboardWithTextarea(element.textContent);
    }
  };
})(window);
