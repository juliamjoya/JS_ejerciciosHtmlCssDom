const buttonRegProdJuana = document.querySelector('#botonRegVentaJuana');
const buttonRegProdPedro = document.querySelector('#botonRegVentaPedro');
const buttonCalculoEmpleadoMes = document.querySelector('#botonCalculoEmpleadoMes');

const precioAqua = 200;
const precioEmocion = 180;
const precioAlegria = 160;
const precioFrescura = 150;

const productosJuana = [];
const productosPedro = [];

let totalVentasJuana = 0;
let totalVentasPedro = 0;

const listaRegistrosJuana = document.querySelector('#productosRegistradosJuana');
const listaRegistrosPedro = document.querySelector('#productosRegistradosPedro');
const mensajeEmpleadoMes = document.querySelector('.contenedorMensajeFinal');

let menuProductos = "Digite el número del producto a registrar:\n\n";
menuProductos += "1. Aqua\n";
menuProductos += "2. Emoción\n";
menuProductos += "3. Alegria\n";
menuProductos += "4. Frescura\n";

buttonRegProdJuana.addEventListener('click', function(){
    let precioTotalVenta = 0;

    //Capturar producto
    let productoSeleccionado = parseInt(prompt(menuProductos));
    let listaProductos = ["Aqua","Emoción","Alegria","Frescura"];
    let posicionProducto = productoSeleccionado - 1;
    let nombreProducto = listaProductos[posicionProducto];

    //Capturar cantidad producto
    let cantidadProducto = parseInt(prompt("Digite la cantidad de "+nombreProducto+" a registrar:"));

    //Calcular precio total de la venta
    if(nombreProducto == 'Aqua'){precioTotalVenta = cantidadProducto * precioAqua;}else
    if(nombreProducto == 'Emoción'){precioTotalVenta = cantidadProducto * precioEmocion;}else
    if(nombreProducto == 'Alegria'){precioTotalVenta = cantidadProducto * precioAlegria;}else
    if(nombreProducto == 'Frescura'){precioTotalVenta = cantidadProducto * precioFrescura;}

    //console.log("Se va a registrar el producto "+nombreProducto+" con cantidad de "+cantidadProducto+" y su precio total es de "+precioTotalVenta);

    //Crear objeto para los datos capturados y demas
    var producto = {
        nombre: nombreProducto,
        cantidad: cantidadProducto,
        totalVenta: precioTotalVenta,
    };

    //Guardar los datos del objeto en el array
    productosJuana.push(producto);

    //Calculo precio total ventas del mes
    totalVentasJuana = totalVentasJuana + precioTotalVenta;
    //console.log("Juana vendio en el mes: "+totalVentasJuana);

    //Verificar que se guardo en el array
    console.log(productosJuana);

    //Imprime registros en forma de lista en el HTML
    listaRegistrosJuana.innerHTML = '';

    for(let i = 0; i < productosJuana.length; i++){
      listaRegistrosJuana.innerHTML += '<li>Producto: '+productosJuana[i].nombre+
      ' | Cantidad: '+productosJuana[i].cantidad+
      ' | Total Venta: '+productosJuana[i].totalVenta+'</li>';
    }
})

buttonRegProdPedro.addEventListener('click', function(){
  let precioTotalVenta = 0;

  //Capturar producto
  let productoSeleccionado = parseInt(prompt(menuProductos));
  let listaProductos = ["Aqua","Emoción","Alegria","Frescura"];
  let posicionProducto = productoSeleccionado - 1;
  let nombreProducto = listaProductos[posicionProducto];

  //Capturar cantidad producto
  let cantidadProducto = parseInt(prompt("Digite la cantidad de "+nombreProducto+" a registrar:"));

  //Calcular precio total de la venta
  if(nombreProducto == 'Aqua'){precioTotalVenta = cantidadProducto * precioAqua;}else
  if(nombreProducto == 'Emoción'){precioTotalVenta = cantidadProducto * precioEmocion;}else
  if(nombreProducto == 'Alegria'){precioTotalVenta = cantidadProducto * precioAlegria;}else
  if(nombreProducto == 'Frescura'){precioTotalVenta = cantidadProducto * precioFrescura;}

  //console.log("Se va a registrar el producto "+nombreProducto+" con cantidad de "+cantidadProducto+" y su precio total es de "+precioTotalVenta);

  //Crear objeto para los datos capturados y demas
  var producto = {
      nombre: nombreProducto,
      cantidad: cantidadProducto,
      totalVenta: precioTotalVenta
  };

  //Guardar los datos del objeto en el array
  productosPedro.push(producto);

  //Calculo precio total ventas del mes
  totalVentasPedro = totalVentasPedro + precioTotalVenta;
 //console.log("Pedro vendio en el mes: "+totalVentasPedro);

  //Verificar que se guardo en el array
  console.log(productosPedro);

  //Imprime registros en forma de lista en el HTML
  listaRegistrosPedro.innerHTML = '';

  for(let i = 0; i < productosPedro.length; i++){
    listaRegistrosPedro.innerHTML += '<li>Producto: '+productosPedro[i].nombre+
    ' | Cantidad: '+productosPedro[i].cantidad+
    ' | Total Venta: '+productosPedro[i].totalVenta+'</li>';
  }
})

buttonCalculoEmpleadoMes.addEventListener('click', function(){
  mensajeEmpleadoMes.innerHTML = '';

  if(totalVentasJuana != 0 || totalVentasPedro !=0){
    if(totalVentasJuana > totalVentasPedro){
      //console.log("El empleado del mes es Juana")
      mensajeEmpleadoMes.innerHTML += "<span class='parrafoMensajeEmpleadoMes'>El empleado del mes es Juana</span>";
    }else if(totalVentasJuana < totalVentasPedro){
      //console.log("El empleado del mes es Pedro")
      mensajeEmpleadoMes.innerHTML += "<span class='parrafoMensajeEmpleadoMes'>El empleado del mes es Pedro</span>";
    }else if(totalVentasJuana == totalVentasPedro){
      //console.log("Las ventas de Juana y Pedro fueron iguales. No hay empleado del mes")
      mensajeEmpleadoMes.innerHTML += "<span class='parrafoMensajeEmpleadoMes'>Las ventas de Juana y Pedro fueron iguales. No hay empleado del mes</span>";
    }
  }else{
    //console.log("Juana y Pedro deben tener minimo ventas de un producto para calcular quien es el empleado del mes")
    mensajeEmpleadoMes.innerHTML += "<span class='parrafoMensajeEmpleadoMes'>Juana ó Pedro deben tener al menos una venta registrada para calcular quien es el empleado del mes</span>";
  }
})