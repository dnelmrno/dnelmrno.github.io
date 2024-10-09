let parejasAcertadas = [];
let numImgVisibles = 0;

let puntos = 0;
let maxPuntos = 0;
let partidaIniciada = false;
window.onload = grid;

const datosAnimales = {
    "Alopoglossus_brevifrontalis.png": "El 'lagarto de cola corta' tiene un cuerpo esbelto y se esconde bien en su entorno.",
    "Amphisbaena_fuliginosa.png": "La 'lombriz de tierra' es un reptil alargado que se mueve como una serpiente.",
    "Anolis_fuscoauratus.png": "El 'anolis' es un lagarto que puede cambiar de color para camuflarse.",
    "Bothrops_atrox.png": "La 'mapaná' es una víbora que puede ser peligrosa, así que hay que tener cuidado.",
    "Caiman_crocodilus.png": "El 'caimán' es un gran depredador que vive en ríos y pantanos.",
    "Chelonoidis_carbonaria.png": "La 'tortuga morrocoy' es conocida por su caparazón colorido y su larga vida.",
    "Chelus_orinocense.png": "La 'tortuga matamata' tiene un aspecto único que le ayuda a camuflarse en el agua.",
    "Chironius-carinatus.png": "La 'culebra de agua' se mueve rápidamente y caza peces y ranas.",
    "Corallus_rusherbergui_02.png": "La 'boa de la selva' es experta en camuflarse entre las hojas.",
    "Crotalus_durissus.png": "La 'serpiente de cascabel' es famosa por su sonido que avisa de su presencia.",
    "Dypsas_catesbyi.png": "La 'serpiente arbórea' es ágil y vive en árboles.",
    "Enyalioides_laticeps_02.png": "El 'lagarto cabezón' tiene una forma aplanada que le ayuda a esconderse.",
    "Epicrates_cenchria.png": "La 'boa arcoíris' es conocida por su piel brillante de muchos colores.",
    "Erythrolamprus_bizona.png": "La 'serpiente de dos cabezas' es inofensiva y se alimenta de pequeños animales.",
    "Eunectes_murinus.png": "La 'anaconda' es la serpiente más pesada del mundo y puede ser muy larga.",
    "Gonatodes_riveroi.png": "Este 'lagarto' es un maestro del camuflaje en su hábitat.",
    "Leptophis_ahetulla_02.png": "La 'culebra de los árboles' es rápida y se alimenta de lagartijas.",
    "Iguana_iguana.png": "La 'iguana verde' es un gran nadadora y puede vivir más de 20 años.",
    "Helicops_angulatus.png": "La 'serpiente de agua' es experta en cazar peces.",
    "Imantodes_cenchoa.png": "Este 'lagarto de cola larga' es ágil y se mueve rápidamente.",
    "Kinosternon_scorpioides.png": "La 'tortuga de agua dulce' vive en agua y tierra.",
    "Micrurus_helleri.png": "La 'cobra de coral' es conocida por su veneno y su hermoso patrón.",
    "Micrurus_surinamensis.png": "Esta 'cobra de coral' también tiene un colorido atractivo.",
    "Oxyrhophus_petola.png": "La 'culebra petola' es inofensiva y se alimenta de roedores.",
    "Paleosuchus_palpebrosus.png": "El 'cocodrilo enano' es uno de los más pequeños, mide hasta 1.5 metros.",
    "Podocnemis_vogli_02.png": "La 'tortuga de río' es social y se alimenta de plantas.",
    "Podocnemis_unifilis.png": "La 'tortuga charapa' tiene un caparazón redondeado y vive en ríos.",
    "Polychrus-marmoratus.png": "Este 'lagarto' tiene un patrón de colores y es bueno para escalar.",
    "Siphlophis_compresus.png": "Esta 'serpiente' es delgada y rápida.",
    "Tupinambis_sp.png": "El 'tegu' es un lagarto inteligente y sociable.",
    "Uranoscodon_superciliosus.png": "Este 'lagarto' tiene una cabeza aplanada que ayuda a esconderse.",
    "Varzea_altamazonica.png": "Este ave es conocida por su hermoso canto.",
    "sturnela.png": "El 'chorlito' es famoso por su canto melodioso y vive en grupos.",
    "Vireo_olivaeus.png": "Este pequeño pájaro se alimenta de insectos y frutas.",
    "Sporophila_intermedia.png": "Este ave tiene plumajes coloridos durante el cortejo.",
    "Setophaga_striata.png": "El 'parulido' es conocido por sus largas migraciones.",
    "Setophaga_rutecila.png": "Este ave tiene plumaje vibrante y vive en bosques.",
    "rampho_.png": "El 'loro de pico de hacha' es famoso por su gran pico.",
    "Phacelodomus_rufifrons.png": "Este pájaro es conocido por su elaborado nido y canto.",
    "Parkesia_noveboracensis.png": "La 'agachadiza' es un ave migratoria rápida.",
    "Eupsittula_pertinax.png": "El 'loro' es famoso por su inteligencia.",
    "Hydropsalis_cayennensis.png": "Este pájaro es un buen volador y se adapta bien.",
    "Leistes_militaris.png": "Este ave es territorial y canta de manera vibrante.",
    "Ara_severus.png": "El 'guacamayo severo' es conocido por su plumaje brillante.",
    "Athene_cunicularia.png": "El 'búho de los campos' vive en madrigueras y es nocturno.",
    "Caracara_plancus.png": "El 'caracara' se alimenta de carroña y es astuto.",
    "Corapgys_atratus.png": "El 'buitre' ayuda a limpiar el medio ambiente.",
    "Eurypyga_helias.png": "El 'pájaro de las nubes' es famoso por su vuelo acrobático.",
    "Falco_femoralis.png": "El 'halcón de patas largas' es veloz en el aire.",
    "Mitu_tomentosa.png": "El 'pauxi' es un ave grande con un canto melodioso.",
    "Patagioenas_cayennensis.png": "La 'paloma de cola corta' se adapta a diversos hábitats.",
    "Phaetusa_simplex.png": "Este ave tiene un hermoso vuelo y plumaje blanco.",
    "Platalea_ajaja.png": "La 'espátula rosada' tiene un pico especial para filtrar comida.",
    "Syrignma_sibilatrix.png": "Este ave es famosa por su hermoso canto.",
    "Herpetotheres_cachinans.png": "El 'pájaro mosquetero' atrapa insectos en vuelo.",
    "Tolmomyias_sulphurescens.png": "Este pájaro tiene un canto hermoso.",
    "Boana_boans.png": "Esta rana puede cambiar de color para camuflarse.",
    "Boana_lanciformis_02.png": "La 'rana de camuflaje' se mezcla bien con su entorno.",
    "Boana_platanera.png": "Esta rana también se camufla muy bien.",
    "Boana_punctata.png": "La 'rana punteada' se camufla y regula su temperatura.",
    "Elachistochleis_tinigua.png": "Esta rana es experta en camuflarse.",
    "Leptodactylus_knudseni.png": "Este sapo cambia de color para esconderse.",
    "Leptodactylus_lineatus.png": "Este sapo se camufla para mantenerse fresco.",
    "Leptodactylus_insularum.png": "El 'sapo de camuflaje' cambia de color para esconderse.",
    "Leptodactylus_mystaceus.png": "Este sapo se camufla y regula su temperatura.",
    "Lithobates_palmipies.png": "Esta rana se mezcla bien con su entorno.",
    "Physalaemus_fischeri.png": "Esta rana se camufla y regula su temperatura.",
    "Osteocephalus_taurinus.png": "Esta rana se camufla para esconderse.",
    "Pithecopus_hypochondrialis.png": "Este sapo cambia de color para camuflarse.",
    "Pristimantis_sp.png": "Esta rana se camufla muy bien.",
    "Rhinella.png": "Este sapo también se camufla.",
    "Rhinella_marina.png": "El 'sapo marino' se mezcla bien con su entorno.",
    "Rulyrana_flavopunctata.png": "Esta rana se camufla y regula su temperatura.",
    "Scinax_rostratus.png": "Esta rana se camufla en su hábitat.",
    "AScinax_ruber.png": "Esta rana se camufla y regula su temperatura.",
    "Scinax_kennedyi.png": "Esta rana se esconde bien en su entorno.",
    "Trachycephalus_typhonius.png": "Esta rana es muy rápida y ágil."
};



