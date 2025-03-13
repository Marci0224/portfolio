const url="https://raw.githubusercontent.com/Marci0224/json-portfolio/refs/heads/main/portfolio";

getData(url,renderCard)
function renderCard(data){
  console.log(data);
  data.forEach(obj => {
    document.getElementById("work").innerHTML+=`
      <div class="munkak">
        <img class="munka_kep" src="${obj.photo_url}" alt="${obj.title}">
        <div class="infok">
          <h1 id="nev">${obj.title}</h1>
          <hr>
          <p>Témakörök:</p>
          <ul id="temak">
            
          </ul>
          <a href="${obj['repo-link']}">Github Link</a>
          <a href="${obj['site-link']}">Weboldal link</a>
        </div>
      </div>
    `
    temak=obj.topics
    console.log(temak);
    temak.forEach(th=>{
      console.log(th);
      
      document.querySelector("#temak").innerHTML+=`
        <li>${th}</li>
      `
    })
  })
  
}
