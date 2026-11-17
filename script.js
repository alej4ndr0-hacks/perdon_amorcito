/* =========================================================
   Página de disculpas con gatitos 🐾
   - Cada página tiene su mensaje y varios GIFs de gatitos.
     Si un GIF no carga, se prueba el siguiente; si ninguno
     carga, aparece un emoji de gatito animado.
   - Para cambiar un GIF: reemplaza el código (ID) de Giphy.
     El ID es lo último de la dirección de un GIF en giphy.com
     ej: giphy.com/gifs/sorry-cat-tT62urTtAGqicrZYou -> tT62urTtAGqicrZYou
   ========================================================= */

const paginas = [
  { titulo: "Hola, mi amor", sub: "Tengo algo muy importante que decirte… 💌",
    gifs: ["nBKexBIYct2M9D6s1V", "frkzjwsJHatOCuvg5v"], emoji: "💌", boton: "Ábreme" },

  { titulo: "Perdóname, mi amor", sub: "Sé que me equivoqué y lo siento con todo mi corazón 🥺",
    gifs: ["tT62urTtAGqicrZYou", "DLCdj0kedeQLxi15iX"], emoji: "😿" },

  { titulo: "Cambiaré", sub: "Te lo prometo, de verdad voy a ser mejor para ti 🙏",
    gifs: ["hpEN6NcKuRl5BIbOK6", "1iu8uG2cjYFZS6wTxv"], emoji: "😼" },

  { titulo: "Jamás te volveré a hacer sentir mal, amorcito", sub: "Solo quiero verte feliz y cuidarte siempre 🤗",
    gifs: ["XaikVL6qbrJSJoQmCR", "sNFFScb9RPaYKainsp"], emoji: "😽" },

  { titulo: "Aprenderé a amarme a mí mismo", sub: "Para poder amarte cada día mejor 💗",
    gifs: ["5as1zYJThvt8NJVjVA", "tUfZv0outaTM28D4Vi"], emoji: "😺" },

  { titulo: "Seré más cariñoso", sub: "Más abrazos, más besitos y más mimos para ti 🥰",
    gifs: ["u4xQG8wr13ZK4S4nWU", "uN8sSLW5BLRG03nGUj"], emoji: "😽" },

  { titulo: "Seré más atento", sub: "Siempre pendiente de ti y de lo que sientes 💕",
    gifs: ["HagjR85dzSDNDLT4tn", "Cj7toIZEcMfRaLhDG8"], emoji: "🐱" },

  { titulo: "Ya no seré tosco", sub: "Solo ternura y dulzura para ti 🌸",
    gifs: ["KztT2c4u8mYYUiMKdJ", "FYMTNDJeYxIA1bzIlq"], emoji: "😺" },

  { titulo: "Jamás de los jamases te volveré a hacer pasar por una situación así, amorcito", sub: "Te lo prometo con todo mi corazón 🤞",
    gifs: ["IkhtL6LjkKz83ZUkNW", "lwQhsEs20kNi0VpNNj"], emoji: "🤞" },

  { titulo: "Te daré la mejor versión de mí", sub: "Porque te mereces todo lo bonito ✨",
    gifs: ["ehZkgHKNUdhLxYmpNM", "KpKXdUotCwWOneahXy"], emoji: "✨" },

  { titulo: "Y seré exitoso", sub: "Voy a lograr todo lo que me proponga… y lo celebraré contigo 🏆",
    gifs: ["OCqjFEKcSb5WJ4uAyU", "hI9HWWrrt0cFLDGpx0"], emoji: "😎" },

  { titulo: "Te amooo muchíiisimooo", sub: "Más que a nada en este mundo 💗",
    gifs: ["Pk9n41p2yA7CFGJg60", "iY25xIloX4bkwhcJJG"], emoji: "😻" },

  { titulo: "Eres el amor de mi vida", sub: "Tú y yo, siempre juntitos 💞",
    gifs: ["zGdHl3EOzwUpMqg67p", "MpeWJ9JyTyOm4"], emoji: "💞" },

  { titulo: "Quiero hacerte la mujer más feliz del universo", sub: "Tu sonrisa es lo más bonito que existe 🌹",
    gifs: ["UA1n322Kgn23yY5PrL", "5SbA6ZRhiI5jriUwqu"], emoji: "🌹" },

  { titulo: "Quiero casarme contigo", sub: "Y decirte que sí para toda la vida 💍",
    gifs: ["ecm0okZk9ed5xl5chG", "xUPGcFs7mOWRSw5rpK"], emoji: "💍" },

  { titulo: "Quiero tener una casita contigo", sub: "Nuestro hogar, lleno de amor 🏡",
    gifs: ["Vq0zBrLG3qDzVNC3ij", "54kolBLJKeo0EpjZiq"], emoji: "🏡" },

  { titulo: "Quiero tener una familia contigo", sub: "Nuestra propia familia feliz 👨‍👩‍👧",
    gifs: ["kdEUGSv2BEjLFNGP3d", "5jRTSmhn0oFUmJksu2"], emoji: "👨‍👩‍👧" },

  { titulo: "Quiero viajar contigo", sub: "Conocer el mundo entero de tu mano ✈️",
    gifs: ["wKDQJBpFvuX4uHJIrf", "G55CUWzujEHTfnTrXv"], emoji: "✈️" },

  { titulo: "Quiero que estemos juntos por siempre", sub: "Tú y yo, hoy, mañana y siempre ♾️💗",
    gifs: ["ySYtKTJ4mOF1XIJnu5", "UdHJmGSHVb2eJyEczL"], emoji: "💞" },

  { titulo: "¿Me perdonas, mi amor?", sub: "",
    gifs: ["5Gb6pmAu8o0Ba", "B2TG4Rx3gPuMw"], emoji: "🥺", pregunta: true },

  { titulo: "¡Te amo, mi vida!", sub: "Gracias por perdonarme 💖 Prometo cumplir cada palabra.",
    gifs: ["33OrjzUFwkwEg", "IAbrtESCyrqLOMlWdx"], emoji: "😸", final: true, boton: "Otra vez" }
];


