// Aguarda o carregamento completo do HTML antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

    // --- MENU HAMBURGER PARA MOBILE ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Adiciona o evento de clique para abrir/fechar o menu mobile
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // --- FECHA O MENU AO CLICAR EM UM LINK ---
    // Garante que o menu se feche ao navegar para uma seção no mobile
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- EFEITO DE FADE-IN NAS SEÇÕES AO ROLAR ---
    // Usa a Intersection Observer API para uma animação de entrada eficiente
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Quando a seção entra na tela, a classe 'visible' é adicionada
            if (entry.isIntersecting) {
                // A animação 'fadeIn' no CSS é ativada por esta classe
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // A animação dispara quando 10% da seção está visível
    });

    // Pede ao observador para monitorar cada seção
    sections.forEach(section => {
        observer.observe(section);
    });

    // --- BOTÃO "VOLTAR AO TOPO" ---
    const backToTopButton = document.getElementById('back-to-top');

    // Mostra ou esconde o botão dependendo da posição da rolagem
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    });

    // --- VALIDAÇÃO SIMPLES DO FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        // Impede o comportamento padrão de recarregar a página
        e.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Verifica se os campos não estão vazios
        if (name === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Simula uma mensagem de sucesso
        alert('Mensagem enviada com sucesso! (Esta é uma simulação)');
        contactForm.reset(); // Limpa o formulário após o "envio"
    });

});```