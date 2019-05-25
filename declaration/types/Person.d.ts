export namespace Person {
  interface Student {
    name: string
    age: number
  }

  // there are difference between export type and var,let,const
  // use `declare` let,let,const to declare type for global variable
  type StringType = string
}

// only can use export default with function, class, interface

