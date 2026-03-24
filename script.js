document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os dados do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const facts = document.getElementById('facts').value;

    // Formata a mensagem para o WhatsApp
    const message = `Olá, meu nome é ${name}. Gostaria de falar sobre o seguinte caso: ${facts}. Meu telefone é ${phone}.`;

    // Codifica a mensagem para uso em URL
    const encodedMessage = encodeURIComponent(message);

    // Número de telefone do escritório (substitua pelo número correto)
    const whatsappNumber = '5569981593723'; // Exemplo: (11) 99999-9999

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
});