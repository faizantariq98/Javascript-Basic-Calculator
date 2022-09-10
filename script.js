function gethistory(){
    return document.getElementById('history').innerText;
}
function printHistory(num){
    return document.getElementById('history').innerText=num;
}
function getOutput(){
    return document.getElementById('output').innerText;
}
function printOutput(num){
    if(num==""){
         document.getElementById('output').innerText=num;
    }else{
        document.getElementById('output').innerText=getFormatedNumber(num);
    }
}
function getFormatedNumber(num){
    var n = Number(num);
    var value=n.toLocaleString(n)
    return(value);
}

function reverseNumberFormat(num){
    return num.replace(/,/g,'');
}
var operator =document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
        var output=reverseNumberFormat(getOutput()).toString();
        if(output){
            output=output.substring(0,output.length-1);
            printOutput(output);
        }
       }
       else{
        var output=getOutput();
        var history=gethistory();
        if(output==""&&history!=""){
            if(isNaN(history[history.length-1])){
                history=history.substring(0,history.length-1)
            }
        }
        if(output!= "" || history!=""){
            output=output==""?output:reverseNumberFormat(output);
            history=history+output;

            if(this.id==="="){
                output=reverseNumberFormat(output);
                var result=eval(history);
                printOutput(result);
                printHistory("")
            }else{
                history=history+this.id;
                printHistory(history);
                printOutput("")
            }
        }
       }
    })
}
var number =document.getElementsByClassName("number");
for(var i=0; i<operator.length; i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output)
        }
    })
}

