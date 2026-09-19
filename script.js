const numeroWhatsapp = "573113100317";

const productos = {
    1: { nombre: "Cafetera italiana", precio: 20000, categoria: "electrodomesticos", imagenes: ["img/cafeteraitaliana1.png", "img/cafeteraitaliana2.png", "img/cafeteraitaliana3.png"], descripcion: "Cafetera práctica y elegante, ideal para preparar café de manera sencilla en casa. Su diseño permite disfrutar de un café con buen sabor y aroma." },
    2: { nombre: "Juego de cuchillos Cutlery", precio: 89000, categoria: "cocina", imagenes: ["img/cuchilloscutlery1.png", "img/cuchilloscutlery2.png", "img/cuchilloscutlery3.png"], descripcion: "Juego de cuchillos práctico y versátil, ideal para cortar, picar y preparar diferentes alimentos en la cocina." },
    3: { nombre: "Exprimidor", precio: 120000, categoria: "electrodomesticos", imagenes: ["img/exprimidor1.png", "img/exprimidor2.png", "img/exprimidor3.png"], descripcion: "Exprimidor funcional para preparar jugos frescos de manera rápida y sencilla. Ideal para disfrutar bebidas naturales en casa." },
    4: { nombre: "Ollas de acero inoxidable", precio: 580000, categoria: "cocina", imagenes: ["img/ollasdeacero1.png", "img/ollasdeacero2.png"], descripcion: "Set de ollas de acero inoxidable pensado para facilitar la preparación de diferentes comidas. Su diseño combina funcionalidad, resistencia y una apariencia moderna." },
    5: { nombre: "Plancha para ropa", precio: 40000, categoria: "electrodomesticos", imagenes: ["img/plancha1.png", "img/plancha2.png", "img/plancha3.png"], descripcion: "Plancha práctica para eliminar arrugas y mantener tu ropa impecable. Una ayuda esencial para el cuidado diario de tus prendas." },
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
    26: { nombre: "Procesador de alimentos eléctrico", precio: 70000, categoria: "cocina", imagenes: ["img/picatodo1.png"], descripcion: "Práctico procesador de alimentos eléctrico, ideal para facilitar diferentes tareas en la cocina. Una opción funcional para preparar y procesar alimentos de manera rápida y sencilla.", disponible: false, estado: "No disponible por ahora" },
    27: { nombre: "Lámpara de cristal redonda", precio: 110000, categoria: "decoracion", imagenes: ["img/lampara1.png"], descripcion: "Lámpara de cristal con diseño redondo, ideal para complementar la decoración del hogar." },
    28: { nombre: "Lámpara Cubo", precio: 60000, categoria: "decoracion", imagenes: ["img/lampara2.png"], descripcion: "Lámpara con diseño tipo cubo, disponible en negro y dorado." },
    29: { nombre: "Lámpara Decorativa Géminis", precio: 1200000, categoria: "decoracion", imagenes: ["img/lampara3.png"], descripcion: "Lámpara decorativa de diseño elegante, disponible en negro y blanco." },
    30: { nombre: "Lámpara colgante Vintage tipo pera", precio: 90000, categoria: "decoracion", imagenes: ["img/lampara4.png"], descripcion: "Lámpara colgante con diseño vintage tipo pera." },
    31: { nombre: "Lámpara colgante Tijuana", precio: 450000, categoria: "decoracion", imagenes: ["img/lampara5.png"], descripcion: "Lámpara colgante Tijuana para techo." },
    32: { nombre: "Lámpara de mesa de noche Cristal RGB", precio: 60000, categoria: "decoracion", imagenes: ["img/lampara6.png"], descripcion: "Lámpara decorativa de cristal con iluminación RGB multicolor, ideal para mesa de noche y ambientes decorativos." },
    33: { nombre: "Lámpara de escritorio Luna Creciente", precio: 90000, categoria: "decoracion", imagenes: ["img/lampara7.png"], descripcion: "Lámpara con diseño de luna creciente, ideal para escritorio o mesa de noche." },
    34: { nombre: "Lámpara Decorativa Centauro", precio: 850000, categoria: "decoracion", imagenes: ["img/lampara8.png"], descripcion: "Lámpara decorativa de estilo elegante y sofisticado." },
    35: { nombre: "Lámpara colgante Cubo Vintage", precio: 65000, categoria: "decoracion", imagenes: ["img/lampara9.png"], descripcion: "Lámpara colgante con diseño de cubo vintage, disponible en diferentes colores." },
    36: { nombre: "Lámpara colgante Tres Esferas", precio: 180000, categoria: "decoracion", imagenes: ["img/lampara10.png"], descripcion: "Lámpara colgante decorativa de tres esferas en tono oro rosa. No incluye bombillos." },
    37: { nombre: "Lámpara Inca Cilíndrica Dorada", precio: 92000, categoria: "decoracion", imagenes: ["img/lampara11.png"], descripcion: "Lámpara cilíndrica dorada con un socket interior." },
    38: { nombre: "Lámpara Socket Génova 10", precio: 98000, categoria: "decoracion", imagenes: ["img/lampara12.png"], descripcion: "Lámpara Socket Génova 10.", descuento: true, precioAnterior: 130000 },
    39: { nombre: "Lámpara clásica de escritorio", precio: 25000, categoria: "decoracion", imagenes: ["img/lampara13.png"], descripcion: "Lámpara clásica de escritorio disponible en diferentes colores.", descuento: true, precioAnterior: 29000 },
    40: { nombre: "Lámpara colgante Sombrero Chino", precio: 750000, categoria: "decoracion", imagenes: ["img/lampara14.png"], descripcion: "Lámpara colgante con diseño Sombrero Chino." },
    41: { nombre: "Lámpara para muro", precio: 60000, categoria: "decoracion", imagenes: ["img/lampara15.png"], descripcion: "Lámpara decorativa para muro o pared." },
    42: { nombre: "Lámpara colgante en pasta fina", precio: 65000, categoria: "decoracion", imagenes: ["img/lampara16.png"], descripcion: "Lámpara colgante fabricada en pasta fina." },
    43: { nombre: "Lámpara colgante de tres tonos de luz", precio: 130000, categoria: "decoracion", imagenes: ["img/lampara17.png"], descripcion: "Lámpara colgante con tres opciones de tono de luz: cálido, tenue y blanco." },
    44: { nombre: "Lámpara colgante de cristal", precio: 155000, categoria: "decoracion", imagenes: ["img/lampara18.png"], descripcion: "Lámpara colgante de cristal con diseño elegante." },
    45: { nombre: "Lámpara colgante circular de 3 tonos", precio: 73000, categoria: "decoracion", imagenes: ["img/lampara19.png"], descripcion: "Lámpara colgante circular con tres tonos de luz." },
    46: { nombre: "Lámpara colgante Mantarraya dorada", precio: 78000, categoria: "decoracion", imagenes: ["img/lampara20.png"], descripcion: "Lámpara colgante Mantarraya dorada, ideal para barras de cocina.", descuento: true, precioAnterior: 95000 },
    47: { nombre: "Lámpara 1 Esfera París", precio: 120000, categoria: "decoracion", imagenes: ["img/lampara21.png"], descripcion: "Lámpara decorativa de una esfera con diseño París.", descuento: true, precioAnterior: 160000 },
    48: { nombre: "Lámpara colgante Maya dorada", precio: 87000, categoria: "decoracion", imagenes: ["img/lampara22.png"], descripcion: "Lámpara colgante Maya de color dorado con un socket." },
    49: { nombre: "Lámpara tipo Diamante", precio: 95000, categoria: "decoracion", imagenes: ["img/lampara23.png"], descripcion: "Lámpara con diseño tipo diamante, disponible en dorado y negro." },
    50: { nombre: "Lámpara colgante tipo Diamantes", precio: 139000, categoria: "decoracion", imagenes: ["img/lampara24.png"], descripcion: "Lámpara colgante con diseño tipo diamantes." },
    51: { nombre: "Lámpara colgante Ari", precio: 75000, categoria: "decoracion", imagenes: ["img/lampara25.png"], descripcion: "Lámpara colgante modelo Ari." },
    52: { nombre: "Lámpara colgante Recorte Negra", precio: 90000, categoria: "decoracion", imagenes: ["img/lampara26.png"], descripcion: "Lámpara colgante de diseño Recorte en color negro." },
    53: { nombre: "Lámpara colgante Sombrero Chico Grande", precio: 105000, categoria: "decoracion", imagenes: ["img/lampara27.png"], descripcion: "Lámpara colgante con diseño Sombrero Chico Grande." },
    54: { nombre: "Lámpara colgante Andina", precio: 79000, categoria: "decoracion", imagenes: ["img/lampara28.png"], descripcion: "Lámpara colgante Andina con un socket." },
    55: { nombre: "Lámpara colgante tipo Diamante", precio: 185000, categoria: "decoracion", imagenes: ["img/lampara29.png"], descripcion: "Lámpara colgante tipo diamante con tres sockets." },
    56: { nombre: "Lámpara colgante Venus", precio: 160000, categoria: "decoracion", imagenes: ["img/lampara30.png"], descripcion: "Lámpara colgante Venus con tres sockets." },
    57: { nombre: "Cobija con Peluche", precio: 95000, categoria: "habitacion", imagenes: ["img/cobijapeluche1.png", "img/cobijapeluche2.png", "img/cobijapeluche3.png", "img/cobijapeluche4.png", "img/cobijapeluche5.png"], descripcion: "Cobija suave y acogedora que viene acompañada de un lindo peluche. Ideal para descansar, regalar o darle un toque especial a la habitación." },
    58: { nombre: "Paño de Microfibra", precio: 2500, categoria: "limpieza", imagenes: ["img/paños1.png"], descripcion: "Paño de microfibra suave y práctico, ideal para limpiar diferentes superficies del hogar. Perfecto para la cocina, muebles y limpieza diaria." },
    59: { nombre: "Set de 5 Piezas de Aceiteras y Condimenteros", precio: 30000, categoria: "cocina", imagenes: ["img/setaceitesycondimentos1.png", "img/setaceitesycondimentos2.png"], descripcion: "Set práctico de 5 piezas para organizar aceites, salsas y condimentos. Ideal para mantener la cocina ordenada y tener todo a la mano." },
    60: { nombre: "Esponja Multiuso para Cocina", precio: 7000, categoria: "limpieza", imagenes: ["img/paños1.png"], descripcion: "Esponja práctica y resistente para limpiar superficies, trastes y zonas de la cocina con facilidad. Ideal para el uso diario del hogar." }
};

