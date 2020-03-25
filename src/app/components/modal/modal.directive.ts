import {
  Directive,
  Renderer2,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from "@angular/core";

@Directive({
  selector: "[appModal]"
})
export class ModalDirective implements OnDestroy {
  constructor(private modalEl: ElementRef, private renderer: Renderer2) {
    this.close();
  }

  open() {
    this.renderer.appendChild(document.body, this.modalEl.nativeElement);
    this.renderer.setStyle(document.body, "overflow", "hidden");
    this.renderer.setStyle(
      this.modalEl.nativeElement,
      "top",
      window.scrollY + "px"
    );
  }

  close() {
    this.renderer.removeChild(
      this.modalEl.nativeElement.parentElement,
      this.modalEl.nativeElement,
      true
    );
    this.renderer.setStyle(document.body, "overflow", "auto");
  }

  ngOnDestroy() {
    this.close();
  }
}
