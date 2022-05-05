function arrays_additions(arr1, arr2)
{
    let sum = 0;
    for (let i=0; i<arr1.length; i++)
    {
        const arr1Value = arr1[i];
        const arr2Value = arr2[i];
        const addedValue =arr1Value + arr2Value;
        sum = sum+addedValue;
    }
    return sum;
}

console.log(arrays_additions([1, 2, 3], [4, 5, 6]));
console.log(arrays_additions([-1, -2, -3], [-4, -5, -6]));
console.log(arrays_additions([0, 0, 0], [4, 5, 6]));