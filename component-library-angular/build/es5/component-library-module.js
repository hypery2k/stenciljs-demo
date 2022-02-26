/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { defineCustomElements } from '@m13t/component-library/loader';
import { MyComponent } from './directives/proxies';
defineCustomElements(window);
/** @type {?} */
var DECLARATIONS = [
    // proxies
    MyComponent,
];
var ComponentLibraryModule = /** @class */ (function () {
    function ComponentLibraryModule() {
    }
    ComponentLibraryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    imports: [],
                    providers: [],
                },] },
    ];
    return ComponentLibraryModule;
}());
export { ComponentLibraryModule };
