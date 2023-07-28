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
