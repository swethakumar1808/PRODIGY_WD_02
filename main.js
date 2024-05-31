let showtimer = document.querySelector(".showTimer");
// const start = document.getElementById("#startbtn");
// const pause = document.getElementById("#pausetbtn");
// const reset = document.getElementById("#resetbtn");
let [milisecond, second, minutes, hour] = [0, 0, 0, 0];
function runtimer() {
    milisecond += 10;
    if (milisecond == 1000) {
        second++;
        milisecond = 0;
    }
    if (second == 60) {
        minutes++;
        second = 0;
    }
    if (minutes == 60) {
        hour++;
        minutes = 0;
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = second < 10 ? "0" + second : second;
    let ms = milisecond < 10 ? "00" + milisecond : milisecond < 100 ? "0" + milisecond : milisecond;

    showtimer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

let time = null;
document.getElementById('startbtn').addEventListener("click", () => {
    if (time != null) {
        clearInterval(time);
    }
    time = setInterval(runtimer, 10)
});
document.getElementById('pausebtn').addEventListener("click", () => {
    clearInterval(time);

});
document.getElementById('resetbtn').addEventListener("click", () => {
        clearInterval(time);
        [milisecond, second, minutes, hour] = [0, 0, 0, 0];
        showtimer.innerHTML = `00 : 00 : 00 : 000`
});
// setInterval(runtimer,10)