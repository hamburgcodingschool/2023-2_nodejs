# Solution

1. observations:
    - `/getCity` provides an array containing a single city. Reloading show that it's kind of random.
    - `/getCity?cityID=3069` provides the city of hamburg always
    - `/getCity?countryCode=DEU` leads to an error
2. read the code after you have tried it. Why did it fail?
    - there's a `TODO` in the code instead of a proper query, so it crashes
3. see `solution.js`
4. if we provide both parameters, then `countryCode` gets ignored, e.g. `/getCity?cityID=3069&countryCode=USA` will always provide Hamburg and nothing from USA.

As for the additional things to try, there's no solution provided.