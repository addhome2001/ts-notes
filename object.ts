interface Person {
  name: string;
  age?: number;
  [propName: string]: any
  readonly id: number
}

const Tom: Person = {
  name: 'Tom',
  age: 20,
  otherProp: 'foo',
  id: 123,
}

Tom.id = 123;
