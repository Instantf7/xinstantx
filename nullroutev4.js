document.addEventListener('DOMContentLoaded', (event) => {
    let isBot = true;
    document.addEventListener('mousemove', () => {
        isBot = false;
    });
    document.addEventListener('keydown', () => {
        isBot = false;
    });
    document.addEventListener('touchstart', () => {
        isBot = false;
    });
    setTimeout(() => {
        if (isBot) {
            window.location.href = '/blocked.@';
        }
    }, 5000);
});
