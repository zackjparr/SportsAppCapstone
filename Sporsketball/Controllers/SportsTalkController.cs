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
    public class SportsTalkController : ControllerBase
    {
        SportsTalkDAL sportsTalkDB = new SportsTalkDAL();
        //get list
        //localhost/api/sportstalk/board
        [HttpGet("board")]
        public List<SportsTalk> GetSportsTalks()
        {
            return sportsTalkDB.GetSportsTalksList();
        }

        //delete
        //localhost/api/sportstalk/delete/{id}
        [HttpDelete("delete/{id}")]
        public void DeleteSportsTalk(int id) 
        {
            sportsTalkDB.DeleteSportsTalk(id);
        }

        //post
        //localhost/api/sportstalk/create
        [HttpPost("create")]
        public void CreateSportsTalk(SportsTalk st) 
        {
            sportsTalkDB.CreateSportsTalk(st);
        }
    }
}
