// Given two binary trees, return whether or not the two trees are identical. Note: identical meaning they exhibit the same structure and the same values at each node. Ex: Given the following trees...

//         2
//        / \
//       1   3
//     2
//    / \
//   1   3

// return true.

// Ex: Given the following trees...

//         1
//          \
//           9
//            \
//            18
//     1
//    /
//   9
//    \
//     18

// return false.

// Ex: Given the following trees...

//         2
//        / \
//       3   1
//     2
//    / \
//   1   3

// return false.   


 function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
 }
   /**
    * @param {TreeNode} p
    * @param {TreeNode} q
    * @return {boolean}
    */
   
   var isSameTree = function(p, q) {
     if(p === null)
       return q === null;
     
     if(q === null || p.val !== q.val)
       return false;
     
     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
   };