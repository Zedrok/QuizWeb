$(document).ready(function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                alert('Por favor revise los campos en rojo.');
            }
            else {
                document.getElementById("textoSuccess").innerHTML = "Datos Entregados!";
                alert('Datos entregados con éxito!');
                event.preventDefault(); /* Para apreciar el texto nuevo y no recargar la pagina */
            }
            form.classList.add('was-validated');
        }, false);
    });
});
function habilitarDNI() {
    var radios = document.querySelectorAll('[customRadioInline1]');
    Array.from(radios).forEach(function (r) {
        r.addEventListener('click', function () {
            var elemento = document.getElementById('RUTSubmit');
            if (this.id == 'RUTSubmit')
                elemento.removeAttribute('disabled');
            else
                elemento.setAttribute('disabled', 'disabled');
        });
    });
}
