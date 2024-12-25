# Set Up An Express App With Passport Local Strategy And A PostgresQL Database

## 🛠️ Prerequisites

- Nodejs
- Npm
- PostgresQL RDBMS
- Git

## 🐘 Start The PostgresQL Service

```bash
sudo systemctl start postgresql # Command to start the service in Arch. (Find the one for your OS.)
```

## 📁 Set Up The Repo

Clone this repo:

```bash
git clone git@github.com:IgnacioGandur/set-up-passport-local.git
```

Cd into the repo:

```bash
cd set-up-passport-local/
```

Install the needed packages from the `package.json` file:

```bash
npm install
```

## Set Up The Database And Tables For Your Project

(I will use the `psql` CLI)

Enter the `psql` CLI:

```bash
psql
```

(Withing the `psql` CLI) Create the database for your project.

```bash
create database YOUR_DATABASE_NAME;
```

Connect to your newly created database:

```bash
\c YOUR_DATABASE_NAME;

```

Within the `psql` CLI run the meta-command to create the "users"
table from the `createUsersTable.sql` file (or create your own table):

```bash
\i ./db/createUsersTable.sql # The "\i" meta-command it's used to run an SQL command from a file.

```

The "users" table only starts with a "username" and "password" columns.
(You can modify it later accordingly to your app's needs)

Now create the tables to store the user's sessions:
(Just let `connect-pg-simple` take care of it or go deeper into it's configuration [here](https://www.npmjs.com/package/connect-pg-simple) )

```bash
\i ./node_modules/connect-pg-simple/table.sql
```

At this point you have all the database-related steps ready for your app.
A "users" table for to store your users and a "session" table to store your user's sessions.

## ⚙️ Configure Your `.env` File

Change the name of the `.env.example` file to just `.env`.

Provide the following variables to your `.env` file:

- `NODE_ENV # Either "production" or "development". This will manage what connection string will be used when creating the pg pool.`
- `DEVELOPMENT_CONNECTION_STRING # Your local PostgresQL connection string for development.`
- `PRODUCTION_CONNECTION_STRING # The production connection string provided by your database hosting service.`
- `SECRET # To hash your user's sessions before storing them in the 'session' database.`

## 🧪 Test If Everything Is Working Correctly

Run the `npm run dev` command from your bash terminal.

Open [http://localhost:8080/](http://localhost:8080/) in your browser.

Go to [http://localhost:8080/register](http://localhost:8080/register),
create a new user, after creating it,
you will be redirected to [http://localhost:8080/login](http://localhost:8080/login),
log in entering your username and password.
If everything it's working correctly,
you should be redirected to the index page
and able to see the following message:
"You are logged in! Nice."

## 💫 Build Your App
