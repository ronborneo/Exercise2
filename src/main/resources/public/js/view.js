'use strict';

//app to draw polymorphic shapes on canvas
let app;

//id of current interval
let intervalID;

/**
 * Draw and clear line on a the canvas
 * @param canvas  The canvas used to draw a line
 * @returns {{drawLine: drawLine, clear: clear}}
 */
function createApp(canvas) {
    let c = canvas.getContext("2d");

    let drawLine = function(startX, startY, endX, endY) {
        c.beginPath();
        c.moveTo(startX, startY);
        c.lineTo(endX, endY);
        c.stroke();
    };

    let clear = function() {
        c.clearRect(0,0, canvas.width, canvas.height);
    };

    return {
        drawLine: drawLine,
        clear: clear
    }
}

/**
 * Setup event handling for buttons
 */
window.onload = function() {
    app = createApp(document.querySelector("canvas"));

    $("#btn-line").click(createLine);
    $("#btn-move").click(setUpdateFreq);
    $("#btn-reset").click(reset);
};

/**
 * Create a line at a location on the canvas
 */
function createLine() {
    $.get("/line", function (data) {
       // TODO: draw a line that does not move
    }, "json");
}

/**
 * Determine how often line updates occur
 */
function setUpdateFreq() {
    // TODO: move the line every .2 seconds by setting an interval
}

/**
 * Update a line on the canvas
 */
function updateLine() {
    $.get("/update", function (data) {
       // TODO: update the line position
    }, "json");
}

/**
 * Reset canvas
 */
function reset() {
    $.get("/reset", function (data) {
        // TODO: reset the canvas, no line should appear
    }, "json");


}
/**
 * Clear the canvas
 */
function clear() {
    app.clear();
}