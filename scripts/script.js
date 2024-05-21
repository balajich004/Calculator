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
    first=null;
    second=null;
    operator=null;
    array=[];
    secondarray=[];  
    step=0;
};