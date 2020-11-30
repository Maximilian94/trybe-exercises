let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

getLongertsName(names)

function getLongertsName(array){
  let indexLongerName = 0
  for(index in array){
    console.log(array[index])
    if(array[index].length > array[indexLongerName].length){
      console.log(`${array[index]} é maior que ${array[indexLongerName]}`)
      indexLongerName = index
      console.log(indexLongerName)
    }
  }
  console.log(`O index do maior nome é ${indexLongerName} e o nome se chama ${array[indexLongerName]}`)
  return indexLongerName
}