document.getElementById('deposit-button').addEventListener('click', function(){
    calculateBankMoney('deposit')
    /* // get deposit inputField
    const depositInput = document.getElementById('deposit-input')
    let depositInputAmount = depositInput.value
    depositInputAmount = Number(depositInputAmount)
    // set deposit input amount 
   const previousDepositTotal = document.getElementById('deposit-total');
   let previouseDepositAmount = previousDepositTotal.innerText
   previouseDepositAmount = Number(previouseDepositAmount) 
   previousDepositTotal.innerText = depositInput.value
   
  // get deposit total
   const updateDepositTotal = previouseDepositAmount + depositInputAmount
   previousDepositTotal.innerText= updateDepositTotal
   depositInput.value = ''
  
   // get balance total 
    const balanceTotal = document.getElementById('balance-total');
    let previousBalanceAmount = balanceTotal.innerText
    previousBalanceAmount = Number(previousBalanceAmount)
    const updateBalanceTotal = previousBalanceAmount + depositInputAmount
    balanceTotal.innerText = updateBalanceTotal */
   
});
document.getElementById('withdraw-button').addEventListener('click', function(){
    calculateBankMoney('withdraw')
})
function calculateBankMoney(type){
    // get deposit inputField
    const inputField = document.getElementById(type +'-input')
    let inputAmount = inputField.value
    inputAmount = Number(inputAmount)
    //condition for validation
    if(inputAmount>0){
 // set deposit input amount 
 const previousTotal = document.getElementById(type +'-total');
 let previousAmount = previousTotal.innerText
 previousAmount = Number(previousAmount) 
 previousTotal.innerText = inputField.value
 
// get deposit total
 const updateTotal = previousAmount + inputAmount
 previousTotal.innerText= updateTotal
 inputField.value = ''

 // get balance total 
  const balanceTotal = document.getElementById('balance-total');
  let previousBalanceAmount = balanceTotal.innerText
  previousBalanceAmount = Number(previousBalanceAmount)
  // condition for withdraw and deposit balance total
  if(type == 'deposit'){
      const updateBalanceTotal = previousBalanceAmount + inputAmount
  balanceTotal.innerText = updateBalanceTotal
  }
  else{
      const updateBalanceTotal = previousBalanceAmount -inputAmount
  balanceTotal.innerText = updateBalanceTotal
  }
    }
  else{
      alert('your input amount are invalid')
      inputField.value = ''
  } 
    
}
