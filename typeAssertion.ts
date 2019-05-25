// <Type>value or value as Type in tsx
// type assertion with Union Type (because typescript could not infer the type)

function getLength(something: string | number): number {
  if ((<string>something).length) {
      // it will show type error if we remove <string>
      return (<string>something).length;
  } else {
      return something.toString().length;
  }
}

getLength('foo')
getLength(123)
