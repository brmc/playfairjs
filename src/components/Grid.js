
class Grid {
    constructor() {
        this.x = false;
        this.y = false;
    }

    /**
     * @return {Grid}
     */
    hideXGridLines() {
        this.x = false;

        return this;
    }

    /**
     * @return {Grid}
     */
    showXGridLines() {
        this.x = true;

        return this;
    }

    /**
     * @return {boolean}
     */
    areXGridLinesVisible() {
        return this.x;
    }

    /**
     * @return {Grid}
     */
    hideYGridLines() {
        this.y = false;

        return this;
    }

    /**
      * @return {Grid}
     */
    showYGridLines() {
        this.y = true;

        return this;
    }

    /**
     * @return {boolean}
     */
    areYGridLinesVisible() {
        return this.y;
    }
}

module.exports = Grid;