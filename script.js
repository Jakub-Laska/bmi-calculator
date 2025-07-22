// burger menu
const burgerBtn = document.getElementById('burger-btn');
burgerBtn.addEventListener('click', ()=>{
    const burgerMenuBtns = document.getElementById('burger-menu-btns');
    const burgerMenu = document.querySelector('#burger-menu');
    burgerMenuBtns.classList.toggle('burger-clicked');
    burgerBtn.classList.toggle('burger-clicked');
    burgerMenu.classList.toggle('clicked');
})


// info btn
const infoBtn = document.querySelectorAll('.info-btn');
let infoToggle = false;

infoBtn.forEach(element => {
    element.addEventListener('click', ()=> {
        const infoModal = document.querySelector('.info-modal')

        infoModal.classList.toggle('toggle')
});
})


//  FIXED HEADER TOGGLE

const header = document.getElementById('fixed-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const scrolledPastVH = window.scrollY > window.innerHeight * 0.1;
    const burgerMenu = document.querySelector('#burger-menu');


    if (!scrolledPastVH) {
        // Hide header completely before 100vh
        header.classList.remove('visible');
        burgerMenu.classList.remove('invisible');
    } else {
        header.classList.add('visible'); // Ensure it's enabled
        burgerMenu.classList.add('invisible');

        if (window.scrollY > lastScrollY) {
            // Scrolling down
            header.classList.remove('visible');
            burgerMenu.classList.remove('invisible');

        } else {
            // Scrolling up
            header.classList.add('visible');
            burgerMenu.classList.add('invisible');
        }
    }

    lastScrollY = window.scrollY;
});


// go to the top
const logo = document.querySelectorAll('.logo');
logo.forEach(element => {
    element.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
});

// mbi formula buttons

const imperialBtn = document.querySelectorAll('.imperial-btn');

imperialBtn.forEach(element => {
    element.addEventListener('click', () => {
    const metricFormula = document.getElementById('metric-formula');
    metricFormula.classList.toggle('hidden');
    const imperialFormula = document.getElementById('imperial-formula');
    imperialFormula.classList.toggle('hidden');
    imperialBtn.forEach(element => {
        element.classList.toggle('disabled-btn');
    });
    metricBtn.forEach(element => {
        element.classList.toggle('disabled-btn');
    });
});
});

const metricBtn = document.querySelectorAll('.metric-btn');

metricBtn.forEach(element => {
    element.addEventListener('click', () => {
    const metricFormula = document.getElementById('metric-formula');
    metricFormula.classList.toggle('hidden');
    const imperialFormula = document.getElementById('imperial-formula');
    imperialFormula.classList.toggle('hidden');
    imperialBtn.forEach(element => {
        element.classList.toggle('disabled-btn');
    });
    metricBtn.forEach(element => {
        element.classList.toggle('disabled-btn');
    });

});
});

// gender input
const genderBtn = document.querySelectorAll('.gender-btn');

genderBtn.forEach(element => {
        element.addEventListener('click', (event)=> {
            genderBtn.forEach(element => {
                element.classList.remove('selected');
            });
            event.target.classList.add('selected');

        })
});

// clear btn

const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', clearBtnFunction);

function clearBtnFunction() {
    const bmiFrom = document.querySelector('.form');
    bmiFrom.reset();
    genderBtn.forEach(element => {
    element.classList.remove('selected');
    });

        imperialBtn.forEach(element => {
        element.classList.remove('disabled-btn');
    });
    metricBtn.forEach(element => {
        element.classList.add('disabled-btn');
    });
    const metricFormula = document.getElementById('metric-formula');
    metricFormula.classList.remove('hidden');
    const imperialFormula = document.getElementById('imperial-formula');
    imperialFormula.classList.add('hidden');
}

// calculate btn

