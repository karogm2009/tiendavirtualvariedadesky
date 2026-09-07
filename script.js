const numeroWhatsapp = "573113100317";

const productos = {
    1: { nombre: "Cafetera italiana", precio: 20000, categoria: "electrodomesticos", imagenes: ["img/cafeteraitaliana1.png", "img/cafeteraitaliana2.png", "img/cafeteraitaliana3.png"], descripcion: "Cafetera italiana practica para preparar cafe en casa." },
    2: { nombre: "Juego de cuchillos Cutlery", precio: 89000, categoria: "cocina", imagenes: ["img/cuchilloscutlery1.png", "img/cuchilloscutlery2.png", "img/cuchilloscutlery3.png"], descripcion: "Juego de cuchillos para las tareas diarias de cocina." },
    3: { nombre: "Exprimidor", precio: 120000, categoria: "electrodomesticos", imagenes: ["img/exprimidor1.png", "img/exprimidor2.png", "img/exprimidor3.png"], descripcion: "Exprimidor practico para preparar jugos frescos." },
    4: { nombre: "Ollas de acero inoxidable", precio: 580000, categoria: "cocina", imagenes: ["img/ollasdeacero1.png", "img/ollasdeacero2.png"], descripcion: "Juego de ollas de acero inoxidable para tu cocina." },
    5: { nombre: "Plancha para ropa", precio: 40000, categoria: "hogar", imagenes: ["img/plancha1.png", "img/plancha2.png", "img/plancha3.png"], descripcion: "Plancha para mantener tu ropa impecable." },
    6: { nombre: "Set de tablas de picar", precio: 30000, categoria: "cocina", imagenes: ["img/tablasdepicar1.png", "img/tablasdepicar2.png", "img/tablasdepicar3.png"], descripcion: "Set de tablas para preparar tus alimentos con comodidad." },
    7: { nombre: "Cortinas", precio: 55000, categoria: "decoracion", imagenes: ["img/cortinas1.png", "img/cortinas2.png", "img/cortinas3.png"], descripcion: "Cortinas para renovar y complementar tus espacios." },
    8: { nombre: "Sabanas de bambu lisas (1.40 m, Doble)", precio: 75000, categoria: "habitacion", imagenes: ["img/sabanabambu1.401.png", "img/sabanabambu1.402.png", "img/sabanabambu1.403.png", "img/sabanabambu1.404.png", "img/sabanabambu1.405.png"], descripcion: "Sabanas de bambu lisas en tamano doble." },
    9: { nombre: "Molino picador electrico", precio: 74000, categoria: "cocina", imagenes: ["img/picatodo1.png"], descripcion: "Molino picador electrico practico para preparar tus alimentos." },
    10: { nombre: "Sabanas de bambu lisas (2 x 2 m, King)", precio: 85000, categoria: "habitacion", imagenes: ["img/sabanabambu2x2.png", "img/sabanabambu2x25.png"], descripcion: "Sabanas de bambu lisas en tamano King." },
    11: { nombre: "Sabanas de bambu estampadas (1.60 m, Queen)", precio: 85000, categoria: "habitacion", imagenes: ["img/sabanabambu1.601.png", "img/sabanabambu1.602.png"], descripcion: "Sabanas de bambu estampadas en tamano Queen." },
    12: { nombre: "Sabanas de bambu estampadas (1.40 m, Doble)", precio: 85000, categoria: "habitacion", imagenes: ["img/sabanabambuestampada1.401.png", "img/sabanabambuestampada1.402.png", "img/sabanabambuestampada1.403.png", "img/sabanabambuestampada1.404.png", "img/sabanabambuestampada1.405.png", "img/sabanabambuestampada1.406.png", "img/sabanabambuestampada1.407.png", "img/sabanabambuestampada1.408.png"], descripcion: "Sabanas de bambu estampadas en tamano doble." },
    13: { nombre: "Llave para jabon", precio: 40000, categoria: "cocina", imagenes: ["img/llavejabon1.png", "img/llavejabon2.png", "img/llavejabon3.png"], descripcion: "Llave para jabon practica y funcional para tu cocina." },
    14: { nombre: "Toalla (Beige crema)", precio: 48000, categoria: "usopersonal", imagenes: ["img/toalla2.png"], descripcion: "Toalla suave en tono beige crema." },
    15: { nombre: "Toalla (Gris con dorado)", precio: 55000, categoria: "usopersonal", imagenes: ["img/toalla1.png"], descripcion: "Toalla suave con acabado gris y dorado." },
    16: { nombre: "Toalla de playa", precio: 57000, categoria: "usopersonal", imagenes: ["img/toalla3.png"], descripcion: "Toalla amplia para disfrutar tus dias de playa." },
    17: { nombre: "Cobija termica", precio: 85000, categoria: "habitacion", imagenes: ["img/cobijatermica1.png"], descripcion: "Cobija termica para descansar con mayor abrigo." },
    18: { nombre: "Tendido Queen (Rosado)", precio: 160000, categoria: "habitacion", imagenes: ["img/tendidoqueen1.png"], descripcion: "Tendido Queen en color rosado." },
    19: { nombre: "Tendido Queen (Beige)", precio: 160000, categoria: "habitacion", imagenes: ["img/tendidoqueen2.png"], descripcion: "Tendido Queen en color beige." },
    20: { nombre: "Tendido Queen (Gris oscuro)", precio: 160000, categoria: "habitacion", imagenes: ["img/tendidoqueen3.png"], descripcion: "Tendido Queen en color gris oscuro." },
    21: { nombre: "Tendido Queen (Gris claro y negro)", precio: 160000, categoria: "habitacion", imagenes: ["img/tendidoqueen4.png"], descripcion: "Tendido Queen en color gris claro y negro." },
    22: { nombre: "Tendido King (Azul)", precio: 150000, categoria: "habitacion", imagenes: ["img/tendidoking1.png"], descripcion: "Tendido King en color azul." },
    23: { nombre: "Tendido King (Beige crema)", precio: 150000, categoria: "habitacion", imagenes: ["img/tendidoking2.png"], descripcion: "Tendido King en color beige crema." },
    24: { nombre: "Tendido Doble (Blanco)", precio: 170000, categoria: "habitacion", imagenes: ["img/tendidoble1.png"], descripcion: "Tendido doble en color blanco." },
    25: { nombre: "Tendido Doble estampado", precio: 100000, categoria: "habitacion", imagenes: ["img/tendido1.401.png", "img/tendido1.402.png"], descripcion: "Tendido doble con estampado." },
    26: { nombre: "Procesador de alimentos eléctrico", precio: 70000, categoria: "cocina", imagenes: ["img/picatodo1.png"], descripcion: "Procesador de alimentos eléctrico para agilizar la preparacion de tus recetas." }
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
function abrirProducto(id) {
    const producto = productos[id];
    const modal = document.getElementById("modalOverlay");
    const contenido = document.getElementById("modalContenido");
    if (!producto || !modal || !contenido) return;
    contenido.innerHTML = `<div class="modal-galeria"><img id="modalImagenPrincipal" class="modal-imagen-principal" src="${imagenPrincipal(producto)}" alt="${producto.nombre}"><div class="modal-miniaturas">${producto.imagenes.map((imagen, indice) => `<img class="modal-miniatura${indice === 0 ? " activa" : ""}" src="${imagen}" alt="${producto.nombre} ${indice + 1}" onclick="cambiarImagenModal('${imagen}', this)">`).join("")}</div></div><div class="modal-detalles"><h2>${producto.nombre}</h2><div class="estrellas" aria-label="5 de 5 estrellas">★★★★★</div><p class="descripcion">${producto.descripcion}</p><p class="precio">${formatearPrecio(producto.precio)}</p><div class="modal-acciones"><button type="button" class="btn-agregar" onclick="agregarCarrito(event, ${id})">Agregar al carrito</button><button type="button" class="boton" onclick="comprarYa(${id})">Comprar ya</button></div></div>`;
    modal.classList.add("visible"); document.body.classList.add("modal-abierto");
}
function cambiarImagenModal(src, miniatura) { const imagen = document.getElementById("modalImagenPrincipal"); if (imagen) imagen.src = src; document.querySelectorAll(".modal-miniatura").forEach(elemento => elemento.classList.remove("activa")); miniatura.classList.add("activa"); }
function comprarYa(id) { agregarCarrito(null, id); cerrarProducto(); abrirCarrito(); }

function normalizarTexto(texto) { return String(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(); }
function buscarProductos(texto) {
    const consulta = normalizarTexto(texto);
    const palabras = consulta.split(" ").filter(palabra => palabra.length > 2);
    return Object.keys(productos).map(Number).filter(id => {
        const nombre = normalizarTexto(productos[id].nombre);
        return nombre.includes(consulta) || palabras.every(palabra => nombre.includes(palabra));
    });
}

function iniciarTienda() {
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
    document.getElementById("inputBuscar")?.addEventListener("input", evento => {
        const consulta = normalizarTexto(evento.target.value);
        document.querySelectorAll(".producto").forEach(tarjeta => { tarjeta.hidden = Boolean(consulta) && !normalizarTexto(tarjeta.dataset.nombre || "").includes(consulta); });
        const hayResultados = [...document.querySelectorAll(".producto")].some(tarjeta => !tarjeta.hidden);
        const sinResultados = document.getElementById("sinResultados");
        if (sinResultados) sinResultados.style.display = hayResultados ? "none" : "block";
    });
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciarTienda); else iniciarTienda();
