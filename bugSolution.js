function foo(a, b) {
  const aValue = a === undefined ? 0 : a;
  const bValue = b === undefined ? 0 : b;
  return aValue + bValue;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(undefined, undefined)); // 0
console.log(foo(null, null)); // 0