function remove_characters (character)
{
    return character.substring(1, character.length-1);
}


console.log(remove_characters('JAVA'));
console.log(remove_characters('good morning'));

