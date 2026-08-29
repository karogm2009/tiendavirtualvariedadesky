/* ================================
   DATOS DE PRODUCTOS
================================ */

const productos = {

    1: {
        nombre: "Cafetera italiana",
        precio: 20000,
        imagen: "img/cafeteraitaliana1.png",
        descripcion: "Cafetera italiana práctica y elegante, ideal para preparar un delicioso café en casa."
    },

    2: {
        nombre: "Juego de cuchillos Cutlery",
        precio: 89000,
        imagen: "img/cuchilloscutlery1.png",
        descripcion: "Juego de cuchillos Cutlery para facilitar la preparación de tus alimentos."
    },

    3: {
        nombre: "Exprimidor de cítricos",
        precio: 120000,
        imagen: "img/exprimidor1.png",
        descripcion: "Exprimidor de cítricos práctico para preparar jugos frescos de manera sencilla."
    },

    4: {
        nombre: "Ollas de acero inoxidable",
        precio: 580000,
        imagen: "img/ollasdeacero1.png",
        descripcion: "Juego de ollas de acero inoxidable, resistentes y prácticas para preparar tus comidas."
    },

    5: {
        nombre: "Plancha para ropa",
        precio: 40000,
        precioAnterior: 58000,
        descuento: true,
        imagen: "img/plancha1.png",
        descripcion: "Plancha para ropa práctica y funcional. Aprovecha nuestra oferta especial por tiempo limitado."
    },

    6: {
        nombre: "Set de tablas de picar",
        precio: 30000,
        precioAnterior: 40000,
        descuento: true,
        imagenes: [
            "img/tablasdepicar1.png",
            "img/tablasdepicar2.png",
            "img/tablasdepicar3.png"
        ],
        descripcion: "Set de tablas de picar, ideal para organizar la preparación de tus alimentos por tipo de ingrediente. Aprovecha nuestra oferta especial."
    },

    7: {
        nombre: "Cortinas",
        precio: 55000,
        imagenes: [
            "img/cortinas1.png",
            "img/cortinas2.png",
            "img/cortinas3.png"
        ],
        descripcion: "Cortinas prácticas y elegantes que le dan un toque especial a cualquier espacio de tu hogar."
    },

    8: {
        nombre: "Sábanas de bambú lisas (1.40 m, Doble)",
        precio: 75000,
        imagenes: [
            "img/sabanabambu1.401.png",
            "img/sabanabambu1.402.png",
            "img/sabanabambu1.403.png",
            "img/sabanabambu1.404.png",
            "img/sabanabambu1.405.png"
        ],
        descripcion: "Sábanas de bambú lisas, suaves y frescas, tamaño Doble (1.40 m). Ideales para un descanso más cómodo."
    },

    10: {
        nombre: "Sábanas de bambú lisas (2 x 2 m, King)",
        precio: 85000,
        imagenes: [
            "img/sabanabambu2x2.png",
            "img/sabanabambu2x25.png"
        ],
        descripcion: "Sábanas de bambú lisas, suaves y frescas, tamaño King (2 x 2 m). Ideales para un descanso más cómodo."
    },

    11: {
        nombre: "Sábanas de bambú estampadas (1.60 m, Queen)",
        precio: 85000,
        imagenes: [
            "img/sabanabambu1.601.png",
            "img/sabanabambu1.602.png"
        ],
        descripcion: "Sábanas de bambú estampadas, suaves y frescas, tamaño Queen (1.60 m). Ideales para un descanso más cómodo con un toque de diseño."
    },

    12: {
        nombre: "Sábanas de bambú estampadas (1.40 m, Doble)",
        precio: 85000,
        imagenes: [
            "img/sabanabambuestampada1.401.png",
            "img/sabanabambuestampada1.402.png",
            "img/sabanabambuestampada1.403.png",
            "img/sabanabambuestampada1.404.png",
            "img/sabanabambuestampada1.405.png",
            "img/sabanabambuestampada1.406.png",
            "img/sabanabambuestampada1.407.png",
            "img/sabanabambuestampada1.408.png"
        ],
        descripcion: "Sábanas de bambú estampadas, suaves y frescas, tamaño Doble (1.40 m). Ideales para un descanso más cómodo con un toque de diseño."
    },

    13: {
        nombre: "Llave para jabón",
        precio: 20000,
        imagenes: [
            "img/llavejabon1.png",
            "img/llavejabon2.png",
            "img/llavejabon3.png"
        ],
        descripcion: "Llave para jabón de altura ajustable, fabricada en plástico libre de ftalatos, con palanca de un toque para un uso práctico y sencillo."
    },

    14: {
        nombre: "Toalla (Beige crema)",
        precio: 48000,
        imagen: "img/toalla2.png",
        descripcion: "Toalla color beige crema, suave y absorbente, ideal para el día a día."
    },

    15: {
        nombre: "Toalla (Gris con dorado)",
        precio: 55000,
        imagen: "img/toalla1.png",
        descripcion: "Toalla gris con detalles dorados, suave y absorbente, con un acabado elegante."
    },

    16: {
        nombre: "Toalla de playa",
        precio: 57000,
        imagen: "img/toalla3.png",
        descripcion: "Toalla de playa amplia y resistente, perfecta para tus salidas a la piscina o la playa."
    },

    17: {
        nombre: "Cobija térmica",
        precio: 85000,
        imagen: "img/cobijatermica1.png",
        descripcion: "Cobija térmica suave y abrigadora, ideal para mantener el calor en las noches más frías."
    },

    18: {
        nombre: "Tendido Queen (Rosado)",
        precio: 160000,
        imagen: "img/tendidoqueen1.png",
        descripcion: "Tendido tamaño Queen color rosado, elegante y cómodo para tu habitación."
    },

    19: {
        nombre: "Tendido Queen (Beige)",
        precio: 120000,
        imagen: "img/tendidoqueen1.png",
        descripcion: "Tendido tamaño Queen color beige, elegante y cómodo para tu habitación."
    },

    20: {
        nombre: "Tendido Queen (Gris oscuro con blanco)",
        precio: 120000,
        imagen: "img/tendidoqueen1.png",
        descripcion: "Tendido tamaño Queen en gris oscuro combinado con blanco, elegante y cómodo para tu habitación."
    },

    21: {
        nombre: "Tendido Queen (Gris claro con negro)",
        precio: 120000,
        imagen: "img/tendidoqueen1.png",
        descripcion: "Tendido tamaño Queen en gris claro combinado con negro, elegante y cómodo para tu habitación."
    },

    22: {
        nombre: "Tendido King (Blanco con azul)",
        precio: 150000,
        imagenes: [
            "img/tendidoking1.png",
            "img/tendidoking2.png"
        ],
        descripcion: "Tendido tamaño King en blanco combinado con azul, elegante y cómodo para tu habitación."
    },

    23: {
        nombre: "Tendido King (Blanco + beige crema)",
        precio: 140000,
        imagenes: [
            "img/tendidoking1.png",
            "img/tendidoking2.png"
        ],
        descripcion: "Tendido tamaño King en blanco combinado con beige crema, elegante y cómodo para tu habitación."
    },

    24: {
        nombre: "Tendido Doble (Blanco)",
        precio: 170000,
        imagen: "img/tendidoble1.png",
        descripcion: "Tendido tamaño Doble color blanco, elegante y cómodo para tu habitación."
    },

    25: {
        nombre: "Tendido Doble estampado",
        precio: 100000,
        imagenes: [
            "img/tendido1.401.png",
            "img/tendido1.402.png"
        ],
        descripcion: "Tendido tamaño Doble con diseño estampado, un toque de estilo diferente para tu habitación."
    }

};

