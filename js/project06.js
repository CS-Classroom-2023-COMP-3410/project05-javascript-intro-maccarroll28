const elements = [
    // Period 1
    { number: 1, symbol: "H", name: "Hydrogen", group: "Nonmetals", position: "1 / 1 / 2 / 2" },
    { number: 2, symbol: "He", name: "Helium", group: "Noble gases", position: "1 / 18 / 2 / 19" },
  
    // Period 2
    { number: 3, symbol: "Li", name: "Lithium", group: "Alkali metals", position: "2 / 1 / 3 / 2" },
    { number: 4, symbol: "Be", name: "Beryllium", group: "Alkaline-earth metals", position: "2 / 2 / 3 / 3" },
    { number: 5, symbol: "B", name: "Boron", group: "Metalloids", position: "2 / 13 / 3 / 14" },
    { number: 6, symbol: "C", name: "Carbon", group: "Nonmetals", position: "2 / 14 / 3 / 15" },
    { number: 7, symbol: "N", name: "Nitrogen", group: "Nonmetals", position: "2 / 15 / 3 / 16" },
    { number: 8, symbol: "O", name: "Oxygen", group: "Nonmetals", position: "2 / 16 / 3 / 17" },
    { number: 9, symbol: "F", name: "Fluorine", group: "Halogens", position: "2 / 17 / 3 / 18" },
    { number: 10, symbol: "Ne", name: "Neon", group: "Noble gases", position: "2 / 18 / 3 / 19" },
  
    // Period 3
    { number: 11, symbol: "Na", name: "Sodium", group: "Alkali metals", position: "3 / 1 / 4 / 2" },
    { number: 12, symbol: "Mg", name: "Magnesium", group: "Alkaline-earth metals", position: "3 / 2 / 4 / 3" },
    { number: 13, symbol: "Al", name: "Aluminum", group: "Post-transition metals", position: "3 / 13 / 4 / 14" },
    { number: 14, symbol: "Si", name: "Silicon", group: "Metalloids", position: "3 / 14 / 4 / 15" },
    { number: 15, symbol: "P", name: "Phosphorus", group: "Nonmetals", position: "3 / 15 / 4 / 16" },
    { number: 16, symbol: "S", name: "Sulfur", group: "Nonmetals", position: "3 / 16 / 4 / 17" },
    { number: 17, symbol: "Cl", name: "Chlorine", group: "Halogens", position: "3 / 17 / 4 / 18" },
    { number: 18, symbol: "Ar", name: "Argon", group: "Noble gases", position: "3 / 18 / 4 / 19" },
  
    // Period 4
    { number: 19, symbol: "K", name: "Potassium", group: "Alkali metals", position: "4 / 1 / 5 / 2" },
    { number: 20, symbol: "Ca", name: "Calcium", group: "Alkaline-earth metals", position: "4 / 2 / 5 / 3" },
    { number: 21, symbol: "Sc", name: "Scandium", group: "Transition metals", position: "4 / 3 / 5 / 4" },
    { number: 22, symbol: "Ti", name: "Titanium", group: "Transition metals", position: "4 / 4 / 5 / 5" },
    { number: 23, symbol: "V", name: "Vanadium", group: "Transition metals", position: "4 / 5 / 5 / 6" },
    { number: 24, symbol: "Cr", name: "Chromium", group: "Transition metals", position: "4 / 6 / 5 / 7" },
    { number: 25, symbol: "Mn", name: "Manganese", group: "Transition metals", position: "4 / 7 / 5 / 8" },
    { number: 26, symbol: "Fe", name: "Iron", group: "Transition metals", position: "4 / 8 / 5 / 9" },
    { number: 27, symbol: "Co", name: "Cobalt", group: "Transition metals", position: "4 / 9 / 5 / 10" },
    { number: 28, symbol: "Ni", name: "Nickel", group: "Transition metals", position: "4 / 10 / 5 / 11" },
    { number: 29, symbol: "Cu", name: "Copper", group: "Transition metals", position: "4 / 11 / 5 / 12" },
    { number: 30, symbol: "Zn", name: "Zinc", group: "Transition metals", position: "4 / 12 / 5 / 13" },
    { number: 31, symbol: "Ga", name: "Gallium", group: "Post-transition metals", position: "4 / 13 / 5 / 14" },
    { number: 32, symbol: "Ge", name: "Germanium", group: "Metalloids", position: "4 / 14 / 5 / 15" },
    { number: 33, symbol: "As", name: "Arsenic", group: "Metalloids", position: "4 / 15 / 5 / 16" },
    { number: 34, symbol: "Se", name: "Selenium", group: "Nonmetals", position: "4 / 16 / 5 / 17" },
    { number: 35, symbol: "Br", name: "Bromine", group: "Halogens", position: "4 / 17 / 5 / 18" },
    { number: 36, symbol: "Kr", name: "Krypton", group: "Noble gases", position: "4 / 18 / 5 / 19" },
  
    // Period 5
    { number: 37, symbol: "Rb", name: "Rubidium", group: "Alkali metals", position: "5 / 1 / 6 / 2" },
    { number: 38, symbol: "Sr", name: "Strontium", group: "Alkaline-earth metals", position: "5 / 2 / 6 / 3" },
    { number: 39, symbol: "Y", name: "Yttrium", group: "Transition metals", position: "5 / 3 / 6 / 4" },
    { number: 40, symbol: "Zr", name: "Zirconium", group: "Transition metals", position: "5 / 4 / 6 / 5" },
    { number: 41, symbol: "Nb", name: "Niobium", group: "Transition metals", position: "5 / 5 / 6 / 6" },
    { number: 42, symbol: "Mo", name: "Molybdenum", group: "Transition metals", position: "5 / 6 / 6 / 7" },
    { number: 43, symbol: "Tc", name: "Technetium", group: "Transition metals", position: "5 / 7 / 6 / 8" },
    { number: 44, symbol: "Ru", name: "Ruthenium", group: "Transition metals", position: "5 / 8 / 6 / 9" },
    { number: 45, symbol: "Rh", name: "Rhodium", group: "Transition metals", position: "5 / 9 / 6 / 10" },
    { number: 46, symbol: "Pd", name: "Palladium", group: "Transition metals", position: "5 / 10 / 6 / 11" },
    { number: 47, symbol: "Ag", name: "Silver", group: "Transition metals", position: "5 / 11 / 6 / 12" },
    { number: 48, symbol: "Cd", name: "Cadmium", group: "Transition metals", position: "5 / 12 / 6 / 13" },
    { number: 49, symbol: "In", name: "Indium", group: "Post-transition metals", position: "5 / 13 / 6 / 14" },
    { number: 50, symbol: "Sn", name: "Tin", group: "Post-transition metals", position: "5 / 14 / 6 / 15" },
    { number: 51, symbol: "Sb", name: "Antimony", group: "Metalloids", position: "5 / 15 / 6 / 16" },
    { number: 52, symbol: "Te", name: "Tellurium", group: "Metalloids", position: "5 / 16 / 6 / 17" },
    { number: 53, symbol: "I", name: "Iodine", group: "Halogens", position: "5 / 17 / 6 / 18" },
    { number: 54, symbol: "Xe", name: "Xenon", group: "Noble gases", position: "5 / 18 / 6 / 19" },
  
    // Period 6
    { number: 55, symbol: "Cs", name: "Cesium", group: "Alkali metals", position: "6 / 1 / 7 / 2" },
    { number: 56, symbol: "Ba", name: "Barium", group: "Alkaline-earth metals", position: "6 / 2 / 7 / 3" },
    { number: 57, symbol: "La", name: "Lanthanum", group: "Lanthanides", position: "9 / 4 / 10 / 5" },
    { number: 58, symbol: "Ce", name: "Cerium", group: "Lanthanides", position: "9 / 5 / 10 / 6" },
    { number: 59, symbol: "Pr", name: "Praseodymium", group: "Lanthanides", position: "9 / 6 / 10 / 7" },
    { number: 60, symbol: "Nd", name: "Neodymium", group: "Lanthanides", position: "9 / 7 / 10 / 8" },
    { number: 61, symbol: "Pm", name: "Promethium", group: "Lanthanides", position: "9 / 8 / 10 / 9" },
    { number: 62, symbol: "Sm", name: "Samarium", group: "Lanthanides", position: "9 / 9 / 10 / 10" },
    { number: 63, symbol: "Eu", name: "Europium", group: "Lanthanides", position: "9 / 10 / 10 / 11" },
    { number: 64, symbol: "Gd", name: "Gadolinium", group: "Lanthanides", position: "9 / 11 / 10 / 12" },
    { number: 65, symbol: "Tb", name: "Terbium", group: "Lanthanides", position: "9 / 12 / 10 / 13" },
    { number: 66, symbol: "Dy", name: "Dysprosium", group: "Lanthanides", position: "9 / 13 / 10 / 14" },
    { number: 67, symbol: "Ho", name: "Holmium", group: "Lanthanides", position: "9 / 14 / 10 / 15" },
    { number: 68, symbol: "Er", name: "Erbium", group: "Lanthanides", position: "9 / 15 / 10 / 16" },
    { number: 69, symbol: "Tm", name: "Thulium", group: "Lanthanides", position: "9 / 16 / 10 / 17" },
    { number: 70, symbol: "Yb", name: "Ytterbium", group: "Lanthanides", position: "9 / 17 / 10 / 18" },
    { number: 71, symbol: "Lu", name: "Lutetium", group: "Lanthanides", position: "9 / 18 / 10 / 19" },
    { number: 72, symbol: "Hf", name: "Hafnium", group: "Transition metals", position: "6 / 4 / 7 / 5" },
    { number: 73, symbol: "Ta", name: "Tantalum", group: "Transition metals", position: "6 / 5 / 7 / 6" },
    { number: 74, symbol: "W", name: "Tungsten", group: "Transition metals", position: "6 / 6 / 7 / 7" },
    { number: 75, symbol: "Re", name: "Rhenium", group: "Transition metals", position: "6 / 7 / 7 / 8" },
    { number: 76, symbol: "Os", name: "Osmium", group: "Transition metals", position: "6 / 8 / 7 / 9" },
    { number: 77, symbol: "Ir", name: "Iridium", group: "Transition metals", position: "6 / 9 / 7 / 10" },
    { number: 78, symbol: "Pt", name: "Platinum", group: "Transition metals", position: "6 / 10 / 7 / 11" },
    { number: 79, symbol: "Au", name: "Gold", group: "Transition metals", position: "6 / 11 / 7 / 12" },
    { number: 80, symbol: "Hg", name: "Mercury", group: "Transition metals", position: "6 / 12 / 7 / 13" },
    { number: 81, symbol: "Tl", name: "Thallium", group: "Post-transition metals", position: "6 / 13 / 7 / 14" },
    { number: 82, symbol: "Pb", name: "Lead", group: "Post-transition metals", position: "6 / 14 / 7 / 15" },
    { number: 83, symbol: "Bi", name: "Bismuth", group: "Post-transition metals", position: "6 / 15 / 7 / 16" },
    { number: 84, symbol: "Po", name: "Polonium", group: "Metalloids", position: "6 / 16 / 7 / 17" },
    { number: 85, symbol: "At", name: "Astatine", group: "Halogens", position: "6 / 17 / 7 / 18" },
    { number: 86, symbol: "Rn", name: "Radon", group: "Noble gases", position: "6 / 18 / 7 / 19" },
  
    // Period 7
    { number: 87, symbol: "Fr", name: "Francium", group: "Alkali metals", position: "7 / 1 / 8 / 2" },
    { number: 88, symbol: "Ra", name: "Radium", group: "Alkaline-earth metals", position: "7 / 2 / 8 / 3" },
    { number: 89, symbol: "Ac", name: "Actinium", group: "Actinides", position: "10 / 4 / 11 / 5" },
    { number: 90, symbol: "Th", name: "Thorium", group: "Actinides", position: "10 / 5 / 11 / 6" },
    { number: 91, symbol: "Pa", name: "Protactinium", group: "Actinides", position: "10 / 6 / 11 / 7" },
    { number: 92, symbol: "U", name: "Uranium", group: "Actinides", position: "10 / 7 / 11 / 8" },
    { number: 93, symbol: "Np", name: "Neptunium", group: "Actinides", position: "10 / 8 / 11 / 9" },
    { number: 94, symbol: "Pu", name: "Plutonium", group: "Actinides", position: "10 / 9 / 11 / 10" },
    { number: 95, symbol: "Am", name: "Americium", group: "Actinides", position: "10 / 10 / 11 / 11" },
    { number: 96, symbol: "Cm", name: "Curium", group: "Actinides", position: "10 / 11 / 11 / 12" },
    { number: 97, symbol: "Bk", name: "Berkelium", group: "Actinides", position: "10 / 12 / 11 / 13" },
    { number: 98, symbol: "Cf", name: "Californium", group: "Actinides", position: "10 / 13 / 11 / 14" },
    { number: 99, symbol: "Es", name: "Einsteinium", group: "Actinides", position: "10 / 14 / 11 / 15" },
    { number: 100, symbol: "Fm", name: "Fermium", group: "Actinides", position: "10 / 15 / 11 / 16" },
    { number: 101, symbol: "Md", name: "Mendelevium", group: "Actinides", position: "10 / 16 / 11 / 17" },
    { number: 102, symbol: "No", name: "Nobelium", group: "Actinides", position: "10 / 17 / 11 / 18" },
    { number: 103, symbol: "Lr", name: "Lawrencium", group: "Actinides", position: "10 / 18 / 11 / 19" },
    { number: 104, symbol: "Rf", name: "Rutherfordium", group: "Transition metals", position: "7 / 4 / 8 / 5" },
    { number: 105, symbol: "Db", name: "Dubnium", group: "Transition metals", position: "7 / 5 / 8 / 6" },
    { number: 106, symbol: "Sg", name: "Seaborgium", group: "Transition metals", position: "7 / 6 / 8 / 7" },
    { number: 107, symbol: "Bh", name: "Bohrium", group: "Transition metals", position: "7 / 7 / 8 / 8" },
    { number: 108, symbol: "Hs", name: "Hassium", group: "Transition metals", position: "7 / 8 / 8 / 9" },
    { number: 109, symbol: "Mt", name: "Meitnerium", group: "Unknown", position: "7 / 9 / 8 / 10" },
    { number: 110, symbol: "Ds", name: "Darmstadtium", group: "Unknown", position: "7 / 10 / 8 / 11" },
    { number: 111, symbol: "Rg", name: "Roentgenium", group: "Unknown", position: "7 / 11 / 8 / 12" },
    { number: 112, symbol: "Cn", name: "Copernicium", group: "Unknown", position: "7 / 12 / 8 / 13" },
    { number: 113, symbol: "Nh", name: "Nihonium", group: "Post-transition metals", position: "7 / 13 / 8 / 14" },
    { number: 114, symbol: "Fl", name: "Flerovium", group: "Post-transition metals", position: "7 / 14 / 8 / 15" },
    { number: 115, symbol: "Mc", name: "Moscovium", group: "Post-transition metals", position: "7 / 15 / 8 / 16" },
    { number: 116, symbol: "Lv", name: "Livermorium", group: "Post-transition metals", position: "7 / 16 / 8 / 17" },
    { number: 117, symbol: "Ts", name: "Tennessine", group: "Halogens", position: "7 / 17 / 8 / 18" },
    { number: 118, symbol: "Og", name: "Oganesson", group: "Noble gases", position: "7 / 18 / 8 / 19" },
  ];
  
  // DOM and rendering logic remains unchanged
  const table = document.getElementById("periodicTable");
  const details = document.getElementById("details");
  const searchBar = document.getElementById("searchBar");
  
  function renderTable() {
    table.innerHTML = "";
    elements.forEach((el) => {
      const div = document.createElement("div");
      div.className = "element";
      div.dataset.number = el.number;
      div.dataset.group = el.group;
      div.style.gridArea = el.position;
      div.innerHTML = `<strong>${el.symbol}</strong><br>${el.number}`;
      div.addEventListener("click", () => showDetails(el));
      table.appendChild(div);
    });
  }
  
  function showDetails(element) {
    details.innerHTML = `
      <strong>Name:</strong> ${element.name}<br>
      <strong>Symbol:</strong> ${element.symbol}<br>
      <strong>Atomic Number:</strong> ${element.number}<br>
      <strong>Group:</strong> ${element.group}
    `;
    highlightElement(element);
    highlightGroup(element.group);
  }
  
  function highlightElement(element) {
    document.querySelectorAll(".element").forEach((el) => {
      el.classList.remove("highlight");
      if (parseInt(el.dataset.number, 10) === element.number) {
        el.classList.add("highlight");
      }
    });
  }
  
  function highlightGroup(group) {
    document.querySelectorAll(".element").forEach((el) => {
      el.classList.remove("group-highlight");
      if (el.dataset.group === group) {
        el.classList.add("group-highlight");
      }
    });
  }
  
  searchBar.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    document.querySelectorAll(".element").forEach((el) => {
      const name = elements.find((ele) => ele.number == el.dataset.number)?.name.toLowerCase() || "";
      const symbol = el.querySelector("strong").textContent.toLowerCase();
      const number = el.dataset.number;
  
      if (
        name.includes(searchValue) ||
        symbol.includes(searchValue) ||
        number.includes(searchValue)
      ) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });
  });
  
  renderTable();
  