let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}
function calculate() {
  
  const expression = displayValue.replace(/x/g, '*').replace(/÷/g, '/');

  try {
    const result = eval(expression);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    displayValue = '';
    document.getElementById('display').value = 'Error';
  }
}



