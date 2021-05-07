/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function throwZeroError(){
    throw new Error("Zero Error");
}

function throwNegativeError(){
    throw new Error("Negative Error");
}

function isPositive(a) {
    if(a>0){
        return "YES";
    }
    
    if(a==0){
        throwZeroError();
    }
    
    if(a<0){
        throwNegativeError();
    }
}

