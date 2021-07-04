/**
 * The dimensions of table, all values are in millimeters
 */
export const tableDimensions = {
    /** 
     * The length of the table, with the net at the center.
     */
    depth: 2740,
    /**
     * The distance between the left and right side of the table
     */
    width: 1525,
    /**
     * The distance of the table from the ground
     */
    height: 760,
};

export const tableMarkings = {
    sideline: 20, // mm (white markings on the left+right)
    endline: 20, // mm (white markings where the player stands)
    centerline: 3, // mm (white marking in the center)
};

export const netDimensions = {
    height: 152.5, // mm (how "high" the net is)
    overhang: 152.5, // mm (how far to the side of the table the net should be)
};