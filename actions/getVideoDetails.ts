'use server'

import { google } from "googleapis"
import { VideoDetails } from "@/types/type"

const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY
});

export async function getVideoDetails(videoId: string) {
    console.log("fetching video details for: ", videoId)

    try{
        const videoResponse = await youtube.videos.list({
            part: ["statistics", "snippet"],
            id: [videoId]
        });

        const videoDetails = videoResponse.data.items?.[0];

        if (!videoDetails) throw new Error("Video not found");

        // Get channel details including thumbnails
        const channelResponse = await youtube.channels.list({
            part: ["snippet", "statistics"],
            id: [videoDetails.snippet?.channelId || ""],
            key: process.env.YOUTUBE_API_KEY
        });

        const channelDetails = channelResponse.data.items?.[0];
        console.log("Video details fetched successfully");

        const video: VideoDetails = {
            title: videoDetails.snippet?.title || "Unknown Title",
            views: videoDetails.statistics?.viewCount || "0",
            likes: videoDetails.statistics?.likeCount || "Not Available",
            comments: videoDetails.statistics?.commentCount || "Not Available",
            description: videoDetails.snippet?.description || "No description available",
            thumbnails: videoDetails.snippet?.thumbnails?.maxres?.url
             || videoDetails.snippet?.thumbnails?.high?.url || videoDetails.snippet?.thumbnails?.default?.url || "" ,
            channel: {
                // id: channelDetails?.id || "",
                subscribers: channelDetails?.statistics?.subscriberCount || "Not Available",
                title: channelDetails?.snippet?.title || "",
                thumbnails: channelDetails?.snippet?.thumbnails?.default?.url || ""
            },
            publishedAt: videoDetails.snippet?.publishedAt || new Date().toISOString(),
        }
        return video;

    } catch (error) {
        console.error("Error fetching video details: ", error);
        return null;
    }
}