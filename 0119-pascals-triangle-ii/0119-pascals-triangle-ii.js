var getRow = function(rowIndex) {
    let prev = [];

    for (let row = 0; row < rowIndex + 1; row++) {
        const curr = Array(row + 1).fill(1);

        for (let i = 1; i < row; i++) {
            curr[i] = prev[i - 1] + prev[i];
        }

        prev=curr;
    }

    return prev;
};

getRow(3)