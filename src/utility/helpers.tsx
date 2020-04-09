function isNumeric(num: any) {
    return !isNaN(num)
}

function removeItemFromArray(a: string[], s: string) {
    const index = a.indexOf(s);
    if (index > -1) a.splice(index, 1);
    return a;
}

export {isNumeric, removeItemFromArray}
