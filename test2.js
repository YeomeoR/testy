const express = require('express');
// initialise app
const app = express();

const data = require('./data');

// asign a route
app.use('/', (req, res) => {
    const filters = req.query;
    const filteredInvestments = data.filter(investments => {
        let isHighest = true;
        for (key in filters) {
            console.log(key, investments[key], filters[key]);
            isHighest = isHighest && investments[key] == filters[key];
        }
        return isHighest;
    })
    res.send(filteredInvestments);
})

const PORT = 5000;
// listen on PORT 5000
app.listen(5000, () => {
    console.log(`listening on PORT ${PORT} || 5000`)
})
