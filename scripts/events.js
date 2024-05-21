document.addEventListener("keydown",(event)=>{
    if (event.key === "Backspace") {
        backspace();
    }
});
document.addEventListener("keydown",(event)=>{
    if (event.key === "1") {
        getNumber(1);
    }
});
document.addEventListener("keydown",(event)=>{
    if (event.key === "2") {
        getNumber(2);
    }
});
document.addEventListener("keydown",(event)=>{
    if (event.key === "3") {
        getNumber(3);
    }
});
document.addEventListener("keydown",(event)=>{
    if (event.key === "4") {
        getNumber(4);
    }
});
document.addEventListener("keydown",(event)=>{
    if (event.key === "5") {
        getNumber(5);
 }
});
document.addEventListener("keydown",(event)=>{
    if (event.key === "6") {
        getNumber(6);
    }
});
document.addEventListener("keydown",(event)=>{
    if (event.key === "7") {
        getNumber(7);
    }
});
document.addEventListener("keydown",(event)=>{
    if (event.key === "8") {
        getNumber(8);
    }
});
document.addEventListener("keydown",(event)=>{
    if (event.key==="9") {
        getNumber(9);
    }
});
document.addEventListener("keydown",(event)=>{
    if (event.key==="0") {
        getNumber(0);
    }
});
document.addEventListener("keydown",(event)=>{
    if(event.key==="+"){
        getoperator('+');
    }
});
document.addEventListener("keydown",(event)=>{
    if(event.key==="-"){
        getoperator('-');
    }
});
document.addEventListener("keydown",(event)=>{
    if(event.key==="*"){
        getoperator('*');
    }
});
document.addEventListener("keydown",(event)=>{
    if(event.key==="/"){
        getoperator('/');
    }
});
document.addEventListener("keydown",(event)=>{
    if(event.key==="%"){
        getoperator('%');
    }
});
document.addEventListener("keydown",(event)=>{
    if(event.key==="^"){
        getoperator('**');
    }
});
document.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        calculate();
    }
});
document.addEventListener("keydown",(event)=>{
    if(event.ctrlKey && event.key==="y"){
        clearinput();
    }
});
document.addEventListener("keydown",(event)=>{
    if(event.key=="."){
        addDecimal();
    }
})