/* ---------- Elementos ---------- */
const $ = (id) => document.getElementById(id);
const tarjeta     = $("tarjeta");
const gif         = $("gif");
const gifEmoji    = $("gifEmoji");
const gifCargando = $("gifCargando");
const titulo      = $("titulo");
const subtitulo   = $("subtitulo");
const respuestas  = $("respuestas");
const btnSi       = $("btnSi");
const btnNo       = $("btnNo");
const btnAtras    = $("btnAtras");
const btnSig      = $("btnSiguiente");
const textoPatita = $("textoPatita");
const pista       = $("pista");
const progreso    = $("progreso");
const fondo       = $("fondo");

let actual = 0;
let cambiando = false;
let cargaId = 0;          // evita que un GIF viejo aparezca en otra página
let intentosNo = 0;

/* ---------- GIFs: precarga + memoria ----------
   Apenas abre la página, se descargan en segundo plano los GIFs
   de TODAS las páginas y se guardan en memoria. Así, al avanzar
   o retroceder, el gatito aparece al instante.                  */
const formatos = [
  (id) => `https://media.giphy.com/media/${id}/giphy.webp`,  // liviano y nítido
  (id) => `https://media.giphy.com/media/${id}/200.webp`,    // más liviano aún
  (id) => `https://i.giphy.com/${id}.gif`                    // respaldo
];

const listos = {};      // página -> url que ya cargó
const enCurso = {};     // página -> promesa de carga
const guardadas = [];   // mantiene las imágenes en memoria

