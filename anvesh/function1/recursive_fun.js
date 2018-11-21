function factorial(n,a) {
    if (n === 0) {
      return a;
    }
    return factorial(n-1, (n *a));
  }
  var k=factorial(5, 1);
  console.log(k);