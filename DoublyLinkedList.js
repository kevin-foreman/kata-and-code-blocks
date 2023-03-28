class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);

        // Check to see if there's a head or not
        // If there is NOT, set the newNode to be the head
        // Could also use 'if (this.head === null)'
        if (!this.head) {
            this.head = newNode;
            // Otherwise, if there IS a head,
            // Set the variable 'current' equal to the
            // existing head
        } else {
            let current = this.head;

            // This while loop iterates through ALL nodes
            // as long as current.next evaluates to true
            // would while (this.head.next) work?
            while (current.next) {
                // When it finally evaluates to false,
                // Or 'null' in the case there no longer
                // is a next, it exits
                // and makes current point
                // to the last node
                current = current.next;
            }
            // Then add the newNode to the end of the
            // linked list
            current.next = newNode;
        }
        this.size++;
    }

    prepend(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
        this.size++;
    }

    print() {
        const current = this.head;
        while (current.next) {
            console.log(current.data);
            current = current.next;
        }
        // console.log(=> 'null')
    }
}

class DoubleNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new DoubleNode(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    print() {
        let current = this.head;
        let result = '';

        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }

    reverse() {
        // const newDoubleNode = new DoubleNode(data);
        let tempPrev = null;
        let current = this.head;

        while (current !== null) {
            tempPrev = current.prev;
            current.prev = current.next;
            current.next = tempPrev;

            current = current.prev;
        }
        if (tempPrev !== null) {
            this.head = tempPrev.prev;
        }
    }
}

// Usage
const list = new SinglyLinkedList();
const cheetos = new DoublyLinkedList();
cheetos.append(1);
cheetos.append(2);
cheetos.append(3);
cheetos.print();
cheetos.reverse();
cheetos.print();