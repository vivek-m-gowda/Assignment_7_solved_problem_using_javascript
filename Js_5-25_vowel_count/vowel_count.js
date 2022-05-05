function vowel_count(s)
{
    var vowel_count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u']; 

    for(var i=0; i < s.length; i++)
    {
        for(var j=0; j<vowels.length; j++)
        {
            if(s[i] === vowels[j])
            {
                vowel_count++;
            }
        }
    }

    return vowel_count;
}

console.log(vowel_count('find out the vowel'));
console.log(vowel_count('hello'));
console.log(vowel_count('a e i o u'));
