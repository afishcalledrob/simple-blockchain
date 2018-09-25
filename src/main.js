class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.currentHash;
    }
    
    calculateHash(){
        this.currentHash = (Math.floor((Math.random() * 9) + 0)).toString() + (Math.floor((Math.random() * 9) + 0)).toString() + (Math.floor((Math.random() * 9) + 0)).toString() + this.index.toString() + this.timestamp + this.data;
    }
    
    proofOfWork() {
        while(this.currentHash.substring(0, 3) !== "000") {
            this.calculateHash();
        }
    }
}

class Blockchain{
   constructor() {
       this.chain = [this.createGenesisBlock()];
   }
   
   createGenesisBlock() {
       var genesisBlock = new Block(0, "01/01/2018", "This is the genesis block", "0");
       genesisBlock.calculateHash();
       genesisBlock.proofOfWork();
       return genesisBlock;
   }
   
   getLastBlock() {
       return this.chain[this.chain.length - 1];
   }
   
   addBlock(index, timestamp, data) {
       var newBlock = new Block(index, timestamp, data, this.getLastBlock().currentHash);
       newBlock.calculateHash();
       newBlock.proofOfWork();
       this.chain.push(newBlock);
   }
   
   isChainValid() {
       for(let i = 1; i < this.chain.length; i++) {
           const currentBlock = this.chain[i];
           const previousBlock = this.chain[i-1];
           if(currentBlock.index.toString() + currentBlock.timestamp + currentBlock.data !== currentBlock.currentHash.substring(3)) {
               return false;
           }
           if(currentBlock.previousHash !== previousBlock.currentHash) {
               return false;
           }
       }
       return true;
   }
}