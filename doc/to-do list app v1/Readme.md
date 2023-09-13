# ✨ Step-by-Step Guide to Create a To-Do List Web App with Virtual DOM ✨

This step-by-step guide will walk you through creating a simple To-Do List web application using a Virtual DOM (VDOM) approach. In this project, we'll use HTML, JavaScript, and Tailwind CSS for styling. The VDOM will help efficiently manage and update the user interface. 🚀

## Prerequisites 📋

Before you begin, ensure you have the following:

- Basic knowledge of HTML, JavaScript, and CSS.
- A code editor of your choice (e.g., Visual Studio Code).

## Project Files 📁

You can find the project files in this repository:

- `index.html`: The main HTML file for the To-Do List app.
- `main.js`: The JavaScript file handling app logic and VDOM operations.
- `VDOM.js`: The VDOM structure and components.
- `utils.js`: Utility functions for working with VDOM and managing tasks.

## 🌟 Step 1: Setup HTML Structure

Start by creating the basic HTML structure for your To-Do List web app in the `index.html` file. Include the necessary meta tags, scripts, and links to Tailwind CSS and Font Awesome for styling and icons.

```html
<!DOCTYPE html> <!-- Declares the document type as HTML5 -->
<html lang="en"> <!-- Specifies the document's language as English -->

<head>
  <meta charset="UTF-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Import Tailwind CSS files -->
  <script src="https://cdn.tailwindcss.com"></script> <!-- Loads the Tailwind CSS library from a CDN -->
  
  <!-- Tailwind Config -->
  <script>
    tailwind.config = { // Configures Tailwind CSS settings 
      theme: {
        extend: {
          screens: {
            Csm: "380px" // Custom screen size configurations can be added here
          }
        }
      }
    }
  </script>

  <!-- Import Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <title>to-do List</title> <!-- Sets the title of the web page -->
</head>

<body>
  <!-- This is the root of our tree, everything will be added here in this div -->
  <div id="root" class="min-h-screen w-screen overflow-hidden flex justify-center items-center bg-purple-900">
    <!-- This is the to-do section -->
    <div class="w-4/5 max-w-[400px] p-8 bg-purple-600 rounded-lg shadow-lg">
      <!-- This is the title -->
      <h1 class="text-[#fffbeb] mb-8 font-semibold text-[2.5rem] text-center max-Csm:text-[2rem]">to-do list</h1>
      
      <!-- This the task form -->
      <div class="mb-4 flex flex-col items-end justify-center gap-2">
        <!-- This is task input -->
        <input type="text" placeholder="Task Name" id="taskInput"
          class="w-full outline-none duration-[0.5s] bg-transparent p-2 border-b-2 border-b-[#fffbeb] max-Csm:text-[1rem]  placeholder:text-[#fffbeb] text-[1.2rem] caret-[#fffbeb] text-[#fffbeb]">
          
        <!-- This is add task button -->
        <button id="addTaskBtn"
          class="capitalize p-2 w-full mt-5 rounded-md  border-2 duration-[0.4s] border-transparent hover:border-purple-800/50 text-[#fffbeb] text-[1rem] ">add task</button>
      </div>
      
      <!-- This is tasks container -->
      <div class="flex flex-col gap-4" id="tasksContainer">
        <!-- Example task -->
        <div class="flex justify-between items-center flex-wrap bg-purple-800 rounded-lg p-4 max-Csm:p-2">
          <!-- Task name -->
          <p class="p-active text-[1rem] max-Csm:text-[.8rem] text-[#fffbeb] truncate max-w-[90%]">Tset</p>
          
          <!-- Delete button -->
          <i class="fa-solid fa-trash text-red-500 cursor-pointer max-Csm:text-[.8rem] text-[1rem]" onclick="deleteTask(this)"></i>
        </div>
      </div>
      
      <!-- Clear tasks button -->
      <button id="clearTasksBtn" 
        class="capitalize p-2 w-full mt-5 rounded-md bg-purple-800 duration-[0.4s] hover:bg-transparent text-[#fffbeb] text-[1rem]">clear tasks</button>
    </div>
  </div>

  <!-- This is the main JS file -->
  <script type="module" src="./main.js"></script> <!-- Links to your main JavaScript file -->
</body>

</html>

```

