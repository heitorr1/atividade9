function validarLogin(event) {
  event.preventDefault(); // impede o envio do formulário

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem-erro");

  if (usuario === "admin" && senha === "admin") {
    mensagem.style.color = "green";
    mensagem.textContent = "Login autorizado. Redirecionando...";
    
    // Redireciona após 1 segundo
    setTimeout(() => {
      window.location.href = "index2.html"; 
    }, 1000);
  } else {
    mensagem.style.color = "red";
    mensagem.textContent = "Acesso negado. Apenas 'admin' é permitido.";
  }
}
