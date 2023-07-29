# Exercise 2: Stateful Cities

Write an express app with one endpoint called `getNextCity`. It should be using `cities` table in the `world` database. When the app just started, and you call that endpoint the first time, it should give you the city with ID 1 ("Kabul" in my DB, but if you have a different one, no worries), when it's called the next time, it should give you the city with ID 2 (here: "Qandahar") and so on.

Whenever you restart the app, it's starting from city one again, but whenever someone calls the URL, then the next city should be provided.
