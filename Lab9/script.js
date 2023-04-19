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
        text: "Какой у Вашего персонажа пол?",
        variants: ['Мужчина', "Женщина"]
    },
    Origin: {
        text: "Какое у вашего персонажа происхождение?",
        variants: ["Знатный Человек", "Благородный Маг", "Долийский эльф" , "Городской эльф", "Маг", "Гном простолюдин", "Гном аристократ"]
    },
    MainSkill: {
        text: "Ваш основной навык?",
        variants: ['Влияние', "Вор" , "Изготовление ловушек", "Выживание", "Травник", "Изготовление ядов", "Боевая подготовка", "Тактика боя"]
    },
}

const form = document.createElement('form');

for (const question in questions) {
const table = document.createElement('table');

table.style.width = '100%';

const questionP = document.createElement('p');

questionP.style.fontWeight = 800;
questionP.style.fontStyle = "italic";
questionP.style.fontFamily = "sans-serif";
questionP.style.fontSize = "1.4em";

questionP.innerHTML = questions[question].text;

form.appendChild(questionP);

for (const answer in questions[question].variants) {
        const tr = document.createElement('tr');
        const radio = document.createElement('input');

        radio.type = 'radio';
        radio.name = question;
        radio.value = questions[question].variants[answer];
        radio.id = question + answer;

        const label = document.createElement('label');
        label.textContent = radio.value;

        const tdLabel = document.createElement('td');
        const tdRadio = document.createElement('td');

        tdLabel.appendChild(label);
        tdRadio.appendChild(radio);

        tr.appendChild(tdLabel);
        tr.appendChild(tdRadio);

        tr.lastElementChild.style.textAlign = 'right';

        table.appendChild(tr);
        form.appendChild(table);
        label.setAttribute('for', radio.id);

    }
}

const submit = document.createElement('input');
submit.type = 'submit';
submit.style.display = 'block';
submit.style.margin = '0 auto';
form.appendChild(submit);

form.style.maxWidth = '500px';
form.style.margin = '0 auto';
document.body.appendChild(form);
