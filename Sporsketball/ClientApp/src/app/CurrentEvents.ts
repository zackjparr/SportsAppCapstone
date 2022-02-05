// To parse this data:
//
//   import { Convert, CurrentEvents } from "./file";
//
//   const currentEvents = Convert.toCurrentEvents(json);
export interface CurrentEvents{events: Event[]}
export interface Event {
    idEvent?:           string;
    idAPIfootball?:     string;
    strEvent?:          string;
    strEventAlternate?: string;
    strFilename?:       string;
    strSport?:          string;
    idLeague?:          string;
    strLeague?:         string;
    strSeason?:         string;
    strDescriptionEN?:  string;
    strHomeTeam?:       string;
    strAwayTeam?:       string;
    intHomeScore?:      string;
    intRound?:          string;
    intAwayScore?:      string;
    strOfficial?:       string;
    dateEvent?:         Date;
    dateEventLocal?:    string;
    strTime?:           string;
    strTimeLocal?:      string;
    idHomeTeam?:        string;
    idAwayTeam?:        string;
    strResult?:         string;
    strVenue?:          string;
    strCountry?:        string;
    strCity?:           string;
    strPoster?:         string;
    strSquare?:         string;
    strFanart?:         string;
    strThumb?:          string;
    strBanner?:         string;
    strMap?:            string;
    strTweet1?:         string;
    strTweet2?:         string;
    strTweet3?:         string;
    strVideo?:          string;
    strStatus?:         string;
    strPostponed?:      string;
    strLocked?:         string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCurrentEvents(json: string): CurrentEvents {
        return JSON.parse(json);
    }

    public static currentEventsToJson(value: CurrentEvents): string {
        return JSON.stringify(value);
    }
}
