/*
   
r       r       draw
r       p       p2 win
r       s       p1 win
p       r       p1 win
p       p       draw
p       s       p2 win
s       r       p2 win
s       p       p1 win
s       s       draw
*/
const rock_paper_scissors = (player1, player2) =>
{
    if (player1 === 'rock')
    {
        if (player2 === 'rock')
        {
            return 'draw!';
        }
        if (player2 === 'paper')
        {
            return 'player 2 won!'
        }
        if (player2 === 'scissors')
        {
            return 'player 1 won!'
        }
    }
    if (player1 === 'paper')
    {
        if (player2 === 'paper')
        {
            return 'draw!';
        }
        if (player2 === 'scissors')
        {
            return 'player 2 won!'
        }
        if (player2 === 'rock')
        {
            return 'player 1 won!'
        }
    }
    if (player1 === 'scissors')
    {
        if (player2 === 'scissors')
        {
            return 'draw!';
        }
        if (player2 === 'paper')
        {
            return 'player 1 won!'
        }
        if (player2 === 'rock')
        {
            return 'player 2 won!'
        }
    }
}

console.log(rock_paper_scissors('rock','scissors'));
console.log(rock_paper_scissors('scissors','scissors'));
console.log(rock_paper_scissors('rock','paper'));