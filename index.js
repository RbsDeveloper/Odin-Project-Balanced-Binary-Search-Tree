import { Bst } from "./tree.js";
import { prettyPrint } from "./utils/prettyPrint.js";

const initialData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const tree = new Bst(initialData);

console.log(tree);

prettyPrint(tree.root);

//tree.insert(6);

// prettyPrint(tree.root);

//tree.delete(8);

//prettyPrint(tree.root);

//console.log(tree.find(6));

console.log(tree.postOrderForEach(()=>{console.log('hi')}))
