// Given a linked list, containing unique values, reverse it, and return the result.

// Ex: Given the following linked lists...

// 1->2->3->null, return a reference to the node that contains 3 which points to a list that looks like the following: 3->2->1->null
// 7->15->9->2->null, return a reference to the node that contains 2 which points to a list that looks like the following: 2->9->15->7->null
// 1->null, return a reference to the node that contains 1 which points to a list that looks like the following: 1->null

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let nextTemp = null;

    while(curr!= null) {
        nextTemp = curr.next; // As I explained earlier, I save the next pointer in the temp variable.
        curr.next = prev;  // Then I reverse the pointer of the current node to its previous node.
        prev = curr;  //  The previous node becomes the node we are currently at.
        curr = nextTemp;  // And the current nodes becomes thenext node we saved earlier. And we keep iterating.
    }
    return prev // At the end, our previous node will be the head node of the new list. 
};