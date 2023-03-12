// Stack implementation

// class Stack {
//   constructor() {
//     this.items = [];
//     this.elemsCount = 0;
//   }

//   push(value) {
//     this.items[this.elemsCount] = value;
//     this.elemsCount += 1;
//   }

//   pop() {
//     // delete this.items[this.elemsCount - 1];\
//     if (this.elemsCount === 0) return "It is already empty";
//     this.items.splice(this.elemsCount - 1, 1);
//     this.elemsCount -= 1;
//   }

//   length() {
//     return this.elemsCount;
//   }

//   peek() {
//     if (this.elemsCount === 0) return "It is empty";
//     return this.items[this.elemsCount - 1];
//   }
//   indexOfElem(elem) {
//     for (let i = 0; i <= this.elemsCount; i++) {
//       if (this.items[i] === elem) {
//         return i;
//       }
//     }
//   }

//   clear() {
//     this.items = [];
//     this.elemsCount = 0;
//   }
// }

// const myStack = new Stack();
// myStack.push("Pablo");
// myStack.push("Xuan Karlo");
// myStack.push("1");
// myStack.push("Minato");
// myStack.push(5);
// // myStack.pop();
// // myStack.clear();

// document.querySelector("body").innerText =
//   "indexOfElem() Find elements index with value example(1) " +
//   myStack.indexOfElem("1") +
//   "\n" +
//   "length() Stacks length is " +
//   myStack.length() +
//   "\n" +
//   "peek() Stacks peek is " +
//   myStack.peek() +
//   `\n` +
//   "Stack is " +
//   JSON.stringify(myStack.items, undefined, 20);

// linked list implementation first version

// class Node {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// let linkedList = null;
// const add = (val) => {
//   const newNode = new Node(val);

//   if (!linkedList) {
//     linkedList = newNode;
//   } else {
//     let tempNode = linkedList;
//     while (tempNode.next) {
//       tempNode = tempNode.next;
//     }
//     tempNode.next = newNode;
//   }
// };
// add("mko");
// add("amigo");
// add("pablo")
// console.log(linkedList);

// document.querySelector(".main").innerText = JSON.stringify(linkedList, undefined, 20);

// linked list implementation main version

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   add = (val) => {
//     const node = new Node(val);

//     if (!this.head || !this.tail) {
//       this.head = node;
//       this.tail = node;
//       return this;
//     }

//     this.tail.next = node;
//     this.tail = node;
//   };

//   toArray = () => {
//     if (!this.head) return "List is empty";
//     let returningArr = [];
//     let current = this.head;
//     while (current) {
//       returningArr.push(current.value);
//       current = current.next;
//     }

//     return returningArr;
//   };

//   getLength = () => {
//     if (!this.head) return 0;
//     let length = 0;
//     let current = this.head;
//     while (current) {
//       ++length;
//       current = current.next;
//     }
//     return length;
//   };

//   delete(deletingNode) {
//     if (!this.head) {
//       return null;
//     }

//     let deletedNode = null;

//     while (this.head && this.head.value === deletingNode) {
//       deletedNode = this.head;
//       this.head = this.head.next;
//     }

//     let currentNode = this.head;

//     if (currentNode !== null) {
//       while (currentNode.next) {
//         if (currentNode.next.value === deletingNode) {
//           deletedNode = currentNode.next;
//           currentNode.next = currentNode.next.next;
//         } else {
//           currentNode = currentNode.next;
//         }
//       }
//     }

//     if (this.tail?.value === deletingNode) {
//       this.tail = currentNode;
//     }

//     return deletedNode;
//   }
// }

// let myList = new LinkedList();

// myList.add("Mko");
// myList.add("Vzg");
// myList.add("Pablo");
// myList.add("Xuan");

// myList.delete("Vzg");

// document.querySelector("body").innerText = JSON.stringify(
//   myList,
//   undefined,
//   20
// );

// Queue implementation

class Queue {
  constructor() {
    this.items = [];
    this.elementsCount = 0;
  }

  enqueue(elem) {
    this.items[this.elementsCount] = elem;
    ++this.elementsCount;
  }

  dequeue() {
    this.items.splice(0, 1);
    --this.elementsCount;
  }

  queueLength() {
    return this.elementsCount;
  }

  getElemIndex(elem) {
    for (let i = 0; i < this.elementsCount; i++) {
      if (this.items[i] === elem) {
        return i;
      }
    }
    return "Theres isnt such element";
  }

  getElemByIndex(index) {
    if (this.items[index]) return this.items[index];
    return "there isnt element at that index";
  }

  clearQueue() {
    this.items = [];
    this.elementsCount = 0;
  }
}

let myQueue = new Queue();

myQueue.enqueue("Mexak");
myQueue.enqueue("Kakach");
myQueue.enqueue("Zuyg caxikner");
myQueue.dequeue();

// alert(myQueue.getElemByIndex(1))
// myQueue.clearQueue()
// console.log(myQueue.queueLength());
// console.log(myQueue.getElemIndex("Kdsakach"));

document.querySelector("body").innerText = JSON.stringify(
  myQueue,
  undefined,
  20
);


