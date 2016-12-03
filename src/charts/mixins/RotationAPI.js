let RotationAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this._rotated = false;
    }

    rotate() {
        this._rotated = true;

        return this;
    }

    isRotated() {
        return this._rotated;
    }
};

module.exports = RotationAPI;
