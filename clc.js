document.addEventListener('DOMContentLoaded', () => {
  let input=document.querySelector('input[name="display"]');
  let buttons=document.querySelectorAll('input[type="button"]');
  
  let string='';
  let arr=Array.from(buttons);
  arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.value== '='){
            try{
                string=eval(string);
            }catch(error){
                string="Error";
            }
            input.value=string;
        }
        else if(e.target.value== 'AC'){
            string='';
            input.value=string;
        }
        else if(e.target.value== 'DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.value;
            input.value=string;
        }
    });
  });
});





