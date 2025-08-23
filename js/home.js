const validPin = 1234;

// functions to get input values
function getInputValueNumber(id){
  const inputField =  document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

function getInputValue(id){
    const inputField =  document.getElementById(id);
   const inputFieldValue = inputField.value;
   return inputFieldValue;
}
// functions to get inner text
function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}

// function to set inner text
function setInnerText(value){
    const availableBalancElement = document.getElementById('available-balance');
    availableBalancElement.innerText = value;
}


// add-money feature
document.getElementById('add-money-btn').addEventListener('click', function(e){
e.preventDefault();

const bank = getInputValue('bank');
const accountNumber = getInputValue('account-number');

const amount = getInputValueNumber("add-amount");

const pin = getInputValueNumber('add-pin');


const availableBalance = getInnerText('available-balance');

if(accountNumber.length < 11){
    alert('Please provide valid account number');
    return;
}

if(pin !== validPin){
    alert('Please provide valid pin number');
    return;
}

const TotalNewAvialableBalance = amount + availableBalance;

setInnerText(TotalNewAvialableBalance);
})


// cashout money feature

document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
   const amount = getInputValueNumber('withdraw-amount')
   const availableBalance = getInnerText('available-balance');


   TotalNewAvialableBalance = availableBalance - amount;
  
   setInnerText(TotalNewAvialableBalance);
})


// toggling feature 
document.getElementById('add-money-button').addEventListener(
    'click', function(){
        document.getElementById('cash-out-parent').style.display = 'none';
        document.getElementById('add-money-parent').style.display = 'block';

    }
)
document.getElementById('cash-out-button').addEventListener(
    'click', function(){
        document.getElementById('add-money-parent').style.display = 'none';
        document.getElementById('cash-out-parent').style.display = 'block';

    }
)