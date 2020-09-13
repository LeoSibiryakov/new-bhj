const click = document.getElementById("cookie");
const clickResult = document.getElementById("clicker__counter");

click.onclick = function () {
        clickResult.textContent++;

        if (clickResult.textContent % 2 === 0) {
            click.width = 200;
        } else {
            click.width = 300;
        }
    };