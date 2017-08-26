var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var bool = false;
  function search(node) {
  //check if self has value
      bool = node.value === target;
      //if yes, return true;
    if (!bool) {
        //if not, check children length
      if (node.children.length){
        // if length, loop over children
        //check if each child has value
        bool = _.any(node.children, search);
        //if child has value, return true
        if (bool) {
          return true;
        }
      }
    }
    return bool;
  };

  search(this);
  
  return bool;
  /*
  if (this.value === target){
      return true;
  }
  if (this.children.length){
    let result = _.any(this.children, child => {
      
      child.contains(target));
    if (result){
      return true;
    }*/ 
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
