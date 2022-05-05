function points(gameArray)
{
    let totalPoints=0;
    for(let i=0; i<gameArray.length; i++)
    {
        const value = gameArray[i];
        const parts = value.split(":");
        const x = parts[0];
        const y = parts[1];
        if (x>y)
        {
            totalPoints = totalPoints+3;
        }
        else
        {
            totalPoints += 3;
        }
    }
    return totalPoints;
}

console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3', ]));