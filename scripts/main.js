import { 
    addClassToElementsArray,
    removeClassFromElementsArray,
    saveLastMessage,
    getLastMessage,
    isEmoji,
    convertTextToUnicode
} from './utils.js';

import { MessageBodyController } from './controllers/MessageBodyController.js'
import { setupEmojiKeys, filterEmojiKeys } from './emojiKeys.js';

document.addEventListener ('DOMContentLoaded', () => 
{
    const special_chars = document.getElementsByClassName ("special-char");
    const message_body_textarea = document.getElementById ("message-body");
    const available_keys = document.getElementById ("available-keys");
    const emoji_search = document.getElementById ("emoji-search");

    let last_saved_message = getLastMessage ();

    const message_body = new MessageBodyController (message_body_textarea, last_saved_message);

    setupEmojiKeys (available_keys);

    emoji_search.addEventListener ('input', e => 
    {
        filterEmojiKeys (available_keys, emoji_search.value);
    });

    /* Actions for visual keyboard */
    available_keys.addEventListener ('click', e => 
    {
        const key = e.target.closest (".special-char");
        if (key === null) return;

        message_body.insertCharacterInTextareaCaretPosition (key.textContent);
        message_body_textarea.focus ();
    });

    document.addEventListener ('keydown', e => 
    {
        if (e.key == 'CapsLock')
        {
            if (e.getModifierState ("CapsLock")) 
            {
                message_body.setCapsLock (true);
                removeClassFromElementsArray ("is-capitalized", special_chars);
            } else {
                message_body.setCapsLock (false);
                addClassToElementsArray ("is-capitalized", special_chars);
            }
        }
    });

    const copy_btn = document.getElementById ("copy-text-btn");
    copy_btn.addEventListener ('click', e => 
    {
        navigator.clipboard.writeText (message_body.getMessageBodyContent ());
    });

    const save_btn = document.getElementById ("save-text-btn");
    save_btn.addEventListener ('click', e => 
    {
        saveLastMessage (message_body_textarea.value);
        last_saved_notice.innerHTML = "Last saved at " + String (new Date ());
    });

    //Autosave
    const last_saved_notice = document.getElementsByClassName ("last-saved-notice")[0];
    setInterval (() => 
    { 
        saveLastMessage (message_body_textarea.value);
        last_saved_notice.innerHTML = "Last saved at " + String (new Date ());
    }, 60000);

});