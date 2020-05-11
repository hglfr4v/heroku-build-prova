'use strict';


/**
 * Login
 * API for the login
 *
 * username String 
 * password String 
 * no response value expected for this operation
 **/
exports.usersLoginPOST = function(username,password) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get user information
 * API to  get  thw information on the specific user
 *
 * returns User
 **/
exports.usersMeGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "name" : "Francesco",
  "address" : "DEIB",
  "credicard" : "fjwfengton40302"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

