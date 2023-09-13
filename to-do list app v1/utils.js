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
