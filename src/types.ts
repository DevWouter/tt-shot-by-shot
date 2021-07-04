export interface Vec2 {
    x: number;
    y: number;
}

export interface Player {
    name: string;
    side: "home" | "away";
}

export interface ServiceShot {
    type: "ServiceShot";
    position: Vec2;
    player: Player;
}

export interface Shot {
    type: "Shot";
    position: Vec2;
    player: Player;
}

export interface Bounce {
    type: "Bounce";
    /**
     * Where on the the table (or next to it) did the ball bounce?
     */
    position: Vec2;
}

export type BallContact = ServiceShot | Bounce | Shot;

export interface Play {
    /**
     * Players in this play.
     */
    players: Player[];
    /**
     * The serving player
     */
    serviceBy: Player;
    /**
     * The returning player
     */
    returnBy: Player;

    /**
     * The contacts of the table
     */
    ballContacts: BallContact[];
}