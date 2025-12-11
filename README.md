# Balanced Binary Search Tree (BST)

A JavaScript implementation of a **balanced Binary Search Tree** supporting insertion, deletion, searching, tree traversals, balance checking, and automatic rebalancing. Built as part of The Odin Project.

---

## ✨ Features

### 🧱 Core Structure
- `Node` class storing `data`, `left`, and `right`
- `Bst` class that builds a **balanced BST** from an input array  
- Removes duplicate values and sorts input before building

### 🌲 BST Operations
- `insert(value)` — adds a value and auto-rebalances if needed  
- `delete(value)` — deletes a node (handles all BST deletion cases)  
- `find(value)` — returns the matching node or `null`

### 🔁 Traversal Methods  
All traversals accept a callback:
- `levelOrderForEach(callback)` — iterative BFS  
- `levelOrderForEachRecursive(callback)` — recursive BFS  
- `inOrderForEach(callback)` — DFS (sorted output)  
- `preOrderForEach(callback)` — DFS  
- `postOrderForEach(callback)` — DFS  

### 📏 Tree Metrics
- `height(value)` — height of a specific node  
- `depth(value)` — depth of a specific node  

### ⚖️ Balance Tools
- `isBalanced()` — checks if the tree is balanced  
- `rebalance()` — rebuilds the tree in balanced form  

### 🛠 Utilities
- `prettyPrint(root)` — prints the tree structure  
- `removeDuplicates(array)` — helper for input cleanup  

---

## 📂 Project Structure

```text
.
├─ index.js               # Driver script / demo
├─ tree.js                # Bst class
├─ node.js                # Node class
└─ utils/
   ├─ prettyPrint.js      # Console visualization
   └─ removeDuplicates.js # Remove duplicates from input array