// Función para guardar la nota en el almacenamiento local del navegador
function guardarNota() {
    var nota = document.getElementById("texto").value;
    localStorage.setItem("nota", nota);
    alert("Nota guardada correctamente");
  }
  
  // Función para cargar la nota desde el almacenamiento local del navegador
  function cargarNota() {
    var notaGuardada = localStorage.getItem("nota");
    if (notaGuardada) {
      document.getElementById("texto").value = notaGuardada;
      alert("Nota cargada correctamente");
    } else {
      alert("No hay ninguna nota guardada");
    }
  }
  
  // Función para borrar la nota del almacenamiento local del navegador
  function borrarNota() {
    localStorage.removeItem("nota");
    document.getElementById("texto").value = "";
    alert("Nota borrada correctamente");
  }
  
  