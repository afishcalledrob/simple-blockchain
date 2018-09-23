describe('Block', function() {
    var block;
    
    beforeEach(function() {
        block = new Block(0, "01/01/2018", "test block", "0")
    })
    
    it('calls calculateHash function to generate current Hash upon initialization', function() {
        expect(block.calculateHash()).toEqual("0001/01/2018test block");
    })
})