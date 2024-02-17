// Function to extract values of a specific key from an array of objects using reduce
function extractValue(arr, key) {
    return arr.reduce(function(acc, next) {
      // Push the value of the specified key for each object into the accumulator array
      acc.push(next[key]);
      return acc;
    }, []);
  }
  
  // Function to count the occurrences of vowels in a given string (case-insensitive)
  function vowelCount(str) {
    const vowels = "aeiou";
    return str.toLowerCase().split("").reduce(function(result, char) {
      // Check if the character is a vowel
      if (vowels.indexOf(char) !== -1) {
        // Increment the count for the vowel in the result object
        result[char] = (result[char] || 0) + 1;
      }
      return result;
    }, {});
  }
  
  // Function to add a key-value pair to each object in an array
  function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, next) {
      // Create a new object with the specified key-value pair using Object.assign, to keep objects unchanged.
      const newObj = Object.assign({}, next, { [key]: value });
      acc.push(newObj);
      return acc;
    }, []);
  }
  
  // Function to partition an array into two subarrays based on a callback function using reduce
  function partition(arr, callback) {
    return arr.reduce(function(acc, next) {
      // Use the callback function to determine placement in the subarrays
      callback(next) ? acc[0].push(next) : acc[1].push(next);
      return acc;
    }, [[], []]);
  }  