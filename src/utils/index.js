
export function toProperCase(str='') {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
};

export function shuffle(a=[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a
}

export function unique(array=[]) {
    return [...(new Set(array))]
}

export function inArray(array=[], val) {
    var index = array.indexOf(val)
    return (index > -1)
}

export function arrayFilter(array=[], val) {
    var index = array.indexOf(val)
    if (index > -1) {
        array.splice(index, 1)
    }
    return array
}

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
