// import { ChangeDetectorRef, NO_ERRORS_SCHEMA } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
// import { BidiModule } from '@angular/cdk/bidi';
// import { LayoutModule } from '@angular/cdk/layout';
// import { ObserversModule } from '@angular/cdk/observers';
//
// import { NgCustomScrollbar } from './ng-custom-scrollbar';
// import { NgScrollbar } from '../ng-scrollbar';
// import { ScrollView } from '../scroll-view';
// import { SmoothScrollManager } from '../../smooth-scroll/smooth-scroll-manager';
// import { VerticalScrollbar } from './classes/vertical-scrollbar';
// import { HorizontalScrollbar } from './classes/horizontal-scrollbar';
// import { By } from '@angular/platform-browser';
//
// describe('Internal Scrollbar Component', () => {
//   let component: NgCustomScrollbar;
//   let fixture: ComponentFixture<NgCustomScrollbar>;
//   let componentElement: HTMLElement;
//
//   let parent;
//   let parentFixture;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         NgCustomScrollbar,
//         NgScrollbar
//       ],
//       providers: [
//         SmoothScrollManager,
//         ChangeDetectorRef,
//         NgScrollbar
//       ],
//       schemas: [NO_ERRORS_SCHEMA]
//     }).compileComponents();
//   }));
//
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(NgCustomScrollbar);
//     component = fixture.componentInstance;
//     componentElement = fixture.debugElement.nativeElement;
//
//     fixture.detectChanges();
//   });
//
//   it('should create', fakeAsync(() => {
//     parent.ngOnInit();
//     // expect(component).toBeTruthy();
//
//     // expect(parent).toBeTruthy();
//     // parent.ngOnInit();
//     // spyOn<any>(parent, 'ngOnInit');
//     // expect(parent.ngOnInit).toHaveBeenCalled();
//     // expect(component.parent).toBeTruthy();
//     // fixture.detectChanges();
//     // expect(component.parent instanceof NgScrollbar).toBeTruthy();
//   }));
//
//   // it('should use vertical axis', () => {
//   //   component.axis = 'vertical';
//   //   component.ngOnInit();
//   //   fixture.detectChanges();
//   //   expect(component.customScrollbar).toBeTruthy();
//   //   expect(component.customScrollbar instanceof VerticalScrollbar).toBeTruthy();
//   // });
//   //
//   // it('should use horizontal axis', () => {
//   //   component.axis = 'horizontal';
//   //   component.ngOnInit();
//   //   fixture.detectChanges();
//   //   expect(component.customScrollbar).toBeTruthy();
//   //   expect(component.customScrollbar instanceof HorizontalScrollbar).toBeTruthy();
//   // });
// });
