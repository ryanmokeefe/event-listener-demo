/*
 * DOTS: Level One
 *
 */

 let score = 0
// var score = document.querySelector('.js-score')
// score.innerHTML = '0000'

document.querySelector('.js-ball').addEventListener('click', function(){
    // score.parseInt()
    score.innerHTML += 10;

    console.log(score)

})
