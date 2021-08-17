// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }

// const first = doubleIt(5)
// const second = doubleIt(7)


function getInputValue() {
    const depoitInput = document.getElementById('depsit-input');
    const depsitAmountText = depoitInput.value;
    const depsitAmount = parseFloat(depsitAmountText);
    depoitInput.value = '';
    return depsitAmount;
}



document.getElementById('deposit-btn').addEventListener('click', function () {
    // const depoitInput = document.getElementById('depsit-input');
    // const depsitAmountText = depoitInput.value;
    // const depsitAmount = parseFloat(depsitAmountText);
    const depsitAmount = getInputValue();


    //get current deposit 
    const depoitTotal = document.getElementById('deposite-total');
    const depoitTotalText = depoitTotal.innerText;
    const previousDepoitTotal = parseFloat(depoitTotalText);
    depoitTotal.innerText = depsitAmount + previousDepoitTotal;


    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depsitAmount;






});

// withdraw 

document.getElementById('withdraw-btn').addEventListener("click", function () {


    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);
    console.log(withdrawAmount);


    //withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;

    //

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    withdrawInput.value = '';

})