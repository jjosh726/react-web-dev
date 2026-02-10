# 1: React Basics
<hr>

## 1.1 What is React?
- an external library
- helps us create websites easier

Bare minimum react Setup:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>React Basics</title>
  </head>
  <body>
    <div class="js-container"></div>

    
    <script src="https://unpkg.com/supersimpledev/react.js"></script>
    <script src="https://unpkg.com/supersimpledev/react-dom.js"></script>

    <script src="https://unpkg.com/supersimpledev/babel.js"></script>
    <script type="text/babel">
      const container = document.querySelector('.js-container');
      ReactDOM.createRoot(container).render('Welcome to SuperSimpleDev React Course');
    </script>
  </body>
</html>
```

<hr>

## 1.2 External Library

- HTML code creates a website
- JavaScript is loaded into a website through
- script tags or saving code into JavaScript files
<br>

- any script loaded externally into the HTML code
- is an external library
<br>

- code that is outside our computer
- code that someone else wrote
```html
<script src="https://unpkg.com/supersimpledev@8.6.4/external-library.js"></script>
```

- react is just a bunch of code
- written externally and loaded into website

**Why are there two external libraries for React?**

- React is divided into two seperate libraries
- one for shared features and one for specific environments

Using React to create Websites:
- React = Shared features for both Websites and Mobile
- ReactDOM = features specific to websites

Using React to create mobile apps:
- React = Shared features for both Websites and Mobile
- ReactNative = features specific to mobile

**Seting Up React**
```html
<script type="text/babel">
    const container = document.querySelector('.js-container');
    ReactDOM.createRoot(container).render('Welcome to SuperSimpleDev React Course');
</script>
```

- accesses the HTML document in Javascript `document.querySelector(className)`
- places all elements in a container and "sets up react" `ReactDOM.createRoot(container)`
- displays using `.render()`

<hr>

## 1.3 Babel External Library
- JavaScript Compiler
- translates other languages into JavaScript
<br>

- when using React
- normal JavaScript is not used
- instead, an enhanced version of JavaScript is used
<br>

- this is known as `JSX`
- stands for `JavaScript XML`
- allows HTML code directly into our JavaScript code

Example of JSX code:
```jsx
// in JSX syntax
const button = <button>hello</button>;

// equivalent to in normal JS syntax
const button = document.createElement('button');
button.innerHTML = 'hello';
```
The problem with normal JSX:
- our web browser doesn't understand JSX
- need to translate JSX into JavaScript
- this is done using the `babel` external library

How to use Babel:
1. load the external library

> `<script src="https://unpkg.com/supersimpledev/babel.js"></script>`

2. to translate, give attribute `type="text/babel"` in `<script>`

> `<script type="text/babel"></script>`

<hr>

## 1.4 More Features of React

- in addition to text, HTML elements can be displayed inside `js-container`
- give `.render()` an HTML element

```js
<script type="text/babel">
  const button = <button>hello</button>;

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(button);
</script>
```

**Using React to display Multiple Elements**
- `.render()` for multiple elements is not supported
- saving multiple HTML elements in a var is also not supported either
- instead, group elements together in a `<div>`

```js
<script type="text/babel">
  const button = <button>hello</button>;
  const paragraph = <p>paragraph of text</p>;

  const div = <div>
        <button>hello</button>
        <p>paragraph of text</p>
    </div>;

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(div);
</script>
```

- a `<div>` is considered as one element thus it works

**Code Cleanup**

- as a best practice
- always wrap HTML in brackets

```jsx
  const button = <button>hello</button>;
  const paragraph = <p>paragraph of text</p>;

  const div = (
    <div>
        <button>hello</button>
        <p>paragraph of text</p>
    </div>
  );

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(div);
```

**Benefits of using JSX syntax:**

1. Creating a website feels natural
    - HTML can be created directly
    - give it to react
    - react will display it on the website
2. JSX lets us find errors easier
    - when typing HTML in vanilla js 
    - strings are typically used
    - but in JSX, errors in HTML code are shown
3. we can insert values inside JSX elements
    - similar to string interpolation
    - `${2 + 3}` in JS

```jsx
const div = (
  <div>
      <button>hello</button>
      <p>paragraph of text {2 + 3}</p>
  </div>
);
// outputs 5
```

<hr>

## 1.5 React and JSX basics summary

1. React = external library
2. loading react external library
3. Setup React and use .render()
4. JSX = enhanced version of JavaScript
5. Create elements directly with JSX
6. Insert values into JSX elements

<hr>

# 2: Components and Props

<hr>

## 2.1 Components

Components:
- a piece of the website
- example: textbox and button, chatbot messages etc.

When building websites:
- its better to split up the webiste into pieces
- work on small pieces of the website at the time

Creating a component:
- the component name must start with a capital letter
- use `PascalCase`
- returns HTML

```jsx
function ChatInput() {
  return (
    <input type="text"></input>
  )
}
```
- JSX more strict than normal HTML
- ALL elements need a closing tag
- to reduce typing, there is a shortcut
<br>
- instead of typing `<input></input>`
- type `<input />`
- make sure to include the space

```jsx
function ChatInput() {
  return (
    <input />
  )
}
```
- This is known as a `self-closing element`
- JSX components can only return one HTML element
- wrap everything in a div

```jsx
function ChatInput() {
  return (
    <div>
      <input />
      <button>Send</button>
    </div>
  )
};
```

- Reinsert the `ChatInput` Component (function) 
- into the main div
- and render it

```jsx
// component
function ChatInput() {
  return (
    <div>
      <input />
      <button>Send</button>
    </div>
  )
}

