// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class LoginComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXN5bmMvc3JjL2xpYi9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hc3luYy9zcmMvbGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNEQUFzRDtBQUN0RCwrRkFBK0Y7QUFFL0Ysc0RBQXNEO0FBQ3RELCtGQUErRjtBQUUvRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFTMUIsTUFBTSxPQUFPLGNBQWM7SUFQM0I7UUFTUyxRQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2QsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDLENBQUM7S0FDSjs7MkdBTFksY0FBYzsrRkFBZCxjQUFjLHFFQ2pCM0IsMEVBR0EseUREVVksWUFBWTsyRkFJWCxjQUFjO2tCQVAxQixTQUFTOytCQUNFLFdBQVcsY0FDVCxJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIFF1aW5udHluZSBCcm93bi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbi8vIENvcHlyaWdodCAoYykgUXVpbm50eW5lIEJyb3duLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gIHB1YmxpYyB2bSQgPSBvZih7XG4gICAgdGl0bGU6IFwiTG9naW5cIlxuICB9KTtcbn1cblxuXHJcbiIsIjxkaXYgKm5nSWY9XCJ2bSQgfCBhc3luYyBhcyB2bVwiPlxuICAgIDxoMT57eyB2bS50aXRsZSB9fTwvaDE+XG48L2Rpdj5cbiJdfQ==