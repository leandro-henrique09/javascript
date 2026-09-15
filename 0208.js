// for (let i = 0; i <= 9; i++){
//     console.log(i); 
// }

// let i = 10 

// while (i <= 20){
//     console.log(i);
//     i++
// }

let videoGames = ['Switch','PS4','XBOX','3DS']

// for(let i = 0; i < videoGames.length; i++){
//     console.log(`Item ${i+1}: ${videoGames[i]}`);
//     if(videoGames[i] === 'PS4'){
//         break
//     }
// }

videoGames.forEach(function (item) {
    console.log(item);
})