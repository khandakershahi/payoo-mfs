document.getElementById('add-money-btn').addEventListener('click', function(e){
e.preventDefault();
console.log('click');
const bank = document.getElementById('bank').value;
const accountNumber = document.getElementById('account-number').value;
const amount = parseInt(document.getElementById('add-amount').value);

const pin = parseInt(document.getElementById('add-pin').value);


const availableBalance = parseInt(document.getElementById('available-balance').innerText);

console.log(availableBalance);

const TotalNewAvialableBalance = amount + availableBalance;

document.getElementById('available-balance').innerText = TotalNewAvialableBalance;
})