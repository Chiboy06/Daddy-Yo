import { FeatureFlag } from '@/features/flags';
import { useUser } from '@clerk/nextjs';
import { useSchematicEntitlement } from '@schematichq/schematic-react';
import React, { useState, useEffect } from 'react';
import { Clock, FileText, AlertTriangle, Sparkles } from 'lucide-react';
import Usage from './Usage';

interface TranscriptEntry {
  timestamp: number;
  text: string;
}

interface TranscriptData {
  transcript: TranscriptEntry[];
  cache: string;
}

function Transcription({ videoId }: { videoId: string }) {
  const [transcript, setTranscript] = useState<TranscriptData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { featureUsageExceeded } = useSchematicEntitlement(
    FeatureFlag.TRANSCRIPTION
  );

  const { user } = useUser();

  // Fetch transcript data on component mount or when videoId changes
  useEffect(() => {
    const fetchTranscription = async () => {
      if (!videoId || featureUsageExceeded) return;
      
      try {
        setIsLoading(true);
        // Placeholder for actual API call to fetch transcription data
        // const response = await fetchTranscriptFromConvex(videoId, user?.id);
        setTranscript(null);
      } catch (error) {
        console.error('Failed to fetch transcription:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranscription();
  }, [videoId, user, featureUsageExceeded]);

  // Format timestamp to display as MM:SS instead of full time
  const formatTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="border border-purple-200 dark:border-purple-900 bg-gradient-to-br from-white to-violet-50 dark:from-gray-900 dark:to-indigo-950 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="bg-violet-200 dark:bg-violet-900 p-2 rounded-lg">
            <FileText className="text-violet-700 dark:text-violet-300 w-5 h-5" />
          </div>
          <h3 className="font-bold text-violet-900 dark:text-violet-200 tracking-tight">
            <span className="relative">
              Video Transcription
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-violet-500 to-transparent"></span>
            </span>
          </h3>
        </div>
        <Usage
          featureFlag={FeatureFlag.TRANSCRIPTION}
          title="Transcribe Video"
        />
      </div>

      {/* Transcription Section */}
      {!featureUsageExceeded ? (
        <>
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-violet-500 dark:bg-violet-500 rounded-full animate-pulse delay-150"></div>
                <div className="w-3 h-3 bg-violet-400 dark:bg-violet-600 rounded-full animate-pulse delay-300"></div>
                <span className="ml-2 text-violet-700 dark:text-violet-300 font-medium">Processing transcript...</span>
              </div>
            </div>
          ) : transcript ? (
            <div className="flex flex-col gap-2 max-h-64 overflow-y-auto rounded-md p-4 bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-30 backdrop-blur-sm border border-violet-100 dark:border-violet-900 scrollbar-thin scrollbar-thumb-violet-200 dark:scrollbar-thumb-violet-800">
              {transcript.transcript.map((entry, index) => (
                <div 
                  key={index} 
                  className="flex gap-3 p-3 hover:bg-violet-50 dark:hover:bg-violet-900/30 rounded-lg transition-all duration-200"
                >
                  <span className="text-xs font-mono bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 py-1 px-2 rounded-md flex items-center whitespace-nowrap">
                    <Clock className="w-3 h-3 mr-1" />
                    {formatTimestamp(entry.timestamp)}
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{entry.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-40 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-dashed border-gray-200 dark:border-gray-700 transition-all duration-300">
              <div className="bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mb-3">
                <AlertTriangle className="w-6 h-6 text-violet-500 dark:text-violet-400" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">No transcription available for this video</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 max-w-xs text-center">Try selecting a different video or check back later</p>
              <div className="mt-4 flex items-center text-xs text-violet-600 dark:text-violet-400">
                <Sparkles className="w-3 h-3 mr-1" />
                <span>Premium feature</span>
              </div>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}

export default Transcription;