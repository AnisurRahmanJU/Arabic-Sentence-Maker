// Random colorful background
const backgrounds = ["#FFCDD2","#C8E6C9","#BBDEFB","#FFF9C4","#D1C4E9","#FFE0B2","#B2EBF2","#FFCCBC"];
document.body.style.background = backgrounds[Math.floor(Math.random()*backgrounds.length)];

// Random button colors
function randomColor() {
  const colors = ["#e91e63","#9c27b0","#3f51b5","#03a9f4","#4caf50","#ff9800","#ff5722","#795548"];
  return colors[Math.floor(Math.random()*colors.length)];
}

function shuffleArray(arr){ 
  return arr.sort(() => Math.random() - 0.5); 
}

// Categories
const categories = [
  {
    name: "সহজ বাক্য",
    sentences: [
      {bangla:"এটি একটি কলম।", english:"This is a pen.", arabic:"هٰذَا قَلَمٌ", words:["هٰذَا","قَلَمٌ"]},
      {bangla:"এটি একটি বই।", english:"This is a book.", arabic:"هٰذَا كِتَابٌ", words:["كِتَابٌ","هٰذَا"]},
      {bangla:"সে খাচ্ছে।", english:"He is eating.", arabic:"هُوَ يَأْكُلُ", words:["هُوَ","يَأْكُلُ"]},
      {bangla:"আমি ঘরে আছি।", english:"I am at home.", arabic:"أَنَا فِي الْبَيْتِ", words:["أَنَا","فِي","الْبَيْتِ"]},
      {bangla:"পাখি উড়ছে।", english:"The bird is flying.", arabic:"الطَّائِرُ يَطِيرُ", words:["الطَّائِرُ","يَطِيرُ"]},
      {bangla:"সে বই পড়ছে।", english:"She is reading a book.", arabic:"هِيَ تَقْرَأُ كِتَابًا", words:["هِيَ","تَقْرَأُ","كِتَابًا"]},
      {bangla:"আমার নাম জন।", english:"My name is John.", arabic:"اِسْمِي جُون", words:["اِسْمِي","جُون"]},
      {bangla:"তুমি কোথায় যাচ্ছ?", english:"Where are you going?", arabic:"أَيْنَ ذَاهِبٌ؟", words:["أَيْنَ","ذَاهِبٌ"]},
      {bangla:"সে হাসছে।", english:"He is smiling.", arabic:"هُوَ يَبْتَسِمُ", words:["هُوَ","يَبْتَسِمُ"]},
      {bangla:"আমি পানি খাচ্ছি।", english:"I am drinking water.", arabic:"أَنَا أَشْرَبُ الْمَاءَ", words:["أَنَا","أَشْرَبُ","الْمَاءَ"]},
      {bangla:"আমরা খেলতে যাচ্ছি।", english:"We are going to play.", arabic:"نَحْنُ ذَاهِبُونَ لِلَّعِبِ", words:["نَحْنُ","ذَاهِبُونَ","لِلَّعِبِ"]},
      {bangla:"সে গান শুনছে।", english:"He is listening to a song.", arabic:"هُوَ يَسْمَعُ أُغْنِيَةً", words:["هُوَ","يَسْمَعُ","أُغْنِيَةً"]},
      {bangla:"আমরা বাইরে যাচ্ছি।", english:"We are going outside.", arabic:"نَحْنُ نَخْرُجُ إِلَى الْخَارِجِ", words:["نَحْنُ","نَخْرُجُ","إِلَى","الْخَارِجِ"]},
      {bangla:"সে পানি খাচ্ছে।", english:"She is drinking water.", arabic:"هِيَ تَشْرَبُ الْمَاءَ", words:["هِيَ","تَشْرَبُ","الْمَاءَ"]},
      {bangla:"ছেলেটি ঘুমাচ্ছে।", english:"The boy is sleeping.", arabic:"الْوَلَدُ نَائِمٌ", words:["الْوَلَدُ","نَائِمٌ"]},
      {bangla:"ছাত্রী পড়ছে।", english:"The student is studying.", arabic:"الطَّالِبَةُ تَدْرُسُ", words:["الطَّالِبَةُ","تَدْرُسُ"]},
      {bangla:"আমি খেলতে যাচ্ছি।", english:"I am going to play.", arabic:"أَنَا ذَاهِبٌ لِلَّعِبِ", words:["أَنَا","ذَاهِبٌ","لِلَّعِبِ"]},
      {bangla:"তুমি গান গাইছ।", english:"You are singing.", arabic:"أَنْتَ تُغَنِّي", words:["أَنْتَ","تُغَنِّي"]},
      {bangla:"সে দৌড়াচ্ছে।", english:"He is running.", arabic:"هُوَ يَرْكُضُ", words:["هُوَ","يَرْكُضُ"]},
      {bangla:"আমরা বই পড়ছি।", english:"We are reading books.", arabic:"نَحْنُ نَقْرَأُ الْكُتُبَ", words:["نَحْنُ","نَقْرَأُ","الْكُتُبَ"]}
      // এখানে একইভাবে আরও ৮০টি বাক্য যোগ করতে হবে
    ]
  },
  {
    name: "মধ্যম বাক্য",
    sentences: [
      {bangla:"আমি একটি বই পড়ছি।", english:"I am reading a book.", arabic:"أَنَا أَقْرَأُ كِتَابًا", words:["أَنَا","أَقْرَأُ","كِتَابًا"]},
      {bangla:"সে একটি টেবিল কিনেছে।", english:"He bought a table.", arabic:"هُوَ اشْتَرَى طَاوِلَةً", words:["طَاوِلَةً","هُوَ","اشْتَرَى"]},
      {bangla:"আমরা বাজারে যাচ্ছি।", english:"We are going to the market.", arabic:"نَحْنُ ذَاهِبُونَ إِلَى السُّوقِ", words:["نَحْنُ","ذَاهِبُونَ","إِلَى","السُّوقِ"]},
      {bangla:"তুমি আমাকে সাহায্য করছ।", english:"You are helping me.", arabic:"أَنْتَ تُسَاعِدُنِي", words:["أَنْتَ","تُسَاعِدُنِي"]},
      {bangla:"ছেলেটি ফুটবল খেলছে।", english:"The boy is playing football.", arabic:"الْوَلَدُ يَلْعَبُ كُرَةَ الْقَدَمِ", words:["الْوَلَدُ","يَلْعَبُ","كُرَةَ","الْقَدَمِ"]},
      {bangla:"আমরা সিনেমা দেখতে যাচ্ছি।", english:"We are going to watch a movie.", arabic:"نَحْنُ ذَاهِبُونَ لِمُشَاهَدَةِ فِيلْمٍ", words:["نَحْنُ","ذَاهِبُونَ","لِمُشَاهَدَةِ","فِيلْمٍ"]},
      {bangla:"সে নতুন গান শিখছে।", english:"She is learning a new song.", arabic:"هِيَ تَتَعَلَّمُ أُغْنِيَةً جَدِيدَةً", words:["هِيَ","تَتَعَلَّمُ","أُغْنِيَةً","جَدِيدَةً"]},
      {bangla:"আমি চা খাচ্ছি।", english:"I am drinking tea.", arabic:"أَنَا أَشْرَبُ الشَّايَ", words:["أَنَا","أَشْرَبُ","الشَّايَ"]},
      {bangla:"তুমি স্কুলে যাচ্ছ।", english:"You are going to school.", arabic:"أَنْتَ ذَاهِبٌ إِلَى الْمَدْرَسَةِ", words:["أَنْتَ","ذَاهِبٌ","إِلَى","الْمَدْرَسَةِ"]},
      {bangla:"আমরা কুকুর খেলাচ্ছি।", english:"We are playing with the dog.", arabic:"نَحْنُ نَلْعَبُ مَعَ الْكَلْبِ", words:["نَحْنُ","نَلْعَبُ","مَعَ","الْكَلْبِ"]}
      // আরও ৯০টি বাক্য একই প্যাটার্নে যোগ করতে হবে
    ]
  },
  
  {
    name: "কঠিন বাক্য",
    sentences: [
      {bangla:"মেয়ে খেলা করছে।", english:"The girl is playing.", arabic:"الْبِنْتُ تَلْعَبُ", words:["الْبِنْتُ","تَلْعَبُ"]},
      {bangla:"ছেলে দৌড়াচ্ছে।", english:"The boy is running.", arabic:"الْوَلَدُ يَرْكُضُ", words:["يَرْكُضُ","الْوَلَدُ"]},
      {bangla:"শিক্ষক ক্লাসে পড়াচ্ছেন।", english:"The teacher is teaching in the class.", arabic:"الْمُعَلِّمُ يُدَرِّسُ فِي الْفَصْلِ", words:["الْمُعَلِّمُ","يُدَرِّسُ","فِي","الْفَصْلِ"]},
      {bangla:"ছাত্ররা বই পড়ছে।", english:"The students are reading books.", arabic:"الطُّلاَّبُ يَقْرَأُونَ الْكُتُبَ", words:["الطُّلاَّبُ","يَقْرَأُونَ","الْكُتُبَ"]},
      {bangla:"বৃক্ষ পাতায় ঝুলছে।", english:"Leaves are hanging on the tree.", arabic:"الأَوْرَاقُ مُتَدَلِّيَةٌ عَلَى الشَّجَرَةِ", words:["الأَوْرَاقُ","مُتَدَلِّيَةٌ","عَلَى","الشَّجَرَةِ"]},
      {bangla:"ছেলেটি দ্রুত দৌড়াচ্ছে।", english:"The boy is running fast.", arabic:"الْوَلَدُ يَرْكُضُ سَرِيعًا", words:["الْوَلَدُ","يَرْكُضُ","سَرِيعًا"]},
      {bangla:"সে তার কাজ সম্পন্ন করছে।", english:"He is completing his work.", arabic:"هُوَ يُكْمِلُ عَمَلَهُ", words:["هُوَ","يُكْمِلُ","عَمَلَهُ"]},
      {bangla:"আমরা প্রকৃতি ভ্রমণ করছি।", english:"We are exploring nature.", arabic:"نَحْنُ نَسْتَكْشِفُ الطَّبِيعَةَ", words:["نَحْنُ","نَسْتَكْشِفُ","الطَّبِيعَةَ"]},
      {bangla:"ছাত্রীরা পরীক্ষা দিচ্ছে।", english:"The students are taking the exam.", arabic:"الطُّلاَّبُ يَخْتَبِرُونَ", words:["الطُّلاَّبُ","يَخْتَبِرُونَ"]},
      {bangla:"সে কঠোর পরিশ্রম করছে।", english:"He is working hard.", arabic:"هُوَ يَعْمَلُ جَادًّا", words:["هُوَ","يَعْمَلُ","جَادًّا"]}
      // আরও ৯০টি বাক্য যোগ করতে হবে
    ]
  }
];


