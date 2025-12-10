import { Bst } from "./tree.js";
import { prettyPrint } from "./utils/prettyPrint.js";

const randomArr = Array.from({length: 15}, ()=> Math.floor(Math.random() * 100));

const tree = new Bst(randomArr);

prettyPrint(tree.root);

console.log(tree.isBalanced());

tree.levelOrderForEach((val)=>console.log(val))
tree.inOrderForEach((val)=>console.log(val))
tree.postOrderForEach((val)=>console.log(val))
tree.preOrderForEach((val)=>console.log(val))

tree.insert(103)
prettyPrint(tree.root);
tree.insert(107)
prettyPrint(tree.root);
tree.insert(120)
prettyPrint(tree.root);
tree.insert(124)
prettyPrint(tree.root);
console.log(tree.isBalanced());

tree.levelOrderForEach((val)=>console.log(val))
tree.inOrderForEach((val)=>console.log(val))
tree.postOrderForEach((val)=>console.log(val))
tree.preOrderForEach((val)=>console.log(val))