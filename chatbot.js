// 요소 가져오기
const chatbotButton = document.getElementById('chatbot-button');
const chatbotOverlay = document.getElementById('chatbot-overlay');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');

// 초기 상태 설정: 오버레이와 창을 숨김
function initializeChatbot() {
    chatbotOverlay.style.display = 'none';
    chatbotWindow.style.display = 'none';
    chatbotOverlay.setAttribute('aria-hidden', 'true');
    chatbotButton.setAttribute('aria-label', '챗봇 열기');
}

// 챗봇 열기 함수
function openChatbot() {
    chatbotOverlay.style.display = 'block';
    chatbotWindow.style.display = 'flex';
    chatbotOverlay.setAttribute('aria-hidden', 'false');
    chatbotButton.setAttribute('aria-label', '챗봇 닫기');
}

// 챗봇 닫기 함수
function closeChatbot() {
    chatbotOverlay.style.display = 'none';
    chatbotWindow.style.display = 'none';
    chatbotOverlay.setAttribute('aria-hidden', 'true');
    chatbotButton.setAttribute('aria-label', '챗봇 열기');
}

// 챗봇 토글 함수
function toggleChatbot() {
    const isOpen = window.getComputedStyle(chatbotOverlay).display !== 'none';
    if (isOpen) {
        closeChatbot();
    } else {
        openChatbot();
    }
}

// 이벤트 리스너 추가
chatbotButton.addEventListener('click', toggleChatbot);
chatbotClose.addEventListener('click', closeChatbot);
chatbotOverlay.addEventListener('click', closeChatbot);

// 키보드 접근성: Enter 또는 Space 키로 챗봇 열기/닫기
chatbotButton.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // 스크롤 방지
        toggleChatbot();
    }
});

chatbotClose.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // 스크롤 방지
        closeChatbot();
    }
});

// ESC 키로 챗봇 닫기
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeChatbot();
    }
});

// 페이지 로드 시 초기화
window.addEventListener('load', initializeChatbot);
