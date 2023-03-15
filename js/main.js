const Form = document.querySelector(".form-1"),
    FormInp1 = document.querySelector(".new-number__right__input"),
    FormInp2 = document.querySelector(".mail"),
    FormSpan1 = document.querySelector(".form__inp__span1"),
    FormSpan2 = document.querySelector(".form__inp__span2"),
    FormCheck = document.querySelector(".new-number__right__input__radio__input");

Form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (FormInp1.value === '') {
        FormInp1.classList.add('red__error');
        FormSpan1.textContent = 'Пожалуйста введите имя!!!'
    } else {
        FormInp1.classList.add('green__error');
        FormSpan1.textContent = ''
    }
    if (FormInp2.value === '') {
        FormInp2.classList.add('red__error');
        FormSpan2.textContent = 'Пожалуйста введите электронную почту!!!'
    } else {
        FormInp2.classList.add('green__error');
        FormSpan2.textContent = ''
    }
})



// const menu__contact = document.querySelector('.menu__contact');
// const menu__ul = document.querySelector('.menu__ul');
// menu__contact.addEventListener('click', function() {
//     menu__ul.classList.toggle('block__class');
// })

// const freshForm = document.querySelector('.fresh__form'),
//     freshInp1 = document.querySelector('.fresh__inp'),
//     freshInp2 = document.querySelector('.mail__inp'),
//     freshSpan1 = document.querySelector('.fresh__inp__span1'),
//     freshSpan2 = document.querySelector('.fresh__inp__span2'),
//     freshCheck = document.querySelector('.fresh__check')

// freshForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     if (freshInp1.value === '') {
//         freshInp1.classList.add('red__error');
//         freshSpan1.textContent = 'Пожалуйста введите имя!!!'
//     } else {
//         freshInp1.classList.add('green__error');
//         freshSpan1.textContent = ''
//     }
//     if (freshInp2.value === '') {
//         freshInp2.classList.add('red__error');
//         freshSpan2.textContent = 'Пожалуйста введите электронную почту!!!'
//     } else {
//         freshInp2.classList.add('green__error');
//         freshSpan2.textContent = ''
//     }
// })

// erorr-2

const Form2 = document.querySelector('.form-2'),
    input1 = document.querySelector('.form-inp-1'),
    input2 = document.querySelector('.form-inp-2'),
    inputSpan = document.querySelector('.inp__span1'),
    inputSpan2 = document.querySelector('.inp__span2');

Form2.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input1.value === '') {
        input1.classList.add('red__error');
        inputSpan.textContent = 'Пожалуйста введите имя!!!'
    } else {
        input1.classList.add('green__error');
        inputSpan.textContent = ''
    }
    if (input2.value === '') {
        input2.classList.add('red__error');
        inputSpan2.textContent = 'Пожалуйста введите электронную почту!!!'
    } else {
        input2.classList.add('green__error')
        inputSpan2.textContent = ''
    }
})