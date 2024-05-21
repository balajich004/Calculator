const calculate=()=>{
    if(operator==='+'){
        result=first+second;
        input.value=result;
    }
    else if(operator==='-'){
        result=first-second;
        input.value=result;
    }
    else if(operator==='*'){
        result=first*second;
        input.value=result;
    }
    else if(operator==='/'){
        result=first/second;
        input.value=result;
    }
    else if(operator==='%'){
        result=first%second;
        input.value=result;
    }
    else if(operator==='**'){
        result=first**second;
        input.value=result;
    }
    else{
        result="watch it bro!I don't support that";
        input.value=result;
    }
    clearinput();
};
function addDecimal(){
    if(step===0 || step===1){
        if(!array.includes(".")){
            array.push(".");
            input.value=array.join("");
        }
    } 
    else if(step===2) {
        if(!secondarray.includes(".")){
            secondarray.push(".");
            input.value=secondarray.join("");
        }
    }
}