let currentCategory = 0;
let currentSentence = 0;
let points = 0;

const topText = document.getElementById('topText');
const wordsDiv = document.getElementById('words');
const sentenceDiv = document.getElementById('sentence');
const indicator = document.getElementById('indicator');
const nextBtn = document.getElementById('nextBtn');
const scoreDiv = document.getElementById('score');
const categorySelect = document.getElementById('categorySelect');

// Populate category select
categories.forEach((c,i)=>{
  const option = document.createElement('option');
  option.value = i;
  option.innerText = c.name;
  categorySelect.appendChild(option);
});

// Load sentence
function loadSentence(catIdx, sentIdx){
  indicator.innerHTML = "";
  nextBtn.style.display = 'none';
  sentenceDiv.innerHTML = "";
  wordsDiv.innerHTML = "";

  const q = categories[catIdx].sentences[sentIdx];
  topText.innerHTML = `<b>বাংলা:</b> ${q.bangla} <br> <b>English:</b> ${q.english}`;

  shuffleArray(q.words.slice()).forEach((w,i)=>{
    const span = document.createElement('span');
    span.className = 'word';
    span.id = 'word'+i;
    span.draggable = true;
    span.innerText = w;
    span.style.background = randomColor();
    span.addEventListener('dragstart', e => 
      e.dataTransfer.setData('text', e.target.id)
    );
    wordsDiv.appendChild(span);
  });
}