const numeroWhatsapp = "573113100317";


/* ================================
   FORMATO DE PRECIO
================================ */

function formatearPrecio(valor) {
    return "$" + valor.toLocaleString("es-CO");
}


/* ================================
   CARRITO
================================ */

let carrito = cargarCarrito();

function cargarCarrito() {
    try {
        const datos = localStorage.getItem("carritoKY");
        return datos ? JSON.parse(datos) : [];
    } catch (error) {
        return [];
    }
}

function guardarCarrito() {
    localStorage.setItem("carritoKY", JSON.stringify(carrito));
}

function agregarCarrito(event, id) {
    if (event) event.stopPropagation();

    const item = carrito.find(p => p.id === id);

    if (item) {
        item.cantidad += 1;
    } else {
        carrito.push({ id: id, cantidad: 1 });
    }

    guardarCarrito();
    renderCarrito();
    abrirCarrito();
}

function cambiarCantidad(id, delta) {
    const item = carrito.find(p => p.id === id);
    if (!item) return;

    item.cantidad += delta;

    if (item.cantidad <= 0) {
        carrito = carrito.filter(p => p.id !== id);
    }

    guardarCarrito();
    renderCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(p => p.id !== id);
    guardarCarrito();
    renderCarrito();
}

function renderCarrito() {
    const contenedor = document.getElementById("carritoItems");
    const contador = document.getElementById("carritoContador");
    const totalEl = document.getElementById("carritoTotal");

    const totalItems = carrito.reduce((acc, p) => acc + p.cantidad, 0);
    contador.textContent = totalItems;

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
        totalEl.textContent = formatearPrecio(0);
        return;
    }

    let total = 0;
    let html = "";

    carrito.forEach(item => {
        const producto = productos[item.id];
        if (!producto) return;

        const subtotal = producto.precio * item.cantidad;
        total += subtotal;

        html += `
            <div class="carrito-item">
                <div class="carrito-item-info">
                    <h4>${producto.nombre}</h4>
                    <span>${formatearPrecio(producto.precio)} x ${item.cantidad}</span>
                </div>
                <div class="carrito-item-acciones">
                    <button onclick="cambiarCantidad(${item.id}, -1)" aria-label="Restar">-</button>
                    <button onclick="cambiarCantidad(${item.id}, 1)" aria-label="Sumar">+</button>
                    <button class="carrito-item-eliminar" onclick="eliminarDelCarrito(${item.id})" aria-label="Eliminar">&times;</button>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = html;
    totalEl.textContent = formatearPrecio(total);
}

function abrirCarrito() {
    document.getElementById("carritoPanel").classList.add("abierto");
    document.getElementById("overlay").classList.add("visible");
}

function cerrarCarrito() {
    document.getElementById("carritoPanel").classList.remove("abierto");
    document.getElementById("overlay").classList.remove("visible");
}

function finalizarCompraWhatsapp() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "Hola, quiero hacer este pedido:%0A%0A";
    let total = 0;

    carrito.forEach(item => {
        const producto = productos[item.id];
        if (!producto) return;

        const subtotal = producto.precio * item.cantidad;
        total += subtotal;

        mensaje += `- ${producto.nombre} x${item.cantidad} (${formatearPrecio(subtotal)})%0A`;
    });

    mensaje += `%0ATotal: ${formatearPrecio(total)}`;

    window.open(`https://wa.me/${numeroWhatsapp}?text=${mensaje}`, "_blank");
}


/* ================================
   MODAL DE PRODUCTO
================================ */

function imagenPrincipal(producto) {
    if (producto.imagenes && producto.imagenes.length > 0) {
        return producto.imagenes[0];
    }
    return producto.imagen || "";
}

function cambiarImagenModal(src) {
    const imgPrincipal = document.getElementById("modalImagenPrincipal");
    if (imgPrincipal) imgPrincipal.src = src;
}

function abrirProducto(id) {
    const producto = productos[id];
    if (!producto) return;

    const contenido = document.getElementById("modalContenido");

    const precioHtml = producto.descuento && producto.precioAnterior
        ? `<p class="precio">
               ${formatearPrecio(producto.precio)}
               <span class="precio-anterior">${formatearPrecio(producto.precioAnterior)}</span>
           </p>`
        : `<p class="precio">${formatearPrecio(producto.precio)}</p>`;

    let galeriaHtml = "";

    if (producto.imagenes && producto.imagenes.length > 1) {
        const miniaturas = producto.imagenes.map(src => `
            <img src="${src}" alt="${producto.nombre}" class="modal-miniatura" onclick="cambiarImagenModal('${src}')">
        `).join("");

        galeriaHtml = `
            <img id="modalImagenPrincipal" src="${producto.imagenes[0]}" alt="${producto.nombre}">
            <div class="modal-miniaturas">${miniaturas}</div>
        `;
    } else {
        galeriaHtml = `<img id="modalImagenPrincipal" src="${imagenPrincipal(producto)}" alt="${producto.nombre}">`;
    }

    contenido.innerHTML = `
        ${galeriaHtml}
        <h2>${producto.nombre}</h2>
        ${precioHtml}
        <p class="descripcion">${producto.descripcion}</p>
        <button class="boton btn-agregar" style="width:100%" onclick="agregarCarrito(event, ${id}); cerrarModal();">
            Agregar al carrito
        </button>
    `;

    document.getElementById("modalOverlay").classList.add("visible");
}

function cerrarModal() {
    document.getElementById("modalOverlay").classList.remove("visible");
}


/* ================================
   BUSCADOR Y FILTRO POR CATEGORÍA
================================ */

function filtrarProductos(texto, categoria) {
    const tarjetas = document.querySelectorAll(".producto");
    let visibles = 0;

    tarjetas.forEach(tarjeta => {
        const nombre = tarjeta.dataset.nombre || "";
        const cat = tarjeta.dataset.categoria || "";

        const coincideTexto = !texto || nombre.includes(texto);
        const coincideCategoria = !categoria || cat === categoria;

        if (coincideTexto && coincideCategoria) {
            tarjeta.style.display = "";
            visibles++;
        } else {
            tarjeta.style.display = "none";
        }
    });

    const sinResultados = document.getElementById("sinResultados");
    if (sinResultados) {
        sinResultados.style.display = visibles === 0 ? "block" : "none";
    }
}


/* ================================
   MENÚ MÓVIL
================================ */

function toggleMenuMovil() {
    document.getElementById("menuDerecha").classList.toggle("abierto");
}


/* ================================
   INICIALIZACIÓN
================================ */

document.addEventListener("DOMContentLoaded", () => {

    renderCarrito();

    // Carrito: abrir / cerrar
    document.getElementById("btnCarrito").addEventListener("click", (e) => {
        e.preventDefault();
        abrirCarrito();
    });

    document.getElementById("cerrarCarrito").addEventListener("click", cerrarCarrito);
    document.getElementById("overlay").addEventListener("click", cerrarCarrito);
    document.getElementById("finalizarCompra").addEventListener("click", (e) => {
        e.preventDefault();
        finalizarCompraWhatsapp();
    });

    // Modal de producto
    document.getElementById("cerrarModal").addEventListener("click", cerrarModal);
    document.getElementById("modalOverlay").addEventListener("click", (e) => {
        if (e.target.id === "modalOverlay") cerrarModal();
    });

    // Menú móvil
    document.getElementById("menuToggle").addEventListener("click", toggleMenuMovil);

    // Buscador
    let categoriaActiva = "";

    document.getElementById("inputBuscar").addEventListener("input", (e) => {
        filtrarProductos(e.target.value.trim().toLowerCase(), categoriaActiva);
    });

    // Filtro por categoría (al hacer clic en una tarjeta de categoría)
    document.querySelectorAll(".categoria").forEach(cat => {
        cat.addEventListener("click", () => {
            categoriaActiva = cat.dataset.categoria;
            document.getElementById("inputBuscar").value = "";
            filtrarProductos("", categoriaActiva);
            const seccionProductos = document.getElementById("productos");
            if (seccionProductos) seccionProductos.scrollIntoView({ behavior: "smooth" });
        });
    });

    // "Ver todos" resetea los filtros
    const btnVerTodos = document.getElementById("verTodos");
    if (btnVerTodos) {
        btnVerTodos.addEventListener("click", (e) => {
            e.preventDefault();
            categoriaActiva = "";
            document.getElementById("inputBuscar").value = "";
            filtrarProductos("", "");
        });
    }

    // Scroll spy: resalta el link activo del menú
    const secciones = document.querySelectorAll("section[id]");
    const enlaces = document.querySelectorAll(".menu-izquierda a");

    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                enlaces.forEach(a => a.classList.remove("activo"));
                const activo = document.querySelector(`.menu-izquierda a[data-nav="${entry.target.id}"]`);
                if (activo) activo.classList.add("activo");
            }
        });
    }, { rootMargin: "-40% 0px -50% 0px" });

    secciones.forEach(sec => observador.observe(sec));

    // Animación al hacer scroll (reveal)
    const elementosReveal = document.querySelectorAll(".reveal");

    const observadorReveal = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observadorReveal.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elementosReveal.forEach(el => observadorReveal.observe(el));

});