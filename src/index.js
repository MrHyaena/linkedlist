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

// Test data

const list = new LinkedList();
append("one");
append("two");
append("three");
prepend("four");

size();
head();
tail();
at(1);
console.log(list);

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
