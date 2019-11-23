var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
  //if (err) throw err;
  // run the start function after the connection is made to prompt the user
  run();
});

function run(){

  connection.query("SELECT * FROM products", function(err, results) {
    //if (err) throw err;
    // once you have the items, prompt the user for which they'd like to buy
    /*for(var i=0; i< results.length; i++)
    {
      console.log(JSON.stringify(results[i],null,2))
    }*/

    console.log(results);
    inquirer
      .prompt([
        {
          name: "choice",
          type: "input",
          message: "Enter the product id of the item you are interested in: ",
          default: Number
        },
        {
          name: "amount",
          type: "input",
          message: "How many would you like to buy?",
          default: Number
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === parseInt(answer.choice)) {
            chosenItem = results[i];
          }
        }
        
        var newQuantity = chosenItem.stock_quantity - answer.amount;
        console.log(newQuantity);
        // determine if item is in stock and can buy
        if (newQuantity >= 0) {
          
          connection.query(
            "UPDATE products SET stock_quantity = ? WHERE item_id = ?"
            [
              {
               newQuantity 
              },
               chosenItem.item_id
            ],
            function(error) {
              //if (error) throw err;
              console.log("Successfully placed order!");
              console.log("Total: " + answer.amount * chosenItem.price);
              connection.end();
            }
          );
        }
        else {
          // not enough stock
          console.log("We don't have enough of this item, sorry!");
          connection.end();
        }
      });
  });
}
