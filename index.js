
let input = document.querySelector(".input")
let buttons = document.querySelectorAll(".btnn");
let button_equal = document.querySelector(".btn-equal");
let button_delete = document.querySelector(".btn-delete");



buttons.forEach((button)=>{
    //console.log(button.getAttribute('data-num'));

    button.addEventListener("click", ()=>{
        console.log(button.getAttribute('data-num'));
        input.value += button.getAttribute('data-num');
    })
})

button_equal.addEventListener("click", ()=>{
       if(input.value.length === 0){
        input.value = ""
       } else{
        input.value = eval(input.value);
       }
})

button_delete.addEventListener("click", ()=>{
    input.value = ""
})

//console.log(values);
// input.value = 100;
//console.log(input.value);