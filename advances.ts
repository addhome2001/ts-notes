// type aliases -----
type Name = string;
type Age = number;
type NameOrAge = Name | Age;
type UserName = 'Ben' | 'Ken' | 'Tom';

export const userName: UserName = 'Ben';
export const userAge: NameOrAge = 20;

// Tuple -----
const tuple: [number, string] = [1, 'foo'];
const tuple1: [number, string] = [1];
// type error
tuple2.push(true);

// Enum -----
// if Enum declared with `const`, it will be `const Enum`
// this kind of Enum will be deleted after compiling
// and the members are only allowed with static value
// the default value will start with 0
const enum Color {
  Red = 1,
  Green,
  Yellow,
  Blue = "blue".length
}

enum Color1 {
  Red = 1,
  Green,
  Yellow,
  Blue = "blue".length,
}

// Ambient Enums will be deleted after compiling
// and same as `const Enum`
declare enum Color2 {
  Red = 1,
  Green,
  Yellow,
  Blue
}

// Class -----
class Person {
  public name;

  // can not be accessed, including `child` class
  private property;

  // can not be accessed, excluding `child` class
  protected age;
}


abstract class Animal {
  public abstract name;
  public age;
}
// abstract class cant not be instanced directly
const cat = new Animal();

// sub class must to implement abstract's properties
class Cat extends Animal {
  public name;
}

// class can implement multiple interfaces
interface IPerson {}
interface IStudent {}
class Tom implements IPerson, IStudent {}

// interface extends another interface
interface IEngineer extends IPerson {}

// interface can extends class
class Seven {}
interface IEngineerSeven extends Seven {};

// Generics -----
// with default parameter
function returnInput<T = string>(a: T): T {
  return a;
}
returnInput<string>('foo');
returnInput<number>(123);

// multiple arguments
function returnInputs<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
returnInputs<string, number>('foo', 1);

// generics restrict
interface LengthInterface {
  length: number
}
function returnLength<T extends LengthInterface>(a: T): T {
  console.log(a.length)
  return a;
}
const fooLength: LengthInterface = {
  length: 1,
};
returnLength<LengthInterface>(fooLength);

// interface with generics
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

myIdentity('foo');
