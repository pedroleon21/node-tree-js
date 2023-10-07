const Node = class Node {
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
    getHeigth(){
        return this.calculateHeigth(this);
    }
    calculateHeigth(node) {
        if(!node) return 0;
        const profundidadeL = 1 + this.calculateHeigth(node.left);
        const profundidadeR = 1 + this.calculateHeigth(node.right);
        return profundidadeL > profundidadeR ? profundidadeL : profundidadeR
    }
    isBalance(){
        const heigthL = this.left?.getHeigth() | 0;
        const heigthR = this.right?.getHeigth() | 0;
        return (heigthL - heigthR) == 0 || 
                (heigthL - heigthR) == 1 ||
                (heigthL - heigthR) == -1 
    }
    balanceTree(){
        let node = this;
        while(!node.isBalance())
            node = this.balance(this)   
        return node;
    }
    balance(node){
        if(!node) return null;

        node.left = this.balance(node.left);
        node.right = this.balance(node.right);
    
        const heightL = node.left?.getHeigth() | 0;
        const heightR = node.right?.getHeigth() | 0;
    
        if (heightR - heightL > 1) {
            const newRoot = node.right;
            node.right = newRoot.left;
            newRoot.left = node;
            node = newRoot;
        } else if (heightL - heightR > 1) {
            const newRoot = node.left;
            node.left = newRoot.right;
            newRoot.right = node;
            node = newRoot;
        }
        return node;
    }    
    push(value){
        return this.insert(this,value)
    }
    static insert(root,value){
        if(!root){
            return new Node(value)
        }
        if(value < root.value) root.left = Node.insert(root.left,value);
        else root.right = Node.insert(root.right,value);
        return root
    }
    length(){
        return Node.count(this);
    }
    static count(node){
        if(!node) return 0;
        return 1 + this.count(node.left) + this.count(node.right);
    }
    dfs(){
        Node.dfsInterative(this);
    }
    static dfsInterative(root){
        const stack = [];
        stack.push(root);
    
        while(stack.length > 0) {
            let node = stack.pop();
            if (node !== null) {
                console.log(node?.value);
                stack.push(node.right);
                stack.push(node.left);
            }
        }
    }
    inOrder(){
        Node.order(this)
    }
    static order(node){ 
        if(!node) {
            return;
        }
        Node.order(node.left)
        console.log(node.value);
        Node.order(node.right);
    }
}

module.exports = Node;