function loginFormSubmit(e) {
  e.preventDefault()

  console.log('e', e.target.innerHTML)
  const formData = new FormData(e.target);

  const data = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
    ...memo,
    [key]: value,
  }), {});
  console.log('data', data)

  fetch('/login', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('data1', data)
      if (data.success) {
        document.getElementsByTagName('form')[0].reset();
        let elemsList = document.querySelectorAll(".invalid-feedback");
        [].forEach.call(elemsList, function (el) {
          el.innerHTML = ''
        });
        window.location.href = '/welcome';
      } else {
        let elems = document.querySelectorAll(".error");

        [].forEach.call(elems, function (el) {
          el.classList.remove("error");
        });
        let errors = data.errors

        for (const property in errors) {
          let child = document.getElementById(property);
          child.parentElement.classList.add('error');
          child.parentElement.querySelector('.invalid-feedback').innerHTML = errors[property]
        }
      }

    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function registerFormSubmit(e) {
  e.preventDefault()

  console.log('e', e.target.innerHTML)
  const formData = new FormData(e.target);

  const data = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
    ...memo,
    [key]: value,
  }), {});
  console.log('data', data)

  fetch('/register', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('data1', data)
      if (data.success) {
        document.getElementsByTagName('form')[0].reset();
        let elemsList = document.querySelectorAll(".invalid-feedback");
        [].forEach.call(elemsList, function (el) {
          el.innerHTML = ''
        });
        window.location.href = '/login';
      } else {
        let elems = document.querySelectorAll(".error");

        [].forEach.call(elems, function (el) {
          el.classList.remove("error");
        });
        let errors = data.errors

        for (const property in errors) {
          let child = document.getElementById(property);
          child.parentElement.classList.add('error');
          child.parentElement.querySelector('.invalid-feedback').innerHTML = errors[property]
        }
      }

    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


function contactFormSubmit(e) {
  e.preventDefault()

  console.log('e', e.target.innerHTML)
  const formData = new FormData(e.target);

  const data = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
    ...memo,
    [key]: value,
  }), {});
  console.log('data', data)

  fetch('/contactus', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('data1', data)
      if (data.success) {
        document.getElementsByTagName('form')[0].reset();
        let elemsList = document.querySelectorAll(".invalid-feedback");
        [].forEach.call(elemsList, function (el) {
          el.innerHTML = ''
        });
        window.location.href = '/thankyou';
      } else {
        let elems = document.querySelectorAll(".error");

        [].forEach.call(elems, function (el) {
          el.classList.remove("error");
        });
        let errors = data.errors

        for (const property in errors) {
          let child = document.getElementById(property);
          child.parentElement.classList.add('error');
          child.parentElement.querySelector('.invalid-feedback').innerHTML = errors[property]
        }
      }

    })
    .catch((error) => {
      console.error('Error:', error);
    });
}