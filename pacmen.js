<script>
function makePac() {
    // returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(200);
    // Add image to div id = game
    let game = document.getElementById('game');
    let newImg = document.createElement('img');
    newImg.style.position = 'absolute';
    newImg.src = 'images/PacMan1.png';
    newImg.width = 100;
    // set position here 
    newImg.style.left = position.x;
    newImg.style.top = position.y;
    // add new Child image to game
    game.appendChild(newImg);
    // return details in an object
    return {
        position,
        velocity,
        newImg
    }
}

function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newImg.style.left = item.position.x;
        item.newImg.style.top = item.position.y;
    })
    setTimeout(update, 20);
}

function checkCollisions(item) {
    // detect collision with all walls and make pacman bounce
    if (item.position.x + item.velocity.x + item.newImg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0);
    item.velocity.x = -item.velocity.x;
    if (item.position.y + item.velocity.y + item.newImg.height > window.innerHeight ||
    item.position.y + item.velocity.y < 0);
    item.velocity.y = -item.velocity.y;
}

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}
</script>