document.addEventListener('DomContentLoaded', () => {
    const {Observable, fromEvent} = rxjs;

    // click streams for each of the 3 buttons
    const startButton = document.querySelector('#start')
    const stopButton = document.querySelector('#stop')
    const resetButton = document.querySelector('#reset')

    // Setting up our observables to manage the click events
    const start$ = fromEvent(startButton, 'click')
    const stop$ = fromEvent(stopButton, 'click')
    const reset$ = fromEvent(resetButton, 'click')

    // Grabbing the dom elements by id
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')
    const milliseconds = document.querySelector('#milliseconds')


    // Converting the sections of time into mins,seconds,milliseconds
    const toTime = (time) => ({
    milliseconds: Math.floor(time % 100),
    seconds: Math.floor((time/100) % 60),
    minutes: Math.floor(time / 6000)

    })

    // Rendering the time in DOM elements
    const render = (time) => {
        minutes.innerHTML = time.minutes
        seconds.innerHTML = time.seconds
        milliseconds.innerHTML = time.milliseconds
    }

    // Time changes every second
    const interval$ = Observable.interval(10)


    const stopOrReset$ = Observable.merge(
        stop$,
        reset$
    )

    const pausible$ = interval$.takeUntil(stopOrReset$)

    // Initialising the start time to 2 mins 30 Seconds || Decrementing time
    const initialise = 15000
    const increment = acc => acc - 1
    const reset = acc => initialise

    const incrementOrReset$ = Observable.merge(
        pausible$.mapTo(increment),
        reset$.mapTo(reset)
    )


    //acc just keeps track of the time
    // run the app here
    app$ = start$.switchMapTo(incrementOrReset$)
                .startWith(initialise)
                .scan((acc, currFunc) => currFunc (acc))
                .map(toTime)
                .subscribe(val => render(val))

});

