import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoCardComponent } from "./video-card.component";

@NgModule({
  declarations: [VideoCardComponent],
  exports: [VideoCardComponent],
  imports: [CommonModule]
})
export class VideoCardModule {}
