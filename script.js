const numeroWhatsapp = "573113100317";

const productos = {
    1: { nombre: "Cafetera italiana", precio: 20000, categoria: "electrodomesticos", imagenes: ["img/cafeteraitaliana1.png", "img/cafeteraitaliana2.png", "img/cafeteraitaliana3.png"], descripcion: "Cafetera práctica y elegante, ideal para preparar café de manera sencilla en casa. Su diseño permite disfrutar de un café con buen sabor y aroma." },
    2: { nombre: "Juego de cuchillos Cutlery", precio: 89000, categoria: "cocina", imagenes: ["img/cuchilloscutlery1.png", "img/cuchilloscutlery2.png", "img/cuchilloscutlery3.png"], descripcion: "Juego de cuchillos práctico y versátil, ideal para cortar, picar y preparar diferentes alimentos en la cocina." },
    3: { nombre: "Exprimidor", precio: 120000, categoria: "electrodomesticos", imagenes: ["img/exprimidor1.png", "img/exprimidor2.png", "img/exprimidor3.png"], descripcion: "Exprimidor funcional para preparar jugos frescos de manera rápida y sencilla. Ideal para disfrutar bebidas naturales en casa." },
    4: { nombre: "Ollas de acero inoxidable", precio: 580000, categoria: "cocina", imagenes: ["img/ollasdeacero1.png", "img/ollasdeacero2.png"], descripcion: "Set de ollas de acero inoxidable pensado para facilitar la preparación de diferentes comidas. Su diseño combina funcionalidad, resistencia y una apariencia moderna." },
    5: { nombre: "Plancha para ropa", precio: 40000, categoria: "hogar", imagenes: ["img/plancha1.png", "img/plancha2.png", "img/plancha3.png"], descripcion: "Plancha práctica para eliminar arrugas y mantener tu ropa impecable. Una ayuda esencial para el cuidado diario de tus prendas." },
    6: { nombre: "Set de tablas de picar", precio: 30000, categoria: "cocina", imagenes: ["img/tablasdepicar1.png", "img/tablasdepicar2.png", "img/tablasdepicar3.png"], descripcion: "Set de tablas de picar ideal para organizar la preparación de alimentos y trabajar cómodamente en la cocina." },
    7: { nombre: "Cortinas", precio: 55000, categoria: "decoracion", imagenes: ["img/cortinas1.png", "img/cortinas2.png", "img/cortinas3.png"], descripcion: "Cortinas decorativas que ayudan a renovar tus espacios, aportar privacidad y complementar el estilo de tu hogar." },
    8: { nombre: "Sabanas de bambu lisas (1.40 m, Doble)", precio: 75000, categoria: "habitacion", imagenes: ["img/sabanabambu1.401.png", "img/sabanabambu1.402.png", "img/sabanabambu1.403.png", "img/sabanabambu1.404.png", "img/sabanabambu1.405.png"], descripcion: "Sábanas suaves y agradables al tacto, ideales para disfrutar de mayor comodidad durante el descanso. Disponibles en diferentes tamaños y diseños." },
    10: { nombre: "Sabanas de bambu lisas (2 x 2 m, King)", precio: 85000, categoria: "habitacion", imagenes: ["img/sabanabambu2x2.png", "img/sabanabambu2x25.png"], descripcion: "Sábanas suaves y agradables al tacto, ideales para disfrutar de mayor comodidad durante el descanso. Disponibles en diferentes tamaños y diseños." },
    11: { nombre: "Sabanas de bambu estampadas (1.60 m, Queen)", precio: 85000, categoria: "habitacion", imagenes: ["img/sabanabambu1.601.png", "img/sabanabambu1.602.png"], descripcion: "Sábanas suaves y agradables al tacto, ideales para disfrutar de mayor comodidad durante el descanso. Disponibles en diferentes tamaños y diseños." },
    12: { nombre: "Sabanas de bambu estampadas (1.40 m, Doble)", precio: 85000, categoria: "habitacion", imagenes: ["img/sabanabambuestampada1.401.png", "img/sabanabambuestampada1.402.png", "img/sabanabambuestampada1.403.png", "img/sabanabambuestampada1.404.png", "img/sabanabambuestampada1.405.png", "img/sabanabambuestampada1.406.png", "img/sabanabambuestampada1.407.png", "img/sabanabambuestampada1.408.png"], descripcion: "Sábanas suaves y agradables al tacto, ideales para disfrutar de mayor comodidad durante el descanso. Disponibles en diferentes tamaños y diseños." },
    13: { nombre: "Llave para jabon", precio: 40000, categoria: "cocina", imagenes: ["img/llavejabon1.png", "img/llavejabon2.png", "img/llavejabon3.png"], descripcion: "Llave para jabón práctica y funcional, ideal para mantener el jabón líquido disponible y facilitar las tareas diarias de la cocina." },
    14: { nombre: "Toalla (Beige crema)", precio: 48000, categoria: "usopersonal", imagenes: ["img/toalla2.png"], descripcion: "Toallas suaves y cómodas, ideales para el uso diario en el hogar. Disponibles en diferentes colores y estilos para complementar tu baño." },
    15: { nombre: "Toalla (Gris con dorado)", precio: 55000, categoria: "usopersonal", imagenes: ["img/toalla1.png"], descripcion: "Toallas suaves y cómodas, ideales para el uso diario en el hogar. Disponibles en diferentes colores y estilos para complementar tu baño." },
    16: { nombre: "Toalla de playa", precio: 57000, categoria: "usopersonal", imagenes: ["img/toalla3.png"], descripcion: "Toallas suaves y cómodas, ideales para el uso diario en el hogar. Disponibles en diferentes colores y estilos para complementar tu baño." },
    17: { nombre: "Cobija termica", precio: 85000, categoria: "habitacion", imagenes: ["img/cobijatermica1.png"], descripcion: "Cobija diseñada para brindar una sensación cálida y confortable, ideal para complementar la habitación y disfrutar de momentos de descanso." },
    18: { nombre: "Tendido Queen (Rosado)", precio: 160000, categoria: "habitacion", imagenes: ["img/tendidoqueen1.png"], descripcion: "Tendidos decorativos que ayudan a darle un toque acogedor y elegante a la habitación. Disponibles en diferentes tamaños, colores y diseños." },
    19: { nombre: "Tendido Queen (Beige)", precio: 160000, categoria: "habitacion", imagenes: ["img/tendidoqueen2.png"], descripcion: "Tendidos decorativos que ayudan a darle un toque acogedor y elegante a la habitación. Disponibles en diferentes tamaños, colores y diseños." },
    20: { nombre: "Tendido Queen (Gris oscuro)", precio: 160000, categoria: "habitacion", imagenes: ["img/tendidoqueen3.png"], descripcion: "Tendidos decorativos que ayudan a darle un toque acogedor y elegante a la habitación. Disponibles en diferentes tamaños, colores y diseños." },
    21: { nombre: "Tendido Queen (Gris claro y negro)", precio: 160000, categoria: "habitacion", imagenes: ["img/tendidoqueen4.png"], descripcion: "Tendidos decorativos que ayudan a darle un toque acogedor y elegante a la habitación. Disponibles en diferentes tamaños, colores y diseños." },
    22: { nombre: "Tendido King (Azul)", precio: 150000, categoria: "habitacion", imagenes: ["img/tendidoking1.png"], descripcion: "Tendidos decorativos que ayudan a darle un toque acogedor y elegante a la habitación. Disponibles en diferentes tamaños, colores y diseños." },
    23: { nombre: "Tendido King (Beige crema)", precio: 150000, categoria: "habitacion", imagenes: ["img/tendidoking2.png"], descripcion: "Tendidos decorativos que ayudan a darle un toque acogedor y elegante a la habitación. Disponibles en diferentes tamaños, colores y diseños." },
    24: { nombre: "Tendido Doble (Blanco)", precio: 170000, categoria: "habitacion", imagenes: ["img/tendidoble1.png"], descripcion: "Tendidos decorativos que ayudan a darle un toque acogedor y elegante a la habitación. Disponibles en diferentes tamaños, colores y diseños." },
    25: { nombre: "Tendido Doble estampado", precio: 100000, categoria: "habitacion", imagenes: ["img/tendido1.401.png", "img/tendido1.402.png"], descripcion: "Tendidos decorativos que ayudan a darle un toque acogedor y elegante a la habitación. Disponibles en diferentes tamaños, colores y diseños." },
    26: { nombre: "Procesador de alimentos eléctrico", precio: 70000, categoria: "cocina", alias: "molino picatodo picador", imagenes: ["img/picatodo1.png"], descripcion: "Práctico procesador de alimentos eléctrico, ideal para facilitar diferentes tareas en la cocina. Una opción funcional para preparar y procesar alimentos de manera rápida y sencilla." }
};

