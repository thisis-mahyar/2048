let pre = []

function updatePre(matrix) {
    if (pre.length === 0)
        pre = [[], [], [], []]

    if (pre.length === 0 || pre.toString() !== matrix.toString()) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                pre[i][j] = matrix[i][j]
            }
        }
    }
}
