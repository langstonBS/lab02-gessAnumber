
export function compareNumbers(gess, conretAnser){
    if (gess < conretAnser) {
        return -1;
    } else if (gess === conretAnser) {
        return 0;
    } else if (gess > 1){
        return 1;
    }

}