async function cargarProductosDesdeSupabase() {
    const { data, error } = await supabaseClient
        .from("Productos")
        .select("*")
        .eq("activo", true)
        .order("id", { ascending: true });

    if (error) {
        console.error("Error cargando productos desde Supabase:", error);
        return false;
    }

    if (!data || !data.length) {
        console.warn("No hay productos activos en Supabase.");
        return false;
    }

    Object.keys(productos).forEach(id => {
        delete productos[id];
    });

    data.forEach(producto => {
        productos[producto.id] = {
            nombre: producto.nombre || "",
            precio: Number(
                producto.precio_oferta !== null &&
                producto.precio_oferta !== undefined
                    ? producto.precio_oferta
                    : producto.precio
            ),
            precioAnterior:
                producto.precio_oferta !== null &&
                producto.precio_oferta !== undefined
                    ? Number(producto.precio)
                    : null,
            descuento:
                producto.precio_oferta !== null &&
                producto.precio_oferta !== undefined,
            categoria: producto.categoria || "otros",
            imagenes: producto.imagen
                ? [producto.imagen]
                : ["img/imageinicio.png"],
            descripcion: producto.descripcion || "",
            disponible: Number(producto.stock || 0) > 0
        };
    });

    console.log(
        "CATÁLOGO CARGADO DESDE SUPABASE:",
        Object.keys(productos).length,
        "productos"
    );

    console.log(productos);

    return true;
}

