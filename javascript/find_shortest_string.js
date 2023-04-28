function findShortestString(arr) {

  let shorty = arr[0]

  arr.forEach(string => {
    if (string.length < shorty.length) {
      shorty = string
    }
  })

  return shorty
}






if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE

  startTime = Date.now()

    for (let i = 0; i < 1000; ++i) {
      findShortestString(["aaa", "a", "aaaa", "aa"])
      
    }

    const avgTime = (Date.now() - startTime) / 1000

    console.log(avgTime)

}

module.exports = findShortestString;

// Please add your pseudocode to this file
  // create initial variable that represents the first element/string in array
  // iterate through each element in array
  // compare each elements length to the initial variable 
  // return shortest element in array afterwards

// And a written explanation of your solution
