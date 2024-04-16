document.addEventListener("DOMContentLoaded", function() {
    // Credenciais de usuários válidos (apenas para fins de demonstração)
    var usuariosValidos = {
        "luistavano@outlook.com": "luis",
        "mauriciotavano@gmail.com": "mauricio"
    };

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;

        console.log("Email digitado:", email);
        console.log("Senha digitada:", senha);

        // Verifica se o email está na lista de usuários válidos e se a senha corresponde
        if (usuariosValidos[email] && usuariosValidos[email] === senha) {
            
            alert("BEM-VINDO!"); // Se verdadeiro, login bem-sucedido
            console.log("Voce irá ser redirecionado ao portal do cliente")
            window.location.href= "cliente.html";
        } else {
            alert("CPF ou Senha inválidos. Tente novamente."); // Se falso, credenciais inválidas
        }
    });
});











