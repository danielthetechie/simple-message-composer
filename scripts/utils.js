/**
 *  Index of functions:
 
    addClassToElementsArray
    removeClassFromElementsArray
    insertCharacterInTextPosition
    saveLastMessage
    getLastMessage
    isEmoji
 */

function addClassToElementsArray (class_name, elements_array)
{
    for (let i = 0; i < elements_array.length; i++)
    {
        elements_array[i].classList.add (class_name);
    }
}

function removeClassFromElementsArray (class_name, elements_array)
{
    for (let i = 0; i < elements_array.length; i++)
    {
        elements_array[i].classList.remove (class_name);
    }
}

function insertCharacterInTextPosition (text, character, position)
{
    let previous_text_portion = text.slice (0, position);
    return previous_text_portion;
}

function saveLastMessage (message_content)
{
    localStorage.setItem ("last-saved-message", message_content);
}

function getLastMessage ()
{
    let last_message = localStorage.getItem ("last-saved-message");
    if (last_message == null) {
        last_message = "";
    }

    return String (last_message);
}

function isEmoji (character)
{
    let is_emoji = false;
    if (character.codePointAt (0).toString (16).length > 3) 
        is_emoji = true;

    return is_emoji;
}

function convertTextToUnicode (text)
{
    let unicode_text = [];
    for (let i = 0; i < text.length; i++)
    {
        //unicode_text += text[i].codePointAt (0).toString (16);
        unicode_text.push (text[i])
    }

    return unicode_text;
}

function getCharTimesInText (char, text)
{
    let char_count = 0;

    for (let i = 0; i < text.length; i++)
    {
        if (text[i] == char) char_count++;
    }

    return char_count;
}

function getNumberOfEmojisInText (text)
{
    let emoji_count = 0;
    let i = 0;

    while (i < text.length)
    {
        if (isEmoji (text[i]))
        {
            emoji_count++;
        }

        i += text[i].length;
    }

    for (let i = 0; i < text.length; i++)
    {
        if (isEmoji (text[i])) emoji_count++;
        i++;
    }

    return emoji_count;
}

export { 
    addClassToElementsArray,
    removeClassFromElementsArray,
    saveLastMessage, 
    getLastMessage,
    isEmoji,
    convertTextToUnicode,
    getCharTimesInText,
    getNumberOfEmojisInText
}