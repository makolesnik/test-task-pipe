export const pipe = (...functions) => {

    if (functions.length === 0) {
        throw new Error('No functions to work with!');
    }
  
    if (functions.some(fn => typeof fn !== 'function')) {
        throw new Error('Only functions allowed!');
    }
  
    return (arg) => {
        if (typeof arg !== 'number' || isNaN(arg)) {
            throw new Error('Argument must be a valid number!');
        }
  
        return functions.reduce((acc, fn) => fn(acc), arg);
    };
};


export const addOne = (n) => n + 1;

export const mulByTwo = (n) => n * 2;
