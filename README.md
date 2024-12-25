# Express + Passport.js Local Strategy + PostgresQL Database

## 🛠️ Prerequisites

Have the following packages installed in your machine:

- Nodejs
- Npm
- PostgresQL RDBMS
- Git

## 🐘 Start The PostgresQL Service

```bash
sudo systemctl start postgresql
```

> [!NOTE]
> The above command is for Arch, find the one for your OS.

## 📁 Set Up The Repo

Clone this repo:

```bash
git clone git@github.com:IgnacioGandur/express-passport-local-pg-setup.git
```

Cd into the repo:

```bash
cd express-passport-local-pg-setup/
```

Install the needed packages from the `package.json` file:

```bash
npm install
```

## 💾 Setting Up The PostgresQL Database

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

> [!NOTE]
> The `\c` meta-command is used to connect to a PostgresQL database.

Once connected to your project's DB, use the `\i` meta-command  
to create the "users" table from the `createUsersTable.sql` file

> [!TIP]
> The "users" table only starts with the "username" and "password" columns.  
> You can modify the `createUsersTable.sql` file now to adjust the table to  
> your project's needs before running this command. You can also modify the  
> table later, depends on you.

```bash
\i ./db/createUsersTable.sql
```

> [!NOTE]
> The `\i` meta-command it's used to run an SQL command from a file.  
> It takes the file path as an argument.

Now create the "session" table to store the users' sessions:
(Just let `connect-pg-simple` take care of it or go deeper into it's configuration [here](https://www.npmjs.com/package/connect-pg-simple) )

```bash
\i ./node_modules/connect-pg-simple/table.sql
```

At this point you have all the database-related steps ready for your app.
A "users" table to store your users and a "session" table to store your users' sessions.

## ⚙️ Configure Your `.env` File

Change the name of the `.env.example` file to just `.env`.

Provide the following variables to your `.env` file:

- `NODE_ENV` Either "production" or "development". This will manage what  
  connection string will be used when creating the pg pool.
- `DEVELOPMENT_CONNECTION_STRING` Your local PostgresQL connection string for  
  development.
- `PRODUCTION_CONNECTION_STRING` The production connection string provided by  
  your database hosting service.
- `SECRET` To hash your user's sessions before storing them in the 'session' database.

> [!NOTE]
> The `.env.example` file contains an example of the structure of a connection string.
> [!CAUTION] > **REMEMBER TO CHANGE THE `SECRET` ENVIRONMENT VARIABLE.**

## 🧪 Test If Everything Is Working Correctly

1. Run the `npm run dev` command from your bash terminal.
2. Open [http://localhost:8080/](http://localhost:8080/) in your browser.
3. Go to [http://localhost:8080/register](http://localhost:8080/register) and register a new user.
4. Login with the credentials of the newly created user in
   [http://localhost:8080/login](http://localhost:8080/login)

If everything is working correctly, you should be redirected to  
the index page and able to see the following message:
"You are logged in! Nice."

> [!IMPORTANT] > **Remember to change the following things if your are going to use this  
> repo as a template:**
>
> - Delete the `.git` file (if present ) and create your own.
> - Change the repository name to your project's name.

## 💫 Start Working On Your Project
