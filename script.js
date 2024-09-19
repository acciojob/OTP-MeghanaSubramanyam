//your JS code here. If required.
const inputs=document.querySelectorAll('.code');
inputs.forEach((input,index)={
	input.addEventListener('input',()=>{
		if(input.value.length===1 && index<inputs.length-1){
			inputs[index+1].focus();
		}
	});
	input.addEventListener('keydown',(event)=>{
		if(event.key==='Backspace' && input.value===""){
			if(index>0){
				input[index-1].focus();
				input[index-1].value='';
			}
		}
	})
})