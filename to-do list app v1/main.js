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
