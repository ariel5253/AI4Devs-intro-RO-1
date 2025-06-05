// Espera a que el DOM esté cargado
window.onload = function() {
    const form = document.getElementById('reverseForm');
    const input = document.getElementById('inputString');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const original = input.value.trim();
        if (!original) {
            result.innerHTML = '<div class="alert alert-warning" role="alert">Por favor, ingresa una cadena de texto.</div>';
            return;
        }
        const reversed = original.split('').reverse().join('');
        result.innerHTML = `<div class="alert alert-success" role="alert">${reversed}</div>`;
    });
};