//SPEED DETECTOR
function calculate() {
    const speed = document.getElementById('speed').value;
    if (speed === "") {
        document.getElementById('result').innerHTML = "Please enter a number";
    } else {
        if (speed < 70) {
            document.getElementById('result').innerHTML = "Ok";
            document.getElementById('points').innerHTML = 0;
        } else if (speed >= 70 && speed <= 130) {
            let balance = speed - 70;
            let points = Math.floor(balance / 5);
            document.getElementById('result').innerHTML = "Ok";
            document.getElementById('points').innerHTML = points;
        } else {
            document.getElementById('result').innerHTML = "License suspended";
            document.getElementById('points').innerHTML = "";
        }
    }
}