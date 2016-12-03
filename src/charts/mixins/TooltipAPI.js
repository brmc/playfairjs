let TooltipMixin = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this._tooltip = true;
    }

    showTooltipOnHover() {
        this._tooltip = true;

        return this;
    }

    hideTooltipOnHover() {
        this._tooltip = false;

        return this;
    }
};

module.exports = TooltipMixin;
