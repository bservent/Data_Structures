//TREE = collection of nodes (where data is stored) and edges (connections btw nodes)
/* Each tree has a unique start node called the root node. (In a strange twist of fate, roots are usually drawn at the top of the tree — go figure!)
Each node in a tree can only have one parent node. This is what gives trees their hierarchical structure. There’s only ever one path from a given node back to the root.
Edges in a tree are sometimes referred to as branches.
Nodes at the end of a tree that have no child nodes are called leaves.
The length of the longest path from a leaf to the root is the tree’s height. */

//Ex: basic file storage (terminal), social media comments, March Madness brackets

//BINARY TREE = tree with at most two branches or edges attached to it (ex: dichotomous tree)
//3 properties: value(data in node), left property(points to node with less value of current node), right property(points to node with more value of current node)

{   
  root: {
      value: 5,
      left: null,
      right: null
  }
}

//O(log(n)) time complexity for O notation for search, add, delete because you have to transverse through nodes to find data 

//Breadth-first = search at levels
//best used: if you know the value is closer to the top, if your tree is very deep, memory is not a concern,trying to find shortest path from root node to another node, if you only want to use iteration

//Depth-First = get as far away from root node first - down all related nodes then back to root
//best used: if you know the value you are searching is close to bottom, if your tree is very, very wide, when you need to be efficent with your memory, when you're trying to understand dependencies in data, if you want to use recursion

//TRIES
//trees where nodes are limited to left/right pointers.
//they contain a value & references usually stored in an array
//they are unique because they usually only store alphabetical data

//BALANCE BINARY TREES
//binary tree becomes inbalances when you keep adding nodes to one side
//rotating = balancing nodes on tree
//AVL tree = tree that balances itself by calculating the differences in heights. Diff btw 0 and 1 = tree balance, diff more than 1 = tree not balanced
//in avl tree the height is usually stored as a property
//left-left imbalance - rotate everything to the right
//left-right imbalance - swap two outer nodes then rotate to right
//right-right imbalance - rotate everything to the left
//right-left imbalance - swap two outer nodes and rotate left








