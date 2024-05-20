const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
const mul=(a,b)=>{
    return a*b;
}
const div=(a,b)=>{
    return a/b;
}
const mod=(a,b)=>{
    return a%b;
}
function operate(a,b,operator){
    switch(operator){
        case '+':add(a,b);break;
        case '-':sub(a,b);break;
        case '*':mul(a,b);break;
        case '/':div(a,b);break;
        case '%':mod(a,b);break;
    }
}