let input=document.querySelector("#input");
let first,second,result=0,operator;
let array=[],step=0;
let secondarray=[]
function getNumber(num){
    if(step===0 || step===1){
    array.push(num);
    first=Number(array.join(""));
    input.value=first;
    step=1;
    }
    else if(step===2){
        secondarray.push(num);
        second=Number(secondarray.join(""));
        input.value=second;
    }
}
function getoperator(op){
    step=2;
    operator=op;
}
function clearinput(){
    input.value="";
    first=null;
    second=null;
    operator=null;
    array=[];
    secondarray=[];  
    step=0; 
}