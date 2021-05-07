function getLetter(s) {
    switch(s.charAt(0)){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u': return 'A';
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g': return 'B';
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm': return 'C';
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'x':
        case 'y':
        case 'z': return 'D';
    }
}