function grid() {
	cargarImagenes();
	getMaxPuntos();

	//NIVEL DIFICULTAD
	let modal = document.getElementById("dificultadBtn");
	let buttons = modal.childNodes;
	buttons.forEach(button => {
		button.onclick = dificultad;
	});
	document.getElementById("tablaPuntuaciones").onclick = historialPartidas;
	document.getElementById("ayuda").onclick = startIntro;
}

function dificultad() {
	switch (this.id) {
		case "aves":
			generarCartas(4, 8, aves);
			break;
		case "reptiles":
			generarCartas(4, 8, reptiles);
			break;
		case "anfibios":
			generarCartas(4, 8, anfibios);
			break;
			case "insectos":
			generarCartas(4, 8, reptiles);
			break;
			
	}
	document.getElementById("modal").setAttribute("class", "hide");
}

function generarCartas(valorDificultad, numImg, tematica) {
	cronometrar();
	cargarNumPartidas();

	let parentElement = document.getElementById("wrapper");
	let numElements = valorDificultad * valorDificultad;
	let listaImagenes = imagenes(numImg, tematica);

	for (let i = 0; i < numElements; i++) {
		let img = document.createElement('INPUT');
		img.setAttribute("type", "image");
		img.setAttribute("class", "imagenCarta");
		img.setAttribute("visible", false);
		img.setAttribute("src", listaImagenes[i]);
		carta(parentElement, img, numImg);
	}

	parentElement.style.setProperty('--rowNum', valorDificultad);
	parentElement.style.setProperty('--colNum', valorDificultad);
}

