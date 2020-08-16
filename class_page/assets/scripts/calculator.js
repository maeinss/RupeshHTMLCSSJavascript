function getHistory(){
       var his = document.getElementById("history-value")//.style.display = "none";
    return his.innerText
}
function printHistory(num){
    var phis = document.getElementById("history-value")//.style.display = "none";
	phis.innerText=num;
}
function printtemp(num){
    var phis = document.getElementById("output-temp")//.style.display = "none";
	phis.innerText=num;
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
    return value;
}

function printoutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

printoutput("2222");

function getoutput(){
	return document.getElementById("output-value").innerText;
}
var operator = document.getElementsByClassName("buttons-element operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
            printHistory("");
			printoutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getoutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printoutput(output);
			}
        }
		else{
			var output=getoutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printoutput(result);
                    printHistory("")
                    // printtemp("");
				}
				else{
					history=history+this.id;
                    printHistory(history);
                    printtemp(this.id);
					printoutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName(" buttons-element number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getoutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
            printoutput(output);
            printtemp("");
		}
	});
}