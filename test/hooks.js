describe('Mocha Hooks', function(){

    // before hook
    before('Before All Tests', function(){
        console.log('-before hook');
    });
    
    // beforeEach hook
    beforeEach('Before Each Test', function(){
        console.log('--beforeEach hook');
    });
    
    // after hook
    after('After All Tests', function(){
        console.log('-after hook');
    });
    
    // afterEach hook
    afterEach('After Each Test', function(){
        console.log('--afterEach hook');
    });
    
    // test
    it('Any Test', function(){
        
    });
    

});