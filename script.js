const createLangButtons = () => {
  const buttons = [];

  const holder = document.getElementById("button-holder");

  console.log(holder);

  const eng = document.createElement("button");
  eng.innerHTML = "EN";
  eng.name = "EN";
  holder.appendChild(eng);
  console.log(eng);
};

const currentLanguage = "EN";

const texts = {
  DE: {
    slogan: "Schnell. Einfach. Neutral.",
    text: "Halli Hallo Halli Hallo. Halli Hallo Halli Hallo. Halli Hallo Halli Hallo. Halli Hallo Halli HalloHalli Hallo Halli Hallo.",
  },
  FR: {
    slogan: "Rapide. Simple. Neutrale.",
    text: "Bonjour messieurs et medames Bonjour messieurs et medames Bonjour messieurs et medames Bonjour messieurs et medamesBonjour messieurs et medamesBonjour messieurs et medames.",
  },
  EN: {
    slogan: "Quick. Simple. Neutral.",
    text: "We explore different ways to explain the oh so complicated national referendums. Whether with videos, interviews, summaries, statistics or other. Got an idea yourself? Let us know!",
  },
};

const changeLanguage = (language) => {
  const slogan = document.getElementById("slogan");
  const introduction = document.getElementById("introduction");

  console.log(language);

  const button = (slogan.textContent = texts[language].slogan);
  introduction.textContent = texts[language].text;
};
document.body.onload = createLangButtons();
