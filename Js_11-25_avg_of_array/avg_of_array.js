function avg_of_array(score)
{
    const count = score.length;
    let sum = 0;
    for(let i=0; i<count; i++)
    {
        sum = sum + score[i];
    }
    var avg = sum / count;
    const roundedDown = Math.floor(avg);
    return roundedDown;
}

console.log(avg_of_array([8,8,8,8,8]));
console.log(avg_of_array([45.5,48,6,58,8]));
console.log(avg_of_array([848,884,121,412112,45,8]));