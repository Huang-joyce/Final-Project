//----串接API
fetch("/API/110Math.json")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
    console.log(data);
  });



//----時間
function displayTime() {
    let time_minutes = 100; // Value in minutes
    let time_seconds = 0; // Value in seconds
    let duration = time_minutes * 60 + time_seconds;
    element = document.querySelector('#count-down-timer');
    element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;
    startCountDown(--duration, element);
}

function paddedFormat(num) {
    return num < 10 ? "0" + num : num;
}

function startCountDown(duration, element) {
    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;
    let countInterval = setInterval(function() {
        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);
        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;
        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) {
            clearInterval(countInterval);
            document.getElementById('submit').click();
        };
    }, 1000);
}
displayTime();