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

export { 
    addClassToElementsArray,
    removeClassFromElementsArray,
    saveLastMessage, 
    getLastMessage
}