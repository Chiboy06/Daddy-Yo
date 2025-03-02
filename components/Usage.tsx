import { useSchematicEntitlement, useSchematicIsPending } from '@schematichq/schematic-react'
import React from 'react'
import { Progress } from './ui/progress';
import { FeatureFlag } from '@/features/flags';
import { Sparkles, AlertTriangle, Lock, PieChart } from 'lucide-react';

function Usage({
    featureFlag,
    title
}: {
    featureFlag: FeatureFlag,
    title: string,
}) {
    const isPending = useSchematicIsPending();
    const { featureAllocation, featureUsage, value: isFeatureEnabled } = useSchematicEntitlement(featureFlag)
    const hasUsedAllTokens = featureUsage && featureAllocation && featureUsage >= featureAllocation;

    if (isPending) { 
        return (
            <div className="flex items-center justify-center p-8 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="animate-pulse flex space-x-2 items-center">
                    <div className="h-2 w-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-bounce delay-75"></div>
                    <div className="h-2 w-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-bounce delay-150"></div>
                    <span className="text-slate-600 dark:text-slate-400 ml-2 font-medium">Loading usage data...</span>
                </div>
            </div>
        )
    }

    if (hasUsedAllTokens){
        return (
            <div className='bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-red-100 dark:border-red-900/30 p-6 transition-all duration-200'>
                <div className='flex justify-between items-center mb-4'>
                    <div className="flex items-center gap-2">
                        <AlertTriangle className="text-red-500 dark:text-red-400 h-5 w-5" />
                        <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>{title}</h2>
                    </div>
                    <div className='px-4 py-2 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-100 dark:border-red-800/30'>
                        <span className='font-medium text-red-700 dark:text-red-400'>{featureUsage}</span>
                        <span className='mx-2 text-red-600 dark:text-red-500'>/</span>
                        <span className='font-medium text-red-700 dark:text-red-400'>{featureAllocation}</span>
                    </div>
                </div>

                <div className='relative'>
                    <Progress
                        value={100}
                        className='h-3 rounded-full bg-gray-100 dark:bg-gray-700 [&>*]:bg-red-600 dark:[&>*]:bg-red-500'
                    />
                    <div className="flex items-center gap-2 mt-3">
                        <p className="text-red-600 dark:text-red-400 font-medium">
                            You have reached the maximum allowed usage. 
                            Please upgrade your plan to continue using this feature.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    if (!isFeatureEnabled) {
        return (
            <div className='bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6 transition-all duration-200'>
                <div className='flex justify-between items-center mb-4'>
                    <div className="flex items-center gap-2">
                        <Lock className="text-slate-500 dark:text-slate-400 h-5 w-5" />
                        <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>{title}</h2>
                    </div>
                    <div className='px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600'>
                        <span className='font-medium text-slate-600 dark:text-slate-300'>Feature Disabled</span>
                    </div>
                </div>

                <div className='relative'>
                    <div className="h-3 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                        <div className="h-full w-full bg-slate-300 dark:bg-slate-600 opacity-30 bg-striped"></div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center">
                            <Sparkles className="h-4 w-4 mr-1" /> Upgrade to unlock this feature
                        </p>
                    </div>
                </div>
            </div>
        )
    };

    const progress = ((featureUsage || 0) / (featureAllocation || 1)) * 100;
    
    const getProgressColor = (percent: number) => {
        if (percent >= 80) return "[&>*]:bg-gradient-to-r [&>*]:from-orange-500 [&>*]:to-red-500 dark:[&>*]:from-orange-400 dark:[&>*]:to-red-400";
        if (percent >= 60) return "[&>*]:bg-gradient-to-r [&>*]:from-yellow-400 [&>*]:to-orange-400 dark:[&>*]:from-yellow-300 dark:[&>*]:to-orange-300";
        return "[&>*]:bg-gradient-to-r [&>*]:from-emerald-400 [&>*]:to-teal-500 dark:[&>*]:from-emerald-300 dark:[&>*]:to-teal-400";
    }

    const getStatusBgColor = (percent: number) => {
        if (percent >= 80) return "bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800/30";
        if (percent >= 60) return "bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800/30";
        return "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/30";
    }

    const getStatusTextColor = (percent: number) => {
        if (percent >= 80) return "text-red-700 dark:text-red-400";
        if (percent >= 60) return "text-orange-700 dark:text-orange-400";
        return "text-emerald-700 dark:text-emerald-400";
    }

    const progressColor = getProgressColor(progress);
    const statusBgColor = getStatusBgColor(progress);
    const statusTextColor = getStatusTextColor(progress);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6 transition-all duration-200">
            <div className='flex justify-between items-center mb-4'>
                <div className="flex items-center gap-2">
                    <PieChart className="text-indigo-500 dark:text-indigo-400 h-5 w-5" />
                    <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>{title}</h2>
                </div>
                <div className={`px-4 py-2 rounded-lg border flex items-center ${statusBgColor}`}>
                    <span className={`font-medium ${statusTextColor}`}>{featureUsage}</span>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>/</span>
                    <span className='font-medium text-gray-600 dark:text-gray-300'>{featureAllocation}</span>
                </div>
            </div>
            <div className='relative'>
                <Progress
                    value={progress}
                    className={`h-3 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden ${progressColor}`}
                />

                {progress >= 80 && (
                    <div className="flex items-center gap-2 mt-3">
                        <AlertTriangle className="h-4 w-4 text-red-500 dark:text-red-400" />
                        <p className="text-red-600 dark:text-red-400 font-medium text-sm">
                            {progress >= 100 
                                ? "You have reached the maximum allowed usage. Please upgrade your plan to continue." 
                                : "WARNING: You are approaching your usage limit"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Usage