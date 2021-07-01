let codes = document.getElementById("codes");
let run = document.getElementById("run");
let clear = document.getElementById("clear");
let result = document.getElementById("result");
run.onclick = ()=> {
    result.innerHTML=codes.value   
    localStorage.setItem("Result",codes.value)
};
clear.onclick = ()=>{
    result.innerHTML=" "
    codes.value=" "
};
