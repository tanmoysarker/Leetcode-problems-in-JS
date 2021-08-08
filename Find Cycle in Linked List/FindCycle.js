// Given a linked list, containing unique numbers, return whether or not it has a cycle.
// Note: a cycle is a circular arrangement (i.e. one node points back to a previous node)

// Ex: Given the following linked lists...

// 1->2->3->1 -> true (3 points back to 1)
// 1->2->3 -> false
// 1->1 true (1 points to itself)

var hasCycle = function(head) {
    if (head === null || head.next === null) {    // Point 2
        return false;                             // Point 6
    }
    let slow = head.next;                         // Point 3
    let fast = head.next.next;
    while(slow!==fast) {                          // Point 4
        slow = slow.next;
        if (fast == null || fast.next === null) { // Point 4,5
            return false;                         // Point 6
        }
        fast = fast.next.next;
    }
    return true;                                  // Point 5
};