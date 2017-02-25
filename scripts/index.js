var ball = document.querySelector(".discoball");

// array of classes style
var classesStyleArray = [".here", ".goes", ".our", ".awesome", ".disco", ".ball"];

function getRandomElementFromArray (list) {
    return list[Math.floor((Math.random()*list.length))];
}

// function for setting new random style to element .discoball
function goDisco() {
    console.log("start" + ball.classList.length);
	//do your disco magic here !
    var randomClassStyle = getRandomElementFromArray(classesStyleArray).substring(1);

    // remove last class if length of list classes more then 1
    if (ball.classList.length > 1) {
        var lastClassOfElement = ball.classList[ball.classList.length - 1];

        ball.classList.remove(lastClassOfElement)
    }

    // add random class to classList os our element .discoball
    var newStyle = ball.classList.add(randomClassStyle);//ball.classList.add(randomClassStyle);

    console.log("finish" + ball.classList);
}

setInterval(goDisco, 1000);