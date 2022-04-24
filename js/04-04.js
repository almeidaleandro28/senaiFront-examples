function loadRegions(){
  const request = new XMLHttpRequest();
  request.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/regioes");
  request.onload = function() {
    const response = JSON.parse( this.responseText);
    let options = "";
    for( let i in response ) {
      options += `<option value=${response[i].id}>${response[i].nome}</option>`
    }
    
    document.getElementById("sel_regiao").innerHTML = options;
  }
  request.send();
}

function loadUF( region ) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${region}/estados?orderBy=nome`);
  request.onload = function() {
    const response = JSON.parse( this.responseText );
    let options = "";
    for( let i in response ) {
      options += `<option value=${response[i].id}>${response[i].nome}</option>`;
    }
    document.getElementById("sel_uf").innerHTML = options;
  }
  request.send();
}

function loaCounty( county){
  const request = new XMLHttpRequest();
  request.open("GET",`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${county}/municipios`);
  request.onload = function() {
    const response = JSON.parse( this.responseText );
    let options = "";
    for( let i in response ) {
      options += `<option value=${response[i].id}>${response[i].nome}</option>`;
    }
    document.getElementById("sel_mun").innerHTML = options;
  }
  request.send();
}

loadRegions()