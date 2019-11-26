function Theme(name, logo, colorOne, colorTwo) {
  this.name = name;
  this.logo = logo; // logo location, not the react component
  this.colorOne = colorOne;
  this.colorTwo = colorTwo;
}

module.exports = Object.freeze({
  agrifood: new Theme("AgriFood", require("../assets/256px_agrifood.png"), "#58A77A", "#356148"),
  circulaire_economie: new Theme("Circulaire economie", require("../assets/256px_circulaire_economy.png"), "#6CD0D4", "#4CA2A6"),
  htsm: new Theme("HTSM", require("../assets/256px_htsm.png"), "#FFB24C", "#ED7526"),
  lsh: new Theme("Life Sciences en Health", require("../assets/256px_lsh.png"), "#FB5758", "#E02122"),
  water: new Theme("Water", require("../assets/256px_water.png"), "#FFB24C", "#ED7526"),
  bouw: new Theme("Bouw", require("../assets/256px_bouw.png"), "#C6775F", "#764435"),
  creatieve_industrie: new Theme("Creatieve industrie", require("../assets/256px_creatieve_industrie.png"), "#FFB24C", "#ED7526"),
  ict: new Theme("ICT", require("../assets/256px_ict.png"), "#CBA442", "#A48E56"),
  social_impact: new Theme("Social Impact", require("../assets/256px_other.png"), "#FFB24C", "#ED7526"),
  chemie: new Theme("Chemie", require("../assets/256px_chemie.png"), "#572876", "#A94BE8"),
  energie: new Theme("Energie", require("../assets/256px_energie.png"), "#FDAD00", "#F1BA2E"),
  logistiek: new Theme("Logistiek", require("../assets/256px_logistiek.png"), "#FFB24C", "#ED7526"),
  tuinbouw: new Theme("Tuinbouw", require("../assets/256px_tuinbouw.png"), "#FFB24C", "#ED7526")
});
