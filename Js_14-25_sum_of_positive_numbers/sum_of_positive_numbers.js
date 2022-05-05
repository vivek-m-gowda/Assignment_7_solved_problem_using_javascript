function sum_of_positive_numbers(num)
{
    var sum = 0;
    for(var i=0; i<num.length; i++)
    {
        if(num[i]>0)
        {
            sum=sum+ num[i];
        }
    }
    return sum;
}

console.log(sum_of_positive_numbers([12,15,-12,+6,45,-10]));
console.log(sum_of_positive_numbers([2,2,2,2,2,-2,-2,-2,-2,-2,]));