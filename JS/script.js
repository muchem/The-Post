  async function getPost(){
      const htmlLeft = document.getElementById('left-section');
      let outputLeft = "";
      const htmlRight = document.getElementById('Right-section');
      let outputRight = "";
      const other = document.getElementById('other-section');
      let outputother = "";
      let linktx = "Continue reading here";
      let imgalt = "image not available";
       
      const api = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${'229d43347db64925ac4249aacfd8559b'}`;
      const responce = await fetch(api);
      const data =  await responce.json();
  
   for(let i=0; i <= 6; i++){ 
     outputLeft += "<h3 class = 'article-header'>" + data.articles[i].title +
    "<h6>" + data.articles[i].publishedAt ;
    outputLeft += "<img src = '" + data.articles[i].urlToImage + "' " + "alt='" + imgalt + "'>";
    outputLeft += "<br>" +  "<h5>" + data.articles[i].description + "<br>" +
    "<p>" + data.articles[i].content + "<br>";
    outputLeft += "<br>"+ "<a href = '" + data.articles[i].url +"' " + "target='" + "_blank"+ "'>"+ linktx +'</a>'; 
   }

     htmlLeft.innerHTML = outputLeft;
    
   for(let i = 7; i<=12; i++){
   outputRight += "<h3 class = 'article-header'>" + data.articles[i].title +
   "<h6>" + data.articles[i].publishedAt ;
   outputRight += "<img src = '" + data.articles[i].urlToImage + "' " + "alt='" + imgalt + "'>";
   outputRight +=  "<h5>" + data.articles[i].description + "<br>" +
   "<p>" + data.articles[i].content + "<br>" ;
   outputRight += "<br>"+ "<a href = '" + data.articles[i].url +"' " + "target='" + "_blank"+ "'>"+ linktx +'</a>'; 

   }

     htmlRight.innerHTML = outputRight;

    for (let i = 13; i <= 18; i++){
      outputother += "<h3 class = 'article-header'>" + data.articles[i].title +
        "<h6>" + data.articles[i].publishedAt;
      outputother += "<img src = '" + data.articles[i].urlToImage + "' " + "alt='" + imgalt + "'>";
      outputother += "<h5>" + data.articles[i].description + "<br>" +
        "<p>" + data.articles[i].content + "<br>";
      outputother += "<br>" + "<a href = '" + data.articles[i].url + "' " + "target='" + "_blank" + "'>" + linktx + '</a>'; 
    }
    other.innerHTML = outputother ; 
   }
  
   getPost();
