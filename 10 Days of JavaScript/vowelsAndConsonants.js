/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = []
    let consonants = []
    for(let i=0; i<s.length; i++){
        if("aeioe".includes(s.charAt(i))){
            vowels.push(s.charAt(i));
        }
        if("bcdfghjklmnpqrstvwxyz".includes(s.charAt(i))){
            consonants.push(s.charAt(i));
        }
    }
    
    for(let v of vowels){
        console.log(v);
    }
    
    for(let c of consonants){
        console.log(c);
    }
}
