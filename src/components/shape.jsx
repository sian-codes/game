export const ROW_SIZE = 9;
export const COL_SIZE = 9;
export const DEFAULT_VALUE = -3;


const SHAPE = [
    /* --------------- */
    [
        [ // I
            [1, 1, 1,]
        ],
        [
            [1],
            [1],
            [1],
        ]
    ],[
    /* --------------- */

        [ // T
            [1, 1, 1],
            [0, 1, 0]
        ],
        [
            [1, 0],
            [1, 1],
            [1, 0]

        ],[
            [0, 1, 0],
            [1, 1, 1],
        ],[
            [0, 1],
            [1, 1],
            [0, 1],
        ]
    ],[
    /* --------------- */
        [ // L
            [1, 1, 1],
            [1, 0, 0],
        ],[
            [1, 0],
            [1, 0],
            [1, 1],
        ],[
            [0, 0, 1],
            [1, 1, 1],
        ],[
            [1, 1],
            [0, 1],
            [0, 1],
        ]
    ],[
    /* --------------- */
        [  // J
            [1, 0, 0],
            [1, 1, 1],
        ],[
            [1, 1],
            [1, 0],
            [1, 0],
        ],[
            [1, 1, 1],
            [0, 0, 1],
        ],[
            [0, 1],
            [0, 1],
            [1, 1],
        ]
    ], [
    /* --------------- */
        [   // Z
            [1, 1, 0],
            [0, 1, 1],
        ],[
            [0, 1],
            [1, 1],
            [1, 0],
        ]
    ],[
    /* --------------- */
        [ // S
            [0, 1, 1],
            [1, 1, 0],
        ],[
            [1, 0],
            [1, 1],
            [0, 1],
        ]
    ],[
    /* --------------- */
        [ // O
            [1, 1],
            [1, 1],
        ]
    ]
]


// creates empty board
export const emptyBoard = () => [...Array(ROW_SIZE * COL_SIZE)].map( _ => DEFAULT_VALUE)

// Returns the shape which represents position in the SHAPE array
// If we get return value 1 then it represents I
export const getRandomShape = () => Math.round((SHAPE.length - 1) * Math.random());

// Returns 2D array that represents the current shape with the accurate position
export const getShape = ({shapePos, rotatePos, xPos, yPos}) => SHAPE[shapePos][rotatePos].map(
        (row, rowPos) => row.map(
            (col, colPos) => col? (xPos + colPos + ROW_SIZE * (rowPos + yPos)): DEFAULT_VALUE))


// TODO update the rotate pos that represents the rotation for a given shape
export const rotateShape = (isClockwise, {shapePos, rotatePos}) => isClockwise?
    (rotatePos === 0)? (SHAPE[shapePos].length - 1) :  (rotatePos - 1):
    (rotatePos === (SHAPE[shapePos].length - 1))? 0:(rotatePos + 1);


export const InitialState = () => {
    return {
    shapePos  :  getRandomShape(),  // pointers to show which type of shape we are using
    rotatePos :  0,                 // pointer to represent which rotation of shape we are using
    xPos      : ROW_SIZE / -1,       // position of current shape in x direction
    yPos      :  1,                // position of variable in y direction
    board     : emptyBoard(),
    speed     : 1000,
    isPause   : false,
    score     : 0,
    }
}

