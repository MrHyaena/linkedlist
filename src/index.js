import "./styles.css";

// Constructors for classes

class LinkedList {
  constructor() {
    this.head = null;
    this.counter = 0;
  }
}

class node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

// Functions

function append(value) {
  let newNode = new node(value);
  if (list.head == null) {
    list["head"] = newNode;
  } else {
    let current = list.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }
  list.counter = list.counter + 1;
}

function prepend(value) {
  let newNode = new node(value);
  let currentList = list.head;
  list.head = null;
  newNode.nextNode = currentList;
  list.head = newNode;
  list.counter = list.counter + 1;
}

function size() {
  console.log(list.counter);
}

function head() {
  console.log(list.head);
}

function tail() {
  if (list.head == null) {
    console.log(list.head);
  } else {
    let current = list.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    console.log(current);
  }
}

function at(index) {
  if (list.head == null && index == 0) {
    console.log(list.head);
  } else if (list.counter < index) {
    console.log("Item on this index position does not exist");
  } else {
    let current = list.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }

    console.log(current);
  }
}

function pop() {
  if (list.head == null) {
    console.log("List is empty");
  } else {
    let current = list.head;
    let popCount = list.counter - 2;

    for (let i = 0; i < popCount; i++) {
      current = current.nextNode;
    }

    current.nextNode = null;
    list.counter = list.counter - 1;
    console.log(list);
  }
}

function contains(value) {
  if (list.head == null) {
    console.log("List is empty");
  } else {
    let current = list.head;
    let valueTrue = 0;

    for (let i = 0; i < list.counter; i++) {
      if (current.value == value) {
        valueTrue = 1;
      }
      current = current.nextNode;
    }

    if (valueTrue == 1) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

function find(value) {
  if (list.head == null) {
    console.log("List is empty");
  } else {
    let current = list.head;
    let valueTrue = 0;
    let indexValue = 0;

    for (let i = 0; i < list.counter; i++) {
      if (current.value == value) {
        valueTrue = 1;
        indexValue = i;
      }
      current = current.nextNode;
    }

    if (valueTrue == 1) {
      console.log(indexValue);
    } else {
      console.log(null);
    }
  }
}

function toString() {
  if (list.head == null) {
  } else {
    let current = list.head;
    let string = "";

    while (current.nextNode !== null) {
      string = string + "( " + current.value + " ) -> ";
      current = current.nextNode;
    }

    string = string + "( " + current.value + " )";
    console.log(string);
  }
}

function insertAt(value, index) {
  let newNode = new node(value);
  if (index > list.counter - 1) {
    console.log("Index does not exist");
  } else {
    let current = list.head;

    if (index == 0) {
      list.head = null;
      list.head = newNode;
      list.head.nextNode = current;
      list.counter = list.counter + 1;
    } else {
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      console.log(current);
      let memory = current.nextNode;
      current.nextNode = null;
      current.nextNode = newNode;
      current.nextNode.nextNode = memory;
      list.counter = list.counter + 1;
    }
  }
  console.log(list);
}

function removeAt(index) {
  if (index > list.counter - 1) {
    console.log("Index does not exist");
  } else {
    let current = list.head;

    if (index == 0) {
      let memory = current.nextNode;
      console.log(memory);
      list.head = null;
      list.head = memory;
    } else {
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      let memory = current.nextNode.nextNode;
      current.nextNode = null;
      current.nextNode = memory;
      console.log(memory);
    }
  }
}

// Test data

const list = new LinkedList();
append("one");
append("two");
append("three");
prepend("four");

contains("four");
find("four");
insertAt("dog", 0);
toString();
removeAt(4);
toString();
