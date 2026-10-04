const express = require("express");
const app = express();
const auth = require("./middleware/auth.middleware");
const logger = (req, res, next) => {
    console.log("Request logs")
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);
app.get('/users', (req, res) => {    
    res.send('Get all users');
})

app.post('/users', (req, res) => {    
    res.send('Create a new user');
})
app.post('/profile', auth, (req, res) => {    
    res.send('Create a new profile');
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})