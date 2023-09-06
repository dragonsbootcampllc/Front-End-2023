# The Evolution of React: A Comprehensive Overview

---

## The Evolution of the Web: Tracing the history and development of web technologies:

Like anything else, the web has gone through different stages(web 1.0 | web 2.0 | web 3.0)

-   web 1.0:

    This is the term now used for basic websites that provide a limited or static user experience. This term would be used to describe the simple "shop front" websites of the past. Of course e-commerce was the main area of explosion that saw the web first used in a commercial manner.

-   web 2.0:

    As technology evolved, websites were able to provide a richer and more interactive user experience. Web 2.0 has been used to describe this web phenomenon. Examples include social networking sites such as Facebook and MySpace.

-   Finally... web 3.0

    Web 3.0 is by no means a comprehensive or indeed final definition, and is currently used to include future evolution as well. In many ways it is really a marketing term like Web 2.0 was, rather than any specific technology and can mean different things to different organisations.

🟢 [Source](https://www.eploy.co.uk/blog/may-2012/the-evolution-of-web-technologies/)

---

## The Rendering Process in the Past: Exploring how web documents were displayed in earlier times:

It is possible to simplify how web rendering was in the past (and the present as well)... that everything was done on the server and then the page was sent to the client. Thus, the browser’s task was limited to displaying this page/pages only.

🟢 [Source](https://deno.com/blog/the-future-and-past-is-server-side-rendering)

---

## Problem-Solving with React: Understanding the issues that React addresses in web development:

Almost the biggest problem that React tried to solve is the frequent rendering of the actual dom and the cost of that in terms of resources and the impact on the efficiency of the app. React has solved this through the virtual dom (we will talk soon about the difference between the actual and virtual dom)

There are other benefits to using React (and other libraries and frameworks), including, for example, the ability to create reusable components.

🟢 [Source](https://www.quora.com/What-does-react-js-try-to-solve-Can-you-provide-a-practical-example)

---

## Benefits of Framework Utilization: Exploring the advantages of using a framework in web development.

In addition to relying on the virtual dom, there are several other benefits to using Front End libraries and frameworks, including:

-   **Code reusability**: The use of frameworks and libraries provides the possibility of creating reusable components, which speeds up the development process
-   **Help and Support**: The most popular frameworks are very popular among developers, which leads to the creation of a large technical community that can help each other
-   **A large number of auxiliary tools and libraries**: As a result of the presence of a large community of developers who use these frameworks, this has led to the creation of many libraries that contribute to facilitating and accelerating the process of creating applications/websites.
-   **Code maintenance**: Ease of maintenance and testing of the code.
-   **Easy-scalable functionality**: A lot of time and effort are saved by using frameworks that often provide ready-made and easy-to-use functions.
-   **Performance**: Frameworks were created to improve rendering and performance more than pure JavaScript would

---

## Framework vs. Library: Distinguishing between a framework and a library and their respective roles:

Both libraries and frameworks are similar in that they are code written by a person(s) to help developers and the main difference appears in what is called "inversion of control".

-   In libraries, you are in control of calling and using the library, so you have more freedom in adapting the code

-   As for the frameworks, they are the ones who control the call and use of your code, and here your freedom to adapt the code is reduced

This difference is likened to the fact that if you go to buy a piece of ready-made furniture, you choose what you want, "using the library."
But if you request to build a house from the beginning, the contractor is in control. “You use the framework.”

🟢 [Source](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/)

---

## Understanding React's Inner Workings: Delving into the working principles of React:

How React works internally can be explained "under the hood" By defining and explaining some terms:

-   **JSX** (Javascript and XML): Allowing the writing of "HTML-like" with the JavaScript code, with some changes that we hope to use.. such as using "className" instead of "class" because this keyword is reserved for JavaScript.
-   **Virtual DOM**: It is what React uses instead of an actual dom.. We will talk about it in depth shortly.
-   **Component-Based Architecture**: React follows a component-based approach that breaks down the UI into self-contained, reusable components.
-   **State**: It is reactive data, when it changes, the component is re-rendered.
-   **props**: It is data that is sent from the parent component to the children, which allows data to be shared between components.
-   **key**: When rendering an array in React, we provide a prop named key with each element, which helps in presenting the array effectively “to know which element will be changed specifically and for other reasons.”
-   **Rendering**: When displaying a component on a page or changing it to "change a state in it, for example,", this verb is called rendering, "we will talk about it shortly".

🟩 Sources:

-   [React under the hood](https://www.freecodecamp.org/news/react-under-the-hood/)
-   [Front end development handbook](https://www.freecodecamp.org/news/front-end-javascript-development-react-angular-vue-compared/#what-is-react)
-   [10 react principles concepts every react developer must know](https://dev.to/mojodev/10-react-principles-concepts-every-react-developer-must-know-3549)

---

## Client-Side vs. Server-Side: Differentiating between client-side and server-side in web applications:

-   **Server-side rendering**:

    Server-side rendering generates the full HTML for a page on the server in response to navigation. This avoids additional round-trips for data fetching and templating on the client, since it's handled before the browser gets a response.

-   **Client-side rendering**:

    means rendering pages directly in the browser with JavaScript. All logic, data fetching, templating and routing are handled on the client rather than the server. The effective outcome is that more passed to the user's device from the server, and that comes with its own set of trade-offs.

🟢 [Source](https://web.dev/rendering-on-the-web/)

---

## Advantages of Client-Side Development: Exploring the reasons for using client-side technologies:

#### The benefits of this approach are two-fold:

-   Great user experience: If the user has good internet speed, after the data and packages are downloaded and everything is in place, the site becomes fast. Without attacking the server, everything happens on the page and the data is changed instantly.

-   Caching. Because you aren’t using a server, you can cache the core HTML and JS bundles and data.

🟢 [Source](https://deno.com/blog/the-future-and-past-is-server-side-rendering)

---

## Advantages of Server-Side Development: Understanding the benefits of server-side technologies:

#### There are many benefits to moving the work a browser does to render a website to the server:

-   Performance is higher with the server because the HTML is already generated and ready to be displayed when the page is loaded.
-   Compatibility is higher with server-side rendering because, again, the HTML is generated on the server, so it is not dependent on the end browser.
-   Complexity is lower because the server does most of the work of generating the HTML so can often be implemented with a simpler and smaller codebase.

🟢 [Source](https://deno.com/blog/the-future-and-past-is-server-side-rendering)

---

## React's Rendering Mechanism: Explaining the concept of rendering in React:

Before React components can be displayed on the screen, they must first be rendered by React. The render phase is the initial phase of the rendering process. In this phase, the JSX code is converted to a JavaScript representation of what the HTML structure should look like.

On the initial render, it starts from the root component and works its way down, building out a React element tree of what the actual DOM should look like.

Re-rendering follows a similar approach but with a key difference: it creates a new JavaScript representation of the DOM, identifying all the components marked as needing an update. After this, it uses a process known as diffing to identify the changes between the old and new tree of React elements (aka the virtual DOM)

---

## The Document Object Model (DOM): Defining the DOM and its significance in web development:

> "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

-   JavaScript can change all the HTML elements in the page
-   JavaScript can change all the HTML attributes in the page
-   JavaScript can change all the CSS styles in the page
-   JavaScript can remove existing HTML elements and attributes
-   JavaScript can add new HTML elements and attributes
-   JavaScript can react to all existing HTML events in the page
-   JavaScript can create new HTML events in the page

🟢 [Source](https://www.w3schools.com/js/js_htmldom.asp)

---

## The Virtual DOM: Understanding the concept of the virtual DOM in React:

React utilizes a Virtual DOM, which is a lightweight representation of the actual DOM. By using the Virtual DOM, React efficiently updates and renders components, resulting in faster and smoother user interfaces.

One of the key features of React is its use of a Virtual DOM (Document Object Model). The Virtual DOM is a lightweight representation of the actual DOM, a tree-like structure that represents the HTML elements of a web page. It acts as an intermediary layer between the application's logic and the browser's rendering engine.

Behind the scenes, React creates a Virtual DOM representation of the component's UI structure. When a state change occurs, React efficiently calculates the difference between the previous Virtual DOM and the updated Virtual DOM. This process is known as reconciliation.

React then applies the necessary changes to the actual DOM, updating only the specific parts that have changed. This approach helps optimize performance by minimizing DOM manipulations and updates.

By using the Virtual DOM, React provides a more efficient way of updating the user interface. It reduces the number of direct manipulations on the actual DOM, resulting in faster rendering and improved application performance.

🟢 [Source](https://www.freecodecamp.org/news/front-end-javascript-development-react-angular-vue-compared/#what-is-react)

---

## Pros and Cons of the Virtual DOM: Evaluating the advantages and disadvantages of the virtual DOM:

#### Pros:

-   Speed and performance boost
-   Lightweight
-   It is simple and clear
-   Amazing diffing algorithm
-   It can be used on other frameworks not just react

#### Cons:

-   Higher memory usage problems as the diffing algorithms need to keep comparing the elements to know which components needs to be updated or changed.
-   It is not easily integrated into many other frameworks.
-   You can’t use it or target template engines.

🟢 [Source](https://www.knowledgehut.com/blog/web-development/react-virtual-dom)

---

## React vs. jQuery: Highlighting the differences between React and jQuery:

#### jQuery Features:

-   jQuery supports HTML/DOM manipulation
-   It also wraps HTML event methods
-   It provides CSS manipulation
-   It is easier to use effects and animations with jQuery
-   AJAX calls are simplified on jQuery
-   It is a library full of different utilities, including plugins for almost any kind of task out there
-   jQuery runs exactly the same on almost all major browsers

#### React Features:

-   Using React gives the developer access to React code snippets and components, thus they can create specific parts of an User Interface
-   By using JSX you can directly manipulate DOM
-   It also provides a Virtual DOM to improve the performance of the website
-   It is an open source project
-   There is a React library to attend to whatever specific UI function a developer needs to address
-   The React library is growing exponentially, along with the community’s curated library add-ons

#### jQuery vs. React:

|                    | jQuery                                                                                                                                                                                                                     | React                                                                                                                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition         | jQuery is a “write less, do more” JavaScript library. It simplifies complex JavaScript tasks by wrapping them into straightforward methods.                                                                                | React is a JavaScript library for building user interfaces (UI). It is a tool for developing different UI elements and components.                                    |
| Release            | jQuery was initially released in 2006 by The jQuery Team                                                                                                                                                                   | React was initially released in 2013 by Facebook.                                                                                                                     |
| Size               | The size of the jQuery library is approximately 18% less compared to React.                                                                                                                                                | While this difference may seem insignificant, it can have a substantial impact on page load times.                                                                    |
| Speed              | jQuery makes use of the traditional DOM. In the case of a traditional DOM update, the tree is updated from the root all the way down. Thus, DOM updates can take more time, especially for large and complex applications. | As opposed to jQuery, React makes use of a Virtual DOM. The use of a virtual DOM speeds up the DOM update process. This makes React substantially faster than jQuery. |
| large applications | jQuery is a utility library that wraps different browser APIs. It is not specifically designed for building large applications. If we use jQuery for large applications.                                                   | As opposed to jQuery, React is a component management library. It is favorable for developing large-sized applications                                                |

🟢 [Source](https://www.educative.io/answers/jquery-vs-react)

🟢 [Source](https://www.upgrad.com/blog/jquery-vs-react/)

---
