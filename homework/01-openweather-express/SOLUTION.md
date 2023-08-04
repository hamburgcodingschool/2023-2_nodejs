# My steps towards a solution

1. `npm init -y` in this folder
2. `npm i express` to `i`...nstall the library needed
3. create `index.json` for the app by copying some of the previous ones
4. add the two endpoints, they can be just returning something static to get started

```javascript
// ... setup ...
app.get("/temperatureHamburg", function (req, res) {
  res.json(25);
});

app.get("/hottestCity", function (req, res) {
  res.json("Buenos Aires");
});
// ... app.listen ...
```

5. task 1 is solved, I guess :D
6. to solve task 2 we need to
   1. fetch from the API by using fetch
   2. extract the temperature from the result
   3. send it to the client with `res.json`
7. to solve task 3 we'll need to
   1. ... this will be published some other time, when we talked about it ...

## Side note on the `fetch` promises

If we call the URL like this
```javascript
fetch(url).then(
  // handling response from OWM
  function (urlResponse) {
  // unpack the result to a JSON
  urlResponse.json().then(
    function (jsonResult) {
    // finally access the jsonResult here
    console.log({ temp: jsonResult.main.temp });
  });
});
```
it might be worthwhile to encapsulate it into a function, which returns the inner result like this:
```javascript
// this returns a promise with the temperature
function getTempFromURL(url) {
    return fetch(url).then(function (urlResponse) {
        return urlResponse.json().then(function (jsonResult) {
            return jsonResult.main.temp;
        });
    });
}
```
and then you can call that function like this:
```javascript
getTempFromURL(url).then(function(temperature){
  console.log(temp);
});
```
which will make it a bit easier to retrieve multiple temperatures after another (which you'll need for task 3)
```javascript
getTempFromURL(urlHamburg).then(function(temperatureHamburg){
  getTempFromURL(urlAlexandria).then(function(temperatureAlexandria){
    console.log(temperatureHamburg);
    console.log(temperatureAlexandria);
  })
});
```

## Side Note on API Keys

- an API key is often something that you want to protect like a password
- if you don't publish your solutions, it's fine to just put the API key in your code
- given that I'm publishing the code, I am using something called "Environment Variables"
- this means my solution needs to be started with setting this environment variable first.
- I do this by starting node together with the API key: `OWM_API_KEY=put_your_key_here node index.js`
- and then I can use it in the code with `process.env.OWM_API_KEY`