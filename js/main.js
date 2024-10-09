let parejasAcertadas = [];
let numImgVisibles = 0;

let puntos = 0;
let maxPuntos = 0;
let partidaIniciada = false;
window.onload = grid;

const datosAnimales = {
    "Alopoglossus_brevifrontalis.png": "El 'Alopoglossus brevifrontalis' es un lagarto conocido como 'lagarto de cola corta', que se caracteriza por su capacidad de camuflaje.",
    "Amphisbaena_fuliginosa.png": "La 'Amphisbaena fuliginosa', conocida como 'lombriz de tierra', tiene un cuerpo alargado y es famosa por su forma de moverse.",
    "Anolis_fuscoauratus.png": "El 'Anolis fuscoauratus' es un lagarto que puede cambiar de color y es muy común en jardines y bosques.",
    "Bothrops_atrox.png": "La 'Bothrops atrox', conocida como 'mapaná', es una víbora peligrosa y su veneno puede ser letal.",
    "Caiman_crocodilus.png": "El 'Caiman crocodilus', conocido como 'caimán', puede alcanzar tamaños impresionantes y es un depredador temido en su hábitat.",
    "Chelonoidis_carbonaria.png": "La 'Chelonoidis carbonaria', o 'tortuga morrocoy', es conocida por su longevidad y su caparazón colorido.",
    "Chelus_orinocense.png": "La 'Chelus orinocense', conocida como 'tortuga matamata', es famosa por su apariencia inusual y su habilidad para camuflarse en el agua.",
    "Chironius-carinatus.png": "La 'Chironius carinatus' es una 'culebra de agua' ágil que se alimenta principalmente de peces y ranas.",
    "Corallus_rusherbergui_02.png": "La 'Corallus rusherbergui', conocida como 'boa de la selva', es un maestro del camuflaje entre las hojas.",
    "Crotalus_durissus.png": "La 'Crotalus durissus', o 'serpiente de cascabel', es famosa por su distintivo sonido de advertencia.",
    "Dypsas_catesbyi.png": "La 'Dypsas catesbyi' es una 'serpiente arbórea' que se encuentra comúnmente en los bosques y es inofensiva para los humanos.",
    "Enyalioides_laticeps_02.png": "El 'Enyalioides laticeps' es un lagarto conocido como 'lagarto cabezón', que tiene un cuerpo aplanado que le permite esconderse eficazmente.",
    "Epicrates_cenchria.png": "La 'Epicrates cenchria', conocida como 'boa arcoíris', es famosa por su piel colorida que brilla bajo la luz.",
    "Erythrolamprus_bizona.png": "La 'Erythrolamprus bizona' es una 'serpiente de dos cabezas' inofensiva que se alimenta de pequeños vertebrados.",
    "Eunectes_murinus.png": "La 'Eunectes murinus', conocida como 'anaconda', es la serpiente más pesada del mundo y puede alcanzar longitudes impresionantes.",
    "Gonatodes_riveroi.png": "El 'Gonatodes riveroi' es un lagarto que es experto en camuflaje y se adapta a diferentes hábitats.",
    "Leptophis_ahetulla_02.png": "La 'Leptophis ahetulla' es una 'culebra de los árboles' conocida por su agilidad y su dieta de lagartijas.",
    "Iguana_iguana.png": "La 'Iguana iguana', conocida como 'iguana verde', es una excelente nadadora y puede vivir más de 20 años.",
    "Helicops_angulatus.png": "La 'Helicops angulatus' es una 'serpiente de agua' que se especializa en cazar peces y anfibios.",
    "Imantodes_cenchoa.png": "El 'Imantodes cenchoa' es un lagarto de cola larga conocido por su rapidez y agilidad.",
    "Kinosternon_scorpioides.png": "La 'Kinosternon scorpioides' es una 'tortuga de agua dulce' que puede vivir tanto en ambientes acuáticos como terrestres.",
    "Micrurus_helleri.png": "La 'Micrurus helleri', conocida como 'cobra de coral', es famosa por su potente veneno y colorido patrón.",
    "Micrurus_surinamensis.png": "La 'Micrurus surinamensis' es otra 'cobra de coral' conocida por su veneno y su colorido atractivo.",
    "Oxyrhophus_petola.png": "La 'Oxyrhophus petola' es una 'culebra petola' inofensiva que se alimenta de pequeños roedores.",
    "Paleosuchus_palpebrosus.png": "El 'Paleosuchus palpebrosus', conocido como 'cocodrilo enano', es uno de los más pequeños del mundo, con un tamaño máximo de 1.5 metros.",
    "Podocnemis_vogli_02.png": "La 'Podocnemis vogli' es una 'tortuga de río' conocida por su comportamiento social y su dieta herbívora.",
    "Podocnemis_unifilis.png": "La 'Podocnemis unifilis', o 'tortuga charapa', tiene un caparazón en forma de disco y se encuentra en ríos amazónicos.",
    "Polychrus-marmoratus.png": "El 'Polychrus marmoratus' es un lagarto conocido por su colorido patrón y su habilidad para escalar.",
    "Siphlophis_compresus.png": "La 'Siphlophis compresus' es una 'serpiente' de cuerpo delgado, conocida por su rapidez.",
    "Tupinambis_sp.png": "El 'Tupinambis', conocido como 'tegu', es un lagarto inteligente que puede ser entrenado y tiene un comportamiento social.",
    "Uranoscodon_superciliosus.png": "El 'Uranoscodon superciliosus' es un lagarto que tiene una cabeza aplanada que le ayuda a camuflarse.",
    "Varzea_altamazonica.png": "La 'Varzea altamazonica' es un ave conocida por su canto melodioso y su atractivo plumaje.",
    "sturnela.png": "El 'Sturnella' es conocido como 'chorlito' y es famoso por su canto melodioso y su comportamiento social.",
    "Vireo_olivaeus.png": "El 'Vireo olivaeus' es un pequeño pájaro que se alimenta de insectos y frutas.",
    "Sporophila_intermedia.png": "La 'Sporophila intermedia' es un ave conocida por su colorido plumaje durante la época de apareamiento.",
    "Setophaga_striata.png": "El 'Setophaga striata' es un parulido conocido por sus migraciones largas y su canto distintivo.",
    "Setophaga_rutecila.png": "La 'Setophaga rutecila' es un ave reconocida por su plumaje vibrante y su preferencia por hábitats forestales.",
    "rampho_.png": "El 'Ramphastos' es conocido como 'loro de pico de hacha', famoso por su fuerte pico y su capacidad para romper nueces.",
    "Phacelodomus_rufifrons.png": "El 'Phacelodomus rufifrons' es un pájaro famoso por su nido elaborado y su canto melodioso.",
    "Parkesia_noveboracensis.png": "La 'Parkesia noveboracensis' es conocida como 'agachadiza', un migrante famoso por su vuelo rápido y agitado.",
    "Eupsittula_pertinax.png": "La 'Eupsittula pertinax', conocida como 'loro', es famosa por su inteligencia y capacidad para imitar sonidos.",
    "Hydropsalis_cayennensis.png": "La 'Hydropsalis cayennensis' es un pájaro de agua conocido por sus habilidades para volar y su adaptabilidad.",
    "Leistes_militaris.png": "La 'Leistes militaris' es un ave conocida por su comportamiento territorial y su canto vibrante.",
    "Ara_severus.png": "El 'Ara severus', conocido como 'guacamayo severo', es famoso por su plumaje brillante y su inteligencia.",
    "Athene_cunicularia.png": "El 'Athene cunicularia', conocido como 'búho de los campos', es un ave nocturna que vive en madrigueras en el suelo.",
    "Caracara_plancus.png": "El 'Caracara plancus' es conocido como 'caracara', un ave que se destaca por su comportamiento oportunista y su dieta variada.",
    "Corapgys_atratus.png": "El 'Coragyps atratus' es un ave carroñera conocida por su papel en el ecosistema al limpiar la carroña.",
    "Eurypyga_helias.png": "La 'Eurypyga helias' es un 'pájaro de las nubes' famoso por su vuelo acrobático.",
    "Falco_femoralis.png": "El 'Falco femoralis', conocido como 'halcón de patas largas', es célebre por su velocidad y agilidad en vuelo.",
    "Mitu_tomentosa.png": "El 'Mitu tomentosa', conocido como 'pauxi', es un ave grande que se destaca por su canto melodioso.",
    "Patagioenas_cayennensis.png": "La 'Patagioenas cayennensis', conocida como 'paloma de cola corta', es famosa por su capacidad para adaptarse a diversos hábitats.",
    "Phaetusa_simplex.png": "La 'Phaetusa simplex' es un ave famosa por su elegante vuelo y su plumaje blanco.",
    "Platalea_ajaja.png": "La 'Platalea ajaja', o 'espátula rosada', es famosa por su pico en forma de espátula, que utiliza para filtrar alimento.",
    "Syrignma_sibilatrix.png": "La 'Syrignma sibilatrix' es un ave famosa por su canto melodioso y su atractivo plumaje.",
    "Herpetotheres_cachinans.png": "El 'Herpetotheres cachinans' es conocido como 'pájaro mosquetero', famoso por su habilidad para atrapar insectos en vuelo.",
    "Tolmomyias_sulphurescens.png": "El 'Tolmomyias sulphurescens' es un pájaro conocido por su canto melodioso y su plumaje colorido.",
    "Boana_boans.png": "La 'Boana boans' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Boana_lanciformis_02.png": "La 'Boana lanciformis' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Boana_platanera.png": "La 'Boana platanera' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Boana_punctata.png": "La 'Boana punctata' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Elachistochleis_tinigua.png": "El 'Elachistochleis tinigua' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Leptodactylus_knudseni.png": "El 'Leptodactylus knudseni' es un sapo que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Leptodactylus_lineatus.png": "El 'Leptodactylus lineatus' es un sapo que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Leptodactylus_insularum.png": "El 'Leptodactylus insularum' es un sapo que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Leptodactylus_mystaceus.png": "El 'Leptodactylus mystaceus' es un sapo que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Lithobates_palmipies.png": "La 'Lithobates palmipes' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Physalaemus_fischeri.png": "El 'Physalaemus fischeri' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Osteocephalus_taurinus.png": "El 'Osteocephalus taurinus' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Pithecopus_hypochondrialis.png": "El 'Pithecopus hypochondrialis' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Pristimantis_sp.png": "El 'Pristimantis' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Rhinella.png": "El 'Rhinella' es un sapo que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Rhinella_marina.png": "La 'Rhinella marina' es un sapo que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Rulyrana_flavopunctata.png": "La 'Rulyrana flavopunctata' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Scinax_rostratus.png": "El 'Scinax rostratus' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "AScinax_ruber.png": "El 'AScinax ruber' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Scinax_kennedyi.png": "El 'Scinax kennedyi' es una rana que puede cambiar de color para camuflarse y regular su temperatura corporal.",
    "Trachycephalus_typhonius.png": "El 'Trachycephalus typhonius' es una rana que es muy rápida y ágil."
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
