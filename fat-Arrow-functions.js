const add = function(a, b){
    return a + b;
}

add(1, 2);

const add1 = (a, b) => {
    return a + b;
}

// using implicite return
const add2 = (a, b) => a+b;

// arrow function with single argument
const double = function(num){
    return 2 * num;
}
// is equivalent to
const double1 = num => 2*num;

const double0 = function(){
    return 2 * num;
}
const double01 = () => 2*num;


const numbers =  [1, 2, 3, 4];
 numbers.map(function(number){
     return 2 * number;
 });

numbers.map(number => 2 * number);


// real world example
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Team',
    teamSummary: function(){
        return this.members.map(function(member){
            return `${member} is on team ${this.teamName}`; // this line will return typeError: cannot read property teamName of undefined
        }.bind(this)); // with this bind, we solve the typeError;
    }
};

const team1 = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Team',
    teamSummary: function(){
        // this === team
        return this.members.map((member) =>{
            return `${member} is on team ${this.teamName}`; // now we fix the error with fat arrow function
        });
    }
};

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}