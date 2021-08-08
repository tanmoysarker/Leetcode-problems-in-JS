// Given a linked list and a value, remove all nodes containing the provided value, and return the resulting list.

// Ex: Given the following linked lists and values...

// 1->2->3->null, value = 3, return 1->2->null
// 8->1->1->4->12->null, value = 1, return 8->4->12->null
// 7->12->2->9->null, value = 7, return 12->2->9->null



var head; // head of list
 
/* Linked list Node */
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

/*
 * Given a key, deletes the first occurrence of key in linked list
 */
function deleteNode(key) {
    // Store head node
    var temp = head, prev = null;

    // If head node itself holds the key to be deleted
    if (temp != null && temp.data == key) {
        head = temp.next; // Changed head
        return;
    }

    // Search for the key to be deleted, keep track of
    // the previous node as we need to change temp.next
    while (temp != null && temp.data != key) {
        prev = temp;
        temp = temp.next;
    }

    // If key was not present in linked list
    if (temp == null)
        return;

    // Unlink the node from linked list
    prev.next = temp.next;
}

/* Inserts a new Node at front of the list. */
function push(new_data) {
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}

/*
 * This function prints contents of linked list starting from the given node
 */
function printList() {
     tnode = head;
    while (tnode != null) {
        console.log(tnode.data + " ");
        tnode = tnode.next;
    }
}

/*
 * Driver program to test above functions. Ideally this function should be in a
 * separate user class. It is kept here to keep code compact
 */
 
     
    push(7);
    push(1);
    push(3);
    push(2);

    console.log("Created Linked list is:<br/>");
    printList();

    deleteNode(1); // Delete node with data 1

    console.log("<br/>Linked List after Deletion of 1:<br/>");
    printList();