const div = (
  <div>
      <button>hello</button>
      <p>paragraph of text {2 + 3}</p>

      {ChatInput()}
  </div>
);

const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(div);
```

**React has a special syntax used to insert a component.**
- instead of using curly brackets and running the function
- instead use `<ComponentName></ComponentName>`
- known as component syntax

```jsx
const div = (
  <div>
      <ChatInput></ChatInput>
  </div>
);
```

Advantage of using this syntax:
- it looks like HTML tag
- creating our OWN HTML element

**Main idea of React**:
- we can create our own HTML elements

**using the self closing element shortcut:**

```jsx
const div = (
  <div>
      <ChatInput />
  </div>
);
```

Allows us to work in small pieces of code at a time.
Making React an easier way to create websites.

<hr>

## 2.2 Fragments

- right now each component is wrapped using a div
- when converting the JSX into pure HTML code
- tons of divs will spawn in the elements section of the inspect

Currently:
```html
<div class="js-container">
  <div>
    <div>
      <input placeholder="Send a message">
      <button>Send</button>
    </div>
  </div>
</div>
<!-- div-pyramid -->
```

- in react
- there is an alternative way to group components together
- known as `fragments (<></>)`

```jsx
// component
function ChatInput() {
  return (
    <>
      <input placeholder="Send a message" />
      <button>Send</button>
    </>
  )
}

const div = (
  <>
      <ChatInput />
  </>
);

const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(div);
```

- replace all `<div></div>` elements
- with empty opening and opening tags
- the browser wont insert an extra div

HTML from inspecting browser:
```html
<div class="js-container">
  <input placeholder="Send a message">
  <button>Send</button>
</div>
```

- Still use `<div></div>` for layout purposes
- as div's are block elements
- that take up the whole line

<hr>

## 2.3 Props and Attributes

- components are designed to be reusable
- some components may have certain characteristics
- which are different from components of the same type
- giving components attributes allows for customisability

```jsx
function ChatMessage() {
  return (
    <div>
      Hello chatbot
      <img src="./images/user.png" width="50" alt="" />
    </div>
  );
}

const app = (
  <>
      <ChatInput />
      <ChatMessage message="Hello Chatbot" />
      <!-- insert attributes into ChatMessage -->
  </>
);
```

- Every `component` function recieves one parameter known as `props`
- `props` is an object that contains the attributes of the HTML element
- destructure the object and insert it into the return statement of JSX

```jsx
function ChatMessage(props) {
  const { message } = props;

  return (
    <div>
      {message}
      <img src="./images/user.png" width="50" alt="" />
    </div>
  );
}