function obtenerGif(i) {
  if (enCurso[i]) return enCurso[i];
  const intentos = [];
  // 1° el GIF que pusiste en la carpeta (gif1.gif, gif2.gif...) -> sale al instante
  intentos.push(`gif${i + 1}.gif`, `gif${i + 1}.webp`);
  // 2° si no está en la carpeta, lo busca en internet
  paginas[i].gifs.forEach((id) => formatos.forEach((f) => intentos.push(f(id))));

  enCurso[i] = new Promise((resolve, reject) => {
    let k = 0, fallos = 0, hecho = false;
    const lanzar = () => {
      if (hecho || k >= intentos.length) return;
      const url = intentos[k++];
      let avanzado = false;
      const avanzar = () => { if (!avanzado) { avanzado = true; lanzar(); } };
      const img = new Image();
      guardadas.push(img);
      img.onload = () => {
        if (hecho) return;
        hecho = true;
        listos[i] = url;
        resolve(url);
      };
      img.onerror = () => {
        if (++fallos >= intentos.length && !hecho) { hecho = true; reject(); }
        avanzar();
      };
      setTimeout(avanzar, k <= 2 ? 400 : 2500);   // si tarda, prueba otra opción en paralelo
      img.src = url;
    };
    lanzar();
  });
  return enCurso[i];
}

// Descarga todas las páginas en orden, 4 a la vez
function precargarTodo() {
  const cola = paginas.map((_, i) => i);
  const conLimite = (p) => Promise.race([p, new Promise((r) => setTimeout(r, 15000))]);
  const trabajador = () => {
    const i = cola.shift();
    if (i === undefined) return;
    conLimite(obtenerGif(i)).catch(() => {}).finally(trabajador);
  };
  for (let n = 0; n < 4; n++) trabajador();
}

function cargarGif(i) {
  const pagina = paginas[i];
  const miCarga = ++cargaId;
  gifEmoji.textContent = pagina.emoji;
  gifEmoji.classList.remove("visible");

  const poner = (url) => {
    if (miCarga !== cargaId) return;
    gif.src = url;
    gifCargando.classList.add("oculto");
    gifEmoji.classList.remove("visible");
    gif.classList.add("visible");
  };
  const ponerEmoji = () => {
    if (miCarga !== cargaId || listos[i]) return;
    gifCargando.classList.add("oculto");
    gifEmoji.classList.add("visible");
  };

  if (listos[i]) { poner(listos[i]); return; }   // ya está en memoria: al instante

  gif.classList.remove("visible");
  gifCargando.classList.remove("oculto");
  obtenerGif(i).then(poner).catch(ponerEmoji);
  setTimeout(ponerEmoji, 10000);  // si demora mucho, emoji (y luego se cambia por el GIF)
}

/* ---------- Título letra por letra ---------- */
function escribirTitulo(texto) {
  titulo.innerHTML = "";
  let retraso = 0;
  texto.split(" ").forEach((palabra, n, arr) => {
    const spanPalabra = document.createElement("span");
    spanPalabra.style.display = "inline-block";
    spanPalabra.style.whiteSpace = "nowrap";
    Array.from(palabra).forEach((letra) => {
      const s = document.createElement("span");
      s.className = "letra";
      s.textContent = letra;
      s.style.animationDelay = `${retraso}s`;
      retraso += texto.length > 40 ? 0.025 : 0.045;
      spanPalabra.appendChild(s);
    });
    titulo.appendChild(spanPalabra);
    if (n < arr.length - 1) titulo.appendChild(document.createTextNode(" "));
  });
  return retraso;
}

/* ---------- Progreso ---------- */
function dibujarProgreso() {
  progreso.innerHTML = "";
  paginas.forEach((_, i) => {
    const s = document.createElement("span");
    s.textContent = "🐾";
    if (i <= actual) s.classList.add("hecho");
    progreso.appendChild(s);
  });
}

