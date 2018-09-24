describe('Block', function() {
    var block;
    
    beforeEach(function() {
        block = new Block(0, "01/01/2018", "test block", "0");
    })
    
    it('calls calculateHash function to generate current Hash upon initialization', function() {
        expect(block.currentHash).toEqual("001/01/2018test block");
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
})