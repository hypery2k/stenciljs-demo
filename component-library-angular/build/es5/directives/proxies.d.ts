import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Components } from '@m13t/component-library';
export declare interface AwesomeCounter extends Components.AwesomeCounter {
    /**
     *
     */
    counterUpdate: EventEmitter<CustomEvent<any>>;
}
export declare class AwesomeCounter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface MyComponent extends Components.MyComponent {
}
export declare class MyComponent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
