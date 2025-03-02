"use server"

import { getVideoIdFromUrl } from '@/lib/getVideoFromUrl';
// import { getVideoIdFromUrl } from '@/lib/youtube/getVideoIdFromUrl'
import { redirect } from 'next/navigation'

export default async function analyseYoutubeVideo(formData: FormData) {
    const url = formData.get('url')?.toString();
    if (!url) return;

    // const videoId = getVideoIdFromUrl(url);
    const videoId = getVideoIdFromUrl(url); // Placeholder for actual video ID
    //  extraction logic
    console.log("VideoId",videoId)
    if (!videoId) return;

    redirect(`/video/${videoId}/analysis`);

}
