function display(value) {
    document.getElementById('textarea').value += value;
}

function clearInput() {
    document.getElementById('textarea').value = '';
}

function calculate() {
    var result = eval(document.getElementById('textarea').value);
    document.getElementById('textarea').value = result;
}