const variantes = { "tendido-queen": [18, 19, 20, 21], "tendido-king": [22, 23] };
const varianteSeleccionada = { "tendido-queen": 18, "tendido-king": 22 };

function formatearPrecio(precio) { return `$${Number(precio).toLocaleString("es-CO")}`; }
function imagenPrincipal(producto) { return producto?.imagenes?.[0] || "img/imageinicio.png"; }
function obtenerVarianteActual(grupo) { return varianteSeleccionada[grupo] || variantes[grupo][0]; }

function actualizarGruposVariantes() {
    Object.keys(variantes).forEach(grupo => {
        const id = obtenerVarianteActual(grupo);
        const producto = productos[id];
        const imagen = document.getElementById(`img-grupo-${grupo}`);
        const precio = document.getElementById(`precio-grupo-${grupo}`);
        if (imagen) imagen.src = imagenPrincipal(producto);
        if (precio) precio.textContent = formatearPrecio(producto.precio);
        const contenedor = document.getElementById(`colores-grupo-${grupo}`);
        if (contenedor) contenedor.innerHTML = variantes[grupo].map(variante => `<button type="button" class="swatch-color${variante === id ? " activo" : ""}" aria-label="${productos[variante].nombre}" style="background-image:url('${imagenPrincipal(productos[variante])}');background-size:cover" onclick="event.stopPropagation(); seleccionarVariante('${grupo}', ${variante})"></button>`).join("");
    });
}
function seleccionarVariante(grupo, id) { varianteSeleccionada[grupo] = id; actualizarGruposVariantes(); }

