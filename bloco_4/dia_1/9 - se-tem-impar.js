var a = 3;
var b = 3;
var c = 3;

var aResto = a % 2
var bResto = b % 2
var cResto = c % 2

if (aResto != 0 || bResto	!= 0 || cResto != 0){
  console.log('Tem ao menos um numero impar')
  return true
} else {
  console.log('Todos os numeros são pares')
  return false
}