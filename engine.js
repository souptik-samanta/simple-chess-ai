const chess = require("chess.js");
//souptik
const game = new chess.Chess('6k1/5ppp/8/8/8/8/6P1/4Q1K1 w - - 0 1');

// using chess.js to make things simpler :)

function evaluateBoard(fen) { // thanks to chatgpt-3.5 for helping me out with the position evaluation!
      let evaluation = 0; // initial evaluation

      const pieceValues = {
          'p': -1, 'r': -5, 'n': -3, 'b': -3, 'q': -9, 'k': 0,
          'P': 1, 'R': 5, 'N': 3, 'B': 3, 'Q': 9, 'K': 0
      }    // using respective piece values (<100)

      const boardState = fen.split(' ')[0];

      console.log("Board State:", boardState);
      
      for (let square of boardState) {
          if (pieceValues.hasOwnProperty(square)) {
                    evaluation += pieceValues[square];     // adding up the piece values according to the fen to calculate the material evaluation of this position                                 
          }
      } 

      console.log(evaluation)
} 
/* I am working on a deeper evaluation function with piece-square tables to evaluate the position
   Since position evaluation is dependent on something more than just Material Counting
*/

evaluateBoard('rnb1kbnr/ppp1pppp/8/8/2pN4/8/PP2PPPP/RNBQKB1R b KQkq - 0 4');

/* Using Negamax Algorithm
   No Alpha-Beta Pruning
   -negamax(params) determines the current state of the position -- maximising or minimizing
   adjust your depth nodes to get more search trees, however, your search time would be significantly increased
*/