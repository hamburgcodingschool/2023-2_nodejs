# Homework 4: Party Guest List

## Preparation (this is a refresher on creating data in a DB)

We want to
- create a new database called `party`
- inside that, create a table `guests` with the fields as discussed
- create a number of guests

Inside a mysql commandline do the following
```sql
CREATE DATABASE party;
CREATE TABLE guests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    age  INT,
    invited BOOL,
    accepted_invite BOOL
);
INSERT INTO guests (email, first_name, last_name, age, invited, accepted_invite) VALUES
('john123@example.com', 'John', 'Smith', 33, false, false),
('emily22@example.com', 'Emily', 'Johnson', 20, false, false),
('david87@example.com', 'David', 'Brown', 51, false, false),
('lisa789@example.com', 'Lisa', 'Davis', 17, true, true),
('alex34@example.com', 'Alex', 'Johnson', 13, false, false),
('sarah567@example.com', 'Sarah', 'Wilson', 29, true, false),
('michael99@example.com', 'Michael', 'Taylor', 18, true, false),
('jennifer76@example.com', 'Jennifer', 'Anderson', 25, true, true),
('robert45@example.com', 'Robert', 'Martinez', 45, false, true),
('natalie88@example.com', 'Natalie', 'Walker', 27, true, false);
```

When you have copied over these things on your database, you should be good to go for the actual tasks.

## Exercise
In an express app
1. write a GET endpoint to retrieve all guests
2. write a GET endpoint to retrieve all not yet invited guests
3. write a GET endpoint to retrieve all guests that are younger than 18
4. write a GET endpoint to retrieve one guest with id 5
5. think about the different ways to ask for and return the results. Could you maybe use query parameters (`req.query`) or route parameters (`req.route`)?