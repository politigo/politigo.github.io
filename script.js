const texts = {
  DE: {
    slogan: "Schnell. Einfach. Neutral.",
    text: "Wir erkunden verschiedene Möglichkeiten, die ach so komplizierten Volksabstimmungen zu erklären. Hast du selbst eine Idee? Dann lass es uns wissen!",
    CTA1: "Ich habe eine Idee",
    CTA2: "Meldet mich als Beta-Tester an!",
  },
  FR: {
    slogan: "Rapide. Simple. Neutre.",
    text: "Nous explorons différentes façons d'expliquer les ô si compliquées votations populaires. Tu as une idée ? Alors, fais-nous en part !",
    CTA1: "J'ai une idée",
    CTA2: "Inscrivez-moi comme bêta-testeurs.euses !",
  },
  EN: {
    slogan: "Quick. Simple. Neutral.",
    text: "We explore different ways to explain the oh so complicated popular votes. Got an idea yourself? Let us know!",
    CTA1: "I have an idea",
    CTA2: "Sign me up as a beta-tester!",
  },
};

let slogan;
let introduction;
let ideaCTA;
let testerCTA;

const displayLangButtons = (language) => {
  const langButton1 = document.getElementById("lang1");
  const langButton2 = document.getElementById("lang2");
  switch (language) {
    case "EN":
      langButton1.textContent = "DE";
      langButton1.value = "DE";
      langButton2.textContent = "FR";
      langButton2.value = "FR";
      break;
    case "DE":
      langButton1.textContent = "EN";
      langButton1.value = "EN";
      langButton2.textContent = "FR";
      langButton2.value = "FR";
      break;
    case "FR":
      langButton1.textContent = "DE";
      langButton1.value = "DE";
      langButton2.textContent = "EN";
      langButton2.value = "EN";
      break;
  }
};

const haveAnIdea = (language) => {
  let mail;
  switch (language) {
    case "EN":
      mail = "mailto:info@politigo.ch?subject=My%20idea%20for%20PolitiGo";
      break;
    case "DE":
      mail = "mailto:info@politigo.ch?subject=Meine%20Idee%20für%20PolitiGo";
      break;
    case "FR":
      mail = "mailto:info@politigo.ch?subject=Mon%20idée%20pour%20PolitiGo";
      break;
    default:
      mail = "mailto:info@politigo.ch?subject=My%20idea%20for%20PolitiGo";
  }
  window.open(mail);
};
const signUpBetaTester = (language) => {
  let mail;
  switch (language) {
    case "EN":
      mail =
        "mailto:info@politigo.ch?subject=Sign%20me%20up%20as%20a%20beta-tester!&body=Hi!%0D%0AI%20would%20like%20to%20join%20your%20list%20of%20beta-testers.%0D%0AThanks!%0D%0ABest%20regards,%20";
      break;
    case "DE":
      mail =
        "mailto:info@politigo.ch?subject=Meldet%20mich%20als%20Beta-Tester%20an!&body=Hallo!%0D%0AIch%20würde%20mich%20gerne%20in%20die%20Liste%20der%20Beta-Tester%20eintragen.%0D%0ADanke!%0D%0ALiebe%20Grüsse,%20";
      break;
    case "FR":
      mail =
        "mailto:info@politigo.ch?subject=Inscrivez-moi%20comme%20bêta-testeurs.euses%20!&body=Bonjour%20!%0D%0AJ'aimerais%20me%20joindre%20à%20votre%20liste%20de%20bêta-testeurs.euses.%0D%0AMerci%20!%0D%0AMeilleures%20salutations,%20";
      break;
    default:
      mail =
        "mailto:info@politigo.ch?subject=Sign%20me%20up%20as%20a%20beta-tester!&body=Hi!%0D%0AI%20would%20like%20to%20join%20your%20list%20of%20beta-testers.%0D%0AThanks!%0D%0ABest%20regards,%20";
  }
  window.open(mail);
};

const changeLanguage = (language) => {
  displayLangButtons(language);

  slogan.textContent = texts[language].slogan;
  introduction.textContent = texts[language].text;
  ideaCTA.textContent = texts[language].CTA1;
  ideaCTA.value = language;
  testerCTA.textContent = texts[language].CTA2;
  testerCTA.value = language;
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    slogan = document.getElementById("slogan");
    introduction = document.getElementById("introduction");
    ideaCTA = document.getElementById("CTA-idea");
    testerCTA = document.getElementById("CTA-tester");
  },
  false
);
