function isSameType(value1, value2) {
  //your js code here
	let isValue1NaN = value1 !== value1;
	let isValue2NaN = value2 !== value2;
	if (isValue1NaN && isValue2NaN) {
    return true;
  }
	if (isValue1NaN || isValue2NaN) {
    return false;
  }
	return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));