"use client"
import ThumbnailGeneration from '@/components/ThumbnailGeneration'
import TitleGenerations from '@/components/TitleGenerations'
import Transcription from '@/components/Transcription'
import Usage from '@/components/Usage'
import YoutubeVideoDetails from '@/components/YoutubeVideoDetails'
import { FeatureFlag } from '@/features/flags'
import { useParams } from 'next/navigation'
import React from 'react'
import { MessageCircle, BarChart, Settings } from 'lucide-react'

function AnalysisPage() {
    const params = useParams<{ videoId: string }>();
    const { videoId } = params;
    
    return (
        <div className="xl:container mx-auto px-4 dark:bg-gray-500 md:px-6 py-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Video Analysis Dashboard</h1>
                <p className="text-gray-600">Reviewing YouTube video: {videoId}</p>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* Left Side - Analysis Tools */}
                <div className='order-2 lg:order-1 flex flex-col gap-6'>
                    {/* Control Panel */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold text-lg">Analysis Controls</h2>
                                <button className="p-2 rounded-lg hover:bg-gray-100">
                                    <Settings size={18} className="text-gray-500" />
                                </button>
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <Usage
                                featureFlag={FeatureFlag.ANALYSE_VIDEO}
                                title="Analyze Video"
                            />
                        </div>
                    </div>
                    
                    {/* YouTube Details Section */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <YoutubeVideoDetails videoId={videoId} />
                    </div>
                    
                    {/* Content Generation Tools */}
                    <div className="gap-6 space-y-3">
                        {/* Thumbnail Section */}
                        <ThumbnailGeneration videoId={videoId} />

                        
                        {/* Title Section */}
                        <TitleGenerations videoId={videoId} />
                    </div>
                    
                    {/* Transcription Section */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <Transcription videoId={videoId} />
                    </div>
                </div>
                
                {/* Right Side - AI Chat */}
                <div className='order-1 lg:order-2 lg:sticky lg:top-20 h-[500px] md:h-[calc(100vh-6rem)]'>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full flex flex-col overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <MessageCircle className="text-green-500" size={20} />
                                    <h2 className="font-semibold text-lg">AI Assistant</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BarChart size={18} className="text-gray-500" />
                                    <span className="text-sm text-gray-500">Ready</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex-grow p-6 bg-gray-50">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-4">
                                <p className="text-gray-800">Hello! I&apos; analyzing your YouTube video. Ask me anything about optimizing your content or understanding viewer engagement.</p>
                            </div>
                            {/* Chat content would go here */}
                        </div>
                        
                        <div className="p-4 border-t border-gray-200">
                            <div className="flex items-center gap-2">
                                <input 
                                    type="text" 
                                    placeholder="Ask about your video..."
                                    className="flex-grow p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                />
                                <button className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                                    <MessageCircle size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalysisPage