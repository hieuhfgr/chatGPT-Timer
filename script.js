let timer;
let totalMilliseconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 10); // Update every 10 milliseconds
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimer() {
    totalMilliseconds += 10;

    const hours = Math.floor(totalMilliseconds / (3600 * 1000));
    const minutes = Math.floor((totalMilliseconds % (3600 * 1000)) / (60 * 1000));
    const seconds = Math.floor((totalMilliseconds % (60 * 1000)) / 1000);
    const milliseconds = totalMilliseconds % 1000;

    document.getElementById('timer').innerText =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}
