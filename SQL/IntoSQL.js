//  Creation of Table

//  create table Product 
//  (
//     PID  int not null,
//     Name varchar,
//     Address VARCHAR,
//     Price MONEY,
//     primary key (PID)
//  )

// --------------------------------------------------------------

// Insertion of Data

// insert into Product
// value (1,"Ram","India",21.3)

// --------------------------------------------------------------

//Selection of Data

// select * from product where pid=1

// --------------------------------------------------------------

//Updating Data 

// update  product
// set price = 2.4
// where pid=2

// --------------------------------------------------------------

//Adding a new column to table

//alter table product
//add Stock int

// --------------------------------------------------------------

//Deleting a row in a table

//Delete from product
//where id=2

// --------------------------------------------------------------

//Linking the forign key

//CREATE TABLE Orders (
//     OrderID int NOT NULL,
//     OrderNumber int NOT NULL,
//     PersonID int,
//     PRIMARY KEY (OrderID),
//     FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
// );

// --------------------------------------------------------------

//Same while ALter

// ALTER TABLE Orders
// ADD FOREIGN KEY (PersonID),
// REFERENCES Persons(PersonID)

// --------------------------------------------------------------

//Using Inner Join

// SELECT orders.order_number,products.name,products.price,products.stock
// FROM orders
// INNER JOIN products ON orders.product_id == products.id

// --------------------------------------------------------------

