# My steps towards a solution

1. `npm init -y` in this folder
2. `npm i express mysql2` to `i`...nstall the library needed
3. create `index.js` for the app by copying some of the previous ones
4. add the endpoints, it can be just return something static
5. now we have two challenges to solve:
   - how do we get the city with a specific ID? (answer: use `WHERE cities.ID=...`)
   - how to we let the ID increase every time? (answer: use a global variable `nextCityID` to keep track)

## Follow-up questions

- What happens if the ID does not exist?