const variantes = { "tendido-queen": [18, 19, 20, 21], "tendido-king": [22, 23] };
const varianteSeleccionada = { "tendido-queen": 18, "tendido-king": 22 };
let idsLamparas = [];
let idsOfertas = [];

function formatearPrecio(precio) { return `$${Number(precio).toLocaleString("es-CO")}`; }
function imagenPrincipal(producto) { return producto?.imagenes?.[0] || "img/imageinicio.png"; }
function obtenerVarianteActual(grupo) { return varianteSeleccionada[grupo] || variantes[grupo][0]; }

function cardProductoHtml(id) {
    const producto = productos[id];
    if (!producto) return "";
    const precioHtml = producto.descuento && producto.precioAnterior
        ? `<div class="precio-oferta-catalogo"><span class="precio-anterior">${formatearPrecio(producto.precioAnterior)}</span><span class="etiqueta-oferta">OFERTA</span></div><p class="precio precio-actual">${formatearPrecio(producto.precio)}</p>`
        : `<p class="precio">${formatearPrecio(producto.precio)}</p>`;
    const estadoHtml = producto.disponible === false
        ? '<span class="estado-no-disponible">No disponible por ahora</span>'
        : '';
    const botonHtml = producto.disponible === false
        ? '<button class="btn-agregar btn-no-disponible" type="button" disabled>No disponible</button>'
        : `<button class="btn-agregar" onclick="agregarCarrito(event, ${id})">Agregar al carrito</button>`;
    return `
        <article class="producto" data-categoria="${producto.categoria}" data-lampara="${idsLamparas.includes(id) ? "true" : "false"}" data-nombre="${producto.nombre.toLowerCase()}" data-oferta="${producto.descuento ? "true" : "false"}" onclick="abrirProducto(${id})">
            <div class="imagen-producto"><img src="${imagenPrincipal(producto)}" alt="${producto.nombre}"></div>
            <div class="informacion">
                <h3>${producto.nombre}</h3>
                <div class="estrellas">⭐⭐⭐⭐⭐</div>
                ${precioHtml}
                ${estadoHtml}
                ${botonHtml}
            </div>
        </article>
    `;
}

