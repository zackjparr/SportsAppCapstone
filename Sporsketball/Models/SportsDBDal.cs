using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Sporsketball.Models
{
    public class SportsDBDal
    {
        public TeamData GetTeamData(int teamId)
        {
            string url = $"https://www.thesportsdb.com/api/v1/json/{Secret.ApiKey}/lookupteam.php?id={teamId}";
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            StreamReader rd = new StreamReader(response.GetResponseStream());
            string result = rd.ReadToEnd();
            TeamData td;
            td = JsonConvert.DeserializeObject<TeamData>(result);
            return td;
        }

        public EventsData GetRecentEvents()
        {
            DateTime date = DateTime.Now;
            string url = $"https://www.thesportsdb.com/api/v1/json/{Secret.ApiKey}/eventsday.php?d={date.ToString("yyyy-MM-dd")}";
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            StreamReader rd = new StreamReader(response.GetResponseStream());
            string result = rd.ReadToEnd();
            EventsData ed;
            ed = JsonConvert.DeserializeObject<EventsData>(result);
            return ed;
        }

        public TeamData SearchTeams(string teamName)
        {
            string url = $"https://www.thesportsdb.com/api/v1/json/{Secret.ApiKey}/searchteams.php?t={teamName}";
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            StreamReader rd = new StreamReader(response.GetResponseStream());
            string result = rd.ReadToEnd();
            TeamData tm;
            tm = JsonConvert.DeserializeObject<TeamData>(result);
            return tm;
        }
    }
}