const app = (
  <>
      <ChatInput />
      <ChatMessage message="look at me" />
  </>
);
```

- `props` is short for `properties`

<hr>

## 2.4 Additional React shortcuts

- instead of destructuring and saving props into consts
- destructure it as a parameter directly at the top

```jsx
function ChatMessage({ message, sender }) {
  if (sender === 'robot') {
    return (
      <div>
        <img src="./images/robot.png" width="50" alt="" />
        {message}
      </div>
    );
  }

  return (
    <div>
      {message}
      <img src="./images/user.png" width="50" alt="" />
    </div>
  );
}
```

**If-Statements Directly inside JSX**
- removes duplicate code
- `if` cannot be used directly inside curly braces of JSX
- instead use `Guard Operators (&&)`

**Guard Operator:**
- for Example code:
- `const result = value1 && value2`
- if `value1` is true, the result will be `value2`
- making it work like an if statement

**Ternary Operators**
- for Example code:
- `const result = value1 ? value2 : value3`
- if `value1` is true it returns `value2` else `value3`
- works similar to guard operator but with an else statement
- equivalent to an if-else statement

```jsx
// shows discountPrice if it exists otherwise just displays normal price
function ProductDetails ({productName, price, discountPrice}) {
  return (
      <div>
          <p>{productName}</p>

          { discountPrice ? (
              <>
                  <del>Price: ${price}</del>
                  <p>Discount Price: {discountPrice}</p>
              </>
          ) : (
              <p>Price: ${price}</p>
          )}

          <button>Add To Cart</button>
      </div>
  );
}
```
**React Best Practice**
- Use a component (App) to create the website
- components can contain smaller components

```jsx
const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />)
```

<hr>

# 3: State and Event Handlers

<hr>

## 3.1 Generating JSX


- currently we are manually typing each individual component
- when we can generate components instead of copy and pasting code
```jsx
// current code
<ChatMessage 
  message="hello chatbot" 
  sender="user" 
/>
<ChatMessage 
  message="Hello! How can I help you?" 
  sender="robot" 
/>
<ChatMessage 
  message="can you get me today date?" 
  sender="user" 
/>
<ChatMessage 
  message="Today is September 27" 
  sender="robot" 
/>
// lots of unneccesary repeat code
```
**Using JavaScript to Generate Components in react:**
1. Save the Data (Information) with a variable
    - save reusable information in a const
    - an array of objects
    - where each key-value pair represents a prop

```jsx
function App() {
  const chatMessages = [
    {
      message: 'hello chatbot',
      sender: 'user'
    }, {
      message: "Hello! How can I help you?",
      sender: 'robot'
    },{
      message: "can you get me today date?",
      sender: 'user'
    }, {
      message: "Today is September 27" ,
      sender: 'robot'
    }
  ]
  let reactValue = null;

  return (
    <>
        <ChatInput />
        {/* generate the data using variable here */}
    </>
  );
  };
