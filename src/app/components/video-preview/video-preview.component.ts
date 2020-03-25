import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { Youtube } from "src/app/models/youtube";
import { GithubService } from "src/app/services/github.service";

@Component({
  selector: "app-video-preview",
  templateUrl: "./video-preview.component.html",
  styleUrls: ["./video-preview.component.scss"]
})
export class VideoPreviewComponent implements OnInit, AfterViewInit {
  @Input() randomVideo: Youtube;
  @Output() playVideo = new EventEmitter();

  constructor(private githubService: GithubService) {}

  teste() {
    this.githubService
      .makeGraphQLRequest(
        `{ 
      search { 
        login
      }
    }`
      )
      .subscribe(res => console.log(res));
  }

  ngOnInit() {}

  ngAfterViewInit() {}
}
