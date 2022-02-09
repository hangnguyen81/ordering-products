/**
Create tables in database on EleplantSQL 
Database name: ijctmbnv
*/

-- Table: products
DROP TABLE IF EXISTS products;

CREATE TABLE products (
    product_code VARCHAR(5) PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price_per_unit NUMERIC(5,2)
);

INSERT INTO products (product_code, product_name, price_per_unit)
VALUES ('P1','Milk', 1.99), 
       ('P2','Sour Milk', 2.05),
       ('P3','Cream',3.59),
       ('P4','Yoghurt',4.99),
       ('P5','Buttermilk',3.1);

-- Table: number_of_batch
DROP TABLE IF EXISTS number_of_batch;

CREATE TABLE number_of_batch (
    product_code VARCHAR(5) PRIMARY KEY,
    batch_quantity INT,
    FOREIGN KEY (product_code)
      REFERENCES products (product_code),
);

INSERT INTO number_of_batch (product_code, batch_quantity)
VALUES  ('P1',20),
        ('P2', 500),
        ('P3', 40),
        ('P4', 234);

-- Table: batch_size
DROP TABLE IF EXISTS batch_size;

CREATE TABLE batch_size(
    batch_size_code VARCHAR(5) PRIMARY KEY,
    size INT
)
INSERT INTO batch_size (batch_size_code, size)
VALUES  ('BS1', 20),
        ('BS2', 30),
        ('BS3', 40),
        ('BS4', 50),
        ('BS5', 100),
        ('BS6', 20),
        ('BS7', 50);

--Table: products_batch_size
DROP TABLE IF EXISTS products_batch_size CASCADE;

CREATE TABLE products_batch_size (
    product_code VARCHAR(5),
    batch_size_code VARCHAR(5),
    PRIMARY KEY (product_code, batch_size_code),
    FOREIGN KEY (product_code)
      REFERENCES products (product_code),
    FOREIGN KEY (batch_size_code)
      REFERENCES batch_size (batch_size_code) 
);

INSERT INTO products_batch_size (product_code, batch_size_code)
VALUES  ('P1', 'BS6'),
        ('P2', 'BS1'),
        ('P2', 'BS2'),
        ('P2', 'BS3'),
        ('P3', 'BS4'),
        ('P3', 'BS5'),
        ('P5', 'BS7');

--Table: orders
DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders (
    order_code SERIAL PRIMARY KEY,
    date_of_order DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO orders (date_of_order)
VALUES ('2022-02-08')

--Table: products_orders
DROP TABLE IF EXISTS products_orders CASCADE;

CREATE TABLE products_orders(
    order_code SERIAL NOT NULL,
    product_code VARCHAR(5) NOT NULL,
    batch_size_code VARCHAR(5) NOT NULL,
    batch_size INT NOT NULL,
    batch_quantity INT NOT NULL,
    PRIMARY KEY (order_code, product_code),
    FOREIGN KEY (order_code)
        REFERENCES orders (order_code),
    FOREIGN KEY (product_code)
        REFERENCES products(product_code)
);

INSERT INTO products_orders (order_code,product_code, batch_size_code, batch_size, batch_quantity)
VALUES  (1, 'P1','BS6',20, 20),
        (1, 'P2','BS3',40, 500);