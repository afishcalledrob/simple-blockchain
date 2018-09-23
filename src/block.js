class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.currentHash = this.calculateHash();
    }
    
    calculateHash(){
        return this.index.toString() + this.previousHash + this.timestamp + this.data;
        
    }
}
