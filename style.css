body {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #4c1d95 50%, #1e1b4b 75%, #000000 100%);
    background-size: 400% 400%;
    animation: gradientShift 8s ease infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    position: relative;
    overflow-x: hidden;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.background-effects {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
}

.glow-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.3;
    animation: float 6s ease-in-out infinite;
}

.glow-orb:nth-child(1) {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, #8b5cf6, transparent);
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.glow-orb:nth-child(2) {
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, #3b82f6, transparent);
    top: 60%;
    right: 15%;
    animation-delay: 2s;
}

.glow-orb:nth-child(3) {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, #6366f1, transparent);
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-20px) scale(1.1); }
}

.top-nav {
    position: absolute;
    top: 20px;
    right: 30px;
    z-index: 100;
}

.nav-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    transform: translateY(-2px);
}

.container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 48px 40px;
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    max-width: 480px;
    width: 90%;
    text-align: center;
    position: relative;
    z-index: 10;
}

.container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
}

.title {
    font-size: 32px;
    font-weight: 700;
    color: white;
    margin-bottom: 16px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    line-height: 1.2;
}

.subtitle {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 32px;
    font-weight: 400;
}

.form-group {
    margin-bottom: 24px;
    position: relative;
}

.password-input {
    width: 100%;
    padding: 16px 60px 16px 20px;
    font-size: 16px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    color: white;
    outline: none;
    transition: all 0.3s ease;
    font-weight: 500;
}

.toggle-password {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
    z-index: 10;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.toggle-password:hover {
    color: rgba(255, 255, 255, 0.9);
    transform: scale(1.1);
}

.eye-icon {
    width: 20px;
    height: 20px;
    fill: currentColor;
}

.password-input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.password-input:focus {
    border-color: rgba(139, 92, 246, 0.8);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
    transform: translateY(-2px);
}

.submit-btn {
    width: 100%;
    padding: 16px 24px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #8b5cf6, #3b82f6);
    border: none;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.submit-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(139, 92, 246, 0.5);
    background: linear-gradient(135deg, #9333ea, #2563eb);
}

.submit-btn:hover::before {
    left: 100%;
}

.submit-btn:active {
    transform: translateY(-1px);
}

.error-message {
    color: #ef4444;
    font-size: 14px;
    margin-top: 12px;
    font-weight: 500;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
}

.error-message.show {
    opacity: 1;
    transform: translateY(0);
}

.contact-info {
    margin-top: 32px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-text {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
    margin-bottom: 16px;
}

.whatsapp-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #25d366, #128c7e);
    color: white;
    text-decoration: none;
    padding: 12px 20px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.whatsapp-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    background: linear-gradient(135deg, #20ba5a, #0f7a6b);
}

.whatsapp-icon {
    width: 18px;
    height: 18px;
    fill: currentColor;
}

@media (max-width: 640px) {
    .container {
        padding: 32px 24px;
        margin: 20px;
    }

    .title {
        font-size: 28px;
    }

    .subtitle {
        font-size: 15px;
    }

    .top-nav {
        top: 15px;
        right: 20px;
    }

    .nav-link {
        font-size: 13px;
        padding: 6px 12px;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 24px;
    }

    .container {
        padding: 28px 20px;
    }
}
