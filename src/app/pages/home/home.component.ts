import { Component, OnInit, ViewChild } from "@angular/core";
import { YoutubeService } from "src/app/services/youtube.service";
import { Youtube } from "src/app/models/youtube";
import { ModalComponent } from "src/app/components/modal/modal.component";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public youtubeVideos: Youtube[];
  public randomVideo: Youtube;
  public currentVideoSrc;
  @ViewChild(ModalComponent, { static: false }) modal: ModalComponent;

  constructor(
    private youtube: YoutubeService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.youtube.getVideosForChanel("programação").subscribe(
      ytVideos => {
        this.youtubeVideos = ytVideos;
        this.randomVideo = this.youtubeVideos[
          Math.floor(Math.random() * this.youtubeVideos.length)
        ];
      },
      err => console.log(err)
    );
  }

  playVideo(video: Youtube) {
    this.currentVideoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${video.id}?autoplay=1;mute=1`
    );
    this.modal.open();
  }
}
