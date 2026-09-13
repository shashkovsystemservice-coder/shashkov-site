export type Level = 0 | 1 | 2;
export type EntityKey = "mission"|"vision"|"ccp"|"icp"|"persona"|"jtbd"|"positioning"|"differentiator"|"uvp"|"cvp"|"offer"|"messaging"|"tagline"|"pitch"|"proof";
export type LinkKey = "ccp_icp"|"icp_jtbd"|"jtbd_positioning"|"positioning_uvp"|"uvp_offer"|"promise_proof";
export type Entity = {key:EntityKey;title:string;question:string;help:string};
export type LinkCheck = {key:LinkKey;title:string;question:string};

export const entities: Entity[] = [
 {key:"mission",title:"Миссия",question:"Понятно, зачем существует бизнес кроме заработка?",help:"Смысл существования и изменение, которое компания хочет создавать."},
 {key:"vision",title:"Видение",question:"Есть понятная картина, кем компания хочет стать?",help:"Временной горизонт + место в рынке или отрасли."},
 {key:"ccp",title:"ЦКП",question:"Сформулирован конечный результат, который получает клиент?",help:"Не процесс и не услуга, а завершённый полезный результат."},
 {key:"icp",title:"ICP",question:"Понятно, какая компания-клиент для вас идеальна?",help:"Размер, отрасль, триггер, бюджет, цикл сделки, признак «наш клиент»."},
 {key:"persona",title:"Персона",question:"Понятно, кто конкретно принимает решение внутри клиента?",help:"Роль, задача, боль, страх, мотив, язык."},
 {key:"jtbd",title:"JTBD",question:"Сформулирована работа, ради которой клиент «нанимает» ваш продукт?",help:"Когда… я хочу… чтобы…"},
 {key:"positioning",title:"Позиционирование",question:"Понятно, какое место вы занимаете в голове клиента?",help:"Для кого вы, в какой категории и чем отличаетесь."},
 {key:"differentiator",title:"Дифференциатор",question:"Есть конкретное отличие, которое можно защитить?",help:"Не общие слова, а реальная особенность способа, результата или ответственности."},
 {key:"uvp",title:"УТП",question:"Есть короткая причина выбрать именно вас?",help:"Конкретная выгода + уникальный способ + отличие от альтернатив."},
 {key:"cvp",title:"CVP",question:"Понятна полная ценность предложения для клиента?",help:"Что помогает сделать, какую боль снимает, какую выгоду создаёт."},
 {key:"offer",title:"Оффер",question:"Есть конкретное предложение, которое можно принять сейчас?",help:"Результат + условия/срок + снижение риска."},
 {key:"messaging",title:"Messaging",question:"Есть единая логика ключевых сообщений?",help:"Как продукт, ценность и отличие переводятся в язык рынка."},
 {key:"tagline",title:"Слоган",question:"Есть короткая фраза, которая соответствует системе?",help:"Она должна вытекать из позиционирования и ценности, а не жить отдельно."},
 {key:"pitch",title:"Elevator Pitch",question:"Можно объяснить за 30 секунд, кому, что и как вы помогаете?",help:"Кому помогаем + какой результат + каким способом."},
 {key:"proof",title:"Proof Points",question:"Ключевые обещания подтверждены цифрами, кейсами или фактами?",help:"Доказательства должны быть привязаны к обещаниям."}
];

export const links: LinkCheck[] = [
 {key:"ccp_icp",title:"ЦКП → ICP",question:"Ваш идеальный клиент действительно нуждается именно в том результате, который вы производите?"},
 {key:"icp_jtbd",title:"ICP → JTBD",question:"JTBD сформулирован для выбранного ICP и конкретной персоны, а не «для всех»?"},
 {key:"jtbd_positioning",title:"JTBD → Позиционирование",question:"Позиционирование отвечает на реальную задачу клиента, а не только описывает компанию?"},
 {key:"positioning_uvp",title:"Позиционирование → УТП",question:"УТП действительно вытекает из вашей позиции и отличия?"},
 {key:"uvp_offer",title:"УТП → Оффер",question:"Оффер делает обещанную ценность конкретной и покупаемой?"},
 {key:"promise_proof",title:"Обещание → Proof",question:"Для ключевых обещаний есть конкретные доказательства?"}
];

export const groups = [
 {kicker:"01 · Смысл",title:"Зачем существуем",keys:["mission","vision"] as EntityKey[]},
 {kicker:"02 · Результат",title:"Что производим",keys:["ccp"] as EntityKey[]},
 {kicker:"03 · Клиент",title:"Для кого и зачем",keys:["icp","persona","jtbd"] as EntityKey[]},
 {kicker:"04 · Выбор",title:"Почему именно мы",keys:["positioning","differentiator","uvp"] as EntityKey[]},
 {kicker:"05 · Предложение",title:"Что предлагаем",keys:["cvp","offer"] as EntityKey[]},
 {kicker:"06 · Коммуникация",title:"Как говорим",keys:["messaging","tagline","pitch"] as EntityKey[]},
 {kicker:"07 · Доказательства",title:"Чем подтверждаем",keys:["proof"] as EntityKey[]}
];

export function levelLabel(level: Level){return level===2?"Есть и зафиксировано":level===1?"Есть, но размыто":"Нет / не уверен";}
