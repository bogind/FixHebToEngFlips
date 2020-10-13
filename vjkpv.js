function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function is_heb(Field) {
    // First choose the required validation

    //HebrewChars = new RegExp("^[\u0590-\u05FF]+$");
    HebrewChars = new RegExp(".[א-ת]");
    AlphaNumericChars = new RegExp("^[a-zA-Z0-9\-]+$");
    EnglishChars = new RegExp("^[a-zA-Z\-]+$");
    //LegalChars = new RegExp("^[a-zA-Z\-\u0590-\u05FF ]+$"); //Note that this one allows space 
    LegalChars = new RegExp(".[a-zA-Zא-ת ]"); //Note that this one allows space 

    // Then use it

    if (HebrewChars.test(Field)) {
        return true;
    } else
        return false;
}
let engToHebChars = {
    "q":"/",
    "w":"'",
    "e":"ק",
    "r":"ר",
    "t":"א",
    "y":"ט",
    "u":"ו",
    "i":"ן",
    "o":"ם",
    "p":"פ",
    "[":"]",
    "]":"[",
    "a":"ש",
    "s":"ד",
    "d":"ג",
    "f":"כ",
    "g":"ע",
    "h":"י",
    "j":"ח",
    "k":"ל",
    "l":"ך",
    ";":"ף",
    "'":",",
    "z":"ז",
    "x":"ס",
    "c":"ב",
    "v":"ה",
    "b":"נ",
    "n":"מ",
    "m":"צ",
    ",":"ת",
    ".":"ץ",
    "/":".",
    " ":" ",
    "`":"`",
    "1":"1",
    "2":"2",
    "3":"3",
    "4":"4",
    "5":"5",
    "6":"6",
    "7":"7",
    "8":"8",
    "9":"9",
    "0":"0",
    "-":"-",
    "=":"=",
    "~":"~",
    "!":"1",
    "@":"@",
    "#":"#",
    "$":"$",
    "%":"%",
    "^":"^",
    "&":"&",
    "*":"*",
    "(":")",
    ")":"(",
    "_":"_",
    "+":"+",
    "<":">",
    ">":"<",
    "?":"?",
    "\"":"\"",
    ":":":",
    "Q":"/",
    "W":"'",
    "E":"ק",
    "R":"ר",
    "T":"א",
    "Y":"ט",
    "U":"ו",
    "I":"ן",
    "O":"ם",
    "P":"פ",
    "{":"}",
    "}":"{",
    "A":"ש",
    "S":"ד",
    "D":"ג",
    "F":"כ",
    "G":"ע",
    "H":"י",
    "J":"ח",
    "K":"ל",
    "L":"ך",
    "Z":"ז",
    "X":"ס",
    "C":"ב",
    "V":"ה",
    "B":"נ",
    "N":"מ",
    "M":"צ",
    
}
let hebToEngChars = {
    "/":"q",
    "'":"w",
    "ק":"e",
    "ר":"r",
    "א":"t",
    "ט":"y",
    "ו":"u",
    "ן":"i",
    "ם":"o",
    "פ":"p",
    "]":"[",
    "[":"]",
    "ש":"a",
    "ד":"s",
    "ג":"d",
    "כ":"f",
    "ע":"g",
    "י":"h",
    "ח":"j",
    "ל":"k",
    "ך":"l",
    "ף":";",
    ",":"'",
    "ז":"z",
    "ס":"x",
    "ב":"c",
    "ה":"v",
    "נ":"b",
    "מ":"n",
    "צ":"m",
    "ת":",",
    "ץ":".",
    ".":"/",
    " ":" ",
    "`":"`",
    "1":"1",
    "2":"2",
    "3":"3",
    "4":"4",
    "5":"5",
    "6":"6",
    "7":"7",
    "8":"8",
    "9":"9",
    "0":"0",
    "-":"-",
    "=":"=",
    "~":"~",
    "!":"1",
    "@":"@",
    "#":"#",
    "$":"$",
    "%":"%",
    "^":"^",
    "&":"&",
    "*":"*",
    "(":")",
    ")":"(",
    "_":"_",
    "+":"+"
}
function EngCharToHeb(char){
    return engToHebChars[char]
}
function HebCharToEng(char){
    return hebToEngChars[char]
}

function flip(e){
    if( e.ctrlKey && e.keyCode == 81){
        text = getSelectionText().split(""); 
        if(is_heb(text)){
            response = text.map(HebCharToEng).join("")
        }else{
            response = text.map(EngCharToHeb).join("")
        }
        console.log(response)
        //console.log(is_heb(text))
    }
}
document.onkeyup = flip