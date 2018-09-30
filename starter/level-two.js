/*
 * DOTS: Level Two
 *
 */

let score = 0


var balls = document.querySelectorAll('.js-ball')

for (var i = 0; i < balls.length; i++) {
    balls[i].addEventListener('click', function(){
        // score.parseInt()
        score += 10;
    
        console.log(score)
    
    })
}
