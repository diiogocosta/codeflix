import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ModalDirective } from "./modal.directive";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements AfterViewInit {
  @ViewChild(ModalDirective, { static: false }) modalRef: ModalDirective;

  constructor() {}

  open() {
    this.modalRef.open();
  }

  close() {
    this.modalRef.close();
  }

  ngAfterViewInit() {}
}
