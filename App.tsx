import React, { useState } from 'react';
import { Tab } from './types';
import { ChatView } from './components/ChatView';
import { ImageView } from './components/ImageView';
import { TTSView } from './components/TTSView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('chat');

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Sidebar */}
      <div className="w-20 lg:w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between transition-all duration-300">
        <div>
          <div className="p-6 flex items-center gap-3">
             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg flex-shrink-0"></div>
             <span className="text-xl font-bold tracking-tight hidden lg:block">Valhalla</span>
          </div>
          
          <nav className="mt-8 px-3 space-y-2">
            <button
              onClick={() => setActiveTab('chat')}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                activeTab === 'chat' 
                  ? 'bg-blue-600/10 text-blue-400 font-medium' 
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              <span className="hidden lg:block">Chat</span>
            </button>
            
            <button
              onClick={() => setActiveTab('image')}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                activeTab === 'image' 
                  ? 'bg-purple-600/10 text-purple-400 font-medium' 
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              <span className="hidden lg:block">Image Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('tts')}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                activeTab === 'tts' 
                  ? 'bg-emerald-600/10 text-emerald-400 font-medium' 
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
              <span className="hidden lg:block">Speech</span>
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800">
           <div className="flex items-center gap-3 px-2">
             <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">
               H
             </div>
             <div className="hidden lg:block">
               <p className="text-sm font-medium text-slate-200">Hex (Admin)</p>
               <p className="text-xs text-slate-500">Staff Engineer</p>
             </div>
           </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden p-4 md:p-6 lg:p-8 bg-slate-900 relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-900/0 to-slate-900/0"></div>
        <div className="relative h-full z-10">
          {activeTab === 'chat' && <ChatView />}
          {activeTab === 'image' && <ImageView />}
          {activeTab === 'tts' && <TTSView />}
        </div>
      </main>
    </div>
  );
};

export default App;
