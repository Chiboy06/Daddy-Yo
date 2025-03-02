// import AgentPulse from "@/components/AgentPulse";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { Brain, FileText, ListVideo, MessageCircle, Type, Image, Video, MessageSquare } from "lucide-react";
// import { useTheme } from "next-themes";

const features = [
  {
    title: "AI Analysis",
    description: "Unlock the full potential of your content with our AI brain! It doesn't just analyze—it unveils the hidden stories in your customer interactions, revealing emotional journeys and engagement patterns you never knew existed.",
    icon: Brain,
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-700 dark:text-blue-400",
    animation: "pulse"
  },
  {
    title: "Smart Transcription",
    description: "Words come to life with our magical transcription engine. It captures every nuance, handles multiple speakers, and even detects emotions—making your content accessible and searchable in seconds!",
    icon: FileText,
    iconBg: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-700 dark:text-green-400"
  },
  {
    title: "Eye-Catching Thumbnails",
    description: "First impressions matter! Our thumbnail wizard analyzes your video to find that perfect moment—the exact frame that will make viewers stop scrolling and start watching.",
    icon: Image,
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-700 dark:text-purple-400"
  },
  {
    title: "Viral Title Generation",
    description: "Say goodbye to boring titles! Our title generator studies top-performing content to craft headlines that spark curiosity, evoke emotion, and practically beg to be clicked.",
    icon: Type,
    iconBg: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-700 dark:text-red-400"
  },
  {
    title: "Shot Script Wizard",
    description: "Transform your ideas into professional shot lists in seconds. Our script wizard helps you visualize scenes, plan transitions, and organize your shooting schedule like a seasoned director.",
    icon: ListVideo,
    iconBg: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-700 dark:text-amber-400"
  },
  {
    title: "Discuss with Creator AI",
    description: "Meet your new creative partner! Bounce ideas, get feedback, or ask for suggestions from our AI that understands your vision and helps bring it to life with personalized guidance.",
    icon: MessageCircle,
    iconBg: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-700 dark:text-teal-400"
  }
];

