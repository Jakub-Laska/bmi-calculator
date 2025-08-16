// burger menu
const burgerBtn = document.getElementById('burger-btn');
burgerBtn.addEventListener('click', ()=>{
    const burgerMenuBtns = document.getElementById('burger-menu-btns');
    const burgerMenu = document.querySelector('#burger-menu');
    burgerMenuBtns.classList.toggle('burger-clicked');
    burgerBtn.classList.toggle('burger-clicked');
    burgerMenu.classList.toggle('clicked');
})


// info modal
const infoBtn = document.querySelectorAll('.info-btn');

infoBtn.forEach(element => {
    element.addEventListener('click', ()=> {
        const infoModal = document.querySelector('.info-modal')

        infoModal.classList.toggle('toggle')
        document.body.classList.toggle('overflow-hidden');
});
})

const infoCloseBtn = document.getElementById('info-close-btn');

infoCloseBtn.addEventListener('click', ()=>{
        const infoModal = document.querySelector('.info-modal')
        infoModal.classList.toggle('toggle')
        document.body.classList.toggle('overflow-hidden');
})

const infoDivs = document.querySelectorAll('.info-div');
const infoBtns = document.querySelectorAll('.info-btns');

infoBtns.forEach(element => {
  element.addEventListener('click', ()=>{
    infoBtns.forEach(element => {
      element.classList.toggle('disabled-btn');
    });
    infoDivs.forEach(element => {
      element.classList.toggle('hidden');
    });
  })
});

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
const weightInput = document.getElementById('weight-input');
const heightInput = document.getElementById('height-input');

calculateBtn.disabled = true;

function calculateBtnState() {
  if (weightInput.value !== '' && heightInput.value !== '') {
  calculateBtn.disabled = false;
  } else {
  calculateBtn.disabled = true;
  }
}
weightInput.addEventListener('input', calculateBtnState);
heightInput.addEventListener('input', calculateBtnState);

calculateBtn.addEventListener('click', () => {
  let weightValue = weightInput.value;
  let heightValue = heightInput.value;

  let bmiResult = (weightValue / (heightValue ** 2) * 10000).toFixed(2);

  const resultWindowResult = document.querySelector('#result-window-result');

  // show "fake loading" with random numbers
  let counter = 0;
  const loadingInterval = setInterval(() => {
    const fakeResult = (Math.random() * 40 + 10).toFixed(2); // random number 10–50
    resultWindowResult.innerHTML = `Calculating... ${fakeResult}`;
    counter++;
  }, 100); // change number every 100ms

  // stop loading after 2 seconds and show actual result
  setTimeout(() => {
    clearInterval(loadingInterval);
    resultWindowResult.innerHTML = `Your result: ${bmiResult}`;
  }, 2000);

  resultWindowToggle();
  clearBtnFunction();
});

// result window toggle
function resultWindowToggle() {
    const bmiForm = document.querySelector('.form');
    bmiForm.classList.toggle('hidden');
    const bmiResultWindow = document.querySelector('.bmi-result-window');
    bmiResultWindow.classList.toggle('hidden');
calculateBtn.disabled = true;
}
// result window

const resultWindowExitBtn = document.querySelector('.bmi-result-exit-btn');

resultWindowExitBtn.addEventListener('click', ()=>{
  resultWindowToggle()
})




// dark mode

const darkmodeBtn = document.querySelectorAll('.dark-mode');
enableDarkMode();
let isDark = true;

