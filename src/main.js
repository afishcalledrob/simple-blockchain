class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        
    }
}

class Block{
    constructor(timestamp, transactions, previousHash = ''){
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.currentHash;
    }
    
    calculateHash(){
        this.currentHash = (Math.floor((Math.random() * 9) + 0)).toString() + (Math.floor((Math.random() * 9) + 0)).toString() + (Math.floor((Math.random() * 9) + 0)).toString() + this.timestamp + this.transactions;
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
       var genesisBlock = new Block("01/01/2018", "This is the genesis block", "0");
       genesisBlock.calculateHash();
       genesisBlock.proofOfWork();
       return genesisBlock;
   }
   
   getLastBlock() {
       return this.chain[this.chain.length - 1];
   }
   
   addBlock(timestamp, data) {
       var newBlock = new Block(timestamp, data, this.getLastBlock().currentHash);
       newBlock.calculateHash();
       newBlock.proofOfWork();
       this.chain.push(newBlock);
   }
   
   isChainValid() {
       for(let i = 1; i < this.chain.length; i++) {
           const currentBlock = this.chain[i];
           const previousBlock = this.chain[i-1];
           if(currentBlock.timestamp + currentBlock.transactions !== currentBlock.currentHash.substring(3)) {
               return false;
           }
           if(currentBlock.previousHash !== previousBlock.currentHash) {
               return false;
           }
       }
       return true;
   }
}
