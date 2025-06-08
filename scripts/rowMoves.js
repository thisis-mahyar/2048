// [0, 2, 8, 0] => [0, 0, 2, 8]
function shiftRight(row) {
    let nonZeroItems = row.filter(x => x !== 0)

    let zeroCount = row.length - nonZeroItems.length

    return new Array(zeroCount).fill(0).concat(nonZeroItems)
}

function mergeRight(row) {
    // if there are zeros between non-zeros
    // [2, 0, 0, 2] => [0, 0, 2, 2]
    row = shiftRight(row)

    // merge adjacent equal elements from right to left
    // [0, 0, 2, 2] => [0, 0, 0, 4]
    for (let i = row.length - 1; i > 0; i--) {
        if (row[i] === row[i - 1]) {
            row[i] *= 2
            row[i - 1] = 0

            // update score
            score += row[i]

            // skip the next element to avoid double merging
            i--
        }
    }

    // to shift the merged elements again
    // [2, 2, 2, 2] => [0, 4, 0, 4] => [0, 0, 4, 4]
    row = shiftRight(row)

    return row
}

function mergeLeft(row) {
    row.reverse()
    row = mergeRight(row)
    row.reverse()

    return row
}
