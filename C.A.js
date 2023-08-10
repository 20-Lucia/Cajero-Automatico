var cuentas = [
    { nombre: "Juan", saldo: 1200000, password: "juan1" },
    { nombre: "Sonia", saldo: 3500000, password: "sonia1" },
    { nombre: "Angelica", saldo: 856000, password: "angelica1" },
  ];
  
  var cuentaActual = -1;
  
  function iniciarSesion() {
    var cuentaIndex = parseInt(document.getElementById("cuenta").value);
    var password = document.getElementById("password").value;
  
    if (cuentas[cuentaIndex].password === password) {
      cuentaActual = cuentaIndex;
      document.getElementById("nombreCuenta").innerText = cuentas[cuentaActual].nombre;
      document.getElementById("operaciones").classList.remove("hidden");
      document.getElementById("resultado").classList.add("hidden");
    } else {
      mostrarMensaje("Password incorrecto. Inténtalo nuevamente.");
    }
  }
  
  function mostrarMensaje(mensaje) {
    document.getElementById("mensaje").innerText = mensaje;
    document.getElementById("resultado").classList.remove("hidden");
  }
  
  function consultarSaldo() {
    var saldo = cuentas[cuentaActual].saldo;
    mostrarMensaje("El saldo actual es: $" + saldo);
  }
  
  function ingresarMonto() {
    var monto = parseFloat(prompt("Ingresa el monto a ingresar:"));
    if (isNaN(monto) || monto <= 0) {
      mostrarMensaje("Monto inválido.");
      return;
    }
  
    var saldoActual = cuentas[cuentaActual].saldo;
    var nuevoSaldo = saldoActual + monto;
  
    if (nuevoSaldo > 7000000) {
      mostrarMensaje("No se puede ingresar más de $990. Operación cancelada.");
      return;
    }
  
    cuentas[cuentaActual].saldo = nuevoSaldo;
    mostrarMensaje("Has ingresado $" + monto + ". Nuevo saldo: $" + nuevoSaldo);
  }
  
  function retirarMonto() {
    var monto = parseFloat(prompt("Ingresa el monto a retirar:"));
    if (isNaN(monto) || monto <= 0) {
      mostrarMensaje("Monto inválido.");
      return;
    }
  
    var saldoActual = cuentas[cuentaActual].saldo;
    var nuevoSaldo = saldoActual - monto;
  
    if (nuevoSaldo < 100000) {
      mostrarMensaje("No se puede retirar más de $10. Operación cancelada.");
      return;
    }
  
    cuentas[cuentaActual].saldo = nuevoSaldo;
    mostrarMensaje("Has retirado $" + monto + ". Nuevo saldo: $" + nuevoSaldo);
  }
  
  function cerrarSesion() {
    cuentaActual = -1;
    document.getElementById("operaciones").classList.add("hidden");
    document.getElementById("resultado").classList.add("hidden");
    document.getElementById("password").value = "";
  }