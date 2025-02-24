function appendToResult(value) {  
    const res = document.getElementById('result');  
    res.value += value;  
}  

function clearResult() {  
    const res = document.getElementById('result');  
    res.value = '';  
}  

function calculateResult() {  
    const res = document.getElementById('result');  
    try {  
        res.value = eval(res.value) || '';  
    } catch (error) {  
        res.value = 'Error';  
    }  
}
