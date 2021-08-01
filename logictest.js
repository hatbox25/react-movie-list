const EXAMPLE_INPUT = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

// to sort word based on alphabetical
function sortWord(word = '') {
  const arr = word.split('');
  const { length } = arr;

  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - i - 1; j += 1) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr.join('');
}

// SOLUTION for LOGIC TEST ANAGRAM
function groupingAnagram(data) {
  const groupAnagram = {};
  const { length } = data;

  // create group of anagrams
  for (let i = 0; i < length; i += 1) {
    const sortedWord = sortWord(data[i]);
    if (groupAnagram[sortedWord]) {
      groupAnagram[sortedWord].push(data[i]);
    } else {
      groupAnagram[sortedWord] = [data[i]];
    }
  }

  const result = [];
  // parse result object to array
  Object.keys(groupAnagram).forEach((group) => {
    result.push(groupAnagram[group]);
  });

  return result;
}

// call the main function
console.log(groupingAnagram(EXAMPLE_INPUT));
