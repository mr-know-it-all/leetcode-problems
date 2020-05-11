// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.


// SOLUTION 1:

// floodFill :: ([[Number]], Number, Number, Number) -> [[Number]]
const floodFill = (image, x, y, newColor) => {
    const startColor = image[x][y];
    const visited = {};

    const fill = (x, y) => {
        if(visited[`${x}-${y}`]) return;
        visited[`${x}-${y}`] = true;

        if(image[x][y] === startColor) {
            image[x][y] = newColor;

            if(x + 1 < image.length) fill(x + 1, y); // DOWN
            if(x - 1 >= 0) fill(x - 1, y); // UP
            if(y + 1 < image[0].length) fill(x, y + 1); // RIGHT
            if(y - 1 >= 0) fill(x, y - 1); // LEFT
        }

    }

    fill(x, y);

    return image;
};

// SOLUTION 2:

// floodFill :: ([[Number]], Number, Number, Number) -> [[Number]]
const floodFill = (image, x, y, newColor) => {
    const startColor = image[x][y];

    if(startColor === newColor) return image;

    const fill = (x, y) => {
        if(image[x][y] === startColor) {
            image[x][y] = newColor;

            if(x + 1 < image.length) fill(x + 1, y); // DOWN
            if(x - 1 >= 0) fill(x - 1, y); // UP
            if(y + 1 < image[0].length) fill(x, y + 1); // RIGHT
            if(y - 1 >= 0) fill(x, y - 1); // LEFT
        }

    }

    fill(x, y);

    return image;
};
