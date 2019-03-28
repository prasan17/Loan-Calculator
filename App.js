//Listen to Sumit Button
document.getElementById('loan-form').addEventListener('submit', function(e){
    //Hide Results
    document.getElementById('results').style.display = 'none';

    //Show Loader
    document.getElementById('Loader').style.display = 'block';

    setTimeout(CalculateResult,3000);
    e.preventDefault();
});

function CalculateResult() {
    
    //Ui Variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayement = parseFloat(years.value) * 12;

    //Compute Monthly Payement 
    const x = Math.pow(1 + calculatedInterest, calculatedPayement);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    
    if(isFinite(monthly))
    {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayement).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayement)-principal).toFixed(2);
        //Show Results
        document.getElementById('results').style.display = 'block';
        //Hide Loader
        document.getElementById('Loader').style.display = 'none';
    }else
    {
        ShowError('Please Check your Numbers!!!');
    }   
}
//Show Error
function ShowError(error)
{
//Create Element
const errDiv = document.createElement('div');
//Get Element
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');
//Addclass
errDiv.className = 'alert alert-danger';
//Create Textnode
errDiv.appendChild(document.createTextNode(error));
//Insert Error Above Heading
card.insertBefore(errDiv,heading);
//Clear error After 5 Seconds
setTimeout(clearError,5000);
}
//Clear Error
function clearError()
{
document.querySelector('.alert').remove();
}