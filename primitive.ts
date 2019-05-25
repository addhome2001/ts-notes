function sayHello(person: number) {
  return `Hello ${person}`;
}

function foo () {
  console.log('bar');
}

const user = NaN;
const bar: void = foo();
const n: null = null;
const u: undefined = undefined;

type StringOrNUmber = string | number;

const getStringLength = (arg: string) => arg.length;
const fooLength: number = getStringLength('foo');
