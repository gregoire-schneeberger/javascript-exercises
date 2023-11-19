const removeFromArray = function(array, ...elementsToDelet) {
    const args = Array.from(elementsToDelet);

    function remove(array, element) {
        let index = array.indexOf(element);
        array.splice(index,1);
    }
    
    for (let i = 0; i<args.length; i++) {
        if (array.includes(args[i])) {
            remove(array, args[i])};
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
