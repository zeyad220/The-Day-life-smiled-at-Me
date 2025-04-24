// Memory data
const memories = [
    {
        id: 1,
        title: "The Day I Fell in Love With You",
        description: "يمكن كنت بدأت اقع فحبك من اليوم اللي قبله خصوصا وانا قريب منك فالمترو ومش انتي لوحدك اللي كنتي عايزة تبوسيني بس , اليوم دا بالذات اللي اكدلي كل اللي حاسه تجاهك مقدرتش اقاوم جمال نظراتك وضحكتك وحتى نومتك على كتفي اللي حسستني اني بملك الدنيا من شخص جاي يقابل حد صاحبه لشخص مروح بحبيب عمره كله",
        imageUrl: "1.png",
        date: "july 23, 2023"
    },
    {
        id: 2,
        title: "The day I knew for sure that your heart chose me, and that you truly wanted to stay by my side forever",
        description: "اليوم اللى اتأكدت فيه فعلا انك عيزاني ومتمسكة بيا وزي ما بيقولوا كان سبب فاني اعيد كل حساباتي عشان ابقى معاكي فأقرب وقت لو هشتغل صبح وليل",
        imageUrl: "2.png",
        date: "February 26, 2025"
    }
];

// Initialize memories gallery
function initMemories() {
    const memoriesGrid = document.querySelector('.memories-grid');
    memories.forEach(memory => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.innerHTML = `
            <img src="${memory.imageUrl}" alt="${memory.title}" class="memory-image">
            <div class="memory-content">
                <div class="memory-date">${memory.date}</div>
                <h3 class="memory-title">${memory.title}</h3>
                <p>${memory.description}</p>
            </div>
        `;
        memoriesGrid.appendChild(card);
    });
}

// Love Letter functionality
function openLetter() {
    const letterContent = document.getElementById('letter-content');
    const letterFront = letterContent.querySelector('.letter-front');
    const letterInside = letterContent.querySelector('.letter-inside');
    
    letterFront.classList.add('hidden');
    letterInside.classList.remove('hidden');
}

// Birthday Cake functionality
let isLit = false;
let hasWished = false;

function handleCake() {
    const flame = document.getElementById('flame');
    const button = document.getElementById('cakeButton');
    
    if (!isLit) {
        flame.classList.remove('hidden');
        button.textContent = 'معلش هنتعب نفسك شوية بس محتاجين تنفخي وتتمني امنية';
        isLit = true;
    } else if (!hasWished) {
        flame.classList.add('hidden');
        button.textContent = 'أمنية كمان؟';
        showWishMade();
        hasWished = true;
    } else {
        flame.classList.remove('hidden');
        button.textContent = 'يلا هوفي تاني';
        hasWished = false;
    }
}

function showWishMade() {
    alert('ربنا ينولك كل اللي بتتمنيه يحبيبتي وتشوفي نفسك بعيوني اللهم امين');
}

// Wishes carousel
const wishes = [
    "والله شوف مبدأيا كدا نفسي افضل ابوسك لحد ما يجيلي جفاف",
    "نفسي اتجوزك وابقى زي دلوقتي بعد سنة او اتنين بحتفل وانتي فحضني",
    "أتمني اكون دايما الراجل اللي بتحلمي بيه واكون معاكي طول عمري",
    "أتمني اقدر اسعدك وابينلك قد ايه انا بحبك فكل مناسبة وغير مناسبة يا دكتورة",
    "أوعي تسيبيني يا شيماء لأي سبب خليكي معايا ودايما افتكري ان مهما كان ايه السبب فهو مش اهم منك",
    "أوعي تزعلي مني فيوم ومتقوليش والله ما تهوني عليا",
    "أوعي تزهقي مني لو فمرة اتأخرت فاني ابقى معاكي او الدنيا اتصعبت كله هنعديه سوا والله ما هسيبك",
    "انا بحبك اوي اوي اوي , انا هايم فحبك لحد ما اخترع درجة توصف وتعبر اكتر",
    "ربنا يجمعنا سوا دنيا واخرة يا أجمل حد فالدنيا"
];

let currentWishIndex = 0;

function updateWish() {
    const wishCard = document.getElementById('wishCard');
    wishCard.innerHTML = `<p class="wish-text">${wishes[currentWishIndex]}</p>`;
}

function nextWish() {
    currentWishIndex = (currentWishIndex + 1) % wishes.length;
    updateWish();
}

function prevWish() {
    currentWishIndex = (currentWishIndex - 1 + wishes.length) % wishes.length;
    updateWish();
}

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initMemories();
    updateWish();
});
