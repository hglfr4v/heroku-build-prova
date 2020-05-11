let { booksDbSetup } = require("./BookService");

const sqlDbFactory = require("knex");

let sqlDb = sqlDbFactory({
    client: "pg",
    debug: true,
    connection: process.env.DATABASE_URL,
    ssl:true
});

function setupDataLayer(){
    console.log("setting up data layer");
    return booksDbSetup(sqlDb);
}

module.exports = {
    database: sqlDb,
    setupDataLayer
}