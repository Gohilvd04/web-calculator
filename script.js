const btn = document.querySelectorAll(".btn");
let opString = "";
let display = document.querySelector("#display");

btn.forEach(ele => {
    if (ele.textContent === "CE") {
        display.value = opString;
    }

    ele.addEventListener("click", () => {
        if (ele.textContent === "CE") {
            display.value = opString;
        }
        else if (ele.textContent === "←") {
            display.value = display.value.slice(0, (display.value.length) - 1);
        }
        else if (ele.textContent === "=") {
            let ex = eval(display.value);
            display.value = ex;
        }
        else {
            display.value += ele.textContent;
        }
    })
})