```

2. Generate the HTML
    - use `.map()` function on array of objects
    - goes through each value of an array
    - and converts it into a new value
    - whatever is return within a `.map()` function 
    - is whatever value it is converted
    - and saves it into an array

**React components in arrays:**
- if we return an array of components in React
- each component is automatically taken out of the array

```jsx
function App() {
  const chatMessages = [
    {
      message: 'hello chatbot',
      sender: 'user'
    }, {
      message: "Hello! How can I help you?",
      sender: 'robot'
    },{
      message: "can you get me today date?",
      sender: 'user'
    }, {
      message: "Today is September 27" ,
      sender: 'robot'
    }
  ]
  
  const chatMessageComponents = chatMessages.map((chatMessage) => {
    // destructure the value from the object
    const {message, sender} = chatMessage;

    // return a ChatMessage component
    return (
      <ChatMessage 
        message={message} 
        sender={sender} 
      />
    )
  })

  return (
    <>
        <ChatInput />
        {chatMessageComponents}
    </>
  );
};
```

- Instead of saving it in a variable
- place it into the return statement
- surrounded by curly braces
- make sure to not include the semicolon

```jsx
function App() {
  const chatMessages = [
    {
      message: 'hello chatbot',
      sender: 'user'
    }, {
      message: "Hello! How can I help you?",
      sender: 'robot'
    },{
      message: "can you get me today date?",
      sender: 'user'
    }, {
      message: "Today is September 27" ,
      sender: 'robot'
    }
  ]

  return (
    <>
        <ChatInput />
        {chatMessages.map((chatMessage) => {
          const {message, sender} = chatMessage;
          return (
            <ChatMessage message={message} sender={sender} />
          )
        })}
        
    </>
  );
};
```

This shortcut is used a lot in React tutorials and documentation. But just by this itself it will return an error.

<hr>

## 3.2 Keys

**Key:**
- In React, if we insert an Array of Components
- we need to give each component a unique Prop known as `key`
- otherwise an error will occur
- the `key` helps React track changes in the array

Assuming the key is an ID placed inside the object:
```jsx
return (
  <>
      <ChatInput />
      {chatMessages.map((chatMessage) => {
        // destructure the value from the object
        const {message, sender, id} = chatMessage;

        // return a ChatMessage component
        return (
          <ChatMessage 
            message={message} 
            sender={sender} 
            key={id}
          />
        )
      })}
  </>
);
```

<hr>

## 3.3 Event Handlers

**3. Make it Interactive**
- use `Event Handlers` to make the website Interactive

**Event Handlers:**
- run a function
- when we interact with the website

**Onclick:**
- a special prop added onto certain interactive elements
- run a function when we click
- use `{}` which can save any type of value in a prop
- including a function

```jsx
function myComponent() {
  function sendMessage() {
    console.log('send message');
  }

  return (
    <>
      <button onClick={sendMessage}>Send message</button>
    </>
  )
}
```

**In this Scenario:**
- `onclick` is known as the `Event`
- `sendMessage` function is known as the `Event Handler`

**Event Props:**
- always start `on`
- and then the name of the event such as `Click`
- uses `camelCase`

**Avoid putting brackets in event handlers:**
- do not run the function `onClick={sendMessage()}` with brackets
- it will run the function, return the function as undefined
- and the Event handler will not run

<hr>

## 3.4 State

Let's say for a project, were creating a new message with a message, sender and a unique ID.

**Creating IDs:**
- use function `crypto.randomUUID()`
- generate a unique ID string everytime its run

Create the message and push it into the array:
```jsx
function sendMessage() {
  chatMessages.push({
    message: 'test',
    sender: 'user',
    id: crypto.randomUUID()
  });

  console.log(chatMessages);
}
```

Apply the event handler to the event prop:
```jsx
return (
  <>
    <button onClick={sendMessage}>Send message</button>

    {chatMessages.map((chatMessage) => {
      // destructure the value from the object
      const {message, sender, id} = chatMessage;

      // return a ChatMessage component
      return (
        <ChatMessage 
          message={message} 
          sender={sender} 
          key={id}
        />
      )
    })}
  </>
)
```

Even though data wise this code works, it won't actually update the page with the new data.

**State:**
- data that is connected to the HTML
- when we update this data
- it will update the HTML

Converting a variable into a state will cause the page to re-render when the state changes.

**How to convert variables into state:**
- using the `React.useState( initialValue )` function
- enter the data as a parameter

```jsx
React.useState([{
  message: 'hello chatbot',
  sender: 'user',
  id: 'id1'
}, {
  message: "Hello! How can I help you?",
  sender: 'robot',
  id: 'id2'
},{
  message: "can you get me today date?",
  sender: 'user',
  id: 'id3'
}, {
  message: "Today is September 27" ,
  sender: 'robot',
  id: 'id4'
}]);
```

This code is still not finished.
- `React.useState( initialValue )` returns an array
- save it into a variable
- this array has two values

**array[0]**: returns the `current data` as data can change.
**array[1]**: a `function that sets the value.` The naming convention starts with `set___`

Both should be named using `camelCase`.

```jsx
const array = React.useState( ... );
const chatMessages = array[0];
const setChatMessages = array[1];
```

**Updater Function:**
- `array[1]` is known as the `Updater Function`
- in React, you should not update data directly (i.e. with `.push` for arrays)
- always use the function `set___` from `array[1]`
- because this tells react that the data changed
- and to update the HTML

**How to update data correctly in React:**
- `set___( newValue )` once setting the value
- it will replace the original value entirely
- In React, we should not modify the data directly
- create a copy, then modify the copy
- this helps react be more efficient

**Spread Operator (...):**
- takes the values in an array
- and copies them into a new array
- the Spread operator is used a lot 
- in React tutorials and documentation

Example of Spread operator:
```js
const myArray = [1,2,3];
const newValue = 4

