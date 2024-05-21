const input=document.querySelector("#input");
const one=document.querySelector(".one");
const two=document.querySelector(".two");
const three=document.querySelector(".three");
const four=document.querySelector(".four");
const five=document.querySelector(".five");
const six=document.querySelector(".six");
const seven=document.querySelector(".seven");
const eight=document.querySelector(".eight");
const nine=document.querySelector(".nine");
const zero=document.querySelector(".zero");
const plus=document.querySelector(".add");
const minus=document.querySelector(".sub");
const multiply=document.querySelector(".mul");
const divide=document.querySelector(".div");
const clear=document.querySelector(".ac");
zero.addEventListener("click",()=>{
    let some=input.value;
    input.value=some+0;
});
one.addEventListener("click",()=>{
    let some=input.value;
    input.value=some+1;
});
two.addEventListener("click",()=>{
    let some=input.value;
    input.value=some+2;
});
three.addEventListener("click",()=>{
    let some=input.value;
    input.value=some+3;
});
four.addEventListener("click",()=>{
    let some=input.value;
    input.value=some+4;
});
five.addEventListener("click",()=>{
    let some=input.value;
    input.value=some+5;
});
six.addEventListener("click",()=>{
    let some=input.value;
    input.value=some+6;
});
seven.addEventListener("click",()=>{
    let some=input.value;
    input.value=some+7;
});
eight.addEventListener("click",()=>{
    let some=input.value;
    input.value=some+8;
});
nine.addEventListener("click",()=>{
    let some=input.value;
    input.value=some+9;
});