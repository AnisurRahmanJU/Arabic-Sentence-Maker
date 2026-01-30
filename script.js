/* Arabic Sentence Builder Engine
   Developer: Md. Anisur Rahman
   Version: 2026 Advanced Logic
*/

const verbs = [
    { id: "read", en: "read", enPast: "read", arPast: "قَرَأَ", arPres: "يَقْرَأُ", arOrd: "اِقْرَأْ" },
    { id: "eat", en: "eat", enPast: "ate", arPast: "أَكَلَ", arPres: "يَأْكُلُ", arOrd: "كُلْ" },
    { id: "drink", en: "drink", enPast: "drank", arPast: "شَرِبَ", arPres: "يَشْرَبُ", arOrd: "اِشْرَبْ" },
    { id: "open", en: "open", enPast: "opened", arPast: "فَتَحَ", arPres: "يَفْتَحُ", arOrd: "اِفْتَحْ" }
];

const subjects = {
    boy: { ar: "الْوَلَدُ", en: "The boy", p: "3" },
    girl: { ar: "الْبِنْتُ", en: "The girl", p: "3" },
    i: { ar: "أَنَا", en: "I", p: "1" },
    we: { ar: "نَحْنُ", en: "We", p: "1" },
    youM: { ar: "أَنْتَ", en: "You", p: "2" }
};

const objects = {
    book: { ar: "الْكِتَابَ", en: "the book" },
    apple: { ar: "التُّفَّاحَةَ", en: "the apple" },
    water: { ar: "الْمَاءَ", en: "the water" },
    door: { ar: "الْبَابَ", en: "the door" }
};

function init() {
    const vSel = document.getElementById('verb');
    const oSel = document.getElementById('object');
    
    // Clear and populate Verb dropdown
    vSel.innerHTML = "";
    verbs.forEach(v => vSel.add(new Option(`${v.en} (${v.arPast})`, v.id)));
    
    // Clear and populate Object dropdown
    oSel.innerHTML = "";
    for (let key in objects) oSel.add(new Option(`${objects[key].en} (${objects[key].ar})`, key));
    
    updateUI();
}

function updateUI() {
    // Get values from HTML selectors
    const t = document.getElementById('tense').value; // past, present, order
    const m = document.getElementById('mode').value;  // affirmative, negative, interrogative
    const sKey = document.getElementById('subject').value;
    const vKey = document.getElementById('verb').value;
    const oKey = document.getElementById('object').value;

    const s = subjects[sKey];
    const v = verbs.find(x => x.id === vKey);
    const o = objects[oKey];

    // --- ARABIC LOGIC ---
    let arVerb = (t === "past") ? v.arPast : (t === "present" ? v.arPres : v.arOrd);
    
    // Arabic Past Tense Suffixes
    if (t === "past") {
        if (sKey === "i") arVerb = v.arPast.slice(0, -1) + "ْتُ";
        else if (sKey === "we") arVerb = v.arPast.slice(0, -1) + "ْنَا";
        else if (sKey === "girl") arVerb = v.arPast + "َتْ";
    }

    // Arabic Sentence Construction
    let arRes = "";
    if (t === "order") {
        arRes = v.arOrd + " " + o.ar + "!";
    } else {
        let prefix = "";
        if (m === "interrogative") prefix = "هَلْ ";
        if (m === "negative") prefix += (t === "past" ? "مَا " : "لَا ");
        
        arRes = prefix + arVerb + " " + s.ar + " " + o.ar;
    }

    // --- ENGLISH LOGIC ---
    let enRes = "";
    const is3rdPerson = (s.p === "3");

    if (t === "order") {
        // Order Mode (Imperative)
        let negPrefix = (m === "negative") ? "Don't " : "";
        enRes = negPrefix + v.en + " " + o.en + "!";
    } 
    else if (t === "past") {
        // Past Tense
        if (m === "negative") {
            enRes = `${s.en} did not ${v.en} ${o.en}`;
        } else if (m === "interrogative") {
            enRes = `Did ${s.en.toLowerCase()} ${v.en} ${o.en}?`;
        } else {
            enRes = `${s.en} ${v.enPast} ${o.en}`;
        }
    } 
    else {
        // Present Tense (Fixing do/does and interrogative signs)
        const helper = is3rdPerson ? "does" : "do";
        
        if (m === "negative") {
            enRes = `${s.en} ${helper} not ${v.en} ${o.en}`;
        } else if (m === "interrogative") {
            let capitalizedHelper = helper.charAt(0).toUpperCase() + helper.slice(1);
            enRes = `${capitalizedHelper} ${s.en.toLowerCase()} ${v.en} ${o.en}?`;
        } else {
            // Affirmative: add 's' for 3rd person singular
            let verbConjugated = is3rdPerson ? (v.en + "s") : v.en;
            enRes = `${s.en} ${verbConjugated} ${o.en}`;
        }
    }

    // --- OUTPUT TO DISPLAY ---
    document.getElementById('ar-out').innerText = arRes;
    document.getElementById('en-out').innerText = enRes;
}

// Ensure the application starts correctly
window.onload = init;
