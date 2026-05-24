// ─────────────────────────────────────────────
//  MY CORNER — редактируемый контент сайта
//  Всё что здесь — можно менять без знания кода
// ─────────────────────────────────────────────

const CONTENT = {

  // ── Ссылки ──────────────────────────────────
  buyLink:       "https://shagaischool.ru/club",
  demoLink:      "https://t.me/+EMsKn9ZowtA3Yjky",
  instagramLink: "https://instagram.com/zhukova_dasha_",
  telegramLink:  "#",             // ← замените на ссылку Telegram-канала

  // ── Цена ────────────────────────────────────
  price:    "990 ₽",
  period_ru: "в месяц",
  period_en: "per month",

  // ════════════════════════════════════════════
  //  РУССКИЙ
  // ════════════════════════════════════════════
  ru: {

    nav: {
      inside:      "О проекте",
      aboutAuthor: "Об авторе",
      demo:        "Демо",
      reviews:     "Отзывы",
      faq:         "FAQ",
      buy:         "Купить",
      subscribe:   "Подписаться"
    },

    hero: {
      tagline:      "Онлайн-журнал\nи закрытый женский клуб",
      taglineNote:  "«Что-то про шмотки»",
      subtitle:     "О стиле, самовыражении, уюте и маленьких вещах,\nкоторые помогают лучше понять себя",
      cta:      "Купить подписку",
      demoCta:  "Открыть демо"
    },

    intro: {
      quote: "Место, где вещи\nстановятся больше,\nчем вещами."
    },

    inside: {
      title:    "В клубе вы найдёте",
      items: [
        { title: "Статьи и философия стиля",               detail: "Авторские статьи о поиске себя, самовыражении, творчестве, стиле и образе жизни. Моя философия стиля — это не «носи это, выброси то», а способ услышать, понять и выразить истинную себя." },
        { title: "Влоги, прямые эфиры и лекции",           detail: "Эксклюзивные влоги и прямые эфиры по воскресеньям — личные разговоры о моде и стиле, вдохновении, поиске себя и жизни.\n\nАвторские лекции и обучающие материалы." },
        { title: "Позитивные рутины и терапевтичные практики", detail: "Позитивные рутины, маленькие ритуалы и очень терапевтичные практики, которые меняют качество жизни." },
        { title: "Образы на каждый день и мудборды",       detail: "Комфортные и эффектные образы на каждый день со ссылками на вещи и самые красивые бренды России и Европы. Мудборды, визуализации, примеры и статьи о том, как сочетать вещи, использовать аксессуары и делать простые лучки интересными." },
        { title: "Wish-листы и подборки для России и Европы", detail: "Wish-листы, обдуманные списки покупок и мои лучшие находки в гардероб для Европы и России. Подборки вещей, которые рекомендую я — по сезонам и категориям, с активными ссылками для Европы и России." },
        { title: "Вещи для дома и декор пространства",    detail: "Самые классные вещи для дома и декора со ссылками и визуализациями пространства." }
      ]
    },

    magazine: {
      title:    "Свежий номер журнала каждый месяц",
      subtitle: "Выходит с 1-го числа. Оплаченный контент остаётся с вами навсегда."
    },

    editorial: {
      eyebrow: "философия клуба",
      title:   "Самые важные в жизни вещи — не вещи",
      body:    "Самые важные вещи в жизни — совсем не вещи. Это любовь, дружба, душевный комфорт и тепло. Это атмосфера в уютном доме. Вдохновение. Творчество.\n\nИ как удивительно, что именно вещи часто определяют наше состояние. Платье, которое ты надела с утра — и удача улыбнулась. Чашка, из которой кофе кажется в сто раз вкуснее. Вот про такие вещи — мой клуб.",
      accent:  "Вещи, которые больше, чем вещи."
    },

    clubAbout: {
      title:  "О чём этот клуб?",
      points: [
        "О том, как наш привычный быт и «обычные вещи» определяют наше сознание и ощущение себя. Как это использовать, чтобы управлять своим состоянием.",
        "О том, как с помощью «ежедневных маленьких выборов» и рутин, которые мы превратим в «ритуалы», повысить качество жизни.",
        "О том, как найти себя: «внешнюю» и «внутреннюю» — и привести к гармонии.",
        "О том, как почувствовать вкус и радость жизни.",
        "О том, как понять свой стиль и выразить свой удивительный внутренний мир через внешние проявления, без сомнений и страха. Чтобы стать, наконец, собой и чувствовать себя при этом великолепно.",
        "О том, как наполнять пространство вокруг себя эстетикой, уютом и красотой.",
        "О том, как это делаю всё это я: через личный опыт, примеры, покупки, рутины и ритуалы, практики и рецепты, книги, фильмы, общение и всё, чем я могу поделиться с вами."
      ]
    },

    moreThan: {
      title:    "Это не только журнал",
      subtitle: "My Corner — закрытый женский клуб",
      items: [
        { title: "Безопасное пространство",   text: "Место, где не страшно быть собой и говорить о важном" },
        { title: "Живое сообщество",          text: "Подруги со всего мира в Telegram-чате" },
        { title: "Личное общение с автором",  text: "Прямые эфиры, вопросы, ответы, вдохновение" },
        { title: "Контент навсегда",          text: "Всё оплаченное остаётся у вас — без срока" }
      ]
    },

    howItWorks: {
      title: "Как всё устроено",
      steps: [
        { num: "01", title: "Оформите подписку",   text: "Нажмите «Купить подписку» и оплатите онлайн" },
        { num: "02", title: "Получите доступ",      text: "Вам на указанную почту придёт ссылка и уникальный пароль." },
        { num: "03", title: "Читайте и общайтесь", text: "4 статьи в неделю + закрытое сообщество" }
      ],
      note: "Работает в России и за рубежом — без VPN"
    },

    pricing: {
      title:    "Подписка My Corner",
      badge:    "Самый популярный",
      features: [
        "Ежемесячный онлайн-журнал",
        "4 статьи в неделю",
        "Влоги и прямые эфиры",
        "Подборки, wish-листы, мудборды",
        "Закрытое Telegram-сообщество",
        "Личное общение с Дашей Жуковой",
        "Доступ к контенту навсегда"
      ],
      cta:  "Купить подписку",
      note: "Автопролонгация. Можно отменить в любое время."
    },

    demo: {
      eyebrow: "Не уверена?",
      title:   "Попробуй демо-доступ",
      text:    "Я искренне считаю My Corner своим лучшим проектом. Чтобы почувствовать его глубину и формат — приглашаю в демо с избранными статьями.",
      cta:     "Открыть демо"
    },

    testimonials: {
      title:    "Отзывы",
      subtitle: "«Пришла за ссылкой на платье, а получила новую жизнь»",
      showMore: "Показать больше отзывов",
      showLess: "Свернуть",
      items: [
        {
          name:     "Olena Voitovych",
          handle:   "",
          platform: "telegram",
          text:     "Даша! Спасибо тебе за каждую статью, за каждое слово! За каждую фотографию и видео. Ты действительно Учитель! Но не тот, что \"делай, как я\", а тот, что \"ищи в себе, а я помогу\".\nКогда-то я подписалась на красивые фоточки, потом зачиталась текстами. Подумаешь, что может случиться от подписки на \"ещё одну красивую страничку\". А оно случилось! И продолжает случаться.\nИ знаешь, я с тобой уже лет 6, наверное. И вспоминая \"наши\" первые совместные годы, вижу, как ты изменилась, как выросла и созрела, как распустился прекрасный цветок, который был прекрасным бутоном.\nИ я изменилась и выросла. И так мне радостно, что наши умы и души растут в одном направлении, питаемые одними ценностями.\nОчень ценю наши отношения! Очень ценю тебя! И очень желаю тебе твоей самой прекрасной жизни!",
          avatar:   "images/av-olena.jpg"
        },
        {
          name:     "Eva S",
          handle:   "",
          platform: "telegram",
          text:     "И самое главное что? По теме номера самое главное. Я раньше ну никак не могла уговорить себя купить не то, чтобы дорогую вещь, а, скажем, хотя бы не дешевую, взять не то, что недорого, а то, что нравится.\nА тут я просто взяла то, что мне нравится, и оплатила чуть ли не с закрытыми глазами, и что? Жалею ли я хоть об одном гроше, потраченном на это все такое приятное, уютное, обнимающее, что я надеваю на себя каждый день, и что каждый день меня радует буквально часами?\nНет. Я просто немедленно забыла, что сколько стоило. В бюджет уложилась? Радует? Ну и всё. Всё.\nСпасибо, Даша без тебя я б несмогла",
          avatar:   "images/av-eva.jpg"
        },
        {
          name:     "Участница клуба",
          handle:   "",
          platform: "telegram",
          text:     "Потому что нравится напитываться чувством прекрасного, стильного, эстетичного.. нравится, как потихоньку приходит вкус к деталям, красивым мелочам.. как меняется мое отношение к дому, к себе, к миру.. нравится, как зарождается желание сервировать стол для завтрака и ужина.. покупать себе шоппер с сердечками ради одной фотографии для себя, который я бы раньше никогда не купила - \"мол, зачем\".. копаться на сайтах из подборок Даши, хотя я никогда этого не любила.. ловить себя на том, что стала чаще улыбаться и чувствовать наслаждение от привычного быта, но который каждый день становится все краше и краше, наполняясь стильными, эстетичными мелочами..\nА самое главное, что я здесь чувствую - это как ко мне возвращается вкус к жизни.. а вместе с ним приходит желание творить - я снова стала писать картины и писать песни 😊",
          avatar:   "images/av4.png"
        },
        {
          name:     "Участница клуба",
          handle:   "",
          platform: "telegram",
          text:     "Я стала ходить в спортзал, не пропуская тренировки даже если не в духе, силовые - это во многом прямо моё, и я потихоньку возвращаю себе силу, которую подрастеряла (и это подрастеряние я так-то очень плохо переношу)\nИ фотосессия, в которой мы такие классные, и я такая классная, и дети такие классные, и всё хоть вешай на стену немедленно (это, кстати, в планах на сентябрь)\nИ полка, полка. Вдохновлённая Дашкиной этой ну. За 30 евро. Тоже такая да что же я себе отказываю-то в распрекрасной полке! Купила, и жизнь немедленно стала лучше. Потому что сколько можно жить в прекрасном будущем, если есть прекрасное настоящее.",
          avatar:   "images/av4.png"
        },
        {
          name:     "Участница клуба",
          handle:   "",
          platform: "telegram",
          text:     "У меня итоги этого месяца не совсем шмоточные, а скорее событийные. Но непосредственно связанные с подпиской на канал, не будь её, и половины бы не было.\nЯ записалась на танцы, на которые давно хотела, и они оказались, неожиданно, поблизости. Контракт сразу на год, так что фиг отвертишься, придётся теперь становиться довольной.",
          avatar:   "images/av4.png"
        },
        {
          name:     "Участница клуба",
          handle:   "",
          platform: "telegram",
          text:     "У меня сегодня такой день подведения каких-то итогов, пересмотра ценностей и постановки целей на будущий год (др просто). И я осознала какая в последние месяцы у меня идет мощная трансформация. Особенно это выражается в одежде. Каждый месяц делаю какие-то покупки, немного, но прямо в цель. И я как-то с такой лёгкостью их делаю и все точно в цель, полностью моё. Вчера примеряла шорты и понимаю, что раньше выбрала бы другое, а тут критично глянула, сразу в голове сложились все образы и поняла как будет выглядеть и выбрала наилучший вариант. Как круто действует чат, и ты, Даша! Вижу, что и другие сферы меняются в лучшую сторону. Спасибо! 🥺",
          avatar:   "images/av4.png"
        },
        {
          name:     "Участница клуба",
          handle:   "",
          platform: "telegram",
          text:     "Я всему этому учусь в твоем клубе. Пришла за ссылкой на платьице, а осталась навсегда ☺️\nКлуб помогает держать фокус на правильных вещах - любви к жизни и себе в ней, красоте и эстетике, комфорте быта, полезных рутинах, сохранении энергии. Это мой ежедневный источник вдохновения и позитива, как аффирмация на день, которая каждый раз попадает в самое сердце. Благодаря клубу я поборола такие блоки и установки, которые не удавалось проработать за годы работы с психологом, включая как раз «синдром отложенной жизни».\nСпасибо тебе, Даша! Ты больше, чем писатель, стилист или психолог. Ты муза ❤️",
          avatar:   "images/av4.png"
        },
        {
          name:     "Участница клуба",
          handle:   "",
          platform: "telegram",
          text:     "Даша! Спасибо тебе за каждую статью, за каждое слово! За каждую фотографию и видео. Ты действительно Учитель! Но не тот, что \"делай, как я\", а тот, что \"ищи в себе, а я помогу\".\nКогда-то я подписалась на красивые фоточки, потом зачиталась текстами. Подумаешь, что может случиться от подписки на \"ещё одну красивую страничку\". А оно случилось! И продолжает случаться.\nИ знаешь, я с тобой уже лет 6, наверное. И вспоминая \"наши\" первые совместные годы, вижу, как ты изменилась, как выросла и созрела, как распустился прекрасный цветок, который был прекрасным бутоном.\nИ я изменилась и выросла. И так мне радостно, что наши умы и души растут в одном направлении, питаемые одними ценностями.\nОчень ценю наши отношения! Очень ценю тебя! И очень желаю тебе твоей самой прекрасной жизни! ☺️💐",
          avatar:   "images/av4.png"
        },
        {
          name:     "Участница клуба",
          handle:   "",
          platform: "telegram",
          text:     "1,5 года назад, Даша, я начала тебя читать с самого первого месяца. Ещё через полгода я начала свой бизнес параллельно с наймом. В прошлом месяце, все так же параллельно с наймом, я заработала в бизнесе больше ста тысяч. И заказы растут.\nИ весь этот год я искала себя. 1,5 года назад - худи и джинсы, и сделайте вид, что меня не видно. Спустя 1,5 года вот так.",
          avatar:   "images/av4.png"
        },
        {
          name:     "Участница клуба",
          handle:   "",
          platform: "telegram",
          text:     "Привет, Дашечка.\nХочу поблагодарить тебя за клуб наш драгоценный. Я не сижу в нашем чатике (не про чатики я, к сожалению). Но хочу рассказать, что получила я от клуба лично:\n- друзей замечательных и любимых (вот в чатике не сижу, а все равно получаю. Магия ✨)\n- пинок под зад, чтобы свалить с тупой своей работы, и не жить этот треш\n- другую работу. Тут тебе и Володе вообще отдельное спасибо!!!\n- и еще ряд работ с этим кейсом, что позволяет мне делать работу мечты.\n- красивые уголки в доме, пока съёмном, но мы работаем...\n- выходные, которые я научилась брать и прям проживать и невероятно насыщенно\n- множество ваших обучающих материалов с огромными скидками для клуба. Это прямо по жизни очень помогает.\n- Да. И пальто с платьем до сих пор люблю нежно ❤️\nСпасибо, дорогой мой человек за ваш труд. Такой нужный и важный. Где пришла на шмотки попялиться, а получила другую жизнь 😂😂😂",
          avatar:   "images/av4.png"
        },
        {
          name:     "Аня",
          handle:   "",
          platform: "telegram",
          text:     "Дашечка, не знаю, в какую тему лучше написать, но я сегодня услышала комплимент, который смогла получить только благодаря тебе. Коллеги мне сказали, что, Аня, ты одеваешься так, будто у тебя личный стилист.\nИ я такая: мммм, я же просто достаю одежду из шкафа.",
          avatar:   "images/av4.png"
        },
        {
          name:     "Участница клуба",
          handle:   "",
          platform: "telegram",
          text:     "У меня итоги этого месяца не совсем шмоточные, а скорее событийные. Но непосредственно связанные с подпиской на канал, не будь её, и половины бы не было.\nЯ записалась на танцы, на которые давно хотела, и они оказались, неожиданно, поблизости. Контракт сразу на год, так что фиг отвертишься, придётся теперь становиться довольной.",
          avatar:   "images/av4.png"
        }
      ]
    },

    founder: {
      title:  "Главный редактор и фаундер",
      name:   "Даша Жукова",
      handle: "@zhukova_dasha_",
      bio:    "Журналист, писатель, фотограф и преподаватель. PhD в области social philosophy.\n\nПисать я начала ещё в детстве — и с тех пор не останавливалась. Вела блоги задолго до того, как появился инстаграм, когда это было не профессией. Потом был музей, где я работала искусствоведом, телевидение, где я была телеведущей, колонки в Cosmopolitan Russia.\n\nСегодня всё это сходится в одной точке. My Corner — мой главный проект, и вырастает он из женского клуба «Что-то про шмотки». Именно там появилось ощущение, что вокруг разговоров о стиле и жизни может сложиться настоящее сообщество — и My Corner стал его продолжением. Место, куда я складываю всё, что думаю о жизни, о стиле и о том, как маленькие вещи меняют всё остальное.\n\nПорой всё что нужно — вовремя подтолкнуть первую костяшку домино. Дальше вы справляетесь сами — а перемены идут лавиной.\n\nЖиву в Милане. Люблю жизнь и любить.",
      cta:    "Подписаться на автора"
    },

    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Что такое My Corner?",
          a: "My Corner — ежемесячный онлайн-журнал и закрытый женский клуб о стиле, самовыражении, уюте и поиске себя. 4 статьи в неделю, влоги, эфиры и живое сообщество."
        },
        {
          q: "Как получить доступ после оплаты?",
          a: "После оплаты придёт ссылка на журнал и уникальный пароль. Всё работает без VPN — и в России, и за рубежом."
        },
        {
          q: "Могу ли я попробовать до покупки?",
          a: "Да! Есть демо-доступ с избранными статьями. Нажмите «Открыть демо» выше — это бесплатно."
        },
        {
          q: "Что будет с контентом, если я отпишусь?",
          a: "Доступ к уже оплаченному контенту остаётся у вас навсегда. Вы не потеряете то, что уже прочитали и оплатили."
        },
        {
          q: "Как устроена оплата?",
          a: "Подписка оформляется на 1 месяц с автопролонгацией. Отменить можно в любое время — напишите в Telegram."
        },
        {
          q: "На каком языке контент?",
          a: "Весь контент на русском языке. Сайт доступен на русском и английском."
        }
      ]
    },

    finalCta: {
      title:    "Нашла свой угол?",
      subtitle: "Присоединяйся к My Corner",
      cta:      "Купить подписку",
      demo:     "Сначала попробовать демо"
    },

    footer: {
      desc:         "Онлайн-журнал и закрытый женский клуб\nо стиле, самовыражении и маленьких вещах,\nкоторые меняют всё.",
      contactLabel: "Написать нам",
      contactEmail: "hello@my-corner.ru",
      paymentTitle: "Оплата",
      paymentText:  "Банковской картой через защищённый платёжный шлюз. Оплата в рублях и евро.",
      privacy:      "Политика конфиденциальности",
      terms:        "Условия использования",
      cookies:      "Управление cookies",
      copy:         "© 2026 My Corner Club. Все права защищены."
    }

  },

  // ════════════════════════════════════════════
  //  ENGLISH
  // ════════════════════════════════════════════
  en: {

    nav: {
      inside:      "About the project",
      aboutAuthor: "About the author",
      demo:        "Demo",
      reviews:     "Reviews",
      faq:         "FAQ",
      buy:         "Subscribe",
      subscribe:   "Subscribe"
    },

    hero: {
      tagline:      "Online magazine\n& private women's club",
      taglineNote:  "\"Something about clothes\"",
      subtitle:     "About style, self-expression, warmth and the small things\nthat help you know yourself better",
      cta:      "Get subscription",
      demoCta:  "Try demo"
    },

    intro: {
      quote: "A place where things\nbecome more\nthan things."
    },

    inside: {
      title:    "Inside the club you'll find",
      items: [
        { title: "Articles & the philosophy of style",          detail: "Personal essays on finding yourself, self-expression, creativity and style. My philosophy of style isn't 'wear this, throw that out' — it's a way to hear, understand and express your true self." },
        { title: "Vlogs, live streams & lectures",              detail: "Exclusive vlogs and Sunday live streams — personal conversations about fashion, style and life in real time. In the future: original lectures and learning materials on style, self-expression and a mindful approach to your wardrobe." },
        { title: "Positive routines & therapeutic practices",   detail: "Positive routines, small rituals and deeply therapeutic practices that genuinely improve the quality of everyday life." },
        { title: "Everyday looks & moodboards",                 detail: "Comfortable yet striking everyday looks with links to pieces and the most beautiful brands from Russia and Europe. Moodboards, visuals and articles on how to combine clothes, use accessories and make simple outfits interesting." },
        { title: "Wishlists & curated picks for Russia & Europe", detail: "Wishlists, considered shopping guides and my best wardrobe finds for Europe and Russia — by season and category, with active links for both." },
        { title: "Home pieces & interior decor",                detail: "The best home and décor pieces with links and space visualisations." }
      ]
    },

    magazine: {
      title:    "A fresh issue every month",
      subtitle: "Published from the 1st. Paid content stays with you forever."
    },

    editorial: {
      eyebrow: "the club's philosophy",
      title:   "The most important things in life aren't things",
      body:    "The most important things in life are not things at all. They are love, friendship, inner comfort and warmth. The atmosphere of a cozy home. Inspiration. Creativity.\n\nAnd how remarkable it is that actual things so often shape how we feel. The dress you put on in the morning — and luck smiled at you. The cup that makes your coffee taste a hundred times better. That's what this club is about.",
      accent:  "Things that are more than things."
    },

    clubAbout: {
      title:  "What is this club about?",
      points: [
        "How our everyday habits and 'ordinary things' shape our consciousness and sense of self — and how to use this to manage your inner state.",
        "How 'small daily choices' and routines, transformed into 'rituals', can raise the quality of life.",
        "How to find yourself — your 'outer' and 'inner' self — and bring them into harmony.",
        "How to feel the taste and joy of life.",
        "How to understand your style and express your amazing inner world through outward expression, without doubt or fear. To finally become yourself and feel magnificent doing it.",
        "How to fill the space around you with aesthetics, warmth and beauty.",
        "How I do all of this myself: through personal experience, examples, purchases, routines and rituals, practices and recipes, books, films, conversations — and everything I can share with you."
      ]
    },

    moreThan: {
      title:    "It's not just a magazine",
      subtitle: "My Corner is a private women's club",
      items: [
        { title: "A safe space",            text: "A place where it's okay to be yourself and talk about what matters" },
        { title: "A living community",      text: "Friends from around the world in a Telegram chat" },
        { title: "Personal access to Dasha", text: "Live streams, questions, answers, inspiration" },
        { title: "Content forever",         text: "Everything you've paid for stays with you — no expiry" }
      ]
    },

    howItWorks: {
      title: "How it works",
      steps: [
        { num: "01", title: "Subscribe",       text: "Click «Get subscription» and pay online" },
        { num: "02", title: "Get access",      text: "You'll receive a link and a unique password" },
        { num: "03", title: "Read & connect",  text: "4 articles a week + a private community" }
      ],
      note: "Works in Russia and abroad — no VPN needed"
    },

    pricing: {
      title:    "My Corner subscription",
      badge:    "Most popular",
      features: [
        "Monthly online magazine",
        "4 articles per week",
        "Vlogs & live streams",
        "Curated picks, wishlists, moodboards",
        "Private Telegram community",
        "Personal access to Dasha Zhukova",
        "Content access forever"
      ],
      cta:  "Get subscription",
      note: "Auto-renews monthly. Cancel anytime."
    },

    demo: {
      eyebrow: "Not sure yet?",
      title:   "Try the demo",
      text:    "I genuinely believe My Corner is my best project. To help you feel its depth and format, I invite you to read a demo with selected articles.",
      cta:     "Open demo"
    },

    testimonials: {
      title:    "Reviews",
      subtitle: "«I came for a dress link and got a new life»",
      showMore: "Show more reviews",
      showLess: "Show less",
      items: [
        {
          name:     "Olena Voitovych",
          handle:   "",
          platform: "telegram",
          text:     "Dasha! Thank you for every article, every word, every photo and video. You are truly a Teacher — not the kind who says «do as I do», but the kind who says «look within yourself, and I'll help».\n\nI've been with you for about 6 years now. I've watched you change, grow and blossom. And I've changed too. I deeply cherish you and wish you your most beautiful life! ☺️💐",
          avatar:   "images/av-olena.jpg"
        },
        {
          name:     "Eva S",
          handle:   "",
          platform: "telegram",
          text:     "I used to be completely unable to convince myself to buy something — not even expensive, just not the cheapest option. Not what's cheap, but what I actually like.\n\nThen I just took what I liked and paid almost with my eyes closed. Do I regret a single penny spent on these lovely, cozy things I wear every day? No. I simply forgot what things cost. Does it make me happy? That's all that matters. Thank you, Dasha.",
          avatar:   "images/av-eva.jpg"
        },
        {
          name:     "Club member",
          handle:   "",
          platform: "telegram",
          text:     "I love being nourished by a sense of the beautiful, the stylish, the aesthetic… I love how taste for detail and beautiful little things slowly arrives. How my attitude toward home, myself, the world changes.\n\nThe most important thing I feel here — my taste for life is coming back. And with it comes the desire to create — I've started painting again and writing songs 😊",
          avatar:   "images/av4.png"
        },
        {
          name:     "Club member",
          handle:   "",
          platform: "telegram",
          text:     "I started going to the gym and not missing workouts even when I'm not in the mood. And a photo session where we all look amazing — everything worth putting on the wall immediately.\n\nAnd a shelf. Inspired by Dasha's — for 30 euros! I thought: why am I denying myself a beautiful shelf?! Bought it, and life immediately got better. Because how long can you live in a beautiful future when there's a beautiful present?",
          avatar:   "images/av4.png"
        },
        {
          name:     "Anya",
          handle:   "",
          platform: "telegram",
          text:     "Dasha, today I heard a compliment I could only receive thanks to you. My colleagues said: «Anya, you dress like you have a personal stylist».\n\nAnd I thought: hm, I'm just pulling things out of my wardrobe.",
          avatar:   "images/av4.png"
        },
        {
          name:     "Club member",
          handle:   "",
          platform: "telegram",
          text:     "Today I'm reflecting on values and setting goals for the coming year — it's my birthday. And I realised what a powerful transformation has been happening in recent months. Especially in how I dress. Every month I make purchases — not many, but right on target. How powerfully the chat and you, Dasha, work! Thank you! 🥺",
          avatar:   "images/av4.png"
        },
        {
          name:     "Club member",
          handle:   "",
          platform: "telegram",
          text:     "I'm learning all of this in your club. I came for a dress link and stayed forever ☺️\n\nThe club helps keep focus on the right things — love for life and oneself, beauty and aesthetics, home comfort, useful routines, preserving energy. Thanks to the club I overcame blocks and patterns that years of therapy couldn't touch.\n\nThank you, Dasha! You are more than a writer, stylist or psychologist. You are a muse ❤️",
          avatar:   "images/av4.png"
        },
        {
          name:     "Club member",
          handle:   "",
          platform: "telegram",
          text:     "I signed up for dance classes I'd wanted to try for a long time — and they turned out to be nearby. A year-long contract, so no backing out, I'll just have to become happy.\n\nNone of my wins this month are really about clothes, they're more about events. But they're all directly connected to my subscription — without it, half of it wouldn't have happened.",
          avatar:   "images/av4.png"
        },
        {
          name:     "Club member",
          handle:   "",
          platform: "telegram",
          text:     "1.5 years ago, Dasha, I started reading you from the very first month. Six months later I started my own business alongside my job. Last month I earned over 100,000 roubles in the business. And orders keep growing.\n\n1.5 years ago — hoodies and jeans, please pretend you can't see me. 1.5 years later — here I am.",
          avatar:   "images/av4.png"
        },
        {
          name:     "Club member",
          handle:   "",
          platform: "telegram",
          text:     "I want to thank you for our precious club. Here's what I personally got from it: wonderful and beloved friends, a kick to leave a dead-end job, a new job, beautiful corners in my home, weekends I've learned to take and truly live through incredibly fully.\n\nThank you, dear person, for your work. So needed and important. I came to browse pretty things and got an entirely different life 😂",
          avatar:   "images/av4.png"
        },
        {
          name:     "Anya",
          handle:   "",
          platform: "telegram",
          text:     "Dasha, I don't know which topic is better to post this in, but today I heard a compliment I could only receive thanks to you. My colleagues said: «Anya, you dress like you have a personal stylist».\n\nAnd I thought: hmm, I'm just pulling things out of my wardrobe.",
          avatar:   "images/av4.png"
        },
        {
          name:     "Club member",
          handle:   "",
          platform: "telegram",
          text:     "My wins this month aren't really about clothes — they're more about events. But they're all directly connected to my subscription. Without it, half of it wouldn't have happened.\n\nI signed up for dance classes I'd wanted to try for ages, and they turned out to be nearby. A year-long contract, so no backing out — I'll just have to become happy.",
          avatar:   "images/av4.png"
        }
      ]
    },

    founder: {
      title:  "Editor-in-chief & founder",
      name:   "Dasha Zhukova",
      handle: "@zhukova_dasha_",
      bio:    "Journalist, author and creator of My Corner. Philosophy degree. Worked in television. Writing since 2015.\n\nMy Corner is now my main project — a place where I put everything I think about life, style, and how small things change everything.",
      cta:    "Follow the author"
    },

    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is My Corner?",
          a: "My Corner is a monthly online magazine and private women's club about style, self-expression, warmth and finding yourself. 4 articles a week, vlogs, live streams and a real community."
        },
        {
          q: "How do I get access after subscribing?",
          a: "After payment you'll receive a link and a unique password. Everything works without VPN — both in Russia and abroad."
        },
        {
          q: "Can I try before subscribing?",
          a: "Yes! There's a free demo with selected articles. Click «Open demo» above."
        },
        {
          q: "What happens to my content if I cancel?",
          a: "Access to all content you've already paid for stays with you forever. You won't lose anything."
        },
        {
          q: "How does billing work?",
          a: "The subscription is monthly with auto-renewal. You can cancel anytime — just write in Telegram."
        },
        {
          q: "What language is the content in?",
          a: "All content is in Russian. The website is available in Russian and English."
        }
      ]
    },

    finalCta: {
      title:    "Found your corner?",
      subtitle: "Join My Corner",
      cta:      "Get subscription",
      demo:     "Try the demo first"
    },

    footer: {
      desc:         "Online magazine and private women's club\nabout style, self-expression and the small things\nthat change everything.",
      contactLabel: "Contact us",
      contactEmail: "hello@my-corner.ru",
      paymentTitle: "Payment",
      paymentText:  "Secure card payment. Accepted in RUB and EUR.",
      privacy:      "Privacy Policy",
      terms:        "Terms of Use",
      cookies:      "Manage cookies",
      copy:         "© 2026 My Corner. All rights reserved."
    }

  }
};
