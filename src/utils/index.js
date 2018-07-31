
/* Turn a string from aNY ARBiTRARY cAsE into Something Much Cleaner. */
export function toProperCase(str='') {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
};

/* Shuffle an array. */
export function shuffle(a=[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a
}

/* Return an array with duplicate values removed */
export function unique(array=[]) {
    return [...(new Set(array))]
}

/* Simple test to determine if a value exists in an array */
export function inArray(array=[], val) {
    var index = array.indexOf(val)
    return (index > -1)
}

/* If the array doesn't contain the value, add it; if it does, remove it */
export function arrayToggleValue(array=[], val) {
    array = unique(array);
    var index = array.indexOf(val);

    if (index === -1) {
        array.push(val);
    } else {
        array.splice(index, 1);
    }

    return array
}
