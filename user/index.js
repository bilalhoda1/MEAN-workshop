const express = require('express');
const user = require('./users');
const app = express();
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Get user
app.get('/user', (req, res) =>
{
    res.json(user.getUsers());
});

//Get user by ID
app.get('/user/:id', (req, res) =>
{
    userFound = user.getUserById(req.params.id);
    if(userFound)
    {
      res.json(userFound);

    }
    else
      {
        res.status(404).send("User with the given id does not exist.");
      }
});

//Add User or post request
app.post('/user', (req, res) =>
{
    user.addUser(req.body);
    res.json(req.body);
});

//Delete User or delete request
app.delete('/user/:id', (req, res) =>
{
    userDeleted = user.deleteUser(req.params.id);
    if(userDeleted)
    {
      res.json(userDeleted);

    }
    else
    res.status(404).send("User with the given id does not exist.");

});

//Update User or port request
app.put('/user/:id', (req, res) =>
{
    userUpdated = user.updateUser(req.params.id, req.body);
    if(userUpdated)
    {
      res.json(userUpdated);

    }
    else
    {
      res.status(404).send("Error!!!");
    }

});


const port = 3000;
app.listen(port, () =>
{
    console.log('Node server listening on port 3000...');
});

//references
//https://www.youtube.com/watch?v=pKd0Rpw7O48
