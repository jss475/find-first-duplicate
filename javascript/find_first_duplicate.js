function findFirstDuplicate(arr) {
  // type your code here

  //go through the array
  //store the numbers seen in an object
  //when numbers seen equals current array, output that number

  let seenNumbers = {}
  for(num of arr){
    if(num in seenNumbers === true){
      return num
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
