
var number = document.getElementsByClassName(" buttons-element number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
        var output=document.getElementById("output-value").innerText;
            output=output+this.id;
            document.getElementById("output-value").innerText=output;
	});
}