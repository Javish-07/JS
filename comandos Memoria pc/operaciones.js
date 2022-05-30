function suma(x1,x2){
    return x1+x2;
}
function resta(x1,x2){
    return x1-x2;
}
function mul(x1,x2){
    return x1*x2;
}
function div(x1,x2){
    if(x2==0){
        console.log('no se puede dividir por  0');
    }else{
        return x1/x2;
    }
   
}

console.log(suma(1,5))
console.log(resta(1,5))
console.log(mul(1,8))
console.log(div(1,2))
