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
        //localhost/api/sportsdb/{teamId}
        [HttpGet("{teamId}")]
        public TeamData GetTeamDataById(int teamId)
        {
            return tdDB.GetTeamData(teamId);
        }

        //localhost/api/sportsdb/recentevents
        [HttpGet("recentevents")]
        public EventsData GetTodaysEvents()
        {
            return tdDB.GetRecentEvents();
        }

        //localhost/api/sportsdb/name/{teamName}
        [HttpGet("name/{teamName}")]
        public TeamData GetTeamDataByName(string teamName)
        {
            return tdDB.SearchTeams(teamName);
        }

        //localhost/api/sportsdb/recentevents/{teamId}
        [HttpGet("recentevents/{teamId}")]
        public EventsData GetRecentEventsById(int teamId)
        {
            return tdDB.GetPreviousGamesById(teamId);
        }

        //localhost/api/sportsdb/upcomingevents/{teamId}
        [HttpGet("upcomingevents/{teamId}")]
        public EventsData GetUpcomingEventsById(int teamId)
        {
            return tdDB.GetNextEventsById(teamId);
        }

        //localhost/api/sportsdb/roster/{teamId}
        [HttpGet("roster/{teamId}")]
        public PlayerRoster GetTeamRoster(int teamId)
        {
            return tdDB.GetTeamRosterById(teamId);
        }
    }
}