## 🎨 Step 2: Create VDOM Structure

In the `VDOM.js` file, define the structure of the Virtual DOM using classes like `VDOM` and `TaskComponent`. These classes will represent the HTML elements and components in your application.

```javascript
// Structure of Virtual DOM
export class VDOM {
  static ids = 0; // Static property to keep track of unique IDs
  constructor(type, props = {}, children = []) {
    this.type = type; // Type of the HTML element or component
    this.props = props; // Properties (attributes) of the element or component
    if (this.props['id'] == undefined) this.props['id'] = VDOM.ids++;
    // Assign a unique ID if not provided
    this.children = children; // Child elements or components
    this.VDOMObject; // A reference to the actual DOM element
  }

  // Find a subtree with a specific 'type'
  getSubTreeByType(type) {
    if (this.type == type) return this; // If the current node matches, return it
    for (const child of this.children) {
      if (typeof child === 'object') {
        const result = child.getSubTreeByType(type);
        if (result !== null) {
          return result; // Return the matching subtree
        }
      }
    }
    return null; // Return null if not found
  }
  
  // Find a subtree with a specific 'id'
  getSubTreeById(id) {
    if (this.props['id'] == id) return this; // If the current node's ID matches, return it
    for (const child of this.children) {
      if (typeof child === 'object') {
        const result = child.getSubTreeById(id);
        if (result !== null) {
          return result; // Return the matching subtree
        }
      }
    }
    return null; // Return null if not found
  }

  // Convert the VDOM tree to a plain JavaScript object for storage or manipulation
  convertToObject() {
    let object = {
      type: this.type,
      props: this.props,
      children: [],
    };

    for (const child of this.children) {
      if (typeof child == 'object') {
        object.children.push(child.convertToObject()); // Recursively convert children
      } else {
        object.children.push(child); // Add text or non-VDOM children as-is
      }
    }

    return object;
  }

  // A utility method to print the VDOM structure for debugging
  print() {
    console.log(this);
  }
}

// Structure of the task component, extends VDOM
export class TaskComponent extends VDOM {
  constructor(taskName) {
    super('div', {
      'class': 'flex justify-between items-center flex-wrap bg-purple-800 rounded-lg p-4 max-Csm:p-2',
    }, [
      new VDOM('p', {
        'class': "p-active text-[1rem] max-Csm:text-[.8rem] text-[#fffbeb] truncate max-w-[90%]",
      }, [taskName]), // Text content for the task
      new VDOM('i', {
        'class': "fa-solid fa-trash text-red-500 cursor-pointer max-Csm:text-[.8rem] text-[1rem]",
        'onclick': 'deleteTask(this)',
      }), // Delete button
    ]);
  }
}

```

## 🔄 Step 3: Convert HTML to Virtual DOM and Manage Tasks

In the `utils.js` file, create functions to convert HTML elements to VDOM and vice versa. These functions will help in managing the virtual DOM.

