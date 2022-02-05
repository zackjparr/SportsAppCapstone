using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sporsketball.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sporsketball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserDAL userDB = new UserDAL();

        //localhost/api/user/login/
        [HttpPut("login")]
        public bool Login(User u)
        {
            bool userFound = userDB.Login(u);
            return userFound;
        }

        //localhost/api/user/current
        [HttpGet("current")]
        public User GetCurrentUser()
        {
            User u = userDB.GetCurrentUser();
            return u;
        }

        //localhost/api/user/logout
        [HttpGet("logout")]
        public int Logout()
        {
            int currUser = userDB.LogOut();
            return currUser;
        }

        //localhost/api/user/update/{id}
        [HttpPut("update/{id}")]
        public void UpdateUser(User u)
        {
            userDB.UpdateUser(u);
        }

        //localhost/api/user/create
        [HttpPost("create")]
        public void CreateUser(User u) 
        {
            userDB.CreateUser(u);
        }
    }
}
