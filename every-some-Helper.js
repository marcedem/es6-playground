var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 },
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;
for(var i = 0; i < computers.length; i++){
    var computer = computers[i];

    if(computer.ram < 16){
        allComputersCanRunProgram = false;
    }else{
        onlySomeComputersCanRunProgram  = true;
    }
}

console.log("------------");
console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

// "every" helper returns a boolean value
computers.every(function(computer){
    // return keyword mandatory
    return computer.ram > 16;
});

// "some" helper returns also a boolean value
computers.some(function(computer){
    // return keyword mandatory, if not it return "undefined"
    return computer.ram > 16;
})


var names = [
    "Alexandria", "Matthew", "Joe"
];
// return true if every name fill the conditions
names.every(function(name){
    return name.length > 4;
});

// return true if some names fill the conditions
names.some(function(name){
    return name.length > 4;
});

// every and some can be used for instance  during validation of a login form.

function Field(value){
    this.value = value;
}

Field.prototype.validate = function(){
    return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");
// we can add more to this like:
var birthdate = new Field("10/10/10");

username.validate() && password.validate();

// refactoring
var fields = [username, password, birthdate];
var formIsValid =  fields.every(function(field){
    return field.validate();
});


if(formIsValid){
    // allow user to submit!
}else{
    // show an eror message!
}

/**
 * Given an array of users, return 'true' if every user has submitted a request form.  
 * Assign the result to the variable 'hasSumbmitted'.
 */

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user){
    return user.hasSubmitted === true;
});

/**
 * Given an array of network objects representing network requests, assign the boolean 'true' 
 * to the variable 'inProgress' if any network request has a 'status' of 'pending'.
 */
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request){
    return request.status === 'pending'; 
});