function renderizarProductosLamparas() {
    const contenedor = document.querySelector(".productos");
    if (!contenedor) return;
    const ids = Object.keys(productos).map(Number).sort((a, b) => a - b);
    contenedor.querySelectorAll(".producto").forEach(tarjeta => tarjeta.remove());
    contenedor.insertAdjacentHTML("beforeend", ids.map(id => cardProductoHtml(id)).join(""));
}

function actualizarGruposVariantes() {
    Object.keys(variantes).forEach(grupo => {
        const id = obtenerVarianteActual(grupo);
        const producto = productos[id];
        if (!producto) return;
        const imagen = document.getElementById(`img-grupo-${grupo}`);
        const precio = document.getElementById(`precio-grupo-${grupo}`);
        if (imagen) imagen.src = imagenPrincipal(producto);
        if (precio) precio.textContent = formatearPrecio(producto.precio);
        const contenedor = document.getElementById(`colores-grupo-${grupo}`);
        if (contenedor) {
            contenedor.innerHTML = variantes[grupo]
                .filter(variante => productos[variante])
                .map(variante => `<button type="button" class="swatch-color${variante === id ? " activo" : ""}" aria-label="${productos[variante].nombre}" style="background-image:url('${imagenPrincipal(productos[variante])}');background-size:cover" onclick="event.stopPropagation(); seleccionarVariante('${grupo}', ${variante})"></button>`)
                .join("");
        }
    });
}
function seleccionarVariante(grupo, id) { varianteSeleccionada[grupo] = id; actualizarGruposVariantes(); }

