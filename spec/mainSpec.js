describe('Block', function() {
    var block;
    
    beforeEach(function() {
        block = new Block(0, "01/01/2018", "test block", "0");
    })
    
    describe('calculateHash', function() {
        it('calls calculateHash function to generate current Hash upon initialization', function() {
        block.calculateHash();
        expect(block.currentHash.substr(3, 21)).toEqual("001/01/2018test block");
      })
    })
    
    describe('proofOfWork', function() {
        it('requires the first three characters of hash to be 0', function() {
            block.calculateHash();
            block.proofOfWork();
            expect(block.currentHash).toEqual("000001/01/2018test block");
        })
    })
})

describe('Blockchain', function() {
    var blockchain;
    
    beforeEach(function() {
        blockchain = new Blockchain;
    })
    
    describe('createGenesisBlock()', function() {
        it('creates a block with the phrase "This is the genesis block" as data', function() {
            expect(blockchain.chain[0].data).toEqual("This is the genesis block");
        })
    })
    
    describe('getLastBlock()', function() {
        it('extracts the most recent block from the chain array', function() {
            var specBlock = blockchain.getLastBlock();
            expect(specBlock.timestamp).toEqual("01/01/2018");
        })
    })
    
    describe('addBlock()', function() {
        it('creates a new block and adds it to the chain array', function() {
            blockchain.addBlock(1, "02/01/2018", "data");
            expect(blockchain.getLastBlock().previousHash.substr(3, 36)).toEqual("001/01/2018This is the genesis block");
        })
    })
    
    describe('isChainValid()', function() {
        it('should return true for a chain constructed purely with the built methods', function() {
            blockchain.addBlock(1, "02/01/2018", "data");
            blockchain.addBlock(2, "03/01/2018", "data2");
            blockchain.addBlock(3, "04/01/2018", "data3");
            blockchain.addBlock(4, "05/01/2018", "data4");
            expect(blockchain.isChainValid()).toEqual(true);
        })
        
        it('should return false for a chain in which a block is added with a hash not based on the calculateHash method', function() {
            blockchain.addBlock(1, "02/01/2018", "data");
            blockchain.addBlock(2, "03/01/2018", "data2");
            blockchain.addBlock(3, "04/01/2018", "data3");
            blockchain.addBlock(4, "05/01/2018", "data4");
            var alteredBlock = blockchain.getLastBlock();
            alteredBlock.currentHash = "xx";
            blockchain.chain.splice(4, 1, alteredBlock);
            expect(blockchain.isChainValid()).toEqual(false);
        })
        
        it('should return false for a chain in which a blocks previous hash is not equal to the hash of a previous block', function() {
            blockchain.addBlock(1, "02/01/2018", "data");
            blockchain.addBlock(2, "03/01/2018", "data2");
            blockchain.addBlock(3, "04/01/2018", "data3");
            blockchain.addBlock(4, "05/01/2018", "data4");
            var alteredBlock = blockchain.createGenesisBlock()
            blockchain.chain.splice(3, 1, alteredBlock);
            expect(blockchain.isChainValid()).toEqual(false);
        })
    })
})
