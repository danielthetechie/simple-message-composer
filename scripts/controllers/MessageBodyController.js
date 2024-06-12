class MessageBodyController
{
    constructor (message_body_textarea, initial_text = "")
    {
        this.message_body_textarea = message_body_textarea;
        this.is_caps_lock_active = false;

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

        const caret_position = this.message_body_textarea.selectionStart;
        let previous_text_portion = this.message_body_textarea.value.slice (0, caret_position);
        let after_text_portion = this.message_body_textarea.value.slice (caret_position, this.message_body_textarea.value.length - 1);

        let resulting_text = previous_text_portion + character + after_text_portion;

        this.message_body_textarea.value = resulting_text;

        /* 
         * Prevent the caret to move to the end of the resulting text once it has been
         * added and keep it in the current position.
         */

        this.message_body_textarea.setSelectionRange (caret_position + 1, caret_position + 1);
        
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