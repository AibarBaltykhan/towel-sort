
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == null) {
        return [];
    }
    let answer = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i%2 == 0) {
            for (let a in matrix[i]) {
                answer.push(matrix[i][a]);
            }
        } else {
            for (let j = matrix[i].length-1; j >= 0; j--) {
                answer.push(matrix[i][j])
            }
        }
    }
    return answer;
}
