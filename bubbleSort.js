const list = [105, 67, 90, 5, 22, 88];

const bubbleSort = (list) => {
    let shouldRunAgain = false;
    const limit = list.length;
    const defaultNextValue = Number.POSITIVE_INFINITY;
    for (let [index, currentValue] of list.entries()) {
        let nextValue = (index + 1 < limit) ? list[index + 1] : defaultNextValue;
        
        if (nextValue < currentValue) {
            list[index] = nextValue;
            list[index + 1] = currentValue
            shouldRunAgain = true;
        }
    }
    if (shouldRunAgain) bubbleSort(list);
}

bubbleSort(list);
console.log(list);
