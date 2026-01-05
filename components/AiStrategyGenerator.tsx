import React, { useState } from 'react';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { generateMarketingStrategy } from '../services/geminiService';
import { StrategyStatus, AiStrategyResponse } from '../types';

export const AiStrategyGenerator: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [type, setType] = useState('');
  const [goal, setGoal] = useState('Generate Leads');
  const [status, setStatus] = useState<StrategyStatus>(StrategyStatus.IDLE);
  const [result, setResult] = useState<AiStrategyResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !type) return;

    setStatus(StrategyStatus.LOADING);
    try {
      const data = await generateMarketingStrategy(businessName, type, goal);
      setResult(data);
      setStatus(StrategyStatus.SUCCESS);
    } catch (error) {
      setStatus(StrategyStatus.ERROR);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
              <Sparkles size={16} /> AI-Powered
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Instant Marketing Strategy</h2>
            <p className="text-blue-100">Tell our AI about your business, and get a customized 3-step growth plan powered by Gemini.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-200">Business Name</label>
                  <input 
                    type="text" 
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g., Kolkata Coffee House"
                    className="w-full bg-blue-950/50 border border-blue-700 rounded-lg p-3 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-200">Business Type/Industry</label>
                  <input 
                    type="text" 
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="e.g., Restaurant, Fashion Brand, Tech Startup"
                    className="w-full bg-blue-950/50 border border-blue-700 rounded-lg p-3 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-200">Main Goal</label>
                  <select 
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-blue-950/50 border border-blue-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="Generate Leads">Generate Leads</option>
                    <option value="Increase Brand Awareness">Increase Brand Awareness</option>
                    <option value="Drive Website Traffic">Drive Website Traffic</option>
                    <option value="Boost Social Media Engagement">Boost Social Media Engagement</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={status === StrategyStatus.LOADING}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === StrategyStatus.LOADING ? (
                    <><Loader2 className="animate-spin" /> Generating Plan...</>
                  ) : (
                    <><Sparkles size={20} /> Generate My Plan</>
                  )}
                </button>
              </form>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-white/10 min-h-[300px] flex flex-col">
              {status === StrategyStatus.IDLE && (
                <div className="flex-1 flex flex-col items-center justify-center text-blue-200 text-center opacity-70">
                  <Sparkles size={48} className="mb-4" />
                  <p>Enter your details to see the magic happen.</p>
                </div>
              )}

              {status === StrategyStatus.ERROR && (
                <div className="flex-1 flex flex-col items-center justify-center text-red-300 text-center">
                  <p>Something went wrong. Please try again.</p>
                </div>
              )}

              {status === StrategyStatus.SUCCESS && result && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-xl font-bold text-orange-300 mb-2">{result.title}</h3>
                  <p className="text-sm text-blue-100 mb-4">{result.summary}</p>
                  <div className="space-y-3">
                    {result.steps.map((step, idx) => (
                      <div key={idx} className="bg-blue-950/40 p-3 rounded-lg border border-blue-800">
                        <div className="font-bold text-white text-sm mb-1">Step {idx + 1}: {step.step}</div>
                        <p className="text-xs text-blue-200">{step.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 text-center">
                    <p className="text-sm text-blue-200 mb-2">Want to execute this plan?</p>
                    <a href="#contact" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-sm">
                      Discuss with us <Send size={14} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
