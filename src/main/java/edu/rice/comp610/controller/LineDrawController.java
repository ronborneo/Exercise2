package edu.rice.comp610.controller;

import com.google.gson.Gson;
import edu.rice.comp610.model.MovingLine;

import static spark.Spark.*;


/**
 * Line draw controller is responsible for interfacing between the model and view for drawing a moving line.
 */
public class LineDrawController {

    /**
     * Program entry point.
     * @param args Program entry point arguments
     */
    public static void main(String[] args) {
        staticFileLocation("/public");
        Gson gson = new Gson();
        MovingLine line = new MovingLine(20);

        get("/line", (req, res) -> {
            // TODO: draw the line at the original location
            return "draw line";
        });

        get("/reset", (req, res) -> {
            // TODO: reset the canvas
            return "reset canvas";
        });

        get("/update", (req, res) ->  {
            // TODO: update the line position
            return "update line";
        });

    }
}
