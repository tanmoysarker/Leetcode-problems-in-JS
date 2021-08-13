var searchBST = function(root, val) {
    if(!root) {
      return null;
    }

    let currentNode = root;
    while(currentNode) {
      if(val < currentNode.val) {
        //Left
        currentNode = currentNode.left;
      } else if(val > currentNode.val) {
        //Right
        currentNode = currentNode.right;
      } else if(currentNode.val === val) {
        return currentNode;
      }
    }

    return null;
};