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
    public class SportsDBController : ControllerBase
    {
        SportsDBDal tdDB = new SportsDBDal();
        //get list
        //localhost/api/sportstalk/board
        [HttpGet("{teamId}")]
        public TeamData GetTeamDataById(int teamId)
        {
            return tdDB.GetTeamData(teamId);
        }

        [HttpGet("recentevents")]
        public EventsData GetTodaysEvents()
        {
            return tdDB.GetRecentEvents();
        }

        [HttpGet("name/{teamName}")]
        public TeamData GetTeamDataByName(string teamName)
        {
            return tdDB.SearchTeams(teamName);
        }
    }
}
