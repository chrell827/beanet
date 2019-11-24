CREATE DATABASE bamazon;

use bamazon;

CREATE TABLE products (
  -- unique id --
  item_id INTEGER(50) AUTO_INCREMENT NOT NULL,
  -- product name --
  product_name VARCHAR(30) NOT NULL,
  -- department name --
  department_name VARCHAR(30) NOT NULL,
  -- product price --
  price FLOAT(10) NOT NULL,
  -- stock quantity of item -- 
  stock_quantity INTEGER(10),
  -- sets the unique id --
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("GPU", "Electronics", 399.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("CPU", "Electronics", 199.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("CPU Case", "Electronics", 89.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Assorted Candy", "Food", 9.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("To Kill a Mockingbird", "Books", 89.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Banana", "Food", 1.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Sweater", "Clothing", 19.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Phone Case", "Cellphones", 19.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Backpack", "Travel", 39.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Fountain pen", "Office", 17.99, 6);





