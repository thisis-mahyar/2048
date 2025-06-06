// [0, 2, 8, 0] => [0, 0, 2, 8]
function shiftRight(row) {
    let nonZeroItems = row.filter(x => x !== 0)

    let zeroCount = row.length - nonZeroItems.length

    return new Array(zeroCount).fill(0).concat(nonZeroItems)
}
