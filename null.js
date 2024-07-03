(function() {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
    } catch (e) {
        window.location.href = './blocked.1';
    }
})();
