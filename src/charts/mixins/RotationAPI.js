let RotationAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this.rotated = false;
    }

    rotate() {
        this.rotated = this.isRotated() ? false : true;

        return this;
    }

    isRotated() {
        return this.rotated;
    }
};

module.exports = RotationAPI;
