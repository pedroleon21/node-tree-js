const Node = require("./node.js")
let node;
arr = [2,200,10,43,42,20,55,30,40,201,85,37,34];
// arr = [2,3,4,5,6,7];
arr.forEach(val=> {
    node = Node.insert(node,val)
})
console.log(node.value,node.length()-arr.length)
console.log(node.left?.getHeigth() | 0,node.right?.getHeigth()| 0)
node = node.balanceTree()
console.log(node.value,node.length()-arr.length)
// dfsInterative(node)
console.log(node.left?.getHeigth() | 0,node.right?.getHeigth() | 0)
node.inOrder();