######### Exercises relating to streams: #########

1. Explain what is meant by the stream abstraction. What is the relationship between
streams and the observer pattern? What are streams useful for modeling and when
might you use them in Rich Web development?

Stream abstraction are any source of ongoing inputs or destination outputs events.
e.g Input -> keyboard, mouse, Output -> Screen, Audio.
Abstraction allows programmers to engage with diverse data sources and destinations through a set of operations e.g reading data from files. Likewise, writing data to a file and presenting information on the console can be accomplished using comparable write operations on output streams. Stream Abtraction is realized through classes/interfaces for both reading and writing data. Stream Abstraction promotes code reusability, and streamlines the management of different input/output operations within a program.

Streams and the observer pattern share the same facility of communicating and interacting between components of a system. However, they serve a different purpose and are applied in different contexts such as Streams are used once and are pull-based, it focuses on the data flow. Observer pattern maintains a list of dependents (observers) that are notified of state changes - Observables have an observe and subscribe function. You are free to subscribe to an observable (stream) and get updates on changes on the Observable. 

Streaming can be used to handle the continous flow of edits between users, ensuring that the changes made are synchonized in real-time without the need for manual refreshes. It simplifies workflows and greatly enhances readability of your code. In some scenarios where a developer need to handle asynchorous events or notifications, Observer Pattern can greatly decouple components - therefore making it easier to manage asynchoronous behaviour in code.

2. Assume that you are building an interface to an API in your Rich Web App. Describe in
detail how you could use the RxJS library to handle asynchronous network responses to
API requests. In your opinion, what are the benefits to using a streams library for
networking over, say, promises? And what do you think are the downsides?

RxJS libraries are particularly useful in handling asynchonous network responses to API requests. 

- Import RxJS and create observables - an observable represents a stream of data over time.
- Apply operators like filter, map etc. to transform or combine observables.
e.g 
``` 
import { Observable, fromEvent, map } = 'rxjs'; 
```

- Use the ajax function from RxJS to make HTTP Requests. it will return an observation that emits the response.
- Subscribe to the observable to handle the response or any errors it catches.

Benefits:
1. Declarative:
    Operators can be used in a declarative manner to express asynchoronous operations in RxJS. It leads to a concise and readable code compared to often call-backs / nested promises.
2. Event Handling:
    It's well suited for handling events and data streams over time. It's a suitable approach for rich web applications where user interaction, updates or continous data streams are involved.
3. Composability:
    Observables are composable - it is easily combined and transformed. It becomes convenient to build complex asynchronous workflows by chaining operators.

Downsides:
1. Beginner reactive programmers might spend more time trying to understand RxJS as there needs a level of understanding Observables, Operators and reactive paradigm.
2. For simple asynchronous operations, the use of promises is more straightforward than setting up observables and pipelines with RxJS. RxJS Libraries full power might not be necessary in every scenario.
3. The overuse of RxJS without a clear benefit can lead to code complexity over using tools like promises.

3. Consider three asynchronous tasks, A,B & C. What are the consequences of these
functions sharing global state? What is a good practice to alleviate any problems
associated with this?