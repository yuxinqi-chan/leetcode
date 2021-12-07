/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let result = []
    let chessboard = new Array(n).fill(0).map(() => new Array(n).fill('.'))
    recursion(chessboard, 0, n)
    return result.map(c => c.map(r => r.join('')))

    function recursion(chessboard, row, n) {
        for (let j = 0; j < n; j++) {
            if (isValid(row, j, chessboard, n)) {
                chessboard[row][j] = 'Q';
                if (row === n - 1) {
                    result.push(copy(chessboard))
                } else {
                    recursion(chessboard, row + 1, n);
                }
                chessboard[row][j] = '.';
            }
        }
    }
};

function isValid(row, col, chessboard, n) {
    // 检查列
    for (let i = 0; i < row; i++) { // 这是一个剪枝
        if (chessboard[i][col] == 'Q') {
            return false;
        }
    }
    // 检查 45度角是否有皇后
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (chessboard[i][j] == 'Q') {
            return false;
        }
    }
    // 检查 135度角是否有皇后
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (chessboard[i][j] == 'Q') {
            return false;
        }
    }
    return true;
}

function copy(array) {
    return JSON.parse(JSON.stringify(array))
}

// @lc code=end