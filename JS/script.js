  async function getPost(){
      const htmlLeft = document.getElementById('left-section');
      let outputLeft = "";
      const htmlCenter = document.getElementById('center-section');
      let outputCenter = "";
      const htmlRight = document.getElementById('right-section');
      let outputRight = "";
      let linktx = "Continue reading here";
      let imgalt = "image not available";
       
      const api = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${'229d43347db64925ac4249aacfd8559b'}`;
      const responce = await fetch(api);
      const data =  await responce.json();
  
   for(let i=0; i <= 6; i++){ 
       /* outputLeft = `
        <h3 class = 'article-header'>${data.articles[i].title}</h3>
        <h6>${data.articles[i].publishedAt}</h6>
        <img src = "${data.articles[i].urlToImage}" alt = "${imgalt}" height =50px> <br>
        <p>${data.articles[i].content}</p><br>
        <h5>${data.articles[i].description}</h5><br><br>
        <a href = '${ data.articles[i].url} target = "_blank">'${linktx}'</a>
     `
   }*/
     outputLeft += "<h3 class = 'article-header'>" + data.articles[i].title;
    "<h6>" + data.articles[i].publishedAt ;
    outputLeft += "<img src = '" + data.articles[i].urlToImage + "' " + "alt='" + imgalt + "'>";
    outputLeft += "<br>" +  "<h5>" + data.articles[i].description + "<br>" +
    "<p>" + data.articles[i].content + "<br>";
    outputLeft += "<br>"+ "<a href = '" + data.articles[i].url +"' " + "target='" + "_blank"+ "'>"+ linktx +'</a>'; 
   } 

     htmlLeft.innerHTML = outputLeft;
    
   for(let i = 7; i<=12; i++){
   outputCenter += "<h3 class = 'article-header'>" + data.articles[i].title +
   "<h6>" + data.articles[i].publishedAt ;
   outputCenter += "<img src = '" + data.articles[i].urlToImage + "' " + "alt='" + imgalt + "'>";
   outputCenter +=  "<h5>" + data.articles[i].description + "<br>" +
   "<p>" + data.articles[i].content + "<br>" ;
   outputCenter += "<br>"+ "<a href = '" + data.articles[i].url +"' " + "target='" + "_blank"+ "'>"+ linktx +'</a>'; 

   }

     htmlCenter.innerHTML = outputCenter;

    for (let i = 13; i <= 18; i++){
      outputRight += "<h3 class = 'article-header'>" + data.articles[i].title +
        "<h6>" + data.articles[i].publishedAt;
      outputRight += "<img src = '" + data.articles[i].urlToImage + "' " + "alt='" + imgalt + "'>";
      outputRight += "<h5>" + data.articles[i].description + "<br>" +
        "<p>" + data.articles[i].content + "<br>";
      outputRight += "<br>" + "<a href = '" + data.articles[i].url + "' " + "target='" + "_blank" + "'>" + linktx + '</a>'; 
    }
    htmlRight.innerHTML = outputRight ; 
   }
  
   getPost();
