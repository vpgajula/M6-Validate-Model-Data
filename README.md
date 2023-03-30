# M6-Validate-Model-Data
Module 6: Validate Model Data Using Validator Library

Step 1:
Create the empty repo in Github.com

Step 2:
Clone the empty repo on to Github desktop and open it in Visual Studio Code
README.md file is created

Step 3:
Open the command (cmd) terminal and install the following dependencies using the commands -

    body-parser: npm install body-parser
    dotenv: npm install dotenv
    express: npm install express
    mongoose: npm install mongoose
    morgan: npm install morgan
    nodemon: npm install nodemon

All the project dependencies are installed and the package-lock.json file is created.

Step 4:
Create the following files and folders -

Files -
    server.js
    config.env >> This is where we define the environment variables like -
        NODE Environment
        PORT Number
        DATABASE Connection Details
        DATABASE Server Details
    app.js

Folders - 
    controllers
        bankController.js >> This is the controller file where the code for each route resides.
            Get Account By ID
            Get All Accounts
            Create New Account
            Update Account By ID
            Delete Account By ID
    dataBaseManager
        loanDBContext.js >> This is where all the generic logic like filters, sort, paginate exists.
    models
        bankAccountModel.js >> This is the mongoose schema / model which contains the document layout with validations 
    routes
        bankRoutes.js >> This is the routes.js file where various routes are defined like '/' or '/:id'

Step 5:
Run the app by executing the command 
    nodemon server.js

Step 6:
Verify that you see the messages - 

App running on port 3005...
MongoDB connection succeeded with IFT-598-2023-BANK...

Step 7:
Test the application using Postman

    Validate all CRUD functionality using the routes created.
    Verify the Request and Response data, Response Codes.
    Verify that the documents are created, updated, or deleted in the MongoDB collection as your perform various CRUD actions.
    Verify the error handling functionality to validate the mongoose schema.

Step 8:
    Capture all the screenshots
    Your project is successfully completed.



