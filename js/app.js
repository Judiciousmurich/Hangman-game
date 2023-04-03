const gameAlert = document.getElementById("game-alert");
const gameInput = document.getElementById("game-input");
const gameScore = document.getElementById("score");
const image = document.getElementById("image");
const gameGuide = document.getElementById("gameGuide");

let word = ['Ocean', 'Laptop', 'Bicycle', 'Chocolate', 'Symphony', 'Mountain', 'Telescope', 'Lemonade', 'Kangaroo', 'Chess', 'Earring', 'Cactus', 'Paradise', 'Pajamas', 'Thunderstorm', 'Seagull', 'Hamburger', 'Amethyst', 'Backpack', 'Pineapple'];

let score = 8;
const startGame = () => {
    const randIndex = Math.floor(Math.random() *(word.length-1))
    const selectedWord = word[randIndex]

    let scrambledLetters = selectedWord.split("")
    for (let i = (scrambledLetters.length-1); i > 0; i--){
        let randIndexOne = Math.floor(Math.random() * (i + 1))
        let randIndexTwo = Math.floor(Math.random() * (i + 1))
        let tempArray = scrambledLetters[randIndexOne];
        scrambledLetters[randIndexOne] = scrambledLetters[randIndexTwo];
        scrambledLetters[randIndexTwo] = tempArray;

    }
    console.log(scrambledLetters.join(""))


    gameScore.innerText = score;

    gameAlert.innerText = scrambledLetters.join("")

}
const getInput = () =>{
    const randIndex = Math.floor(Math.random() *(word.length-1))
    let correctWords = word[randIndex];
    let correctWord = correctWords.toUpperCase();
    let userWord = gameInput.value.toUpperCase();

    console.log(correctWord)
   
    if (userWord === ""){
        gameGuide.innerText = "You must provide a word to save Hungman"
    }
    else if (userWord === correctWord){
        gameGuide.innerText = "Congratulations you saved  Hungman."
          
        
     }
     else{
        score--;
        gameScore.innerText = score;
        gameGuide.innerText = `${userWord} is wrong,your killing Hungman.`
        
        if(score === 7){
            image.setAttribute('src','./images/one.jpeg')
        }
        else if(score === 6){
            image.setAttribute('src','./images/two.jpeg')
        }
        else if(score === 5){
            image.setAttribute('src','./images/three.jpeg')
        }
        else if(score === 4){
            image.setAttribute('src','./images/four.jpeg')
        }
        else if(score === 3){
            image.setAttribute('src','./images/five.jpeg')
        }
        else if(score === 2){
            image.setAttribute('src','./images/six.jpeg')
        }
         else if(score === 1){
            image.setAttribute('src','./images/seven.jpeg')
        }
        else if(score === 0){
            image.setAttribute('src','./images/eight.jpeg')
           
        }
        
        

     }

}

//  const getInput = () =>{
//     const randIndex = Math.floor(Math.random() *(word.length-1))
//     let correctWord = word[randIndex].toLowerCase();
//     let userWord = gameInput.value.toLowerCase();
//     let score = 8;
//     if (userWord === ""){
//         gameGuide.innerText = "You must provide a word to save Hungman"
//     }
//     else if (userWord != correctWord){
       
//      image.setAttribute('src','./images/one.jpeg')
//      gameScore.innerText = score - 1;

//     }
//     else if(userWord != correctWord){
        
//         image.setAttribute('src','./images/two.jpeg')
//         gameScore.innerText = score - 1;
//     }
//     else if(userWord != correctWord){
        
//         image.setAttribute('src','./images/three.jpeg')
//         gameScore.innerText = score - 1;
//     }
//     else if(userWord != correctWord){
        
//         image.setAttribute('src','./images/four.jpeg')
//         gameScore.innerText = score - 1;
//     }
//     else if(userWord != correctWord){
        
//         image.setAttribute('src','./images/five.jpeg')
//         gameScore.innerText = score - 1;
//     }
//     else if(userWord != correctWord){
        
//         image.setAttribute('src','./images/six.jpeg')
//         gameScore.innerText = score - 1;
//     }
//     else if(userWord != correctWord){
        
//         image.setAttribute('src','./images/seven.jpeg')
//         gameScore.innerText = score - 1;
//     }
//     else if(userWord != correctWord){
        
//         image.setAttribute('src','./images/eight.jpeg')
//         limit.innerText = score - 1;
//         gameGuide.innerText = "GAME OVER!!!HUNGMAN DIED"
//     }
    
//     else(
//         gameGuide.innerText = "Congratulations you saved HungMan"
        
//     );

   


// }
