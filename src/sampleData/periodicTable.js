const elements = [
  {
    name: "Hydrogen",
    appearance: "colorless gas",
    atomic_mass: 1.008,
    boil: 20.271,
    category: "diatomic nonmetal",
    color: null,
    density: 0.08988,
    discovered_by: "Henry Cavendish",
    melt: 13.99,
    molar_heat: 28.836,
    named_by: "Antoine Lavoisier",
    number: 1,
    period: 1,
    phase: "Gas",
    source: "https://en.wikipedia.org/wiki/Hydrogen",
    spectral_img: "https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg",
    summary:
      "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
    symbol: "H",
    xpos: 1,
    ypos: 1,
    shells: [1]
  },
  {
    name: "Helium",
    appearance:
      "colorless gas, exhibiting a red-orange glow when placed in a high-voltage electric field",
    atomic_mass: 4.0026022,
    boil: 4.222,
    category: "noble gas",
    color: null,
    density: 0.1786,
    discovered_by: "Pierre Janssen",
    melt: 0.95,
    molar_heat: null,
    named_by: null,
    number: 2,
    period: 1,
    phase: "Gas",
    source: "https://en.wikipedia.org/wiki/Helium",
    spectral_img: "https://en.wikipedia.org/wiki/File:Helium_spectrum.jpg",
    summary:
      "Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements.",
    symbol: "He",
    xpos: 18,
    ypos: 1,
    shells: [2]
  },
  {
    name: "Lithium",
    appearance: "silvery-white",
    atomic_mass: 6.94,
    boil: 1603,
    category: "alkali metal",
    color: null,
    density: 0.534,
    discovered_by: "Johan August Arfwedson",
    melt: 453.65,
    molar_heat: 24.86,
    named_by: null,
    number: 3,
    period: 2,
    phase: "Solid",
    source: "https://en.wikipedia.org/wiki/Lithium",
    spectral_img: null,
    summary:
      'Lithium (from Greek:\u03bb\u03af\u03b8\u03bf\u03c2 lithos, "stone") is a chemical element with the symbol Li and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group of chemical elements. Under standard conditions it is the lightest metal and the least dense solid element.',
    symbol: "Li",
    xpos: 1,
    ypos: 2,
    shells: [2, 1]
  },
  {
    name: "Beryllium",
    appearance: "white-gray metallic",
    atomic_mass: 9.01218315,
    boil: 2742,
    category: "alkaline earth metal",
    color: null,
    density: 1.85,
    discovered_by: "Louis Nicolas Vauquelin",
    melt: 1560,
    molar_heat: 16.443,
    named_by: null,
    number: 4,
    period: 2,
    phase: "Solid",
    source: "https://en.wikipedia.org/wiki/Beryllium",
    spectral_img: null,
    summary:
      "Beryllium is a chemical element with symbol Be and atomic number 4. It is created through stellar nucleosynthesis and is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements in minerals.",
    symbol: "Be",
    xpos: 2,
    ypos: 2,
    shells: [2, 2]
  },
  {
    name: "Boron",
    appearance: "black-brown",
    atomic_mass: 10.81,
    boil: 4200,
    category: "metalloid",
    color: null,
    density: 2.08,
    discovered_by: "Joseph Louis Gay-Lussac",
    melt: 2349,
    molar_heat: 11.087,
    named_by: null,
    number: 5,
    period: 2,
    phase: "Solid",
    source: "https://en.wikipedia.org/wiki/Boron",
    spectral_img: null,
    summary:
      "Boron is a metalloid chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in both the Solar system and the Earth's crust. Boron is concentrated on Earth by the water-solubility of its more common naturally occurring compounds, the borate minerals.",
    symbol: "B",
    xpos: 13,
    ypos: 2,
    shells: [2, 3]
  },
  {
    name: "Carbon",
    appearance: null,
    atomic_mass: 12.011,
    boil: null,
    category: "polyatomic nonmetal",
    color: null,
    density: 1.821,
    discovered_by: "Ancient Egypt",
    melt: null,
    molar_heat: 8.517,
    named_by: null,
    number: 6,
    period: 2,
    phase: "Solid",
    source: "https://en.wikipedia.org/wiki/Carbon",
    spectral_img: "https://en.wikipedia.org/wiki/File:Carbon_Spectra.jpg",
    summary:
      'Carbon (from Latin:carbo "coal") is a chemical element with symbol C and atomic number 6. On the periodic table, it is the first (row 2) of six elements in column (group) 14, which have in common the composition of their outer electron shell. It is nonmetallic and tetravalent\u2014making four electrons available to form covalent chemical bonds.',
    symbol: "C",
    xpos: 14,
    ypos: 2,
    shells: [2, 4]
  },
  {
    name: "Nitrogen",
    appearance: "colorless gas, liquid or solid",
    atomic_mass: 14.007,
    boil: 77.355,
    category: "diatomic nonmetal",
    color: null,
    density: 1.251,
    discovered_by: "Daniel Rutherford",
    melt: 63.15,
    molar_heat: null,
    named_by: "Jean-Antoine Chaptal",
    number: 7,
    period: 2,
    phase: "Gas",
    source: "https://en.wikipedia.org/wiki/Nitrogen",
    spectral_img: "https://en.wikipedia.org/wiki/File:Nitrogen_Spectra.jpg",
    summary:
      "Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest pnictogen and at room temperature, it is a transparent, odorless diatomic gas. Nitrogen is a common element in the universe, estimated at about seventh in total abundance in the Milky Way and the Solar System.",
    symbol: "N",
    xpos: 15,
    ypos: 2,
    shells: [2, 5]
  },
  {
    name: "Oxygen",
    appearance: null,
    atomic_mass: 15.999,
    boil: 90.188,
    category: "diatomic nonmetal",
    color: null,
    density: 1.429,
    discovered_by: "Carl Wilhelm Scheele",
    melt: 54.36,
    molar_heat: null,
    named_by: "Antoine Lavoisier",
    number: 8,
    period: 2,
    phase: "Gas",
    source: "https://en.wikipedia.org/wiki/Oxygen",
    spectral_img: "https://en.wikipedia.org/wiki/File:Oxygen_spectre.jpg",
    summary:
      "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.",
    symbol: "O",
    xpos: 16,
    ypos: 2,
    shells: [2, 6]
  },
  {
    name: "Fluorine",
    appearance: null,
    atomic_mass: 18.9984031636,
    boil: 85.03,
    category: "diatomic nonmetal",
    color: null,
    density: 1.696,
    discovered_by: "Andr\u00e9-Marie Amp\u00e8re",
    melt: 53.48,
    molar_heat: null,
    named_by: "Humphry Davy",
    number: 9,
    period: 2,
    phase: "Gas",
    source: "https://en.wikipedia.org/wiki/Fluorine",
    spectral_img: null,
    summary:
      "Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive:almost all other elements, including some noble gases, form compounds with fluorine.",
    symbol: "F",
    xpos: 17,
    ypos: 2,
    shells: [2, 7]
  },
  {
    name: "Neon",
    appearance:
      "colorless gas exhibiting an orange-red glow when placed in a high voltage electric field",
    atomic_mass: 20.17976,
    boil: 27.104,
    category: "noble gas",
    color: null,
    density: 0.9002,
    discovered_by: "Morris Travers",
    melt: 24.56,
    molar_heat: null,
    named_by: null,
    number: 10,
    period: 2,
    phase: "Gas",
    source: "https://en.wikipedia.org/wiki/Neon",
    spectral_img: "https://en.wikipedia.org/wiki/File:Neon_spectra.jpg",
    summary:
      "Neon is a chemical element with symbol Ne and atomic number 10. It is in group 18 (noble gases) of the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.",
    symbol: "Ne",
    xpos: 18,
    ypos: 2,
    shells: [2, 8]
  },
  {
    name: "Sodium",
    appearance: "silvery white metallic",
    atomic_mass: 22.989769282,
    boil: 1156.09,
    category: "alkali metal",
    color: null,
    density: 0.968,
    discovered_by: "Humphry Davy",
    melt: 370.944,
    molar_heat: 28.23,
    named_by: null,
    number: 11,
    period: 3,
    phase: "Solid",
    source: "https://en.wikipedia.org/wiki/Sodium",
    spectral_img: "https://en.wikipedia.org/wiki/File:Sodium_Spectra.jpg",
    summary:
      "Sodium /\u02c8so\u028adi\u0259m/ is a chemical element with symbol Na (from Ancient Greek \u039d\u03ac\u03c4\u03c1\u03b9\u03bf) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.",
    symbol: "Na",
    xpos: 1,
    ypos: 3,
    shells: [2, 8, 1]
  },
  {
    name: "Magnesium",
    appearance: "shiny grey solid",
    atomic_mass: 24.305,
    boil: 1363,
    category: "alkaline earth metal",
    color: null,
    density: 1.738,
    discovered_by: "Joseph Black",
    melt: 923,
    molar_heat: 24.869,
    named_by: null,
    number: 12,
    period: 3,
    phase: "Solid",
    source: "https://en.wikipedia.org/wiki/Magnesium",
    spectral_img: "https://en.wikipedia.org/wiki/File:Magnesium_Spectra.jpg",
    summary:
      "Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (Group 2, or alkaline earth metals) of the periodic table:they each have the same electron configuration in their outer electron shell producing a similar crystal structure. Magnesium is the ninth most abundant element in the universe.",
    symbol: "Mg",
    xpos: 2,
    ypos: 3,
    shells: [2, 8, 2]
  },
  {
    name: "Aluminium",
    appearance: "silvery gray metallic",
    atomic_mass: 26.98153857,
    boil: 2743,
    category: "post-transition metal",
    color: null,
    density: 2.7,
    discovered_by: null,
    melt: 933.47,
    molar_heat: 24.2,
    named_by: "Humphry Davy",
    number: 13,
    period: 3,
    phase: "Solid",
    source: "https://en.wikipedia.org/wiki/Aluminium",
    spectral_img: null,
    summary:
      "Aluminium (or aluminum; see different endings) is a chemical element in the boron group with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic, ductile metal. Aluminium is the third most abundant element (after oxygen and silicon), and the most abundant metal, in the Earth's crust.",
    symbol: "Al",
    xpos: 13,
    ypos: 3,
    shells: [2, 8, 3]
  },
  {
    name: "Silicon",
    appearance: "crystalline, reflective with bluish-tinged faces",
    atomic_mass: 28.085,
    boil: 3538,
    category: "metalloid",
    color: null,
    density: 2.329,
    discovered_by: "Jöns Jacob Berzelius",
    melt: 1687,
    molar_heat: 19.789,
    named_by: "Thomas Thomson (chemist)",
    number: 14,
    period: 3,
    phase: "Solid",
    source: "https://en.wikipedia.org/wiki/Silicon",
    spectral_img: "https://en.wikipedia.org/wiki/File:Silicon_Spectra.jpg",
    summary:
      "Silicon is a chemical element with symbol Si and atomic number 14. It is a tetravalent metalloid, more reactive than germanium, the metalloid directly below it in the table. Controversy about silicon's character dates to its discovery.",
    symbol: "Si",
    xpos: 14,
    ypos: 3,
    shells: [2, 8, 4]
  },
  {
    name: "Phosphorus",
    appearance: "colourless, waxy white, yellow, scarlet, red, violet, black",
    atomic_mass: 30.9737619985,
    boil: null,
    category: "polyatomic nonmetal",
    color: null,
    density: 1.823,
    discovered_by: "Hennig Brand",
    melt: null,
    molar_heat: 23.824,
    named_by: null,
    number: 15,
    period: 3,
    phase: "Solid",
    source: "https://en.wikipedia.org/wiki/Phosphorus",
    spectral_img: null,
    summary:
      "Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms—white phosphorus and red phosphorus—but due to its high reactivity, phosphorus is never found as a free element on Earth. Instead phosphorus-containing minerals are almost always present in their maximally oxidised state, as inorganic phosphate rocks.",
    symbol: "P",
    xpos: 15,
    ypos: 3,
    shells: [2, 8, 5]
  },
  {
    name: "Sulfur",
    appearance: "lemon yellow sintered microcrystals",
    atomic_mass: 32.06,
    boil: 717.8,
    category: "polyatomic nonmetal",
    color: null,
    density: 2.07,
    discovered_by: "Ancient china",
    melt: 388.36,
    molar_heat: 22.75,
    named_by: null,
    number: 16,
    period: 3,
    phase: "Solid",
    source: "https://en.wikipedia.org/wiki/Sulfur",
    spectral_img: "https://en.wikipedia.org/wiki/File:Sulfur_Spectrum.jpg",
    summary:
      "Sulfur or sulphur (see spelling differences) is a chemical element with symbol S and atomic number 16. It is an abundant, multivalent non-metal. Under normal conditions, sulfur atoms form cyclic octatomic molecules with chemical formula S8.",
    symbol: "S",
    xpos: 16,
    ypos: 3,
    shells: [2, 8, 6]
  },
  {
    name: "Chlorine",
    appearance: "pale yellow-green gas",
    atomic_mass: 35.45,
    boil: 239.11,
    category: "diatomic nonmetal",
    color: null,
    density: 3.2,
    discovered_by: "Carl Wilhelm Scheele",
    melt: 171.6,
    molar_heat: null,
    named_by: null,
    number: 17,
    period: 3,
    phase: "Gas",
    source: "https://en.wikipedia.org/wiki/Chlorine",
    spectral_img:
      "https://en.wikipedia.org/wiki/File:Chlorine_spectrum_visible.png",
    summary:
      "Chlorine is a chemical element with symbol Cl and atomic number 17. It also has a relative atomic mass of 35.5. Chlorine is in the halogen group (17) and is the second lightest halogen following fluorine.",
    symbol: "Cl",
    xpos: 17,
    ypos: 3,
    shells: [2, 8, 7]
  },
  {
    name: "Argon",
    appearance:
      "colorless gas exhibiting a lilac/violet glow when placed in a high voltage electric field",
    atomic_mass: 39.9481,
    boil: 87.302,
    category: "noble gas",
    color: null,
    density: 1.784,
    discovered_by: "Lord Rayleigh",
    melt: 83.81,
    molar_heat: null,
    named_by: null,
    number: 18,
    period: 3,
    phase: "Gas",
    source: "https://en.wikipedia.org/wiki/Argon",
    spectral_img: "https://en.wikipedia.org/wiki/File:Argon_Spectrum.png",
    summary:
      "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third most common gas in the Earth's atmosphere, at 0.934% (9,340 ppmv), making it over twice as abundant as the next most common atmospheric gas, water vapor (which averages about 4000 ppmv, but varies greatly), and 23 times as abundant as the next most common non-condensing atmospheric gas, carbon dioxide (400 ppmv), and more than 500 times as abundant as the next most common noble gas, neon (18 ppmv).",
    symbol: "Ar",
    xpos: 18,
    ypos: 3,
    shells: [2, 8, 8]
  }
];

export default elements;
