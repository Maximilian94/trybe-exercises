//Exercicio 1

verifyIsPalindrome('Mam')

function verifyIsPalindrome(word){
  word = word.toLowerCase()
  isPalindrome = true
  for (indexLetter in word){
    if(word[indexLetter] != word[word.length - 1 - indexLetter]){
      console.log(`${word[indexLetter]} não é igual ${word[word.length - 1 - indexLetter]}`)
      isPalindrome = false
    }
  }
  if (isPalindrome === true){
    console.log(`É palíndromo`)
    return true
  } else {
    console.log(`Não é palíndromo`)
    return false
  }
}
