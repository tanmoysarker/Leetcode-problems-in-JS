// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]


var deleteDuplicates = function(head) {
    let currentNode = head; 
      
      while(currentNode){
          if (currentNode.next !== null && currentNode.val == currentNode.next.val){
              currentNode.next = currentNode.next.next
          }else{
              currentNode = currentNode.next
          }
      }
      return head;
  };