// To parse this data:
//
//   import { Convert, TeamData } from "./file";
//
//   const teamData = Convert.toTeamData(json);

export interface TeamData {
    teams?: Team[];
}

export interface Team {
    idTeam?: number;
    idAPIfootball?: string;
    strTeam?: string;
    strTeamShort?: string;
    strAlternate?: string;
    intFormedYear?: string;
    strSport?: string;
    strLeague?: string;
    idLeague?: string;
    strLeague2?: string;
    strLeague3?: string;
    strLeague4?: string;
    strLeague5?: string;
    strLeague6?: string;
    strLeague7?: string;
    strManager?: string;
    strStadium?: string;
    strKeywords?: string;
    strRSS?: string;
    strStadiumThumb?: string;
    strStadiumLocation?: string;
    intStadiumCapacity?: string;
    strWebsite?: string;
    strFacebook?: string;
    strTwitter?: string;
    strInstagram?: string;
    strDescriptionEN?: string;
    strCountry?: string;
    strTeamBadge?: string;
    strTeamJersey?: string;
    strTeamFanart1?: string;
    strTeamFanart2?: string;
    strTeamFanart3?: string;
    strTeamFanart4?: string;
    strTeamLogo?: string;
    strTeamBanner?: string;
    strYoutube?: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toTeamData(json: string): TeamData {
        return JSON.parse(json);
    }

    public static teamDataToJson(value: TeamData): string {
        return JSON.stringify(value);
    }
}
