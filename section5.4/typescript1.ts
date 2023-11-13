const element = document.querySelector(".hoge");
element.style.backgroundColor = "red";

type ObjectType = {
  foo: string;
  bar: string;
};
const object: ObjectType = {
  foo: "...",
  bar: "...",
};

const piyo = object.piyo;

object.foo = 2;

// 引数の型指定
function double(x: number) {
  return x * 2;
}

// 誤った引数の指定
double("あああ"); 


// 誤った戻り値の型指定。戻り値にはnumber型も想定されている。
function fizzBuzz(n: number): string {
  if (n % 15 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n; 
  }
}

export const fuga = {
  foo: "...",
  bar: "...",
  // baz: "..." 削除
};


let x = 1; // xはnumber型と推論される

// number型にstring型のものは再代入できない
x = "あああ"; 

// isEven()の戻り値はboolean型に推測される
function isEven(n) {
  return n % 2 === 0;
}



const isfourEven = isEven(4)



console.log(isfourEven)