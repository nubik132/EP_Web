let questions = {
    race: {
        text: "Какую расу вы выбрали?",
        variants: ['Человек', "Гном" , "Эльф"]
    },
    class: {
        text: "Какую класс вы выбрали?",
        variants: ['Воин', "Маг" , "Разбойник"]
    },
    gender: {
        text: "Какой у Вашего персонада пол?",
        variants: ['Мужчина', "Женщина"]
    },
    Origin: {
        text: "Какое у вашего персонажа происхождение?",
        variants: ["Знатный Человек", "Благородный Маг", "Долийский эльф" , "Городской эльф", "Маг", "Гном простолюдин", "Гном аристократ"]
    },
    MainSkill: {
        text: "Ваш основной навык?",
        variants: ['Человек', "Гном" , "Эльф"]
    },
}

// document.body.append(document.createElement('div'));
let form = document.createElement('form');
document.appendChild(form);
for (let i = 0; i < 5; i++) {
    form.style.margin = '0 auto';
    form.append();    
}
