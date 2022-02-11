# Home assignment: Produce order for given products

## Description
* Created an API to provide data as input (https://warm-wildwood-54711.herokuapp.com/api/products) with the criteria of **default batch_size** and **number of batches**
* Created UI to chose products, to determine whether to use max or min batches in the order
* When press Place order, the function **computeOrder** will produce an order based on criteria of max or min batch.
* Data of order also saves in database 

## Features of App
- [x] Compute order for each given products with all required rules
- [x] Display products and related information from database
- [x] Add/remove items from cart (before placing order)
- [x] Option for determining whether to use max or min batches in the order

## Technology choices
This project was built with PERN tech stack (Postgresql, Express, React and Nodejs).

## Prerequisites
* Node.js with npm shoulde be installed in local computer, version 14.17.4 (node.js) - 6.14.14(npm) or higher, [Download node.js included npm here](https://nodejs.org/en/download/)
* A free account in ElephantSQL (a PostgreSQL database hosting service) should be registered [Register here](https://www.elephantsql.com/plans.html); Create an instance to host database of app (e.g: assignment)
* The project works on Windows and it has not tested running on Linux yet.

## Configurations
* Open Git Bash or PowerShell.
* Change the current working directory to the location where you want the cloned directory.
* Clone the repository: `git clone https://github.com/hangnguyen81/ordering-products.git`

### Create database, tables and example data in ElephantSQL
* Access instance (e.g: assignment) in ElephantSQL, choose Browser
* Go to **server/database** folder, open file **database.sql**, copy all sql commands (ctrl+A) and paste into textbox *SQL query* in Browser function of ElephantSQL. Press **Excecute** 

### Build frontend into production
* Go to **client** folder
* Run `npm install` to install all dependencies 
* Run command `npm run build` to build the frontend UI for production to the build folder.
* Copy/paste **build** folder to **server** folder

### Run the project
* Go to **server** folder
* Run `npm install` to install all dependencies
* Create file `.env` with connection to your PostgreSQL database and PORT: Open ElephantSQL -> Choose instance (e.g assignment) -> Details -> Copy **URL** to .env file. Example content of .env file
````
POSTGRES_DB_URL=URL from ElephantSQL
PORT=3003
````
* Run the project: `nodemon index`
* Open web browser (prefer Chrome) [http://localhost:3003](http://localhost:3003) to view it in your browser
**I already sent my own .env file to you, so you can use my ElephantSQL instance to run the app**

## Tests
### Unit test for computeOrder function in client side
* Go to **client** folder, run command `npm run test`
### API tesing in server side
* Create new instance for testing in EleplantSQL
* Go to **server** folder, open `.env`, create new environment variable for testing `TEST_POSTGRES_DB_URL=URL from ElephantSQL`)
* Run command `npm run test`

## Demo pictures of app
First view - choose products

![choose products](https://i.ibb.co/qMkn9pc/1.jpg)

Cart with chosen products

![Cart with chosen products](https://i.ibb.co/Ctcbcbq/2.jpg)

Order when using max batch

![Order when using max batch](https://i.ibb.co/1L80Xxd/3.jpg)

