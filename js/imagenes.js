let reptiles = [];
let aves = [];
let pokemon = [];
let reverso = "img/reverso.png";

function cargarImagenes() {

	reptiles[0] = "img/reptiles/Alopoglossus_brevifrontalis.png";
	reptiles[1] = "img/reptiles/Amphisbaena_fuliginosa.png";
	reptiles[2] = "img/reptiles/Anolis_fuscoauratus.png";
	reptiles[3] = "img/reptiles/Anolis_scypheus.png";
	reptiles[4] = "img/reptiles/Bothrops_atrox.png";
	reptiles[5] = "img/reptiles/Caiman_crocodilus.png";

	reptiles[6] = "img/reptiles/Chelonoidis_carbonaria.png";
	reptiles[7] = "img/reptiles/Chelus_orinocense.png";
	reptiles[8] = "img/reptiles/Chironius-carinatus.png";
	reptiles[9] = "img/reptiles/Corallus_rusherbergui_02.png";
	reptiles[10] = "img/reptiles/Crotalus_durissus.png";
	reptiles[11] = "img/reptiles/Dypsas_catesbyi.png";
	reptiles[12] = "img/reptiles/Enyalioides_laticeps_02.png";
	reptiles[13] = "img/reptiles/Epicrates_cenchria.png";
	reptiles[14] = "img/reptiles/Erythrolamprus_bizona.png";
	reptiles[15] = "img/reptiles/Eunectes_murinus.png";
	reptiles[16] = "img/reptiles/Gonatodes_riveroi.png";
	reptiles[17] = "img/reptiles/Leptophis_ahetulla_02.png";
	reptiles[18] = "img/reptiles/Iguana_iguana.png";
	reptiles[19] = "img/reptiles/Helicops_angulatus.png";
	reptiles[20] = "img/reptiles/Imantodes_cenchoa.png";
	reptiles[21] = "img/reptiles/Kinosternon_scorpioides.png";
	reptiles[22] = "img/reptiles/Micrurus_helleri.png";
	reptiles[23] = "img/reptiles/Micrurus_surinamensis.png";
	reptiles[24] = "img/reptiles/Oxyrhophus_petola.png";
	reptiles[25] = "img/reptiles/Paleosuchus_palpebrosus.png";
	reptiles[26] = "img/reptiles/Podocnemis_vogli_02.png";
	reptiles[27] = "img/reptiles/Podocnemis_unifilis.png";
	reptiles[28] = "img/reptiles/Polychrus-marmoratus.png";
	reptiles[29] = "img/reptiles/Siphlophis_compresus.png";
	reptiles[30] = "img/reptiles/Tupinambis_sp.png";
	reptiles[31] = "img/reptiles/Uranoscodon_superciliosus.png";
	reptiles[32] = "img/reptiles/Varzea_altamazonica.png";
	

	aves[0] = "img/aves/sturnela.png";
	aves[1] = "img/aves/Vireo_olivaeus.png";
	aves[2] = "img/aves/Tolmomyias_sulphurescens.png";
	aves[3] = "img/aves/Sporophila_intermedia.png";
	aves[4] = "img/aves/Setophaga_striata.png";
	aves[5] = "img/aves/Setophaga_rutecila.png";
	aves[6] = "img/aves/rampho_.png";
	aves[7] = "img/aves/Phacelodomus_rufifrons.png";
	aves[8] = "img/aves/Parkesia_noveboracensis.png";
	aves[9] = "img/aves/Eupsittula_pertinax.png";
	aves[10] = "img/aves/Hydropsalis_cayennensis.png";
	aves[11] =  "img/aves/Leistes_militaris.png";
	aves[12] =  "img/aves/Ara_severus.png";
	aves[13] =  "img/aves/Athene_cunicularia.png";
	aves[14] =  "img/aves/Caracara_plancus.png";
	aves[15] =  "img/aves/Corapgys_atratus.png";
	aves[16] =  "img/aves/Eurypyga_helias.png";
	aves[17] =  "img/aves/Falco_femoralis.png";
	aves[18] =  "img/aves/Mitu_tomentosa.png";
	aves[19] =  "img/aves/Patagioenas_cayennensis.png";
	aves[20] =  "img/aves/Phaetusa_simplex.png";
	aves[21] =  "img/aves/Platalea_ajaja.png";
	aves[22] =  "img/aves/Syrignma_sibilatrix.png";
	aves[23] =  "img/aves/Herpetotheres_cachinans.png";
	

	anfibios[0] = "img/anfibios/Boana_boans.png";
	anfibios[1] = "img/anfibios/Boana_lanciformis_02.png";
	anfibios[2] = "img/anfibios/Boana_platanera.png";
	anfibios[3] = "img/anfibios/Boana_punctata.png";
	anfibios[4] = "img/anfibios/Elachistochleis_tinigua.png";
	anfibios[5] = "img/anfibios/Leptodactylus_knudseni.png";
	anfibios[6] = "img/anfibios/Leptodactylus_lineatus.png";
	anfibios[7] = "img/anfibios/Leptodactylus_insularum.png";
	anfibios[8] = "img/anfibios/Leptodactylus_mystaceus.png";
	anfibios[9] = "img/anfibios/Lithobates_palmipies.png";
	anfibios[10] = "img/anfibios/Physalaemus_fischeri.png";
	anfibios[11] = "img/anfibios/Osteocephalus_taurinus.png";
	anfibios[12] = "img/anfibios/Pithecopus_hypochondrialis.png";
	anfibios[13] = "img/anfibios/Pristimantis_sp.png";
	anfibios[14] = "img/anfibios/Rhinella.png";
	anfibios[15] = "img/anfibios/Rhinella_marina.png";
	anfibios[16] = "img/anfibios/Rulyrana_flavopunctata.png";
	anfibios[17] = "img/anfibios/Scinax_rostratus.png";
	anfibios[18] = "img/anfibios/Scinax_ruber.png";
	anfibios[19] = "img/anfibios/Scinax_kennedyi.png";
	anfibios[20] = "img/anfibios/Trachycephalus_typhonius.png";

	insectos[0] = "img/insectos/aerodactyl.png";
	insectos[1] = "img/insectos/arcanine.png";
	insectos[2] = "img/insectos/banette.png";
	insectos[3] = "img/insectos/blastoise.png";
	insectos[4] = "img/insectos/buterfree.png";
	insectos[5] = "img/insectos/charizard.png";
	insectos[6] = "img/insectos/cyndaquil.png";
	insectos[7] = "img/insectos/ditto.png";
	insectos[8] = "img/insectos/doduo.png";
	insectos[9] = "img/insectos/eevee.png";
	insectos[10] = "img/insectos/electabuzz.png";
	insectos[11] = "img/insectos/exeggcute.png";
	insectos[12] = "img/insectos/gastly.png";
	insectos[13] = "img/insectos/graveler.png";
	insectos[14] = "img/insectos/gyarados.png";
	insectos[15] = "img/insectos/hitmonchan.png";
	insectos[16] = "img/insectos/horsea.png";
	insectos[17] = "img/insectos/jigglypuff.png";
	insectos[18] = "img/insectos/jynx.png";
	insectos[19] = "img/insectos/kangaskhan.png";
	insectos[20] = "img/insectos/machoke.png";



}