function carta(contenedor, img, numImg) {
	let carta = document.createElement('DIV');
	carta.setAttribute("class", "carta");
	contenedor.appendChild(carta);

	let front = document.createElement('DIV');
	front.setAttribute("class", "front face");
	carta.appendChild(front);
	front.appendChild(img);

	let back = document.createElement('DIV');
	back.setAttribute("class", "back face");
	carta.appendChild(back);

	let imgReverso = document.createElement('INPUT');
	imgReverso.setAttribute("type", "image");
	imgReverso.setAttribute("src", "img/reverso.png");
	back.appendChild(imgReverso);

	carta.onclick = function () {
		if (img.getAttribute("visible") == "false") {
			carta.classList.add("mostrar");
			img.setAttribute("visible", true);
			numImgVisibles++;

			comprobarParejas();
			scorePartida();

			if (parejasAcertadas.length == numImg) {
				cronometrar();
				guardarPuntuacion(); //Función del fichero modalScore.js
			}
		}
	}
}

function imagenes(numImg, tematica) {
	let imagenes = [];
	let i = 0;
	while (i < numImg) {
		let nuevaImagen = tematica[getAleatorio(tematica)];
		if (!imagenes.includes(nuevaImagen)) {
			imagenes[i] = nuevaImagen;
			i++;
		}
	}
	return mezclarImagenes(imagenes, numImg);
}

function mezclarImagenes(imagenes, numImg) {
	let baraja = [];
	baraja.length = numImg * 2;

	let i = 0
	while (i < baraja.length) {
		let nuevaImagen = imagenes[getAleatorio(imagenes)];
		if (!baraja.includes(nuevaImagen) || contarRepeticiones(baraja, nuevaImagen) < 2) {
			baraja[i] = nuevaImagen;
			i++;
		}
	}
	return baraja;
}

function contarRepeticiones(lista, imagen) {
	let repeticiones = 0;
	for (let i = 0; i < lista.length; i++) {
		if (lista[i] == imagen) {
			repeticiones++;
		}
	}
	return repeticiones;
}

