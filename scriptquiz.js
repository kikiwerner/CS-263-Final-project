const questions = [
    {
      question: "What does ISP stand for?",
      options: ["Internet Service Provider", "Internet Speed Provider", "Internet Security Protocol", "Internet Sharing Platform"],
      answer: 0
    },
    {
      question: "What technology allows wireless Internet access?",
      options: ["DSL", "Fiber Optic", "Satellite", "Wi-Fi"],
      answer: 3
    },
    {
      question: "Which of the following is NOT a web browser?",
      options: ["Chrome", "Firefox", "Internet Explorer", "WhatsApp"],
      answer: 3
    },
    {
      question: "What is the main purpose of a modem in internet access?",
      options: ["To convert digital signals to analog signals", "To convert analog signals to digital signals", "To provide firewall protection", "To store website data"],
      answer: 0
    },
    {
      question: "Which of the following is a common method of wired internet access?",
      options: ["DSL", "Wi-Fi", "3G", "4G"],
      answer: 0
    },
    {
      question: "What does DNS stand for?",
      options: ["Domain Name System", "Digital Network Service", "Data Network Security", "Dynamic Network Solutions"],
      answer: 0
    },
    {
      question: "Which organization is responsible for assigning IP addresses globally?",
      options: ["IEEE", "ICANN", "IETF", "ITU"],
      answer: 1
    },
    {
      question: "Which protocol is used to secure web traffic?",
      options: ["HTTP", "FTP", "SMTP", "HTTPS"],
      answer: 3
    },
    {
      question: "What is the maximum theoretical speed of a standard Ethernet connection?",
      options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
      answer: 3
    },
    {
      question: "Which of the following is not a top-level domain?",
      options: [".com", ".net", ".org", ".web"],
      answer: 3
    },
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Highly Textured Markup Language", "Hyperlinking Text Manipulation Language"],
      answer: 0
    },
    {
      question: "Which of the following is a popular programming language used for web development?",
      options: ["Java", "Python", "C++", "JavaScript"],
      answer: 3
    },
    {
      question: "What is the file extension for a Cascading Style Sheets (CSS) file?",
      options: [".html", ".css", ".js", ".php"],
      answer: 1
    },
    {
      question: "What is the main purpose of a router in internet access?",
      options: ["To connect multiple devices to the internet", "To provide firewall protection", "To convert digital signals to analog signals", "To store website data"],
      answer: 0
    },
    {
      question: "What is the function of HTTP in internet communication?",
      options: ["To transfer files between clients and servers", "To format web pages", "To provide secure communication", "To define the structure of a webpage"],
      answer: 0
    },
    {
      question: "Which of the following is a type of broadband internet connection?",
      options: ["Dial-up", "DSL", "Satellite", "ISDN"],
      answer: 1
    },
    {
      question: "What is the purpose of a firewall in internet security?",
      options: ["To block unauthorized access", "To increase internet speed", "To encrypt data", "To enhance website performance"],
      answer: 0
    },
    {
      question: "What does URL stand for?",
      options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Routing Language", "Uniform Routing Language"],
      answer: 1
    },
    {
      question: "Which protocol is commonly used for sending and receiving emails?",
      options: ["FTP", "SMTP", "HTTP", "TCP"],
      answer: 1
    }
  ];
  
  let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const submitBtn = document.getElementById('submitBtn');

function showQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = '';
  q.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => {
      checkAnswer(index);
    });
    optionsElement.appendChild(button);
  });
}

function checkAnswer(index) {
  if (index === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = 'none';
  optionsElement.style.display = 'none';
  submitBtn.style.display = 'none';
  resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
}

submitBtn.addEventListener('click', () => {
  showResult();
});

showQuestion();