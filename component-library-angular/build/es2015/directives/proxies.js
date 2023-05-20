/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
let AwesomeCounter = class AwesomeCounter {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['counterUpdate']);
    }
};
AwesomeCounter.decorators = [
    { type: Component, args: [{
                selector: 'awesome-counter',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['max', 'min', 'start', 'step'],
            },] },
];
/** @nocollapse */
AwesomeCounter.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AwesomeCounter = tslib_1.__decorate([
    ProxyCmp({
        inputs: ['max', 'min', 'start', 'step']
    }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], AwesomeCounter);
export { AwesomeCounter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AwesomeCounter.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    AwesomeCounter.prototype.z;
}
let MyComponent = class MyComponent {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
MyComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-component',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['first', 'last', 'middle'],
            },] },
];
/** @nocollapse */
MyComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
MyComponent = tslib_1.__decorate([
    ProxyCmp({
        inputs: ['first', 'last', 'middle']
    }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], MyComponent);
export { MyComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MyComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MyComponent.prototype.z;
}
