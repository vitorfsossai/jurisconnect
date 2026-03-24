// ==========================
// CONFIGURAÇÃO WHATSAPP
// ==========================
const telefone = "5599999999999"; // ALTERAR PARA SEU NÚMERO

// ==========================
// CADASTRO → WHATSAPP
// ==========================
document.getElementById("formCadastro")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefoneUser = document.getElementById("telefone").value;
    const area = document.getElementById("area").value;

    const mensagem = `Novo cadastro:\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefoneUser}\nÁrea: ${area}`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
});

// ==========================
// ENVIO SOLICITAÇÃO → PIX + WHATSAPP
// ==========================
document.getElementById("formSolicitacao")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const tipo = document.getElementById("tipoPeca").value;
    const prazo = document.getElementById("prazo").value;
    const descricao = document.getElementById("descricao").value;

    const mensagem = `Solicitação de serviço:\n\nTipo: ${tipo}\nPrazo: ${prazo}\nDescrição: ${descricao}\n\nEnviarei o comprovante do Pix em seguida.`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    document.getElementById("areaPix").style.display = "block";

    document.getElementById("btnWhatsappPix").onclick = () => {
        window.open(url, "_blank");
    };
});

// ==========================
// LOGIN SIMPLES (users.json)
// ==========================
async function login() {
    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginSenha").value;

    try {
        const response = await fetch("users.json");
        const users = await response.json();

        const usuario = users.find(u => u.email === email);

        if (!usuario) {
            alert("Não há cadastro para este e-mail.");
            return;
        }

        if (usuario.senha !== senha) {
            alert("Senha incorreta.");
            return;
        }

        // SUCESSO
        window.location.href = "pagina-destino.html";

    } catch (error) {
        alert("Erro ao carregar usuários.");
    }
}