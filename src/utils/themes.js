function Theme(name, logo) {
    this.name = name;
    this.logo = logo; // logo location, not the react component
}

module.exports = Object.freeze({
    agrifood		: new Theme("AgriFood", require("../assets/256px_agrifood.png")),
    circulaire_economie : new Theme("Circulaire Economie", require("../assets/256px_circulaire_economy.png")),
    htsm		: new Theme("HTSM", require("../assets/256px_htsm.png")),
    lsh			: new Theme("Life Sciences en Health", require("../assets/256px_lsh.png")),
    water		: new Theme("Water", require("../assets/256px_water.png")),
    bouw		: new Theme("Bouw", require("../assets/256px_bouw.png")),
    creatieve_industrie	: new Theme("Creatieve Industrie", require("../assets/256px_creatieve_industrie.png")),
    ict			: new Theme("ICT", require("../assets/256px_ict.png")),
    social_impact	: new Theme("Social Impact", require("../assets/256px_other.png")),
    chemie		: new Theme("Chemie", require("../assets/256px_chemie.png")),
    energie		: new Theme("Energie", require("../assets/256px_energie.png")),
    logistiek		: new Theme("Logistiek", require("../assets/256px_logistiek.png")),
    tuinbouw		: new Theme("Tuinbouw", require("../assets/256px_tuinbouw.png")),
})