const myNewArray = [...myArray, newValue]
```

Now to utilise the updater function correctly while maintaining the original data using the spread operator (...):
```jsx
const array = React.useState( //insert initial data here );
const chatMessages = array[0];
const setChatMessages = array[1];

function sendMessage() {
  setChatMessages([
    ...chatMessages,
    {
      message: 'example message',
      sender: 'user',
      id: crypto.randomUUID()
    }
  ]);
}
```

When the Updater Function runs, React will regenerate the HTML.

**Array Destructuring:**
- shortcut
- for when a function returns an array
- similar to object destructuring

```jsx
const array = React.useState( // initValue );
const [count, setCount] = array;
```

## 3.5 Retrieving input values

- to retrieve the text from a textbox where the user can type
- in normal js they can retrieve it from the DOM
- and then use `.value` property

- in React, the best practice 
- is to not use the DOM manually
- as React is managing the website
- using DOM manually might interfere with React

- instead, we should use React features
- to get the text from a textbox

**onChange event**
- runs a function
- when we changee the text inside an input
- the function stored in this prop is given one value
- known as `event`

```jsx
function ChatInput() {
  function saveInputText(event) {
    // place code here
  }

  return (
    <>
      <input 
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText}
      />
      <button>Send</button>
    </>
  );
}
```

**event.target:**
- provides the element that is changing
- use `.value` to obtain the value
- to save the data, use `state`
- `state` should be used to save data that
- changes over time

```jsx
function ChatInput() {
  const [inputText, setInputText] = React.useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    console.log(inputText);
  }

  return (
    <>
      <input 
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText}
      />
      <button onClick={sendMessage}>Send</button>
    </>
  );
}
```
Now we want to use this chunk of code in this component to send messages:
```jsx
function sendMessage() {
  setChatMessages([
    ...chatMessages, 
    {
      message: 'test',
      sender: 'user',
      id: crypto.randomUUID()
    }
  ]);
}
```
But now we face a problem, `setChatMessages` is in a seperate component `ChatMessage`. to solve this, we need to use a technique known as `lifting the state up`

<hr>

## 3.6 Lifting the State Up

- visualise all the components in the application as a tree
```
             ----------<App>--------
            |                       |
            |         [chatMessage, setChatMessages]
      <ChatInput>             <ChatMessages>
                                    |
                              <ChatMessage>,
                              <ChatMessage>,
                              ...
```
- to `lift the state up`, we move the updater function and the state variable
- one level above its current variable
- so we move it from `<ChatMessages>` component to `<App>`
- so that `<ChatInput>` can use it

**Lifting the State Up:**
- by moving the state up to an outer component
- lets us share state between multiple components

```
          [chatMessage, setChatMessages]
             ----------<App>--------
            |                       |
            |                       |
      <ChatInput>             <ChatMessages>
                                    |
                              <ChatMessage>,
                              <ChatMessage>,
                              ...
