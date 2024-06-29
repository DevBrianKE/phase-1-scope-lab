// Write your solution in this file!
var customerName = 'bob'


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}


function setBestCustomer() {
    bestCustomer = 'not bob'; // Creates a global variable called bestCustomer
}


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer  = 'intialValue'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'newvalue'
}