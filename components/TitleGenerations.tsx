'use client'

import { FeatureFlag } from "@/features/flags";
import Usage from "./Usage";
import { useSchematicEntitlement } from "@schematichq/schematic-react";
import { useUser } from "@clerk/nextjs";
import { Copy, Sparkles } from "lucide-react";
import { useState } from "react";
import "../app/globals.css";

interface Title {
    id: string;
    title: string;
  }

function TitleGenerations({videoId}: {videoId: string}) {
    const { user: _user } = useUser();
    console.log(videoId,_user)
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const titles: Title[] = [];
    const { value: isTitleGenerationEnabled } = useSchematicEntitlement(
        FeatureFlag.TITLE_GENERATION
    );

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between mb-5">
                <div className="min-w-52">
                    <Usage
                        featureFlag={FeatureFlag.TITLE_GENERATION}
                        title="Title Generation"
                    />
                </div>
                <div className="text-xs font-medium text-indigo-500 dark:text-indigo-400">
                    {titles?.length ? `${titles.length} titles generated` : ''}
                </div>
            </div>
            
            <div className="space-y-3 mt-4 max-h-[240px] overflow-y-auto pr-1 custom-scrollbar">
                {titles?.map((title, index) => (
                    <div 
                        key={index} 
                        className="group relative p-4 rounded-lg border border-gray-100 dark:border-gray-700 
                        bg-gray-50 dark:bg-gray-700/50 hover:border-indigo-200 dark:hover:border-indigo-700 
                        hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
                                {title.title}
                            </p>
                            <button
                                onClick={() => copyToClipboard(title.title, index)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5
                                hover:bg-indigo-100 dark:hover:bg-indigo-800/50 rounded-md"
                                title="Copy to clipboard"
                            >
                                {copiedIndex === index ? (
                                    <span className="text-green-500 dark:text-green-400 text-xs font-medium">Copied!</span>
                                ) : (
                                    <Copy className="text-indigo-500 dark:text-indigo-400 w-4 h-4 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-200" />
                                )}
                            </button>
                        </div>
                    </div>
                ))}

                {!titles?.length && !!isTitleGenerationEnabled && (
                    <div className="text-center py-12 px-6 rounded-lg mt-4 border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                        <div className="flex justify-center mb-3">
                            <Sparkles className="text-indigo-400 dark:text-indigo-500 w-8 h-8 opacity-75" />
                        </div>
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">No titles generated yet</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">Generate engaging titles for your videos to see them appear here</p>
                    </div>
                )}
            </div>
            
            {titles?.length > 0 && (
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Click on a title to copy it to your clipboard
                    </p>
                </div>
            )}
        </div>
    );
}

// Add this CSS to your global styles
// const globalStyles = `
// .custom-scrollbar::-webkit-scrollbar {
//     width: 4px;
// }
// .custom-scrollbar::-webkit-scrollbar-track {
//     background: transparent;
// }
// .custom-scrollbar::-webkit-scrollbar-thumb {
//     background-color: rgba(156, 163, 175, 0.3);
//     border-radius: 20px;
// }
// .dark .custom-scrollbar::-webkit-scrollbar-thumb {
//     background-color: rgba(156, 163, 175, 0.2);
// }
// `;

export default TitleGenerations;