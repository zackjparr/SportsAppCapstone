using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sporsketball.Models
{

    public class TeamData
    {
        public Team[] teams { get; set; }
    }

    public class Team
    {
        public int idTeam { get; set; }
        //public object idSoccerXML { get; set; }
        public string idAPIfootball { get; set; }
        //public object intLoved { get; set; }
        public string strTeam { get; set; }
        public string strTeamShort { get; set; }
        public string strAlternate { get; set; }
        public string intFormedYear { get; set; }
        public string strSport { get; set; }
        public string strLeague { get; set; }
        public string idLeague { get; set; }
        public string strLeague2 { get; set; }
       //public object idLeague2 { get; set; }
        public string strLeague3 { get; set; }
        //public object idLeague3 { get; set; }
        public string strLeague4 { get; set; }
        //public object idLeague4 { get; set; }
        public string strLeague5 { get; set; }
        //public object idLeague5 { get; set; }
        public string strLeague6 { get; set; }
        //public object idLeague6 { get; set; }
        public string strLeague7 { get; set; }
        //public object idLeague7 { get; set; }
        //public object strDivision { get; set; }
        public string strManager { get; set; }
        public string strStadium { get; set; }
        public string strKeywords { get; set; }
        public string strRSS { get; set; }
        public string strStadiumThumb { get; set; }
        //public string strStadiumDescription { get; set; }
        public string strStadiumLocation { get; set; }
        public string intStadiumCapacity { get; set; }
        public string strWebsite { get; set; }
        public string strFacebook { get; set; }
        public string strTwitter { get; set; }
        public string strInstagram { get; set; }
        public string strDescriptionEN { get; set; }
        //public string strGender { get; set; }
        public string strCountry { get; set; }
        public string strTeamBadge { get; set; }
        public string strTeamJersey { get; set; }

        public string strTeamFanart1 { get; set; }
        public string strTeamFanart2 { get; set; }
        public string strTeamFanart3 { get; set; }
        public string strTeamFanart4 { get; set; }
        public string strTeamLogo { get; set; }
        public string strTeamBanner { get; set; }
        public string strYoutube { get; set; }
        //public string strLocked { get; set; }


    }

}
