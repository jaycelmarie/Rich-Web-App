######### Exercises relating to streams: #########

1. Explain what is meant by the stream abstraction. What is the relationship between
streams and the observer pattern? What are streams useful for modeling and when
might you use them in Rich Web development?

Stream abstraction are any source of ongoing inputs or destination outputs events.
e.g Input -> keyboard, mouse, Output -> Screen, Audio.
Abstraction allows programmers to engage with diverse data sources and destinations through a set of operations e.g reading data from files. Likewise, writing data to a file and presenting information on the console can be accomplished using comparable write operations on output streams. Stream Abtraction is realized through classes/interfaces for both reading and writing data. Stream Abstraction promotes code reusability, and streamlines the management of different input/output operations within a program.

Streams and the observer pattern share the same facility of communicating and interacting between components of a system. However, they serve a different purpose and are applied in different contexts such as Streams are used once and are pull-based, it focuses on the data flow. Observer pattern maintains a list of dependents (observers) that are notified of state changes - Observables have an observe and subscribe function. You are free to subscribe to an observable (stream) and get updates on changes on the Observable. 

Streaming can be used to handle the continous flow of edits between users, ensuring that the changes made are synchonized in real-time without the need for manual refreshes. It simplifies workflows and greatly enhances readability of your code. In some scenarios where a developer need to handle asynchorous events or notifications, Observer Pattern can greatly decouple components - therefore making it easier to manage asynchoronous behaviour in code.




