/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AgentPortal from './components/AgentPortal';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const LogoMark = ({ className = "" }: { className?: string }) => (
  <div className={`font-logo text-primary border border-primary flex items-center justify-center aspect-square leading-none ${className}`}>
    A
  </div>
);

interface CampaignData {
  headline: string;
  location: string;
  description: string;
  features: {
    size: string;
    rooms: string;
    balcony: string;
    parking: string;
  };
  imagePrompt: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'portal'>('home');
  const [propertyDetails, setPropertyDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [campaign, setCampaign] = useState<CampaignData | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateCampaign = async () => {
    if (!propertyDetails.trim()) return;

    setLoading(true);
    setCampaign(null);
    setGeneratedImage(null);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `צור קמפיין שיווקי יוקרתי לנכס נדל"ן על בסיס הפרטים הבאים: ${propertyDetails}.
        השתמש בשפה שיווקית, חמה ומזמינה בעברית.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              headline: { type: Type.STRING, description: "כותרת מושכת ויוקרתית" },
              location: { type: Type.STRING, description: "מיקום הנכס (עיר, שכונה)" },
              description: { type: Type.STRING, description: "תיאור שיווקי מפורט עם אימוג'ים" },
              features: {
                type: Type.OBJECT,
                properties: {
                  size: { type: Type.STRING, description: "שטח הנכס במ״ר" },
                  rooms: { type: Type.STRING, description: "מספר חדרים" },
                  balcony: { type: Type.STRING, description: "שטח מרפסת או חצר" },
                  parking: { type: Type.STRING, description: "מספר חניות" }
                },
                required: ["size", "rooms", "balcony", "parking"]
              },
              imagePrompt: { type: Type.STRING, description: "תיאור קצר באנגלית לתמונה אדריכלית של הנכס" }
            },
            required: ["headline", "location", "description", "features", "imagePrompt"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}') as CampaignData;
      setCampaign(data);

      // Generate Custom Visual only if no image was uploaded
      if (!uploadedImage) {
        try {
          const imageResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
              parts: [
                {
                  text: `Ultra-modern minimalist architectural real estate photography of: ${data.imagePrompt}. High-end luxury property, warm lighting, professional architectural photography style, 8k resolution, clean composition.`,
                },
              ],
            },
          });

          if (imageResponse.candidates?.[0]?.content?.parts) {
            for (const part of imageResponse.candidates[0].content.parts) {
              if (part.inlineData) {
                setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
                break;
              }
            }
          }
        } catch (imgError) {
          console.error("Error generating image:", imgError);
          setGeneratedImage(`https://picsum.photos/seed/${encodeURIComponent(data.imagePrompt)}/1200/800`);
        }
      }

    } catch (error) {
      console.error("Error generating campaign:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (campaign) {
      const text = `${campaign.headline}\n\n${campaign.location}\n\n${campaign.description}\n\nמפרט:\n- שטח: ${campaign.features.size}\n- חדרים: ${campaign.features.rooms}\n- מרפסת: ${campaign.features.balcony}\n- חניה: ${campaign.features.parking}`;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'portal':
        return <AgentPortal />;
      default:
        return (
          <motion.main 
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto px-4 py-8 space-y-8"
          >
            {/* Header Section */}
            <section className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-primary">יצירת קמפיין שיווקי</h1>
              <p className="text-on-surface-variant">הפוך פרטי נכס גולמיים לסיפור שיווקי יוקרתי ברגע אחד.</p>
            </section>

            {/* Input Section */}
            <section className="bg-surface-container-low rounded-xl p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant px-1">פרטי הנכס</label>
                <textarea 
                  value={propertyDetails}
                  onChange={(e) => setPropertyDetails(e.target.value)}
                  className="w-full h-40 bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary-container rounded-lg p-4 text-on-surface placeholder-slate-400 resize-none shadow-sm outline-none" 
                  placeholder="הזן פרטי נכס כאן... (למשל: פנטהאוז 5 חדרים, נוף לים, מרפסת שמש 40 מ״ר, מתוכנן ע״י אדריכל)"
                />
                
                <div className="relative">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload}
                    className="hidden" 
                    id="image-upload"
                  />
                  <label 
                    htmlFor="image-upload"
                    className="w-full mt-2 py-3 border-2 border-dashed border-outline-variant text-on-surface-variant font-medium rounded-lg hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 mb-4 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-xl">photo_camera</span>
                    <span>{uploadedImage ? 'תמונה הועלתה' : 'העלה תמונות'}</span>
                  </label>
                  {uploadedImage && (
                    <div className="relative w-20 h-20 mb-4 rounded-lg overflow-hidden border border-surface-container-highest">
                      <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                      <button 
                        onClick={() => setUploadedImage(null)}
                        className="absolute top-0 right-0 bg-error text-white p-1 rounded-bl-lg"
                      >
                        <span className="material-symbols-outlined text-xs">close</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <button 
                onClick={generateCampaign}
                disabled={loading || !propertyDetails.trim()}
                className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:scale-100"
              >
                {loading ? (
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                ) : (
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                )}
                <span>{loading ? 'מייצר...' : 'צור קמפיין שיווקי'}</span>
              </button>
            </section>

            {/* Preview Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-[1px] flex-grow bg-surface-container-highest"></div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">תצוגה מקדימה לקמפיין</span>
              <div className="h-[1px] flex-grow bg-surface-container-highest"></div>
            </div>

            {/* Result Section */}
            <AnimatePresence mode="wait">
              {campaign && (
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative group"
                >
                  <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-surface-container-highest/50">
                    {/* Editorial Image Header */}
                    <div className="relative h-64 overflow-hidden bg-surface-container-high flex items-center justify-center">
                      {uploadedImage || generatedImage ? (
                        <img 
                          alt="Luxury Real Estate" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          src={uploadedImage || generatedImage || ''}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2 text-on-surface-variant">
                          <span className="material-symbols-outlined animate-spin">progress_activity</span>
                          <span className="text-xs font-bold uppercase tracking-widest">Generating Visual...</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <div className="glass-effect px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
                          Exclusive Listing
                        </div>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-8 space-y-6">
                      <div className="space-y-2 text-right">
                        <h2 className="text-2xl font-extrabold text-primary leading-tight">
                          {campaign.headline}
                        </h2>
                        <div className="flex gap-2 justify-start items-center flex-row-reverse">
                          <span className="w-8 h-1 bg-primary"></span>
                          <span className="text-sm font-medium text-on-surface-variant">{campaign.location}</span>
                        </div>
                      </div>

                      <div className="space-y-4 text-on-surface body-md leading-relaxed text-right">
                        <div className="prose prose-slate max-w-none">
                          <Markdown>{campaign.description}</Markdown>
                        </div>
                      </div>

                      <div className="pt-6 grid grid-cols-2 gap-4 border-t border-surface-container-low">
                        <div className="flex items-center gap-3 flex-row-reverse">
                          <span className="material-symbols-outlined text-primary-container">square_foot</span>
                          <span className="text-sm font-semibold">{campaign.features.size}</span>
                        </div>
                        <div className="flex items-center gap-3 flex-row-reverse">
                          <span className="material-symbols-outlined text-primary-container">bed</span>
                          <span className="text-sm font-semibold">{campaign.features.rooms}</span>
                        </div>
                        <div className="flex items-center gap-3 flex-row-reverse">
                          <span className="material-symbols-outlined text-primary-container">balcony</span>
                          <span className="text-sm font-semibold">{campaign.features.balcony}</span>
                        </div>
                        <div className="flex items-center gap-3 flex-row-reverse">
                          <span className="material-symbols-outlined text-primary-container">directions_car</span>
                          <span className="text-sm font-semibold">{campaign.features.parking}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 flex-row-reverse">
                        <div className="flex -space-x-2 space-x-reverse">
                          <div className="w-8 h-8 rounded-full bg-primary-fixed border-2 border-surface flex items-center justify-center text-[10px] font-bold text-primary">AI</div>
                          <div className="w-8 h-8 rounded-full bg-secondary-fixed border-2 border-surface flex items-center justify-center text-[10px] font-bold text-secondary">AC</div>
                        </div>
                        <button 
                          onClick={copyToClipboard}
                          className="text-primary font-bold text-sm flex items-center gap-1 hover:opacity-80 transition-opacity flex-row-reverse"
                        >
                          <span>{copied ? 'הועתק!' : 'שתף קמפיין'}</span>
                          <span className="material-symbols-outlined text-sm">{copied ? 'check' : 'share'}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Float UI Tag */}
                  <div className="absolute -bottom-4 right-8 bg-primary-container text-white px-4 py-2 rounded-lg shadow-xl flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    <span className="text-xs font-bold">פורמט פרימיום מותאם</span>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </motion.main>
        );
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Top Navigation */}
      <header className="w-full top-0 sticky z-50 bg-[#f8f9fa] shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <LogoMark className="w-10 h-10 text-2xl pt-1" />
              <span className="text-xl font-extrabold tracking-tighter text-primary font-headline hidden sm:block">Architectural Curator</span>
            </div>
            <nav className="hidden md:flex gap-8 items-center">
              <button onClick={() => setCurrentPage('home')} className={`hover:opacity-80 transition-opacity font-headline font-bold ${currentPage === 'home' ? 'text-primary' : 'text-slate-500'}`}>גילוי</button>
              <button onClick={() => setCurrentPage('home')} className={`hover:opacity-80 transition-opacity font-headline font-bold ${currentPage === 'home' ? 'text-primary' : 'text-slate-500'}`}>נכסים</button>
              <button onClick={() => setCurrentPage('portal')} className={`hover:opacity-80 transition-opacity font-headline font-bold ${currentPage === 'portal' ? 'text-primary' : 'text-slate-500'}`}>פורטל סוכנים</button>
              <button onClick={() => setCurrentPage('terms')} className={`hover:opacity-80 transition-opacity font-headline font-bold ${currentPage === 'terms' ? 'text-primary' : 'text-slate-500'}`}>משפטי</button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer active:scale-95 duration-150">account_circle</span>
            <span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: currentPage === 'home' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: currentPage === 'home' ? 20 : -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 bg-[#f3f4f5] mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <LogoMark className="w-6 h-6 text-sm" />
            <p className="text-xs uppercase tracking-widest text-primary font-bold">אוצר אדריכלי</p>
            <span className="text-xs text-slate-400">|</span>
            <p className="text-xs uppercase tracking-widest text-slate-500">© 2026 Architectural Curator</p>
          </div>
          <div className="flex gap-6">
            <button onClick={() => setCurrentPage('privacy')} className={`text-xs uppercase tracking-widest hover:text-primary transition-colors cursor-pointer ${currentPage === 'privacy' ? 'text-primary underline' : 'text-slate-500'}`}>Privacy Policy</button>
            <button onClick={() => setCurrentPage('terms')} className={`text-xs uppercase tracking-widest hover:text-primary transition-colors cursor-pointer ${currentPage === 'terms' ? 'text-primary underline' : 'text-slate-500'}`}>Terms of Service</button>
            <button onClick={() => setCurrentPage('portal')} className={`text-xs uppercase tracking-widest hover:text-primary transition-colors cursor-pointer ${currentPage === 'portal' ? 'text-primary underline' : 'text-slate-500'}`}>Agent Portal</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
