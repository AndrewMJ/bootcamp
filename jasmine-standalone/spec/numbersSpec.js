describe(`return the numbers of letters in a number`,()=>{
	it(`numberOfLetters must be defined`,()=>{
		expect(numberOfLetters).toBeDefined();
	});

	it(`the number is 5 return 4`,()=>{
		expect(FindNumberOfLetters(5)).toBe(4);
	})
	it(`the number is 6 return 3`,()=>{
		expect(FindNumberOfLetters(6)).toBe(3);
	})
	it(`the number is 12 return 6`,()=>{
		expect(FindNumberOfLetters(12)).toBe(6);
	})
})