```javascript
// import module
import { VDOM, TaskComponent } from './VDOM.js';

// Variables
var taskInput = document.getElementById('taskInput'); // Get the task input element
var addTaskBtn = document.getElementById('addTaskBtn'); // Get the add task button element
var clearTasksBtn = document.getElementById('clearTasksBtn'); // Get the clear tasks button element
let emptyTag = new VDOM('h1', {'class': "capitalize opacity-70 text-white font-bold", 'id':"emptyTag"}, ['tasks is empty!']); // Create a Virtual DOM element for displaying an empty message

// Get root
var root = convertHTMLElementToVDOM(document.getElementById('root')); // Convert the root HTML element to a Virtual DOM element
var tasksContainer = document.getElementById('tasksContainer'); // Get the tasks container HTML element

// Convert HTML element to Virtual DOM
export function convertHTMLElementToVDOM(element) {
  const VDOMElement = new VDOM(element.tagName);

  for (let i = 0; i < element.attributes.length; i++) {
    VDOMElement.props[element.attributes[i].name] = element.attributes[i].value;
  }

  for (const child of element.childNodes) {
    if (child.nodeType === 1) {
      VDOMElement.appendChild(convertHTMLElementToVDOM(child)); // Recursively convert child HTML elements to Virtual DOM
    } else if (child.nodeType === 3) {
      VDOMElement.appendChild(child.textContent);
    }
  }

  return VDOMElement;
}

// Convert Object to Virtual DOM
export function convertObjectToVDOM(object) {
  if (typeof object == 'object') {
    VDOMObject = new VDOM(object.type, object.props);
    for (const child of object.children) {
      VDOMObject.children.push(convertObjectToVDOM(child)); // Recursively convert child objects to Virtual DOM
    }
    return VDOMObject;
  } else {
    return object;
  }
}

// Store data in 'VDOMData.js' file
const worker = new Worker('VDOMData.js');

// Receive data function
export function requestDataFromStorage() {
  return new Promise((resolve, reject) => {
    worker.postMessage({ request: 'getData' });
    // Listen for messages from the worker
    worker.addEventListener('message', (event) => {
      resolve(convertObjectToVDOM(event.data));
    });
    // Handle errors
    worker.addEventListener('error', (error) => {
      reject(error);
    });
  });
}

// Store data function
export function sendDataToStorage(data) {
  if (data != undefined) worker.postMessage({ request: 'sendData', data: data.convertToObject() });
  else console.error("You are sending Undefined Data?!");
}

// Add a task to Virtual DOM
export function addTask() {
  let VTasksContainer = root.getSubTreeById(tasksContainer.id);
  let taskName = taskInput.value;
  taskInput.value = "";
  if (taskName != "") {
    let task = new TaskComponent(taskName);
    VTasksContainer.appendChild(task);
    checkTaskContainer();
  }
}

// Delete all tasks from Virtual DOM
export function clearTasks() {
  var VTasksContainer = root.getSubTreeById(tasksContainer.id);
  var children = [...VTasksContainer.children];
  for (const child of children) {
    if (typeof child == 'object') {
      VTasksContainer.removeChild(child.props['id']);
    }
  }
  checkTaskContainer();
}

// Delete a task from Virtual DOM
export function deleteTask(btn) {
  var task = btn.parentElement;
  root.removeChild(task.id);
  checkTaskContainer();
}

// Fetch HTML elements
export function fetchHTMLElements() {
  tasksContainer = document.getElementById('tasksContainer');
  taskInput = document.getElementById('taskInput');
  addTaskBtn = document.getElementById('addTaskBtn');
  clearTasksBtn = document.getElementById('clearTasksBtn');
}

// Check Task Container and update Virtual DOM
export function checkTaskContainer() {
  var VTasksContainer = root.getSubTreeById(tasksContainer.id);
  let parent = tasksContainer.parentElement;
  if (!VTasksContainer.hasHTMLChild()) {
    VTasksContainer.appendChild(emptyTag);
  } else {
    VTasksContainer.removeChild(emptyTag.props['id']);
  }
  parent.replaceChild(VTasksContainer.render(), tasksContainer);
  fetchHTMLElements();
  sendDataToStorage(root);
}

```

## ✅ Step 4: Implement Task Management

In `main.js`, implement functions for adding, deleting, and clearing tasks. These functions will interact with the VDOM to update the user interface based on user actions.

