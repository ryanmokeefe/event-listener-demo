/*
 * DOTS: Level Three
 *
 */

let score = 0


var balls = document.querySelectorAll('.js-ball')

for (var i = 0; i < balls.length; i++) {
    balls[i].addEventListener('click', function(){
        // points = parseInt()
        increment = parseInt(balls[i].dataset.increment)
        score += increment



        console.log(score)
    
    })
}
