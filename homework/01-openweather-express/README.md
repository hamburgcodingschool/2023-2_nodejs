# Exercise 1: Openweather API with Express

1. Create a new node.js app called openweather-express (and set it up accordingly).
2. Write an endpoint called `temperatureHamburg` that uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch the information about Hamburg and provide only the current temperature as a plain number (the `Content-Type` of your response should be `application/json`).
3. Write an endpoint called `hottestCity` that uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch the data from five cities of your choice (e.g. Alexandria, Buenos Aires, Chicago, Dublin, Essen) and return the _name_ of the city where it currently "Feels Like" the hottest.

Note: Task 3 is much more difficult than task 2, but don't let that discourage you. That is intentional, I don't expect you to finish everything. Start with one thing, then try to solve the next, step by step.

## Hints

There are a couple of sub-tasks in task 3 that you could approach independently of each other:

- How can you make sure that you don't need to write the URL so many times (for each of the cities)?
- How do you get the results of multiple API requests to the OpenWeatherMap API? (this has to do with resolving multiple `fetch` promises)
  - it could be easier to start with 2 instead of 5 and then extend from there
- When you have an array with objects that have two fields, e.g. `city` and `feels_like`, how do you get the `city` for the object with the highest `feels_like`?
  - for example, write a function that takes this data:
  ```json
  [
    {
      "city": "Alexandria,eg",
      "feels_like": 35.6
    },
    {
      "city": "Buenos Aires,ar",
      "feels_like": 10.27
    },
    {
      "city": "Chicago,us",
      "feels_like": 19.03
    },
    {
      "city": "Dublin,ie",
      "feels_like": 15.7
    },
    {
      "city": "Essen,de",
      "feels_like": 19.35
    }
  ]
  ```
  and returns `"Alexandria,eg"`
  - how would you even build that list of objects based on the results of the OpenWeatherMap API results?
