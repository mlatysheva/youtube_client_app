export interface ICard {
  kind: string,
  etag: string,
  id: string,
  snippet: ISnippet,
  statistics: IStatistics,
}

export interface ISnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnail,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: ILocalized,
}

export interface IThumbnail {
  default: IDefault,
  medium: IDefault,
  high: IDefault,
  standard: IDefault,
  maxres: IDefault,
}

export interface IDefault {
  url: string,
  width: number,
  height: number,
}

export interface ILocalized {
  title: string,
  description: string,
}

export interface IStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string,
}

export interface ICardToAdd {
  title: string,
  description: string,
  image: string,
  videoLink: string,
}