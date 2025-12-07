
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

    insert(value) {
        let newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return this
        }else{
            let currentNode = this.root;

            while(true){
                if(value > currentNode.data){
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }else{
                        currentNode=currentNode.right;
                    }
                 }else if(value < currentNode.data){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this
                    }else{
                        currentNode = currentNode.left
                    }
                }else{
                    console.log('Duplicate val')
                    return false
                }
            }
        }
    }
}