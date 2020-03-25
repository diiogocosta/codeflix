export interface Youtube {
  id: string;
  thumb: {
    url: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  channelTitle: string;
  channelId: string;
  publishedAt: string;
  videoSource: string;
  statistics?: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    commentCount: string;
  };
  duration?: string;
}
