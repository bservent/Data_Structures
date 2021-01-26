//Lists

//LINKED-LIST = linear string of data made up of nodes
//each node contains data and pointer(reference to next data)
//can only go from head to tail
//delete head you delete the whole DS
//tail always end with Null reference
//used as backbone to stacks or queues


//Methods
//add new head = pointer of new node points to head data
//delete head = head pointer must point to null
//insert = new node points to node behind where it will be inserted & then node set in front must point to new node
//dete = set pointer to null value & pointer set in front must then point to node set behind the deleted node.

//O NOTATION
//access = O(n)
//search = O(n)
//insert = O(1) if at head or tail 0(n) if needs to transverse through list
//delete = same as insert

//DOUBLY LINKED-LIST = can go forward and backwards
//two pointer(previous & next)
//time complexity and bit O is same as LL

//CIRCULAR LINKED-LICK = tail points to head so you can loop through data if necessary but you still only go one direction


