'use strict';
let sqlDb;

exports.booksDbSetup = function(connection){
  sqlDb = connection;
  console.log("Checking if the book tables exists");  
  return sqlDb.schema.hasTable("books").then( exists => {
    if(!exists){
      console.log("not exist, create one");
      return sqlDb.schema.createTable("books", table => {
        table.increments();
        table.text("title");
        table.text("author");
        table.float("value");
        table.text("currency");
        table.enum("status", ["available", "soldout"]);
      });
      
    }else {
      console.log("it exists");
      
    }
  })
  
}

/**
 * Findbook by ID
 * Returns the  wanted book
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.booksBookIdGET = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : "Tolkien",
  "price" : {
    "currency" : "eur",
    "value" : 60274.56580324785
  },
  "id" : 0,
  "title" : "The  Lord  of  Rings",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Books available in the inventory
 * This is a  detailed descriptionof the API
 *
 * limit Integer maximum number of results per page (optional)
 * offset Integer Pagination offset. Default is 0 (optional)
 * search String Generic text search (optional)
 * returns List
 **/
exports.booksGET = function(limit,offset,search) {
  return sqlDb("books")
  .limit(limit)
  .offset(offset)
  .then((data)=>{
    return data.map(e =>{
      e.price = {value: e.value, currency: e.currency}
    })
  })
}

