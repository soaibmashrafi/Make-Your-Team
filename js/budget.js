document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerBudgetField = document.getElementById('perPlayerBudget-field');
    const perPlayerBudgetString = perPlayerBudgetField.value;
    const playerCalculate = parseFloat(perPlayerBudgetString);

    perPlayerBudgetField.value = '';
 

    if (isNaN(playerCalculate)) {
        alert("Please Insert A Number");
        return;
    }
    if (playerCalculate <= 0) {
        alert('Wrong Value');
        return;
    }

    const expensesField = document.getElementById('expenses-field');
    const expensesFieldString = expensesField.value;
    const expensesCalculate = parseFloat(expensesFieldString);

    expensesField.value = '';

    const totalPlayerCost = 5 * playerCalculate;
    expensesField.value = totalPlayerCost;

// !------------------------------------------------------------------------------------------!
// !------------------------------------------------------------------------------------------!
// !------------------------------------------------------------------------------------------!

 })


 document.getElementById('btn-calculateTotal').addEventListener('click', function(){

    const totalField = document.getElementById('total-field');
    const totalFieldString = totalField.value;
    const totalcalculatedAmount = parseFloat(totalFieldString);
    // console.log(totalcalculatedAmount);

    const expensesField = document.getElementById('expenses-field');
    const expensesFieldString = expensesField.value;
    const expensesCalculate = parseFloat(expensesFieldString);

    expensesField.value = '';

     const managerValue = document.getElementById('manager-field');
     const managerValueString = managerValue.value;
     const managerValueAmount = parseFloat(managerValueString);

     managerValue.value = '';
    

     const coachValue = document.getElementById('coach-field');
     const coachValueSting = coachValue.value;
     const coachValueAmount = parseFloat(coachValueSting);

     coachValue.value = '';
    

    const calculateFinalAmount = expensesCalculate + managerValueAmount + coachValueAmount;
    totalField.value = calculateFinalAmount;
   


 })