const steps = [
  {
    title: "Connect Your Content",
    description: "Paste your YouTube URL and watch Daddy Yo spring into action instantly.",
    icon: Video,
    color: "bg-purple-500 dark:bg-purple-600",
    lightColor: "bg-purple-100 dark:bg-purple-900"
  },
  {
    title: "AI Magic Happens",
    description: "Our powerful AI dissects your video, spotting opportunities that human eyes might miss.",
    icon: Brain,
    color: "bg-green-500 dark:bg-green-600",
    lightColor: "bg-green-100 dark:bg-green-900"
  },
  {
    title: "Get Actionable Insights",
    description: "Receive clear, ready-to-implement suggestions that will transform your content strategy.",
    icon: MessageSquare,
    color: "bg-blue-500 dark:bg-blue-600",
    lightColor: "bg-blue-100 dark:bg-blue-900"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200">
      {/* Hero - Enhanced for greater impact */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 pt-20 pb-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-500 dark:bg-blue-700 opacity-10 dark:opacity-20 blur-2xl"></div>
          <div className="absolute top-40 right-20 h-40 w-40 rounded-full bg-purple-500 dark:bg-purple-700 opacity-10 dark:opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 h-60 w-60 rounded-full bg-teal-500 dark:bg-teal-700 opacity-5 dark:opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-12 text-center">
            <div className="animate-float rounded-full bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-700 dark:to-blue-700 p-1">
              <div className="rounded-full bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-30 p-3">
                <Brain className="h-8 w-8 text-blue-600 dark:text-white" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 dark:from-blue-400 dark:via-purple-400 dark:to-teal-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl md:text-7xl">
                Daddy Yo
                <span className="block text-2xl font-bold text-gray-700 dark:text-gray-300 sm:text-3xl">
                  Your Ultimate Content Powerhouse
                </span>
              </h1>
            </div>
            
            <p className="max-w-2xl text-xl text-gray-700 dark:text-gray-300">
              Transform your creative vision into reality with AI that understands, adapts, and delivers.
            </p>

            <YoutubeVideoForm/>
            
            {/* <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 dark:from-purple-600 dark:to-blue-600 dark:hover:from-purple-700 dark:hover:to-blue-700 px-8 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl">
                Get Started Now
              </button>
              <button className="rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-50 px-8 py-3 font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm transition-all hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                Watch Demo
              </button>
            </div> */}
            
            <div className="mt-10 w-full max-w-4xl rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 p-6 backdrop-blur-sm shadow-sm dark:shadow-none">
              {/* <div className="flex flex-wrap justify-center gap-8">
                <img src="/api/placeholder/120/40" alt="Brand logo" className="h-10 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0" />
                <img src="/api/placeholder/120/40" alt="Brand logo" className="h-10 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0" />
                <img src="/api/placeholder/120/40" alt="Brand logo" className="h-10 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0" />
              </div> */}
              <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                Join 10,000+ content creators already leveraging AI
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none" className="text-gray-100 dark:text-gray-900">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 dark:bg-gray-900 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Power Features for Content Creators</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return(
                <div key={index} className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-50 p-6 backdrop-blur-sm transition-all hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md dark:hover:bg-gray-800 dark:shadow-none">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg} ${feature.iconColor}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    {/* How it works section */}
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Meet Your AI Agent in 3 Simple Steps
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            From video to insights in minutes. No complicated setup. No learning curve.
          </p>
        </div>
        
        {/* Step timeline with connecting lines */}
        <div className="relative mx-auto max-w-4xl">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-200 dark:bg-gray-800"></div>
          
          <div className="relative z-10 space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`z-10 flex h-16 w-16 items-center justify-center rounded-full ${step.color} text-xl font-bold text-white`}>
                  <div className={`absolute h-24 w-24 rounded-full ${step.lightColor} opacity-20 blur-lg`}></div>
                  {index + 1}
                </div>
                <div className={`mt-8 flex-1 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-50 p-8 backdrop-blur-sm shadow-sm dark:shadow-none md:mt-0 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 z-0 h-32 w-6 -translate-x-1/2">
                    <svg className="h-full w-full text-gray-300 dark:text-gray-700" viewBox="0 0 24 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0V128" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

     {/* Footer */}
      <section className="relative overflow-hidden bg-gradient-to-t from-gray-100 to-white dark:from-black dark:to-gray-900 py-20">
        {/* Animated particle effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-20 h-20 w-20 rounded-full bg-blue-500 dark:bg-blue-700 opacity-5 dark:opacity-10 blur-2xl"></div>
          <div className="absolute top-40 right-10 h-32 w-32 rounded-full bg-purple-500 dark:bg-purple-700 opacity-5 dark:opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 h-40 w-40 rounded-full bg-teal-500 dark:bg-teal-700 opacity-5 dark:opacity-10 blur-3xl"></div>
          <div className="absolute bottom-40 right-1/4 h-32 w-32 rounded-full bg-pink-500 dark:bg-pink-700 opacity-5 dark:opacity-10 blur-3xl"></div>
        </div>
        
        {/* Decorative SVG background element */}
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="text-gray-900 dark:text-blue-600">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50" stroke="url(#grad)" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="mb-12 max-w-3xl text-center">
              <span className="mb-2 inline-block font-mono text-sm tracking-wider text-purple-600 dark:text-purple-400">ELEVATE YOUR CONTENT</span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
                Ready to Transform Your Content <br />
                With Daddy Yo?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Join the visionaries who&apos;ve elevated their content strategy through AI-powered insights. Your audience is waiting.
              </p>
            </div>
            
            <div className="mb-12 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 px-8 py-3 font-medium text-white shadow-md dark:shadow-lg">
                <span className="relative z-10">Get Started Now</span>
                <div className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"></div>
              </button>
              <button className="rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 px-8 py-3 font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm transition-all hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                Schedule a Demo
              </button>
            </div>
            
            <div className="flex w-full max-w-xl flex-col justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
              <div className="flex items-center justify-center space-x-2">
                <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2">
                  <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Enterprise-grade security</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2">
                  <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">14-day money-back guarantee</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2">
                  <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Lightning-fast insights</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container relative z-10 mx-auto mt-24 border-t border-gray-200 dark:border-gray-800 px-6 pt-8">
          <div className="flex flex-col justify-between space-y-8 md:flex-row md:space-y-0">
            <div>
              <div className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                © 2025 Daddy Yo. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Contact Us
                </a>
              </div>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="rounded-full bg-gray-100 dark:bg-gray-800 p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="rounded-full bg-gray-100 dark:bg-gray-800 p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}