/* NOTA: antes existía aquí un mapa "ASISTENTE_CATEGORIA" que repetía a mano
   la categoría de cada producto. Era una segunda fuente de datos que había
   que recordar actualizar cada vez que se agregaba un producto nuevo en
   script.js, y era fácil que quedara desincronizada. Ahora la categoría se
   lee siempre directamente de "productos[id].categoria" (ver
   asistenteIdsPorCategoria más abajo), así que solo existe una fuente de
   datos: el objeto "productos" de script.js. */

const ASISTENTE_ETIQUETAS = {
    1: ["cafetera", "café", "cafe"],
    2: ["cuchillo", "cuchillos", "cutlery"],
    3: ["exprimidor", "jugo", "citricos", "naranja"],
    4: ["olla", "ollas", "acero"],
    5: ["plancha", "ropa"],
    6: ["tabla", "tablas", "picar"],
    7: ["cortina", "cortinas"],
    8: ["sabana", "sábana", "sabanas", "doble", "1.40"],
    10: ["sabana", "sábana", "sabanas", "king", "2x2", "2 x 2"],
    11: ["sabana", "sábana", "sabanas", "queen", "1.60", "estampada"],
    12: ["sabana", "sábana", "sabanas", "doble", "estampada", "1.40"],
    13: ["jabon", "jabón", "llave"],
    14: ["toalla", "beige"],
    15: ["toalla", "gris", "dorado"],
    16: ["toalla", "playa"],
    17: ["cobija", "termica", "térmica", "frio", "frío", "abrigo"],
    18: ["tendido", "queen", "rosado"],
    19: ["tendido", "queen", "beige"],
    20: ["tendido", "queen", "gris oscuro"],
    21: ["tendido", "queen", "gris claro", "negro"],
    22: ["tendido", "king", "azul"],
    23: ["tendido", "king", "beige"],
    24: ["tendido", "doble", "blanco"],
    25: ["tendido", "doble", "estampado"],
    26: ["procesador", "alimentos", "electrico", "electrica", "cocina"]
};

const ASISTENTE_SUBCATEGORIAS = {
    cocina: [
        { texto: "🥘 Ollas y sartenes", palabra: "olla" },
        { texto: "🔪 Cuchillos", palabra: "cuchillo" },
        { texto: "☕ Cafeteras", palabra: "cafetera" },
        { texto: "🍊 Exprimidores", palabra: "exprimidor" },
        { texto: "🧅 Molinos y picadores", palabra: "molino" },
        { texto: "🍳 Otros utensilios", palabra: "" }
    ],
    habitacion: [
        { texto: "🛏️ Sábanas", palabra: "sabana" },
        { texto: "🛌 Tendidos", palabra: "tendido" },
        { texto: "🧺 Otros productos", palabra: "" }
    ]
};

const estadoAsistente = {
    flujo: null,
    categoria: null,
    subcategoria: null
};

const elMensajes = document.getElementById("asistenteMensajes");
const elOpciones = document.getElementById("asistenteOpciones");
const elVentana = document.getElementById("asistenteVentana");
const elBoton = document.getElementById("asistenteBoton");

function asistenteScrollAbajo() {
    elMensajes.scrollTop = elMensajes.scrollHeight;
}

function asistenteMensajeBot(html) {
    const div = document.createElement("div");
    div.className = "asistente-msg asistente-msg-bot";
    div.innerHTML = html;
    elMensajes.appendChild(div);
    asistenteScrollAbajo();
}

function asistenteMensajeUsuario(texto) {
    const div = document.createElement("div");
    div.className = "asistente-msg asistente-msg-user";
    div.textContent = texto;
    elMensajes.appendChild(div);
    asistenteScrollAbajo();
}

function asistenteMostrarOpciones(botones) {
    elOpciones.innerHTML = "";
    botones.forEach(b => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "asistente-opcion";
        btn.textContent = b.texto;
        btn.addEventListener("click", () => {
            asistenteMensajeUsuario(b.texto);
            elOpciones.innerHTML = "";
            b.accion();
        });
        elOpciones.appendChild(btn);
    });
}

function asistenteLimpiarOpciones() {
    elOpciones.innerHTML = "";
}

