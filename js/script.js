let letters = [];

function renderCards(){
  let cardSection = document.getElementById('bundeslaender');
  cardSection.innerHTML = '';

  for (let i = 0; i < bundeslaender.length; i++) {
    let bundeslaenderJson = bundeslaender[i];
    // let url = bundeslaenderJson.url;

    cardSection.innerHTML += generateBundeslandCardHtml(bundeslaenderJson);
    let letter = selectFirstLetterAndUpperCase(bundeslaenderJson);
    renderFilter(letter);
  }
}

function selectFirstLetterAndUpperCase(bundeslaenderJson){
  return bundeslaenderJson.name.charAt(0).toUpperCase();
}

/**Bundeslaender Card template
 * 
 * @param {object} bundeslaenderJson - Object form Json Bundeslaender
 * @param {string} url - Bundeslaender url as string
 * @returns 
 */
function generateBundeslandCardHtml(bundeslaenderJson){
  return /*html*/`
  <div onclick="openLink('${bundeslaenderJson.url}')" class="b-card">
    <p class="bundesland-headline">${bundeslaenderJson.name}</p>
    <p>${bundeslaenderJson.population}</p>
  </div>
`
}

/**Generate link to another Webside
 * 
 * @param {string} url 
 */
function openLink(url){
    window.location.href = url;
}

/**Check first letter for excist
 * 
 * @param {string} letter - first letter from bundeslaender.name
 */
function renderFilter(letter){
  let filter = document.getElementById('search');
  let excistLetter = letters.indexOf(letter);

  if(excistLetter < 0){
    letters.push(letter);
    filter.innerHTML += generateFilterHtml(letter);
  }
}

function generateFilterHtml(letter){
  return /*html*/`
  <div id="${letter}" onclick="filter('${letter}'), selectFilter('${letter}')" class="letter">
    <span>${letter}</span> 
  </div>
  `;
}

function filter(letter){
  let cardSection = document.getElementById('bundeslaender');
  cardSection.innerHTML = '';

 for (let index = 0; index < bundeslaender.length; index++) {
  let ArrayLetter = bundeslaender[index].name.charAt(0).toUpperCase();
  let bundeslaenderJson = bundeslaender[index];

  if(ArrayLetter == letter){
    cardSection.innerHTML += generateBundeslandCardHtml(bundeslaenderJson);
  }
 }
}

function selectFilter(id){
  let olderSelection = document.querySelector(".f-bold");
  olderSelection.classList.remove('f-bold');
  let activSelection = document.getElementById(id);
  activSelection.classList.add('f-bold');
}
