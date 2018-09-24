class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.currentHash = this.calculateHash();
    }
    
    calculateHash(){
        return this.index.toString() + this.timestamp + this.data;
        
    }
}

class Blockchain{
   constructor() {
       this.chain = [this.createGenesisBlock()];
   }
   
   createGenesisBlock() {
       return new Block(0, "01/01/2018", "This is the genesis block", "0");
   }
   
   getLastBlock() {
       return this.chain[this.chain.length - 1];
   }
   
   addBlock(index, timestamp, data) {
       var newBlock = new Block(index, timestamp, data, this.getLastBlock().currentHash);
       this.chain.push(newBlock);
   }
}
