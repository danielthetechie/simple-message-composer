<!DOCTYPE html>

<html>
    <head>
        <title>Simple message composer</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./styles/styles.css">
        <script src="./scripts/main.js" type="module" defer></script>
    </head>

    <body>
        <div id="message-composer-layout">
            <textarea id="message-body" autofocus></textarea>

            <div class="under-message-body-items display-flex justify-content-space-between">
                <div class="last-saved-notice"></div>
                <div class="message-actions">
                    <button id="copy-text-btn" class="btn">Copy</button>
                    <button id="save-text-btn" class="btn">Save</button>
                </div>
            </div>

            <div id="available-keys">
                <div class="special-char czech-letter-key">ě</div>
                <div class="special-char czech-letter-key">š</div>
                <div class="special-char czech-letter-key">č</div>
                <div class="special-char czech-letter-key">ř</div>
                <div class="special-char czech-letter-key">ž</div>
                <div class="special-char czech-letter-key">ň</div>
                <div class="special-char czech-letter-key">ů</div>
                
                <div style="width:100%;"></div>
                
                <div class="special-char emoji-key">😃</div>
                <div class="special-char emoji-key">😄</div>
                <div class="special-char emoji-key">😊</div>
                <div class="special-char emoji-key">☺️</div>
                <div class="special-char emoji-key">😋</div>
                <div class="special-char emoji-key">😇</div>
                <div class="special-char emoji-key">🥰</div>
                <div class="special-char emoji-key">😚</div>
                <div class="special-char emoji-key">😘</div>
                <div class="special-char emoji-key">😆</div>
                <div class="special-char emoji-key">😅</div>
                <div class="special-char emoji-key">😂</div>
                <div class="special-char emoji-key">😁</div>
                <div class="special-char emoji-key">🤓</div>
                <div class="special-char emoji-key">😎</div>
                <div class="special-char emoji-key">😏</div>
                <div class="special-char emoji-key">🤭</div>
                <div class="special-char emoji-key">🙈</div>
                <div class="special-char emoji-key">👀</div>
                <div class="special-char emoji-key">😮</div>
                <div class="special-char emoji-key">🤗</div>
                <div class="special-char emoji-key">🌞</div>
                <div class="special-char emoji-key">🌹</div>
                <div class="special-char emoji-key">🌻</div>
                <div class="special-char emoji-key">🌳</div>
                <div class="special-char emoji-key">🌸</div>
                <div class="special-char emoji-key">🌅</div>
                <div class="special-char emoji-key">🌍</div>
                <div class="special-char emoji-key">❤️</div>
                <div class="special-char emoji-key">🌜</div>
                <div class="special-char emoji-key">🏡</div>
                <div class="special-char emoji-key">🇨🇿</div>
                <div class="special-char emoji-key">🇪🇸</div>
                <div class="special-char emoji-key">🙂</div>
                <div class="special-char emoji-key">😍</div>
                <div class="special-char emoji-key">🙃</div>
                <div class="special-char emoji-key">😐</div>
                <div class="special-char emoji-key">😶</div>
                <div class="special-char emoji-key">😑</div>
                <div class="special-char emoji-key">🤔</div>
                <div class="special-char emoji-key">📖</div>
                <div class="special-char emoji-key">🇵🇱</div>

            </div>
        </div>
    </body>
</html>