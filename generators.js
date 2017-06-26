//
const colors = [ 'red', 'green', 'blue' ];

// using "for of" loop
for(let color of colors){
    console.log(color);
}


// FOR OF loop is simimar to forEach loop in Java
let total = 0;
const numb  = [1, 2, 3, 4, 5];
for(let num of numb){
    total += numb;
    console.log(total);
}

// turn a function into generator by adding a "star" either to the FUNCTION keyword or the beginning of the function name
function* numbers(){
    yield; // This is an important keyword
}

const gen = numbers();
gen.next(); // {"done": false}
gen.next(); // {"done": true}

// console.log(numbers());


// More example with generators
function* shopping(){
    // stuff on the sidewalk

    // walkig down the sidewalk

    // go into the store with cash
    const stuffFromStore = yield 'cash';
    //walking to laundry place
    const cleanClothes = yield 'laundry';

    // walking back home
    return {stuffFromStore, cleanClothes};
}

// stuff in the store
const shop = shopping();
shop.next();    // leaving our home
// walked into the store
// walking up down the aisles..
// purchase stuff
shop.next('groceries');    // leacing the store with groceries
shop.next('clean clothes');


// Another example
function* genColors(){
    yield 'red';
    yield 'blue';
    yield 'green';
    yield 'yellow';
}

const myColors = [];
for(let color of genColors()){
    myColors.push(color);
}
console.log(myColors);

// More practical example

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Marc',
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam
    }
};

/*
function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield team.testingTeam.lead;
    // const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    // yield* testingTeamGenerator;
    yield* team.testingTeam;
}
*/

/*
    function* TestingTeamIterator(team){
        yield team.lead;
        yield team.lead;
    }
*/
const names = [];
for (let name of engineeringTeam){
    names.push(name);
}
/*
for (let name of TeamIterator(engineeringTeam)){
    names.push(name);
}
*/

console.log(names);


/// USING RECURSION WITH GENERATORS  /// 

class Comment {
    constructor(content, children){
        this.content = content;
        this.children = children;
    }

    // using generators here
    *[Symbol.iterator](){
        yield this.content;
        for (let child of this.children){
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment',  []),
    new Comment('bad comment', []),
    new Comment('meh', [])
]
const tree = new Comment('Great post!', children);
console.log(tree);

const values = [];
for(let value of tree){
    values.push(value);
}
console.log(values);
