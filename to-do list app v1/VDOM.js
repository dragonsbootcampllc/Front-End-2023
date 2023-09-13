
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

  // Check if the current node has HTML children (not just text)
  hasHTMLChild() {
    for (const child of this.children) {
      if (typeof child == 'object') return true; // If there is an HTML child, return true
    }
    return false; // Return false if there are no HTML children
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
