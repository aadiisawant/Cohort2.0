/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function sanitizeAndSort(str) {
  return str
    .toLowerCase() // Convert to lower case
    .split('') // Split into array of characters
    .sort() // Sort the characters
    .join(''); // Join back into a string
}
function isAnagram(str1, str2) {
  let str1Filtered = sanitizeAndSort(str1)
  let str2Filtered = sanitizeAndSort(str2)
  
  return str1Filtered === str2Filtered;
}
module.exports = isAnagram;
