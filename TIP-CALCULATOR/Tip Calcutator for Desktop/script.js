document.addEventListener("DOMContentLoaded", () => {
    const billInput = document.getElementById("bill");
    const tipButtons = document.querySelectorAll(".tip-btn");
    const customTipInput = document.getElementById("custom-tip");
    const peopleInput = document.getElementById("people");
    const tipAmountDisplay = document.getElementById("tip-amount");
    const totalDisplay = document.getElementById("total");
    const resetButton = document.getElementById("reset");
    const errorMessage = document.getElementById("error-message");
    
    let billValue = 0;
    let tipValue = 0;
    let peopleCount = 1;
    
    function calculate() {
        if (peopleCount <= 0) {
            errorMessage.style.display = "block";
            return;
        } else {
            errorMessage.style.display = "none";
        }
        let tipAmount = (billValue * (tipValue / 100)) / peopleCount;
        let totalAmount = (billValue / peopleCount) + tipAmount;
        tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
        totalDisplay.textContent = `$${totalAmount.toFixed(2)}`;
    }
    
    billInput.addEventListener("input", (e) => {
        billValue = parseFloat(e.target.value) || 0;
        calculate();
    });
    
    tipButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            tipValue = parseInt(e.target.value);
            calculate();
        });
    });
    
    customTipInput.addEventListener("input", (e) => {
        tipValue = parseFloat(e.target.value) || 0;
        calculate();
    });
    
    peopleInput.addEventListener("input", (e) => {
        peopleCount = parseInt(e.target.value) || 0;
        calculate();
    });
    
    resetButton.addEventListener("click", () => {
        billInput.value = "";
        customTipInput.value = "";
        peopleInput.value = "1";
        tipAmountDisplay.textContent = "$0.00";
        totalDisplay.textContent = "$0.00";
        billValue = 0;
        tipValue = 0;
        peopleCount = 1;
    });
});

