function addNumbers(...numbers){
    return numbers.reduce((sum, number) =>  {
        return sum + number;
    }, 0);
}

addNumbers(1, 2, 3, 4, 5,6);

// REST operator capture all arguments 
// function (...REST);

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

//defaultColors.concat(userFavoriteColors);
// SPREAD operator is useful to contact many arrays and create a new array out of them.
[ ...defaultColors, ...userFavoriteColors, 'blue', ...fallColors];
