- 실제 화면에 아래내용만 추가하면됨!!
  ```html
    <!-- 챗봇 버튼 -->
    <div id="chatbot-button" title="챗봇 열기" role="button" aria-label="챗봇 열기" tabindex="0"></div>

    <!-- 오버레이 -->
    <div id="chatbot-overlay" aria-hidden="true"></div>

    <!-- 챗봇 창 -->
    <div id="chatbot-window" role="dialog" aria-modal="true" aria-labelledby="chatbot-title">
        <div id="chatbot-close" title="챗봇 닫기" role="button" aria-label="챗봇 닫기" tabindex="0">&times;</div>
        <iframe id="chatbot-iframe" src="https://dr-o.naranja.my/" allow="microphone; camera" title="챗봇"></iframe>
    </div>
   ```
  
- 그리고 아래 css 및 js 임포트!!

  ```<script src="https://naranja.my/js/naranja_chatbot.js"></script>```

  ```<link rel="stylesheet" href="https://naranja.my/css/naranja_chatbot.css">```
