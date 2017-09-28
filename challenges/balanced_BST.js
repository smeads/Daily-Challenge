//Write a function to check that a binary tree is a valid binary search tree.

function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

function validBST(root) {
  if (!root) return "end of the line";

  const currHead = root;

  if (currHead.left) {
    if (currHead.left.value > currHead.value) return false;
    validBST(currHead.left);
  }

  if (currHead.right) {
    if (currHead.right.value < currHead.value) return false;
    validBST(currHead.right);
  }
  return true;
}
