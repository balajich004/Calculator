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
    
};