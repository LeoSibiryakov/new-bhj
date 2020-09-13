const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function clickFunc() {

    if (this.className.includes("hole_has-mole")) {
        dead.textContent++;

        if (dead.textContent === '10') {
            alert("Победа!");
            dead.textContent = '0';
            lost.textContent = '0';
        }
    }

    else {
        lost.textContent++;

        if (lost.textContent === '5') {
            alert("Поражение!");
            dead.textContent = '0';
            lost.textContent = '0';
        }
    }
}

for (let index = 1; index <= 9; index++) {
    const hole = getHole(index);
    hole.onclick = clickFunc;
  }