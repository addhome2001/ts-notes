// basic function type
type SumFuncType = (x: number, y: number) => number

function sum1(x: number, y: number): number {
  return x + y;
}
sum1(1, 2, 3);

const sum2: SumFuncType = (x: number, y: number): number => x + y;

// with optional argument
function optionalArgs(fName: string, sName?: string): string {
  return  `${fName} ${sName}`;
}
optionalArgs('Chi');

// with default argument
function optionalArgsWithDefault(fName: string, sName: string = 'Seven'): string {
  return  `${fName} ${sName}`;
}
optionalArgsWithDefault('Chi')

// with rest arguments
function restArgs(f: number, ...rest: number[]) {
  return rest.concat(f);
}
restArgs(1, 2, 3, 4)

// function overload
function overLoad(x: number): number;
function overLoad(x: string): string;
function overLoad(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
overLoad(1)
overLoad('foo')
overLoad({})
