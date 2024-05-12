function openPage(pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(pageName).style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
    const url = `/fetch-news`;  // Server endpoint that handles the API request

    // Fetch data from your server
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();  // Parse the JSON of the response
        })
        .then(data => {
            if (data.status !== "ok") {
                throw new Error(`API error! Message: ${data.message}`);
            }
            const articles = data.articles;  // Extract articles from server response
            let newsHtml = '<h3>Recent News</h3>';
            articles.forEach(article => {
                newsHtml += `
                    <div class="news-item">
                        <h4><a href="${article.url}" target="_blank">${article.title}</a></h4>
                        <p>${article.description}</p>
                    </div>
                `;
            });
            document.getElementById('News').innerHTML = newsHtml;
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            document.getElementById('News').innerHTML = `<p>Failed to load news articles. Error: ${error.message}</p>`;
        });
});
