//DICTIONARIES = abstract data structure that stores information in key/value pairs
//no index but key
//Limitations = only one key can appear once in a dictionary
//each key has only one value but several keys can have the same value
//0(1) for search, insert, delete

//HASH TABLE = very similar to dictionary but has keys that have been mapped to indices through a hash function.

//HASHING = taking key or data and scrambling it with algorithm, and producing an index that is used to sort the key into a hash table.

//HASH FUNCTIONS
//A hash function takes in a key, such as a string or integer, for a data record (often a key-value pair) and returns an integer memory address, or an index in a table where that record can be stored. In other words, it maps some key from the very large universe of possible keys to a much smaller range of possible indices in a hash table.
//some input should return the same output
//fast to compute
//avoid collisions
//it should distribute values evenly throughout the hash table

//COLLISIONS = when a hash function returns the same value for two different keys (house examples)

//LINEAR PROBING = process of moving through a hash table until an open index is found 
//open addressing
//can cause clusters = where keys cluster together
//quadratic probing = square number you take to right (1, 4, 9 ,16)

//CHAINING
//Chaining is another method of resolving collisions. Chaining means that each slot of the table can contain what is considered to be a “bucket,” which can hold more than one record. These buckets are data structures into which you can insert as many keys/records as you like.
//alot of chains are linked-list data structures
//insert = O(1)
//search = O(1 + alpha) (alpha refering to how many keys there are and how many hash indices in hash table) 
//closed addressing

//DOUBLE HASHING = Come up with a secondary hash function. It must not ever return 0 and it must be able to return all addresses in the table.





//EXAMPLE

//You want to store a set of 100 employee records using each individual’s phone number.

/* Describe how you’d approach this situation using a hash function and a hash table.

Our Answer
Here’s how we broke it down:

The phone numbers are keys, and we want to give each phone number (i.e., each employee) an index in order to sort them into the hash table.
Create a hash function to generate an index between 0 and 99 for each phone number.
Return the index for each phone number.
Insert each phone number at its given index in the table. */
