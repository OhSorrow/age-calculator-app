const inputs = document.querySelectorAll("input");
const emptyErrorText = document.querySelectorAll(".emptyErrorText");
const labels = document.querySelectorAll("label");

inputs.forEach((input, i) => {
  inputs[i].addEventListener("input", function () {
    const maxLength = this.getAttribute("maxlength");
    const currentLength = this.value.length;

    if (currentLength >= maxLength) {
      // if it's the last input, do nothing
      if (i === inputs.length - 1) {
        return;
      } else {
        jumpToInput(i + 1, inputs[i + 1].value.length);
      }
    }
  });

  inputs[i].addEventListener("keydown", function (event) {
    // if user pressed arrow keys, move to the next or previous input
    if (
      event.key === "ArrowRight" &&
      i !== inputs.length - 1 &&
      inputs[i].selectionStart === inputs[i].value.length
    ) {
      jumpToInput(i + 1, 0);
    } else if (
      event.key === "ArrowLeft" &&
      i !== 0 &&
      inputs[i].selectionStart === 0
    ) {
      jumpToInput(i - 1, inputs[i - 1].value.length);
    } else if (
      // if user pressed backspace key, and the cursor position was at the 0, move to the previous input
      event.key === "Backspace" &&
      inputs[i].selectionStart === 0 &&
      inputs[i].selectionEnd === 0 &&
      i !== 0
    ) {
      // prevent the default backspace behavior
      event.preventDefault();
      jumpToInput(i - 1, inputs[i - 1].value.length);
    } else if (event.key === "Enter") {
      handleEmptyInputError();
    }
  });
});

function jumpToInput(inputIndex, cursorPosition) {
  inputs[inputIndex].focus();
  setTimeout(() => {
    setCursorPosition(inputs[inputIndex], cursorPosition);
  }, 0);
}
function setCursorPosition(input, position) {
  input.setSelectionRange(position, position);
}

function handleEmptyInputError() {
  inputs.forEach((input, index) => {
    if (input.value === "") {
      input.classList.add("emptyErrorInput");
      emptyErrorText[index].style.visibility = "visible";
      labels[index].style.color = "hsl(var(--clr-light-red))";
    } else {
      input.classList.remove("emptyErrorInput");
      emptyErrorText[index].style.visibility = "hidden";
      labels[index].style.color = "hsl(var(--clr-smokey-grey))";
    }
  });
}
