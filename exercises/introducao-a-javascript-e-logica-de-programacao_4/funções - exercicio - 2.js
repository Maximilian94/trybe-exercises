let dados =  [2, 4, 6, 7, 10, 0, -3]

getIndexHigherNumber(dados)

function getIndexHigherNumber (array){
  console.log(array)
  let indexHigherNumber = 0;
  for (index in array){
    console.log(array[index])
    if (array[index] > array[indexHigherNumber]){
      console.log(`O ${array[index]} é maior que ${array[indexHigherNumber]}`)
      indexHigherNumber = index
    }
  }
  console.log(`O index do maior numero é ${indexHigherNumber}, que vale o numnero ${array[indexHigherNumber]}`)
}