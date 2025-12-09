
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

    delete(value){
        //1-no children
        //2-one child
        //3-both children

        const deleteNode = function (node, value){
            if(node == null){
                return null;
            }

            if(value === node.data){

                //Node has no children
                if(!node.left && !node.right){
                    return null
                }

                //NODE HAS ONE CHILD
                    //Has left child
                if(!node.right){
                   return node.left; 
                }
                    //Has right child
                if(!node.left){
                    return node.right
                }

                //NODE HAS BOTH CHILDREN
                let tempNode = node.right;
                while(tempNode.left){
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data
                node.right = deleteNode(node.right, tempNode.data);
                return node
            }else if(value < node.data){
                node.left = deleteNode(node.left, value);
                return node
            }else{
                node.right = deleteNode(node.right, value);
                return node
            }

        }

        this.root = deleteNode(this.root, value);
    }

    find(val){
        if(!this.root){
            return null;
        }

        let currentNode = this.root;

        while(currentNode){
            if (val === currentNode.data){
                return currentNode;
            } else if (val < currentNode.data){
                currentNode = currentNode.left;
            } else if (val > currentNode.data){
                currentNode = currentNode.right;
            }
        }
        return null
    }

    //breadth-first iterative version
    levelOrderForEach(callback){
        if(!callback){
            throw new Error('Callback is missing')
        }

        const visitedNode = [];
        const queue = [];

        queue.push(this.root);

        let dequeuedVal

        while(queue.length){
            
            dequeuedVal = queue.shift();

            callback(dequeuedVal);

            visitedNode.push(dequeuedVal.data);
            if(dequeuedVal.left){
                queue.push(dequeuedVal.left)
            }

            if(dequeuedVal.right){
                queue.push(dequeuedVal.right)
            }
        }

        return visitedNode;
    }

    //breadth-first recursive version
    levelOrderForEachRecursive(callback){
         if(!callback){
             throw new Error('Callback is missing');
         }

        let visitedNode = [];
        let queue = [];
        let dequeuedVal

        queue.push(this.root)

        const helper = (q) => {
            if(!q.length) return; 

            dequeuedVal = q.shift();
            visitedNode.push(dequeuedVal.data);
            callback(dequeuedVal);

            if(dequeuedVal.left) q.push(dequeuedVal.left);

            if(dequeuedVal.right) q.push(dequeuedVal.right);

            helper(q)
        }

        helper(queue)

        return visitedNode;
    }

    //Pre order depth first recursive version
    preOrderForEach(callback){
        if(!callback){
            throw new Error("Callback is missing");
        }

        let current = this.root, 
            visited = []

        const helper = (node) => {

            visited.push(node.data);
            callback(node);

            if(node.left){
                helper(node.left);
            }
            
            if(node.right){
                helper(node.right);
            }

           
        }

        helper(current);
        return visited;
    }

}