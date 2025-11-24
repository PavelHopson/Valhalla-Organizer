import React, { useState } from 'react';
import { createUser } from '../services/userService';
import { User } from '../types';

interface Props {
  onComplete: (user: User) => void;
}

export const OnboardingView: React.FC<Props> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    setIsAnimating(true);
    // Artificial delay for better UX feel
    setTimeout(() => {
        const user = createUser(name);
        onComplete(user);
    }, 800);
  };

  return (
    <div className="h-screen w-full bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
       <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/0 to-slate-900/0"></div>
       
       <div className={`max-w-md w-full bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 shadow-2xl relative z-10 transition-all duration-700 transform ${isAnimating ? 'scale-95 opacity-0 translate-y-4' : 'scale-100 opacity-100'}`}>
          <div className="flex justify-center mb-8">
             <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center ring-4 ring-slate-800">
                <span className="text-4xl font-bold text-white">V</span>
             </div>
          </div>
          
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-3xl font-bold text-white tracking-tight">Welcome to Valhalla</h1>
            <p className="text-slate-400">Your personal AI workspace.<br/>Let's get you set up.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 ml-1">What should we call you?</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-slate-900/60 border border-slate-600/50 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all text-lg"
                autoFocus
                autoComplete="off"
              />
            </div>
            
            <button
              type="submit"
              disabled={!name.trim() || isAnimating}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl px-4 py-4 transition-all shadow-lg shadow-blue-900/20 transform active:scale-[0.98] text-lg"
            >
              {isAnimating ? 'Initializing...' : 'Create My Workspace'}
            </button>
          </form>
       </div>
    </div>
  );
};