'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'

function AnalyseButton() {
  const { pending } = useFormStatus()
  
  return (
    <button
      type="submit"
      className="bg-gradient-to-r from-green-600 to-green-500 text-white font-bold py-3 px-6 rounded-lg hover:from-green-700 hover:to-green-600 focus:outline-none
      focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all
      duration-200 min-w-32 flex items-center justify-center"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 size={18} className="animate-spin mr-2" />
          Analyzing...
        </>
      ) : (
        'Analyze Now'
      )}
    </button>
  )
}

export default AnalyseButton