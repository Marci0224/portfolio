const url="https://raw.githubusercontent.com/Marci0224/json-portfolio/refs/heads/main/portfolio";

getData(url,renderCard)
function renderCard(data){
  console.log(data);
  data.forEach(obj => {
    let temak=obj.topics
    let themes = "";
    console.log(temak);
    temak.forEach(th=>{
      console.log(th);
      themes+=`<li>${th}</li>`
    })
    document.getElementById("work").innerHTML+=`
      <div class="munkak">
        <img class="munka_kep" src="${obj.photo_url}" alt="${obj.title}">
        <div class="infok">
          <h1 id="nev">${obj.title}</h1>
          <hr>
          <p>Témakörök:</p>
          <ul id="temak">
            ${themes}
          </ul>
          <div class="links">
            <a href="${obj['repo-link']}" target="_blank">Github Link</a>
            <a href="${obj['site-link']}" target="_blank">Weboldal link</a>
          </div>
        </div>
      </div>
    `
  })
  
}
