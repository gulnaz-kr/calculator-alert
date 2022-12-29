let n;
function number(n) {
  n = +prompt('Введите число');
  if (n >= 0 || n < 0) {
    return n;
  } else {
    return number(n);
  }
}
let s;
function symbol(s) {
  s = prompt('Выберите операцию: +, -, *, /');
  if (s == '+' || s == '-' || s == '*' || s == '/') {
    return s;
  } else {
    return symbol(s);
  }
}

let h;
function factorial(h) {
  if (h == 0 || h == 1) {
    return 1;
  } else {
    return h * factorial(h - 1);
  }
}

let sum;
let all;
let x;
function ais(x) {
  let a = number(n);
  let b = number(n);
  if (a > b) {
    all = factorial(a);
  } else {
    all = factorial(b);
  }
  x = symbol(s);
  if (x == '+') {
    sum = a + b;
  } else if (x == '-') {
    sum = a - b;
  } else if (x == '*') {
    sum = a * b;
  } else if (x == '/') {
    sum = a / b;
  }
  alert('Результат: ' + sum + '\nfactorial: ' + all);
}
ais(x);
