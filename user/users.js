//All the functions are being exported from this file to the index file.
/*These functionalities could have been added to the main file but just to maintain clarity they were
added here. Moreover, the assignment stated we had to implement methods addUser, getUser etc so following that the
functions were created here in this file.
*/

// user list

let user =[{
  name: "Ahsan Ayaz",
  email: "ahsan.ayaz@iomechs.com",
  id: 1
},
 {
  name: "Siraj Ul Haq",
  email: "sirajulhaq@koderlabs.com",
  id: 2
}]

// exporting all functions
module.exports = {
  //get
  getUsers: function()
  {
    return user;
  },
  getUserById: function(id)
  {
      const userFound = user.find(c => c.id === parseInt(id));
      if(!userFound)
      {
          return false;
      }
      else
        return userFound;
  },
  //add
  addUser: function(newUser)
  {
    newUser.id=user.length+1;
    user.push(newUser);
    return user;
  },
  //delete
deleteUser: function(id)
{
    const userFound = user.find(c => c.id === parseInt(id));
    if(!userFound)
    {
        return false;
    }
    else
    {
      const i = user.indexOf(userFound);
      user.splice(i, 1);
      return user;
    }

},

//update
updateUser: function(id, existingUser)
{
    const userFound = user.find(c => c.id === parseInt(id));
    if(!userFound)
    {
        return false;
    }
    const i = user.indexOf(userFound);

        if(existingUser.name)
        {
            user[i].name = existingUser.name;
        }
        if(existingUser.email)
        {
            user[i].email = existingUser.email;
        }
        return userFound;
}


};
//references
//https://www.youtube.com/watch?v=pKd0Rpw7O48
