// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }

// const first = doubleIt(5)
// const second = doubleIt(7)


function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const amountText = inputField.value;
    const amountValue = parseFloat(amountText);
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount + previousTotal;

}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}



document.getElementById('deposit-btn').addEventListener('click', function () {
    // const depoitInput = document.getElementById('depsit-input');
    // const depsitAmountText = depoitInput.value;
    // const depsitAmount = parseFloat(depsitAmountText);

    /*  const depsitAmount = getInputValue('depsit-input'); */

    //get and update deposit 


    // const depoitTotal = document.getElementById('deposite-total');
    // const depoitTotalText = depoitTotal.innerText;
    // const previousDepoitTotal = parseFloat(depoitTotalText);
    // depoitTotal.innerText = depsitAmount + previousDepoitTotal;

    /*  updateTotalField('deposite-total', depsitAmount); */

    // update balance


    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depsitAmount;

    const depsitAmount = getInputValue('depsit-input');
    updateTotalField('deposite-total', depsitAmount);
    updateBalance(depsitAmount, true);




});

// withdraw 

document.getElementById('withdraw-btn').addEventListener("click", function () {


    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawText);

    /* const withdrawAmount = getInputValue('withdraw-input'); */

    //get and update withdraw total


    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;

    /* updateTotalField('withdraw-total', withdrawAmount); */

    //update balance after withdraw 

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);

})