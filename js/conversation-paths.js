/* =========================================================
   BLENDING IN™ · INTEGRATED PARALLELS
   Conversation Path Library

   These paths help someone find a place to begin.
   They do NOT lock the conversation into a category.
   ========================================================= */


const conversationPaths = {


    /* =====================================================
       01 — GET SOMETHING OUT
       ===================================================== */

    release: {
        number: "01",

        title: "Get something out",

        subtitle: "I need somewhere to put this.",

        heading: "Let it out.",

        intro: "Start with whatever feels closest.",

        options: [
            "I need to vent",
            "I'm angry",
            "I'm frustrated",
            "I've been holding something in",
            "I need to say something I can't say elsewhere",
            "I keep thinking about the same thing",
            "I just need to get this out of my head",
            "I don't want to label it"
        ]
    },


    /* =====================================================
       02 — TALK ABOUT SOMEONE
       ===================================================== */

    person: {
        number: "02",

        title: "Talk about someone",

        subtitle: "There's someone on my mind.",

        heading: "Someone's on your mind.",

        intro: "Choose what comes closest.",

        options: [
            "Someone I work with",
            "Someone I'm close to",
            "Family",
            "A relationship",
            "A friendship",
            "Someone from my past",
            "Someone I barely know",
            "Someone I can't avoid",
            "It's complicated",
            "I'd rather not label it"
        ]
    },


    /* =====================================================
       03 — TALK ABOUT SOMETHING THAT HAPPENED
       ===================================================== */

    event: {
        number: "03",

        title: "Talk about something that happened",

        subtitle: "Something happened.",

        heading: "Something happened.",

        intro: "Start wherever it makes sense to you.",

        options: [
            "It happened today",
            "It happened recently",
            "It happened a long time ago",
            "It keeps happening",
            "Someone did something",
            "I did something",
            "Something changed",
            "Something ended",
            "Something didn't happen that I expected",
            "I don't know where to start"
        ]
    },


    /* =====================================================
       04 — FIGURE OUT WHY I FEEL OFF
       ===================================================== */

    off: {
        number: "04",

        title: "Figure out why I feel off",

        subtitle: "I can't quite name it.",

        heading: "Something feels off.",

        intro: "Choose what comes closest — or don't.",

        options: [
            "I can't put my finger on it",
            "I'm irritated by everything",
            "I don't feel like myself",
            "Everything feels like too much",
            "I feel disconnected",
            "I can't settle down",
            "Something keeps bothering me",
            "Nothing is particularly wrong, but something feels wrong",
            "I don't know"
        ]
    },


    /* =====================================================
       05 — GET THROUGH TODAY
       ===================================================== */

    today: {
        number: "05",

        title: "Get through today",

        subtitle: "One thing at a time.",

        heading: "Let's get through today.",

        intro: "What's taking up the most space right now?",

        options: [
            "Work",
            "Home",
            "People",
            "Too much to do",
            "Something I'm dreading",
            "Something I have to face",
            "I'm exhausted with today",
            "I need to make it through something",
            "I just need some company for a while",
            "Just stay with me"
        ]
    },


    /* =====================================================
       06 — THINK SOMETHING THROUGH
       ===================================================== */

    think: {
        number: "06",

        title: "Think something through",

        subtitle: "I need to sort this out.",

        heading: "Let's sort through it.",

        intro: "Choose a place to begin.",

        options: [
            "I have a decision to make",
            "I don't know what I want",
            "I'm seeing two sides of something",
            "I need another perspective",
            "I'm wondering if I'm overreacting",
            "I think I may be missing something",
            "I need to separate facts from feelings",
            "I want to understand my part in this",
            "I know what I should do, but I'm struggling with it",
            "Let me explain first"
        ]
    },


    /* =====================================================
       07 — STOP MYSELF FROM DOING/SAYING SOMETHING
       ===================================================== */

    pause: {
        number: "07",

        title: "Stop myself from doing/saying something",

        subtitle: "Let me put it here first.",

        heading: "Put it here first.",

        intro: "You can start with what you want to do or say.",

        options: [
            "I want to send something",
            "I want to say something",
            "I want to confront someone",
            "I want to react",
            "I'm really angry",
            "I'm about to make a decision",
            "I need to put it here instead"
        ]
    },


    /* =====================================================
       08 — I DON'T KNOW — JUST LISTEN

       This path intentionally has no subcategories.
       It moves directly into conversation.
       ===================================================== */

    listen: {
        number: "08",

        title: "I don't know — just listen",

        subtitle: "I'll start wherever I can.",

        heading: "I'm here.",

        intro: "Start wherever you want.",

        directToConversation: true,

        options: []
    }

};


/* =========================================================
   UNIVERSAL ESCAPE OPTION

   This appears underneath every set of subcategories.
   The user never has to choose a label before talking.
   ========================================================= */

const conversationEscape = {
    label: "None of these — let me talk",
    value: "unlabeled"
};


/* =========================================================
   Make the library available to chat.html
   ========================================================= */

window.conversationPaths = conversationPaths;
window.conversationEscape = conversationEscape;
