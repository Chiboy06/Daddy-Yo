export interface ChannelDetails {
    title: string;
    thumbnails: string;
    subscribers: string
}


export interface VideoDetails {
    title: string;
    views: string;
    likes: string;
    comments: string;
    thumbnails: string;
    description: string;
    channel: ChannelDetails;
    publishedAt: string 
}