// ==========================
// CONFIGURAÇÃO WHATSAPP
// ==========================
const telefone = "5599999999999"; // ALTERAR PARA SEU NÚMERO

// ==========================
// AO CARREGAR A PÁGINA
// ==========================
document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // ABRIR MODAIS
    // ==========================
    const btnLogin = document.getElementById("btnLogin");
    const btnCadastro = document.getElementById("btnCadastro");
    const btnHeroCadastro = document.getElementById("btnHeroCadastro");

    if (btnLogin) {
        btnLogin.addEventListener("click", () => {
            document.getElementById("modalLogin").style.display = "flex";
        });
    }

    if (btnCadastro) {
        btnCadastro.addEventListener("click", () => {
            document.getElementById("modalCadastro").style.display = "flex";
        });
    }

    if (btnHeroCadastro) {
        btnHeroCadastro.addEventListener("click", () => {
            document.getElementById("modalCadastro").style.display = "flex";
        });
    }

    // ==========================
    // FECHAR MODAIS
    // ==========================
    document.querySelectorAll(".fechar").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        document.querySelectorAll(".modal").forEach(modal => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // ==========================
    // CADASTRO → WHATSAPP
    // ==========================
    const formCadastro = document.getElementById("formCadastro");

    if (formCadastro) {
        formCadastro.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const telefoneUser = document.getElementById("telefone").value;
            const area = document.getElementById("area").value;

            const mensagem = `Novo cadastro:%0A%0ANome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefoneUser}%0AÁrea: ${area}`;

            const url = `https://wa.me/${telefone}?text=${mensagem}`;

            window.open(url, "_blank");
        });
    }

    // ==========================
    // ÁREAS JURÍDICAS → CLIQUE
    // ==========================
    document.querySelectorAll(".area-card").forEach(card => {
        card.addEventListener("click", () => {
            document.getElementById("modalSolicitacao").style.display = "flex";
        });
    });

    // ==========================
    // FORM SOLICITAÇÃO → PIX + WHATSAPP
    // ==========================
    const formSolicitacao = document.getElementById("formSolicitacao");

    if (formSolicitacao) {
        formSolicitacao.addEventListener("submit", function (e) {
            e.preventDefault();

            const tipo = document.getElementById("tipoPeca").value;
            const prazo = document.getElementById("prazo").value;
            const descricao = document.getElementById("descricao").value;

            const mensagem = `Solicitação de serviço:%0A%0ATipo: ${tipo}%0APrazo: ${prazo}%0ADescrição: ${descricao}%0A%0AEnviarei o comprovante do Pix em seguida.`;

            const url = `https://wa.me/${telefone}?text=${mensagem}`;

            document.getElementById("areaPix").style.display = "block";

            const btnZap = document.getElementById("btnWhatsappPix");
            if (btnZap) {
                btnZap.onclick = () => window.open(url, "_blank");
            }
        });
    }

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
