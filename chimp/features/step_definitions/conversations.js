// Recommended filename: Given_I_say_hello.js
module.exports = function() {
  this.Given(/^I say hello$/, function () {
    // Write the automation code here
    console.log("Hello");
  });

  this.When(/^She responds how are you$/, function () {
    // Write the automation code here
	    console.log("How are you");
  });

  this.Then(/^I say good thanks$/, function () {
    // Write the automation code here
	    console.log("Good Thanks");
  });

  this.Then(/^also ask how they are$/, function () {
    // Write the automation code here
	    console.log("How are you");
  });

  this.Then(/^forget to say my name$/, function () {
    // Write the automation code here
	    console.log("My name is Alex");
  });
  
  this.Given(/^I say "([^"]*)"$/, function (arg1) {
  // Write the automation code here
  console.log(arg1);
	});
	
	this.Given(/^She responds "([^"]*)"$/, function (arg1) {
	  // Write the automation code here
	console.log(arg1);
	});
	
	this.Given(/^also ask "([^"]*)"$/, function (arg1) {
	  // Write the automation code here
	console.log(arg1);
	});
	
	this.Given(/^forget to say "([^"]*)"$/, function (arg1) {
	  // Write the automation code here
	console.log(arg1);
	});
};