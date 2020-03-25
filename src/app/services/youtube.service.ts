import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Youtube } from '../models/youtube';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey: string = 'your key here';

  constructor(public http: HttpClient) {}

  getVideosForChanel(searchStr): Observable<Youtube[]> {
    let commaSeparatedVideoIds = [];
    let url = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&q=${searchStr}&order=relevance&part=snippet,id&type=video,id&maxResults=25`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.items.map(youtubeRaw => {
          commaSeparatedVideoIds.push(youtubeRaw.id.videoId);
          youtubeRaw.snippet.thumb = youtubeRaw.snippet.thumbnails.medium;
          delete youtubeRaw.snippet.thumbnails;
          return {
            ...youtubeRaw.snippet,
            id: youtubeRaw.id.videoId,
            videoSource: `https://www.youtube.com/watch?v=${youtubeRaw.id.videoId}`
          } as Youtube;
        });
      }),
      switchMap((youtube: Youtube[]) => {
        return this.getVideosDetails(commaSeparatedVideoIds.join(), youtube);
      })
    );
  }

  getVideosDetails(
    videoIds: string,
    youtube: Youtube[]
  ): Observable<Youtube[]> {
    let url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return youtube.map((yt, idx) => {
          const duration = res.items[idx].contentDetails.duration
            .replace('PT', '')
            .replace('H', 'h ')
            .replace('M', 'min ')
            .replace('S', 's');
          return {
            ...yt,
            statistics: this.formatStatistics(res.items[idx].statistics),
            duration
          };
        });
      })
    );
  }

  formatStatistics(statisticsRaw) {
    const reduceNumber = (number, unit: 'K' | 'M') => {
      if (number.length < 4 && unit === 'K') {
        return number;
      } else {
        number = Math.floor(number / 1000);
        return number.length >= 4
          ? reduceNumber(number, 'M')
          : `${number}${unit}`;
      }
    };
    return {
      viewCount: reduceNumber(statisticsRaw.viewCount, 'K'),
      likeCount: reduceNumber(statisticsRaw.likeCount, 'K'),
      dislikeCount: reduceNumber(statisticsRaw.dislikeCount, 'K'),
      commentCount: reduceNumber(statisticsRaw.commentCount, 'K')
    };
  }
}
