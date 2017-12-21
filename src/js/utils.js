export const random = data => data[Math.floor(Math.random() * data.length)];
export const isNumber = val => typeof val === 'number';
export const isString = val => typeof val === 'string';