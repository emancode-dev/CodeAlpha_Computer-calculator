let inputbar= document.getElementById('input');
let buttons = document.querySelectorAll('button');
let string = "";
let array= Array.from(buttons);
array.forEach(button => {
    button.addEventListener('click', (event) =>{
        if(event.target.innerHTML == '='){
            string = eval(string);
            inputbar.value = string;
        }
        else if(event.target.innerHTML == 'AC'){
            string = "";
            inputbar.value = string;
        }
        else if(event.target.innerHTML == 'Del'){
            string = string.substring(0, string.length-1);
            inputbar.value = string;
        }
        else{
            string += event.target.innerHTML;
            input.value = string;
        } 
    })
})
document.addEventListener("keydown", (event) => {
        if ((event.key >= '0' && event.key <= '9') || event.key === '.' || event.key === '+' || 
        event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%') {
        string += event.key;
        inputbar.value = string;
    } 
        else if (event.key === "Enter") {
        string = eval(string);
        inputbar.value = string;
    } 
        else if (event.key === "Backspace") { 
        string = string.substring(0, string.length - 1);
        inputbar.value = string;
    } 
        else if (event.key === "Escape") { 
        string = "";
        inputbar.value = string;
    }
});
    