// Drag & drop
sentenceDiv.addEventListener('dragover', e => e.preventDefault());

sentenceDiv.addEventListener('drop', e => {
  e.preventDefault();
  const id = e.dataTransfer.getData('text');
  const draggedWord = document.getElementById(id);
  sentenceDiv.appendChild(draggedWord);

  const q = categories[currentCategory].sentences[currentSentence];

  if(sentenceDiv.children.length === q.words.length){
    const formed = Array.from(sentenceDiv.children).map(c=>c.innerText).join(' ');
    if(formed === q.arabic){
      indicator.style.color = 'green';
      indicator.innerHTML = `সঠিক! +1 পয়েন্ট`;
      points++;
      scoreDiv.innerText = `পয়েন্ট: ${points}`;
      nextBtn.style.display = 'inline-block';
    } else {
      indicator.style.color = 'red';
      indicator.innerHTML = `ভুল! আবার চেষ্টা করুন।`;
    }
  }
});

// Next sentence
nextBtn.addEventListener('click', ()=>{
  currentSentence++;
  if(currentSentence >= categories[currentCategory].sentences.length){
    currentSentence = 0;
    alert("এই ক্যাটাগরির সব বাক্য শেষ। অন্য ক্যাটাগরি নির্বাচন করুন।");
  }
  loadSentence(currentCategory, currentSentence);
});

// Change category
categorySelect.addEventListener('change', e=>{
  currentCategory = parseInt(e.target.value);
  currentSentence = 0;
  loadSentence(currentCategory, currentSentence);
});

// Initial load
loadSentence(currentCategory, currentSentence);
