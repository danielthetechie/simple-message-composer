import { 
    addClassToElementsArray,
    removeClassFromElementsArray,
    saveLastMessage,
    getLastMessage
} from './utils.js';

import { MessageBodyController } from './controllers/MessageBodyController.js'

document.addEventListener ('DOMContentLoaded', () => 
{
    const special_chars = document.getElementsByClassName ("special-char");
    const message_body_textarea = document.getElementById ("message-body");

    let last_saved_message = getLastMessage ();

    const message_body = new MessageBodyController (message_body_textarea, last_saved_message);

    /* Actions for visual keyboard */
    for (let i = 0; i < special_chars.length; i++)
    {
        special_chars[i].addEventListener ('click', e => 
        {
            message_body.insertCharacterInTextareaCaretPosition (special_chars[i].textContent);
            message_body_textarea.focus ();
        });
    }

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
    }, 60000)
});