# 13 Object Relational Mapping (ORM): E-commerce Back End

## Background

Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.


## Specific Task

The challenge is to build the back end for an e-commerce site. The application takes a working Express.js API and configures it to use Sequelize to interact with a MySQL database.

Because the application is not deployed, a walkthrough video is provided that demonstrates its functionality and that all acceptance criteria are met. A link to the video is provided and added at the end of this README.


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
  SO THAT my company can compete with other e-commerce companies
```


## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
  THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
  THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
  THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
  THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
  THEN I am able to successfully create, update, and delete data in my database
```


## Mock-Up

The following animations were provided with the assignment and show examples of the application's API routes being tested in Insomnia. 
Note: the finished application video provides parallel walkthroughs in Insomnia to demonstrate these same GET, POST, PUT, and DELETE routes.

The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The final animation shows the POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

Note: The walkthrough video for the finished application also demonstrates the POST, PUT, and DELETE routes for products and tags as tested in Insomnia.


## Getting Started

Following the starter-code, the application installs mysql2 and sequelize to connect the Express.js API to the MySQL database. The `schema.sql` file in the `db` folder creates the database using MySQL shell commands. In addition, the dotenv package is installed to use environment variable to store sensitive data, such as the MySQL username, password, and database name.


### Database Models

The following information outlines the requirements for the four Models (Category, Product, Tag, ProductTag) of the database:

* `Category`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `category_name`
    * String
    * Doesn't allow null values

* `Product`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_name`
    * String
    * Doesn't allow null values

  * `price`
    * Decimal
    * Doesn't allow null values
    * Validates that the value is a decimal

  * `stock`
    * Integer
    * Doesn't allow null values
    * Set a default value of 10
    * Validates that the value is numeric

  * `category_id`
    * Integer
    * References the `category` model's `id` 

* `Tag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `tag_name`
    * String

* `ProductTag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_id`
    * Integer
    * References the `product` model's `id`

  * `tag_id`
    * Integer
    * References the `tag` model's `id`

### Associations

The Sequelize code also executes association methods on the Models to create the following relationships between them:

* `Product` belongs to `Category`, as a category can have multiple products but a product can only belong to one category.

* `Category` has many `Product` models.

* `Product` belongs to many `Tag` models. Using the `ProductTag` through model, allow products to have multiple tags and tags to have many products.

* `Tag` belongs to many `Product` models.


### Fill out the API Routes to Perform RESTful CRUD Operations

The application completes the starter-code routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete `CRUD` operations using the Sequelize models.


### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.


### Sync Sequelize to the Database on Server Start

Additional code is written in `server.js` to sync the Sequelize models to the MySQL database on server start.


## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.
Link to walkthrough video: vimeo...
https://vimeo.com/695791916/f153771905


* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
URL of GitHub repository: https://github.com/mcleanGit/ecommend

## Additional Note concerning the Repo
* For information: I inadvertently retained the Develop *folder* (not a git branch) from the starter-code and worked within it, pushing a number of commits over several days. Realizing that the paths *in and to* the repo needed to be changed, I ended up making the adjustments as several global file moves and commits over a short period (2022-03-30) to change the destination of all the files and folders to `main`. Those commit messages typically say ("worked in Develop folder, moved to repo when completed"). This filepath correction unfortunately now fails to reflect the numerous step-by-step commits made earlier, although a number of subsequent changes and commits occurred subsequently in completing the project.


- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