```

- setChatMessages updater function now available to both components

1. Lifting the State up:
```jsx
// main app that combines all the components
function App() {
  // lifting the state up
  const [chatMessages, setChatMessages] = React.useState( ... );

  return (
    <>
        <ChatInput />
        <ChatMessages />
    </>
  );
};
```

2. Share the state between components using props:

```jsx
// in App component
return (
  <>
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages 
        chatMessages={chatMessages}
      />
  </>
);
```
```jsx
function ChatInput({chatMessages, setChatMessages}) {
  // code here
}

function chatMessages({chatMessages}) {
  // code here
}
```

**React Naming Convention:**
- use the same name for all `props, components and data`
- ex: `<Video video={video} key={id} />`
- for consistency sake

<hr>

## 3.7 Summary of State and Event Handlers
-  each child in an array of components needs a unique key prop
-  key helps react track changes in array
<br>
-  useState returns an array stores two values, 
-  pass in initial value, array destructure it
-  array[0] = current data, array[1] = function that updates data
-  always copy the data, then modify it, then set it into the set function
<br>
-  lift tthe state up
-  both the ChatMessages and the ChatInput component 
-  need the chatMessages/setChatMessages updater function
<br>
-  ChatMessages needs the data to render the HTML
-  ChatInput needs the updater function to change the data
-  the closest parent is the App component
-  so lift the state up to the parent component
-  and share it between the components using props

<hr>

## 3.8 Controlled Inputs

- for example: removing a message from a textbox 
- after sending a message

```js
function ChatInput({ chatMessages, setChatMessages }) {
  // use state to save data the changes over time
  const [inputText, setInputText] = React.useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    // running the set function will always replace chatMessages with the new array
    // and regenerate the HTML
    setChatMessages([
      ...chatMessages, 
      {
        message : inputText,
        sender : "user",
        id : crypto.randomUUID()
      }
    ]);

    setInputText('');
  }

  return (
    <>
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        value={inputText}
        onChange={saveInputText}
      />
      <button
        onClick={sendMessage}
      >Send</button>  
    </>
  );
}
```

- `setInputText('')` is used after `setChatMessages` 
- to replace the `inputText` to an empty string
- `<input value={inputText} />` 
- the `inputText` variable is used as the value of the input
- thus when the updater function runs, the HTML is regenerated

**More facts on state:**
- state does not update immediately
- state is updated after all of the code is finished
- so `setChatMessages` cannot update `chatMessages` twice in the same function

```js
function sendMessage() {
  // running the set function will always replace chatMessages with the new array
  // and regenerate the HTML
  setChatMessages([
    ...chatMessages, 
    {
      message : inputText,
      sender : "user",
      id : crypto.randomUUID()
    }
  ]);

  const response = Chatbot.getResponse(inputText);

  setChatMessages([
    ...chatMessages,
    {
      message : response,
      sender : "robot",
      id : crypto.randomUUID()
    }
  ]);

  setInputText('');
}

