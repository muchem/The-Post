window.onload = function(){

    /*main section*/
    const author = document.getElementById('author');
    const title = document.getElementById('main-title');
    const description = document.getElementById('description');
    const photo = document.getElementById('main-img');
    const article = document.getElementById('main-content');
    const url = document.getElementById('main-url');
    const date = document.getElementById('main-date');
 /*article-1*/
    const title1 = document.getElementById('title-1');
    const date1 = document.getElementById('date-1');
    const photo1 = document.getElementById('img-1');
    const description1 = document.getElementById('description-1');
    const content1 =document.getElementById('content-1');
    const url1 = document.getElementById('url-1');
/*article-2*/
    const title2 = document.getElementById('title-2');
    const date2 = document.getElementById('date-2');
    const photo2 = document.getElementById('img-2');
    const description2 = document.getElementById('description-2');
    const content2 =document.getElementById('content-2');
    const url2 = document.getElementById('url-2');
 /*article-3*/
    const title3 = document.getElementById('title-3');
    const date3 = document.getElementById('date-3');
    const photo3 = document.getElementById('img-3');
    const description3 = document.getElementById('description-3');
    const content3 =document.getElementById('content-3');
    const url3 = document.getElementById('url-3');

    const title4 = document.getElementById('title-4');
    const date4 = document.getElementById('date-4');
    const photo4 = document.getElementById('img-4');
    const description4 = document.getElementById('description-4');
    const content4 =document.getElementById('content-4');
    const url4 = document.getElementById('url-4');

    const title5 = document.getElementById('title-5');
    const date5 = document.getElementById('date-5');
    const photo5 = document.getElementById('img-5');
    const description5 = document.getElementById('description-5');
    const content5 =document.getElementById('content-5');
    const url5 = document.getElementById('url-5');

    const title6 = document.getElementById('title-6');
    const date6= document.getElementById('date-6');
    const photo6 = document.getElementById('img-6');
    const description6 = document.getElementById('description-6');
    const content6 =document.getElementById('content-6');
    const url6 = document.getElementById('url-6');
 
    const api = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${'229d43347db64925ac4249aacfd8559b'}`;
        fetch(api)
        .then(responce =>{
            return (responce.json());
        })
        .then(data=>{
           photo.src =  data.articles[0].urlToImage;
            article.innerHTML = data.articles[0].content;
            title.innerHTML = data.articles[0].title;
            description.innerHTML = data.articles[0].description;
            url.href = data.articles[0].url;
            date.innerHTML = data.articles[0].publishedAt;
            /*article-1*/
            title1.innerHTML =  data.articles[1].title;
            date1.innerHTML = data.articles[1].publishedAt
            photo1.src =  data.articles[1].urlToImage;
            description1.innerHTML =  data.articles[1].description;
            content1.innerHTML =  data.articles[1].content;
            url1.href = data.articles[1].url;
            /*article-2*/
            title2.innerHTML =  data.articles[2].title;
            date2.innerHTML = data.articles[2].publishedAt
            photo2.src =  data.articles[2].urlToImage;
            description2.innerHTML =  data.articles[2].description;
            content2.innerHTML =  data.articles[2].content;
            url2.href = data.articles[2].url;
            /*article-3*/
            title3.innerHTML =  data.articles[3].title;
            date3.innerHTML = data.articles[3].publishedAt
            photo3.src =  data.articles[3].urlToImage;
            description3.innerHTML =  data.articles[3].description;
            content3.innerHTML =  data.articles[3].content;
            url3.href = data.articles[3].url;

            title4.innerHTML =  data.articles[4].title;
            date4.innerHTML = data.articles[4].publishedAt
            photo4.src =  data.articles[4].urlToImage;
            description4.innerHTML =  data.articles[4].description;
            content4.innerHTML =  data.articles[4].content;
            url4.href = data.articles[4].url;

            title5.innerHTML =  data.articles[5].title;
            date5.innerHTML = data.articles[5].publishedAt
            photo5.src =  data.articles[5].urlToImage;
            description5.innerHTML =  data.articles[5].description;
            content5.innerHTML =  data.articles[5].content;
            url5.href = data.articles[5].url;

            title6.innerHTML =  data.articles[6].title;
            date6.innerHTML = data.articles[6].publishedAt
            photo6.src =  data.articles[6].urlToImage;
            description6.innerHTML =  data.articles[6].description;
            content6.innerHTML =  data.articles[6].content;
            url6.href = data.articles[6].url;
        })
}