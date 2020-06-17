// Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// solve :: String -> ()
const solve = board => {
    if(board.length == 0 || board.length < 2 || board[0].length < 2) return;

    const X = 'X', O = 'O', EXCLUDED = '.';
    const m = board.length, n = board[0].length;

    const exclude = (i, j) => {
        if(i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) return;

        board[i][j] = EXCLUDED;

        if(i > 1 && board[i - 1][j] === O) exclude(i - 1, j);
        if(j < n - 2 && board[i][j + 1] === O) exclude(i, j + 1);
        if(i < m - 2 && board[i + 1][j] === O) exclude(i + 1, j);
        if(j > 1 && board[i][j - 1] === O) exclude(i, j - 1);
    };

  	for(let i = 0; i < m; i++) {
  		if(board[i][0] === O) exclude(i, 0);
  		if(board[i][n - 1] === O) exclude(i, n - 1);
  	}

  	for(let j = 0; j < n; j++) {
  		if(board[0][j] === O) exclude(0, j);
  		if(board[m - 1][j] === O) exclude(m - 1, j);
  	}

  	for(let i = 0; i < m; i++) {
  		for (let j = 0; j < n; j++) {
  			if(board[i][j] === O) board[i][j] = X;
  			else if(board[i][j] === EXCLUDED) board[i][j] = O;
  		}
  	}

};
