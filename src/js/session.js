const sessionId = sessionStorage.getItem('sessionId');

if (!sessionId) {
    window.location.href = "http://localhost:8080/pages/login.html";
}
