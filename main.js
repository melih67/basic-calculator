document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let operation = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;
  
        if (value === '=') {
          try {
            const result = eval(operation);
            if (isNaN(result) || !isFinite(result)) {
              display.value = 'Erreur';
            } else {
              display.value = result;
            }
          } catch (error) {
            display.value = 'Erreur';
          }
          operation = '';
        } else if (value === 'C') {
          display.value = '';
          operation = '';
        } else if (value === 'DEL') {
          display.value = display.value.slice(0, -1);
          operation = operation.slice(0, -1);
        } else if (value === '.') {
          if (!display.value.includes('.')) {
            display.value += value;
            operation += value;
          }
        } else {
          operation += value;
          display.value += value;
        }
      });
    });
  });
  