function comprobarParejas() {
    if (numImgVisibles == 2) {
        bloquearPanel(true);
        cronometrar();

        let parejas = [];
        numImgVisibles = 0;

        let imagenes = document.getElementsByClassName("imagenCarta");
        for (let i = 0; i < imagenes.length; i++) {
            if (!parejasAcertadas.includes(imagenes[i].getAttribute("src")) && imagenes[i].getAttribute("visible") == "true") {
                parejas.push(imagenes[i]);
            }
        }

        if (parejas[0].getAttribute("src") != parejas[1].getAttribute("src")) {
            if (puntos != 0) {
                puntos--;
                getMaxPuntos();
            }

            setTimeout(() => {
                girarParejas(parejas[0], parejas[1]);
                setTimeout(() => {
                    bloquearPanel(false);
                    cronometrar();
                }, 1000);
            }, 1000);
        } else {
            parejasAcertadas.push(parejas[0].getAttribute("src"));
            puntos += 10;
            bloquearPanel(false);
            getMaxPuntos();
            cronometrar();

            // Obtener el nombre del animal después de que se forme una pareja
            let nombreAnimal = parejas[0].getAttribute("src").split('/').pop(); // Obtiene solo el nombre de la imagen

            // Mostrar información relevante del animal después de girar las cartas
            setTimeout(() => {
                if (datosAnimales[nombreAnimal]) {
                    alert(datosAnimales[nombreAnimal]); // Muestra la información relevante
                }
            }, 500); // Espera medio segundo para que el giro termine
        }
    }
}



function girarParejas(pareja1, pareja2) {
	pareja1.closest(".carta").classList.remove("mostrar");
	pareja1.classList.add("ocultar");
	pareja1.setAttribute("visible", false);

	pareja2.closest(".carta").classList.remove("mostrar");
	pareja2.classList.add("ocultar");
	pareja2.setAttribute("visible", false);
}

function getAleatorio(tematica) {
	return Math.floor(Math.random() * (tematica.length - 0));
}

function bloquearPanel(bloquear) {
	let tablero = document.getElementById("wrapper");
	if (bloquear)
		tablero.classList.add("bloquear");
	else
		tablero.classList.remove("bloquear");

	let imagenes = document.getElementsByClassName("imagenCarta");
	for (let i = 0; i < imagenes.length; i++) {
		imagenes[i].disabled = bloquear;
	}
}

function scorePartida() {
	let divScore = document.getElementById("puntosValue");
	divScore.innerHTML = puntos;
}

//CRONOMETRO(EL EL FICHERO CRONOMETRO.JS)
function cronometrar() {
	if (partidaIniciada) {
		partidaIniciada = false;
		parar();
	}
	else {
		partidaIniciada = true;
		inicio();
	}
}

function getMaxPuntos() {
	let historial = JSON.parse(localStorage.getItem("partidas"));
	if (historial != null) {
		maxPuntos = historial[0]._puntos;
	}
	else {
		maxPuntos = puntos;
	}
	setMaxPuntos();
}

function setMaxPuntos() {
	let maxScore = document.getElementById("puntosMaxValue");
	maxScore.innerHTML = maxPuntos;
}

function cargarNumPartidas() {
	let clave = "numPartidas";
	let numPartidas = localStorage.getItem(clave);
	if (numPartidas == null) {
		numPartidas = 1;
	}
	else {
		numPartidas++;
	}
	localStorage.setItem(clave, numPartidas);
	document.getElementById("numPartidasValue").innerHTML = numPartidas;
}

function startIntro() {
	var intro = introJs();
	intro.setOptions({
		steps: [
			{
				element: '#dificultadBtn',
				intro: "Seleccione una especie para jugar."
			},
			{
				element: '#tablaPuntuaciones',
				intro: "Visualiza la tabla de puntuaciones guardadas, en orden descendente."
			},
			{
				element: '#numPartidas',
				intro: "Número de partidas jugadas, guardadas y no guardadas."
			},
			{
				element: '#maxScore',
				intro: "Puntuación máxima registrada."
			},
			{
				element: '#score',
				intro: 'Puntos obtenidos durante la partida.'
			},
			{
				element: '#cronometro',
				intro: "Tiempo de juego."
			}
		],
		nextLabel: 'Siguiente',
		prevLabel: 'Anterior',
		skipLabel: 'Omitir',
		doneLabel: 'Hecho',
		exitOnOverlayClick: false
	});
	intro.start();
}