```javascript
// Import necessary modules and functions
import { VDOM, TaskComponent } from './VDOM.js'; // Import classes from VDOM.js
import {convertHTMLElementToVDOM, sendDataToStorage, addTask, clearTasks, deleteTask, checkTaskContianer} from './utils.js'; // Import functions from utils.js

// Get the root element from real DOM and convert it to a Virtual DOM (VDOM)
var realDOM = document.getElementById("root"); // Get the real DOM element with the ID 'root'
var root = convertHTMLElementToVDOM(realDOM); // Convert the real DOM element to a Virtual DOM element
sendDataToStorage(root); // Send the VDOM data to storage (likely for later retrieval)
var parent = realDOM.parentElement; // Get the parent element of the 'root' element

parent.replaceChild(root.render(), realDOM); // Replace the real DOM 'root' element with the rendered VDOM 'root' element
realDOM = root.render(); // Update the 'realDOM' variable with the rendered VDOM 'root' element

// Declare variables
var addTaskBtn = document.getElementById('addTaskBtn'); // Get the 'addTaskBtn' button element from the real DOM
var clearTasksBtn = document.getElementById('clearTasksBtn'); // Get the 'clearTasksBtn' button element from the real DOM

checkTaskContianer(); // Check and manage the task container (possibly updates the UI based on tasks)

// Define a global 'deleteTask' function that can be called from the browser's console
window.deleteTask = deleteTask;

// Add event listeners to the buttons
addTaskBtn.addEventListener('click', addTask); // Listen for a click event on the 'addTaskBtn' and call the 'addTask' function
clearTasksBtn.addEventListener('click', clearTasks); // Listen for a click event on the 'clearTasksBtn' and call the 'clearTasks' function

```

## 🔄 Step 5: Update the VDOM

In your task management functions, update the VDOM to reflect changes in the task list. Make use of the `appendChild`, `editChild`, and `removeChild` methods of the VDOM to manipulate the virtual DOM structure.

```javascript
// In VDOM class ====================================
  // Append a child element or component to the current node
  appendChild(child) {
    this.children.push(child);
  }

  // Edit a property of a child with a specific 'id'
  editChild(id, propName, propValue) {
    this.getSubTreeById(id).props[propName] = propValue;
  }

  // Remove a child with a specific 'id'
  removeChild(id) {
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (typeof child === 'object') {
        if (child.props['id'] == id) {
          this.children.splice(i, 1); // Remove the child from the children array
          return;
        }
        child.removeChild(id); // Recursively remove the child with the specified ID
      }
    }
  }


```

## 👀 Step 6: Check and Render the Task Container

Create a function to check if the task container is empty and update the VDOM accordingly. This function will help display a message when there are no tasks.

```javascript
// In VDOM class ====================================
  // Convert the VDOM to Real DOM
  render() {
    this.VDOMObject = document.createElement(this.type); // Create a DOM element based on 'type'

    // Set attributes (props) on the DOM element
    for (const propName in this.props) {
      this.VDOMObject.setAttribute(propName, this.props[propName]);
    }

    // Append child elements or text to the DOM element
    for (const child of this.children) {
      if (typeof child === 'string' || typeof child === 'number') {
        this.VDOMObject.appendChild(document.createTextNode(String(child)));
      } else {
        this.VDOMObject.appendChild(child.render());
      }
    }
    return this.VDOMObject; // Return the created DOM element
  }

  // Check if the current node has HTML children (not just text)
  hasHTMLChild() {
    for (const child of this.children) {
      if (typeof child == 'object') return true; // If there is an HTML child, return true
    }
    return false; // Return false if there are no HTML children
  }

```


## 🎉 Step 7: Styling with Tailwind CSS

Use Tailwind CSS classes in your `index.html` file to style your To-Do List app. You can customize the styles according to your preferences by modifying the classes.

## 🚀 Step 8: Test Your Application

Open your `index.html` file in a web browser to test your To-Do List web app. You can add tasks, delete them, and clear the entire list. The VDOM should efficiently manage updates to the user interface.

## Conclusion 🌟

Congratulations! You've successfully created a To-Do List web application using a Virtual DOM (VDOM) approach. This project demonstrates how VDOM can help manage complex UI updates efficiently. You can further enhance this application by adding features like task prioritization or due dates. Happy coding! 😄