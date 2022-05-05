
function findsmallestint(num)
{
    const min = Math.min.apply(Math, num);
    return min;
}
console.log(findsmallestint(num=[748,559,232,1452,804]));
console.log(findsmallestint(num=[78,59,1,232,-12,80]));
console.log(findsmallestint(num=[78,-59,1,232,12,80]));
console.log(findsmallestint(num=[78,59,1,-232,12,80]));