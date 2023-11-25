document.addEventListener("DOMContentLoaded", function() {
    const {interval, map, takeWhile, tap } = rxjs;

    const hour = document.getElementById("hrs");
    const minute = document.getElementById("mins");
    const second = document.getElementById("secs");
    
    const timer = document.getElementById('timer-left');

    const startBtn = document.getElementById("start");
    const startClick$ = rxjs.fromEvent(startBtn, 'click');

    const timer$ = interval(1000).pipe(
        map((val) => total() - val - 1),
        takeWhile((val) => val >= 0),
        tap((val) => {
            const hours = Math.floor(val / 3600);
            const minutes = Math.floor((val % 3600) / 60);
            const seconds = val % 60;

            hour.textContent = hour < 10 ? `0${hours}` : `${hours}`;
            minute.textContent = minutes < 10 ? `0${minutes}` : `${minutes}`;
            second.textContent = seconds < 10 ? `0${seconds}` : `${seconds}`;

            console.log(`Hour: ${hours} Min: ${minutes} Sec: ${seconds} Time Left: ${val}`);
        })
    ); // End timer$

    startClick$.subscribe(() => {
        timer$.subscribe();
    }); 

    // const endTimer$ = interval(1000).pipe(
    //     tap((val) => timer.textContent = 'Countdown Completed')
    // );

    // timer$.subscribe(() => {
    //     endTimer$.subscribe();
    // });

    function total() {
        const hours = parseInt(document.getElementById("hr").value) || 0;
        const minutes = parseInt(document.getElementById("min").value) || 0;
        const seconds = parseInt(document.getElementById("sec").value) || 0;
    
        return hours * 3600 + minutes * 60 + seconds;
    } // End of total()

});
