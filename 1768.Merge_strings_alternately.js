const mergeAlternately = (word1, word2) => {
  let result = ''
  let longerWord = word1.length > word2.length ? word1 : word2
  for(let i = 0; i < longerWord.length; i++) {
    if (word1.length <= i) {
      result += word2.substring(i, word2.length)
      break
    } else if (word2.length <= i) {
      result += word1.substring(i, word1.length)
      break
    } else {
      result += word1[i] + word2[i]
    }
  }
  return result
}
  // return  (word1.length > word2.length ? word1 : word2).reduce((acc, item, index) => {
  //   if (word1.length <= index) {
  //     acc += word2.substring(index, word2.length - index)
  //   } else if (word2.length <= index) {
  //     acc += word1.substring(index, word1.length - index)
  //   } else {
  //     acc += word1[index] + word2[index]
  //   }
  //   return acc
  // }, '')

console.log(mergeAlternately('ab', 'pqrs'))