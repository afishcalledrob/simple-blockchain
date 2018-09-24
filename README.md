# Simple Blockchain

This project represents simple structure that mimics the basic properties of a
blockchain, in that it is capable of generating blocks that contain data,
timestamps and the ability to generate hashes specific to each block based upon
a (very) simple function of the data the block contains, as well as a record of 
the hash belonging to the previous block in the chain. Additionally there is a
chain structure which instantiates a default 'genesis block' as the first block
in the chain, to which other methods can add new blocks.