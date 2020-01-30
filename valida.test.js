const valida=require('./valida');

describe('testeo edad',()=>{
	it('Edad positiva',()=>{
		expect(valida(5)).toBe(false);
		expect(valida(29)).toBe(true);
		expect(valida(69)).toBe(false);
	});
	it('Edad negativa',()=>{
		expect(valida(-9)).toBe(false);

	});
})