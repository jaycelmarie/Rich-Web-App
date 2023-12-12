## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


############# Questions ###############
1. Explain using code examples what is meant by props and state in
React JS?
Props (short for Properties) in ReactJS are used to pass data between React components
Props Example Code:
```
class ParentComponent extends Component {    
    render() {    
        return (        
            <ChildComponent name="First Child" />    
        );  
    }
}

const ChildComponent = (props) => {    
    return <p>{props.name}</p>; 
};
```
State in ReactJS allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.
State Example Code:
```
class Test extends React.Component {    
    constructor() {    
        this.state = {      
            id: 1,      
            name: "test"    
        };  
    }    
    
    render() {    
        return (      
            <div>        
              <p>{this.state.id}</p>        
              <p>{this.state.name}</p>      
            </div>    
        );  
    }
}
```
2. In functional programming, what does the term functor mean? Can you give
an example in JavaScript?
A functor is typically an object or data structure which consists of a map function, to allow functionality to values inside the functor. Functors are a way to represent a sequence of operations, and provide a standardized way to transform values within that context.
Example Code:
```
  {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            content={note.content}
            color={note.color}
            updateNote={updateNote}
            deleteNote={deleteNote}
          />
        ))}
```
3. We have looked at three kinds of asynchronous programming mechanisms, namely callbacks,
promises and streams. Mention one advantage and one disadvantage of each type.
Advantages:
- Callbacks keeps the code safe from errors.
- Promises: Easier to write sequential asynchronous code that is readable with .then().
- Streams: Scalability. Streams process data in smaller pieces and so can process larger volumes without the need of additional server resources.
Disadvantages:
- Callbacks have low code readability and a prone problem in maintaining code.
- For promises, in older browsers where ES2015 is not supported, you need to load a polyfill in order to use it. therefore, decreasing user usability.
- Streams can be overused, leading to code that is too complicated to understand and difficult to maintain.

4. With the aid of a diagram and example code, describe the Cascading Style Sheets (CSS) Box
Model and show how it can be used to space DOM elements
The CSS Box Model is a concept utilized in web development that describes the layout of elements on a webpage. It visualizes an HTML element as a rectangular box, consisting of content, padding, border, and margin. Each of these components contributes to the overall size and spacing of the element.
Diagram:
![image](https://github.com/jaycelmarie/Rich-Web-App/assets/98519686/da4a02c4-0983-48f9-9fbc-bb93d94e38b8)
Example Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Box Model Example</title>
  <style>
    .box {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 2px solid #333;
      margin: 20px;
    }
  </style>
</head>
<body>
  <div class="box">
    <p>This is some content inside a box.</p>
  </div>
</body>
</html>
```
5. Detail how the browser loads and bootstraps a rich web application from an initial URL.

- Enter URL into browser address bar or link.
-  first, DNS or Domain Name system is performed to obtain the IP address associated with the domain in the URL.
- HTTP Request to the server, requesting the initial HTML document associated with URL.
- Server Processing the request and returns the HTML documents as an HTTP response.
- HTML Parsing and CSS Load and Parsing.
- Layout - browser determines the posiotioning and size of each element on the page.