```

- Instead:

```js
function ChatInput({ chatMessages, setChatMessages }) {
  // use state to save data the changes over time
  const [inputText, setInputText] = React.useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    // running the set function will always replace chatMessages with the new array
    // and regenerate the HTML

    const newChatMessages = [
      ...chatMessages, 
      {
        message : inputText,
        sender : "user",
        id : crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message : response,
        sender : "robot",
        id : crypto.randomUUID()
      }
    ]);

    setInputText('');
  }

  return (
    <>
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        value={inputText}
        onChange={saveInputText}
      />
      <button
        onClick={sendMessage}
      >Send</button>  
    </>
  );
}
```
# 4: Hooks and CSS with React

## 4.1 CSS in React

- CSS : changes the appearance of a website
- CSS with React : just use CSS normally
- such as style blocks

<br>
- use CSS selectors, styles, properties and values

```css
/* selector */
button {
  /* styles */
  /* property : value */
  background-color : green;
}
```

- in react, use the prop `className` 
- to set the `class` of an element
- React is JavaScript code
- In JavaScript, `class` is a reserved word already
- so a different word has to be used

<hr>

## 4.2 Hooks
- insert React features into our components
- for example: `React.useState()` is a hook
- state automatically updates the HTML when the data changes

**Example of React Hooks**
- `useState()`
- `useEffect()`
- `useRef()`

**Naming Convention**
- all hooks start with `use`

<hr>

## 4.3 `useEffect( function, dependencyArray )` Hook
- runs some code
- after the component
- is created or updated
- example: run code to scroll to the bottom

**Hooks Conventions**
- Put hooks at the top of the component
- hooks should not be inside anything
- not in any if statements or other nested functions

**How `useEffect( function, dependencyArray )` works**
- `useEffect( function, dependencyArray )`
- React will run this function
- after component is created
- every time the component is updated

<br>

- `dependencyArray` controls when useEffect runs
- an empty array: `[]` only run once after the component is created
- array with data: `[myVar]` run this function every time `myVar` changes

<br>

- best practice for `useEffect()`
- give useEffect a `dependency array`
- to avoid running the side effect function too often

```js
React.useEffect(() => {
  // side effect logic
}, []) // dependency array
```

## 4.4 `useRef()` Hook

- in react we should not use the DOM to access an element
- instead use built in react features
- `useRef`

**How `useRef( intialValue )` works**

- automatically save an HTML element from the component
- creates a `ref`
- `ref` is a container with special React features

```js
function Component() {
  // set the initial value to null
  const elementRef = React.useRef(null);

  return (
    <div ref={elementRef}>
      <input />
      <button>Send</button>
    </div>
  )
}
```

**`.current`**

- use `.current` to access the element
- from the `ref`

## 4.5 combining `useRef()` and `useEffect()` Hooks

- since `useRef` can only attach a ref after the element is created
- and `useEffect` can only run side effect code after an element is created
- combine together to run logic

Example:
```js
function ChatMessages({ chatMessages }) {
  const chatMessagesRef = React.useRef(null);

  React.useEffect(() => {
    const containerElem = chatMessagesRef.current;
    
    // change the scroll height 
    // when the element is out of the viewport
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }

  }, [chatMessages]);

  return (
    <div 
      className="chat-messages-container"
      ref={chatMessagesRef}
    >
      {chatMessages.map(chatMessage => {
        const { message, sender, id } = chatMessage;
        return ( 
          <ChatMessage 
            message={message} 
            sender={sender}
            key={id}
          /> 
        );
      })}
    </div>
  );
}
```

# 5: Proper React Setup using `Vite`

## 5.1 Command Line

- command line runs in a specific folder
- this folder is known as the `working directory` (working folder)
- at every command you can see the base `filepath` of the working directory

> `mkdir` : make directory (folder)

> `touch` : creates an empty file

> `pwd` : print working directory

> `ls` : list everything within folder

> `cd` : change working directory

> `..` : represents the outer folder, `cd ..` will move one folder out

## 5.2 npm

- `npm` is a  `node package manager`
- a `package` is an `external library`
- `npm` lets us install external libraries or packages into a project

> `npm install [packageName]` installs a package

- `npm` contains millions of packages
- that can be downloaded and used

## 5.3 Vite

- some packages also `add a command` to the command line
- package called `create-vite`
- intalling `create-vite` adds a command `create-vite`
- the command `create-vite`
- helps to set up a new React project

**To use `create-vite`:**

1. Install the create-vite package (`npm install create-vite`)
2. run `create-vite` in the command line

<br>

- `npm` has a shortcut that combines these two commands

> `npx create-vite` which does both steps
> - `x` in `npx` is execute
> - `npm create vite` = `npx create-vite`

<hr>

## 5.4 Basic React Setup Folder Structure

**node_modules**
- stores all the package

**src**
- stores all the code for the website (JSX and CSS)
  - **assets**
  - stores all websites images

**public**
- contains files that should be available to the public
- (public) the images can be accessed using a URL

<hr>

## 5.5 Basic React Setup File Structure

**.gitignore**
- used by `git`

**eslint.config.js**
- used by `eslint`
- highlights problems in JavaScript code
- install extension `eslint` in vscode

**index.html**
- contains all the HTML code for React Project
- loads JSX (/src/main.jsx) from a different file

**package-lock.json**
- stores the versions for all packages 
- so running `npm install` will ensure the correct
- dependencies and their versions are downloaded

**package.json**
- stores data of all dependencies
- npm installing a package automatically updates
- both `package.json` and `package-lock.json`

**README. md**
- for informational purposes

**vite.config.js**
- configures `vite`
- helps build websites
- creates a server

## 5.6 (Extra) Vite Features

**Hot Module Replacement (HMR)**
- Vite will automatically refresh page on changes
- just like live server

1. Vite detects the change
2. It recompiles only that module
3. It sends the updated module to the browser
4. The browser replaces that module at runtime

For example, in React:

- Component code updates
- React tries to re-run the component code
- But preserves component state (useState, useRef) when possible

**Optimized Production builds**
- uses `Rollup` for production
- bundles everything into optimized
- production ready files
  - `Tree-shaking` : Removes code/modules that arent used 
  - `Code splitting` : Doesnt send all pages at once
  - `Minification` : shorten files while keeping same behaviour
  - `Asset hashing` : Rename files

- running `vite build` bundles everything using `Rollup`

**Optimized Development builds**
- uses `esbuild` for development
- code transformer focused on speed
- less configurable and assumes for modern browser usage

- `babel` is slower than `esbuild` but is more equipped for
- adapting to older browsers

```bash
DEV:
Browser ← Vite ← esbuild

