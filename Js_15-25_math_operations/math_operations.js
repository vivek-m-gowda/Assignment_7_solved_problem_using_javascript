function math_operations(operation, value1, value2)
{
    let result;
    switch (operation)
    {
        case '+': result = value1 + value2;
        break;
        case '-': result = value1 - value2;
        break;
        case '*': result = value1 * value2;
        break;
        case '/': result = value1 / value2; 
        break; 
    }
    return result;   
}

console.log(math_operations('+', 10, 20));
console.log(math_operations('-', 10, 20));
console.log(math_operations('*', 10, 20));
console.log(math_operations('/', 10, 20));



//can also use "eval"