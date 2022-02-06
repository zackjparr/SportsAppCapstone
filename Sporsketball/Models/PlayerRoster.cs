using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sporsketball.Models
{

    public class PlayerRoster
    {
        public Player[] player { get; set; }
    }

    public class Player
    {
        public string idPlayer { get; set; }
        public string idTeam { get; set; }
        public string idTeam2 { get; set; }
        public object idTeamNational { get; set; }
        public string idAPIfootball { get; set; }
        public string idPlayerManager { get; set; }
        public string strNationality { get; set; }
        public string strPlayer { get; set; }
        public string strTeam { get; set; }
        public string strTeam2 { get; set; }
        public string strSport { get; set; }
        public string intSoccerXMLTeamID { get; set; }
        public string dateBorn { get; set; }
        public string strNumber { get; set; }
        public string dateSigned { get; set; }
        public string strSigning { get; set; }
        public string strWage { get; set; }
        public string strOutfitter { get; set; }
        public string strKit { get; set; }
        public string strAgent { get; set; }
        public string strBirthLocation { get; set; }
        public string strDescriptionEN { get; set; }
        public string strGender { get; set; }
        public string strSide { get; set; }
        public string strPosition { get; set; }
        public object strCollege { get; set; }
        public string strFacebook { get; set; }
        public string strWebsite { get; set; }
        public string strTwitter { get; set; }
        public string strInstagram { get; set; }
        public string strYoutube { get; set; }
        public string strHeight { get; set; }
        public string strWeight { get; set; }
        public string strThumb { get; set; }
        public string strCutout { get; set; }
        public string strRender { get; set; }
        public string strBanner { get; set; }
        public string strFanart1 { get; set; }
        public string strFanart2 { get; set; }
        public string strFanart3 { get; set; }
        public string strFanart4 { get; set; }
        public string strCreativeCommons { get; set; }
        public string strLocked { get; set; }
    }

}
