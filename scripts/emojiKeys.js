
import { emojis } from './data/emojis.js';
import { normalizeText } from './utils.js';

function stripVariationSelector (emoji)
{
    return emoji.replace (/\uFE0F/g, '');
}

function createEmojiKey (emoji, search_text)
{
    const key = document.createElement ('div');
    key.className = 'special-char emoji-key';
    key.textContent = emoji;
    key.dataset.search = search_text;

    return key;
}

function setupEmojiKeys (container)
{
    const pending_emojis = new Map (emojis.map (item => [stripVariationSelector (item[0]), item]));

    for (const key of container.getElementsByClassName ('emoji-key'))
    {
        const emoji = stripVariationSelector (key.textContent);
        const item = pending_emojis.get (emoji);

        key.dataset.search = item ? item[1] : '';
        pending_emojis.delete (emoji);
    }

    const fragment = document.createDocumentFragment ();
    for (const [emoji, search_text] of pending_emojis.values ())
    {
        fragment.append (createEmojiKey (emoji, search_text));
    }

    container.append (fragment);
}

function filterEmojiKeys (container, query)
{
    const terms = normalizeText (query).split (/\s+/).filter (Boolean);

    for (const key of container.getElementsByClassName ('emoji-key'))
    {
        const is_match = terms.every (term => key.dataset.search.includes (term));
        key.classList.toggle ('is-filtered-out', !is_match);
    }
}

export { setupEmojiKeys, filterEmojiKeys };