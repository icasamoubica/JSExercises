let str = "asdf"
let str2 = 'wtf' + 'best' + 'for' + 'adding'
let = `interpolering ${str}`

function containsChar(str, cha) {
    let i = 0;
    while (i < str.length) {
        if (str[i] == cha) {
            return true;
        }
        i++;

    }
    return false;
}

function indexOFChar (str, cha) {
    let i = 0;
    while (i < str.length) {
        if (str[i] == cha) {
            return i;
        }
        i++;

    }
    return -1;
}

function reverse(str) {
    let reversed = "";
    let index = str.length-1;
    while (index >= 0) {
        reversed += str[index]
        index--;
    }
    return reversed;
}

function removeChar(str, char) {
    let result = "";
    let index = 0;
    while(index < str.length) {
        if(str[index] != char) {
            result += str[index];
        }
        index++;
    }
    return result;
}

function replaceChar(str, charOut, charIn) {
    let result = "";
    let index = 0;
    while(index < str.length) {
        if(str[index] != charOut) {
            result += str[index];
        } else {
            result += charIn;
        }
        index++;
    }
    return result;
}

function substring(str, indexStart, indexStopp) {
    let result = "";
    while (indexStart <= indexStopp) {
        result += str[indexStart]
        indexStart++;
    }
    return result;
}

function contains(strBig, strSmol) {
    let index = 0;
    let indexSmol = 0;
    result = true;
    while (index <= strBig.length-strSmol.length) {
        if (strBig[index] == strSmol[indexSmol]) {
            result = true;
            while (indexSmol < strSmol.length) {
                if (strBig[index + indexSmol] != strSmol[indexSmol]) {
                    result = false;
                }
                indexSmol++;
            }
            indexSmol = 0;
            if(result) {
                return result;
            }
        }
        index++;
    }
    return false;
} 

function remove(str, strToRemove) {
    let index = 0;
    let result = "";

    if(contains(str, strToRemove)) {

        while (index <= ((str.length-strToRemove.length)+1)) {

            if ((substring(str, index, index+strToRemove.length-1)==strToRemove)) {
                index += strToRemove.length;
            }

            if(index <= (str.length-strToRemove.length)+1){
                 result += str[index]
            }
           
            index++;
        }    
    }
    return result;    
}

function replace(str, strToRemove, strToAdd) {
    let index = 0;
    let result = "";

    if(contains(str, strToRemove)) {

        while (index <= ((str.length-strToRemove.length)+1)) {

            if ((substring(str, index, index+strToRemove.length-1)==strToRemove)) {
                result += strToAdd;
                index += strToRemove.length;
            }
            if(index <= (str.length-strToRemove.length)+1){
                 result += str[index]
            }
           
            index++;
        }    
    }
    return result;  
}

function encrypt(str) {

    let result = "";

    for (let i = 0; i < str.length; i++) {

        if( str[i] != "a" && 
            str[i] != "e" && 
            str[i] != "i" && 
            str[i] != "o" && 
            str[i] != "u" && 
            str[i] != "å" && 
            str[i] != "ä" && 
            str[i] != "ö" && 
            str[i] != "y" &&
            str[i] != "A" && 
            str[i] != "E" && 
            str[i] != "I" && 
            str[i] != "O" && 
            str[i] != "U" && 
            str[i] != "Å" && 
            str[i] != "Ä" && 
            str[i] != "Ö" && 
            str[i] != "Y" &&
            str[i] != "!" &&
            str[i] != "?" &&
            str[i] != "." &&
            str[i] != "," &&
            str[i] != " "    ) {
            
            result += str[i];
            result += "o";
            result += str[i];
        } else {
            result += str[i];
        }
    }

    return result;



}


console.log(containsChar("Hello World!", "!"))
console.log(indexOFChar("Hello World!", "!"))
console.log(reverse("Hello World!"))
console.log(removeChar("Hello World!", "o"))
console.log(replaceChar("Hello World!", "o", "y"))
console.log(substring("Hello World!", 1, 4))
console.log(substring("Hello World!", 1, 4))
console.log(contains("Hello World!", "ll"))
console.log(remove("Hello World!", "ll"))
console.log(replace("Hello World!", "orld!", "   "))
console.log(encrypt("Yello world!"))
