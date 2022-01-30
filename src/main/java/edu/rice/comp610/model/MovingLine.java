package edu.rice.comp610.model;

/**
 * Represents a line that moves.
 */
public class MovingLine {
    private int startX;
    private int startY;
    private int endX;
    private int endY;
    private int velX;

    /**
     * MovingLine constructor.
     * @param velX velocity in the x direction
     */
    public MovingLine(int velX) {
        this.velX = velX;
        // TODO: Set line at the original position
        this.resetPos();
    }

    /**
     * Update the line position.
     */
    public void update() {
        // TODO: Update the line position in the x direction only
        this.startX += this.velX;
        this.endX += this.velX;
    }

    /**
     * Reset the line position to the original position.
     */
    public void resetPos() {
        startX = 0;
        startY = 0;
        endX = 200;
        endY = 100;
    }
}
