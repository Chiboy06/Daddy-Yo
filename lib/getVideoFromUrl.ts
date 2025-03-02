export function getVideoIdFromUrl(url: string): string | null {
    let videoId: string | null = url;

    if (url.includes("youtu.be/")) {
        // Shortened Url Format: https://youtu.be/VIDEO_ID
        videoId = url.split("youtu.be/")[1]?.split(/[?#]/)[0] || null;
    } else if (url.includes("youtube.com/shorts/")) {
        // Shorts Format: https://www.youtube.com/shorts/VIDEO_ID
        videoId = url.split("youtube.com/shorts/")[1]?.split(/[?#]/)[0] || null;
    } else if (url.includes("youtube.com/watch?v=")) {
        // Standard Format: https://www.youtube.com/watch?v=VIDEO_ID
        videoId = url.split("v=")[1]?.split(/[?#]/)[0] || null;
    }

    return videoId;
}