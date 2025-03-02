'use client'
import React from 'react'
import Form from "next/form"
import AnalyseButton from './AnalyseButton'
import analyseYoutubeVideo from '@/actions/analyseYoutubeVideo'
import { Youtube } from 'lucide-react'
import { useTheme } from 'next-themes'

function YoutubeVideoForm() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={`w-full max-w-2xl mx-auto ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl shadow-lg border transition-colors duration-200`}>
      <div className="mb-4 text-center">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${isDarkMode ? 'bg-red-900 text-red-400' : 'bg-red-100 text-red-600'}`}>
          <Youtube size={24} />
        </div>
        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Analyze Your YouTube Video</h3>
        <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Get instant AI-powered insights to optimize your content</p>
      </div>
      
      <Form
        action={analyseYoutubeVideo}
        className='flex flex-col sm:flex-row gap-3 items-stretch'
      >
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Youtube size={18} className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          </div>
          <input 
            name='url' 
            type='text' 
            placeholder='Paste your YouTube URL here'
            className={`w-full px-4 py-3 pl-10 rounded-lg text-sm focus:outline-none
            focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 
            ${isDarkMode 
              ? 'bg-gray-900 border-gray-700 text-gray-300 placeholder-gray-500' 
              : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'} border`}
          />
        </div>
        <AnalyseButton />
      </Form>
      
      <div className={`mt-4 text-xs text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        Works with any public YouTube video • Analysis takes ~30 seconds
      </div>
    </div>
  )
}

export default YoutubeVideoForm