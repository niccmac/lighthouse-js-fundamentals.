/*const howManyHundreds = function (x){
  return Math.floor(x/100);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);*/


//Next Challange Area Calculator

const calculateRectangleArea = function (l, w) {
  if (l < 0 || w < 0) {
    return undefined
  }
  let area = l * w;
  if (area > 0) {
    return area;
  }
}

const calculateTriangleArea = function (b, h) {
  if (b < 0 || h < 0) {
    return undefined
  }
  let area = (b * h) / 2;
  if (area > 0) {
    return area;
  }
}

const calculateCircleArea = function (r) {
  if (r < 0) {
    return undefined
  }
  let area = Math.PI * (Math.pow(r, 2));
  if (area > 0) {
    return area;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined