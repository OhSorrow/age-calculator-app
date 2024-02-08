
const inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    const maxLength = this.getAttribute("maxlength");
    const currentLength = this.value.length;

    if (currentLength >= maxLength) {
      // if it's the last input, do nothing
      if (i === inputs.length - 1) {
        return;
      } else {
        inputs[i + 1].focus();
        // Set cursor at the start position
        inputs[i + 1].setSelectionRange(
          inputs[i + 1].value.length,
          inputs[i + 1].value.length
        );
      }
    }
  });

  inputs[i].addEventListener("keydown", function (e) {
    // if user pressed arrow keys, move to the next or previous input
    if (
      e.key === "ArrowRight" &&
      i !== inputs.length - 1 &&
      inputs[i].selectionStart === inputs[i].value.length
    ) {
      inputs[i + 1].focus();
      setTimeout(() => {
        // Set cursor at the start position in the next input
        inputs[i + 1].setSelectionRange(0, 0);
      }, 0);
    } else if (
      e.key === "ArrowLeft" &&
      i !== 0 &&
      inputs[i].selectionStart === 0
    ) {
      inputs[i - 1].focus();
      setTimeout(() => {
        // Set cursor at the end position in the previous input
        inputs[i - 1].setSelectionRange(
          inputs[i - 1].value.length,
          inputs[i - 1].value.length
        );
      }, 0);
    }

    // if user pressed backspace key, and the cursor position was at the 0, move to the previous input
    if (
      e.key === "Backspace" &&
      inputs[i].selectionStart === 0 &&
      inputs[i].selectionEnd === 0 &&
      i !== 0
    ) {
      // prevent the default backspace behavior
      e.preventDefault();
      inputs[i - 1].focus();
      // set the cursor at the end position in the previous input
      inputs[i - 1].setSelectionRange(
        inputs[i - 1].value.length,
        inputs[i - 1].value.length
      );
    }
  });
  // if Enter pressed on the 
}