const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', ()=>{

    const ageInput = document.getElementById('age-input')
    let ageValue = ageInput.value;

    const weightInput = document.getElementById('weight-input');
    let weightValue = weightInput.value;

    const heightInput = document.getElementById('height-input');
    let heightValue = heightInput.value;

    console.log(weightValue / (heightValue ** 2) * 10000);

    const bmiForm = document.querySelector('.form');
    bmiForm.classList.toggle('hidden');
    const bmiResultWindow = document.querySelector('.bmi-result-window');
    bmiResultWindow.classList.toggle('hidden');

    clearBtnFunction();


})

// dark mode

const darkmodeBtn = document.querySelectorAll('.dark-mode');
let isDark = false;

darkmodeBtn.forEach(el => {
    el.addEventListener('click', ()=>{
    el.classList.toggle('light-mode-btn-icon');
    const whoGraph = document.getElementById('who-graph');
    whoGraph.classList.toggle('dark-who-graph');

        if (isDark) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
    isDark = !isDark;
    })
});


function enableDarkMode() {
    const r = document.documentElement;
    r.style.setProperty('--cold-blue', '#1e2a38');
    r.style.setProperty('--primary-blue', '#2e3b4e');
    r.style.setProperty('--primary-white', '#1a1a1a');
    r.style.setProperty('--primary-font-color', '#f0f0f0');
    r.style.setProperty('--gradient', 'linear-gradient(to bottom right, #1a1a1a 20%, #2e3b4e 60%, #3b4d61 100%)');
}
function enableLightMode() {
    const r = document.documentElement;
    r.style.setProperty('--cold-blue', '#f0f8ff');
    r.style.setProperty('--primary-blue', '#d0e9ff9a');
    r.style.setProperty('--primary-white', '#fff');
    r.style.setProperty('--primary-font-color', '#000');
    r.style.setProperty('--gradient', 'linear-gradient(to bottom right, #ffffff 20%, #d0e9ffcc 60%, #a3d4ff80 100%)');
}
// text animation on sroll

// Select all text elements you want to animate
const textElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add class when in viewport
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of element is visible
});

textElements.forEach(el => observer.observe(el));


// more info hover popup
const underscored = document.querySelectorAll('u');

underscored.forEach(e => {
    e.addEventListener('mouseenter', () => {
        e.style.backgroundColor = 'transparent';
        const popupInfo = document.createElement('div');
        popupInfo.classList.add('popup-info')
        const info = e.getAttribute('data-info') || 'no info';
        popupInfo.textContent = info;
        e.appendChild(popupInfo);
    });

    e.addEventListener('mouseleave', () => {
        e.style.backgroundColor = 'var(--cold-blue)';

        const popupInfo = e.querySelector('.popup-info');
        if (popupInfo) {
            setTimeout(() => {
            e.removeChild(popupInfo);                
            }, 300);
        }
    });
})

