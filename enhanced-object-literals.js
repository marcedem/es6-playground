function createBookShop(inventory){
    return {
        inventory: inventory,
        inventoryValue: function(){
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title){
            return this.inventory.find(book => book.title === title).price;
        }
    }
}


function createBookShop2(inventory){
    return {
        inventory,
        inventoryValue(){
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title){
            return this.inventory.find(book => book.title === title).price;
        }
    }
}


const inventory = [
    { title: 'Happy Potter', price: 35 },
    { title: 'Richest Man in Babylon', price: 45 }
];

const bookShop = createBookShop(inventory);
bookShop.inventoryValue();
bookShop.priceForTitle();

// More real world example
function saveFile(url, data){
    $.ajax({method: 'POST', url:url, data:data });
}

function saveFile2 (url, data){
   $.ajax({
        url,
        data,
        method: 'POST'
   }); 
}
const url = 'http://dummyurl.com';
const data = { color: 'red' };

saveFile(url, data);

// default argument
function makeSomeAjaxReq(url, method = 'GET'){
    return method;
}
makeSomeAjaxReq('me.com', null);    // method will NULL.
makeSomeAjaxReq('me.com', undefined); // will be reassigned to GET

// more real world example
function User(id){
    this.id = id;
}

const genereateId = () => Math.random() * 89898989;

const createAdminUser = (user = new User(genereateId())) => {
    user.admin = true;
    return user;
}