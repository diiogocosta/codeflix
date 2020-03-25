import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Youtube } from "src/app/models/youtube";

@Component({
  selector: "app-video-card",
  templateUrl: "./video-card.component.html",
  styleUrls: ["./video-card.component.scss"]
})
export class VideoCardComponent implements OnInit {
  @Input() video: Youtube;
  @Input() statistics: boolean = true;
  @Output() playVideo = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
