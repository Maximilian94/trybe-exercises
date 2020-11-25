let a = 60;
let b = 60;
let c = 60;
let d = a + b + c;

if (d == 180){
  console.log(`É um triângulo`);
  return true;
} else {
  console.log(`Os valores dos ângulos somados não dão 180, por isto, não é um triângulo`);
  return false;
}