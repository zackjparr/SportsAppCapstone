// To parse this data:
//
//   import { Convert } from "./file";
//
//   const sportsBoard = Convert.toSportsBoard(json);

export interface SportsBoard {
    postId?:   number;
    postBody?: string;
    userId?:   number;
    user?:     User;
}

export interface User {
    userId?:        number;
    // username?:      string;
    // password?:      string;
    displayName?:   string;
    avatar?:        string;
    // email?:         string;
    // favoriteTeams?: null;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSportsBoard(json: string): SportsBoard[] {
        return JSON.parse(json);
    }

    public static sportsBoardToJson(value: SportsBoard[]): string {
        return JSON.stringify(value);
    }
}
