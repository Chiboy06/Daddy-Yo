'use client'

import { getVideoDetails } from "@/actions/getVideoDetails";
import { VideoDetails } from "@/types/type";
import { Calendar, Eye, MessageCircle, ThumbsUp, Play, Share2, Bookmark, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

function YoutubeVideoDetails({ videoId }: { videoId: string }) {
    const [video, setVideo] = useState<VideoDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [showDescription, setShowDescription] = useState(false);
    const [isHovered, setIsHovered] = useState("");

    useEffect(() => {
        const fetchVideoDetails = async () => {
            setLoading(true);
            try {
                const video = await getVideoDetails(videoId);
                setVideo(video);
            } catch (error) {
                console.error("Error fetching video details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideoDetails();
    }, [videoId]);

    if (loading) {
        return (
            <div className="animate-pulse rounded-xl bg-gray-100 p-6 dark:bg-gray-800">
                <div className="mb-6 h-64 w-full rounded-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-4 h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div>
                        <div className="mb-2 h-4 w-40 rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-3 w-24 rounded bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 @lg:grid-cols-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-16 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
                    ))}
                </div>
            </div>
        );
    }

    if (!video) return (
        <div className="flex h-48 w-full items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-400">Video not found</p>
        </div>
    );

    // Format numbers with commas
    const formatNumber = (num: number): string => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // Format date to be more readable
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    const handleStatHover = (stat: string) => {
        setIsHovered(stat);
    };

    const statCards = [
        { 
            id: "published",
            icon: Calendar, 
            label: "Published", 
            value: formatDate(video.publishedAt),
            color: "from-blue-500 to-cyan-500"
        },
        { 
            id: "views",
            icon: Eye, 
            label: "Views", 
            value: video.views,
            color: "from-green-500 to-emerald-500" 
        },
        { 
            id: "likes",
            icon: ThumbsUp, 
            label: "Likes", 
            value: video.likes,
            color: "from-red-500 to-pink-500" 
        },
        { 
            id: "comments",
            icon: MessageCircle, 
            label: "Comments", 
            value: video.comments,
            color: "from-purple-500 to-violet-500" 
        }
    ];

    return (
        <div className="overflow-hidden p-2 rounded-xl transition-colors duration-500 dark:bg-gray-800 dark:text-white">
            <div className="flex flex-col gap-6">
                {/* Thumbnail with overlay play button */}
                <div 
                    className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                >
                    <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                            <Play className="h-8 w-8" fill="white" />
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <Image
                        src={video.thumbnails}
                        alt={video.title}
                        width={500}
                        height={500}
                        className="aspect-video w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Video Title with animated underline */}
                <div className="space-y-3">
                    <h2 className="relative inline-block text-2xl font-bold leading-tight text-gray-900 transition-colors dark:text-white @lg:text-3xl">
                        {video.title}
                        <span className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
                    </h2>
                </div> 

                {/* Channel Info with animated border and hover effects */}
                <div className="flex items-center gap-4">
                    <div className="group relative overflow-hidden">
                        <div className="absolute -inset-1 animate-spin-slow rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-70 blur-sm transition-opacity duration-300 group-hover:opacity-100"></div>
                        <Image
                            src={video.channel.thumbnails}
                            alt={video.channel.title}
                            width={48}
                            height={48}
                            className="relative h-12 w-12 rounded-full border-2 border-white object-cover shadow-md transition-transform duration-300 group-hover:scale-105 dark:border-gray-700"
                        />
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-gray-800 transition-colors dark:text-gray-200">{video.channel.title}</p>
                        <p className="text-sm text-gray-600 transition-colors dark:text-gray-400">
                            {formatNumber(parseInt(video.channel.subscribers))} subscribers
                        </p>
                    </div>
                    <div className="ml-auto flex gap-2">
                        <button className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 transition-all hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                            <Share2 className="h-4 w-4" /> Share
                        </button>
                        <button className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 transition-all hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                            <Bookmark className="h-4 w-4" /> Save
                        </button>
                    </div>
                </div>

                {/* Description toggle */}
                {video.description && (
                    <div className="rounded-lg bg-gray-50 p-4 transition-colors dark:bg-gray-700/50">
                        <button 
                            onClick={() => setShowDescription(!showDescription)}
                            className="flex w-full items-center justify-between font-medium text-gray-700 transition-colors dark:text-gray-300"
                        >
                            <span>Description</span>
                            {showDescription ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </button>
                        
                        {showDescription && (
                            <div className="mt-3 text-sm text-gray-600 transition-colors dark:text-gray-400">
                                <p className="whitespace-pre-line">{video.description}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Interactive Stats Cards with hover effects */}
                <div className="grid grid-cols-2 gap-4 pt-2 @lg:grid-cols-4">
                    {statCards.map((stat) => (
                        <div 
                            key={stat.id}
                            className={`group relative overflow-hidden rounded-lg p-4 transition-all duration-300 
                                ${isHovered === stat.id ? 'ring-2 ring-offset-2 dark:ring-offset-gray-800' : ''} 
                                ${isHovered === stat.id ? `ring-${stat.color.split(' ')[1]}` : 'bg-gray-50 dark:bg-gray-700/50'}`}
                            onMouseEnter={() => handleStatHover(stat.id)}
                            onMouseLeave={() => handleStatHover("")}
                        >
                            {/* Gradient background on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}></div>
                            
                            <div className="relative flex items-center gap-2 mb-1">
                                <stat.icon className={`h-4 w-4 transition-colors duration-300 ${isHovered === stat.id ? `text-${stat.color.split(' ')[1]}` : 'text-gray-600 dark:text-gray-400'}`} />
                                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                            </div>
                            <p className="relative text-sm font-medium text-gray-800 transition-colors dark:text-white">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default YoutubeVideoDetails;