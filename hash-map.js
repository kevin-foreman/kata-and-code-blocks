// Node class to store key-value pairs and a reference to the next node in the chain
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

// HashMap class for an unordered associative array
class HashMap {
    // Initialize the hash map with a default capacity and empty buckets
    constructor(capacity = 1000) {
        this.capacity = capacity;
        this.size = 0;
        this.buckets = new Array(capacity).fill(null);
    }

    // Hash function to convert the key into an index within the capacity of the buckets array
    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) % this.capacity;
        }
        return hash;
    }

    // Insert key-value pairs into the hash map
    insert(key, value) {
        // Calculate the index for the key using the hash function
        const index = this.hashFunction(key);
        let node = this.buckets[index];

        // If the bucket is empty, create a new node and insert it
        if (!node) {
            this.buckets[index] = new Node(key, value);
            this.size++;
            return;
        }

        // If the bucket is not empty, search for the key in the chain
        let prev = null;
        while (node) {
            // If the key is found, update the value and exit
            if (node.key === key) {
                node.value = value;
                return;
            }
            prev = node;
            node = node.next;
        }

        // If the key is not found, create a new node and add it to the end of the chain
        prev.next = new Node(key, value);
        this.size++;
    }

    // Search for a value based on the provided key
    search(key) {
        // Calculate the index for the key using the hash function
        const index = this.hashFunction(key);
        let node = this.buckets[index];

        // Search for the key in the chain
        while (node) {
            // If the key is found, return the value
            if (node.key === key) {
                return node.value;
            }
            node = node.next;
        }
        // If the key is not found, return null
        return null;
    }

    // Delete a key-value pair from the hash map
    delete(key) {
        // Calculate the index for the key using the hash function
        const index = this.hashFunction(key);
        let node = this.buckets[index];
        let prev = null;

        // Search for the key in the chain
        while (node) {
            // If the key is found, remove it from the chain and return its value
            if (node.key === key) {
                if (prev) {
                    prev.next = node.next;
                } else {
                    this.buckets[index] = node.next;
                }
                this.size--;
                return node.value;
            }
            prev = node;
            node = node.next;
        }

        // If the key is not found, return null
        return null;
    }
};

// Create a new hash map
const hashMap = new HashMap();

// Insert key-value pairs
hashMap.insert('one', 1);
hashMap.insert('two', 2);
hashMap.insert('three', 3);

// Search for values by key
console.log(`Search for 'one': ${hashMap.search('one')}`); // Output: 1
console.log(`Search for 'two': ${hashMap.search('two')}`); // Output: 2
console.log(`Search for 'three': ${hashMap.search('three')}`); // Output: 3

// Update a value
hashMap.insert('one', 11);
console.log(`Search for 'one' after update: ${hashMap.search('one')}`); // Output: 11

// Delete a key-value pair
hashMap.delete('two');
console.log(`Search for 'two' after delete: ${hashMap.search('two')}`); // Output: null

// Search for a non-existent key
console.log(`Search for 'four': ${hashMap.search('four')}`); // Output: null