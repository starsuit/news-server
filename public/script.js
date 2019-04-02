const newsContainer = document.querySelector("#news-container");

const appendNews = newsList => {
  newsList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    newsContainer.appendChild(li);
  });
};

fetch(`/news`)
  .then(response => response.json())
  .then(json => appendNews(json));
