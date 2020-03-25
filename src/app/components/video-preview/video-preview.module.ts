import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoPreviewComponent } from "./video-preview.component";
import { VideoCardModule } from "../video-card/video-card.module";

@NgModule({
  declarations: [VideoPreviewComponent],
  exports: [VideoPreviewComponent],
  imports: [CommonModule, VideoCardModule]
})
export class VideoPreviewModule {}
