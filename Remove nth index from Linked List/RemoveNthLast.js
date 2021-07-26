// Given a linked list and a value n, remove the nth to last node and return the resulting list.

// Ex: Given the following linked lists...

// 1->2->3->null, n = 1, return 1->2->null
// 1->2->3->null, n = 2, return 1->3->null
// 1->2->3->null, n = 3, return 2->3->null

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var removeNthFromEnd = function (head, n){
  const dummyHead = new ListNode(null)
  dummyHead.next = head

  let fast = dummyHead
  let slow = dummyHead

  for (let i=1; i < n+1; i++){
      fast = fast.next
  }

  while (fast.next !== null){
      fast = fast.next //2345
      console.log('fast is' + fast.val)
      slow = slow.next //0123
      console.log('slow is' + slow.val)
  }

  slow.next = slow.next.next
  return dummyHead.next;
}

removeNthFromEnd([1,2,3,4,5],2);