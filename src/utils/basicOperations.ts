export const add = (a: string, b: string): string => {
  return String(Number(a) + Number(b));
};

export const subtract = (a: string, b: string): string => {
  return String(Number(a) - Number(b));
};

export const multiply = (a: string, b: string): string => {
    return String(Number(a) * Number(b))
}
export const divide = (a: string, b: string): string => {
    return String(Number(a) / Number(b))
}

//   const person: Readonly<{ name: string; age: number }> = { name: 'Alice', age: 30 };
// // person.age = 31; // Error: Cannot assign to 'age' because it is a read-only property

// function printPersonDetails({ name, age }: { name: string; age: number }) {
//     console.log(`Name: ${name}, Age: ${age}`);
//   }

// const numbers: Array<number> = [1, 2, 3];
// const firstNumber: number = numbers[0];

// enum Fruit {
//     APPLE = 'apple',
//     BANANA = 'banana',
//     ORANGE = 'orange',
//   }

//   interface Person {
//     name: string;
//     age: number;
//   }
