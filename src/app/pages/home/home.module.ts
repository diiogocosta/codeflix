import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { VideoPreviewModule } from "src/app/components/video-preview/video-preview.module";
import { ModalModule } from "src/app/components/modal/modal.module";
import { VideoCardModule } from "src/app/components/video-card/video-card.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    VideoPreviewModule,
    VideoCardModule,
    ModalModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule {}
