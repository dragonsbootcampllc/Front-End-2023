# The Evolution of React: A Comprehensive Overview

## Table of content
- [The Evolution of the Web](#the-evolution-of-the-web)
- [The Rendering Process in the Past](#the-rendering-process-in-the-past)
- [Problem-Solving with React](#problem-solving-with-react)
- [Framework vs. Library](#framework-vs-liberary)
- [Advantages of Client-Side Rendering](#advantages-of-client-side-rendering)
- [Advantages of Server-Side Rendering](#advantages-of-server-side-rendering)
- [React's Rendering Mechanism](#reacts-rendering-mechanism)
- [Pros and Cons of the Virtual DOM](#pros-and-cons-of-the-virtual-dom)
- [React vs. jQuery](#react-vs-jquery)
- [Referances](#referances)

## The Evolution of the Web
In 1991, Tim Berners-Lee, a British computer scientist, proposed the concept of the World Wide Web while working at CERN
but I believe that the web began to take shape with the Mosaic web browser that support images and a user-friendly interface.

The next big jump for the web is web 2.0 in fact i have skiped alot of fases in the web evolution but web 2.0 represented a shift towards user-generated content, collaboration, and social interaction on the web and started the new era for human beings and major changes in all fields of life.
Web 2.0 refers to websites that prioritize content created by users, emphasize user-friendliness, foster a culture of participation, and ensure compatibility and seamless integration with other products, systems, and devices for the end users.


## The Rendering Process in the Past
- Parsing HTML: The browser reads and interprets the HTML code of a web page

- Constructing the DOM: The browser creates a hierarchical structure, known as the Document Object Model (DOM), based on the HTML elements in the document.

- CSS Processing: The browser processes CSS stylesheets associated with the web page, determining the visual appearance and layout

- JavaScript Execution: If present, the browser executes JavaScript code, enabling dynamic and interactive functionality on the page.

## Problem-Solving with React
### react is Flexible
React's flexibility allows developers to efficiently build complex user interfaces, leverage reusable components, and seamlessly integrate with other libraries and frameworks.

### React Has Great Performance
React is adabting the concept of single page application witch allow updating the state of the app without rerender the hole application

### React is Easy to Test
React's design is very user friendly for testing.

### Framework vs liberary
- A framework is a comprehensive toolset that offers a structured approach to application development, defining architecture and providing pre-defined patterns and functionalities.

- Libraries focus on providing specific capabilities

Developers can choose to use libraries independently, whereas frameworks are used as a foundation for building entire applications.

## Advantages of Client-Side Rendering
a type of development that involves programs that run on a client's or user's device

    benifits
        1-  Reduced server-side workload
        2- Improved separation of concerns
        3- Reduced server-side costs


## Advantages of Server-Side Rendering
Server-side rendering (SSR) is an application’s ability to convert HTML files on the server into a fully rendered HTML page for the client

    benifits:
        1- Faster load time.
        2- Easy indexation by search engines.
        3- There are fewer issues with social media indexing.

## React's Rendering Mechanism
- First lets talk about the DOM 
    The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the we

- React maintains a virtual representation of the actual DOM

- Component Rendering: React components are the building blocks of the UI. When a component's state or props change, React triggers a re-rendering process.

- Reconciliation: React's reconciliation algorithm compares the previous virtual DOM with the new one

- Virtual to Actual DOM: After the reconciliation process, React updates the actual DOM with the required changes based on the updated virtual DOM.

## Pros and Cons of the Virtual DOM
    Pros:
        1- Speed and performance boost
        2- Lightweight
        3- Amazing diffing algorithm
        4- It can be used on other frameworks not just react

    Cons:
        1- Higher memory usage problems as the diffing algorithms need to keep comparing the elements to know which components needs to be updated or changed.
        2- It is not easily integrated into many other frameworks.
## React vs. jQuery
- jQuery makes use of the traditional DOM.
So it's Less speed Compared to React

- jQuery is not specifically designed for building large applications. 

- React is a component management library. It is favorable for developing large-sized applications

## Referances
- [web 2.0 - wekipedia](https://en.wikipedia.org/wiki/Web_2.0)
- [WEB DEVELOPMENT TIMELINE: PAST, PRESENT & FORECASTING UPDATE](https://coderiders.am/blog/web-development-timeline-past-present-and-forecasting)
- [Benefits of Frameworks](https://www.profoundlogic.com/benefits-of-frameworks/)
- [What is server-side rendering](https://solutionshub.epam.com/blog/post/what-is-server-side-rendering)
- [Top 5 benefits of client-side rendering frameworks](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Top-five-benefits-of-client-side-rendering)
- [Why You Should Use React.js - Freecodecamp](https://www.freecodecamp.org/news/why-use-react-for-web-development/)
- [React Virtual DOM](https://www.knowledgehut.com/blog/web-development/react-virtual-dom#pros-and-cons-of-virtual-dom%C2%A0)
- [React vs jQuery - Edicative](https://www.educative.io/answers/jquery-vs-react)
