class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // If the tree is empty, create a new root node
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    // Start at the root
    let currentNode = this.root;

    // Traverse the tree to find the correct position
    while (true) {
      if (val < currentNode.val) {
        // If the left child is null, insert the new node here
        if (currentNode.left === null) {
          currentNode.left = new Node(val);
          return this;
        }
        // Otherwise, move to the left child
        currentNode = currentNode.left;
      } else {
        // If the right child is null, insert the new node here
        if (currentNode.right === null) {
          currentNode.right = new Node(val);
          return this;
        }
        // Otherwise, move to the right child
        currentNode = currentNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
// If the tree is empty, return undefined
        if (this.root === null) {
          return undefined;
          }
// Start at the root
        let currentNode = this.root;
// Traverse the tree
        while (currentNode !== null) {
          if (val < currentNode.val) {
// Move to the left child
          currentNode = currentNode.left;
          } else if (val > currentNode.val) {
// Move to the right child
          currentNode = currentNode.right;
          } else {
// Found the node
          return currentNode;
          }
        }
// Value not found
      return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    // If the tree is empty, return an empty array
    if (this.root === null) {
      return [];
    }
    // Initialize the queue with the root node
    let queue = [this.root];
    let result = [];
    
    // Process nodes in the queue
    while (queue.length > 0) {
      let currentNode = queue.shift(); // Dequeue a node
      result.push(currentNode.val); // Visit the node
    
      // Enqueue the children of the current node
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }  
    // Return the array of visited nodes
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
   
  }


module.exports = BinarySearchTree;
