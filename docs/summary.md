# Summary of what we talked about

These summaries are not meant to be comprehensive, and it will probably only make sense to you if you have attended the session.

## Day 1 -- 2023-07-26

### Learning Objectives

- Basics of client-server interaction on the internet
- How to setup a backend project with NodeJS
- First steps with Express.js

### Detailed Notes

- Basics of client-server interaction on the internet
  - Discuss the difference and similarities between different HTTP clients
    - Web Browser (Chrome, Firefox, ...)
    - GUI API Tools (Postman, Insomnia, HTTPie, ...)
    - Command Line Tools (such as `curl`)
  - Looking at some of the HTTP Headers
    - most of them are not important to you
    - what is relevant to notice is [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
      - provides the data/media type of the HTTP response
      - this can indicate that it's HTML, JSON, some image, just plain text, etc.
  - Example: Note the differennce in the responses of
    - https://examplecat.com/
    - https://examplecat.com/cat.png
    - https://examplecat.com/cat.txt
  - A URL can have a port specified, e.g. http://localhost:3000/ or
    - this can be left out, if it's a well-known standard port. That's why you never saw it before with URLs in the browser
      - for example https://examplecat.com:443/ is equivalent to https://examplecat.com/
- How to setup a backend project with Node.js
  - you can set up a new project with calling [`npm init`](https://docs.npmjs.com/cli/v9/commands/npm-init) inside your desired project folder
    - it's a tool to create a `package.json` for you, asking for the most important details upfront
    - when you run `npm init`, you will get a couple of questions to fill out. Pressing enter without typing anything will give you the default value (empty or denoted by parentheses `(...)`)
      - look at the resulting `package.json`
- First steps with [Express.js](https://expressjs.com/), a web framework
  - create a server app that doesn't really do anything but listen on port 3000
    - note the difference between trying to access e.g. http://localhost:3000 ("Cannot GET /") vs. http://localhost:3001 ("This site can’t be reached")
  - create a server app that has one endpoint at the root level `/`
  - seeing it deployed online (it really is a server!) with https://runkit.com
    - check out the hello-world example [here](https://expressjs.com/en/starter/hello-world.html) and click the RunKit URL

## Day 2 -- 2023-07-28

### Learning Objectives

- What entails a Node.js package
- Intro to what an API is using JSON as data format
- Connect express with mysql and get results through API

### Detailed Notes

- What entails a Node.js package
  - **recap exercise** Initialize a new node project called `express-json-demo` and make sure that express is installed for that project
    - **solution** These are the steps you could do in the terminal to reach this goal
      1. `mkdir express-json-demo`
      2. `cd express-json-demo`
      3. `npm init`
         - just press enter for all questions, until it writes the `package.json` to disk
         - but: read along! It describes what's happening.
      4. `ls`
         - intermediate observation: only a `package.json` should exist in our folder
      5. `npm install express`
      6. `ls`
         - final observation: the `npm install ...` command added a `package-lock.json` and a `node_modules` subfolder
  - the `package.json` contains, in `dependencies`, the information on every package name that _you_ are using in the project (and a "version pattern")
  - the `package-lock.json` contains all package names and specific version of every dependency (notice that this is muuch more than what's in `package.json`)
  - the `node_modules` folder contains the actual code.
    - it can always be deleted when something goes wrong. restore it with a plain `npm install`.
    - it should be ignore by git (via `.gitignore`)
- Intro to what an API is using JSON as data format

  - [API](https://en.wikipedia.org/wiki/API) stands for Application Programming Interface and is meant for computers to communicate with each others
  - [JSON](https://en.wikipedia.org/wiki/JSON) stands for JavaScript Object Notation
    - while it was created as a subset of JavaScript, it's language agnostic and can be seen in many non-JavaScript APIs
    - it's a possible dataformat used in APIs because it's easy to grasp and, while mainly for computers, also human-readable
  - there's a difference between using express' `response.send` and `response.json` => the latter always produces a JSON response
    - for JSON the `Content-Type` will be something like `application/json`, which indicates that this is meant to be consumed by an application.
  - **recap exercise** Write an express app that has three endpoints, one for each word ("hello", "thankyou", "happy"), and a fourth endpoint for statistics
    - e.g. `/hello`, which greets the user and tracks the number of times it was visited
    - `/statistics` which provides machine readable (API!) statistics in the following format:
      ```json
      {
        "thankyouVisits": 3,
        "helloVisits": 5,
        "happyVisits": 41
      }
      ```

- Connect express with mysql and get results through API
  - make sure you remember your mysql credentials, as you will need it in the next steps
    - in this repo we'll assume it's `root`/`root` (a password that should only be used, if you work on a development / non-productive environment)
  - in a first step we just used Node.js together with the `mysql2` package to read from the database (without using it in express.js)
  - in a next step, it's possible to use both `express` and `mysql2` at the same time
  - **recap exercises**
    - write an endpoint called `countries` that returns the first 10 countries as a JSON list
    - write an endpoint called `randomCountry` that returns a random country as JSON
    - write an endpoint called `kenyanLanguages` that returns a JSON list with all languages that are spoken in Kenya ordered by their percentage

## Day 3 -- 2023-07-31

- Why do we need error handling with MySQL (e.g. [here](https://github.com/hamburgcodingschool/fullstack-2023-2_nodejs/blob/main/code/day-02/3-hello-mysql/app.js#L16-L19))
  - if we don't do it, then it will go by silently and we have no idea what's wrong
- Is it optional to add logging in the `app.listen` callback?
  - yes, but here as well it's very helpful to have some feedback on how the app is behaving (whether it started or not)
- Work on Homework 2
- Introduction to the Request (`req`) part of a GET request in express
  - query parameters are just one single way of providing flexibility
- In general, a parameter is something very flexible that carries a value.
  - it can be a parameter of a javascript function
  - or the parameter as part of the URL
  - there's no predefined "rule" of how you have to use it
    - in reality a query parameter _could_ be used for DB request, but it's not necessarily the case

## Day 4 -- 2023-08-02

- Discuss Homework 3 and get the first steps going for everyone
- Route parameters (or URL parameters) in Express
- What is the difference between a route/path parameter (`req.params`) and a query parameter (`req.query`)
  - whiteboard, see [here](2023-08-02-whiteboard.jpg)

## Day 5 -- 2023-08-04

- re-iterated on what backend development even is. Connection between server and client. How the backend is an HTTP Server, but a MySQL Client.
- discussed first part of Homework 1: Using Fetch to OpenWeatherMap.
- discussed Homework 3: Using Query Parameters extensively
