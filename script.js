const correctPassword = 'DM#KWAI';
const redirectUrl = 'https://www.agencydmaior.com.br/relatorios';

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = '<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>';
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = '<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Abre a página de relatórios em nova aba
        window.open(redirectUrl, '_blank', 'noopener,noreferrer');
    } else {
        // Senha incorreta - mostrar erro
        errorMessage.classList.add('show');
        passwordInput.style.borderColor = 'rgba(239, 68, 68, 0.8)';
        passwordInput.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.3)';
        
        // Limpar erro após 3 segundos
        setTimeout(() => {
            errorMessage.classList.remove('show');
            passwordInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            passwordInput.style.boxShadow = 'none';
        }, 3000);
        
        // Limpar campo
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function focusPasswordInput() {
    document.getElementById('passwordInput').focus();
}

// Limpar erro quando usuário começar a digitar novamente
document.getElementById('passwordInput').addEventListener('input', function() {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage.classList.contains('show')) {
        errorMessage.classList.remove('show');
        this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        this.style.boxShadow = 'none';
    }
});
