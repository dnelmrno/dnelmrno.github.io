let parejasAcertadas = [];
let numImgVisibles = 0;

let puntos = 0;
let maxPuntos = 0;
let partidaIniciada = false;
window.onload = grid;

const datosAnimales = {
    "Alopoglossus_brevifrontalis.png": "El 'lagarto de cola corta' es un lagarto que se camufla muy bien en su entorno.",
    "Amphisbaena_fuliginosa.png": "La 'lombriz de tierra' es un reptil alargado que se mueve de manera muy especial.",
    "Anolis_fuscoauratus.png": "El 'lagarto que cambia de color' es un amigo común en jardines y bosques.",
    "Bothrops_atrox.png": "La 'mapaná' es una víbora que puede ser peligrosa, así que hay que tener cuidado.",
    "Caiman_crocodilus.png": "El 'caimán' es un gran depredador que puede ser muy impresionante en su hábitat.",
    "Chelonoidis_carbonaria.png": "La 'tortuga morrocoy' es famosa por vivir mucho tiempo y tener un caparazón colorido.",
    "Chelus_orinocense.png": "La 'tortuga matamata' tiene una apariencia muy especial que le ayuda a esconderse en el agua.",
    "Chironius-carinatus.png": "La 'culebra de agua' es rápida y le gusta comer peces y ranas.",
    "Corallus_rusherbergui_02.png": "La 'boa de la selva' es una experta en esconderse entre las hojas.",
    "Crotalus_durissus.png": "La 'serpiente de cascabel' es conocida por su sonido que avisa cuando se siente en peligro.",
    "Dypsas_catesbyi.png": "La 'serpiente arbórea' vive en los árboles y no es peligrosa para las personas.",
    "Enyalioides_laticeps_02.png": "El 'lagarto cabezón' tiene un cuerpo plano que le ayuda a esconderse muy bien.",
    "Epicrates_cenchria.png": "La 'boa arcoíris' es famosa por su piel de muchos colores que brilla con la luz.",
    "Erythrolamprus_bizona.png": "La 'serpiente de dos cabezas' es inofensiva y come pequeños animales.",
    "Eunectes_murinus.png": "La 'anaconda' es la serpiente más pesada del mundo y puede ser muy larga.",
    "Gonatodes_riveroi.png": "Este 'lagarto' es un maestro del camuflaje y se adapta a diferentes lugares.",
    "Leptophis_ahetulla_02.png": "La 'culebra de los árboles' es ágil y le gusta comer lagartijas.",
    "Iguana_iguana.png": "La 'iguana verde' es una gran nadadora y puede vivir más de 20 años.",
    "Helicops_angulatus.png": "La 'serpiente de agua' es experta en cazar peces y ranas.",
    "Imantodes_cenchoa.png": "Este 'lagarto de cola larga' es muy rápido y ágil.",
    "Kinosternon_scorpioides.png": "La 'tortuga de agua dulce' vive tanto en el agua como en la tierra.",
    "Micrurus_helleri.png": "La 'cobra de coral' tiene un veneno potente y un bonito patrón de colores.",
    "Micrurus_surinamensis.png": "Otra 'cobra de coral' que también es conocida por su colorido atractivo.",
    "Oxyrhophus_petola.png": "La 'culebra petola' es inofensiva y se alimenta de pequeños roedores.",
    "Paleosuchus_palpebrosus.png": "El 'cocodrilo enano' es uno de los más pequeños del mundo, midiendo hasta 1.5 metros.",
    "Podocnemis_vogli_02.png": "La 'tortuga de río' es social y se alimenta de plantas.",
    "Podocnemis_unifilis.png": "La 'tortuga charapa' tiene un caparazón redondeado y vive en ríos amazónicos.",
    "Polychrus-marmoratus.png": "Este 'lagarto' tiene un bonito patrón y es muy bueno para escalar.",
    "Siphlophis_compresus.png": "La 'serpiente' de cuerpo delgado es conocida por su rapidez.",
    "Tupinambis_sp.png": "El 'tegu' es un lagarto inteligente que puede aprender trucos y es muy sociable.",
    "Uranoscodon_superciliosus.png": "Este 'lagarto' tiene una cabeza aplanada que le ayuda a esconderse.",
    "Varzea_altamazonica.png": "Este ave es conocida por su hermoso canto y plumaje.",
    "sturnela.png": "El 'chorlito' es famoso por su canto melodioso y le gusta estar en grupo.",
    "Vireo_olivaeus.png": "Este pequeño pájaro se alimenta de insectos y frutas.",
    "Sporophila_intermedia.png": "Este ave tiene plumajes muy coloridos durante la época de apareamiento.",
    "Setophaga_striata.png": "El 'parulido' es conocido por sus largas migraciones y su canto especial.",
    "Setophaga_rutecila.png": "Este ave tiene un plumaje vibrante y le gusta vivir en bosques.",
    "rampho_.png": "El 'loro de pico de hacha' es famoso por su gran pico y su habilidad para romper nueces.",
    "Phacelodomus_rufifrons.png": "Este pájaro es conocido por su nido elaborado y su hermoso canto.",
    "Parkesia_noveboracensis.png": "La 'agachadiza' es un ave migratoria que vuela de manera rápida.",
    "Eupsittula_pertinax.png": "El 'loro' es famoso por su inteligencia y puede imitar sonidos.",
    "Hydropsalis_cayennensis.png": "Este pájaro de agua es muy bueno volando y se adapta bien.",
    "Leistes_militaris.png": "Este ave es territorial y tiene un canto vibrante.",
    "Ara_severus.png": "El 'guacamayo severo' es famoso por su plumaje brillante y su inteligencia.",
    "Athene_cunicularia.png": "El 'búho de los campos' vive en madrigueras y es un ave nocturna.",
    "Caracara_plancus.png": "El 'caracara' es un ave que se alimenta de diferentes cosas y es muy astuta.",
    "Corapgys_atratus.png": "El 'buitre' ayuda a limpiar el medio ambiente al comer animales muertos.",
    "Eurypyga_helias.png": "El 'pájaro de las nubes' es famoso por su vuelo acrobático.",
    "Falco_femoralis.png": "El 'halcón de patas largas' es conocido por su velocidad en el aire.",
    "Mitu_tomentosa.png": "El 'pauxi' es un ave grande que canta de manera melodiosa.",
    "Patagioenas_cayennensis.png": "La 'paloma de cola corta' es buena para vivir en muchos lugares.",
    "Phaetusa_simplex.png": "Este ave tiene un hermoso vuelo y plumaje blanco.",
    "Platalea_ajaja.png": "La 'espátula rosada' tiene un pico especial para filtrar comida.",
    "Syrignma_sibilatrix.png": "Este ave es famosa por su hermoso canto y plumaje.",
    "Herpetotheres_cachinans.png": "El 'pájaro mosquetero' es bueno atrapando insectos en vuelo.",
    "Tolmomyias_sulphurescens.png": "Este pájaro tiene un canto hermoso y plumaje colorido.",
    "Boana_boans.png": "Esta rana puede cambiar de color para esconderse y mantenerse fresca.",
    "Boana_lanciformis_02.png": "La 'rana de camuflaje' puede cambiar de color para esconderse.",
    "Boana_platanera.png": "Esta rana también puede cambiar de color para mezclarse con su entorno.",
    "Boana_punctata.png": "La 'rana punteada' cambia de color para esconderse y regular su temperatura.",
    "Elachistochleis_tinigua.png": "Esta rana es experta en cambiar de color para camuflarse.",
    "Leptodactylus_knudseni.png": "Este sapo también cambia de color para mezclarse con su entorno.",
    "Leptodactylus_lineatus.png": "Este sapo puede cambiar de color para camuflarse y mantenerse fresco.",
    "Leptodactylus_insularum.png": "El 'sapo de camuflaje' también cambia de color para esconderse.",
    "Leptodactylus_mystaceus.png": "Este sapo cambia de color para camuflarse y regular su temperatura.",
    "Lithobates_palmipies.png": "Esta rana puede cambiar de color para camuflarse y mantenerse fresca.",
    "Physalaemus_fischeri.png": "Esta rana cambia de color para esconderse y regular su temperatura.",
    "Osteocephalus_taurinus.png": "Esta rana puede cambiar de color para camuflarse y mantenerse fresca.",
    "Pithecopus_hypochondrialis.png": "Este sapo cambia de color para esconderse y regular su temperatura.",
    "Pristimantis_sp.png": "Esta rana puede cambiar de color para camuflarse y mantenerse fresca.",
    "Rhinella.png": "Este sapo cambia de color para camuflarse y mantenerse fresco.",
    "Rhinella_marina.png": "El 'sapo marino' también puede cambiar de color para esconderse.",
    "Rulyrana_flavopunctata.png": "Esta rana cambia de color para camuflarse y regular su temperatura.",
    "Scinax_rostratus.png": "Esta rana puede cambiar de color para camuflarse y mantenerse fresca.",
    "AScinax_ruber.png": "Esta rana cambia de color para camuflarse y regular su temperatura.",
    "Scinax_kennedyi.png": "Esta rana cambia de color para esconderse y regular su temperatura.",
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