PROD:
Browser ← Rollup (via Vite)
               ↑
            esbuild
```

## 5.7 More React

- in older versions of React, PropTypes required prop validation
- older version of reacts needed PropTypes
- eslint still expects prop validation
- so prop validation needs to be turned off in eslint.config.js

Under rules:
> `'react/prop-types': 'off'`

**`<StrictMode></StrictMode>` Component**

- special component provided by React
- provides additional checks and warnings
- when developing app

**Vite Import Feature**

- Vite allows any type of file to be imported
- importing CSS files will apply the CSS to the code inside
- import images with different names to use them

```jsx
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png';
import LoadingSpinner from './assets/loading-spinner.gif';
```

- additionally, vite automatically adds
- .js or .jsx extensions automatically
- imports do not require the file extension

```jsx
import ChatInput from './components/ChatInput';
import ChatMessage from './components/ChatMessage';
```

# 6: Routing and Git with React

**React Setup Folder Structure**

- Create a folder to group all the pages together
- Create a React file component for each page of the website

<hr>

## 6.1 Routing

**Routing**

- create multiple pages in React
- normally, one page is in one HTML file
- normal HTML files has repeated code (title, link, headers)
- change one thing in one page requires changing all the pages
- routing allows the creation of multiple pages with 1 HTML file
- allowing reusable code to be shared
- to use routing, install `react-router` using `npm`

**React Router**

- There are multiple different use cases of the `react-router` package
- there is the `framework, data` and `declarative` versions of each
- each mode gives different amounts of control

<br>

- `declarative` version of `react-router`
- wrap the `<App />` component with `<BrowserRouter></BrowserRouter>`
- this is the `Main.jsx` file

```jsx
import { BrowserRouter } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

- in the `App.jsx` file
- insert the `<Routes>` component

**`<Routes>` Component**

- tells React all the pages that are in our website
- to add a page into the website
- use another component named `<Route>`

**`<Route>` Component**

- takes two props `path` and `element`
- the default prop `index` is equivalent to `path='/'`

```jsx
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      
      <Route path='checkout' element={<div>Checkout</div>}/>
    </Routes>
  )
}

export default App
```

- This is called a Single Page Application (SPA)
- only made up of 1 HTML file
- we use react to create multiple pages

<br>

**Auto format document**

- command palette `(Ctrl + Shift + P)`
- Search and Click `Format Document`

**Changing document title based on pages**

- in component, just use the `<title>` tag to change title

```jsx
function component() {
  return (
    <>
      <title>Page Title</title>
    </>
  );
}
```