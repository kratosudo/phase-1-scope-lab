// Write your solution in this file!
// Declare a global variable customerName and assign it the value 'bob'
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it the value 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the global variable bestCustomer and assign it the value 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it an initial value
const leastFavoriteCustomer = 'some initial value';

// Function to attempt to change the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
  // This will cause an error because leastFavoriteCustomer is a constant
  leastFavoriteCustomer = 'new value';
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer
};
