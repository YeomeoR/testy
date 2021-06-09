# Database Challenge
In this folder you should find a `data.js` file. The file exports 3 arrays: `investments`, `companies` and `users`.

You can import these as:

```js
const { investments, users, companies } = require('./data.js')
```

- Write a file that will insert the data into a database, you can choose what kind of database (e.g MongoDb, MySQL, PostGres, etc.) but we currently use Mongo so bonus points for that.

- Your boss comes to you and asks you to provide him with a list of our ten biggest investors, including their full name, total amount spent and a list of the names of companies they have invested in. Write a single database query which fulfils this request.

## Notes

- When doing these tasks, you **may** find some errors, these are intentional and should be worked around in any way you see fit.
