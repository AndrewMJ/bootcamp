//describe take 2 args: 1.Name of the testing block 2. The function to run (which is the test)
describe("FizzBuzz Unit Tests", ()=>{
	// it takes two args: 1.Name of this test 
	// 				   2.function to run(which is this test)
	it(`FizzBuzz must be defined`,()=>{
		expect(fizzBuzz).toBeDefined();
	});
	it(`Should be 1 for passing FizzBuzz 1`,()=>{
		expect(fizzBuzz(1)).toBe(1);
	});
	it(`Should be 2 for passing FizzBuzz 2`,()=>{
		expect(fizzBuzz(2)).toBe(2);
	});
	it(`Should be fizz for passing FizzBuzz 3`,()=>{
		expect(fizzBuzz(3)).toBe(`fizz`);
	});
	it(`Should be buzz for passing FizzBuzz 5`,()=>{
		expect(fizzBuzz(5)).toBe(`buzz`);
	});

});