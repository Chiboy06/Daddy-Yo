"use server"

// import { getVideoIdFromUrl } from '@/lib/youtube/getVideoIdFromUrl'
import { redirect } from 'next/navigation'

export default async function analyseYoutubeVideo(formData: FormData) {
    const url = formData.get('url')?.toString();
    if (!url) return;

    // const videoId = getVideoIdFromUrl(url);
    const videoId = 'test_video_id'; // Placeholder for actual video ID extraction logic
    if (!videoId) return;

    redirect(`/video/${videoId}/analysis`);

}
