const express = require("express");
const app = express();

const looger = (req, res, next) => {
    console.log("Request logs")
    next();
}

const auth = (req, res, next) => {
    const isValidUser = false; // Replace with your authentication logic
    if (isValidUser) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}


app.get('/users', looger, (req, res) => {
    res.send('Get all users');
})

app.post('/users', auth, (req, res) => {
    res.send('Create a new user');
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
})