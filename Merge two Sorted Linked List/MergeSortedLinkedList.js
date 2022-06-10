// Given two sorted linked lists, merge them together in ascending order and return a reference to the merged list

// Ex: Given the following lists...

// list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
// list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
// list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null


function Node(data, next) {
    this.data = data;
    this.next = next;
  } 
  
  function merge(L1, L2) {
    
    // create new linked list pointer
    var L3 = new Node(null, null);
    var prev = L3;
    
    // while both linked lists are not empty
    while (L1 !== null && L2 !== null) {
      if (L1.data <= L2.data) { 
        prev.next = L1;
        L1 = L1.next;
      } else {
        prev.next = L2;
        L2 = L2.next;
      }
      prev = prev.next;
    }
    
    // once we reach end of a linked list, append the other
    // list because we know it is already sorted
    if (L1 === null) { prev.next = L2; }
    if (L2 === null) { prev.next = L1; }
    
    // return the sorted linked list
    return L3.next;
    
  }
  
  // create first linked list: 1 -> 3 -> 10
  var n3 = new Node(10, null);
  var n2 = new Node(3, n3);
  var n1 = new Node(1, n2);
  var L1 = n1; 
  
  // create second linked list: 5 -> 6 -> 9
  var n6 = new Node(9, null);
  var n5 = new Node(6, n6);
  var n4 = new Node(5, n5);
  var L2 = n4; 
  
  merge(L1, L2); 


  // Another

  var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return (l1? l1:l2);
    if(l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  };



  //Another

  function ListNode(val) {
    this.val = val;
     this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let currentNode = dummyHead; 

  while(l1 !== null && l2 !== null){

      if(l1.val < l2.val){
          currentNode.next = l1;
          l1 = l1.next
      } else {
          currentNode.next = l2
          l2 = l2.next
      }

      currentNode = currentNode.next
  }

  if(l1 !== null) {
      currentNode.next = l1;
  } else if (l2 !== null) {
      currentNode.next = l2
  }

  return dummyHead.next
}
