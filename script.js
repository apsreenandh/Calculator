
function btnClick(val){
    document.getElementById("display").value+=val
}
function clearDisplay(){
    document.getElementById("display").value=""
}
function del() {
    if ( document.getElementById("display").value.length > 1) {
        document.getElementById("display").value =  document.getElementById("display").value.slice(0, -1);
    } else {
        document.getElementById("display").value ='';
    }
}
function result(){
    if(document.getElementById("display").value.length>=1){
        expression=display.value
        var answer=eval(expression)
        document.getElementById("display").value=answer
    }
    else{document.getElementById("display").value=""}
}
function history(){
    if(expression.length!=0){
        document.getElementById("display").value=expression
    }else{document.getElementById("display").value=""}
    
}let expression
document.addEventListener('keydown',function(val){
    if(!isNaN(val.key) || val.key=='+'||val.key=='-'||val.key=='*'||val.key=='/'||val.key=='%'||val.key=='.'){
         document.getElementById("display").value+=val.key
    }
    else if(val.key=='Enter'){result(); val.preventDefault()}
    else if(val.key=='Backspace'){del()}
    else if(val.key=='Delete'){clearDisplay()}
})