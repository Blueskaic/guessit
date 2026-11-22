const CATEGORIES = [
 {
  "id": "celebs",
  "name": "סלבריטאים",
  "cover": "img/593d0fe8e313.jpg",
  "items": [
   {
    "name": "גל גדות",
    "img": "img/593d0fe8e313.jpg"
   },
   {
    "name": "בר רפאלי",
    "img": "img/9decf84ec337.jpg"
   },
   {
    "name": "נטלי פורטמן",
    "img": "img/e421ecf78379.jpg"
   },
   {
    "name": "ליאור רז",
    "img": "img/afcdeedb029d.jpg"
   },
   {
    "name": "יהודה לוי",
    "img": "img/f90453802846.jpg"
   },
   {
    "name": "רותם סלע",
    "img": "img/8dcb8d41bc8e.jpg"
   },
   {
    "name": "ארז טל",
    "img": "img/2736abb7ad5c.jpg"
   },
   {
    "name": "גורי אלפי",
    "img": "img/6fdc3e1f19b2.jpg"
   },
   {
    "name": "אסי עזר",
    "img": "img/af9610b469b1.jpg"
   },
   {
    "name": "ליאונרדו דיקפריו",
    "img": "img/e82c7353e25e.jpg"
   },
   {
    "name": "בראד פיט",
    "img": "img/62598b6d9231.jpg"
   },
   {
    "name": "אנג'לינה ג'ולי",
    "img": "img/4a70176c4982.jpg"
   },
   {
    "name": "טום קרוז",
    "img": "img/1999addaf3ac.jpg"
   },
   {
    "name": "טום הנקס",
    "img": "img/a009bc4cd6b2.jpg"
   },
   {
    "name": "ג'וני דפ",
    "img": "img/f25d7dfa6824.jpg"
   },
   {
    "name": "וויל סמית'",
    "img": "img/27252c61188f.jpg"
   },
   {
    "name": "דוויין ג'ונסון (דה רוק)",
    "img": "img/4c934fa80bc4.jpg"
   },
   {
    "name": "קיאנו ריבס",
    "img": "img/4d2e1f8eabca.jpg"
   },
   {
    "name": "מורגן פרימן",
    "img": "img/0cd5252666c2.jpg"
   },
   {
    "name": "ארנולד שוורצנגר",
    "img": "img/c8d96c6f9a91.jpg"
   },
   {
    "name": "ג'קי צ'אן",
    "img": "img/0a82b6b63576.jpg"
   },
   {
    "name": "רואן אטקינסון (מיסטר בין)",
    "img": "img/450b888ca5e0.jpg"
   },
   {
    "name": "ג'ניפר אניסטון",
    "img": "img/8c16d8d8bac1.jpg"
   },
   {
    "name": "סשה ברון כהן",
    "img": "img/593f2a5a503a.jpg"
   },
   {
    "name": "מרילין מונרו",
    "img": "img/60b7014294ed.jpg"
   },
   {
    "name": "צ'רלי צ'פלין",
    "img": "img/5172e80f14fa.jpg"
   },
   {
    "name": "קים קרדשיאן",
    "img": "img/2625391a70b0.jpg"
   },
   {
    "name": "אופרה וינפרי",
    "img": "img/7e4501be8c8f.jpg"
   },
   {
    "name": "אילון מאסק",
    "img": "img/98dd6e4e6135.jpg"
   },
   {
    "name": "מארק צוקרברג",
    "img": "img/34510cac3698.jpg"
   },
   {
    "name": "ביל גייטס",
    "img": "img/be9173589a74.jpg"
   },
   {
    "name": "סטיב ג'ובס",
    "img": "img/7f76ff8615d6.jpg"
   },
   {
    "name": "ג'ף בזוס",
    "img": "img/bc857546c837.jpg"
   },
   {
    "name": "אלברט איינשטיין",
    "img": "img/7560afa1f46d.jpg"
   },
   {
    "name": "דונלד טראמפ",
    "img": "img/c3ea9c496b8d.jpg"
   },
   {
    "name": "ברק אובמה",
    "img": "img/efa52b69d7f7.jpg"
   },
   {
    "name": "המלכה אליזבת השנייה",
    "img": "img/eabc97272a60.jpg"
   },
   {
    "name": "וינסטון צ'רצ'יל",
    "img": "img/de0c547eeab4.jpg"
   },
   {
    "name": "מהטמה גנדי",
    "img": "img/17f43afc21a8.jpg"
   },
   {
    "name": "נלסון מנדלה",
    "img": "img/f256b9ea9264.jpg"
   },
   {
    "name": "מרטין לותר קינג",
    "img": "img/57b851ebba4f.jpg"
   },
   {
    "name": "בנימין נתניהו",
    "img": "img/bc792503c5a8.jpg"
   },
   {
    "name": "דוד בן-גוריון",
    "img": "img/6059882ef174.jpg"
   },
   {
    "name": "גולדה מאיר",
    "img": "img/deeb84ce5ed6.jpg"
   },
   {
    "name": "יצחק רבין",
    "img": "img/78c1ef521faf.jpg"
   },
   {
    "name": "שמעון פרס",
    "img": "img/038a9b6e0044.jpg"
   },
   {
    "name": "עומר אדם",
    "img": "img/f700cfaa6254.jpg"
   },
   {
    "name": "אייל גולן",
    "img": "img/70434d2e3071.jpg"
   },
   {
    "name": "נועה קירל",
    "img": "img/7a19bf12f91d.jpg"
   },
   {
    "name": "שרית חדד",
    "img": "img/10b25c688f21.jpg"
   },
   {
    "name": "עדן בן זקן",
    "img": "img/b00933b6790b.jpg"
   },
   {
    "name": "אריק איינשטיין",
    "img": "img/f1c27f6e4c54.jpg"
   },
   {
    "name": "עופרה חזה",
    "img": "img/056c9fa20645.jpg"
   },
   {
    "name": "זהבה בן",
    "img": "img/f0f7b4afdd30.jpg"
   },
   {
    "name": "שלמה ארצי",
    "img": "img/520ceacec1b1.jpg"
   },
   {
    "name": "אביב גפן",
    "img": "img/3b9c23abe704.jpg"
   },
   {
    "name": "נטע ברזילי",
    "img": "img/f817f19ee696.jpg"
   },
   {
    "name": "ישי ריבו",
    "img": "img/982d51975cab.jpg"
   },
   {
    "name": "דנה אינטרנשיונל",
    "img": "img/8e3c3468b3fc.jpg"
   },
   {
    "name": "עידן רייכל",
    "img": "img/499b6ec47ab6.jpg"
   },
   {
    "name": "זוהר ארגוב",
    "img": "img/0b2a277ba0d2.jpg"
   },
   {
    "name": "יהורם גאון",
    "img": "img/e109f68eefd1.jpg"
   },
   {
    "name": "שלום חנוך",
    "img": "img/47de5a619b92.jpg"
   },
   {
    "name": "ריטה",
    "img": "img/8b051a15dc85.jpg"
   },
   {
    "name": "סטטיק ובן אל",
    "img": "img/0c3c335b781a.jpg"
   },
   {
    "name": "אגם בוחבוט",
    "img": "img/4491a210e3dd.jpg"
   },
   {
    "name": "משה פרץ",
    "img": "img/68675a2f4c3c.jpg"
   },
   {
    "name": "קובי פרץ",
    "img": "img/67522cf7d75d.jpg"
   },
   {
    "name": "מאיר בנאי",
    "img": "img/a2f01be2cd6f.jpg"
   },
   {
    "name": "יובל דיין",
    "img": "img/2e523c5935df.jpg"
   },
   {
    "name": "מייקל ג'קסון",
    "img": "img/b1d113e11165.jpg"
   },
   {
    "name": "מדונה",
    "img": "img/7dc4e2581480.jpg"
   },
   {
    "name": "ביונסה",
    "img": "img/dc7d3caaa4fc.jpg"
   },
   {
    "name": "טיילור סוויפט",
    "img": "img/7ae068e144aa.jpg"
   },
   {
    "name": "ריהאנה",
    "img": "img/5285577208aa.jpg"
   },
   {
    "name": "ג'סטין ביבר",
    "img": "img/24b9298a187e.jpg"
   },
   {
    "name": "אלביס פרסלי",
    "img": "img/5e34276748f5.jpg"
   },
   {
    "name": "פרדי מרקורי",
    "img": "img/ca96fa7c127d.jpg"
   },
   {
    "name": "שאקירה",
    "img": "img/259a8d896847.jpg"
   },
   {
    "name": "ליידי גאגא",
    "img": "img/09488a6484f9.jpg"
   },
   {
    "name": "אד שירן",
    "img": "img/c19162e3de8a.jpg"
   },
   {
    "name": "אדל",
    "img": "img/a5c59c031509.jpg"
   },
   {
    "name": "ברונו מארס",
    "img": "img/5da1abae03e5.jpg"
   },
   {
    "name": "אמינם",
    "img": "img/effbbbdf75ed.jpg"
   },
   {
    "name": "בוב מארלי",
    "img": "img/e7646f6929cc.jpg"
   },
   {
    "name": "סלין דיון",
    "img": "img/ea4f9c82310c.jpg"
   },
   {
    "name": "בריטני ספירס",
    "img": "img/cccf551faf8c.jpg"
   },
   {
    "name": "בילי אייליש",
    "img": "img/be05b49960df.jpg"
   },
   {
    "name": "ג'ון לנון",
    "img": "img/fcb9684bfddf.jpg"
   },
   {
    "name": "פרנק סינטרה",
    "img": "img/c2923e62d7e0.jpg"
   },
   {
    "name": "אריאנה גרנדה",
    "img": "img/4a5b04b66126.jpg"
   },
   {
    "name": "דואה ליפה",
    "img": "img/2444914d57fd.jpg"
   },
   {
    "name": "עדן גולן",
    "img": "img/8cbc47b6dd14.jpg"
   },
   {
    "name": "יובל רפאל",
    "img": "img/96e6dbf95820.jpg"
   },
   {
    "name": "חנן בן ארי",
    "img": "img/0ea0a94b54e9.jpg"
   },
   {
    "name": "עברי לידר",
    "img": "img/df59b21b426f.jpg"
   },
   {
    "name": "הראל סקעת",
    "img": "img/543fbb13bdfd.jpg"
   },
   {
    "name": "דודו אהרון",
    "img": "img/1a9ccbeaba6f.jpg"
   },
   {
    "name": "שירי מימון",
    "img": "img/19f5b39ae8c4.jpg"
   },
   {
    "name": "נינט טייב",
    "img": "img/45d9bd685a74.jpg"
   },
   {
    "name": "מרגלית צנעני",
    "img": "img/8b12e56f1452.jpg"
   },
   {
    "name": "גידי גוב",
    "img": "img/a9882ae80cdc.jpg"
   },
   {
    "name": "רביד פלוטניק",
    "img": "img/6ec21ace0856.jpg"
   },
   {
    "name": "ליאור אשכנזי",
    "img": "img/14f49e3b2296.jpg"
   },
   {
    "name": "עדיר מילר",
    "img": "img/b935d76124e4.jpg"
   },
   {
    "name": "יונית לוי",
    "img": "img/286274a0dff6.jpg"
   },
   {
    "name": "צביקה הדר",
    "img": "img/792c31a3d52e.jpg"
   },
   {
    "name": "אברי גלעד",
    "img": "img/694b433fc18f.jpg"
   },
   {
    "name": "אנה זק",
    "img": "img/b856afbccce2.jpg"
   },
   {
    "name": "עדן חסון",
    "img": "img/4a0f85cc9497.jpg"
   },
   {
    "name": "טונה",
    "img": "img/1781d36ce375.jpg"
   },
   {
    "name": "חיים טופול",
    "img": "img/80c5860dda96.jpg"
   },
   {
    "name": "יאיר לפיד",
    "img": "img/3fa31737b276.jpg"
   },
   {
    "name": "נפתלי בנט",
    "img": "img/a875692bbf4b.jpg"
   },
   {
    "name": "בני גנץ",
    "img": "img/ee35800e7a08.jpg"
   },
   {
    "name": "אביגדור ליברמן",
    "img": "img/3078fd98f859.jpg"
   },
   {
    "name": "איתמר בן גביר",
    "img": "img/b9b3058e45d3.jpg"
   },
   {
    "name": "בצלאל סמוטריץ'",
    "img": "img/2b06e9577d32.jpg"
   },
   {
    "name": "אריה דרעי",
    "img": "img/abebb95a5a57.jpg"
   },
   {
    "name": "מירי רגב",
    "img": "img/36d6d6b986eb.jpg"
   },
   {
    "name": "שרה נתניהו",
    "img": "img/8dbee3fda4f1.jpg"
   },
   {
    "name": "יאיר נתניהו",
    "img": "img/9603933f52fa.jpg"
   },
   {
    "name": "אהוד ברק",
    "img": "img/5cec80718041.jpg"
   },
   {
    "name": "אהוד אולמרט",
    "img": "img/0e6557b4427d.jpg"
   },
   {
    "name": "אריאל שרון",
    "img": "img/293885f888af.jpg"
   },
   {
    "name": "מנחם בגין",
    "img": "img/259470ce5170.jpg"
   },
   {
    "name": "משה דיין",
    "img": "img/c90e13042c3a.jpg"
   },
   {
    "name": "יצחק הרצוג",
    "img": "img/b3c6b1f63b86.jpg"
   },
   {
    "name": "משה קצב",
    "img": "img/4dd909a5b8bd.jpg"
   },
   {
    "name": "הרב עובדיה יוסף",
    "img": "img/beda56021159.jpg"
   },
   {
    "name": "הרב אמנון יצחק",
    "img": "img/37e5e9fc4fc3.jpg"
   },
   {
    "name": "תיאודור הרצל",
    "img": "img/34c57fd2ea1b.jpg"
   },
   {
    "name": "ג'ים קארי",
    "img": "img/3290dd21bef3.jpg"
   },
   {
    "name": "סקרלט ג'והנסון",
    "img": "img/b22622f6cd51.jpg"
   },
   {
    "name": "מרגו רובי",
    "img": "img/4a5898a1a177.jpg"
   },
   {
    "name": "זנדאיה",
    "img": "img/0637b8d17a0b.jpg"
   },
   {
    "name": "טימותי שאלאמה",
    "img": "img/268aeb875659.jpg"
   },
   {
    "name": "ריאן ריינולדס",
    "img": "img/6e3e9b66ca73.jpg"
   },
   {
    "name": "רוברט דאוני ג'וניור",
    "img": "img/53ad06b743c3.jpg"
   },
   {
    "name": "כריס המסוורת'",
    "img": "img/837fe6e85081.jpg"
   },
   {
    "name": "ג'ניפר לורנס",
    "img": "img/f72f92c8efeb.jpg"
   },
   {
    "name": "אמה ווטסון",
    "img": "img/c0efd98e7074.jpg"
   },
   {
    "name": "דניאל רדקליף",
    "img": "img/9518e13536a6.jpg"
   },
   {
    "name": "מריל סטריפ",
    "img": "img/635f4417acfb.jpg"
   },
   {
    "name": "אל פצ'ינו",
    "img": "img/1c9909508d98.jpg"
   },
   {
    "name": "רוברט דה נירו",
    "img": "img/fcc8e6b844d2.jpg"
   },
   {
    "name": "סילבסטר סטאלון",
    "img": "img/bafc9abb24e9.jpg"
   },
   {
    "name": "וין דיזל",
    "img": "img/97ffbf8df44b.jpg"
   },
   {
    "name": "ג'ייסון סטייתם",
    "img": "img/cbea8e656880.jpg"
   },
   {
    "name": "ניקולס קייג'",
    "img": "img/58d28d14df1c.jpg"
   },
   {
    "name": "אדם סנדלר",
    "img": "img/dfaa815a18f3.jpg"
   },
   {
    "name": "אדי מרפי",
    "img": "img/5be53504e70a.jpg"
   },
   {
    "name": "ג'ק בלאק",
    "img": "img/ced6bcc4a4f0.jpg"
   },
   {
    "name": "קווין הארט",
    "img": "img/72bb151730fa.jpg"
   },
   {
    "name": "ג'וליה רוברטס",
    "img": "img/ced5781fe760.jpg"
   },
   {
    "name": "ניקול קידמן",
    "img": "img/cfd6abdcb181.jpg"
   },
   {
    "name": "טום הולנד",
    "img": "img/4adc73b521d9.jpg"
   },
   {
    "name": "יו ג'קמן",
    "img": "img/d756b74e5cbe.jpg"
   },
   {
    "name": "ג'ורג' קלוני",
    "img": "img/0443b143f832.jpg"
   },
   {
    "name": "סמואל ל. ג'קסון",
    "img": "img/2f2b03d65c74.jpg"
   },
   {
    "name": "דנזל וושינגטון",
    "img": "img/d1cefea029c2.jpg"
   },
   {
    "name": "הריסון פורד",
    "img": "img/9e59da77f25c.jpg"
   },
   {
    "name": "ברוס ויליס",
    "img": "img/42c8a7b2785b.jpg"
   },
   {
    "name": "מל גיבסון",
    "img": "img/d80641e19c44.jpg"
   },
   {
    "name": "ברוס לי",
    "img": "img/d19e6395ed18.jpg"
   },
   {
    "name": "אודרי הפבורן",
    "img": "img/fc3eda431d13.jpg"
   },
   {
    "name": "מתיו פרי",
    "img": "img/fb86584270e1.jpg"
   },
   {
    "name": "גורדון רמזי",
    "img": "img/8c6ba3269f12.jpg"
   },
   {
    "name": "מיסטר ביסט",
    "img": "img/6779ca4730c8.jpg"
   },
   {
    "name": "קיילי ג'נר",
    "img": "img/fe1164c06c54.jpg"
   },
   {
    "name": "פריס הילטון",
    "img": "img/eeb6eb5a7eed.jpg"
   },
   {
    "name": "סלינה גומז",
    "img": "img/401a284fda3e.jpg"
   },
   {
    "name": "מיילי סיירוס",
    "img": "img/1406a07118be.jpg"
   },
   {
    "name": "קייטי פרי",
    "img": "img/f273e8985c1c.jpg"
   },
   {
    "name": "דרייק",
    "img": "img/7968b925d7fe.jpg"
   },
   {
    "name": "קניה ווסט",
    "img": "img/729b332d2a1c.jpg"
   },
   {
    "name": "סנופ דוג",
    "img": "img/968c10f8f159.jpg"
   },
   {
    "name": "ג'ניפר לופז",
    "img": "img/e41c2d43b624.jpg"
   },
   {
    "name": "הארי סטיילס",
    "img": "img/45ebbb129017.jpg"
   },
   {
    "name": "ג'סטין טימברלייק",
    "img": "img/1629c2fdb315.jpg"
   },
   {
    "name": "אלטון ג'ון",
    "img": "img/0de86b3ed577.jpg"
   },
   {
    "name": "מיק ג'אגר",
    "img": "img/b6f1ec2958c9.jpg"
   },
   {
    "name": "פול מקרטני",
    "img": "img/d8a5441817b1.jpg"
   },
   {
    "name": "וויטני יוסטון",
    "img": "img/7369ca5523f2.jpg"
   },
   {
    "name": "ניקי מינאז'",
    "img": "img/206852b9306a.jpg"
   },
   {
    "name": "סברינה קרפנטר",
    "img": "img/6ed990a07d4a.jpg"
   },
   {
    "name": "קורט קוביין",
    "img": "img/21c862bb4502.jpg"
   },
   {
    "name": "אוזי אוסבורן",
    "img": "img/9ac8c53d0c65.jpg"
   },
   {
    "name": "באד באני",
    "img": "img/7a5fe33913ea.jpg"
   },
   {
    "name": "הנסיכה דיאנה",
    "img": "img/cabc52bca601.jpg"
   },
   {
    "name": "המלך צ'ארלס",
    "img": "img/6d57b779da0d.jpg"
   },
   {
    "name": "הנסיך הארי",
    "img": "img/fe0b32f60cfd.jpg"
   },
   {
    "name": "האפיפיור פרנציסקוס",
    "img": "img/58d4c0e73d9d.jpg"
   },
   {
    "name": "הדלאי לאמה",
    "img": "img/64a14bb24004.jpg"
   },
   {
    "name": "ג'ו ביידן",
    "img": "img/abfba24f6460.jpg"
   },
   {
    "name": "קמלה האריס",
    "img": "img/b88cb60e7723.jpg"
   },
   {
    "name": "עמנואל מקרון",
    "img": "img/9d19d1cb6930.jpg"
   },
   {
    "name": "וולודימיר זלנסקי",
    "img": "img/50eb1b313978.jpg"
   },
   {
    "name": "אנגלה מרקל",
    "img": "img/ad74e5400c00.jpg"
   },
   {
    "name": "ביל קלינטון",
    "img": "img/a7ff9e853d93.jpg"
   },
   {
    "name": "אברהם לינקולן",
    "img": "img/2f7cfa603df2.jpg"
   },
   {
    "name": "נפוליאון",
    "img": "img/811c7ce75d2b.jpg"
   },
   {
    "name": "ליאונרדו דה וינצ'י",
    "img": "img/4f9b6c6861b4.jpg"
   },
   {
    "name": "וויליאם שייקספיר",
    "img": "img/019e95a72040.jpg"
   },
   {
    "name": "מוצרט",
    "img": "img/1c82c2c7d580.jpg"
   },
   {
    "name": "בטהובן",
    "img": "img/409b9faac85e.jpg"
   },
   {
    "name": "פבלו פיקאסו",
    "img": "img/9716719fb465.jpg"
   },
   {
    "name": "וינסנט ואן גוך",
    "img": "img/4ba53b228e0f.jpg"
   },
   {
    "name": "זיגמונד פרויד",
    "img": "img/1db11a70dce1.jpg"
   },
   {
    "name": "אייזק ניוטון",
    "img": "img/d28b9a449997.jpg"
   },
   {
    "name": "סטיבן הוקינג",
    "img": "img/4e43bbc2dc5f.jpg"
   },
   {
    "name": "ניקולה טסלה",
    "img": "img/cd2d22973ef0.jpg"
   },
   {
    "name": "מארי קירי",
    "img": "img/8ee140eab9e0.jpg"
   },
   {
    "name": "צ'ארלס דרווין",
    "img": "img/09a208d72b42.jpg"
   },
   {
    "name": "אדולף היטלר",
    "img": "img/540dea05a35b.jpg"
   },
   {
    "name": "יוסיף סטלין",
    "img": "img/4ae616eb7c91.jpg"
   },
   {
    "name": "בניטו מוסוליני",
    "img": "img/fddbd3c0cae5.jpg"
   },
   {
    "name": "מאו דזה-דונג",
    "img": "img/8828761228a0.jpg"
   },
   {
    "name": "קים ג'ונג-און",
    "img": "img/dec7c70a98e2.jpg"
   },
   {
    "name": "ולדימיר פוטין",
    "img": "img/ac783b8c2e88.jpg"
   },
   {
    "name": "עלי חמינאי",
    "img": "img/5a03de080655.jpg"
   },
   {
    "name": "חומייני",
    "img": "img/2c379fab7f68.jpg"
   },
   {
    "name": "חסן נסראללה",
    "img": "img/2b53fe52668f.jpg"
   },
   {
    "name": "יחיא סינוואר",
    "img": "img/93bc0868c2f4.jpg"
   },
   {
    "name": "אוסאמה בן לאדן",
    "img": "img/ff05b5e391f3.jpg"
   },
   {
    "name": "סדאם חוסיין",
    "img": "img/9e4e0774b3f1.jpg"
   },
   {
    "name": "מועמר קדאפי",
    "img": "img/c5f52bce5a9f.jpg"
   },
   {
    "name": "בשאר אל-אסד",
    "img": "img/d904f52115ea.jpg"
   },
   {
    "name": "רג'פ טאיפ ארדואן",
    "img": "img/40fc20f578f4.jpg"
   },
   {
    "name": "פידל קסטרו",
    "img": "img/7ff5d422fa44.jpg"
   },
   {
    "name": "צ'ה גווארה",
    "img": "img/49b5f4ef1836.jpg"
   },
   {
    "name": "יאסר ערפאת",
    "img": "img/48074fce32bd.jpg"
   },
   {
    "name": "אבו מאזן",
    "img": "img/d16171e9433d.jpg"
   },
   {
    "name": "פבלו אסקובר",
    "img": "img/2d22da691c35.jpg"
   },
   {
    "name": "אל קפונה",
    "img": "img/9f97031de873.jpg"
   },
   {
    "name": "ג'פרי אפשטיין",
    "img": "img/71842f02bd56.jpg"
   },
   {
    "name": "הארווי ויינשטיין",
    "img": "img/d3b1b602572d.jpg"
   },
   {
    "name": "אנדרו טייט",
    "img": "img/9b1b7f419b9a.jpg"
   },
   {
    "name": "פי דידי",
    "img": "img/32977d467109.jpg"
   },
   {
    "name": "או ג'יי סימפסון",
    "img": "img/bdd4b08207dc.jpg"
   },
   {
    "name": "צ'ארלס מנסון",
    "img": "img/f3246402b473.jpg"
   },
   {
    "name": "ברני מיידוף",
    "img": "img/9839d883ab66.jpg"
   },
   {
    "name": "ג'וליאן אסאנג'",
    "img": "img/faa77ead7597.jpg"
   },
   {
    "name": "אדוארד סנודן",
    "img": "img/78b5fb39b6a3.jpg"
   },
   {
    "name": "גרטה תונברג",
    "img": "img/bc2b70031c3b.jpg"
   },
   {
    "name": "לוגן פול",
    "img": "img/78adea52bbf8.jpg"
   },
   {
    "name": "הנסיך אנדרו",
    "img": "img/af00b50f99cd.jpg"
   },
   {
    "name": "יו הפנר",
    "img": "img/6f749541be66.jpg",
    "nsfw": 1
   },
   {
    "name": "מיה ח'ליפה",
    "img": "img/795c67e918bf.jpg",
    "nsfw": 1
   },
   {
    "name": "ג'וני סינס",
    "img": "img/df8f2e725ea7.jpg",
    "nsfw": 1
   },
   {
    "name": "סטורמי דניאלס",
    "img": "img/ddcb810a8d7f.jpg",
    "nsfw": 1
   },
   {
    "name": "ג'נה ג'יימסון",
    "img": "img/8be3cb2123c6.jpg",
    "nsfw": 1
   },
   {
    "name": "סשה גריי",
    "img": "img/09a3a7406cdd.jpg",
    "nsfw": 1
   },
   {
    "name": "סאני לאון",
    "img": "img/e77e29ff990e.jpg",
    "nsfw": 1
   },
   {
    "name": "פמלה אנדרסון",
    "img": "img/49a175399400.jpg",
    "nsfw": 1
   },
   {
    "name": "רוקו סיפרדי",
    "img": "img/7ab27ec72a50.jpg",
    "nsfw": 1
   },
   {
    "name": "ריילי ריד",
    "img": "img/2c55b8579240.jpg",
    "nsfw": 1
   },
   {
    "name": "לאנה רודס",
    "img": "img/fa9333d1b27b.jpg",
    "nsfw": 1
   },
   {
    "name": "בל דלפין",
    "img": "img/8f35c653f879.jpg",
    "nsfw": 1
   },
   {
    "name": "מוניקה לוינסקי",
    "img": "img/7bb6c2388612.jpg",
    "nsfw": 1
   },
   {
    "name": "דיטה פון טיז",
    "img": "img/18502d356eca.jpg",
    "nsfw": 1
   },
   {
    "name": "קזנובה",
    "img": "img/828529bdb5ab.jpg",
    "nsfw": 1
   },
   {
    "name": "המרקיז דה סאד",
    "img": "img/73c21afe7141.jpg",
    "nsfw": 1
   }
  ]
 },
 {
  "id": "cartoons",
  "name": "דמויות מצוירות",
  "cover": "img/15920fff53b4.jpg",
  "items": [
   {
    "name": "מיקי מאוס",
    "img": "img/15920fff53b4.jpg"
   },
   {
    "name": "מיני מאוס",
    "img": "img/1cab014419fe.jpg"
   },
   {
    "name": "דונלד דאק",
    "img": "img/4f7ad45c100c.jpg"
   },
   {
    "name": "גופי",
    "img": "img/d526ec1f94b3.jpg"
   },
   {
    "name": "באגס באני",
    "img": "img/2a4458a7f133.jpg"
   },
   {
    "name": "דאפי דאק",
    "img": "img/66e19644ab0d.jpg"
   },
   {
    "name": "טוויטי",
    "img": "img/2829cb16250b.jpg"
   },
   {
    "name": "טום החתול",
    "img": "img/2555fded6b2d.jpg"
   },
   {
    "name": "ג'רי העכבר",
    "img": "img/99b483e0269e.jpg"
   },
   {
    "name": "בובספוג",
    "img": "img/c5f6c1a1c3c6.jpg"
   },
   {
    "name": "פטריק כוכב",
    "img": "img/80d6d9004499.jpg"
   },
   {
    "name": "סקווידוורד",
    "img": "img/91e799e74aec.jpg"
   },
   {
    "name": "מר קראבס",
    "img": "img/20328ab2f85c.jpg"
   },
   {
    "name": "הומר סימפסון",
    "img": "img/57b9609b2b99.jpg"
   },
   {
    "name": "בארט סימפסון",
    "img": "img/203c44865313.jpg"
   },
   {
    "name": "מארג' סימפסון",
    "img": "img/74650cf30552.jpg"
   },
   {
    "name": "פיטר גריפין",
    "img": "img/c8471eba478d.jpg"
   },
   {
    "name": "סטואי גריפין",
    "img": "img/7c0cf702002e.jpg"
   },
   {
    "name": "ריק סאנצ'ז",
    "img": "img/70eb270e1b37.jpg"
   },
   {
    "name": "אריק קרטמן",
    "img": "img/08b758c96336.jpg"
   },
   {
    "name": "פיקאצ'ו",
    "img": "img/4b576e26f68e.jpg"
   },
   {
    "name": "שרק",
    "img": "img/08fe3fb730ee.jpg"
   },
   {
    "name": "החמור משרק",
    "img": "img/f8618b3419d1.jpg"
   },
   {
    "name": "סקובי-דו",
    "img": "img/f8b92fafa9f1.jpg"
   },
   {
    "name": "גארפילד",
    "img": "img/f7c843566646.jpg"
   },
   {
    "name": "סנופי",
    "img": "img/a61c650b67e4.jpg"
   },
   {
    "name": "פופאי",
    "img": "img/f5e1385fc60b.jpg"
   },
   {
    "name": "הפנתר הוורוד",
    "img": "img/374fe0e025c6.jpg"
   },
   {
    "name": "פו הדב",
    "img": "img/5c7ae2d55e77.jpg"
   },
   {
    "name": "אלזה",
    "img": "img/3c73fe6b2963.jpg"
   },
   {
    "name": "אולף",
    "img": "img/6e9cc3f6b212.jpg"
   },
   {
    "name": "סימבה",
    "img": "img/8d0e3879c8e4.jpg"
   },
   {
    "name": "באז שנות אור",
    "img": "img/c25eed4a54ef.jpg"
   },
   {
    "name": "וודי",
    "img": "img/41612dae59c2.jpg"
   },
   {
    "name": "סופר מריו",
    "img": "img/1cc477616bb1.jpg"
   },
   {
    "name": "סוניק",
    "img": "img/e5b92963afcc.jpg"
   },
   {
    "name": "דרדסבא",
    "img": "img/67a4809e946a.jpg"
   },
   {
    "name": "פינוקיו",
    "img": "img/610e42949651.jpg"
   },
   {
    "name": "אלאדין",
    "img": "img/dc3476aa0646.jpg"
   },
   {
    "name": "הג'יני",
    "img": "img/6b07ee39ebfc.jpg"
   },
   {
    "name": "בת הים הקטנה",
    "img": "img/3219cc7799b7.jpg"
   },
   {
    "name": "המיניונים",
    "img": "img/7b4a2d75f415.jpg"
   },
   {
    "name": "גרו",
    "img": "img/fbba97daa92e.jpg"
   },
   {
    "name": "פו מקונג פו פנדה",
    "img": "img/bddcba0aee20.jpg"
   },
   {
    "name": "סטיץ'",
    "img": "img/a4aed6809837.jpg"
   },
   {
    "name": "מייק וזובסקי",
    "img": "img/e4c4e434dc9f.jpg"
   },
   {
    "name": "לייטנינג מקווין",
    "img": "img/da3929452836.jpg"
   },
   {
    "name": "שרוליק",
    "img": "img/77f212a8a836.jpg"
   },
   {
    "name": "וודי נקר העצים",
    "img": "img/15c172393f75.jpg"
   },
   {
    "name": "קספר",
    "img": "img/6a4ee1bfb289.jpg"
   },
   {
    "name": "פרד פלינסטון",
    "img": "img/c1c3a8ab4cd9.jpg"
   },
   {
    "name": "גוקו",
    "img": "img/db388b1b18ab.jpg"
   },
   {
    "name": "נארוטו",
    "img": "img/b3bbea50bebc.jpg"
   },
   {
    "name": "אש קצ'ום",
    "img": "img/7937b423a414.jpg"
   },
   {
    "name": "ג'וני בראבו",
    "img": "img/36ddde3d57ef.jpg"
   },
   {
    "name": "בטי בופ",
    "img": "img/c1d5a032a61f.jpg"
   },
   {
    "name": "הלו קיטי",
    "img": "img/02124309c986.jpg"
   },
   {
    "name": "אסטריקס",
    "img": "img/d1e988c93930.jpg"
   },
   {
    "name": "ג'סיקה ראביט",
    "img": "img/d9235e66253c.jpg",
    "nsfw": 1
   },
   {
    "name": "גלן קווגמייר",
    "img": "img/f2b3331816a8.jpg",
    "nsfw": 1
   },
   {
    "name": "הרברט הסוטה",
    "img": "img/136be7f4bd83.jpg",
    "nsfw": 1
   }
  ]
 },
 {
  "id": "athletes",
  "name": "ספורטאים",
  "cover": "img/ec7974cc0208.jpg",
  "items": [
   {
    "name": "ליונל מסי",
    "img": "img/ec7974cc0208.jpg"
   },
   {
    "name": "כריסטיאנו רונאלדו",
    "img": "img/4ba3e34a0c20.jpg"
   },
   {
    "name": "ניימאר",
    "img": "img/0b4b53cec1ab.jpg"
   },
   {
    "name": "קיליאן אמבפה",
    "img": "img/8deb7339e280.jpg"
   },
   {
    "name": "ארלינג הולאנד",
    "img": "img/3b246ec15934.jpg"
   },
   {
    "name": "פלה",
    "img": "img/a01a38a5094c.jpg"
   },
   {
    "name": "דייגו מרדונה",
    "img": "img/054f94a7a2bd.jpg"
   },
   {
    "name": "דייוויד בקהאם",
    "img": "img/fe0b53065e23.jpg"
   },
   {
    "name": "זינדין זידאן",
    "img": "img/dddb30a37421.jpg"
   },
   {
    "name": "מייקל ג'ורדן",
    "img": "img/79255a6e8261.jpg"
   },
   {
    "name": "לברון ג'יימס",
    "img": "img/2cb41fa6a56c.jpg"
   },
   {
    "name": "קובי בראיינט",
    "img": "img/bb74e5f54542.jpg"
   },
   {
    "name": "סטפן קרי",
    "img": "img/487526c9e796.jpg"
   },
   {
    "name": "יוסיין בולט",
    "img": "img/bd0ae773d9c9.jpg"
   },
   {
    "name": "רוג'ר פדרר",
    "img": "img/60cf0f390cd7.jpg"
   },
   {
    "name": "רפאל נדאל",
    "img": "img/5122d20f6713.jpg"
   },
   {
    "name": "נובאק ג'וקוביץ'",
    "img": "img/bf3e00efa0d1.jpg"
   },
   {
    "name": "סרינה ויליאמס",
    "img": "img/2b9bac755c32.jpg"
   },
   {
    "name": "מוחמד עלי",
    "img": "img/81d1d45dbb19.jpg"
   },
   {
    "name": "מייק טייסון",
    "img": "img/90fe3c4de10a.jpg"
   },
   {
    "name": "מייקל פלפס",
    "img": "img/2fa1ef27eaca.jpg"
   },
   {
    "name": "טייגר וודס",
    "img": "img/e67c141d22d9.jpg"
   },
   {
    "name": "לואיס המילטון",
    "img": "img/d91f4dc4ec25.jpg"
   },
   {
    "name": "עמרי כספי",
    "img": "img/6e639365cd2a.jpg"
   },
   {
    "name": "דני אבדיה",
    "img": "img/18f9b7f61530.jpg"
   },
   {
    "name": "ערן זהבי",
    "img": "img/3e31906934db.jpg"
   },
   {
    "name": "יוסי בניון",
    "img": "img/07641fd6e63c.jpg"
   },
   {
    "name": "טל ברודי",
    "img": "img/bc0d3c8ebe44.jpg"
   },
   {
    "name": "לינוי אשרם",
    "img": "img/4506e41b2750.jpg"
   },
   {
    "name": "ארטיום דולגופיאט",
    "img": "img/19d09a405419.jpg"
   },
   {
    "name": "שחר פאר",
    "img": "img/8c467cfa913e.jpg"
   },
   {
    "name": "גל פרידמן",
    "img": "img/b90143e78966.jpg"
   },
   {
    "name": "מנור סולומון",
    "img": "img/67e27adbe7e9.jpg"
   }
  ]
 },
 {
  "id": "countries",
  "name": "מדינות",
  "cover": "img/5a548c2f5875.jpg",
  "items": [
   {
    "name": "ישראל",
    "img": "img/5a548c2f5875.jpg"
   },
   {
    "name": "ארצות הברית",
    "img": "img/f253efe302d3.jpg"
   },
   {
    "name": "צרפת",
    "img": "img/0309a6c666a7.jpg"
   },
   {
    "name": "איטליה",
    "img": "img/1007e1b7f894.jpg"
   },
   {
    "name": "ספרד",
    "img": "img/907eba32d950.jpg"
   },
   {
    "name": "גרמניה",
    "img": "img/d8b00929dec6.jpg"
   },
   {
    "name": "בריטניה",
    "img": "img/89f9c9f489be.jpg"
   },
   {
    "name": "יפן",
    "img": "img/53a577bb3bc5.jpg"
   },
   {
    "name": "סין",
    "img": "img/ae54a5c026f3.jpg"
   },
   {
    "name": "הודו",
    "img": "img/7d31e0da1ab9.jpg"
   },
   {
    "name": "ברזיל",
    "img": "img/42537f0fb56e.jpg"
   },
   {
    "name": "ארגנטינה",
    "img": "img/3536be57ce07.jpg"
   },
   {
    "name": "מקסיקו",
    "img": "img/8dbb07a18d46.jpg"
   },
   {
    "name": "קנדה",
    "img": "img/445d337b5cd5.jpg"
   },
   {
    "name": "אוסטרליה",
    "img": "img/4442e4af0916.jpg"
   },
   {
    "name": "רוסיה",
    "img": "img/5feb168ca8fb.jpg"
   },
   {
    "name": "מצרים",
    "img": "img/e31959fe2842.jpg"
   },
   {
    "name": "יוון",
    "img": "img/6b718641741f.jpg"
   },
   {
    "name": "טורקיה",
    "img": "img/221cdfb73049.jpg"
   },
   {
    "name": "הולנד",
    "img": "img/a67d4cbdd1b5.jpg"
   },
   {
    "name": "שווייץ",
    "img": "img/3ad08396dc5a.jpg"
   },
   {
    "name": "שוודיה",
    "img": "img/c8f4261f9f46.jpg"
   },
   {
    "name": "נורבגיה",
    "img": "img/d5b9290a0b67.jpg"
   },
   {
    "name": "תאילנד",
    "img": "img/103357e3e40a.jpg"
   },
   {
    "name": "דרום קוריאה",
    "img": "img/4d4803b0bb7d.jpg"
   },
   {
    "name": "דרום אפריקה",
    "img": "img/c89bc418c38d.jpg"
   },
   {
    "name": "פורטוגל",
    "img": "img/ea71b362e3ea.jpg"
   },
   {
    "name": "אירלנד",
    "img": "img/200c532d49ba.jpg"
   },
   {
    "name": "ג'מייקה",
    "img": "img/1add2eb41fca.jpg"
   },
   {
    "name": "קפריסין",
    "img": "img/ea2ba3f8011e.jpg"
   },
   {
    "name": "מרוקו",
    "img": "img/4d4a1722d8e8.jpg"
   },
   {
    "name": "אוקראינה",
    "img": "img/f01fc92b23fa.jpg"
   },
   {
    "name": "פולין",
    "img": "img/94880bda83bd.jpg"
   },
   {
    "name": "ירדן",
    "img": "img/6ea1e24d60af.jpg"
   },
   {
    "name": "איחוד האמירויות",
    "img": "img/8f6f28f0d206.jpg"
   },
   {
    "name": "קובה",
    "img": "img/33cac763789c.jpg"
   }
  ]
 },
 {
  "id": "cities",
  "name": "ערים",
  "cover": "img/b5eed9442adc.jpg",
  "items": [
   {
    "name": "תל אביב",
    "img": "img/b5eed9442adc.jpg"
   },
   {
    "name": "ירושלים",
    "img": "img/0a5ed43ab1e2.jpg"
   },
   {
    "name": "חיפה",
    "img": "img/874df54deb45.jpg"
   },
   {
    "name": "אילת",
    "img": "img/cf6993260747.jpg"
   },
   {
    "name": "באר שבע",
    "img": "img/25ba93cae8ce.jpg"
   },
   {
    "name": "טבריה",
    "img": "img/dae482be3335.jpg"
   },
   {
    "name": "נתניה",
    "img": "img/e6fd2bfe2eca.jpg"
   },
   {
    "name": "עכו",
    "img": "img/f65b1264a8bd.jpg"
   },
   {
    "name": "ניו יורק",
    "img": "img/d97e023dce2b.jpg"
   },
   {
    "name": "פריז",
    "img": "img/e20d37a5d7fc.jpg"
   },
   {
    "name": "לונדון",
    "img": "img/59ead8d1e124.jpg"
   },
   {
    "name": "רומא",
    "img": "img/1f49f770adc6.jpg"
   },
   {
    "name": "ברצלונה",
    "img": "img/550d05ab240e.jpg"
   },
   {
    "name": "אמסטרדם",
    "img": "img/3eb8670d999a.jpg"
   },
   {
    "name": "ברלין",
    "img": "img/ee1611b61f56.jpg"
   },
   {
    "name": "טוקיו",
    "img": "img/62413a57c5e3.jpg"
   },
   {
    "name": "דובאי",
    "img": "img/23b998b19b5f.jpg"
   },
   {
    "name": "לאס וגאס",
    "img": "img/05c27bf00932.jpg"
   },
   {
    "name": "לוס אנג'לס",
    "img": "img/d0aa2dffa0da.jpg"
   },
   {
    "name": "ריו דה ז'ניירו",
    "img": "img/5cfd5837c67e.jpg"
   },
   {
    "name": "סידני",
    "img": "img/1fc91e869628.jpg"
   },
   {
    "name": "איסטנבול",
    "img": "img/0ef8f876d62a.jpg"
   },
   {
    "name": "פראג",
    "img": "img/a71105026dfe.jpg"
   },
   {
    "name": "אתונה",
    "img": "img/e14045c6b4fe.jpg"
   },
   {
    "name": "בנגקוק",
    "img": "img/3d147c6ba113.jpg"
   },
   {
    "name": "מוסקבה",
    "img": "img/7e35e74e6101.jpg"
   },
   {
    "name": "קהיר",
    "img": "img/b181c43993de.jpg"
   },
   {
    "name": "סינגפור",
    "img": "img/b26680900ed9.jpg"
   },
   {
    "name": "הונג קונג",
    "img": "img/1eaed874deef.jpg"
   },
   {
    "name": "מיאמי",
    "img": "img/0f5de708d2f6.jpg"
   },
   {
    "name": "סן פרנסיסקו",
    "img": "img/f4334fdfa1c7.jpg"
   },
   {
    "name": "בודפשט",
    "img": "img/9fed5dae86e3.jpg"
   },
   {
    "name": "וינה",
    "img": "img/601f9226a92f.jpg"
   },
   {
    "name": "פטאיה",
    "img": "img/0fd360636058.jpg",
    "nsfw": 1
   },
   {
    "name": "רובע החלונות האדומים",
    "img": "img/11ac902b9a8f.jpg",
    "nsfw": 1
   }
  ]
 },
 {
  "id": "food",
  "name": "אוכל",
  "cover": "img/c6586b2e09d0.jpg",
  "items": [
   {
    "name": "פיצה",
    "img": "img/c6586b2e09d0.jpg"
   },
   {
    "name": "סושי",
    "img": "img/c121700b935c.jpg"
   },
   {
    "name": "פלאפל",
    "img": "img/635b06ecddf5.jpg"
   },
   {
    "name": "חומוס",
    "img": "img/3694b2a41f9d.jpg"
   },
   {
    "name": "שקשוקה",
    "img": "img/4adb9f3f499c.jpg"
   },
   {
    "name": "שווארמה",
    "img": "img/dd8c19f9697b.jpg"
   },
   {
    "name": "שניצל",
    "img": "img/def9e43f48df.jpg"
   },
   {
    "name": "המבורגר",
    "img": "img/7aa99f13e44d.jpg"
   },
   {
    "name": "נקניקייה בלחמנייה",
    "img": "img/82c3c8bf21c7.jpg"
   },
   {
    "name": "צ'יפס",
    "img": "img/ba57b5d80181.jpg"
   },
   {
    "name": "ספגטי",
    "img": "img/1c1ad4ae57a5.jpg"
   },
   {
    "name": "לזניה",
    "img": "img/1cbe9b380d60.jpg"
   },
   {
    "name": "גלידה",
    "img": "img/22322b2b47da.jpg"
   },
   {
    "name": "שוקולד",
    "img": "img/6ea408ea56e8.jpg"
   },
   {
    "name": "קרואסון",
    "img": "img/590898ae2c40.jpg"
   },
   {
    "name": "בייגל",
    "img": "img/86c3d0a15044.jpg"
   },
   {
    "name": "טאקו",
    "img": "img/d182e12e0df4.jpg"
   },
   {
    "name": "פנקייק",
    "img": "img/694840c5bca8.jpg"
   },
   {
    "name": "וופל",
    "img": "img/c93ee64b7af6.jpg"
   },
   {
    "name": "סופגנייה",
    "img": "img/3c64878328f2.jpg"
   },
   {
    "name": "ג'חנון",
    "img": "img/cc7f36e5d247.jpg"
   },
   {
    "name": "מלאווח",
    "img": "img/48c04a317ed7.jpg"
   },
   {
    "name": "בורקס",
    "img": "img/cde6eb02c691.jpg"
   },
   {
    "name": "סביח",
    "img": "img/d0bf4f1b061d.jpg"
   },
   {
    "name": "חמין",
    "img": "img/a2a60499102c.jpg"
   },
   {
    "name": "קוסקוס",
    "img": "img/6f830e38046a.jpg"
   },
   {
    "name": "פתיתים",
    "img": "img/e4fc02a42e61.jpg"
   },
   {
    "name": "פיתה",
    "img": "img/98dfce4c7e8c.jpg"
   },
   {
    "name": "חלה",
    "img": "img/6a4f27054d41.jpg"
   },
   {
    "name": "גפילטע פיש",
    "img": "img/e1a666ca0b34.jpg"
   },
   {
    "name": "במבה",
    "img": "img/da547d031d48.jpg"
   },
   {
    "name": "טחינה",
    "img": "img/a701410c35e8.jpg"
   },
   {
    "name": "מקלובה",
    "img": "img/4afe8d7b63a1.jpg"
   },
   {
    "name": "קבב",
    "img": "img/4f8ccd0f117b.jpg"
   },
   {
    "name": "סטייק",
    "img": "img/e6a0ec03e243.jpg"
   },
   {
    "name": "סלט ישראלי",
    "img": "img/51036219bb1f.jpg"
   },
   {
    "name": "חביתה",
    "img": "img/18d5d6508670.jpg"
   },
   {
    "name": "עוגת גבינה",
    "img": "img/29bf11773189.jpg"
   },
   {
    "name": "פופקורן",
    "img": "img/cf4ff726403b.jpg"
   },
   {
    "name": "אבטיח",
    "img": "img/9aa80c57478c.jpg"
   },
   {
    "name": "בננה",
    "img": "img/e6f9c347672d.jpg"
   },
   {
    "name": "אבוקדו",
    "img": "img/42ae2d145ddd.jpg"
   },
   {
    "name": "רימון",
    "img": "img/50c5e70d567c.jpg"
   },
   {
    "name": "סקס און דה ביץ'",
    "img": "img/ce67cb03e6a2.jpg",
    "nsfw": 1
   },
   {
    "name": "אימוג'י החציל",
    "img": "img/0a4fdaf25fb2.jpg",
    "nsfw": 1
   },
   {
    "name": "אימוג'י האפרסק",
    "img": "img/24890b42c10b.jpg",
    "nsfw": 1
   },
   {
    "name": "עוגת חשיש",
    "img": "img/dd13d86053dd.jpg",
    "nsfw": 1
   }
  ]
 },
 {
  "id": "animals",
  "name": "חיות",
  "cover": "img/c935d187f0b9.jpg",
  "items": [
   {
    "name": "כלב",
    "img": "img/c935d187f0b9.jpg"
   },
   {
    "name": "חתול",
    "img": "img/fa3ebd6742c3.jpg"
   },
   {
    "name": "פיל",
    "img": "img/f6cf83978d6a.jpg"
   },
   {
    "name": "אריה",
    "img": "img/60d28e7d879c.jpg"
   },
   {
    "name": "ג'ירפה",
    "img": "img/427debb81d26.jpg"
   },
   {
    "name": "זברה",
    "img": "img/6d122ee3449a.jpg"
   },
   {
    "name": "פינגווין",
    "img": "img/99625fa1cac2.jpg"
   },
   {
    "name": "שימפנזה",
    "img": "img/c10acfaaa5d2.jpg"
   },
   {
    "name": "קנגורו",
    "img": "img/9b4e21b488ea.jpg"
   },
   {
    "name": "קואלה",
    "img": "img/c4cf192ff255.jpg"
   },
   {
    "name": "פנדה",
    "img": "img/57fd23cb5160.jpg"
   },
   {
    "name": "נמר",
    "img": "img/454c98431106.jpg"
   },
   {
    "name": "דוב",
    "img": "img/d72d3e3e6484.jpg"
   },
   {
    "name": "זאב",
    "img": "img/279ede0c6bdb.jpg"
   },
   {
    "name": "שועל",
    "img": "img/43521aecac4a.jpg"
   },
   {
    "name": "סוס",
    "img": "img/38069b4eb64e.jpg"
   },
   {
    "name": "פרה",
    "img": "img/605bc4657062.jpg"
   },
   {
    "name": "חזיר",
    "img": "img/32e9edc16056.jpg"
   },
   {
    "name": "כבשה",
    "img": "img/572b2541c97a.jpg"
   },
   {
    "name": "עז",
    "img": "img/8515a38ff3b0.jpg"
   },
   {
    "name": "תרנגולת",
    "img": "img/a9514f8884af.jpg"
   },
   {
    "name": "ברווז",
    "img": "img/f97ca8decb3a.jpg"
   },
   {
    "name": "ינשוף",
    "img": "img/fee26bbdfe5e.jpg"
   },
   {
    "name": "נשר",
    "img": "img/4ea0e97657b7.jpg"
   },
   {
    "name": "תוכי",
    "img": "img/e7cb1e977e89.jpg"
   },
   {
    "name": "פלמינגו",
    "img": "img/1c55b68e7477.jpg"
   },
   {
    "name": "טווס",
    "img": "img/42644ebe63f5.jpg"
   },
   {
    "name": "יען",
    "img": "img/9826b47210da.jpg"
   },
   {
    "name": "דולפין",
    "img": "img/76f7843c2bc5.jpg"
   },
   {
    "name": "כריש",
    "img": "img/c66950bbf012.jpg"
   },
   {
    "name": "לווייתן",
    "img": "img/0bd279e8daa7.jpg"
   },
   {
    "name": "תמנון",
    "img": "img/f4f71aeb5fd3.jpg"
   },
   {
    "name": "מדוזה",
    "img": "img/28f4e638fbca.jpg"
   },
   {
    "name": "תנין",
    "img": "img/08593f646267.jpg"
   },
   {
    "name": "נחש",
    "img": "img/dfa90f1b4eb3.jpg"
   },
   {
    "name": "צב",
    "img": "img/06deba5908b0.jpg"
   },
   {
    "name": "צפרדע",
    "img": "img/239243b6cfca.jpg"
   },
   {
    "name": "פרפר",
    "img": "img/29ecfc45c7bd.jpg"
   },
   {
    "name": "דבורה",
    "img": "img/8d717877c89e.jpg"
   },
   {
    "name": "נמלה",
    "img": "img/938db156ad9b.jpg"
   },
   {
    "name": "עכביש",
    "img": "img/b4d68660c4a5.jpg"
   },
   {
    "name": "חילזון",
    "img": "img/5f8f34759907.jpg"
   },
   {
    "name": "גמל",
    "img": "img/9dd994f1e8e2.jpg"
   },
   {
    "name": "היפופוטם",
    "img": "img/aa4f333e8a7c.jpg"
   },
   {
    "name": "קרנף",
    "img": "img/fb33ea7d8625.jpg"
   },
   {
    "name": "סנאי",
    "img": "img/44314e1e6a7d.jpg"
   },
   {
    "name": "ארנב",
    "img": "img/34dd4150fa86.jpg"
   },
   {
    "name": "קיפוד",
    "img": "img/25a4e5501861.jpg"
   },
   {
    "name": "עטלף",
    "img": "img/2d5b3d62e7bd.jpg"
   },
   {
    "name": "בונובו",
    "img": "img/c08167b71988.jpg",
    "nsfw": 1
   }
  ]
 },
 {
  "id": "objects",
  "name": "חפצים",
  "cover": "img/853ca16bda4f.jpg",
  "items": [
   {
    "name": "טלפון חכם",
    "img": "img/853ca16bda4f.jpg"
   },
   {
    "name": "מטרייה",
    "img": "img/91e0703aceed.jpg"
   },
   {
    "name": "משקפיים",
    "img": "img/0f461e64d283.jpg"
   },
   {
    "name": "שעון מעורר",
    "img": "img/544cafe42620.jpg"
   },
   {
    "name": "כיסא",
    "img": "img/a60db0f0d5ae.jpg"
   },
   {
    "name": "נורה",
    "img": "img/73de2c0f6830.jpg"
   },
   {
    "name": "מפתח",
    "img": "img/4e2b41f0ba50.jpg"
   },
   {
    "name": "מספריים",
    "img": "img/28204140cee6.jpg"
   },
   {
    "name": "מברשת שיניים",
    "img": "img/b10b6174b818.jpg"
   },
   {
    "name": "מראה",
    "img": "img/2403def5083f.jpg"
   },
   {
    "name": "כרית",
    "img": "img/d9c182949229.jpg"
   },
   {
    "name": "מזוודה",
    "img": "img/2bce40105b3e.jpg"
   },
   {
    "name": "ארנק",
    "img": "img/156e132b0143.jpg"
   },
   {
    "name": "עט",
    "img": "img/ebc8a012ce64.jpg"
   },
   {
    "name": "מחשב נייד",
    "img": "img/146bdebb324a.jpg"
   },
   {
    "name": "שלט רחוק",
    "img": "img/be41de8c24f3.jpg"
   },
   {
    "name": "אוזניות",
    "img": "img/dcbedde0ce40.jpg"
   },
   {
    "name": "מצלמה",
    "img": "img/967d35e40f3f.jpg"
   },
   {
    "name": "פטיש",
    "img": "img/e16aadf94681.jpg"
   },
   {
    "name": "מברג",
    "img": "img/deb0087ee4e1.jpg"
   },
   {
    "name": "מקרר",
    "img": "img/9ed5270571c7.jpg"
   },
   {
    "name": "מכונת כביסה",
    "img": "img/74cd99038b8b.jpg"
   },
   {
    "name": "מיקרוגל",
    "img": "img/beeb61d4c50e.jpg"
   },
   {
    "name": "מייבש שיער",
    "img": "img/ede250950506.jpg"
   },
   {
    "name": "ספל",
    "img": "img/085ebaaa8534.jpg"
   },
   {
    "name": "נר",
    "img": "img/e966b2e6caa2.jpg"
   },
   {
    "name": "מטאטא",
    "img": "img/86f98fc116d6.jpg"
   },
   {
    "name": "מאוורר",
    "img": "img/0dfb2beaedd7.jpg"
   },
   {
    "name": "קומקום",
    "img": "img/0753308a01e4.jpg"
   },
   {
    "name": "בלון",
    "img": "img/fb84503bdc0b.jpg"
   },
   {
    "name": "כובע",
    "img": "img/a10d7a62aaff.jpg"
   },
   {
    "name": "נעל",
    "img": "img/73f7830328e2.jpg"
   },
   {
    "name": "גרב",
    "img": "img/19d64924b5f5.jpg"
   },
   {
    "name": "קובייה הונגרית",
    "img": "img/dc1a3ac5e14c.jpg"
   },
   {
    "name": "מזלג",
    "img": "img/36c81967df34.jpg"
   },
   {
    "name": "סכין",
    "img": "img/d39d7a2bb6d4.jpg"
   },
   {
    "name": "מטבע",
    "img": "img/ff45bd9a024c.jpg"
   },
   {
    "name": "מטף",
    "img": "img/1658a4b9260c.jpg"
   },
   {
    "name": "דילדו",
    "img": "img/d3a3abb4af37.jpg",
    "nsfw": 1
   },
   {
    "name": "ויברטור",
    "img": "img/1dcc06868dd6.jpg",
    "nsfw": 1
   },
   {
    "name": "ויברטור ארנב",
    "img": "img/30697b969c1f.jpg",
    "nsfw": 1
   },
   {
    "name": "קונדום",
    "img": "img/17b76d5d957c.jpg",
    "nsfw": 1
   },
   {
    "name": "אזיקים",
    "img": "img/d2477c7895ec.jpg",
    "nsfw": 1
   },
   {
    "name": "הלבשה תחתונה סקסית",
    "img": "img/6a224f47c34a.jpg",
    "nsfw": 1
   },
   {
    "name": "חוטיני",
    "img": "img/8df1f1578b6a.jpg",
    "nsfw": 1
   },
   {
    "name": "שוט",
    "img": "img/c8339988c78a.jpg",
    "nsfw": 1
   },
   {
    "name": "ג'ל סיכה",
    "img": "img/a5efdf3f56b2.jpg",
    "nsfw": 1
   },
   {
    "name": "פלאג אנאלי",
    "img": "img/e0612e8da95b.jpg",
    "nsfw": 1
   },
   {
    "name": "פלשלייט",
    "img": "img/7e10ffcb4e2f.jpg",
    "nsfw": 1
   },
   {
    "name": "בובת מין",
    "img": "img/5d905751f4b3.jpg",
    "nsfw": 1
   },
   {
    "name": "בדיקת היריון",
    "img": "img/a661dec535cb.jpg",
    "nsfw": 1
   },
   {
    "name": "מגיק וונד",
    "img": "img/f3345086cc2b.jpg",
    "nsfw": 1
   },
   {
    "name": "משאבת פין",
    "img": "img/a6828f4f153d.jpg",
    "nsfw": 1
   },
   {
    "name": "חגורת צניעות",
    "img": "img/c1ba9953ef25.jpg",
    "nsfw": 1
   },
   {
    "name": "טמפון",
    "img": "img/ecbb66d42188.jpg",
    "nsfw": 1
   }
  ]
 },
 {
  "id": "jobs",
  "name": "מקצועות",
  "cover": "img/b74ad4852301.jpg",
  "items": [
   {
    "name": "כבאי",
    "img": "img/b74ad4852301.jpg"
   },
   {
    "name": "שוטר",
    "img": "img/fbb59c3d4a8e.jpg"
   },
   {
    "name": "רופא",
    "img": "img/f79b5dc3e6e1.jpg"
   },
   {
    "name": "אחות",
    "img": "img/51202d248e4f.jpg"
   },
   {
    "name": "מנתח",
    "img": "img/15e955030b28.jpg"
   },
   {
    "name": "שף",
    "img": "img/8fd82b8864d7.jpg"
   },
   {
    "name": "טייס",
    "img": "img/246cafc49600.jpg"
   },
   {
    "name": "מורה",
    "img": "img/8ab7bbdf01a2.jpg"
   },
   {
    "name": "אסטרונאוט",
    "img": "img/46636203ccc3.jpg"
   },
   {
    "name": "חקלאי",
    "img": "img/8bf7aa45eea8.jpg"
   },
   {
    "name": "רופא שיניים",
    "img": "img/d54c96649589.jpg"
   },
   {
    "name": "ספר",
    "img": "img/99b4baa88ec1.jpg"
   },
   {
    "name": "אינסטלטור",
    "img": "img/78f132269093.jpg"
   },
   {
    "name": "חשמלאי",
    "img": "img/bc9655249274.jpg"
   },
   {
    "name": "נגר",
    "img": "img/6a7ac0ba6162.jpg"
   },
   {
    "name": "מציל",
    "img": "img/bcb9069a4dfa.jpg"
   },
   {
    "name": "חייל",
    "img": "img/de75f2eb4393.jpg"
   },
   {
    "name": "שופט",
    "img": "img/935ff3fccfa3.jpg"
   },
   {
    "name": "עורך דין",
    "img": "img/578b7eac4dfb.jpg"
   },
   {
    "name": "צלם",
    "img": "img/a0cceed7cae2.jpg"
   },
   {
    "name": "דוור",
    "img": "img/32042e2added.jpg"
   },
   {
    "name": "מלצר",
    "img": "img/306e95795691.jpg"
   },
   {
    "name": "אופה",
    "img": "img/f30b7f25f10a.jpg"
   },
   {
    "name": "קצב",
    "img": "img/83882de81950.jpg"
   },
   {
    "name": "וטרינר",
    "img": "img/9aa5f76c7036.jpg"
   },
   {
    "name": "דייג",
    "img": "img/3434282fe3ea.jpg"
   },
   {
    "name": "פועל בניין",
    "img": "img/93e3edcc7c1b.jpg"
   },
   {
    "name": "מתכנת",
    "img": "img/987c70ecbcd6.jpg"
   },
   {
    "name": "מדען",
    "img": "img/9a15881cc8ac.jpg"
   },
   {
    "name": "ליצן",
    "img": "img/2e3b398e2fad.jpg"
   },
   {
    "name": "קוסם",
    "img": "img/5f9435d83d93.jpg"
   },
   {
    "name": "נהג מונית",
    "img": "img/4d5b1fee2ba7.jpg"
   },
   {
    "name": "תקליטן (די ג'יי)",
    "img": "img/a01934b21a56.jpg"
   },
   {
    "name": "מכונאי",
    "img": "img/64eb669723ca.jpg"
   },
   {
    "name": "אדריכל",
    "img": "img/4bb5da084da7.jpg"
   },
   {
    "name": "רוקח",
    "img": "img/7f85ffeaa605.jpg"
   },
   {
    "name": "מאבטח",
    "img": "img/e19e824947bc.jpg"
   },
   {
    "name": "דייל",
    "img": "img/25a14ca01ce7.jpg"
   },
   {
    "name": "קופאי",
    "img": "img/e7f85ad20539.jpg"
   },
   {
    "name": "גנן",
    "img": "img/a5e635fa28d2.jpg"
   },
   {
    "name": "חשפנית",
    "img": "img/d18a84abc6ed.jpg",
    "nsfw": 1
   },
   {
    "name": "שחקן פורנו",
    "img": "img/fa6d9263fecf.jpg",
    "nsfw": 1
   },
   {
    "name": "שולטת (דומינטריקס)",
    "img": "img/36e86cafb4ff.jpg",
    "nsfw": 1
   },
   {
    "name": "רקדנית עמוד",
    "img": "img/518bec4d5146.jpg",
    "nsfw": 1
   },
   {
    "name": "פרוקטולוג",
    "img": "img/e3e344d5bd8f.jpg",
    "nsfw": 1
   },
   {
    "name": "גינקולוג",
    "img": "img/ac7d17cd5ba8.jpg",
    "nsfw": 1
   },
   {
    "name": "אורולוג",
    "img": "img/c14b71055429.jpg",
    "nsfw": 1
   },
   {
    "name": "תורם זרע",
    "img": "img/d503758f0e02.jpg",
    "nsfw": 1
   },
   {
    "name": "מוהל",
    "img": "img/f6e30d186609.jpg",
    "nsfw": 1
   },
   {
    "name": "מוכר בחנות סקס",
    "img": "img/e594659ef2ec.jpg",
    "nsfw": 1
   }
  ]
 },
 {
  "id": "events",
  "name": "אירועים היסטוריים",
  "cover": "img/a08a70bf31cd.jpg",
  "items": [
   {
    "name": "פיגועי 11 בספטמבר",
    "img": "img/a08a70bf31cd.jpg"
   },
   {
    "name": "הנחיתה על הירח",
    "img": "img/7f935440a50f.jpg"
   },
   {
    "name": "נפילת חומת ברלין",
    "img": "img/366a95e13dc8.jpg"
   },
   {
    "name": "טביעת הטיטאניק",
    "img": "img/c54e6f7dd4da.jpg"
   },
   {
    "name": "אסון צ'רנוביל",
    "img": "img/1c3f20328c3b.jpg"
   },
   {
    "name": "מגפת הקורונה",
    "img": "img/370c8f5be2a9.jpg"
   },
   {
    "name": "מלחמת ששת הימים",
    "img": "img/5c3308eed594.jpg"
   },
   {
    "name": "מלחמת יום כיפור",
    "img": "img/b36b13bde2b7.jpg"
   },
   {
    "name": "מבצע אנטבה",
    "img": "img/3fca74efc2bc.jpg"
   },
   {
    "name": "רצח רבין",
    "img": "img/a11c7601885f.jpg"
   },
   {
    "name": "רצח קנדי",
    "img": "img/ea9720731888.jpg"
   },
   {
    "name": "פצצת האטום על הירושימה",
    "img": "img/21d2957a2e6e.jpg"
   },
   {
    "name": "הכרזת העצמאות",
    "img": "img/e22558de02ea.jpg"
   },
   {
    "name": "הצונאמי באוקיינוס ההודי",
    "img": "img/b5e7ac1ad024.jpg"
   },
   {
    "name": "המהפכה הצרפתית",
    "img": "img/27ab5e58f78f.jpg"
   },
   {
    "name": "פסטיבל וודסטוק",
    "img": "img/ce2d51a2fe5e.jpg"
   },
   {
    "name": "גילוי אמריקה",
    "img": "img/4c2ec84dd537.jpg"
   },
   {
    "name": "מלחמת העולם הראשונה",
    "img": "img/f326581f3a34.jpg"
   },
   {
    "name": "מלחמת העולם השנייה",
    "img": "img/fbb78bbe6849.jpg"
   },
   {
    "name": "ההתקפה על פרל הארבור",
    "img": "img/670da6201b16.jpg"
   },
   {
    "name": "הפלישה לנורמנדי",
    "img": "img/1c39a0ee564b.jpg"
   },
   {
    "name": "אסון פוקושימה",
    "img": "img/a3ba1861651e.jpg"
   },
   {
    "name": "הוריקן קתרינה",
    "img": "img/f7320e619d6e.jpg"
   },
   {
    "name": "הטיסה הראשונה של האחים רייט",
    "img": "img/c5d9a0b20a90.jpg"
   },
   {
    "name": "האדם הראשון בחלל (גגארין)",
    "img": "img/f57a1856eb15.jpg"
   },
   {
    "name": "אסון מעבורת החלל קולומביה",
    "img": "img/cf3509248b0f.jpg"
   },
   {
    "name": "הסכם השלום עם מצרים",
    "img": "img/89d85b59b929.jpg"
   },
   {
    "name": "הסכמי אוסלו",
    "img": "img/f7ae32ab00a9.jpg"
   },
   {
    "name": "מבצע שלמה",
    "img": "img/6c7cb6c7acf7.jpg"
   },
   {
    "name": "מלחמת המפרץ",
    "img": "img/920c18ada2f2.jpg"
   },
   {
    "name": "השקת האייפון הראשון",
    "img": "img/180ccbbac0b4.jpg"
   },
   {
    "name": "החתונה של הנסיך ויליאם וקייט",
    "img": "img/c0aceee338be.jpg"
   },
   {
    "name": "מותה של הנסיכה דיאנה",
    "img": "img/f67264aa11f6.jpg"
   },
   {
    "name": "השריפה בנוטרדאם",
    "img": "img/352255af8977.jpg"
   },
   {
    "name": "התפרצות הר וזוב בפומפיי",
    "img": "img/06b297e41397.jpg"
   },
   {
    "name": "פרשת קלינטון-לוינסקי",
    "img": "img/42fcfb3bcd00.jpg",
    "nsfw": 1
   },
   {
    "name": "פרשת סטורמי דניאלס וטראמפ",
    "img": "img/76407b4ed16e.jpg",
    "nsfw": 1
   },
   {
    "name": "תיקי אפשטיין",
    "img": "img/1c95a9797424.jpg",
    "nsfw": 1
   },
   {
    "name": "המהפכה המינית",
    "img": "img/2af19e2da318.jpg",
    "nsfw": 1
   }
  ]
 }
];
