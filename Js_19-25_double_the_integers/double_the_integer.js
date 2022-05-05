function maps(arr)
{
    var result = arr.map((arrItem) =>
    {
        return arrItem * 2;
    });
    return result;
}

console.log(maps([1, 2, 3, 4]));
console.log(maps([11, 22, 33, 44]));
console.log(maps([15, 45, 42, 05]));


// function double (arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i] * 2);
//     }
//     console.log(newArr) ;
// }
// console.log(double([3,4,5]));