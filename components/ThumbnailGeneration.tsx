import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import Usage from './Usage';
import { FeatureFlag } from '@/features/flags';
import Image from 'next/image';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Download, RefreshCw, Image as ImageIcon, ThumbsUp } from 'lucide-react';

function ThumbnailGeneration({videoId}: {videoId: string}) {
    const { user } = useUser();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    // const [isHovering, setIsHovering] = useState<string | null>(null);

    const images = useQuery(api.images.getImages, {
        videoId,
        userId: user?.id ?? "",
    });

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl === selectedImage ? null : imageUrl);
    };

    return (
        <div className='rounded-xl flex flex-col p-6 border border-gray-200 shadow-md bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 transition-all duration-300'>
            <div className="flex justify-between items-center mb-8">
                <div className="min-w-52">
                    <Usage
                        featureFlag={FeatureFlag.IMAGE_GENERATION}
                        title="Thumbnail Generator"
                    />
                </div>
                
                {images && images.length > 0 && (
                    <button className="flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors px-4 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30">
                        <RefreshCw className="w-4 h-4" />
                        Regenerate
                    </button>
                )}
            </div>

            {/* Generated Thumbnails */}
            {images && images.length > 0 && (
                <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((image) => (
                            image.url && (
                                <div 
                                    key={image._id}
                                    className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 group ${
                                        selectedImage === image.url 
                                            ? 'ring-4 ring-emerald-500 dark:ring-emerald-400 shadow-lg scale-105' 
                                            : 'hover:shadow-xl hover:translate-y-[-4px]'
                                    }`}
                                    onClick={() => handleImageClick(image.url || '')}
                                    // onMouseEnter={() => setIsHovering(image._id)}
                                    // onMouseLeave={() => setIsHovering(null)}
                                >
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={image.url}
                                            alt={`Thumbnail option`}
                                            width={300}
                                            height={200}
                                            className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-110"
                                        />
                                        
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                            <div className="absolute bottom-3 left-3">
                                                <ThumbsUp className="w-4 h-4 text-white inline-block mr-1" />
                                                <span className="text-xs text-white font-medium">Quality score: 98%</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {selectedImage === image.url && (
                                        <div className="absolute inset-0 bg-emerald-500 bg-opacity-20 dark:bg-emerald-600 dark:bg-opacity-30 flex items-center justify-center backdrop-blur-sm">
                                            <button className="bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 p-3 rounded-full shadow-lg hover:bg-emerald-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
                                                <Download className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )
                        ))}
                    </div>
                    
                    {selectedImage && (
                        <div className="flex justify-center mt-6">
                            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-500 dark:hover:to-teal-500 text-white px-8 py-3 rounded-full flex items-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl transform hover:translate-y-[-2px]">
                                <Download className="w-5 h-5" />
                                <span className="font-medium">Download Selected Thumbnail</span>
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Empty state */}
            {!images?.length && (
                <div className="text-center py-16 px-6 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <ImageIcon size={32} className="text-emerald-500 dark:text-emerald-400 opacity-80" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">No thumbnails yet</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-8 leading-relaxed">
                        Generate eye-catching thumbnails based on your video content to increase click-through rates and viewer engagement.
                    </p>
                    <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-500 dark:hover:to-teal-500 text-white px-8 py-3 rounded-full flex items-center gap-3 mx-auto transition-all duration-300 shadow-md hover:shadow-xl transform hover:translate-y-[-2px]">
                        <RefreshCw className="w-5 h-5" />
                        <span className="font-medium">Generate Thumbnails</span>
                    </button>
                </div>
            )}
        </div>
    )
}

export default ThumbnailGeneration