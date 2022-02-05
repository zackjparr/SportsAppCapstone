// To parse this data:
//
//   import { Convert, User } from "./file";
//
//   const user = Convert.toUser(json);


import { Team, TeamData } from "./SportsDB";

export interface User {
    userId?: number;
    username: string;
    password: string;
    displayName?: string;
    avatar?: string;
    email?: string;
    favoriteTeams?: FavoriteTeam[];
}

export interface FavoriteTeam {
    faveId: number;
    teamId: number;
    thumbnail: string;
    teamName: string;
    //data?: Team[];
}
export interface Data {
    teams?: { [key: string]: null | string }[];
}

// Converts JSON strings to/from your types
export class Convert {
    public static toUser(json: string): User {
        return JSON.parse(json);
    }

    public static userToJson(value: User): string {
        return JSON.stringify(value);
    }
}
