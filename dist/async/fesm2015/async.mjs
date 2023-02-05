import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

// Copyright (c) Quinntyne Brown. All Rights Reserved.
class LoginComponent {
    constructor() {
        this.vm$ = of({
            title: "Login"
        });
    }
}
LoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.3", ngImport: i0, type: LoginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.3", type: LoginComponent, isStandalone: true, selector: "app-login", ngImport: i0, template: "<div *ngIf=\"vm$ | async as vm\">\n    <h1>{{ vm.title }}</h1>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.3", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-login', standalone: true, imports: [CommonModule], template: "<div *ngIf=\"vm$ | async as vm\">\n    <h1>{{ vm.title }}</h1>\n</div>\n" }]
        }] });

// Copyright (c) Quinntyne Brown. All Rights Reserved.

/**
 * Generated bundle index. Do not edit.
 */

export { LoginComponent };
//# sourceMappingURL=async.mjs.map
