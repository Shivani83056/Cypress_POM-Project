Introduction

This project is an automation testing framework built using Cypress and the Page Object Model (POM) design pattern. The framework is designed to enhance maintainability and reusability by organizing test scripts efficiently.

Project Type

Automation Testing using Cypress and POM

Deployed App

N/A (This project is for automation testing purposes)

Directory Structure

|-- cypress/
|   |-- e2e/
|   |   |-- pages/        # Page Object Model classes
|   |   |   |-- CartPage.js           # Cart Page POM
|   |   |   |-- ProductListingPage.js # Product Listing Page POM
|   |   |   |-- CheckoutPage.js       # Checkout Page POM
|   |   |-- tests/        # Test cases
|   |-- fixtures/         # Test data
|   |-- support/          # Custom commands and utilities
|-- cypress.config.js     # Cypress configuration file
|-- package.json          # Project dependencies
|-- README.md             # Project documentation

Features

Implemented Page Object Model (POM) for better maintainability

Cypress framework for end-to-end testing

Custom commands for reusable interactions

Fixtures for managing test data

Assertions using Cypress built-in commands

Includes test coverage for:

Cart Page

Product Listing Page

Checkout Page

Design Decisions & Assumptions

POM structure is followed for scalability

Test cases are independent and follow best practices

Configuration is managed in cypress.config.js

Installation & Getting Started

Prerequisites

Node.js (Latest LTS version recommended)

npm or yarn installed

Steps to Install

Clone the repository:

git clone https://github.com/Sushant-2106/CypressProject.git

Navigate to the project directory:

cd CypressProject

Install dependencies:

npm install

Usage

Running Tests

To run tests in headless mode:

npx cypress run

To open Cypress Test Runner:

npx cypress open

Credentials

N/A (No authentication required for this project)

APIs Used

No external APIs are used

Technology Stack

Cypress

JavaScript

Mocha & Chai (for assertions)

Author

Shivani Singh