function actualizarContadorCarrito() {
    const contador = document.getElementById("carritoContador");
    const carrito = obtenerCarrito();
    if (contador) contador.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
}
function obtenerCarrito() {
    try {
        const guardado = JSON.parse(localStorage.getItem("ky-carrito") || "[]");
        if (!Array.isArray(guardado)) return [];
        const carritoValido = guardado.filter(item => productos[item?.id] && Number.isInteger(item.cantidad) && item.cantidad > 0);
        if (carritoValido.length !== guardado.length) localStorage.setItem("ky-carrito", JSON.stringify(carritoValido));
        return carritoValido;
    } catch {
        localStorage.removeItem("ky-carrito");
        return [];
    }
}

function agregarCarrito(evento, id) {
    evento?.stopPropagation();
    const producto = productos[id];
    if (!producto || producto.disponible === false) return;
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
    try {
        const guardado = JSON.parse(localStorage.getItem(`ky-resenas-${id}`) || "[]");
        return Array.isArray(guardado) ? guardado : [];
    } catch {
        localStorage.removeItem(`ky-resenas-${id}`);
        return [];
    }
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
    const precioHtml = producto.descuento && producto.precioAnterior
        ? `<div class="precio-oferta-catalogo"><span class="precio-anterior">${formatearPrecio(producto.precioAnterior)}</span><span class="etiqueta-oferta">OFERTA</span></div><p class="precio precio-actual">${formatearPrecio(producto.precio)}</p>`
        : `<p class="precio">${formatearPrecio(producto.precio)}</p>`;
    contenido.innerHTML = `<div class="modal-galeria"><img id="modalImagenPrincipal" class="modal-imagen-principal" src="${imagenPrincipal(producto)}" alt="${producto.nombre}"><div class="modal-miniaturas">${producto.imagenes.map((imagen, indice) => `<img class="modal-miniatura${indice === 0 ? " activa" : ""}" src="${imagen}" alt="${producto.nombre} ${indice + 1}" onclick="cambiarImagenModal('${imagen}', this)">`).join("")}</div></div><div class="modal-detalles"><h2>${producto.nombre}</h2><div class="resumen-calificacion" aria-live="polite">${resumenCalificacion(id)}</div><p class="descripcion">${producto.descripcion}</p>${precioHtml}<div class="modal-acciones"><button type="button" class="btn-agregar" onclick="agregarCarrito(event, ${id})">Agregar al carrito</button><button type="button" class="boton" onclick="comprarYa(${id})">Comprar ya</button></div></div><section class="resenas-seccion"><h3>¿Ya compraste este producto?</h3><p>Escribe tu opinión</p><form class="formulario-resena" id="formularioResena"><label>Tu nombre<input name="nombre" type="text" maxlength="60" required></label><fieldset><legend>Calificación</legend><div class="selector-estrellas">${[1, 2, 3, 4, 5].map(valor => `<label><input type="radio" name="calificacion" value="${valor}"${valor === 5 ? " checked" : ""}><span>${valor}</span></label>`).join("")}</div></fieldset><label>Tu comentario<textarea name="comentario" rows="4" maxlength="500" required></textarea></label><button type="submit" class="boton">Publicar opinión</button></form><div class="lista-resenas" id="listaResenas"></div></section>`;
    const formulario = document.getElementById("formularioResena");
    formulario.addEventListener("submit", evento => { evento.preventDefault(); guardarResena(id, formulario.dataset.editando || null); });
    renderizarResenas(id);
    modal.classList.add("visible"); document.body.classList.add("modal-abierto");
}
function cambiarImagenModal(src, miniatura) { const imagen = document.getElementById("modalImagenPrincipal"); if (imagen) imagen.src = src; document.querySelectorAll(".modal-miniatura").forEach(elemento => elemento.classList.remove("activa")); miniatura.classList.add("activa"); }
function comprarYa(id) {
    const producto = productos[id];
    if (!producto || producto.disponible === false) return;
    agregarCarrito(null, id);
    cerrarProducto();
    abrirCarrito();
}

