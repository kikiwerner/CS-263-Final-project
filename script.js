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

document.addEventListener("DOMContentLoaded", function() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function() {
            this.classList.toggle('active'); // Toggle the active class
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const data = {
        "status": "ok",
        "totalResults": 2046,
        "articles": [
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Dell Cameron",
            "title": "Net Neutrality Returns to a Very Different Internet",
            "description": "The FCC voted 3-2 to restore net neutrality rules that had disappeared during the Trump administration.",
            "url": "https://www.wired.com/story/fcc-net-neutrality-rules-vote/",
            "urlToImage": "https://media.wired.com/photos/662a61d0b6675cc4b851157a/191:100/w_1280,c_limit/Net-Neutrality-FCC-GettyImages-1388801307.jpg",
            "publishedAt": "2024-04-25T19:42:52Z",
            "content": "The Federal Communications Commission has votedonce againto assert its power to oversee and regulate the activities of the broadband industry in the United States. In a 3-2 vote, the agency reinstate… [+3042 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Sam Shedden",
            "title": "Drake faces legal action over AI diss track with Tupac",
            "description": "Superstar rapper Drake set the internet (or specifically, X) ablaze when he released a diss track featuring AI versions of… Continue reading Drake faces legal action over AI diss track with Tupac\nThe post Drake faces legal action over AI diss track with Tupac…",
            "url": "https://readwrite.com/drake-faces-legal-action-over-ai-diss-track-with-tupac/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/4972816866_150d0ac900_b.jpg",
            "publishedAt": "2024-04-25T11:08:18Z",
            "content": "Superstar rapper Drake set the internet (or specifically, X) ablaze when he released a diss track featuring AI versions of Tupac Shakur and Snoop Dogg, but now the Canadian MC faces a legal challenge… [+2247 chars]"
          },
          {
            "source": {
              "id": "ars-technica",
              "name": "Ars Technica"
            },
            "author": "Benj Edwards",
            "title": "New Microsoft AI model may challenge GPT-4 and Google Gemini",
            "description": "In project headed by former Inflection chief, MAI-1 may have 500B parameters.",
            "url": "https://arstechnica.com/information-technology/2024/05/microsoft-developing-mai-1-language-model-that-may-compete-with-openai-report/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/05/Mustafa-Suleyman_GettyImages-1932097196-760x380.jpg",
            "publishedAt": "2024-05-06T19:51:22Z",
            "content": "Enlarge/ Mustafa Suleyman, co-founder and chief executive officer of Inflection AI UK Ltd., during a town hall on day two of the World Economic Forum (WEF) in Davos, Switzerland, on Wednesday, Jan. 1… [+2567 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Scientific American"
            },
            "author": "Lauren Leffer",
            "title": "Online Age Verification Laws Could Do More Harm Than Good",
            "description": "More U.S. states are requiring online ID checks. A proposed French strategy aims to balance child safety with users’ privacy rights",
            "url": "https://www.scientificamerican.com/article/online-age-verification-laws-privacy/",
            "urlToImage": "https://static.scientificamerican.com/dam/m/3b52c1d1af5cb9ee/original/GettyImages-1457137503.jpg?w=1200",
            "publishedAt": "2024-04-16T14:00:00Z",
            "content": "It’s getting a little more onerous to access online pornography. Within the past few weeks, Kansas, Florida and Idaho became the latest U.S. states to pass policies requiring “adult” websites to veri… [+8079 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Atlantic"
            },
            "author": "Louise Matsakis",
            "title": "Why Would America Ever Want to Emulate China’s Internet Laws?",
            "description": "Lawmakers have argued that the Chinese internet is better for kids. They’re wrong.",
            "url": "https://www.theatlantic.com/technology/archive/2024/05/tiktok-chinese-version/678325/?utm_source=feed",
            "urlToImage": null,
            "publishedAt": "2024-05-08T15:36:20Z",
            "content": "Over the past week, I’ve spent several hours scrolling through Douyin, the Chinese version of TikTok also owned by ByteDance. Both apps are governed by a central algorithm that recommends videos to u… [+8185 chars]"
          },
          {
            "source": {
              "id": "bbc-news",
              "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "'No easy task' - The hunt for an impartial Trump jury",
            "description": "Prosecutors and Mr Trump's team will weed through hundreds of people in Manhattan as part of the hush money trial.",
            "url": "https://www.bbc.co.uk/news/world-us-canada-68671730",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C515/production/_133135405_jurypic.png",
            "publishedAt": "2024-04-12T23:23:13Z",
            "content": "On Monday, hundreds of New Yorkers from across the island of Manhattan will find themselves facing a historic prospect: sitting on the jury of the first criminal trial of a former president. \r\nDonald… [+6922 chars]"
          },
          {
            "source": {
              "id": "fox-news",
              "name": "Fox News"
            },
            "author": "Kurt Knutsson, CyberGuy Report",
            "title": "How to use VPNs without compromising your banking apps",
            "description": "Using a virtual private network to seach the internet has its pros and cons. It can provide more security and privacy. But users can be blocked from websites.",
            "url": "https://www.foxnews.com/tech/how-to-use-vpns-without-compromising-banking-apps",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/05/1-How-to-use-VPNs-without-compromising-your-banking-apps.jpg",
            "publishedAt": "2024-05-05T14:00:57Z",
            "content": "Using a VPN a virtual private network to browse the internet can give you more security and privacy online. It can also be used to access websites that might not be available in your location. (For i… [+6280 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Watch Champions League Soccer: Livestream Manchester City vs. Real Madrid From Anywhere - CNET",
            "description": "Will Pep Guardiola or Carlo Ancelotti come out on top in the decisive second leg of this quarterfinal at the Etihad Stadium?",
            "url": "https://www.cnet.com/tech/services-and-software/watch-champions-league-soccer-livestream-manchester-city-vs-real-madrid-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/60654fc073eee226a2cee386ca84ceeb8e817154/hub/2024/04/16/8c6c234f-7f33-4644-8a21-367396422006/gettyimages-2144481848.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-04-16T19:00:21Z",
            "content": "After a thrilling 3-3 draw at the Bernabéu last Tuesday, there's a mouth-watering second leg in store at the Etihad Stadium on Wednesday as Man City host Real Madrid -- with a place in the UEFA Champ… [+4964 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Watch Champions League Semifinal: Livestream PSG vs. Borussia Dortmund From Anywhere - CNET",
            "description": "The Bundesliga team take a slender one-goal advantage to the Parc des Princes.",
            "url": "https://www.cnet.com/tech/services-and-software/watch-champions-league-semifinal-livestream-psg-vs-borussia-dortmund-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/783216eba4ea9fa6040fcfe28f6faad5befa0074/hub/2024/04/29/d46427bc-939b-4755-b82e-f3c73a7836f1/gettyimages-2147036445.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-07T16:45:04Z",
            "content": "Kylian Mbappé and co. will need to overcome a one-goal deficit today, as Paris Saint-Germain take on Borussia Dortmund in the decisive second leg of this UEFA Champions League semifinal. \r\nThe frenet… [+4855 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Android Police"
            },
            "author": "Nathan Drescher",
            "title": "Every chat app wants to be the next big social media platform, and it's hurting the web",
            "description": "Your Telegram group may just be holding back the internet",
            "url": "https://www.androidpolice.com/every-chat-app-wants-to-be-social-media-platform-its-hurting-the-web/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/08/discord-photo-1-ap-hero.jpg",
            "publishedAt": "2024-04-15T22:00:12Z",
            "content": "Gone are the days of simple text-based conversations with you and your close friends. Today's chat apps are morphing into a chaotic blend of instant forums and social media, complete with file sharin… [+5722 chars]"
          },
          {
            "source": {
              "id": "ars-technica",
              "name": "Ars Technica"
            },
            "author": "Ashley Belanger",
            "title": "Elon Musk’s X can’t invent its own copyright law, judge says",
            "description": "Judge rules copyright law governs public data scraping, not X’s terms.",
            "url": "https://arstechnica.com/tech-policy/2024/05/elon-musks-x-tried-and-failed-to-make-its-own-copyright-system-judge-says/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/05/GettyImages-2151277350-760x380.jpg",
            "publishedAt": "2024-05-10T21:20:51Z",
            "content": "57\r\nA US district judge William Alsup has dismissed Elon Musk's X Corp's lawsuit against Bright Data, a data-scraping company accused of improperly accessing X (formerly Twitter) systems and violatin… [+5589 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Kyle Barr",
            "title": "Everything You Need to Know About Game Emulators on iPhone",
            "description": "Game emulation has been a tried and true pastime on PCs and Macs for a while now, but it’s a whole new frontier for folks who are only used to their regular, unmodified iPhone. Apple updated its rules earlier this month, and now there’s a building wave of old…",
            "url": "https://gizmodo.com/game-emulators-iphone-ios-1851421925",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/4b9f5a2e9a58e127be78048a945048d2.jpg",
            "publishedAt": "2024-04-19T15:00:00Z",
            "content": "Game emulation has been a tried and true pastime on PCs and Macs for a while now, but its a whole new frontier for folks who are only used to their regular, unmodified iPhone. Apple updated its rules… [+7716 chars]"
          },
          {
            "source": {
              "id": "espn",
              "name": "ESPN"
            },
            "author": "Dana Lee",
            "title": "How a 6-year-old marathoner ignited America's parenting debate",
            "description": "When 6-year-old Rainier Crawford crossed the finish line at the 2022 Flying Pig Marathon, the backlash immediately followed. But his dad makes no apologies as he pushes for children's rights.",
            "url": "https://www.espn.com/espn/story/_/id/40070180/ben-crawford-rainier-crawford-flying-pig-marathon-parenting-debate",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0502%2Fr1327519_1296x729_16%2D9.jpg",
            "publishedAt": "2024-05-04T12:05:36Z",
            "content": "DISASTER STRIKES JUST past the 16-mile mark of the 2022 Flying Pig Marathon in Cincinnati, Ohio. It is, in Ben Crawford's mind, the worst thing that can happen when you're running 26.2 miles with you… [+44246 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Graeme Hanna",
            "title": "Twitter founder Jack Dorsey departs Bluesky board",
            "description": "Bluesky has confirmed the departure of Jack Dorsey from its board with the decentralized social media platform now seeking a replacement… Continue reading Twitter founder Jack Dorsey departs Bluesky board\nThe post Twitter founder Jack Dorsey departs Bluesky b…",
            "url": "https://readwrite.com/twitter-founder-jack-dorsey-departs-bluesky-board-with-apparent-endorsement-of-elon-musks-x/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/bluesky.png",
            "publishedAt": "2024-05-06T11:23:56Z",
            "content": "Bluesky has confirmed the departure of Jack Dorsey from its board with the decentralized social media platform now seeking a replacement to take his place at the top table. \r\nHaving assisted the fled… [+1906 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Sophie Atkinson",
            "title": "Microsoft could challenge GPT-4 and Google with new AI model: MAI-1",
            "description": "Microsoft is said to be entering another player into the AI model market, with its newest iteration titled ‘Mai-1,’ and… Continue reading Microsoft could challenge GPT-4 and Google with new AI model: MAI-1\nThe post Microsoft could challenge GPT-4 and Google w…",
            "url": "https://readwrite.com/microsoft-could-challenge-gpt-4-and-google-with-new-ai-model-mai-1/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/GnX2NAtHQhqZ7zUQ5mPZmQ.png",
            "publishedAt": "2024-05-07T12:36:33Z",
            "content": "Microsoft is said to be entering another player into the AI model market, with its newest iteration titled Mai-1, and reports suggest it could be better than the rest.\r\nAlthough the technology giant … [+2104 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Liverpool vs. Crystal Palace Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "The Reds look to bounce back from a shock Europa League defeat as they host the Eagles.",
            "url": "https://www.cnet.com/tech/services-and-software/liverpool-vs-crystal-palace-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/cb67441cd973f48398074c97bf8fe239e61c441f/hub/2024/04/12/f7cda3a2-08cc-41e5-b609-379f239c1f55/gettyimages-2147727656.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-04-13T10:00:18Z",
            "content": "Liverpool will be desperate to return to the summit of the English Premier League on Sunday as they host Crystal Palace at Anfield. \r\nDeparting Reds boss Jürgen Klopp will be looking for a reaction f… [+5281 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Tottenham vs. Burnley Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "Spurs host a Clarets side on the brink of relegation.",
            "url": "https://www.cnet.com/tech/services-and-software/tottenham-vs-burnley-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/f9f4fcb72b51464fc75e67bf8291cd8a71c9bee8/hub/2024/05/11/678aee3b-8a9c-4c91-b90f-238957ffab1b/gettyimages-2151433062.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-11T12:02:17Z",
            "content": "Tottenham looks to end a run of four straight losses on Saturday as the team hosts a Burnley side that'll have its relegation confirmed if it fails to win today. \r\nThose defeats means Spurs' hopes of… [+5291 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Wolves vs. Bournemouth Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "Two sides hoping for a top-half finish go head-to-head at Molineux.",
            "url": "https://www.cnet.com/tech/services-and-software/wolves-vs-bournemouth-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/e12c86a25546b9578a5f305d7d2d5f18b5cd1b4d/hub/2024/04/24/8d4626d5-c723-4588-9632-aad4d6784d7c/gettyimages-2149414759.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-04-24T15:45:05Z",
            "content": "Wolves host Bournemouth on Wednesday, with just a point separating these two midtable sides in the EFL table.  \r\nThe inconsistent nature of the teams in mid table mean both sides still have an outsid… [+5306 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Luton vs. Everton Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "Can the Hatters claim a win against the Toffees and pull themselves clear of the drop zone?",
            "url": "https://www.cnet.com/tech/services-and-software/luton-vs-everton-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/7a1e9f7f8b9ac4ceeb6e32f9f508b7c55fa14365/hub/2024/05/03/d09dadd6-6b40-4dbc-8a94-88f64ffcf1a9/gettyimages-2149434632.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-03T19:00:00Z",
            "content": "Luton host Everton at Kenilworth Road in the English Premier League on Friday knowing that nothing less than a win will be enough in their battle to beat the drop.\r\nDespite some battling performances… [+5347 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Wolves vs. Crystal Palace Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "Two side looking to claim a top four finish go head-to-head at Molineux.",
            "url": "https://www.cnet.com/tech/services-and-software/wolves-vs-crystal-palace-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/50a0c6b0b0a2844994204991213ac14d0eadc6b5/hub/2024/05/11/7b054b48-8154-4f50-86e3-a93e243ca769/gettyimages-2151264636.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-11T12:02:23Z",
            "content": "Crystal Palace will be looking to maintain their sparkling end of season form as they travel to the Black Country to take on Wolves on Saturday.\r\nNew boss Oliver Glasner has revitalised the Eagles si… [+5509 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Newcastle vs. Brighton Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "The Magpies look to shore up fifth place as they host the Seagulls.",
            "url": "https://www.cnet.com/tech/services-and-software/newcastle-vs-brighton-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/992ba4824a5f8251c2a3042a3742479ba4fe6498/hub/2024/05/11/e30126fb-c557-4425-81aa-5579796c12ba/gettyimages-2150464490.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-11T12:02:14Z",
            "content": "Newcastle host Brighton at St James' Park for their last home fixture of the season, with the Toon Army hoping their side can tighten their grip on a Europa League spot. \r\nCurrently in sixth place wi… [+5388 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Crystal Palace vs. Newcastle Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "The Magpies take on the Eagles in an intriguing midtable clash at Selhurst Park.",
            "url": "https://www.cnet.com/tech/services-and-software/crystal-palace-vs-newcastle-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/2ddbcdb05bfa8f7bbf3e5691357cfd54a0799ddb/hub/2024/04/24/e9cab1cd-285a-410d-b52d-4c3214a1fdc8/gettyimages-2133572515.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-04-24T15:45:12Z",
            "content": "Newcastle will be looking to continue their push for a European spot as they travel to south London on Wednesday to face an improving Crystal Palace side. \r\nThe home side are on a roll under new boss… [+5407 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Everton vs. Liverpool Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "It's a Merseyside derby with major implications for both ends of the table.",
            "url": "https://www.cnet.com/tech/services-and-software/everton-vs-liverpool-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/606789fcfc48e9db8b0f6d2092bb14539d1d2abd/hub/2024/04/24/b445535d-6fdc-4988-b914-f2f76d10122d/gettyimages-2149544597.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-04-24T16:02:06Z",
            "content": "Everton and Liverpool resume their local rivalry on Wednesday, with both sides in big need of a win at Goodison Park. \r\nLiverpool returned to winning ways on Sunday after claiming a crucial 3-1 win a… [+5231 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Bournemouth vs. Brentford Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "The Cherries need a win in their bid for a top half of the table finish.",
            "url": "https://www.cnet.com/tech/services-and-software/bournemouth-vs-brentford-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/1cec11cdc8ee01a00a89719a62be22a4f7bde8e3/hub/2024/05/11/de9eeb69-5d63-4bce-a9b3-1bce695c9eb9/gettyimages-1946251662.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-11T13:00:29Z",
            "content": "Bournemouth will be looking to add to their club-record Premier League points tally today as they welcome fellow mid-table  side Brentford at the Vitality Stadium. \r\nAfter making a worrying start to … [+5520 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Nottingham Forest vs. Chelsea Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "Forest can't afford to lose as they host an in-form Blues side.",
            "url": "https://www.cnet.com/tech/services-and-software/nottingham-forest-vs-chelsea-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/7b74fa81535638d501e4314a4ab346835fe85ef0/hub/2024/05/10/3291362c-5e7f-4dbe-9be0-1cea1dd98c0c/gettyimages-2150095944.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-11T12:02:09Z",
            "content": "It's a game with major implications for the battle to beat the drop and the race for Europe at the City Ground on Saturday, as Nottingham Forest host Chelsea. \r\nThe visitors come into this match focu… [+5360 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Fromjason.xyz"
            },
            "author": null,
            "title": "FireChat was a tool for revolution. Then it disappeared",
            "description": "With FireChat, people were free to communicate and coordinate with each other without the message having to first filter through someone's data center. Why did the app shut down without notice?",
            "url": "https://fromjason.xyz/p/notebook/firechat-was-a-tool-for-revolution-then-it-disappeared/",
            "urlToImage": "https://fromjason.xyz/img/opengraph-tech40.png",
            "publishedAt": "2024-04-29T21:47:46Z",
            "content": "For years, FireChat helped people circumvent their internet gatekeepers the authoritarian governments and spineless corporations that control our every move through a network of proprietary data cent… [+3714 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Rachel Treisman",
            "title": "Katy Perry's own mom fell for her Met Gala AI photo. Do you know what to look for?",
            "description": "Katy Perry and Rihanna weren't at the Met Gala on Monday night, despite the viral AI-generated photos showing them on the red carpet. Here are some tips for recognizing and investigating deep fakes.",
            "url": "https://www.npr.org/2024/05/07/1249570785/katy-perry-met-gala-deepfake",
            "urlToImage": "https://media.npr.org/assets/img/2024/05/07/ap24114166775802_wide-b50e420bc950c70c154ad859b6b9eb5b1c2bc7fa.jpg?s=1400&c=100&f=jpeg",
            "publishedAt": "2024-05-07T14:33:30Z",
            "content": "Katy Perry pictured at an event in Los Angeles in April. She wasn't at Monday night's Met Gala, despite the fake photos of her circulating on social media.\r\nJordan Strauss/Jordan Strauss/Invision/AP\r… [+5610 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techdirt"
            },
            "author": "Mike Masnick",
            "title": "Congressional Committee Threatens To Investigate Any Company Helping TikTok Defend Its Rights",
            "description": "“Do you now, or have you ever, worked with TikTok to help defend its rights?” That McCarthyism-esque question is apparently being asked by members of Congress to organizations that have been working with TikTok to defend its Constitutional rights. Does anyone…",
            "url": "https://www.techdirt.com/2024/05/10/congressional-committee-threatens-to-investigate-any-company-helping-tiktok-defend-its-rights/",
            "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
            "publishedAt": "2024-05-10T16:27:49Z",
            "content": "from the what-the-actual-fuck-is-going-on? dept\r\nDo you now, or have you ever, worked with TikTok to help defend its rights?\r\nThat McCarthyism-esque question is apparently being asked by members of C… [+5793 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Arsenal vs. Aston Villa Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "The Gunners face another stern test of their title-contender credentials at the Emirates Stadium.",
            "url": "https://www.cnet.com/tech/services-and-software/arsenal-vs-aston-villa-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/6697b85af2f8a3da718c66c2e7e5a9cb4e639344/hub/2024/04/12/55f4a512-1848-40d8-94c2-5c856d671737/gettyimages-2144482930.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-04-14T13:30:06Z",
            "content": "Arsenal face another tricky test in their challenge for their first English Premier League title in 20 years, as they host top-four-chasing Aston Villa on Sunday. \r\nAfter navigating past Brighton las… [+5489 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Man United vs. Sheffield United Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "The Red Devils take on the doomed Blades at Old Trafford.",
            "url": "https://www.cnet.com/tech/services-and-software/man-united-vs-sheffield-united-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/ba228525818aecd694049012c21fb321b6b25001/hub/2024/04/24/4d6b7ce0-c1e5-4bf0-ae29-a63cedce9b34/gettyimages-2148639920.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-04-24T15:45:09Z",
            "content": "After surviving an FA Cup semifinal scare on Sunday, it's back to business in the English Premier League for Man United on Wednesday. They welcome to Old Trafford a Sheffield United side that's almos… [+5594 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Vox"
            },
            "author": "Tiffany Ng",
            "title": "Social media platforms aren’t equipped to handle the negative effects of their algorithms abroad. Neither is the law.",
            "description": "The internet has no legal duty of care.",
            "url": "https://www.vox.com/the-highlight/24121461/myanmar-genocide-section-230-facebook-internet-social-media-moderation",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/usG132Gi7n9tAS905sju-65C4X8=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25373142/Vox_FrancoZacha_socialmedia.jpg",
            "publishedAt": "2024-05-09T12:58:02Z",
            "content": "Franco Zacha for Vox\r\n\n \n\n\n Because of one law, the internet has no legal duty of care when it comes to hate speech. Just take a look at what happened in Myanmar. \nJust after the clock struck midnigh… [+21820 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "West Ham vs. Luton Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "It's win or bust for the Hatters as they take on the Hammers at the Londo Stadium.",
            "url": "https://www.cnet.com/tech/services-and-software/west-ham-vs-luton-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/6a0d82351cf5cfa1e75127b8ce80ddd057172252/hub/2024/05/11/de787566-1bc2-4de3-b20e-ba483d45239e/gettyimages-2149901533.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-11T12:02:20Z",
            "content": "Luton Town's relegation fate could be sealed on Saturday as they head to east London looking to claim a crucial win against West Ham.\r\nCurrently three points from safety after a run of four games wit… [+5542 chars]"
          },
          {
            "source": {
              "id": "al-jazeera-english",
              "name": "Al Jazeera English"
            },
            "author": "Al Jazeera Staff",
            "title": "China trying to develop world ‘built on censorship and surveillance’",
            "description": "Rights group warns the Digital Silk Road is enabling China to export digital authoritarianism across the world.",
            "url": "https://www.aljazeera.com/news/2024/5/2/china-trying-to-develop-world-built-on-censorship-and-surveillance",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/AFP__20231017__33YF6BM__v2__HighRes__ChinaTradeDiplomacy-1714611171.jpg?resize=1920%2C1440",
            "publishedAt": "2024-05-02T02:11:43Z",
            "content": "China is exporting its model of digital authoritarianism abroad with the help of its far-reaching tech industry and massive infrastructure projects, offering a blueprint of best practices to neighbou… [+4523 chars]"
          },
          {
            "source": {
              "id": "the-next-web",
              "name": "The Next Web"
            },
            "author": "Siôn Geschwindt",
            "title": "EU threatens to suspend ‘addictive’ TikTok feature by end of today",
            "description": "Yesterday, the EU issued TikTok an ultimatum. The Chinese-owned social media app was given just 24 hours to outline the mental health risks related to its new app TikTok Lite or face huge daily fines. This is the EU’s second probe into TikTok under the Digita…",
            "url": "https://thenextweb.com/news/eu-ban-tiktok-lite",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F09%2Ftiktok.jpg&signature=efb59368fa73c7fd139799f8d5bdf674",
            "publishedAt": "2024-04-23T14:25:28Z",
            "content": "Yesterday, the EU issued TikTok an ultimatum. The Chinese-owned social media app was given just 24 hours to outline the mental health risks related to its new app TikTok Lite or face huge daily fines… [+3107 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "West Ham vs. Fulham Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "It's an east-versus-west London derby, with both teams still harboring hopes of European qualification.",
            "url": "https://www.cnet.com/tech/services-and-software/west-ham-vs-fulham-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/e1a59497d5d30ef49ad2ca7031d678adcee77450/hub/2024/04/12/c4ec011a-397f-4da8-bf2c-ac70e25ccaa0/gettyimages-2141955896.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-04-13T10:00:14Z",
            "content": "West Ham host Fulham on Sunday in a London derby in the English Premier League, looking for a much-needed home win to bolster their hopes of a top-six finish.\r\nThe Hammers come into this match lookin… [+5435 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The A.V. Club"
            },
            "author": "William Hughes",
            "title": "Emma Stone and Nathan Fielder might be reuniting for a chess cheating scandal movie",
            "description": "Hot on the heels of their Showtime series The Curse—which is just revving up what’ll likely be a pretty extensive Emmys campaign—Nathan Fielder and Emma Stone are reportedly close to lining up their next project together. THR reports tonight that A24 is on th…",
            "url": "https://www.avclub.com/emma-stone-and-nathan-fielder-might-be-reuniting-for-a-1851450707",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d7c92767599451452a7711e5d617461a.jpg",
            "publishedAt": "2024-05-02T04:10:00Z",
            "content": "Hot on the heels of their Showtime series The Cursewhich is just revving up whatll likely be a pretty extensive Emmys campaignNathan Fielder and Emma Stone are reportedly close to lining up their nex… [+1999 chars]"
          },
          {
            "source": {
              "id": "time",
              "name": "Time"
            },
            "author": "HALELUYA HADERO / AP",
            "title": "TikTok Sues U.S. to Block Law That Could Ban the Social Media Platform",
            "description": "TikTok and its Chinese parent company ByteDance are suing the U.S. over a law that would ban the popular video-sharing app unless it’s sold to another company.",
            "url": "https://time.com/6975683/tiktok-sues-us-law-ban/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2024/05/GettyImages-1351342669.jpg?quality=85&w=1200&h=628&crop=1",
            "publishedAt": "2024-05-07T17:19:47Z",
            "content": "TikTok and its Chinese parent company ByteDance are suing the U.S. over a law that would ban the popular video-sharing app unless its sold to another company.\r\nThe lawsuit filed on Tuesday may be set… [+3904 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techdirt"
            },
            "author": "Mike Masnick",
            "title": "The US Banning TikTok Would Play Right Into China’s Hands, And Destroy Decades Of US Work On Promoting An Open Internet",
            "description": "Apparently, the TikTok ban bill is back. Speaker Mike Johnson plans to include TikTok divestiture legislation already passed by the House in a fast-moving aid package for Ukraine and Israel that the chamber is set to clear on Saturday. The Senate is expected …",
            "url": "https://www.techdirt.com/2024/04/19/the-us-banning-tiktok-would-play-right-into-chinas-hands-and-destroy-decades-of-us-work-on-promoting-an-open-internet/",
            "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
            "publishedAt": "2024-04-19T17:54:03Z",
            "content": "from the why-can't-american-politicians-think-one-step-ahead? dept\r\nApparently, the TikTok ban bill is back.\r\nSpeaker Mike Johnson plans to include TikTok divestiture legislation already passed by th… [+4977 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Torrentfreak.com"
            },
            "author": "Andy Maxwell",
            "title": "CJEU Gives File-Sharer Surveillance & Data Retention a Green Light",
            "description": "In a judgment published today, Europe's top court concludes that suspected file-sharers can be subjected to mass surveillance and retention of their data as long as certain standards are upheld. Digital rights groups hoped to end the French 'Hadopi' anti-pira…",
            "url": "https://torrentfreak.com/cjeu-gives-mass-file-sharer-surveillance-data-retention-a-green-light-240430/",
            "urlToImage": "https://torrentfreak.com/images/spy1.jpg",
            "publishedAt": "2024-04-30T19:13:47Z",
            "content": "As part of anti-piracy scheme featuring warning letters, fines, and ISP disconnections, France has monitored and stored data on millions of internet users since 2010.\r\nDigital rights groups insist th… [+8822 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techdirt"
            },
            "author": "Mike Masnick",
            "title": "Any Privacy Law Is Going To Require Some Compromise: Is APRA The Right Set Of Tradeoffs?",
            "description": "Privacy issues have been at the root cause of so many concerns about the internet, but so many attempts to regulate privacy have been a total mess. There’s now a more thoughtful attempt to regulate privacy in the US that is (perhaps surprisingly!) not terribl…",
            "url": "https://www.techdirt.com/2024/04/23/any-privacy-law-is-going-to-require-some-compromise-is-apra-the-right-set-of-tradeoffs/",
            "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
            "publishedAt": "2024-04-23T16:35:00Z",
            "content": "from the a-federal-law-that-doesn't-totally-suck?!? dept\r\nPrivacy issues have been at the root cause of so many concerns about the internet, but so many attempts to regulate privacy have been a total… [+9679 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techdirt"
            },
            "author": "Mike Masnick",
            "title": "The Motion Picture Association Doesn’t Get To Decide Who The First Amendment Protects",
            "description": "Twelve years ago, internet users spoke up with one voice to reject a law that would build censorship into the internet at a fundamental level. This week, the Motion Picture Association (MPA), a group that represents six giant movie and TV studios, announced t…",
            "url": "https://www.techdirt.com/2024/04/17/the-motion-picture-association-doesnt-get-to-decide-who-the-first-amendment-protects/",
            "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
            "publishedAt": "2024-04-17T19:08:51Z",
            "content": "from the that's-not-how-any-of-this-works dept\r\nTwelve years ago, internet users spoke up with one voice to reject a law that would build censorship into the internet at a fundamental level. This wee… [+7258 chars]"
          },
          {
            "source": {
              "id": "ars-technica",
              "name": "Ars Technica"
            },
            "author": "Jon Brodkin",
            "title": "US bans TikTok owner ByteDance, will prohibit app in US unless it is sold",
            "description": "Bill gives ByteDance 270 days to sell TikTok or app loses access to US market.",
            "url": "https://arstechnica.com/tech-policy/2024/04/biden-signs-bill-to-ban-tiktok-if-chinese-owner-bytedance-doesnt-sell/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/04/tiktok-760x380.jpg",
            "publishedAt": "2024-04-24T16:17:29Z",
            "content": "28\r\nThe Senate last night approved a bill that orders TikTok owner ByteDance to sell the company within 270 days or lose access to the US market. The House had already passed the bill, and President … [+2796 chars]"
          },
          {
            "source": {
              "id": "al-jazeera-english",
              "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Burkina Faso suspends BBC, Voice of America for reporting on army killings",
            "description": "In a new report, Human Rights Watch said military forces 'summarily executed' 223 civilians in February.",
            "url": "https://www.aljazeera.com/news/2024/4/26/burkina-faso-suspends-bbc-voice-of-america-for-reporting-on-army-killings",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/10/2022-10-02T135737Z_1925561543_RC2YSW92VNDE_RTRMADP_3_BURKINA-SECURITY.jpg?resize=1920%2C1440",
            "publishedAt": "2024-04-26T11:01:16Z",
            "content": "Burkina Faso has suspended the BBC and Voice of America (VOA) radio networks from broadcasting for two weeks over their coverage of a report accusing the army of the extrajudicial killings of civilia… [+2714 chars]"
          },
          {
            "source": {
              "id": "the-globe-and-mail",
              "name": "The Globe And Mail"
            },
            "author": "Marie Woolf",
            "title": "Minister defends arrest power for people feared to commit a hate crime in future",
            "description": "Arif Virani said new power could restrain behaviour of someone with a track record of hateful conduct",
            "url": "https://www.theglobeandmail.com/politics/article-justice-minister-defends-house-arrest-power-for-people-feared-to/",
            "urlToImage": "https://www.theglobeandmail.com/resizer/v2/HWZCTFEANFGOXEB4PPNTNT24QI.jpg?auth=16920e7331d82a3fa2aad648055643ff0ddaee4dc655ab549d63e347035af8ca&width=1200&height=778&quality=80",
            "publishedAt": "2024-04-26T07:09:40Z",
            "content": "Open this photo in gallery:Justice Minister Arif Virani said online harms bill would strike a balance and that content that is 'awful but lawful' would remain online.Sean Kilpatrick/The Canadian Pres… [+4760 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techdirt"
            },
            "author": "Mike Masnick",
            "title": "Internet Child Safety Laws Will Lead To Helpful Sites Being Blocked; Just Look At Schools",
            "description": "Various states and the federal government are proposing and passing a wide variety of “kid safety” laws. Almost all of them pretend that they’re about conduct of social media sites and not about the content on them, but when you boil down what the underlying …",
            "url": "https://www.techdirt.com/2024/04/16/internet-child-safety-laws-will-lead-to-helpful-sites-being-blocked-just-look-at-schools/",
            "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
            "publishedAt": "2024-04-16T19:00:03Z",
            "content": "from the censorship-shouldn't-be-the-answer dept\r\nVarious states and the federal government are proposing and passing a wide variety of “kid safety” laws. Almost all of them pretend that theyre about… [+6940 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Torrentfreak.com"
            },
            "author": "Andy Maxwell",
            "title": "Block Innovation By Supporting the Generative AI Copyright Disclosure Act",
            "description": "Claiming to protect creators, or perhaps that should be 'identifiable copyright holders', the Generative AI Copyright Disclosure Act of 2024 has been introduced at the U.S. House of Representatives. At its core, the Bill requires those responsible for trainin…",
            "url": "https://torrentfreak.com/block-innovation-by-supporting-the-generative-ai-copyright-disclosure-act-240412/",
            "urlToImage": "https://torrentfreak.com/images/pc-fire.png",
            "publishedAt": "2024-04-12T16:33:30Z",
            "content": "In his 1962 book, Profiles of the Future: An Inquiry into the Limits of the Possible, science fiction writer Arthur C. Clarke noted that “any sufficiently advanced technology is indistinguishable fro… [+8344 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techdirt"
            },
            "author": "Leigh Beadon",
            "title": "This Week In Techdirt History: April 7th – 13th",
            "description": "Five Years Ago This week in 2019, Colorado’s net neutrality bill was heading to the governor’s desk while Mitch McConnell was promising a House net neutrality bill would never get past the Senate. The UK proposed a ridiculous plan to fine internet companies f…",
            "url": "https://www.techdirt.com/2024/04/13/this-week-in-techdirt-history-april-7th-13th/",
            "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
            "publishedAt": "2024-04-13T19:00:00Z",
            "content": "from the that-was-that dept\r\nFive Years Ago\r\nThis week in 2019, Colorado’s net neutrality bill was heading to the governor’s desk while Mitch McConnell was promising a House net neutrality bill would… [+1782 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "EFF"
            },
            "author": "Jillian C. York",
            "title": "On World Press Freedom Day (and Every Day), We Fight for an Open Internet",
            "description": "Today marks World Press Freedom Day, an annual celebration instituted by the United Nations in 1993 to raise awareness of press freedom and remind governments of their duties under Article 19 of the Universal Declaration of Human Rights. This year, the day is…",
            "url": "https://www.eff.org/deeplinks/2024/05/world-press-freedom-day-and-every-day-we-fight-open-internet",
            "urlToImage": "https://www.eff.org/files/banner_library/icon-2019-freespeech.png",
            "publishedAt": "2024-05-03T15:47:13Z",
            "content": "Today marks World Press Freedom Day, an annual celebration instituted by the United Nations in 1993 to raise awareness of press freedom and remind governments of their duties under Article 19 of the … [+1438 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Theregister.com"
            },
            "author": "Thomas Claburn",
            "title": "Law prof predicts generative AI will die at the hands of watchdogs",
            "description": "Big tech backlash and animus against the machines will invite stifling red tape\nVideo Generative AI is destined to drown in a tsunami of regulation, argues Santa Clara University law professor Eric Goldman.…",
            "url": "https://www.theregister.com/2024/04/24/generative_ai_death/",
            "urlToImage": "https://regmedia.co.uk/2024/04/23/ai_shutterstock.jpg",
            "publishedAt": "2024-04-24T11:15:08Z",
            "content": "Video Generative AI is destined to drown in a tsunami of regulation, argues Santa Clara University law professor Eric Goldman.\r\nFor Amazon, Google, Meta, Microsoft, and other tech titans that have be… [+6721 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The A.V. Club"
            },
            "author": "Emma Keates",
            "title": "A three year \"lost media\" search just ended in the funniest possible way",
            "description": "This weekend, a three-year internet odyssey finally concluded in a perfect reminder that it’s still possible to have fun on the World Wide Web. This story has it all: a missing song, a prevailing mystery, a collective, Reddit-based quest, TikTok users uninten…",
            "url": "https://www.avclub.com/ulterior-motives-everyone-knows-that-found-lost-media-1851443071",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b55f3816af497a3ba41a4247519308f4.jpg",
            "publishedAt": "2024-04-29T18:00:00Z",
            "content": "This weekend, a three-year internet odyssey finally concluded in a perfect reminder that its still possible to have fun on the World Wide Web. This story has it all: a missing song, a prevailing myst… [+4110 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Albert Fox Cahn",
            "title": "I bought my first home without an agent. I saved a ton of money — and my sanity.",
            "description": "Want your dream home? Be your own real estate agent",
            "url": "https://www.businessinsider.com/new-rule-of-home-buying-fire-your-real-estate-agent-2024-4",
            "urlToImage": "https://i.insider.com/661fd9e120b15f0ff428b585?width=1200&format=jpeg",
            "publishedAt": "2024-04-18T09:59:01Z",
            "content": "The best part of (briefly) having an agent was realizing just how much I had already figured out on my own.Sebastian König for BI\r\nLast summer, when I told my then-girlfriend that I had just hired a … [+11214 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techdirt"
            },
            "author": "Karl Bode",
            "title": "Roku Eyes Patent That Would Inject Ads Into… Everything",
            "description": "When last we checked in with our friends at Roku, they had made the unpopular decision to effectively “brick” user streaming hardware and television sets if users didn’t agree to a typically draconian end user agreement that effectively bans your legal right …",
            "url": "https://www.techdirt.com/2024/04/16/roku-eyes-patent-that-would-inject-ads-into-everything/",
            "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
            "publishedAt": "2024-04-16T22:32:03Z",
            "content": "from the dumb-is-smart dept\r\nWhen last we checked in with our friends at Roku, they had made the unpopular decision to effectively “brick” user streaming hardware and television sets if users didn’t … [+3412 chars]"
          },
          {
            "source": {
              "id": "abc-news",
              "name": "ABC News"
            },
            "author": "Max Zahn",
            "title": "Congress seems poised to pass potential TikTok ban in US. How would it work?",
            "description": "The measure sailed through the House as part of a foreign aid package.",
            "url": "https://abcnews.go.com/Business/congress-potential-tiktok-ban-how-would-it-work/story?id=109490158",
            "urlToImage": "https://i.abcnewsfe.com/a/b95ace8d-f6b9-44ec-9f2d-1410cf2e559a/tik-tok-headquarters-gty-jef-240422_1713801466463_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-04-22T16:21:15Z",
            "content": "A potential ban of TikTok in the United States sailed through the House of Representatives over the weekend as part of a $95 billion foreign aid package that garnered bipartisan support.\r\nThe social … [+5021 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Daniel Cooper",
            "title": "Doctor Who Space Babies review: Bet you didn’t expect that",
            "description": "The following includes spoilers for “Space Babies.”\nYou can’t help but admire Russell T. Davies’ audacity. He plucks the rights to make Doctor Who from the BBC. He gets Disney+ to write an enormous check to bring the show to life in a way never before attempt…",
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_2557d48d-1ca5-4a7a-b8f6-cba06ee8b2d9",
            "urlToImage": null,
            "publishedAt": "2024-05-11T00:00:30Z",
            "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Windows Central"
            },
            "author": "kevinokemwa@outlook.com (Kevin Okemwa)",
            "title": "Even Elon Musk thinks OpenAI is \"hypocritical\" for filing a copyright infringement suit against a popular subreddit",
            "description": "OpenAI recently filed a copyright infringement suit against the r/ChatGPT Subreddit on Reddit for unauthorized use of its logo. The hot startup has backtracked the suit but requested the inclusion of disclaimers stating all trademarks belong to OpenAI.",
            "url": "https://www.windowscentral.com/software-apps/even-elon-musk-thinks-openai-is-hypocritical-for-filing-a-copyright-infringement-suit-against-a-popular-subreddit",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/8ZfhUQ4ovSC9cfrPynHiPJ-1200-80.jpg",
            "publishedAt": "2024-05-12T10:27:06Z",
            "content": "What you need to know\r\n\u003Cul\u003E\u003Cli\u003EOpenAI recently filed a copyright infringement against a popular subreddit for unauthorized use of its logo.\u003C/li\u003E\u003Cli\u003EThe move has sparked hot debates across social medi… [+3026 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Theregister.com"
            },
            "author": "Simon Sharwood",
            "title": "Australia secures takedown order for terror videos, which Elon Musk wants to fight",
            "description": "Yet X remains a supporter of an international commitment to stop this, and its owner knows it\n+Comment Australia's government has secured a court order requiring Elon Musk's social network, X, to remove all videos depicting a terrorist attack.…",
            "url": "https://www.theregister.com/2024/04/23/australia_x_terror_video_takedown/",
            "urlToImage": "https://regmedia.co.uk/2023/11/17/shutterstock_x_musk.jpg",
            "publishedAt": "2024-04-23T04:15:12Z",
            "content": "+Comment Australia's government has secured a court order requiring Elon Musk's social network, X, to remove all videos depicting a terrorist attack.\r\nThe incident saw an Australian man attack bishop… [+4369 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Watch Champions League Soccer: Livestream Borussia Dortmund vs. Atlético Madrid From Anywhere - CNET",
            "description": "The German side look to overturn Atlético's advantage in this second-leg clash at Signal Iduna Park.",
            "url": "https://www.cnet.com/tech/services-and-software/watch-champions-league-soccer-livestream-borussia-dortmund-vs-atletico-madrid-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/32b8cffdaccbca0cb33b2024c6bf9cafd5b26c37/hub/2024/04/16/ae304a69-a112-49ac-97a3-62a34397f225/gettyimages-2148354184.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-04-16T16:00:09Z",
            "content": "Atlético Madrid take a slender lead to Germany on Tuesday as they play Borussia Dortmund in the decisive second leg of this UEFA Champions League quarterfinal. \r\nThe Spanish side had to withstand a l… [+5104 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Watch Champions League Soccer: Livestream Barcelona vs. PSG From Anywhere - CNET",
            "description": "Paris St-Germain head to Catalonia hoping to overcome a first-leg deficit.",
            "url": "https://www.cnet.com/tech/services-and-software/watch-champions-league-soccer-livestream-barcelona-vs-psg-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/e02a85a5d8b9b8e988cd903b43fb7e81f77a364e/hub/2024/04/10/3075f827-ca07-46e2-a1b5-4eaaac745733/gettyimages-2139245403.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-04-16T16:00:05Z",
            "content": "It's advantage Barcelona as they host Paris St-Germain on Wednesday in this Champions League quarterfinal clash. \r\nThe first leg in Paris last week saw five-time winners Barcelona come from behind to… [+4845 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Watch Europa Conference League Semifinal: Livestream Aston Villa vs. Olympiakos From Anywhere - CNET",
            "description": "It's the high-flying English team's first continental semifinal since they won the European Cup in 1982.",
            "url": "https://www.cnet.com/tech/services-and-software/watch-europa-conference-league-semifinal-livestream-aston-villa-vs-olympiakos-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/579fc88ec9d58b1a9485d43ae21776a75d625ca3/hub/2024/05/02/9b41f0f3-3363-4e33-b65b-a31cb46ac043/gettyimages-2150580225.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-02T16:30:05Z",
            "content": "Aston Villa make their first appearance in a European semifinal for 21 years today, as Unai Emery's side host Olympiakos in the first leg of this UEFA Europa Conference League semifinal. \r\nUnbeaten i… [+5122 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Watch Europa Conference League Semifinal: Livestream Club Brugge vs. Fiorentina From Anywhere - CNET",
            "description": "Can the Belgian side claw back a one-goal deficit at the Jan Breydel Stadium?",
            "url": "https://www.cnet.com/tech/services-and-software/watch-europa-conference-league-semifinal-livestream-club-brugge-vs-fiorentina-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/c9cd3743e9731b1cf0da287408aee5da33c03406/hub/2024/05/08/cf6f10fc-01d9-4fd8-8e12-8d8fad080b9f/gettyimages-2151172307.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-08T15:00:05Z",
            "content": "After last week's thrilling five-goal first-leg, it's all set up for gripping concluding encounter between Club Brugge and Fiorentina today in this Champions League semifinal tie. \r\nBrugge battled ba… [+5073 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Watch Europa Conference League Semifinal: Livestream Olympiakos vs. Aston Villa From Anywhere - CNET",
            "description": "The Premier League side have a mountain to climb in Greece.",
            "url": "https://www.cnet.com/tech/services-and-software/watch-europa-conference-league-semifinal-livestream-olympiakos-vs-aston-villa-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/f8ec84ccc5dc618758e7606ced7aa8a6576a8772/hub/2024/05/09/82c34ce1-5827-494f-9ce3-8de442cb2fcd/gettyimages-2150689750.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-09T17:00:00Z",
            "content": "Aston Villa have it all to do as they travel to Greece today to take on Olympiakos in the second leg of this UEFA Europa Conference League semifinal. \r\nVilla look set to secure a top-four finish in t… [+4992 chars]"
          },
          {
            "source": {
              "id": "fox-news",
              "name": "Fox News"
            },
            "author": "Kurt Knutsson, CyberGuy Report",
            "title": "6 things to do right now to boost your security, privacy before it’s too late",
            "description": "Kurt “CyberGuy\" Knutsson reveals the six top things to do right now before it’s too late: Tech and life choices that can keep your safer on and offline.",
            "url": "https://www.foxnews.com/tech/6-things-to-do-right-now-to-boost-your-security-privacy-before-its-too-late",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/04/1-6-Top-things-to-do-right-now-to-boost-your-security-and-protect.jpg",
            "publishedAt": "2024-04-15T14:00:58Z",
            "content": "There are so many things you can do to protect yourself and your loved ones by stepping up your privacy and security. All the things you can do, however, can be overwhelming. Below are six simple ste… [+6975 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Kraken.com"
            },
            "author": ", KrakenFX",
            "title": "Why there will never be another Bitcoin",
            "description": "On October 31, 2008, an unknown coder named Satoshi Nakamoto published a paper that laid the foundation for an entirely new monetary system – 15 years later, the world is only just catching on to its true value and potential.",
            "url": "https://blog.kraken.com/crypto-education/opinion-why-there-will-never-be-another-bitcoin",
            "urlToImage": "https://blog.kraken.com/wp-content/uploads/2023/09/Blog-BTC.png",
            "publishedAt": "2024-04-19T22:44:38Z",
            "content": "By Pete Rizzo, Kraken Editor at Large\r\nPete Rizzo is a leading Bitcoin Historian and author of over 2,000 articles on cryptocurrency. He is also an Editor at Bitcoin Magazine.\r\nThe views and opinions… [+12052 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "GameSpot"
            },
            "author": "Lan Pitts",
            "title": "Despite US Sanctions, TV Shows May Have Unknowingly Used North Korean Animators",
            "description": "Multiple major entertainment companies, including Prime Video and Max, may have unknowingly outsourced animation work on their shows to North Korea, despite US sanctions on the country. Cybersecurity researcher Nick Roy has been scanning North Korea's tiny in…",
            "url": "https://www.gamespot.com/articles/despite-us-sanctions-tv-shows-may-have-unknowingly-used-north-korean-animators/1100-6522848/",
            "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1597/15976769/4291667-mv5bnwyyn2y2ytetnzzhni00odjhltkxogytyzbmzjc1zgiwmmjkxkeyxkfqcgdeqxvymteymjm2ndc2._v1_.jpg",
            "publishedAt": "2024-04-22T18:45:00Z",
            "content": "Multiple major entertainment companies, including Prime Video and Max, may have unknowingly outsourced animation work on their shows to North Korea, despite US sanctions on the country. Cybersecurity… [+2187 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "EFF"
            },
            "author": "Mario Trujillo",
            "title": "Americans Deserve More Than the Current American Privacy Rights Act",
            "description": "EFF is concerned that a new federal bill would freeze consumer data privacy protections in place, by preempting existing state laws and preventing states from creating stronger protections in the future. Federal law should be the floor on which states can bui…",
            "url": "https://www.eff.org/deeplinks/2024/04/americans-deserve-more-current-american-privacy-rights-act",
            "urlToImage": "https://www.eff.org/files/banner_library/icon-2019-privacy.png",
            "publishedAt": "2024-04-16T19:03:39Z",
            "content": "EFF is concerned that a new federal bill would freeze consumer data privacy protections in place, by preempting existing state laws and preventing states from creating stronger protections in the fut… [+9145 chars]"
          },
          {
            "source": {
              "id": "fox-news",
              "name": "Fox News"
            },
            "author": "Kurt Knutsson, CyberGuy Report",
            "title": "Tidy up your tech: Spring-cleaning tips for safeguarding your data",
            "description": "Safeguarding your digital life with a reliable physical backup isn't just a precaution, it's a necessity. Kurt “CyberGuy\" Knutsson provides the essential backup checklist.",
            "url": "https://www.foxnews.com/tech/tidy-up-your-tech-spring-cleaning-tips-for-safeguarding-your-data",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/04/5-Tidy-up-your-tech_-spring-cleaning-tips-for-safeguarding-your-data.jpg",
            "publishedAt": "2024-04-22T14:00:15Z",
            "content": "It happens without warning. Suddenly, access to your personal data gets interrupted by a simple hardware failure, nasty virus, cyberattack, software glitch, accidental deletion or human mistake. It's… [+5390 chars]"
          },
          {
            "source": {
              "id": "fox-news",
              "name": "Fox News"
            },
            "author": "Kurt Knutsson, CyberGuy Report",
            "title": "This off-road teardrop trailer adds luxury camping to the most remote locations",
            "description": "The Kimberley Kube trail-ready camper has a compact but spacious design and combines luxury, functionality and ruggedness for a weekend getaway.",
            "url": "https://www.foxnews.com/tech/this-off-road-teardrop-trailer-adds-luxury-camping-to-most-remote-locations",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/04/1-This-off-road-teardrop-trailer-helps-you-bring-luxury-camping-to-the-most-remote-locations.jpg",
            "publishedAt": "2024-04-25T10:00:39Z",
            "content": "Are you looking for a camper that breaks away from the conventional teardrop design and blends functionality with sleek aesthetics? Meet the Kimberley Kube. \r\nThis innovative camper challenges the no… [+4442 chars]"
          },
          {
            "source": {
              "id": "fox-news",
              "name": "Fox News"
            },
            "author": "Kurt Knutsson, CyberGuy Report",
            "title": "Nationwide alert: SMS phishing attacks target toll road customers",
            "description": "The FBI is warning the public about a recent phishing scam via text that claims its targets owe money in Pennsylvania for unpaid road toll charges.",
            "url": "https://www.foxnews.com/tech/nationwide-alert-sms-phishing-attacks-target-toll-road-customers",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/04/2-Nationwide-Alert_-SMS-phishing-attacks-target-road-toll-customers.jpg",
            "publishedAt": "2024-04-17T14:00:14Z",
            "content": "The FBI has issued a critical warning about a pervasive scam sweeping across the country.\r\nAmericans are being targeted by a sophisticated series of SMS phishing or \"smishing\" attacks that bait them … [+4581 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "EFF"
            },
            "author": "Josh Richman",
            "title": "Podcast Episode: Building a Tactile Internet",
            "description": "Blind and low-vision people have experienced remarkable gains in information literacy because of digital technologies, like being able to access an online library offering more than 1.2 million books that can be translated into text-to-speech or digital Brail…",
            "url": "https://www.eff.org/deeplinks/2024/05/podcast-episode-building-tactile-internet",
            "urlToImage": "https://www.eff.org/files/banner_library/htfi-chancey-blog.png",
            "publishedAt": "2024-05-07T07:15:46Z",
            "content": "Blind and low-vision people have experienced remarkable gains in information literacy because of digital technologies, like being able to access an online library offering more than 1.2 million books… [+32886 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Stereogum"
            },
            "author": "Chris DeVille",
            "title": "Tupac Shakur Estate Threatens Drake With Legal Action Over AI Diss Track",
            "description": "After responding to Kendrick Lamar and his other foes with “Push Ups,” Drake unleashed a second diss track at K.dot over the weekend. This one, known as the “Taylor Made Freestyle,” features AI vocals from the late Tupac Shakur (a Kendrick hero who appears in…",
            "url": "https://www.stereogum.com/2260898/tupac-shakur-estate-threatens-drake-with-legal-action-over-ai-diss-track/news/",
            "urlToImage": "https://static.stereogum.com/uploads/2024/04/GettyImages-2089851832-1713989653-scaled.jpg",
            "publishedAt": "2024-04-24T20:17:24Z",
            "content": "After responding to Kendrick Lamar and his other foes with “Push Ups,” Drake unleashed a second diss track at K.dot over the weekend. This one, known as the “Taylor Made Freestyle,” features AI vocal… [+1222 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hanselman.com"
            },
            "author": "Scott Hanselman",
            "title": "Open Sourcing DOS 4",
            "description": "See the canonical version of this blog post at the Microsoft Open Source Blog! Ten years ago, Microsoft released the source for MS-DOS 1.25 and 2.0 to the Computer History Museum, and then later republished them for reference purposes. This code holds an impo…",
            "url": "https://www.hanselman.com/blog/open-sourcing-dos-4",
            "urlToImage": "https://www.hanselman.com/blog/content/binary/Windows-Live-Writer/Open-Sourcing-DOS-4_E712/clip_image002_5b6e1c02-95d8-4ee1-87af-ca53a8b0bd56.png",
            "publishedAt": "2024-04-25T16:46:13Z",
            "content": "See the canonical version of this blog post at the Microsoft Open Source Blog!\r\nTen years ago, Microsoft released the source for MS-DOS 1.25 and 2.0 to the Computer History Museum, and then later rep… [+2532 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Mozilla.org"
            },
            "author": "Aron Yohannes",
            "title": "Finn Myrstad reflects on holding tech companies accountable and ensuring that human rights are respected",
            "description": "At Mozilla, we know we can’t create a better future alone, that is why each year we will be highlighting the work of 25 digital leaders using technology to amplify voices, effect change, and build new technologies globally through our Rise 25 Awards. These st…",
            "url": "https://blog.mozilla.org/en/internet-culture/finn-myrstad-rise25-mozilla-norwegian-consumer-council/",
            "urlToImage": "https://blog.mozilla.org/wp-content/blogs.dir/278/files/2024/04/moz_Rise25Winners_1200x800_Finn-Myrstad.png",
            "publishedAt": "2024-04-18T16:00:00Z",
            "content": "At Mozilla, we know we cant create a better future alone, that is why each year we will be highlighting the work of 25 digital leaders using technology to amplify voices, effect change, and build new… [+4050 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Atlantic"
            },
            "author": "Stephanie Bai",
            "title": "A Show That Breaks the Curse of ‘Mid TV’",
            "description": "Culture and entertainment musts from Caroline Mimbs Nyce",
            "url": "https://www.theatlantic.com/newsletters/archive/2024/05/a-show-that-breaks-the-curse-of-mid-tv/678355/?utm_source=feed",
            "urlToImage": null,
            "publishedAt": "2024-05-12T11:00:00Z",
            "content": "This is an edition of The Atlantic Daily, a newsletter that guides you through the biggest stories of the day, helps you discover new ideas, and recommends the best in culture. Sign up for it here.We… [+7834 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Torrentfreak.com"
            },
            "author": "Andy Maxwell",
            "title": "New Piracy Shield Legal Challenge Filed at Italy’s Council of State",
            "description": "Long before the launch of Italy's Piracy Shield blocking system, ISP association ASSOProvider warned that trouble lay ahead and innocent parties were likely to get caught up in the crossfire. After failing to stop the launch of the platform with a legal bid i…",
            "url": "https://torrentfreak.com/new-piracy-shield-legal-challenge-filed-at-italys-council-of-state-240423/",
            "urlToImage": "https://torrentfreak.com/images/law-court-legal.png",
            "publishedAt": "2024-04-23T12:43:23Z",
            "content": "Since its launch early February, Italy’s Piracy Shield system and its operators have been at the center of a series of controversies. \r\nFrom blocking innocent platforms and bizarre public denials cla… [+5573 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The A.V. Club"
            },
            "author": "Mary Kate Carr",
            "title": "Riddick heads, your order for more Riddick is on its way",
            "description": "The long-prophesied fourth Riddick movie is actually coming. Star Vin Diesel and writer-director David Twohy have been teasing this new installment since the last film (Riddick) in 2013, so you may be forgiven for thinking that it might never come to fruition…",
            "url": "https://www.avclub.com/riddick-furya-to-begin-production-august-1851459141",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/7f227249d8c85b0d6813a38d8a8086e1.png",
            "publishedAt": "2024-05-06T19:44:20Z",
            "content": "The long-prophesied fourth Riddick movie is actually coming. Star Vin Diesel and writer-director David Twohy have been teasing this new installment since the last film (Riddick) in 2013, so you may b… [+2140 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slate Magazine"
            },
            "author": "Heather Schwedel",
            "title": "A Famous Restaurateur Insulted Jeff Bezos’ Girlfriend. Good.",
            "description": "I really don't think Lauren Sánchez needs that much defending.",
            "url": "https://slate.com/human-interest/2024/04/jeff-bezos-girlfriend-white-house-lauren-sanchez-wife-keith-mcnally.html",
            "urlToImage": "https://compote.slate.com/images/8f25677a-0898-48e6-9095-fea46a74be2f.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
            "publishedAt": "2024-04-18T17:36:57Z",
            "content": "Earlier this week, a moderately famous man publicly insulted a moderately famous woman, seemingly out of nowhere, calling her ABSOLUTELY REVOLTING in a social media post. I am about to tell you why I… [+6604 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Variety"
            },
            "author": "Diane Garrett",
            "title": "Hollywood’s AI Concerns Present New and Complex Challenges for Legal Eagles to Untangle",
            "description": "Technology has been disrupting Hollywood even longer than the L.A. district now synonymous with the entertainment business has existed. From Thomas Edison’s 1877 invention of the phonograph to the turn-of-the-19th-century introduction of the radio, followed b…",
            "url": "https://variety.com/2024/biz/features/hollywood-ai-concerns-legal-challenges-1235973275/",
            "urlToImage": "https://variety.com/wp-content/uploads/2024/04/ai_legal_issues.jpg?w=1000&h=562&crop=1",
            "publishedAt": "2024-04-17T16:30:00Z",
            "content": "Technology has been disrupting Hollywood even longer than the L.A. district now synonymous with the entertainment business has existed. From Thomas Edison’s 1877 invention of the phonograph to the tu… [+13490 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techdirt"
            },
            "author": "Mike Masnick",
            "title": "SCOTUS Needs To Take Up The Texas Age Verification Lawsuit",
            "description": "I think we could witness one of the most important First Amendment legal showdowns ever. The U.S. Supreme Court is being asked to rule on the constitutionality of mandatory age verification for porn websites. If the high court takes up the case, it would queu…",
            "url": "https://www.techdirt.com/2024/04/19/scotus-needs-to-take-up-the-texas-age-verification-lawsuit/",
            "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
            "publishedAt": "2024-04-19T19:52:03Z",
            "content": "from the no-brainer dept\r\nI think we could witness one of the most important First Amendment legal showdowns ever.\r\nThe U.S. Supreme Court is being asked to rule on the constitutionality of mandatory… [+3831 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Forbes"
            },
            "author": "Kalina Bryant, Contributor, \n Kalina Bryant, Contributor\n https://www.forbes.com/sites/kalinabryant/",
            "title": "Understanding Web3 And Its Impact On The Internet And Society",
            "description": "Understanding Web2 and its Limitations Web2 thrives on user-generated content and social interactions. Revolutionized global communication, commerce, and entertainment.",
            "url": "https://www.forbes.com/sites/kalinabryant/2024/04/23/understanding-web3-and-its-impact-on-the-internet-and-society/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6627d5efba3eba366ebf6202/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-04-23T15:41:24Z",
            "content": "Understanding Web3 And Its Impact On The Internet And Society\r\ngetty\r\nThe internet landscape, often called Web2, has revolutionized global communication, commerce, and entertainment. Platforms such a… [+9237 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Deadline"
            },
            "author": "Max Goldbart",
            "title": "Super Bowl Boosts Streaming Services – Ampere Report",
            "description": "At a time of Hollywood contraction, the streamers’ fierce push into live sports appears to be paying off, according to the latest research from Ampere Analysis. Ampere examined the SVoDs that hold NFL rights versus those without and found big gains in Q1 2024…",
            "url": "http://deadline.com/2024/04/super-bowl-streaming-services-paramount-plus-peacock-1235885676/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2024/03/GettyImages-2009165180.jpg?w=1024",
            "publishedAt": "2024-04-15T08:29:08Z",
            "content": "At a time of Hollywood contraction, the streamers’ fierce push into live sports appears to be paying off, according to the latest research from Ampere Analysis.\r\nAmpere examined the SVoDs that hold N… [+1995 chars]"
          },
          {
            "source": {
              "id": "techradar",
              "name": "TechRadar"
            },
            "author": "Julius Cerniauskas",
            "title": "Open Internet, web scraping, and AI: the unbreakable link",
            "description": "With existing technological capabilities, open access to publicly available web data is the only way to improve the quality of AI outputs.",
            "url": "https://www.techradar.com/pro/open-internet-web-scraping-and-ai-the-unbreakable-link",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/9qLvZJJFSTW3TJ9iBN5HFa-1200-80.jpg",
            "publishedAt": "2024-04-23T14:12:11Z",
            "content": "Last year, a nonprofit internet archival organization, The Internet Archive (IA), lost the first circuit court (Hachette v. Internet Archive) against four major publishers that sued IA for its decisi… [+8510 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Man City vs. Wolves Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "The defending champions take on Gary O'Neil's side at the Etihad.",
            "url": "https://www.cnet.com/tech/services-and-software/man-city-vs-wolves-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/7a470c7b346f6fffe75b58e0e84ab58b3e41beaa/hub/2024/05/03/e5390e3f-0ff8-41e1-ae17-bb704b8944a4/gettyimages-2150445038.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-05-04T12:30:24Z",
            "content": "Manchester City will look to extend their unbeaten English Premier League run to 20 matches on Saturday, as their title challenge continues against Wolves at home. \r\nCity's destiny is in their hands,… [+5245 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "Wolves vs. Arsenal Livestream: How to Watch English Premier League Soccer From Anywhere - CNET",
            "description": "The Gunners are looking to get their title challenge back on track at Molineux.",
            "url": "https://www.cnet.com/tech/services-and-software/wolves-vs-arsenal-livestream-how-to-watch-english-premier-league-soccer-from-anywhere/",
            "urlToImage": "https://www.cnet.com/a/img/resize/83c18c2b75231435a8de7b53e17f1ecaafb13f13/hub/2024/04/19/58b1fecc-43ec-41cd-8497-61960055baeb/gettyimages-2148621729.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-04-20T15:30:06Z",
            "content": "Arsenal head to the Midlands on Saturday looking to put its Champions League woes behind it and focus on its EPL title push as the club goes in search of a win against Wolves. \r\nThe Gunners crashed o… [+5448 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Atlantic"
            },
            "author": "Richard Stengel",
            "title": "Democracy Dies Behind Paywalls",
            "description": "The case for making journalism free—at least during the 2024 election",
            "url": "https://www.theatlantic.com/ideas/archive/2024/04/paywall-problems-media-trust-democracy/678032/?utm_source=feed",
            "urlToImage": null,
            "publishedAt": "2024-04-14T10:00:00Z",
            "content": "How many times has it happened? You’re on your computer, searching for a particular article, a hard-to-find fact, or a story you vaguely remember, and just when you seem to have discovered the exact … [+13217 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Fast Company"
            },
            "author": "Associated Press",
            "title": "King Kong, Superman, and Batman will be in the public domain in 5 years. Will their images be ruined?",
            "description": "The giant stuffed bear, its face a twisted smile, lumbers across the screen. Menacing music swells. Shadows mask unknown threats. Christopher Robin begs for his life. And is that a sledgehammer about to pulverize a minor character’s head?Thus unfolds the trai…",
            "url": "https://www.fastcompany.com/91107050/king-kong-superman-and-batman-will-be-in-the-public-domain-in-5-years-will-their-images-be-ruined",
            "urlToImage": "https://images.fastcompany.com/image/upload/f_auto,q_auto,c_fit/wp-cms-2/2024/04/p-1-91107050-ap-mickey-public-domain.jpg",
            "publishedAt": "2024-04-16T15:06:57Z",
            "content": "The giant stuffed bear, its face a twisted smile, lumbers across the screen. Menacing music swells. Shadows mask unknown threats. Christopher Robin begs for his life. And is that a sledgehammer about… [+8747 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Scientific American"
            },
            "author": "Aneli Bongers, José L. Torres",
            "title": "Low-Earth Orbit Faces a Spiraling Debris Threat",
            "description": "Millions of human-made objects travel at high speeds in low-Earth orbit, polluting space and increasing the chance of collision with satellites and other spacecraft",
            "url": "https://www.scientificamerican.com/article/low-earth-orbit-faces-a-spiraling-debris-threat/",
            "urlToImage": "https://static.scientificamerican.com/dam/m/546ceb477bc60a21/original/GettyImages-1301762780_WEB.jpg?w=1200",
            "publishedAt": "2024-04-22T11:00:00Z",
            "content": "Space is getting crowded, with junk. Essential satellites delivering navigation, weather forecasts, the Internet and other services face this threat daily. Old rockets, decaying spacecraft and human … [+8290 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Torrentfreak.com"
            },
            "author": "Ernesto Van der Sar",
            "title": "Gaming Companies Want Cloudflare to Unmask Pirate Site Operator",
            "description": "The Entertainment Software Association, which represents gaming giants including EA, Nintendo, Take-Two Interactive and Ubisoft, has set its eye on a Brazilian pirate site. The organization obtained a DMCA subpoena that requires Cloudflare to share names, add…",
            "url": "https://torrentfreak.com/gaming-companies-want-cloudflare-to-unmask-pirate-site-operator-240509/",
            "urlToImage": "https://torrentfreak.com/images/featuredlarge-e1599570834888.jpg",
            "publishedAt": "2024-05-09T18:11:02Z",
            "content": "The Entertainment Software Association (ESA) protects the rights of several of the largest game companies in the world. \r\nWith promiment members, including EA, Disney Interactive, Epic Games, Nintend… [+2778 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Theregister.com"
            },
            "author": "Connor Jones",
            "title": "UK's Investigatory Powers Bill to become law despite tech world opposition",
            "description": "Only minor changes from original proposals that kicked up privacy storm\nThe UK's contentious Investigatory Powers (Amendment) Bill (IPB) 2024 has officially received the King's nod of approval and will become law.…",
            "url": "https://www.theregister.com/2024/04/26/investigatory_powers_bill/",
            "urlToImage": "https://regmedia.co.uk/2021/03/29/shutterstock_eavesdrop_agent.jpg",
            "publishedAt": "2024-04-26T12:00:11Z",
            "content": "The UK's contentious Investigatory Powers (Amendment) Bill (IPB) 2024 has officially received the King's nod of approval and will become law.\r\nDubbed the \"snooper's charter\" by critics, it aims to wi… [+6569 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Forbes"
            },
            "author": "Alon Hillel-Tuch, Forbes Councils Member, \n Alon Hillel-Tuch, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/alonhilleltuch1/",
            "title": "Generative AI's Challenges To Cybersecurity",
            "description": "A society with knowledge about information privacy and data rights can better identify and defend against the consequences of malicious use.",
            "url": "https://www.forbes.com/sites/forbestechcouncil/2024/04/19/generative-ais-challenges-to-cybersecurity/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66213b85f742c04b6845bf3f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-04-19T10:15:00Z",
            "content": "Managing Partner at Stacked Capital, an early-stage technology fund focused on fundamental investing.\r\ngetty\r\nThe rapid rise of generative AI models is exciting. However, these powerful tools often l… [+6777 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Twistedsifter.com"
            },
            "author": "Trisha Leigh",
            "title": "His Wife Had A Spending Problem So He Put Her On A Budget, But When He Said No To A Girl’s Trip He Started To Look Bad",
            "description": "I think he's well within his rights here.",
            "url": "http://twistedsifter.com/2024/04/his-wife-had-a-spending-problem-so-he-put-her-on-a-budget-but-when-he-said-no-to-a-girls-trip-he-started-to-look-bad/",
            "urlToImage": "https://twistedsifter.com/wp-content/uploads/2024/04/AITAWifeAllowance.jpg",
            "publishedAt": "2024-04-14T19:46:04Z",
            "content": "The internet does not take kindly these days to men who seem in any way controlling of their partners.\r\nThat said, I think we can all agree that some people need help controlling their spending, rega… [+2886 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Olhardigital.com.br"
            },
            "author": "Pedro Spadoni",
            "title": "10 anos de Marco Civil da Internet: O que mudou (e pode mudar)?",
            "description": "O Marco Civil da Internet brasileira completa uma década – e o Olhar Digital conversou com especialistas sobre a importância e rumos da lei\nO post 10 anos de Marco Civil da Internet: O que mudou (e pode mudar)? apareceu primeiro em Olhar Digital.",
            "url": "https://olhardigital.com.br/2024/04/23/pro/10-anos-de-marco-civil-da-internet-o-que-mudou-e-pode-mudar/",
            "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2023/12/Destaque-Internet-no-Brasil-695x500.jpg",
            "publishedAt": "2024-04-23T15:03:25Z",
            "content": "Você trafega por sites, plataformas e redes sociais do jeito que trafega atualmente graças ao Marco Civil da Internet, que completa dez anos nesta terça-feira (23). Formalmente conhecido como Lei 12.… [+11182 chars]"
          },
          {
            "source": {
              "id": "al-jazeera-english",
              "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Israeli firms sold invasive surveillance tech to Indonesia: Report",
            "description": "Investigation by Amnesty, Haaretz, Tempo and others finds links between official bodies and agencies from at least 2017.",
            "url": "https://www.aljazeera.com/news/2024/5/3/israeli-firms-sold-invasive-surveillance-tech-to-indonesia-report",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2021/11/000_FO4CL.jpg?resize=1920%2C1440",
            "publishedAt": "2024-05-03T02:55:18Z",
            "content": "An international investigation has found that at least four Israeli-linked firms have been selling invasive spyware and cyber surveillance technology to Indonesia, which has no formal diplomatic ties… [+6499 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "EFF"
            },
            "author": "Christian Romero",
            "title": "Free Speech Around the World | EFFector 36.6",
            "description": "Let's gather around the campfire and tell tales of the latest happenings in the fight for privacy and free expression online. Take care in roasting your marshmallows while we share ways to protect your data from political campaigns seeking to target you; seek…",
            "url": "https://www.eff.org/deeplinks/2024/05/free-speech-around-world-effector-366",
            "urlToImage": "https://www.eff.org/files/banner_library/effector_banner_5.jpeg",
            "publishedAt": "2024-05-08T16:38:43Z",
            "content": "Let's gather around the campfire and tell tales of the latest happenings in the fight for privacy and free expression online. Take care in roasting your marshmallows while we share ways to protect yo… [+1187 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "EFF"
            },
            "author": "Christian Romero",
            "title": "About Face (Recognition) | EFFector 36.5",
            "description": "There are a lot of updates in the fight for our freedoms online, from a last-minute reauthorization bill to expand Section 702 (tell your senators to vote NO on the bill here!), a new federal consumer data privacy law (we deserve better!), and a recent draft …",
            "url": "https://www.eff.org/deeplinks/2024/04/about-face-recognition-effector-365",
            "urlToImage": "https://www.eff.org/files/banner_library/effector_banner_5.jpeg",
            "publishedAt": "2024-04-17T17:37:24Z",
            "content": "There are a lot of updates in the fight for our freedoms online, from a last-minute reauthorization bill to expand Section 702 (tell your senators to vote NO on the bill here!), a new federal consume… [+1139 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Coolest-gadgets.com"
            },
            "author": "Barry Elad",
            "title": "5G And Beyond Facts 2024",
            "description": "Introduction 5G And Beyond Facts: With the rise in digital life and the Internet of Things term, 5G technology is bringing changes to the unimaged world.",
            "url": "https://www.coolest-gadgets.com/5g-and-beyond-facts/",
            "urlToImage": null,
            "publishedAt": "2024-04-22T11:21:54Z",
            "content": "WHAT WE HAVE ON THIS PAGE\r\nIntroduction\r\n5G And Beyond Facts: With the rise in digital life and the Internet of Things term, 5G technology is bringing changes to the unimaged world. Just a decade ago… [+15594 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Newart.press"
            },
            "author": "Ernie Smith",
            "title": "The Copier Wars: Fair Use's Rude Awakening",
            "description": "Ernie Smith of Tedium has done a longer more detail deep-dive into the history of the photocopier and its implications, a follow-up on our previous post on the subject. With machines making it easy to copy information, businesses that once relied on the scarc…",
            "url": "https://newart.press/p/the-copier-wars-fair-uses-rude-awakening",
            "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F285ca975-87f5-42fe-a020-846afe1691a9_1286x660.png",
            "publishedAt": "2024-04-21T10:40:48Z",
            "content": "Ernie Smith of Tedium has done a longer more detail deep-dive into the history of the photocopier and its implications, a follow-up on our previous post on the subject.\r\nIn a world where copying and … [+11295 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Mike Wuerthele)",
            "title": "Drama about emulators on the App Store has only just begun",
            "description": "The weekend drama surrounding emulation on the App Store isn't the first one, and it won't be the last. Here's what you need to know about emulators in the App Store and the complexities surrounding them.Emulation is coming to the App Store - eventuallyTo mak…",
            "url": "https://appleinsider.com/articles/24/04/15/drama-about-emulators-on-the-app-store-has-only-just-begun",
            "urlToImage": "https://photos5.appleinsider.com/gallery/59317-121063-retropile1-xl.jpg",
            "publishedAt": "2024-04-15T20:20:04Z",
            "content": "Emulation is coming to the App Store - eventually\r\nThe weekend drama surrounding emulation on the App Store isn't the first one, and it won't be the last. Here's what you need to know about emulators… [+5476 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Netzpolitik.org"
            },
            "author": "Anna Biselli",
            "title": "Digitale-Dienste-Gesetz: Unsicherheit für kleine Anbieter",
            "description": "Kommentarspalten gibt es an vielen Orten im Netz. – Alle Rechte vorbehalten IMAGO / Ikon Images\r\nDas Internet besteht nicht nur aus Google und Meta, sondern auch aus Hobby-Foren und Back-Blogs mit Kommentarspalte. Doch welche Regeln des europäischen Digitale-…",
            "url": "https://netzpolitik.org/2024/digitale-dienste-gesetz-unsicherheit-fuer-kleine-anbieter/",
            "urlToImage": "https://cdn.netzpolitik.org/wp-upload/2024/04/sprechblasen_megafon-1200x675.jpg",
            "publishedAt": "2024-04-19T13:48:14Z",
            "content": "Der Digital Services Act (DSA) gilt seit Februar. Dieses Digitale-Dienste-Gesetz der EU regelt, welche Pflichten Online-Diensteanbieter haben, wie sie mit rechtswidrigen Inhalten umgehen sollen und w… [+7829 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "IndieWire"
            },
            "author": "Tony Maglio",
            "title": "Sydney Sweeney to Play Boxer Christy Martin in Biopic",
            "description": "Because she didn't get enough blood in her eyes on \"Immaculate.\"",
            "url": "https://www.indiewire.com/news/breaking-news/sydney-sweeney-to-play-boxer-christy-martin-biopic-1235002213/",
            "urlToImage": "https://www.indiewire.com/wp-content/uploads/2024/05/sydney-sweeney-christy-martin3.jpg?w=650",
            "publishedAt": "2024-05-08T21:14:26Z",
            "content": "Sydney Sweeney is getting in the ring.\r\nThe breakout from, well, basically everything she’s done lately (“Anyone but You,” “Euphoria,” and “The White Lotus,” to name a few) is set to play boxer Chris… [+2433 chars]"
          }
        ]
      };

    if (data.status === "ok") {
        let newsHtml = '<h3>Recent News</h3>';
        data.articles.forEach(article => {
            newsHtml += `
                <div class="news-item">
                    <h4><a href="${article.url}" target="_blank">${article.title}</a></h4>
                    <p>${article.description}</p>
                </div>
            `;
        });
        document.getElementById('NewsContent').innerHTML = newsHtml;
    }
});


function filterNews() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        const title = item.querySelector('h4 a').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        if (title.includes(searchText) || description.includes(searchText)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}