/* ---------- Mostrar página ---------- */
function mostrar(indice) {
  const p = paginas[indice];
  actual = indice;

  cargarGif(indice);

  titulo.classList.toggle("largo", p.titulo.length > 40);
  const retraso = escribirTitulo(p.titulo);
  subtitulo.textContent = p.sub;
  subtitulo.style.animation = "none";
  void subtitulo.offsetWidth;
  subtitulo.style.animation = "";
  subtitulo.style.animationDelay = `${retraso + 0.1}s`;

  // Sí / No
  respuestas.classList.toggle("visible", !!p.pregunta);
  reiniciarNo();

  // Patitas
  btnAtras.classList.toggle("oculto", indice === 0 || !!p.final);
  btnSig.classList.toggle("oculto", !!p.pregunta);
  textoPatita.textContent = p.boton || "Sigue";

  pista.textContent = p.pregunta ? "elige con el corazón 💗"
                    : p.final    ? "eres mi todo 💗"
                    : "toca la patita 🐾";

  dibujarProgreso();

  tarjeta.classList.remove("salir");
  tarjeta.classList.remove("entrar");
  void tarjeta.offsetWidth;
  tarjeta.classList.add("entrar");

  if (p.final) lluviaDeAmor();
}

function irA(indice) {
  if (cambiando || indice < 0 || indice >= paginas.length) return;
  cambiando = true;
  tarjeta.classList.remove("entrar");
  tarjeta.classList.add("salir");
  setTimeout(() => {
    mostrar(indice);
    cambiando = false;
  }, 330);
}

function siguiente() {
  const p = paginas[actual];
  if (p.pregunta) return;
  if (p.final) { irA(0); return; }
  irA(actual + 1);
}

function anterior() {
  if (!paginas[actual].final) irA(actual - 1);
}

btnSig.addEventListener("click", siguiente);
btnAtras.addEventListener("click", anterior);

/* ---------- Botón Sí ---------- */
btnSi.addEventListener("click", () => {
  reiniciarNo();
  irA(paginas.length - 1);
});

/* ---------- Botón No que se escapa ---------- */
const frasesNo = ["¿Segura? 🥺", "Piénsalo bien 😿", "¡No vale! 😹", "Porfis 🙏", "Nop 😼", "Mejor el Sí 💖"];

function escaparNo(e) {
  if (e) e.preventDefault();
  intentosNo++;
  // se mueve al body para poder correr por toda la pantalla
  if (btnNo.parentElement !== document.body) document.body.appendChild(btnNo);
  btnNo.classList.add("huyendo");
  btnNo.textContent = frasesNo[(intentosNo - 1) % frasesNo.length];

  const margen = 20;
  const ancho = btnNo.offsetWidth;
  const alto = btnNo.offsetHeight;
  const x = margen + Math.random() * (window.innerWidth - ancho - margen * 2);
  const y = margen + Math.random() * (window.innerHeight - alto - margen * 2);
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;

  // El "Sí" crece cada vez
  const escala = Math.min(1 + intentosNo * 0.15, 2);
  btnSi.style.fontSize = `${18 * escala}px`;
}

function reiniciarNo() {
  intentosNo = 0;
  if (btnNo.parentElement !== respuestas) respuestas.appendChild(btnNo);
  btnNo.classList.toggle("oculto", !paginas[actual].pregunta);
  btnNo.classList.remove("huyendo");
  btnNo.style.left = "";
  btnNo.style.top = "";
  btnNo.textContent = "No 😿";
  btnSi.style.fontSize = "";
}

btnNo.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") escaparNo(); });
btnNo.addEventListener("pointerdown", escaparNo);
btnNo.addEventListener("click", escaparNo);

/* ---------- Teclado y deslizar ---------- */
document.addEventListener("keydown", (e) => {
  if (["ArrowRight", "Enter", " "].includes(e.key)) { e.preventDefault(); siguiente(); }
  if (e.key === "ArrowLeft") anterior();
});

let toqueX = null;
document.addEventListener("touchstart", (e) => { toqueX = e.touches[0].clientX; }, { passive: true });
document.addEventListener("touchend", (e) => {
  if (toqueX === null) return;
  const dx = e.changedTouches[0].clientX - toqueX;
  if (dx < -70) siguiente();
  if (dx > 70) anterior();
  toqueX = null;
});

