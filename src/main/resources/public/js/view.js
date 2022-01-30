'use strict';

//app to draw polymorphic shapes on canvas
let app;

//id of current interval
let intervalID;

//boolean to keep track if line is drawn in canvas
let isLineDrawn = false;

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
        console.log("data is " + data);
        initializeForNewLine();
        app.drawLine(data.startX, data.startY, data.endX, data.endY);
        isLineDrawn = true;
    }, "json");
}

/**
 * Determine how often line updates occur
 */
function setUpdateFreq() {
    // TODO: move the line every .2 seconds by setting an interval
    if (intervalID == null && isLineDrawn) {
        intervalID = setInterval(updateLine, 200)
    }
}

/**
 * Update a line on the canvas
 */
function updateLine() {
    $.get("/update", function (data) {
       // TODO: update the line position
        console.log("data is " + data);
        clear();
        app.drawLine(data.startX, data.startY, data.endX, data.endY);
    }, "json");
}

/**
 * Reset canvas
 */
function reset() {
    $.get("/reset", function (data) {
        // TODO: reset the canvas, no line should appear
        initializeForNewLine();
    }, "json");
}

function initializeForNewLine() {
    clearInterval(intervalID);
    intervalID = null;
    isLineDrawn = false;
    clear();
}

/**
 * Clear the canvas
 */
function clear() {
    app.clear();
}