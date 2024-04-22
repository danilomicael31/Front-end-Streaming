async function fazerLogin(userData) {
  try {
    const response = await fetch('URL_RINALDO', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (response.ok) {
      alert('Login bem-sucedido!');
       //ALINHAR COM LEONARDO SE VAI REDIRECIONAR PARA A TELA INICIAL
      window.location.href = '/index';
    } else {
      alert(data.message || 'Erro ao fazer login.');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    alert('Erro ao conectar com a API de login.');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const userData = {
      email: formData.get('email'),
      password: formData.get('password')
    };

    fazerLogin(userData);
  });
});