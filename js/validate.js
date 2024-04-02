
    const validation = new window.JustValidate('.contacts__form', {
      errorFiledCssClass: 'invalid-input',
      errorLabelCssClass: 'invalid-label'
    });

    validation
    .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 буквы',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Максимум 30 букв',
    },
  ])
    .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Введите телефон',
    },

    {
        rule:'number',
        errorMessage:'Недопустимый формат'

    },

    {
        rule:'minNumber',
        value: 10

    }

    ]);


