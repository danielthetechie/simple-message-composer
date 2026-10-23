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

            <div class="reply-mode">
                <textarea spellcheck="false"></textarea>
                <textarea id="message-body" autofocus spellcheck="false"></textarea>
            </div>

            <div class="under-message-body-items display-flex justify-content-space-between">
                <div class="last-saved-notice"></div>
                <div class="message-actions">
                    <button id="copy-text-btn" class="btn">Copy</button>
                    <button id="save-text-btn" class="btn">Save</button>
                </div>
            </div>

            <input id="emoji-search" type="search" placeholder="Search emojis" spellcheck="false" autocomplete="off">
            <div id="available-keys">
                <div class="special-char czech-letter-key">ě</div>
                <div class="special-char czech-letter-key">š</div>
                <div class="special-char czech-letter-key">č</div>
                <div class="special-char czech-letter-key">ř</div>
                <div class="special-char czech-letter-key">ž</div>
                <div class="special-char czech-letter-key">ň</div>
                <div class="special-char czech-letter-key">ů</div>
                <div class="special-char czech-letter-key">ď</div>
                <div class="special-char czech-letter-key">ť</div>

                <div style="width:100%;"></div>

                <div class="special-char emoji-key">😃</div>
                <div class="special-char emoji-key">😄</div>
                <div class="special-char emoji-key">😉</div>
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
				<!--div id="print-output-console" style="display:flex;justify-content:center;align-items:center;cursor:pointer;border:1px solid white;">Print text</div-->
            </div>
        </div>
    </body>
</html>
