import React from 'react'
import Form from "next/form"
import AnalyseButton from './AnalyseButton'
import analyseYoutubeVideo from '@/actions/analyseYoutubeVideo'
import { Youtube } from 'lucide-react'

function YoutubeVideoForm() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
      <div className="mb-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-red-900 text-red-400 rounded-full mb-3">
          <Youtube size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">Analyze Your YouTube Video</h3>
        <p className="text-gray-400 text-sm mb-4">Get instant AI-powered insights to optimize your content</p>
      </div>
      
      <Form
        action={analyseYoutubeVideo}
        className='flex flex-col sm:flex-row gap-3 items-stretch'
      >
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Youtube size={18} className="text-gray-500" />
          </div>
          <input 
            name='url' 
            type='text' 
            placeholder='Paste your YouTube URL here'
            className='w-full px-4 py-3 pl-10 bg-gray-900 border border-gray-700 rounded-lg text-sm text-gray-300 focus:outline-none
            focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 placeholder-gray-500'
          />
        </div>
        <AnalyseButton />
      </Form>
      
      <div className="mt-4 text-xs text-gray-500 text-center">
        Works with any public YouTube video • Analysis takes ~30 seconds
      </div>
    </div>
  )
}

export default YoutubeVideoForm