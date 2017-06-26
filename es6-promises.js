// Creating promises
// promise can't be declared with const
promise = new Promise((resolve, reject) => {
    //resolve();
    // reject();
    setTimeout(() => {
        reject();
        //resolve();
    }, 3000);

}); // no library, native from ES6 as long as the browser support it

promise.then(() => {
    console.log('finally something finished');
}).then(() => {
    console.log('I was also part of the team');
}).catch(() =>{
    console.log("Uh Oh!!");
});


let url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
    .then(response => console.log(response))
    .catch(error => console.log('BAD', error));
//    .then(response => response.json)
//    .then(data => console.log(data));


// FETCH is fantastic: But does not behave as expected in 3rd party libraries like axios etc ...
