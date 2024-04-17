import { pipe, addOne, mulByTwo } from '@src/pipe';


describe('Pipe Operations', () => {
  
    const pipe1 = pipe(addOne, mulByTwo);
  
    test('pipe1 should multiply by two after adding one', () => {
	  expect(pipe1(5)).toBe(12);
    });
  
    test('pipe2 should multiply by two, add one, then multiply by two again', () => {
	  const pipe2 = pipe(mulByTwo, addOne, mulByTwo);
	  expect(pipe2(5)).toBe(22);
    });
  
    test('pipe3 should return the given argument', () => {
	  const pipe3 = pipe((n) => n);
	  expect(pipe3(5)).toBe(5);
    });
  
    test('pipe4 should return undefined', () => {
	  const pipe4 = pipe(() => {});
	  expect(pipe4(5)).toBeUndefined();
    });
  
    test('pipe5 should throw an error when no functions are provided', () => {
	  expect(() => pipe()).toThrow('No functions to work with!');
    });
  
    test('pipe6 should throw an error when non-function items are passed', () => {
	  expect(() => pipe('not a function')).toThrow('Only functions allowed!');
    });
  
    test('pipe1 should throw an error when no argument is provided', () => {
	  const pipe1 = pipe(addOne, mulByTwo);
	  expect(() => pipe1()).toThrow('Argument must be a valid number');
    });
  
    test('pipe1 should throw an error if argument is not a number', () => {
	  const pipe1 = pipe(addOne, mulByTwo);
	  expect(() => pipe1('not a number')).toThrow('Argument must be a valid number');
    });
});
