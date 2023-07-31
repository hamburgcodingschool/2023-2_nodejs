# Exercise 3: The World of Query Parameters

Take the application that is provided for you in this folder. (You can even just copy all files in the folder, run `npm i` followed by `npm run start` or `npm run dev` depending on your preferences and setup).

1. start the application and try it out
    - check the result of http://localhost:3000/getCity
        - check it again :D
    - check the result of http://localhost:3000/getCity?cityID=3069
    - what happens if you try http://localhost:3000/getCity?countryCode=DEU
2. read the code after you have tried it. Why did it fail?
3. implement the code that makes `?countryCode=DEU` work, such that you get a random city from Germany. Try it with other country codes.
4. what happens if you provide both parameters at the same time? Why?

Now here are a lot of ideas you could additionally try:

-   add a search for name, e.g. by adding a `name` parameter. Remember this endpoint is called `getCity`, not `getCities`, so we always want to have only one (or zero) results
-   allow combining the `name` parameter with the `countryCode` parameter (this is relevant for a city like "San Jose", "Cambridge" or again "Alexandria")
-   (more advanced) add a parameter `random`, that switches the way we choose, if there's more than one city. If you fetch for example http://localhost:3000/getCity?random=false, then it should not be random anymore, but apply a sorting of your choice
