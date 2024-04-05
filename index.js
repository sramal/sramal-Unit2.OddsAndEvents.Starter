// TODO: this file! :)
const numberBank = [];
const oddNumbers = [];
const evenNumbers = [];

const addNumberBtn = document.querySelector("form button");
const sort1Btn = document.getElementById("sortOne");
const sortAllBtn = document.getElementById("sortAll");
const numberBankOutput = document.getElementById("numberBank");
const oddOutput = document.getElementById("odds");
const evenOutput = document.getElementById("evens");

// Add event listener to Add Number button
addNumberBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.parentElement.number.value !== "") {
        numberBank.push(Number(e.target.parentElement.number.value));
    }
    e.target.parentElement.number.value = "";

    render();
});

function sortOneNumber() {
    if (numberBank.length > 0) {
        num = numberBank.shift();
        if (num % 2) {
            oddNumbers.push(num);
        } else {
            evenNumbers.push(num);
        }
    }
}

sort1Btn.addEventListener("click", (e) => {
    e.preventDefault();

    sortOneNumber();

    render();
});

sortAllBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const len = numberBank.length;
    for (let i = 0; i < len; i++) {
        sortOneNumber();
    }

    render();
});

function render() {
    numberBankOutput.getElementsByTagName("output")[0].textContent =
        numberBank.join(", ");

    oddOutput.getElementsByTagName("output")[0].textContent =
        oddNumbers.join(", ");

    evenOutput.getElementsByTagName("output")[0].textContent =
        evenNumbers.join(", ");
}