function asistenteTarjetasProductos(ids) {
    const lista = ids.slice(0, 3);

    const tarjetasHtml = lista.map(id => {
        const p = productos[id];
        if (!p) return "";

        const img = imagenPrincipal(p);

        const precioHtml = p.descuento && p.precioAnterior
            ? `${formatearPrecio(p.precio)}
               <span class="asistente-tarjeta-precio-anterior">${formatearPrecio(p.precioAnterior)}</span>
               <span class="asistente-tarjeta-descuento">OFERTA</span>`
            : formatearPrecio(p.precio);

        return `
            <div class="asistente-tarjeta">
                <img src="${img}" alt="${p.nombre}">
                <div class="asistente-tarjeta-info">
                    <h4>${p.nombre}</h4>
                    <div class="asistente-tarjeta-precio">${precioHtml}</div>
                    <div class="asistente-tarjeta-acciones">
                        <button class="asistente-btn-ver" onclick="abrirProducto(${id})">Ver detalles</button>
                        <button class="asistente-btn-agregar" onclick="asistenteAgregarCarrito(${id})">🛒 Agregar</button>
                        <button class="asistente-btn-whatsapp" onclick="asistenteConsultarWhatsapp(${id})">💬 WhatsApp</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    asistenteMensajeBot(`<div class="asistente-tarjetas">${tarjetasHtml}</div>`);
}

function asistenteAgregarCarrito(id) {
    agregarCarrito(null, id);
    asistenteMensajeBot("✓ Producto agregado al carrito");
    asistenteMostrarOpciones([
        { texto: "Ver carrito", accion: () => { cerrarAsistente(); abrirCarrito(); } },
        { texto: "Seguir buscando", accion: asistenteMenuPrincipal }
    ]);
}

function asistenteConsultarWhatsapp(id) {
    const p = productos[id];
    if (!p) return;
    const mensaje = encodeURIComponent(`Hola, estoy interesado/a en ${p.nombre}. ¿Me pueden brindar más información?`);
    window.open(`https://wa.me/${numeroWhatsapp}?text=${mensaje}`, "_blank");
}

function asistenteMenuPrincipal() {
    estadoAsistente.flujo = null;
    estadoAsistente.categoria = null;
    estadoAsistente.subcategoria = null;

    asistenteMensajeBot("¿En qué te puedo ayudar hoy?");
    asistenteMostrarOpciones([
        { texto: "🍳 Cocina", accion: () => asistenteMostrarCategoria("cocina") },
        { texto: "🛏️ Dormitorio", accion: () => asistenteMostrarCategoria("habitacion") },
        { texto: "🏠 Hogar", accion: () => asistenteMostrarCategoria("hogar") },
        { texto: "🎁 Busco un regalo", accion: asistenteIniciarRegalo },
        { texto: "🔥 Quiero ver ofertas", accion: asistenteMostrarOfertas },
        { texto: "❓ No sé qué necesito", accion: asistenteIniciarAyudame },
        { texto: "✨ Ayúdame a elegir", accion: asistenteIniciarAyudame }
    ]);
}

// Lee la categoría directamente del objeto "productos" (fuente única de datos).
function asistenteIdsPorCategoria(categoria) {
    return Object.keys(productos)
        .map(Number)
        .filter(id => productos[id].categoria === categoria);
}

function asistenteMostrarCategoria(categoria) {
    const ids = asistenteIdsPorCategoria(categoria);
    if (ids.length === 0) {
        asistenteMensajeBot("No encontré productos en esa categoría todavía.");
        asistenteMostrarOpciones([{ texto: "⬅ Volver al menú", accion: asistenteMenuPrincipal }]);
        return;
    }
    asistenteMensajeBot("Estas son algunas opciones que tenemos:");
    asistenteTarjetasProductos(ids);
    asistenteMostrarOpciones([{ texto: "⬅ Volver al menú", accion: asistenteMenuPrincipal }]);
}

function asistenteIniciarAyudame() {
    estadoAsistente.flujo = "ayudame";
    asistenteMensajeBot("¿Qué estás buscando?");
    asistenteMostrarOpciones([
        { texto: "🍳 Cocina", accion: () => asistentePreguntaSubcategoria("cocina") },
        { texto: "🛏️ Dormitorio", accion: () => asistentePreguntaSubcategoria("habitacion") },
        { texto: "🏠 Hogar", accion: () => asistentePreguntaPresupuesto("hogar", "") },
        { texto: "🎁 Regalo", accion: asistenteIniciarRegalo },
        { texto: "🤷 No estoy seguro", accion: asistenteMenuPrincipal }
    ]);
}

function asistentePreguntaSubcategoria(categoria) {
    estadoAsistente.categoria = categoria;
    const opciones = ASISTENTE_SUBCATEGORIAS[categoria] || [];

    asistenteMensajeBot("¿Qué necesitas?");
    asistenteMostrarOpciones(
        opciones.map(o => ({
            texto: o.texto,
            accion: () => {
                if (o.palabra === "sabana") {
                    asistentePreguntaTamano(categoria);
                } else {
                    asistentePreguntaPresupuesto(categoria, o.palabra);
                }
            }
        }))
    );
}

function asistentePreguntaTamano(categoria) {
    asistenteMensajeBot("¿Qué tamaño necesitas?");
    asistenteMostrarOpciones([
        { texto: "1.40 m – Doble", accion: () => asistenteMostrarResultado([8]) },
        { texto: "1.60 m – Queen", accion: () => asistenteMostrarResultado([11]) },
        { texto: "2 x 2 m – King", accion: () => asistenteMostrarResultado([10]) },
        { texto: "No estoy seguro", accion: () => asistentePreguntaPresupuesto(categoria, "sabana") }
    ]);
}

function asistentePreguntaPresupuesto(categoria, palabra) {
    estadoAsistente.subcategoria = palabra;

    asistenteMensajeBot("¿Cuál es tu presupuesto aproximado?");
    asistenteMostrarOpciones([
        { texto: "💰 Menos de $50.000", accion: () => asistenteFiltrarYMostrar(categoria, palabra, 0, 50000) },
        { texto: "💵 $50.000 – $100.000", accion: () => asistenteFiltrarYMostrar(categoria, palabra, 50000, 100000) },
        { texto: "💎 Más de $100.000", accion: () => asistenteFiltrarYMostrar(categoria, palabra, 100000, Infinity) },
        { texto: "🤷 No tengo presupuesto definido", accion: () => asistenteFiltrarYMostrar(categoria, palabra, 0, Infinity) }
    ]);
}

function asistenteFiltrarYMostrar(categoria, palabra, min, max) {
    let ids = asistenteIdsPorCategoria(categoria).filter(id => {
        const p = productos[id];
        return p && p.precio >= min && p.precio <= max;
    });

    if (palabra) {
        ids = ids.filter(id => (ASISTENTE_ETIQUETAS[id] || []).includes(palabra));
    }

    asistenteMostrarResultado(ids, categoria, min, max);
}

function asistenteMostrarResultado(ids, categoriaFallback, min, max) {
    if (ids.length === 0) {
        asistenteMensajeBot("No encontré exactamente eso, pero estas opciones podrían servirte:");
        const alternativas = categoriaFallback ? asistenteIdsPorCategoria(categoriaFallback) : Object.keys(productos).map(Number);
        asistenteTarjetasProductos(alternativas);
    } else {
        asistenteMensajeBot("⭐ Te recomiendo:");
        asistenteTarjetasProductos(ids);
    }
    asistenteMostrarOpciones([{ texto: "⬅ Volver al menú", accion: asistenteMenuPrincipal }]);
}

function asistenteIniciarRegalo() {
    estadoAsistente.flujo = "regalo";
    asistenteMensajeBot("🎁 ¿Para quién es el regalo?");
    asistenteMostrarOpciones([
        { texto: "🏠 Alguien que ama su hogar", accion: () => asistenteRegaloPresupuesto("habitacion") },
        { texto: "👩‍🍳 Alguien que disfruta cocinar", accion: () => asistenteRegaloPresupuesto("cocina") },
        { texto: "🛏️ Alguien que disfruta decorar", accion: () => asistenteRegaloPresupuesto("decoracion") },
        { texto: "🎁 No estoy seguro", accion: () => asistenteRegaloPresupuesto("") }
    ]);
}

function asistenteRegaloPresupuesto(categoria) {
    estadoAsistente.categoria = categoria;
    asistenteMensajeBot("¿Cuánto quieres gastar?");
    asistenteMostrarOpciones([
        { texto: "💰 Menos de $50.000", accion: () => asistenteMostrarRegalo(categoria, 0, 50000) },
        { texto: "💵 $50.000 – $100.000", accion: () => asistenteMostrarRegalo(categoria, 50000, 100000) },
        { texto: "💎 Más de $100.000", accion: () => asistenteMostrarRegalo(categoria, 100000, Infinity) }
    ]);
}

function asistenteMostrarRegalo(categoria, min, max) {
    const base = categoria ? asistenteIdsPorCategoria(categoria) : Object.keys(productos).map(Number);
    const ids = base.filter(id => productos[id] && productos[id].precio >= min && productos[id].precio <= max);
    asistenteMostrarResultado(ids, categoria, min, max);
}

function asistenteMostrarOfertas() {
    const ids = Object.keys(productos).map(Number).filter(id => productos[id].descuento);

    if (ids.length === 0) {
        asistenteMensajeBot("En este momento no tenemos ofertas activas, ¡pero vuelve pronto! 🔥");
    } else {
        asistenteMensajeBot("🔥 Estas son nuestras ofertas activas:");
        asistenteTarjetasProductos(ids);
    }
    asistenteMostrarOpciones([{ texto: "⬅ Volver al menú", accion: asistenteMenuPrincipal }]);
}

function asistenteParsearPresupuesto(texto) {
    const numeros = (texto.match(/[\d.]{4,}/g) || []).map(n => Number(n.replace(/\./g, "")));
    if (numeros.length === 0) return null;

    if (/menos de|máximo|maximo|hasta/.test(texto)) {
        return { min: 0, max: numeros[0] };
    }
    if (/más de|mas de|desde/.test(texto)) {
        return { min: numeros[0], max: Infinity };
    }
    return { min: 0, max: numeros[0] };
}

function asistenteBuscarLibre(textoOriginal) {
    const texto = textoOriginal.toLowerCase();

    const coincidenciasDirectas = buscarProductos(textoOriginal);
    if (coincidenciasDirectas.length > 0) {
        asistenteMensajeBot("⭐ Encontré este producto:");
        asistenteTarjetasProductos(coincidenciasDirectas);
        asistenteMostrarOpciones([{ texto: "⬅ Volver al menú", accion: asistenteMenuPrincipal }]);
        return;
    }

    if (texto.includes("regalo")) {
        asistenteIniciarRegalo();
        return;
    }

    if (texto.includes("oferta") || texto.includes("descuento")) {
        asistenteMostrarOfertas();
        return;
    }

    if (texto.includes("1.60") || texto.includes("1,60")) {
        asistenteMensajeBot("🛏️ ¡Perfecto! Para una cama de 1.60 m necesitas una opción Queen.\n\n⭐ Te recomiendo:");
        asistenteTarjetasProductos([11]);
        asistenteMostrarOpciones([{ texto: "⬅ Volver al menú", accion: asistenteMenuPrincipal }]);
        return;
    }
    if (texto.includes("1.40") || texto.includes("1,40")) {
        asistenteMensajeBot("🛏️ Para una cama de 1.40 m necesitas una opción Doble.\n\n⭐ Te recomiendo:");
        asistenteTarjetasProductos([8]);
        asistenteMostrarOpciones([{ texto: "⬅ Volver al menú", accion: asistenteMenuPrincipal }]);
        return;
    }
    if (texto.includes("2x2") || texto.includes("2 x 2") || texto.includes("king")) {
        asistenteMensajeBot("🛏️ Para una cama King necesitas esta opción:\n\n⭐ Te recomiendo:");
        asistenteTarjetasProductos([10]);
        asistenteMostrarOpciones([{ texto: "⬅ Volver al menú", accion: asistenteMenuPrincipal }]);
        return;
    }

    let ids = Object.keys(ASISTENTE_ETIQUETAS)
        .map(Number)
        .filter(id => ASISTENTE_ETIQUETAS[id].some(palabra => texto.includes(palabra)));

    const presupuesto = asistenteParsearPresupuesto(texto);
    if (presupuesto) {
        const candidatos = ids.length > 0 ? ids : Object.keys(productos).map(Number);
        ids = candidatos.filter(id => productos[id].precio >= presupuesto.min && productos[id].precio <= presupuesto.max);
    }

    if (ids.length === 0) {
        asistenteMensajeBot("No encontré exactamente ese producto, pero estas opciones podrían servirte:");
        const enOferta = Object.keys(productos).map(Number).filter(id => productos[id].descuento);
        asistenteTarjetasProductos(enOferta.length ? enOferta : Object.keys(productos).map(Number).slice(0, 3));
    } else {
        asistenteMensajeBot("⭐ Te recomiendo:");
        asistenteTarjetasProductos(ids);
    }

    asistenteMostrarOpciones([{ texto: "⬅ Volver al menú", accion: asistenteMenuPrincipal }]);
}

function abrirAsistente() {
    elVentana.classList.add("asistente-abierta");
    elVentana.removeAttribute("hidden");
    if (elMensajes.childElementCount === 0) {
        asistenteMensajeBot("🔵 ¡Hola! Soy el Asistente KY.\nEstoy aquí para ayudarte a encontrar el producto ideal para tu hogar.");
        asistenteMenuPrincipal();
    }
    document.getElementById("asistenteTexto").focus();
}

function cerrarAsistente() {
    elVentana.classList.remove("asistente-abierta");
    elVentana.setAttribute("hidden", "");
}

function asistenteEstaAbierto() {
    return elVentana.classList.contains("asistente-abierta");
}

document.addEventListener("DOMContentLoaded", () => {
    elBoton.addEventListener("click", () => {
        if (asistenteEstaAbierto()) {
            cerrarAsistente();
        } else {
            abrirAsistente();
        }
    });

    document.getElementById("asistenteCerrar").addEventListener("click", cerrarAsistente);

    document.getElementById("asistenteForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.getElementById("asistenteTexto");
        const texto = input.value.trim();
        if (!texto) return;

        asistenteMensajeUsuario(texto);
        input.value = "";
        asistenteLimpiarOpciones();
        asistenteBuscarLibre(texto);
    });
});
