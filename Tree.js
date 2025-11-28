
import { Node } from "./node.js";
import { removeDuplicates } from "./utils/removeDuplicates.js";

export class Bst{
    constructor(array){
        this.root = this.builtTree(array);
    }

    builtTree(array){
        
        if(array.length === 0) return null

        array = removeDuplicates(array).sort((a,b)=> a-b);
        const midPoint = Math.floor(array.length / 2);
        const root = new Node(array[midPoint]);

        root.left = this.builtTree(array.slice(0, midPoint))
        root.right = this.builtTree(array.slice(midPoint+1))

        return root;
    }
}