darkmodeBtn.forEach(el => {
    el.addEventListener('click', ()=>{
        darkmodeBtn.forEach(el => {
            el.classList.toggle('dark-mode-btn-icon')
        });
    const whoGraph = document.getElementById('who-graph');
    whoGraph.classList.toggle('light-who-graph');

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
    r.style.setProperty('--btn-blue', '#2e3b4e');
    r.style.setProperty('--btn-blue-hover', '#41536e');
    r.style.setProperty('--gradient', 'linear-gradient(to bottom right, #1a1a1a 20%, #2e3b4e 60%, #3b4d61 100%)');
}
function enableLightMode() {
    const r = document.documentElement;
    r.style.setProperty('--cold-blue', '#f0f8ff');
    r.style.setProperty('--primary-blue', '#d0e9ff9a');
    r.style.setProperty('--primary-white', '#fff');
    r.style.setProperty('--primary-font-color', '#000');
    r.style.setProperty('--btn-blue', '#f0f8ff');
    r.style.setProperty('--btn-blue-hover', '#d4e7f8');
    r.style.setProperty('--gradient', 'linear-gradient(to bottom right, #ffffff 20%, #d0e9ffcc 60%, #a3d4ff80 100%)');
}

// text animation on sroll
const textElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
  let delay = 0;

  entries
    .filter(entry => entry.isIntersecting && !entry.target.classList.contains('visible'))
    .forEach(entry => {
      entry.target.style.transitionDelay = `${delay}s`;
      entry.target.classList.add('visible');
      delay += 0.1;
    });
}, {
  threshold: 0.2
});

textElements.forEach(el => observer.observe(el));




// bubbles overlay
function generateBubbles(count = 16) {
  const backgrounds = document.querySelectorAll('.bubble-background');

  backgrounds.forEach(background => {
    const fragment = document.createDocumentFragment();
    const bgRect = background.getBoundingClientRect();

    for (let i = 0; i < count; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');

      const size = Math.random() * 50 + 10;
      const opacity = Math.random() * 0.4 + 0.1;

      // Position randomly inside parent (using % for left and top)
      const leftPercent = Math.random() * 100;
      const topPercent = Math.random() * 100;

      Object.assign(bubble.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${leftPercent}%`,
        top: `${topPercent}%`,
        animationDuration: `${4 + Math.random() * 5}s`,
        animationDelay: `${Math.random() * 3}s`,
        opacity: opacity,
        boxShadow: `inset 0 4px 10px rgba(255 255 255 / 0.8)`,
      });

      fragment.appendChild(bubble);
    }

    background.appendChild(fragment);
  });
}
generateBubbles();

// title icons
const titles = document.querySelectorAll('strong');

titles.forEach((element, index) => {

  const icon = document.createElement('img');
  icon.src = `img/icons/img${index + 1}.png`;
    icon.alt = 'Fish icon';

  icon.classList.add('strong-icons');

  element.appendChild(icon);
});

//  Animate fish separately on scroll
const fishIcons = document.querySelectorAll('.strong-icons');
const fishObserver = new IntersectionObserver(entries => {
  let fishDelay = .3;

  entries
  .filter(entry => entry.isIntersecting && !entry.target.classList.contains('fish-visible'))
  .forEach(entry => {
      entry.target.style.animationDelay = `${fishDelay}s`;
      entry.target.classList.add('fish-visible');
      fishDelay += .5;
    });
}, {
  threshold: 0.2
});

fishIcons.forEach(icon => fishObserver.observe(icon));

// more info hover popup

function infoPopup() {
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
            e.removeChild(popupInfo);                
    });
})
}
infoPopup()
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
        infoPopup()
        langText.forEach(el => {
            el.textContent = 'PL';
        });

    document.documentElement.lang = 'pl';  // Set html lang attribute to Polish
  } else {
    applyTranslations(englishTranslations);
        infoPopup()
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
  "1": "<h1><span>FishScale</span><br> Body Mass <br>Index Calculator</h1>",
  "2": "<p>Enter your height and weight to see how your numbers stack up using the Body Mass Index (BMI) scale. This easy-to-use calculator gives you a quick insight into whether you're underweight, at a healthy weight, overweight, or obese. It's a simple way to stay informed about your overall health and take the first step toward better well-being.</p>",
  "3": "<h3>Enter your Details below:</h3>",
  "4": "<button>Metric</button>",
  "5": "<button>Imperial</button>",
  "6": "<h4>Gender:</h4>",
  '7': '<button type="button" id="male-btn" class="gender-btn" value="male"></button>male <button type="button" id="female-btn" class="gender-btn" value="female"></button> female <button type="button" id="other-btn" class="gender-btn" value="other"></button> other',
  "10": "<button>clear</button>",
  "11": "<button>calculate</button>",
  "12": "<h2>What your BMI result means...</h2>",
  "13": "<p>Your BMI falls into a specific category that reflects your general weight status. A lower BMI may indicate you're underweight, while a higher BMI could suggest overweight or obesity. These categories help assess potential health risks, but remember — BMI is a rough estimate and doesn't consider factors like muscle mass, bone density, or overall fitness.</p>",
  "14": "<strong>BMI Categories for Adults</strong>",
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
  "42": "<strong>The Origin of BMI</strong>",
  "43": "<p>The Body Mass Index (BMI) was first conceived in 1832 by <u  data-info=\'Lambert Adolphe Jacques Quételet (b. Feb 22, 1796, Ghent - d. Feb 17, 1874, Brussels) was a Belgian astronomer, mathematician, statistician, meteorologist, sociologist, and criminologist. He developed the Body Mass Index (BMI) and posed the Quetelet question: Why does crime vary across social groups?\'>Adolphe Quetelet</u>, a Belgian mathematician. Quetelet conducted extensive research, including studies to characterize the \"average person.\" He observed a consistent relationship: human weight tends to increase proportionally to the square of a person's height. This discovery led to his \"Quetelet's Index.\" This index was later renamed the Body Mass Index (BMI) in 1972 by American physiologist <u data-info=\'American physiologist who popularized the term Body Mass Index in 1972.\'>Ancel Keys</u>.</p>",
  "46": "<strong>BMI chart for adults</strong>",
  "47": "<p>BMI categories, as depicted in this graph, are derived from <u data-info=\'World Health Organization, a specialized agency of the United Nations responsible for international public health.\'>World Health Organization</u> data. Major classifications are further broken down by dashed line subdivisions.</p>",
  "49": "<strong>Understanding Your BMI: Risks, Limitations & Calculation</strong>",
  "50": "<strong>Risks Associated with Being Overweight</strong>",
  "51": "<p>Carrying excess weight can significantly impact your health. It's linked to a range of serious conditions, including:</p>",
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
  "62": "<p>Given these potential consequences, striving for a BMI below 25 kg/m² is generally recommended. However, always consult a healthcare professional to discuss your personal health goals and lifestyle adjustments.</p>",
  "63": "<strong>Risks Associated with Being Underweight</strong>",
  "64": "<span>Being underweight also presents its own set of health challenges:</span>",
  "65": "Malnutrition, vitamin deficiencies, and anemia.",
  "66": "Osteoporosis, leading to weaker bones and a higher risk of fractures.",
  "67": "Weakened immune function.",
  "68": "Potential growth and development issues, especially for younger individuals.",
  "69": "For women, hormonal imbalances can affect reproductive health and increase miscarriage risk in early pregnancy.",
  "70": "Increased complications if surgery is needed.",
  "71": "A generally higher risk of mortality compared to those with a healthy BMI.",
  "72": "<p>Sometimes, being underweight can be a symptom of an underlying health condition like anorexia nervosa. If you or someone you know is underweight without an obvious reason, it's wise to consult a doctor.</p>",
  "73": "<u>anorexia nervosa</u>",
  "74": "<strong>Understanding BMI's Limitations</strong>",
  "75": "<p>While BMI is a widely used and helpful tool for estimating healthy body weight, it's not a perfect measure. It's essentially a calculation of excess body weight, not excess body fat, and it doesn't account for individual body composition.</p>",
  "76": "<p>Factors like age, sex, ethnicity, muscle mass, and activity level can influence BMI. For instance:</p>",
  "77": "Older adults may have more body fat than younger adults at the same BMI.",
  "78": "Women often have more body fat than men at an equivalent BMI.",
  "79": "Athletes, especially bodybuilders, might have a higher BMI due to significant muscle mass (muscle weighs more than fat), even if they are very healthy.",
  "80": "In children and adolescents, similar factors apply, and BMI can also be influenced by height and sexual maturation.",
  "81": "Despite these limitations, BMI is a fairly good indicator of body fat for 90-95% of the population. It's best used as one tool among several (like waist circumference or body fat percentage) to determine a truly healthy weight for an individual.",
  "82": "<strong>How to Calculate BMI</strong>",
  "83": "metric",
  "84": "imperial",
  "85": "BMI is calculated using simple formulas based on your mass and height. Here are the equations:",
  "86": "<span>SI (Metric) Units (kilograms and meters):</span>",
  "87": "<span>mass (kg)</span>",
  "88": "<span>height² (m)</span>",
  "89": "<em>* Example: For a 72.57-kilogram individual who is 1.778 meters tall:</em>",
  "90": "<span>US Customary Units (pounds and inches):</span>",
  "91": "<span>mass (lbs)</span>",
  "92": "<span>height² (in)</span>",
  "93": "<em>* Example: For a 160-pound individual who is 5'10\" (70 inches tall):</em>",
    '94': "<strong>Recommended BMI by Age</strong>",
  '95': `
    <li>19 - 24 years: 19 - 24</li>
    <li>25 - 34 years: 20 - 25</li>
    <li>35 - 44 years: 21 - 26</li>
    <li>45 - 54 years: 22 - 27</li>
    <li>55 - 64 years: 23 - 28</li>
    <li>Over 64 years: 24 - 29</li>
  `,
    '96': `<p>Before diving into the specific health risks associated with being overweight or underweight, it is
  important to understand what a healthy BMI range means in real-life terms. Maintaining a balanced weight
  isn't just about numbers — it's about supporting your body's vital functions, energy levels, and overall resilience.
  Let's explore the potential consequences when BMI falls outside the recommended range.</p>`,
    '97': `<p>Created by JL</p>`,
    '98': `<p>* This calculator is intended solely for general informational and educational purposes. It <span>does not</span> constitute or substitute for professional medical advice, diagnosis, or treatment.</p>`
};


// polish translations


const polishTranslations = {
  "1": "<strong><span>FishScale</span><br> Kalkulator Wskaźnika <br>Masy Ciała</strong>",
  "2": "<p>Wprowadź swój wzrost i wagę, aby zobaczyć, jak wypadasz na skali Wskaźnika Masy Ciała (BMI). Ten prosty w użyciu kalkulator szybko pokaże, czy jesteś niedowagą, w zdrowej wadze, nadwagą czy otyłością. To łatwy sposób, by być na bieżąco ze swoim zdrowiem i zrobić pierwszy krok ku lepszemu samopoczuciu.</p>",
  "3": "<h3>Wprowadź swoje dane poniżej:</h3>",
  "4": "<button>Metryczny</button>",
  "5": "<button>Imperialny</button>",
  "6": "<h4>Płeć:</h4>",
  "7": '<button type="button" id="male-btn" class="gender-btn" value="male"></button>mężczyzna <button type="button" id="female-btn" class="gender-btn" value="female"></button> kobieta <button type="button" id="other-btn" class="gender-btn" value="other"></button> inna',
  "10": "<button>Wyczyść</button>",
  "11": "<button>Oblicz</button>",
  "12": "<h2>Co oznacza twój wynik BMI...</h2>",
  "13": "<p>Twój BMI plasuje się w konkretnej kategorii, która odzwierciedla ogólny stan Twojej wagi. Niższy BMI może wskazywać na niedowagę, a wyższy - na nadwagę lub otyłość. Kategorie te pomagają ocenić potencjalne ryzyko zdrowotne, ale pamiętaj — BMI to przybliżony wskaźnik i nie uwzględnia masy mięśniowej, gęstości kości czy ogólnej kondycji.</p>",
  "14": "<strong>Kategorie BMI dla dorosłych</strong>",
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
  "42": "<strong>Pochodzenie BMI</strong>",
  "43": "<p>Wskaźnik Masy Ciała (BMI) został po raz pierwszy wprowadzony w 1832 roku przez <u data-info='Lambert Adolphe Jacques Quételet (ur. 22 lutego 1796 w Gandawie - zm. 17 lutego 1874 w Brukseli) był belgijskim astronomem, matematykiem, statystykiem, meteorologiem, socjologiem i kryminologiem. Opracował wskaźnik masy ciała (BMI) i postawił pytanie Quételeta: Dlaczego przestępczość różni się między grupami społecznymi?'>Adolphe Queteleta</u>, belgijskiego matematyka. Quetelet przeprowadził szerokie badania, w tym analizy mające na celu opisanie „przeciętnego człowieka.” Zaobserwował stały związek: masa ciała człowieka rośnie proporcjonalnie do kwadratu jego wzrostu. Odkrycie to doprowadziło do powstania tzw. „Wskaźnika Queteleta.” W 1972 roku amerykański fizjolog <u data-info=\'Amerykański fizjolog, który spopularyzował termin wskaźnika masy ciała (BMI) w 1972 roku.\'>Ancel Keys</u> nadał temu wskaźnikowi nazwę Body Mass Index (BMI).</p>",
  "46": "<strong>Wykres BMI dla dorosłych</strong>",
  "47": "<p>Kategorie BMI, przedstawione na tym wykresie, pochodzą z danych <u data-info=\'Światowa Organizacja Zdrowia, wyspecjalizowana agenda ONZ odpowiedzialna za międzynarodowe zdrowie publiczne.\'>Światowej Organizacji Zdrowia.</u>. Główne klasyfikacje zostały dodatkowo podzielone za pomocą linii przerywanych.</p>",
  "49": "<strong>Zrozumienie Twojego BMI: Ryzyka, Ograniczenia i Obliczenia</strong>",
  "50": "<strong>Ryzyka związane z nadwagą</strong>",
  "51": "<p>Nadmierna waga może znacząco wpłynąć na Twoje zdrowie. Jest związana z wieloma poważnymi schorzeniami, w tym:</p>",
  "52": "Wysokie ciśnienie krwi.",
  "53": "Niezdrowe poziomy cholesterolu (wysoki \"zły\" LDL, niski \"dobry\" HDL) oraz podwyższone trójglicerydy.",
  "54": "Cukrzyca typu II.",
  "55": "Choroby serca i udar.",
  "56": "Problemy z woreczkiem żółciowym.",
  "57": "Osteoartroza (zużycie stawów).",
  "58": "Bezdech senny i trudności z oddychaniem.",
  "59": "Zwiększone ryzyko niektórych nowotworów (np. endometrium, piersi, jelita grubego, nerek, wątroby).",
  "60": "Obniżona jakość życia, bóle ciała i trudności w wykonywaniu aktywności fizycznych.",
  "61": "Wyższe ryzyko śmiertelności w porównaniu z osobami o prawidłowej masie ciała.",
  "62": "<p>Z uwagi na te możliwe konsekwencje, zaleca się dążenie do BMI poniżej 25 kg/m². Jednak zawsze skonsultuj się z lekarzem, aby omówić swoje indywidualne cele zdrowotne i ewentualne zmiany stylu życia.</p>",
  "63": "<strong>Ryzyka związane z niedowagą</strong>",
  "64": "<span>Niedowaga również niesie ze sobą pewne wyzwania zdrowotne:</span>",
  "65": "Niedożywienie, niedobory witamin oraz anemia.",
  "66": "Osteoporoza, prowadząca do słabszych kości i większego ryzyka złamań.",
  "67": "Osłabiona funkcja odpornościowa.",
  "68": "Problemy z wzrostem i rozwojem, szczególnie u młodszych osób.",
  "69": "U kobiet, zaburzenia hormonalne mogą wpływać na zdrowie rozrodcze i zwiększać ryzyko poronienia we wczesnej ciąży.",
  "70": "Większe komplikacje przy konieczności operacji.",
  "71": "Ogólnie wyższe ryzyko śmiertelności w porównaniu z osobami o prawidłowej masie ciała.",
  "72": "<p>Czasami niedowaga może być objawem choroby, np. anoreksji. Jeśli Ty lub ktoś Ci bliski jest niedożywiony bez oczywistej przyczyny, warto skonsultować się z lekarzem.</p>",
  "73": "<u>Jadłowstręt psychiczny</u>",
  "74": "<strong>Ograniczenia BMI</strong>",
  "75": "Choć BMI jest powszechnie stosowanym i przydatnym narzędziem do szacowania zdrowej masy ciała, nie jest idealny. Oblicza nadmiar masy ciała, a nie nadmiar tłuszczu, i nie uwzględnia indywidualnej budowy ciała.",
  "76": "Czynniki takie jak wiek, płeć, pochodzenie etniczne, masa mięśniowa i poziom aktywności wpływają na BMI. Na przykład:",
  "77": "Starsze osoby mogą mieć więcej tkanki tłuszczowej niż młodsze przy tym samym BMI.",
  "78": "Kobiety zazwyczaj mają więcej tłuszczu niż mężczyźni przy równoważnym BMI.",
  "79": "Sportowcy, zwłaszcza kulturyści, mogą mieć wyższy BMI z powodu dużej masy mięśniowej (mięśnie ważą więcej niż tłuszcz), mimo że są bardzo zdrowi.",
  "80": "U dzieci i młodzieży podobne czynniki mają znaczenie, a BMI może być również wpływane przez wzrost i dojrzewanie płciowe.",
  "81": "Mimo tych ograniczeń, BMI jest dość dobrym wskaźnikiem zawartości tłuszczu u 90-95% populacji. Najlepiej używać go razem z innymi metodami (np. obwód talii, procent tkanki tłuszczowej) dla pełniejszej oceny.",
  "82": "<strong>Jak obliczyć BMI</strong>",
  "83": "metryczny",
  "84": "imperialny",
  "85": "BMI obliczamy za pomocą prostych wzorów opartych na masie i wzroście. Oto równania:",
  "86": "<span>Jednostki SI (metryczne) (kilogramy i metry):</span>",
  "87": "masa (kg)",
  "88": "wzrost² (m)",
  "89": "<em>*Przykład: dla osoby ważącej 72,57 kg i mającej 1,778 m wzrostu:</em>",
  "90": "<span>Jednostki amerykańskie (funty i cale):</span>",
  "91": "masa (lbs)",
  "92": "wzrost² (in)",
  "93": "<em>* Przykład: dla osoby ważącej 160 funtów i mającej 5'10\" (70 cali):</em>",
    '94': "Zalecane BMI według wieku",
  '95': `
    <li>19-24 lata: 19-24</li>
    <li>25-34 lata: 20-25</li>
    <li>35-44 lata: 21-26</li>
    <li>45-54 lata: 22-27</li>
    <li>55-64 lata: 23-28</li>
    <li>Powyżej 64 lat: 24-29</li>
  `,
    '96': `<p>Zanim zagłębimy się w konkretne zagrożenia zdrowotne związane z nadwagą lub niedowagą, warto zrozumieć,
  co oznacza zdrowy zakres BMI w praktyce. Utrzymywanie zrównoważonej wagi to nie tylko liczby — to wsparcie
  dla kluczowych funkcji organizmu, poziomu energii i ogólnej odporności. Przeanalizujmy potencjalne konsekwencje,
  gdy BMI wykracza poza zalecany zakres.</p>`,
    '97': `<p>Stworzone przez JL</p>`,
      '98': `<p>* Ten kalkulator służy wyłącznie ogólnym celom informacyjnym i edukacyjnym. <span>Nie stanowi</span> ani nie zastępuje profesjonalnej porady medycznej, diagnozy ani leczenia.</p>`,
}