import { getCharTimesInText, getNumberOfEmojisInText, isEmoji } from '../utils.js';

class MessageBodyController
{
    constructor (message_body_textarea, initial_text = "")
    {
        this.message_body_textarea = message_body_textarea;
        this.is_caps_lock_active = false;
        this.debug_data = null;

        this.message_body_textarea.value = initial_text;
    }

    setCapsLock (bool_value)
    {
        this.is_caps_lock_active = !bool_value;
    }

    insertCharacterInTextareaCaretPosition (character)
    {
        if (this.is_caps_lock_active)
        {
            character = character.charAt (0).toUpperCase ();
        }

        //if (isEmoji (character)) character = '[emoji]' + character + '[emoji]';

        let caret_position = this.message_body_textarea.selectionStart;
        let previous_text_portion = this.message_body_textarea.value.slice (0, caret_position);

        let offset = getNumberOfEmojisInText (previous_text_portion);
        caret_position += offset;
        previous_text_portion = this.message_body_textarea.value.slice (0, caret_position);

        let after_text_portion = this.message_body_textarea.value.slice (caret_position, this.message_body_textarea.value.length);

        let resulting_text = previous_text_portion + character + after_text_portion;
        //resulting_text = resulting_text.replaceAll ("[emoji]", "");

        this.message_body_textarea.value = resulting_text;

        /* 
         * Prevent the caret to move to the end of the resulting text once it has been
         * added and keep it in the current position.
         */

        this.message_body_textarea.setSelectionRange (caret_position + 1, caret_position + 1);
        
        this.debug_data = {
            offset: offset,
            caret_position: caret_position,
            previous_text_portion: previous_text_portion,
            after_text_portion: after_text_portion
        }
    }

    appendCharacterToTextarea (character)
    {
        if (this.is_caps_lock_active)
        {
            character = character.charAt (0).toUpperCase ();
        }

        this.message_body_textarea.value += character;
    }
}

export { MessageBodyController };