function normalizarTexto(texto) { return String(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(); }
function buscarProductos(texto) {
    const consulta = normalizarTexto(texto);
    const palabras = consulta.split(" ").filter(palabra => palabra.length > 2);
    if (!consulta) return Object.keys(productos).map(Number);
    if (consulta.includes("oferta") || consulta.includes("descuento")) {
        return idsOfertas;
    }
    return Object.keys(productos).map(Number).filter(id => {
        const nombre = normalizarTexto(productos[id].nombre);
        return nombre.includes(consulta) || palabras.every(palabra => nombre.includes(palabra));
    });
}

let categoriaSeleccionada = "";

function ejecutarBusqueda() {
    const entrada = document.getElementById("inputBuscar");
    if (!entrada) return;
    const consulta = normalizarTexto(entrada.value);
    const tarjetas = [...document.querySelectorAll(".producto")];
    tarjetas.forEach(tarjeta => {
        const nombre = normalizarTexto(tarjeta.dataset.nombre || tarjeta.querySelector("h3")?.textContent || "");
        const categoria = tarjeta.dataset.categoria || "";
        const esOferta = tarjeta.dataset.oferta === "true";
        const consultaOferta = consulta.includes("oferta") || consulta.includes("descuento");
        let coincideTexto = !consulta || nombre.includes(consulta) || consulta.split(" ").filter(Boolean).every(palabra => nombre.includes(palabra));
        if (consultaOferta) {
            coincideTexto = esOferta;
        }
        const coincideCategoria = !categoriaSeleccionada
            || (categoriaSeleccionada === "lamparas" && tarjeta.dataset.lampara === "true")
            || (categoriaSeleccionada === "ofertas" && esOferta)
            || categoria === categoriaSeleccionada;
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

function habilitarAccesoTecladoTarjetas() {
    document.querySelectorAll(".producto").forEach(tarjeta => {
        if (tarjeta.hasAttribute("tabindex")) return;
        tarjeta.setAttribute("tabindex", "0");
        tarjeta.setAttribute("role", "button");
        const nombre = tarjeta.querySelector("h3")?.textContent?.trim();
        if (nombre) tarjeta.setAttribute("aria-label", `Ver detalles de ${nombre}`);
        tarjeta.addEventListener("keydown", evento => {
            if (evento.key !== "Enter" && evento.key !== " ") return;
            if (evento.target !== tarjeta) return;
            evento.preventDefault();
            tarjeta.click();
        });
    });
}

async function iniciarTienda() {
    await cargarProductosDesdeSupabase();
    idsLamparas = Object.keys(productos)
        .map(Number)
        .filter(id => id >= 27 && id <= 56);
    idsOfertas = Object.keys(productos)
        .map(Number)
        .filter(id => productos[id].descuento);
    renderizarProductosLamparas();
    habilitarAccesoTecladoTarjetas();
    actualizarContadorCarrito();
    actualizarGruposVariantes();
    renderizarCarrito();
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
    const menu = document.querySelector(".header-menu");
    const menuToggle = document.getElementById("menuToggle");
    const menuLinks = document.querySelectorAll(".menu-izquierda a");
    menuToggle?.addEventListener("click", () => {
        const abierto = menu?.classList.toggle("menu-abierto") || false;
        menuToggle.setAttribute("aria-expanded", String(abierto));
        menuToggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });
    menuLinks.forEach(enlace => enlace.addEventListener("click", () => {
        menu?.classList.remove("menu-abierto");
        menuToggle?.setAttribute("aria-expanded", "false");
        menuToggle?.setAttribute("aria-label", "Abrir menú");
    }));
    document.getElementById("cerrarCarrito")?.addEventListener("click", cerrarCarrito);
    document.getElementById("overlay")?.addEventListener("click", cerrarCarrito);
    document.getElementById("cerrarModal")?.addEventListener("click", cerrarProducto);
    document.getElementById("modalOverlay")?.addEventListener("click", evento => { if (evento.target.id === "modalOverlay") cerrarProducto(); });
    document.addEventListener("keydown", evento => {
        if (evento.key === "Escape") {
            cerrarProducto();
            cerrarCarrito();
            menu?.classList.remove("menu-abierto");
            menuToggle?.setAttribute("aria-expanded", "false");
            menuToggle?.setAttribute("aria-label", "Abrir menú");
        }
    });
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