// bubbles overlay
function generateBubbles(count = 100) {
  const background = document.querySelector('.bubble-background');
  const fragment = document.createDocumentFragment();

const oceanColors = [
  'rgba(173, 216, 230, OP)',  // light blue (pastel sky blue)
  'rgba(176, 224, 230, OP)',  // powder blue (soft pastel blue)
  'rgba(175, 238, 238, OP)',  // pale turquoise (soft aqua)
  'rgba(224, 255, 255, OP)',  // light cyan (very pale aqua)
  'rgba(240, 248, 255, OP)',  // alice blue (very pale blue)
  'rgba(255, 255, 255, OP)',  // pure white (for highlights)
  'rgba(191, 239, 255, OP)',  // soft baby blue
  'rgba(198, 234, 237, OP)',  // pale teal
];

  for (let i = 0; i < count; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 50 + 10;
    const opacity = Math.random() * 0.6 + 0.3; // 0.3 to 0.9
    const color = oceanColors[Math.floor(Math.random() * oceanColors.length)].replace('OP', opacity.toFixed(2));

    Object.assign(bubble.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 150}vh`,
      animationDuration: `${8 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 4}s`,
      opacity: opacity,
      backgroundColor: color,
    borderColor: color,
      boxShadow: `
        inset 0 4px 10px rgba(255 255 255 / 0.8),
        0 0 10px ${color}
      `,
    });

    fragment.appendChild(bubble);
  }

  background.appendChild(fragment);
}

generateBubbles();

// title icons
const titles = document.querySelectorAll('strong');

titles.forEach(element => {
    element.classList.add
});





// language button

const langBtn = document.querySelectorAll('.lang-btn');
let isPolish = false;

langBtn.forEach(el => {
    el.addEventListener('click', ()=>{
    const langIcon = document.querySelectorAll('.lang-btn-icon');
        langIcon.forEach(el => {
            el.classList.toggle('lang-clicked');
        });

    const langText = document.querySelectorAll('.lang-btn-text');

      if (!isPolish) {
    applyTranslations(polishTranslations);
        langText.forEach(el => {
            el.textContent = 'PL';
        });

    document.documentElement.lang = 'pl';  // Set html lang attribute to Polish
  } else {
    applyTranslations(englishTranslations);
        langText.forEach(el => {
            el.textContent = 'EN';
        }); 
        document.documentElement.lang = 'en';  // Set html lang attribute to English
  }
  isPolish = !isPolish;

    })
});

function applyTranslations(translations) {
  document.querySelectorAll('[data-translate-key]').forEach(el => {
    const key = el.getAttribute('data-translate-key');
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });
}



const englishTranslations = {
  "1": "FishScale Body Mass Index Calculator",
  "2": "Enter your height and weight to see how your numbers stack up using the Body Mass Index (BMI) scale. This easy-to-use calculator gives you a quick insight into whether you're underweight, at a healthy weight, overweight, or obese. It's a simple way to stay informed about your overall health and take the first step toward better well-being.",
  "3": "Enter your Details below:",
  "4": "Metric",
  "5": "Imperial",
  "6": "Gender:",
  "7": "male",
  "8": "female",
  "9": "other",
  "10": "clear",
  "11": "calculate",
  "12": "What your BMI result means...",
  "13": "Your BMI falls into a specific category that reflects your general weight status. A lower BMI may indicate you're underweight, while a higher BMI could suggest overweight or obesity. These categories help assess potential health risks, but remember — BMI is a rough estimate and doesn't consider factors like muscle mass, bone density, or overall fitness.",
  "14": "BMI Categories for Adults",
  "15": "Category",
  "16": "Body Type",
  "17": "Associated Health Risk",
  "18": "Starvation",
  "19": "Emaciated",
  "20": "Severe risk of organ failure, weakened immunity, and nutrient deficiency",
  "21": "Severe Underweight",
  "22": "Very thin",
  "23": "High risk of infections, infertility, and bone loss",
  "24": "Underweight",
  "25": "Thin",
  "26": "Increased risk of fatigue, anemia, and lowered immunity",
  "27": "Desirable Weight",
  "28": "Fit / Normal",
  "29": "Lowest health risk - optimal range",
  "30": "Overweight",
  "31": "Stocky / Heavier",
  "32": "Elevated risk of heart disease, joint strain, and high blood pressure",
  "33": "Obesity Class I",
  "34": "Heavyset",
  "35": "High risk of type 2 diabetes, hypertension, and cardiovascular issues",
  "36": "Obesity Class II (Severe)",
  "37": "Very heavy",
  "38": "Very high risk of chronic diseases and mobility issues",
  "39": "Obesity Class III (Morbid)",
  "40": "Morbidly obese",
  "41": "Critical risk of life-threatening conditions including stroke, heart disease, and sleep apnea",
  "42": "The Origin of BMI",
  "43": "The Body Mass Index (BMI) was first conceived in 1832 by Adolphe Quetelet, a Belgian mathematician. Quetelet conducted extensive research, including studies to characterize the \"average person.\" He observed a consistent relationship: human weight tends to increase proportionally to the square of a person's height. This discovery led to his \"Quetelet's Index.\" This index was later renamed the Body Mass Index (BMI) in 1972 by American physiologist Ancel Keys.",
  "44": "Adolphe Quetelet",
  "45": "Ancel Keys",
  "46": "BMI chart for adults",
  "47": "BMI categories, as depicted in this graph, are derived from World Health Organization data. Major classifications are further broken down by dashed line subdivisions.",
  "48": "World Health Organization",
  "49": "Understanding Your BMI: Risks, Limitations & Calculation",
  "50": "Risks Associated with Being Overweight",
  "51": "Carrying excess weight can significantly impact your health. It's linked to a range of serious conditions, including:",
  "52": "High blood pressure.",
  "53": "Unhealthy cholesterol levels (high \"bad\" LDL, low \"good\" HDL) and high triglycerides.",
  "54": "Type II diabetes.",
  "55": "Heart disease and stroke.",
  "56": "Gallbladder issues.",
  "57": "Osteoarthritis (joint wear and tear).",
  "58": "Sleep apnea and breathing difficulties.",
  "59": "Increased risk of certain cancers (like endometrial, breast, colon, kidney, liver).",
  "60": "Reduced quality of life, body aches, and difficulty with physical activities.",
  "61": "A higher risk of mortality overall compared to those with a healthy BMI.",
  "62": "Given these potential consequences, striving for a BMI below 25 kg/m² is generally recommended. However, always consult a healthcare professional to discuss your personal health goals and lifestyle adjustments.",
  "63": "Risks Associated with Being Underweight",
  "64": "Being underweight also presents its own set of health challenges:",
  "65": "Malnutrition, vitamin deficiencies, and anemia.",
  "66": "Osteoporosis, leading to weaker bones and a higher risk of fractures.",
  "67": "Weakened immune function.",
  "68": "Potential growth and development issues, especially for younger individuals.",
  "69": "For women, hormonal imbalances can affect reproductive health and increase miscarriage risk in early pregnancy.",
  "70": "Increased complications if surgery is needed.",
  "71": "A generally higher risk of mortality compared to those with a healthy BMI.",
  "72": "Sometimes, being underweight can be a symptom of an underlying health condition like anorexia nervosa. If you or someone you know is underweight without an obvious reason, it's wise to consult a doctor.",
  "73": "anorexia nervosa",
  "74": "Understanding BMI's Limitations",
  "75": "While BMI is a widely used and helpful tool for estimating healthy body weight, it's not a perfect measure. It's essentially a calculation of excess body weight, not excess body fat, and it doesn't account for individual body composition.",
  "76": "Factors like age, sex, ethnicity, muscle mass, and activity level can influence BMI. For instance:",
  "77": "Older adults may have more body fat than younger adults at the same BMI.",
  "78": "Women often have more body fat than men at an equivalent BMI.",
  "79": "Athletes, especially bodybuilders, might have a higher BMI due to significant muscle mass (muscle weighs more than fat), even if they are very healthy.",
  "80": "In children and adolescents, similar factors apply, and BMI can also be influenced by height and sexual maturation.",
  "81": "Despite these limitations, BMI is a fairly good indicator of body fat for 90-95% of the population. It's best used as one tool among several (like waist circumference or body fat percentage) to determine a truly healthy weight for an individual.",
  "82": "How to Calculate BMI",
  "83": "metric",
  "84": "imperial",
  "85": "BMI is calculated using simple formulas based on your mass and height. Here are the equations:",
  "86": "SI (Metric) Units (kilograms and meters):",
  "87": "mass (kg)",
  "88": "height² (m)",
  "89": "*Example: For a 72.57-kilogram individual who is 1.778 meters tall:",
  "90": "US Customary Units (pounds and inches):",
  "91": "mass (lbs)",
  "92": "height² (in)",
  "93": "*Example: For a 160-pound individual who is 5'10\" (70 inches tall):"
};

const polishTranslations = {
  "1": "FishScale Kalkulator Wskaźnika Masy Ciała",
  "2": "Wprowadź swój wzrost i wagę, aby zobaczyć, jak wypadasz na skali Wskaźnika Masy Ciała (BMI). Ten prosty w użyciu kalkulator szybko pokaże, czy jesteś niedowagą, w zdrowej wadze, nadwagą, czy otyłością. To łatwy sposób, by być na bieżąco ze swoim zdrowiem i zrobić pierwszy krok ku lepszemu samopoczuciu.",
  "3": "Wprowadź swoje dane poniżej:",
  "4": "Metryczny",
  "5": "Imperialny",
  "6": "Płeć:",
  "7": "mężczyzna",
  "8": "kobieta",
  "9": "inna",
  "10": "wyczyść",
  "11": "oblicz",
  "12": "Co oznacza twój wynik BMI...",
  "13": "Twój BMI plasuje się w konkretnej kategorii, która odzwierciedla ogólny stan Twojej wagi. Niższy BMI może wskazywać na niedowagę, a wyższy – na nadwagę lub otyłość. Kategorie te pomagają ocenić potencjalne ryzyko zdrowotne, ale pamiętaj — BMI to przybliżony wskaźnik i nie uwzględnia masy mięśniowej, gęstości kości czy ogólnej kondycji.",
  "14": "Kategorie BMI dla dorosłych",
  "15": "Kategoria",
  "16": "Typ sylwetki",
  "17": "Powiązane ryzyko zdrowotne",
  "18": "Głodzenie się",
  "19": "Wychudzony",
  "20": "Poważne ryzyko niewydolności narządów, osłabiona odporność i niedobory składników odżywczych",
  "21": "Znaczna niedowaga",
  "22": "Bardzo szczupły",
  "23": "Wysokie ryzyko infekcji, niepłodności i utraty kości",
  "24": "Niedowaga",
  "25": "Szczupły",
  "26": "Zwiększone ryzyko zmęczenia, anemii i obniżonej odporności",
  "27": "Pożądana waga",
  "28": "Sprawny / Normalny",
  "29": "Najniższe ryzyko zdrowotne - optymalny zakres",
  "30": "Nadwaga",
  "31": "Krępy / Cięższy",
  "32": "Podwyższone ryzyko chorób serca, obciążenia stawów i wysokiego ciśnienia krwi",
  "33": "Otyłość klasy I",
  "34": "Otyły",
  "35": "Wysokie ryzyko cukrzycy typu 2, nadciśnienia i problemów sercowo-naczyniowych",
  "36": "Otyłość klasy II (poważna)",
  "37": "Bardzo otyły",
  "38": "Bardzo wysokie ryzyko chorób przewlekłych i problemów z poruszaniem się",
  "39": "Otyłość klasy III (otyłość skrajna)",
  "40": "Skrajna otyłość",
  "41": "Krytyczne ryzyko zagrażających życiu schorzeń, w tym udaru, chorób serca i bezdechu sennego",
  "42": "Pochodzenie BMI",
  "43": "Wskaźnik Masy Ciała (BMI) został po raz pierwszy opracowany w 1832 roku przez belgijskiego matematyka Adolphe Queteleta. Przeprowadził on szeroko zakrojone badania, w tym nad \"przeciętnym człowiekiem.\" Zaobserwował, że masa ciała człowieka rośnie proporcjonalnie do kwadratu jego wzrostu. Odkrycie to nazwano \"Indeksem Queteleta.\" W 1972 roku amerykański fizjolog Ancel Keys nadał mu nazwę Wskaźnik Masy Ciała (BMI).",
  "44": "Adolphe Quetelet",
  "45": "Ancel Keys",
  "46": "Wykres BMI dla dorosłych",
  "47": "Kategorie BMI przedstawione na tym wykresie pochodzą z danych Światowej Organizacji Zdrowia. Główne klasyfikacje są dodatkowo rozdzielone liniami przerywanymi.",
  "48": "Światowa Organizacja Zdrowia",
  "49": "Zrozumienie BMI: ryzyka, ograniczenia i obliczanie",
  "50": "Ryzyka związane z nadwagą",
  "51": "Noszenie nadmiernej masy ciała może poważnie wpłynąć na twoje zdrowie. Powiązane jest z wieloma poważnymi schorzeniami, w tym:",
  "52": "Wysokie ciśnienie krwi.",
  "53": "Niezdrowy poziom cholesterolu (wysoki \"zły\" LDL, niski \"dobry\" HDL) i wysoki poziom trójglicerydów.",
  "54": "Cukrzyca typu II.",
  "55": "Choroby serca i udar.",
  "56": "Problemy z woreczkiem żółciowym.",
  "57": "Osteoartroza (zużycie stawów).",
  "58": "Bezdech senny i problemy z oddychaniem.",
  "59": "Zwiększone ryzyko niektórych nowotworów (np. endometrium, piersi, jelita grubego, nerek, wątroby).",
  "60": "Obniżona jakość życia, bóle ciała i trudności w wykonywaniu czynności fizycznych.",
  "61": "Wyższe ryzyko śmiertelności w porównaniu z osobami o zdrowym BMI.",
  "62": "Ze względu na te potencjalne konsekwencje zaleca się dążenie do BMI poniżej 25 kg/m². Zawsze jednak konsultuj się z lekarzem w celu omówienia swoich celów zdrowotnych i stylu życia.",
  "63": "Ryzyka związane z niedowagą",
  "64": "Niedowaga również niesie ze sobą swoje wyzwania zdrowotne:",
  "65": "Niedożywienie, niedobory witamin i anemia.",
  "66": "Osteoporoza, prowadząca do osłabienia kości i zwiększonego ryzyka złamań.",
  "67": "Osłabiona funkcja odpornościowa.",
  "68": "Potencjalne problemy z wzrostem i rozwojem, zwłaszcza u młodszych osób.",
  "69": "U kobiet zaburzenia hormonalne mogą wpływać na zdrowie rozrodcze i zwiększać ryzyko poronień we wczesnej ciąży.",
  "70": "Zwiększone komplikacje podczas operacji.",
  "71": "Ogólnie wyższe ryzyko śmiertelności w porównaniu z osobami o zdrowym BMI.",
  "72": "Czasem niedowaga może być objawem poważnej choroby, jak anoreksja. Jeśli Ty lub ktoś z Twoich bliskich jest niedowagą bez wyraźnej przyczyny, warto skonsultować się z lekarzem.",
  "73": "anoreksja",
  "74": "Ograniczenia BMI",
  "75": "Choć BMI jest powszechnie stosowanym i przydatnym narzędziem do szacowania zdrowej masy ciała, nie jest idealny. Oblicza nadmiar masy ciała, a nie nadmiar tłuszczu, i nie uwzględnia indywidualnej budowy ciała.",
  "76": "Czynniki takie jak wiek, płeć, pochodzenie etniczne, masa mięśniowa i poziom aktywności wpływają na BMI. Na przykład:",
  "77": "Starsze osoby mogą mieć więcej tkanki tłuszczowej niż młodsze przy tym samym BMI.",
  "78": "Kobiety zazwyczaj mają więcej tłuszczu niż mężczyźni przy równoważnym BMI.",
  "79": "Sportowcy, zwłaszcza kulturyści, mogą mieć wyższy BMI z powodu dużej masy mięśniowej (mięśnie ważą więcej niż tłuszcz), mimo że są bardzo zdrowi.",
  "80": "U dzieci i młodzieży podobne czynniki mają znaczenie, a BMI może być również wpływane przez wzrost i dojrzewanie płciowe.",
  "81": "Mimo tych ograniczeń, BMI jest dość dobrym wskaźnikiem zawartości tłuszczu u 90-95% populacji. Najlepiej używać go razem z innymi metodami (np. obwód talii, procent tkanki tłuszczowej) dla pełniejszej oceny.",
  "82": "Jak obliczyć BMI",
  "83": "metryczny",
  "84": "imperialny",
  "85": "BMI obliczamy za pomocą prostych wzorów opartych na masie i wzroście. Oto równania:",
  "86": "Jednostki SI (metryczne) (kilogramy i metry):",
  "87": "masa (kg)",
  "88": "wzrost² (m)",
  "89": "*Przykład: dla osoby ważącej 72,57 kg i mającej 1,778 m wzrostu:",
  "90": "Jednostki amerykańskie (funty i cale):",
  "91": "masa (lbs)",
  "92": "wzrost² (in)",
  "93": "*Przykład: dla osoby ważącej 160 funtów i mającej 5'10\" (70 cali):"
}