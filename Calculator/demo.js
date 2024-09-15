function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

var a=document.querySelector(".one")

function value(){
    let box=new Date();
    let box1=box.getHours()+" : "+box.getMinutes()+" : "+box.getSeconds();
    a.innerHTML=box1
}
setInterval(value,1000)