// To parse this data:
//
//   import { Convert, Player } from "./file";
//
//   const player = Convert.toPlayer(json);

export interface PlayerRoster{
    player: Player[];
}

export interface Player {
    idPlayer?:           string;
    idTeam?:             string;
    idTeam2?:            string;
    idTeamNational?:     string;
    idAPIfootball?:      string;
    idPlayerManager?:    string;
    strNationality?:     string;
    strPlayer?:          string;
    strTeam?:            string;
    strTeam2?:           string;
    strSport?:           string;
    intSoccerXMLTeamID?: string;
    dateBorn?:           Date;
    strNumber?:          string;
    dateSigned?:         string;
    strSigning?:         string;
    strWage?:            string;
    strOutfitter?:       string;
    strKit?:             string;
    strAgent?:           string;
    strBirthLocation?:   string;
    strDescriptionEN?:   string;
    strGender?:          string;
    strSide?:            string;
    strPosition?:        string;
    strCollege?:         string;
    strFacebook?:        string;
    strWebsite?:         string;
    strTwitter?:         string;
    strInstagram?:       string;
    strYoutube?:         string;
    strHeight?:          string;
    strWeight?:          string;
    strThumb?:           string;
    strCutout?:          string;
    strRender?:          string;
    strBanner?:          string;
    strFanart1?:         string;
    strFanart2?:         string;
    strFanart3?:         string;
    strFanart4?:         string;
    strCreativeCommons?: string;
    strLocked?:          string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPlayer(json: string): Player {
        return JSON.parse(json);
    }

    public static playerToJson(value: Player): string {
        return JSON.stringify(value);
    }
}