/* ---------- Fondo: corazones y patitas flotando ---------- */
const adornos = ["💗", "🐾", "💕", "💖", "🐾", "✨", "🌸", "💞"];

function crearFlotante() {
  const el = document.createElement("span");
  el.className = "flotante";
  el.textContent = adornos[Math.floor(Math.random() * adornos.length)];
  el.style.left = `${Math.random() * 100}vw`;
  el.style.fontSize = `${14 + Math.random() * 22}px`;
  el.style.animationDuration = `${7 + Math.random() * 7}s`;
  el.style.setProperty("--giro", `${-60 + Math.random() * 120}deg`);
  el.addEventListener("animationend", () => el.remove());
  fondo.appendChild(el);
}
setInterval(crearFlotante, 550);
for (let i = 0; i < 8; i++) setTimeout(crearFlotante, i * 150);

/* ---------- Huellitas al tocar la pantalla ---------- */
document.addEventListener("pointerdown", (e) => {
  for (let i = 0; i < 6; i++) {
    const h = document.createElement("span");
    h.className = "huella";
    h.textContent = i % 2 ? "💗" : "🐾";
    h.style.left = `${e.clientX}px`;
    h.style.top = `${e.clientY}px`;
    const ang = (Math.PI * 2 * i) / 6 + Math.random() * 0.5;
    const dist = 40 + Math.random() * 40;
    h.style.setProperty("--dx", `${Math.cos(ang) * dist}px`);
    h.style.setProperty("--dy", `${Math.sin(ang) * dist}px`);
    h.style.setProperty("--rot", `${-40 + Math.random() * 80}deg`);
    h.addEventListener("animationend", () => h.remove());
    document.body.appendChild(h);
  }
});

/* ---------- Lluvia de amor al decir "Sí" ---------- */
function lluviaDeAmor() {
  const cosas = ["💖", "💗", "🐾", "😻", "💕", "🌸", "✨", "😽"];
  for (let i = 0; i < 70; i++) {
    setTimeout(() => {
      const c = document.createElement("span");
      c.className = "confeti";
      c.textContent = cosas[Math.floor(Math.random() * cosas.length)];
      c.style.left = `${Math.random() * 100}vw`;
      c.style.fontSize = `${18 + Math.random() * 22}px`;
      c.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
      c.style.setProperty("--rot", `${-360 + Math.random() * 720}deg`);
      c.addEventListener("animationend", () => c.remove());
      document.body.appendChild(c);
    }, i * 45);
  }
}

/* ---------- Música de fondo ----------
   Los navegadores no dejan sonar música sola, así que empieza
   con el primer toque (cuando ella toca "Ábreme").            */
const musica = $("musica");
const btnMusica = $("btnMusica");
let musicaIniciada = false;

function subirVolumen() {
  musica.volume = 0;
  const paso = setInterval(() => {
    musica.volume = Math.min(musica.volume + 0.05, 0.7);
    if (musica.volume >= 0.7) clearInterval(paso);
  }, 150);
}

function iniciarMusica() {
  if (musicaIniciada) return;
  musicaIniciada = true;
  musica.play().then(() => {
    subirVolumen();
    btnMusica.classList.add("sonando");
  }).catch(() => { musicaIniciada = false; });
}

document.addEventListener("pointerdown", (e) => {
  if (e.target.closest("#btnMusica")) return;
  iniciarMusica();
});
document.addEventListener("keydown", iniciarMusica);

btnMusica.addEventListener("click", () => {
  if (musica.paused) {
    musicaIniciada = true;
    musica.play().then(() => btnMusica.classList.add("sonando")).catch(() => {});
  } else {
    musica.pause();
    btnMusica.classList.remove("sonando");
  }
});

// si no hay archivo musica.mp3, se esconde el botón
musica.addEventListener("error", () => btnMusica.classList.add("oculto"));

/* ---------- Inicio ---------- */
mostrar(0);
precargarTodo();
