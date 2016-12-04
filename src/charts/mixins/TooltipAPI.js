let TooltipMixin = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this.tooltip = true;
    }

    showTooltipOnHover() {
        this.tooltip = true;

        return this;
    }

    hideTooltipOnHover() {
        this.tooltip = false;

        return this;
    }
};

module.exports = TooltipMixin;