function actualizarContadorCarrito() {
    const contador = document.getElementById("carritoContador");
    const carrito = JSON.parse(localStorage.getItem("ky-carrito") || "[]");
    if (contador) contador.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
}
function obtenerCarrito() { return JSON.parse(localStorage.getItem("ky-carrito") || "[]"); }

function agregarCarrito(evento, id) {
    evento?.stopPropagation();
    if (!productos[id]) return;
    const carrito = obtenerCarrito();
    const existente = carrito.find(item => item.id === id);
    if (existente) existente.cantidad += 1;
    else carrito.push({ id, cantidad: 1 });
    localStorage.setItem("ky-carrito", JSON.stringify(carrito));
    actualizarContadorCarrito();
    renderizarCarrito();
}
function cambiarCantidad(id, cambio) {
    const carrito = obtenerCarrito();
    const item = carrito.find(elemento => elemento.id === id);
    if (!item) return;
    item.cantidad += cambio;
    localStorage.setItem("ky-carrito", JSON.stringify(carrito.filter(elemento => elemento.cantidad > 0)));
    actualizarContadorCarrito(); renderizarCarrito();
}
function eliminarDelCarrito(id) {
    localStorage.setItem("ky-carrito", JSON.stringify(obtenerCarrito().filter(item => item.id !== id)));
    actualizarContadorCarrito(); renderizarCarrito();
}
function renderizarCarrito() {
    const contenedor = document.getElementById("carritoItems");
    const totalElemento = document.getElementById("carritoTotal");
    if (!contenedor || !totalElemento) return;
    let total = 0;
    const carrito = obtenerCarrito();
    if (!carrito.length) { contenedor.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>'; totalElemento.textContent = "$0"; return; }
    contenedor.innerHTML = carrito.map(item => {
        const producto = productos[item.id];
        if (!producto) return "";
        total += producto.precio * item.cantidad;
        return `<div class="carrito-item"><div class="carrito-item-info"><h4>${producto.nombre}</h4><span>${formatearPrecio(producto.precio)} x ${item.cantidad}</span></div><div class="carrito-item-acciones"><button type="button" onclick="cambiarCantidad(${item.id}, -1)">−</button><button type="button" onclick="cambiarCantidad(${item.id}, 1)">+</button><button type="button" class="carrito-item-eliminar" aria-label="Eliminar" onclick="eliminarDelCarrito(${item.id})">×</button></div></div>`;
    }).join("");
    totalElemento.textContent = formatearPrecio(total);
}
function abrirCarrito() { document.getElementById("carritoPanel")?.classList.add("abierto"); document.getElementById("overlay")?.classList.add("visible"); renderizarCarrito(); }
function cerrarCarrito() { document.getElementById("carritoPanel")?.classList.remove("abierto"); document.getElementById("overlay")?.classList.remove("visible"); }

function cerrarProducto() { document.getElementById("modalOverlay")?.classList.remove("visible"); document.body.classList.remove("modal-abierto"); }

function escaparHtml(texto) {
    return String(texto).replace(/[&<>'"]/g, caracter => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[caracter]));
}

function obtenerResenas(id) {
    return JSON.parse(localStorage.getItem(`ky-resenas-${id}`) || "[]");
}

function obtenerIdentificadorResenador() {
    let identificador = localStorage.getItem("ky-identificador-resenador");
    if (!identificador) {
        identificador = `resenador-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        localStorage.setItem("ky-identificador-resenador", identificador);
    }
    return identificador;
}

function formatearEstrellas(cantidad) {
    return `${"★".repeat(cantidad)}${"☆".repeat(5 - cantidad)}`;
}

function resumenCalificacion(id) {
    const resenas = obtenerResenas(id);
    if (!resenas.length) return '<span class="calificacion-sin-resenas">Sin calificaciones todavía</span>';
    const promedio = resenas.reduce((total, resena) => total + resena.calificacion, 0) / resenas.length;
    return `<span class="calificacion-estrellas">${formatearEstrellas(Math.round(promedio))}</span><span class="calificacion-promedio">${promedio.toFixed(1)} / 5 (${resenas.length} ${resenas.length === 1 ? "opinión" : "opiniones"})</span>`;
}

function renderizarResenas(id) {
    const lista = document.getElementById("listaResenas");
    if (!lista) return;
    const resumen = document.querySelector(".resumen-calificacion");
    if (resumen) resumen.innerHTML = resumenCalificacion(id);
    const resenas = obtenerResenas(id);
    const identificador = obtenerIdentificadorResenador();
    lista.innerHTML = resenas.length ? resenas.map(resena => `<article class="resena"><div class="resena-cabecera"><strong>${escaparHtml(resena.nombre)}</strong><span class="resena-fecha">${escaparHtml(resena.fecha)}</span></div><div class="resena-estrellas" aria-label="${resena.calificacion} de 5 estrellas">${formatearEstrellas(resena.calificacion)}</div><p>${escaparHtml(resena.comentario)}</p>${resena.autor === identificador ? `<div class="resena-acciones"><button type="button" onclick="editarResena(${id}, '${resena.id}')">Editar</button><button type="button" onclick="eliminarResena(${id}, '${resena.id}')">Eliminar</button></div>` : ""}</article>`).join("") : '<p class="resenas-vacias">Sé la primera persona en opinar sobre este producto.</p>';
}

function guardarResena(id, resenaId = null) {
    const formulario = document.getElementById("formularioResena");
    if (!formulario) return;
    const datos = new FormData(formulario);
    const nombre = String(datos.get("nombre") || "").trim();
    const comentario = String(datos.get("comentario") || "").trim();
    const calificacion = Number(datos.get("calificacion"));
    if (!nombre || !comentario || calificacion < 1 || calificacion > 5) return;
    const resenas = obtenerResenas(id);
    const fecha = new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" });
    if (resenaId) {
        const resena = resenas.find(elemento => elemento.id === resenaId && elemento.autor === obtenerIdentificadorResenador());
        if (resena) { resena.nombre = nombre; resena.comentario = comentario; resena.calificacion = calificacion; resena.fecha = fecha; }
    } else {
        resenas.unshift({ id: `resena-${Date.now()}`, nombre, comentario, calificacion, fecha, autor: obtenerIdentificadorResenador() });
    }
    localStorage.setItem(`ky-resenas-${id}`, JSON.stringify(resenas));
    formulario.reset();
    formulario.querySelector('input[name="calificacion"][value="5"]').checked = true;
    formulario.dataset.editando = "";
    formulario.querySelector("button[type=submit]").textContent = "Publicar opinión";
    renderizarResenas(id);
}

function editarResena(id, resenaId) {
    const resena = obtenerResenas(id).find(elemento => elemento.id === resenaId && elemento.autor === obtenerIdentificadorResenador());
    const formulario = document.getElementById("formularioResena");
    if (!resena || !formulario) return;
    formulario.nombre.value = resena.nombre;
    formulario.comentario.value = resena.comentario;
    formulario.querySelector(`input[name="calificacion"][value="${resena.calificacion}"]`).checked = true;
    formulario.dataset.editando = resenaId;
    formulario.querySelector("button[type=submit]").textContent = "Guardar cambios";
    formulario.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function eliminarResena(id, resenaId) {
    const resenas = obtenerResenas(id).filter(resena => !(resena.id === resenaId && resena.autor === obtenerIdentificadorResenador()));
    localStorage.setItem(`ky-resenas-${id}`, JSON.stringify(resenas));
    renderizarResenas(id);
}

function abrirProducto(id) {
    const producto = productos[id];
    const modal = document.getElementById("modalOverlay");
    const contenido = document.getElementById("modalContenido");
    if (!producto || !modal || !contenido) return;
    contenido.innerHTML = `<div class="modal-galeria"><img id="modalImagenPrincipal" class="modal-imagen-principal" src="${imagenPrincipal(producto)}" alt="${producto.nombre}"><div class="modal-miniaturas">${producto.imagenes.map((imagen, indice) => `<img class="modal-miniatura${indice === 0 ? " activa" : ""}" src="${imagen}" alt="${producto.nombre} ${indice + 1}" onclick="cambiarImagenModal('${imagen}', this)">`).join("")}</div></div><div class="modal-detalles"><h2>${producto.nombre}</h2><div class="resumen-calificacion" aria-live="polite">${resumenCalificacion(id)}</div><p class="descripcion">${producto.descripcion}</p><p class="precio">${formatearPrecio(producto.precio)}</p><div class="modal-acciones"><button type="button" class="btn-agregar" onclick="agregarCarrito(event, ${id})">Agregar al carrito</button><button type="button" class="boton" onclick="comprarYa(${id})">Comprar ya</button></div></div><section class="resenas-seccion"><h3>¿Ya compraste este producto?</h3><p>Escribe tu opinión</p><form class="formulario-resena" id="formularioResena"><label>Tu nombre<input name="nombre" type="text" maxlength="60" required></label><fieldset><legend>Calificación</legend><div class="selector-estrellas">${[1, 2, 3, 4, 5].map(valor => `<label><input type="radio" name="calificacion" value="${valor}"${valor === 5 ? " checked" : ""}><span>${valor}</span></label>`).join("")}</div></fieldset><label>Tu comentario<textarea name="comentario" rows="4" maxlength="500" required></textarea></label><button type="submit" class="boton">Publicar opinión</button></form><div class="lista-resenas" id="listaResenas"></div></section>`;
    const formulario = document.getElementById("formularioResena");
    formulario.addEventListener("submit", evento => { evento.preventDefault(); guardarResena(id, formulario.dataset.editando || null); });
    renderizarResenas(id);
    modal.classList.add("visible"); document.body.classList.add("modal-abierto");
}
function cambiarImagenModal(src, miniatura) { const imagen = document.getElementById("modalImagenPrincipal"); if (imagen) imagen.src = src; document.querySelectorAll(".modal-miniatura").forEach(elemento => elemento.classList.remove("activa")); miniatura.classList.add("activa"); }
function comprarYa(id) { agregarCarrito(null, id); cerrarProducto(); abrirCarrito(); }

function normalizarTexto(texto) { return String(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(); }

/* =========================================================
   TOLERANCIA A ERRORES DE ESCRITURA (distancia de edición)
   Permite que "chuchillo", "exprimidr" o "sabnas" encuentren
   el producto correcto aunque el usuario se equivoque al
   escribir. El límite de errores permitidos crece con el
   tamaño de la palabra para no generar falsos positivos en
   palabras cortas.
========================================================== */
function distanciaEdicion(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const fila = new Array(b.length + 1);
    for (let j = 0; j <= b.length; j++) fila[j] = j;
    for (let i = 1; i <= a.length; i++) {
        let anterior = fila[0];
        fila[0] = i;
        for (let j = 1; j <= b.length; j++) {
            const temp = fila[j];
            fila[j] = a[i - 1] === b[j - 1]
                ? anterior
                : 1 + Math.min(anterior, fila[j], fila[j - 1]);
            anterior = temp;
        }
    }
    return fila[b.length];
}

function toleranciaPermitida(longitud) {
    if (longitud <= 9) return 1;
    return 2;
}

// ¿La palabra buscada aparece (exacta, parcial o con un pequeño error de escritura)
// dentro del texto objetivo? La tolerancia a errores exige que la palabra empiece
// igual y que la diferencia de longitud sea mínima, para no generar coincidencias
// falsas entre palabras distintas que por casualidad quedan "cerca" en edición
// (por ejemplo, que "toallas" no termine encontrando "ollas").
function palabraCoincide(palabraBuscada, textoObjetivo) {
    if (!palabraBuscada) return true;
    if (textoObjetivo.includes(palabraBuscada)) return true;
    if (palabraBuscada.length < 4) return false; // evita falsos positivos en palabras muy cortas
    return textoObjetivo.split(" ").some(palabraObjetivo => {
        if (!palabraObjetivo || palabraObjetivo.length < 4) return false;
        if (palabraObjetivo[0] !== palabraBuscada[0]) return false; // deben empezar igual
        if (Math.abs(palabraObjetivo.length - palabraBuscada.length) > 2) return false;
        return distanciaEdicion(palabraBuscada, palabraObjetivo) <= toleranciaPermitida(Math.max(palabraBuscada.length, palabraObjetivo.length));
    });
}

// Texto de búsqueda de un producto: nombre + categoría + alias de búsqueda opcionales
// (todo sale del objeto "productos", que es la única fuente de datos). Si un producto
// se conoce por otro nombre común (ej. "molino"/"picatodo" para el procesador de
// alimentos), se agrega en su campo "alias" dentro de "productos" y el buscador
// principal, el Asistente KY y todo lo demás lo encuentran automáticamente.
function textoBusquedaProducto(id) {
    const p = productos[id];
    if (!p) return "";
    return normalizarTexto(`${p.nombre} ${p.categoria || ""} ${p.alias || ""}`);
}

/* =========================================================
   BÚSQUEDA — FUENTE ÚNICA DE DATOS
   Tanto el buscador principal como el Asistente KY llaman a
   esta misma función, que siempre lee del objeto "productos".
   Cualquier producto nuevo que se agregue ahí aparece
   automáticamente en ambas búsquedas, sin listas aparte.
========================================================== */
function buscarProductos(texto) {
    const consulta = normalizarTexto(texto);
    if (!consulta) return Object.keys(productos).map(Number);
    const palabras = consulta.split(" ").filter(Boolean);
    return Object.keys(productos).map(Number).filter(id => {
        const nombre = textoBusquedaProducto(id);
        if (nombre.includes(consulta)) return true;
        return palabras.every(palabra => palabraCoincide(palabra, nombre));
    });
}

let categoriaSeleccionada = "";

// Ids de producto que representa una tarjeta (una sola id, o varias si es un grupo de variantes)
function idsDeTarjeta(tarjeta) {
    if (tarjeta.dataset.ids) return tarjeta.dataset.ids.split(",").map(Number).filter(id => productos[id]);
    if (tarjeta.dataset.id) return [Number(tarjeta.dataset.id)].filter(id => productos[id]);
    return [];
}

// Mantiene sincronizado el texto de cada tarjeta con el objeto "productos" (fuente única),
// para que el buscador nunca dependa de un dato manual que alguien olvidó actualizar.
function sincronizarTarjetasProductos() {
    document.querySelectorAll(".producto").forEach(tarjeta => {
        const ids = idsDeTarjeta(tarjeta);
        if (!ids.length) return;
        tarjeta.dataset.nombre = ids.map(id => textoBusquedaProducto(id)).join(" ");
    });
}

function ejecutarBusqueda() {
    const entrada = document.getElementById("inputBuscar");
    if (!entrada) return;
    const consulta = normalizarTexto(entrada.value);
    const palabras = consulta.split(" ").filter(Boolean);
    const tarjetas = [...document.querySelectorAll(".producto")];
    tarjetas.forEach(tarjeta => {
        const nombre = tarjeta.dataset.nombre || "";
        const categoria = tarjeta.dataset.categoria || "";
        const coincideTexto = !consulta || nombre.includes(consulta) || palabras.every(palabra => palabraCoincide(palabra, nombre));
        const coincideCategoria = !categoriaSeleccionada || categoria === categoriaSeleccionada;
        tarjeta.hidden = !(coincideTexto && coincideCategoria);
    });
    const hayResultados = tarjetas.some(tarjeta => !tarjeta.hidden);
    const sinResultados = document.getElementById("sinResultados");
    if (sinResultados) sinResultados.style.display = hayResultados ? "none" : "block";
}

function seleccionarCategoria(categoria) {
    categoriaSeleccionada = categoria;
    document.querySelectorAll(".categoria").forEach(elemento => {
        elemento.classList.toggle("activa", elemento.dataset.categoria === categoria);
    });
    ejecutarBusqueda();
    document.getElementById("productos")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function mostrarTodosLosProductos(evento) {
    evento?.preventDefault();
    categoriaSeleccionada = "";
    document.querySelectorAll(".categoria").forEach(elemento => elemento.classList.remove("activa"));
    const entrada = document.getElementById("inputBuscar");
    if (entrada) entrada.value = "";
    ejecutarBusqueda();
}

function iniciarTienda() {
    sincronizarTarjetasProductos();
    actualizarContadorCarrito(); actualizarGruposVariantes(); renderizarCarrito();
    const secciones = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver(elementos => {
            elementos.forEach(elemento => {
                if (elemento.isIntersecting) {
                    elemento.target.classList.add("visible");
                    observador.unobserve(elemento.target);
                }
            });
        }, { threshold: 0.08 });
        secciones.forEach(seccion => observador.observe(seccion));
    } else {
        secciones.forEach(seccion => seccion.classList.add("visible"));
    }
    document.getElementById("btnCarrito")?.addEventListener("click", evento => { evento.preventDefault(); abrirCarrito(); });
    document.getElementById("cerrarCarrito")?.addEventListener("click", cerrarCarrito);
    document.getElementById("overlay")?.addEventListener("click", cerrarCarrito);
    document.getElementById("cerrarModal")?.addEventListener("click", cerrarProducto);
    document.getElementById("modalOverlay")?.addEventListener("click", evento => { if (evento.target.id === "modalOverlay") cerrarProducto(); });
    document.addEventListener("keydown", evento => { if (evento.key === "Escape") { cerrarProducto(); cerrarCarrito(); } });
    document.getElementById("finalizarCompra")?.addEventListener("click", evento => {
        evento.preventDefault();
        const detalle = obtenerCarrito().map(item => `${productos[item.id].nombre} x${item.cantidad}`).join(", ");
        if (detalle) window.open(`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(`Hola, quiero comprar: ${detalle}`)}`, "_blank");
    });
    document.getElementById("inputBuscar")?.addEventListener("input", ejecutarBusqueda);
    document.getElementById("inputBuscar")?.addEventListener("keydown", evento => {
        if (evento.key === "Enter") {
            evento.preventDefault();
            ejecutarBusqueda();
        }
    });
    document.getElementById("btnBuscar")?.addEventListener("click", ejecutarBusqueda);
    document.querySelectorAll(".categoria").forEach(elemento => {
        elemento.addEventListener("click", () => seleccionarCategoria(elemento.dataset.categoria));
    });
    document.getElementById("verTodos")?.addEventListener("click", mostrarTodosLosProductos);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciarTienda); else iniciarTienda();
