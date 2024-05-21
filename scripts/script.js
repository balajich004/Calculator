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
    first=null;
    second=null;
    operator=null;
    array=[];
    secondarray=[];  
    step=0;
};