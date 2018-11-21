/**  First reapeated Element
 * 
*/


var numbers = [1, 3, 6, 7, 5, 7, 6, 6, 2, 9, 10, 2, 11]
   

for (var index = 0; index < numbers.length - 1; index++) 
{
    for (var j = index + 1; j < numbers.length; j++) 
    {
        if (numbers[index] == numbers[j]) 
        {
            console.log('found', numbers[index], 'at index', index, 'and', j);
            break ;
        }
    }
} 