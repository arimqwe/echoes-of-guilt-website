const characterData = {
  felix: {
    title: 'Феликс Хиллс',
    text: 'Феликс — старший брат, который уверен, что обязан всё удержать на себе. Он не умеет проживать боль без защиты, поэтому постоянно хватает всё сильнее, пытаясь спасти сестру и не потерять то, что осталось после трагедии. Его вина растёт из ощущения, что он не успел тогда, а сейчас уже слишком поздно.',
    badge1: '20 лет',
    badge2: '177 см',
    badge3: 'Защита сестры'
  },
  felicia: {
    title: 'Фелиция Хиллс',
    text: 'Фелиция — яркая, саркастичная, но глубоко раненая. Она считает, что все вокруг страдают только потому, что она существует, и пытается закрыться от мира жестокостью, чтобы не стать кем-то ещё более уязвимым. Внутри неё — страх, что она разрушила всё, что любила.',
    badge1: '16 лет',
    badge2: '168 см',
    badge3: 'Чувство вины'
  },
  kathrine: {
    title: 'Кэтрин Лицкая',
    text: 'Кэтрин — заботливая и сильная девушка, которая всегда приходит на помощь, даже если сама не может справиться со своим страхом. Она любит тихо, без слов, но её любовь слишком тяжёлая для тех, кто привык быть одиноким. Она видит в людях то, чего они боятся признать сами.',
    badge1: '20 лет',
    badge2: '159 см',
    badge3: 'Забота и любовь'
  }
};

const wikiPanel = document.getElementById('wikiPanel');
const wikiTitle = document.getElementById('wikiTitle');
const wikiText = document.getElementById('wikiText');
const badge1 = document.getElementById('badge1');
const badge2 = document.getElementById('badge2');
const badge3 = document.getElementById('badge3');

document.querySelectorAll('[data-character]').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.character;
    const data = characterData[key];
    if (!data) return;

    wikiTitle.textContent = data.title;
    wikiText.textContent = data.text;
    badge1.textContent = data.badge1;
    badge2.textContent = data.badge2;
    badge3.textContent = data.badge3;

    wikiPanel.classList.add('active');
    wikiPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
