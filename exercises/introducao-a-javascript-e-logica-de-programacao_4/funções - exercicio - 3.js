let dados =  [2, 4, 6, 7, 10, 0, -3]

getIndexLowerNumber(dados)

function getIndexLowerNumber (array){
  console.log(array)
  let indexLowerNumber = 0;
  for (index in array){
    console.log(array[index])
    if (array[index] < array[indexLowerNumber]){
      console.log(`O ${array[index]} é maior que ${array[indexLowerNumber]}`)
      indexLowerNumber = index
    }
  }
  console.log(`O index do menor numero é ${indexLowerNumber}, que vale o numnero ${array[indexLowerNumber]}`)
}