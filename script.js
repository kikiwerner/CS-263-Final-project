<<<<<<< HEAD
function toggleTab(tabName) {
    var tabContent = document.getElementById(tabName + "Content");
    var allTabContents = document.getElementsByClassName("tabcontent");
    
    // Hide all tab content sections except the selected one
    for (var i = 0; i < allTabContents.length; i++) {
        if (allTabContents[i].id !== tabName + "Content") {
            allTabContents[i].style.display = "none";
        }
    }
    
    // Toggle the display of the selected tab content
    if (tabContent.style.display === "block") {
        tabContent.style.display = "none"; // If already visible, hide it
    } else {
        tabContent.style.display = "block"; // If hidden, show it
    }
=======
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
>>>>>>> d09d225682e82cc71bc01b8c8b0528f7baccaaf1
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
<<<<<<< HEAD
});
=======
});
>>>>>>> d09d225682e82cc71bc01b8c8b0528f7baccaaf1
