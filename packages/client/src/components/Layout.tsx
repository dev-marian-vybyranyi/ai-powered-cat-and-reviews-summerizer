import { useState } from 'react';
import { HiChatBubbleLeftRight, HiStar } from 'react-icons/hi2';
import ChatBot from './chat/ChatBot';
import ReviewList from './reviews/ReviewList';

export default function Layout() {
   const [activeTab, setActiveTab] = useState<'chat' | 'reviews'>('chat');

   return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
         <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
               <nav className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                  <button
                     onClick={() => setActiveTab('chat')}
                     className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                        activeTab === 'chat'
                           ? 'bg-white text-indigo-600 shadow-sm'
                           : 'text-slate-600 hover:text-slate-900'
                     }`}
                  >
                     <HiChatBubbleLeftRight className="h-4 w-4" />
                     Chat
                  </button>
                  <button
                     onClick={() => setActiveTab('reviews')}
                     className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                        activeTab === 'reviews'
                           ? 'bg-white text-indigo-600 shadow-sm'
                           : 'text-slate-600 hover:text-slate-900'
                     }`}
                  >
                     <HiStar className="h-4 w-4" />
                     Reviews
                  </button>
               </nav>
            </div>
         </header>

         <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 flex flex-col">
            <div className="mb-6 border-b border-slate-100 pb-6">
               {activeTab === 'chat' ? (
                  <div>
                     <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Chat with WonderWorld 🎡
                     </h2>
                     <p className="mt-2 text-base text-slate-500 max-w-2xl">
                        Ask any question to our AI assistant about the themed
                        amusement park WonderWorld!
                     </p>
                  </div>
               ) : (
                  <div>
                     <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Reviews
                     </h2>
                     <p className="mt-2 text-base text-slate-500 max-w-2xl">
                        These are just reviews from our customers about our
                        services and products. You can read them or generate a
                        quick summary.
                     </p>
                  </div>
               )}
            </div>

            <div className="flex-1 bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 sm:p-8 flex flex-col min-h-130">
               {activeTab === 'chat' ? (
                  <div className="flex-1 flex flex-col h-130">
                     <ChatBot />
                  </div>
               ) : (
                  <div className="flex-1">
                     <ReviewList productId={4} />
                  </div>
               )}
            </div>
         </main>
      </div>
   );
}
