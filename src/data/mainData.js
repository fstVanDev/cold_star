import {
  login,
  chevron,
  block1,
  block2,
  block3,
  plusButton,
  minusButton,
  chevronLink,
  telegram,
  twitter,
  discord,
  instagram,
  account,
  home,
} from "../images";

export const navbarData = {
  menuButtons: [
    { label: "How it works?", href: "#hitwork" },
    { label: "Plans", href: "#plans" },
    { label: "FAQs", href: "#faqs" },
  ],
  loginButton: {
    login: "Войти",
    account: "Личный кабинет",
    image: login,
    accountImage: account,
    altImage: "login",
    chevron: chevron,
    altChevron: "chvrn",
  },
};

export const homeData = {
  firstBlock: {
    label: "Быстрый поиск выгодных связок",
    text: `Быстрый поиск выгодных связок и большого спрэда.
           Сравнивает курсы валют, платежных систем
           и экономит ваше время`,
    buttonText: "Начать",
    image: home,
    altImage: "img",
  },

  secondBlock: {
    label: "Преимущества",
    blocks: [
      {
        label: "Удобный интерфейс",
        text: "Полноценный сайт, где сразу видны рабочие связки под нужные вам запросы.",
        image: block1,
        altImage: "block1",
      },
      {
        label: "Экономия вашего времени",
        text: "Больше не нужно тратить уйму времени на составление таблиц спрэдов, парсинг всех котировок, курсов валют и объявлений - вся актуальная информация собрана на одном сайте.",
        image: block2,
        altImage: "block2",
      },
      {
        label: "Фильтрация связок",
        text: "Сайт обновляется каждые 30 секунд, позволяя вам мгновенно получать информацию о самых выгодных связках и осуществлять их за считанные минуты.",
        image: block3,
        altImage: "block3",
      },
    ],
  },

  thirdBlock: {
    label: "Наши тарифы",
    text: "Выберите наиболее выгодный для вас тариф и торгуйте уже сегодня!",
    plans: [
      {
        label: "FREE",
        color: "bg-[#C6F5EC]",
        blocks: [
          {
            label: "Создание цепочек",
            text: "У вас будет возможность создать до одной цепи фильтрации",
          },
          {
            label: "Валюты",
            text: "Поддержка пяти валютных пари криптовалют",
          },
          {
            label: "Площадки",
            text: "Для FREE версии доступна только одна площадка",
          },
        ],
        buttonText: "Выбрать",
      },
      {
        label: "STANDART",
        color: "bg-[#F3ECC5]",
        blocks: [
          {
            label: "Создание цепочек",
            text: "У вас будет возможность создать до пяти цепочек фильтрации",
          },
          {
            label: "Валюты",
            text: "Поддержка десяти валютных пар и криптовалют",
          },
          {
            label: "Площадки",
            text: "Все популярные площадки",
          },
        ],
        buttonText: "Выбрать",
      },
      {
        label: "PREMIUM",
        color: "bg-[#C3C6F2]",
        blocks: [
          {
            label: "Создание цепочек",
            text: "У вас будет возможность создать беконечную линию цепей фильтрации",
          },
          {
            label: "Валюты",
            text: "Поддержка всех валютных пар и криптовалют",
          },
          {
            label: "Площадки",
            text: "Все популярные площадки",
          },
        ],
        buttonText: "Выбрать",
      },
    ],
  },

  fourthBlock: {
    label: "Остались вопросы?",
    plusButton: plusButton,
    altPlus: "open",
    minusButton: minusButton,
    altMinus: "close",
    questions: [
      {
        label: "Кто может пользоваться Top2pro?",
        text: "Top2pro – помогает зарабатывать на криптовалюте простым и безопасным способом. Сервис поддерживает все валюты, которые поддерживаются биржами.",
      },
      {
        label: "Не проходит оплата?",
        text: "Top2pro – помогает зарабатывать на криптовалюте простым и безопасным способом. Сервис поддерживает все валюты, которые поддерживаются биржами.",
      },
      {
        label: "Как пользоваться сайтом?",
        text: "Top2pro – помогает зарабатывать на криптовалюте простым и безопасным способом. Сервис поддерживает все валюты, которые поддерживаются биржами.",
      },
      {
        label: "Могу я оплачивать биткоином или другими криптовалютами?",
        text: "Top2pro – помогает зарабатывать на криптовалюте простым и безопасным способом. Сервис поддерживает все валюты, которые поддерживаются биржами.",
      },
    ],
    linkText: "Для получения дополнительной информации нажмите здесь",
    linkUrl: "",
    linkImage: chevronLink,
    alt: "chevron",
  },
};

export const bottomData = {
  text1:
    "All rights reserved. We does not give investment advice, endorsement, analysis, or recommendations with respect to any securities or provide legal or tax advice.",
  text2:
    "All securities listed here are being offered by, and all information included on this site is the responsibility of, the applicable issuer of such securities.",
  links: [
    { image: discord, alt: "discord", url: "" },
    { image: twitter, alt: "twitter", url: "" },
    { image: instagram, alt: "instagram", url: "" },
    { image: telegram, alt: "telegram", url: "" },
  ],
  blocks: [
    {
      label: "RESOURCES",
      buttons: [
        { text: "How it works?", url: "" },
        { text: "FAQs", url: "" },
      ],
    },
    {
      label: "DEVELOPERS",
      buttons: [
        { text: "Privacy Policy", url: "" },
        { text: "Cookie Policy", url: "" },
      ],
    },
  ],
  text3: "Copyright © 2022",
};

export const feeFunction = (
  makerProcent,
  fiat,
  fiatRate,
  asset
  // fee,
  // setFee
) => {
  var rate;
  if (fiatRate.length === 0) {
    rate = fiat;
  } else {
    rate = fiatRate;
  }

  var maker = makerProcent.length === 0 ? 0.1 : makerProcent;
  var result = (asset / (rate + rate * maker) - 1) * 100;
  // arr.push(result.toFixed(4));
  // setFee(arr);
  // console.log(arr, "fee");

  return Number(result).toFixed(4);
};
