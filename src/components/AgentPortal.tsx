/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function AgentPortal() {
  return (
    <div className="bg-surface text-on-surface">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-right">
            <div className="flex-grow">
              <p className="text-on-secondary-container font-medium tracking-widest uppercase text-xs mb-2">ברוך השב, אלכסנדר</p>
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-primary">סקירת ביצועים</h2>
            </div>
            <div className="flex gap-4 flex-row-reverse">
              <button className="px-6 py-3 bg-surface-container-high text-on-surface font-headline font-semibold flex items-center gap-2 transition-all hover:opacity-80">
                <span className="material-symbols-outlined text-sm">file_download</span>
                ייצוא דוחות
              </button>
              <button className="px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-headline font-semibold flex items-center gap-2 transition-all hover:opacity-90 shadow-lg">
                <span className="material-symbols-outlined text-sm">add</span>
                קמפיין חדש
              </button>
            </div>
          </div>
        </section>

        {/* Bento Grid Analytics */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 text-right">
          {/* Large Focus Card */}
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-8 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-8 flex-row-reverse">
                <h3 className="font-headline font-bold text-xl">חשיפה פעילה</h3>
                <span className="bg-primary text-white text-[10px] px-2 py-1 uppercase tracking-tighter">פעיל כעת</span>
              </div>
              <p className="text-6xl font-headline font-extrabold text-primary mb-2">142.8k</p>
              <p className="text-on-surface-variant text-sm flex items-center gap-1 flex-row-reverse">
                <span className="material-symbols-outlined text-green-600 text-xs">trending_up</span>
                <span className="text-green-600 font-bold">+12%</span> מ-30 הימים האחרונים
              </p>
            </div>
            <div className="mt-8 h-32 w-full bg-surface-container-low relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              <img 
                alt="תרשים קווי מינימליסטי המציג מגמות צמיחה" 
                className="w-full h-full object-cover opacity-40 grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBajBpTiEABaCBNsa5-5mIAwUVY2zShIZQowUn2HBmELq-mFpUUwmEgdcd_Dp8ZlemSlaisBr8JvGhf2Ha7Tbxk3s3uOxrKI3TSwL-s-9OzOKQTRuzoHHMwZ8D8PXUCISiBkzRs_2aehTgEqbcNVmmlGmzSeXgI7zOMQs_NTjDcpTenHDmXa513sA9j4Z4Ns7LgVu88VS0iejXVBKL0tEvfdgu4osBjywt23iiRKzaaCrO95hhtBA0T1biKXi9dnsGJLfPSlWfDFJk"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Tool Cards */}
          <div className="bg-surface-container-high p-6 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            <h4 className="font-headline font-bold">קופירייטר AI</h4>
            <p className="text-sm text-on-surface-variant">צור תיאורים אדריכליים לנכסי יוקרה באופן מיידי.</p>
            <a className="mt-auto text-xs font-bold text-primary flex items-center gap-1 uppercase tracking-widest flex-row-reverse" href="#">
              <span>הפעל כלי</span>
              <span className="material-symbols-outlined text-xs">arrow_back</span>
            </a>
          </div>

          <div className="bg-surface-container-lowest p-6 flex flex-col gap-4 shadow-sm border-r-4 border-primary">
            <span className="material-symbols-outlined text-primary">monetization_on</span>
            <h4 className="font-headline font-bold">עמלה צפויה</h4>
            <p className="text-2xl font-headline font-extrabold text-primary">$42,500</p>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider">הערכה לסוף רבעון 4</p>
          </div>

          <div className="bg-surface-container-lowest p-6 flex flex-col gap-4 shadow-sm">
            <div className="flex -space-x-3 space-x-reverse mb-2 justify-end">
              <img alt="Client" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3GVJVOCveqp1UO-Uu1nOSc30-FJy9n8F-EkhAPTk-1DnRHmlc5HijIXDCEbzyoZED_X53SUYl9GUWD_9ItRep4gODGQLudpcUp40xhxX1KzYItONHngWme6IqLSrRFJw_vOp14TU7WvDMQr5a9av5s4Xa8qTx6KRQMfXLkcTUeOpxH_WRS1Uvrh14uQ6-wbNk2dnXi4NBQfAr-RbyJqB79UyqiMVNbyekJ73bMExiVL4Ocsfn1RkSmfNZyDjAF5kjm7IUy73xaUI" referrerPolicy="no-referrer" />
              <img alt="Client" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjoPVxTE8Z8j4Ju9DZv8gj7_ydHGI4iFWrHm4F4u8Kmrp-7YjWGawo22GSdIlhQRmuvyrWiDHo1DXoaYgwAzUKaqHssNkKR2pHrL2jqzjrMyhum1q50CrwXBZXPFfJmY9OzDDZIFdujTsafJTvNWjzDtFraDnH1Vs_KkzyfO2J8OKrbqGWTvDvvWMCRDQpyjG5j3MCqf0PkicKFVCLkXRw1CWbprJ__LucngPLVoS1j8TWoF8ifb8Sx7QnnpQ8Je4q1uNw8_E74Is" referrerPolicy="no-referrer" />
              <img alt="Client" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-anF7g0eX6zacw5fTbTtGNUUzRLG5GZaTudeRrN3fT_u1nlyDDlhbr5Vj6KTWkmsD3WicrS9WjaHlhCQXMWXI4-Vylh65WG3Ofkc28USB6GRpHQ_FiemT66h_foRFme4bQ0W3xU9aOstVeLLQKjGVkF-bhDgvDgnTJsjvm2aLY4uz23u7Dwxx7FzDYMhuUsZfKqygxATjnxfIbyPBgE_hhEfAxm_BavD5JaF0KYRrUmBKjkcXtVfrV7g--qNDMsEWTy0R4Cv9VCo" referrerPolicy="no-referrer" />
            </div>
            <h4 className="font-headline font-bold">לידים חדשים</h4>
            <p className="text-sm text-on-surface-variant">8 פניות VIP ממתינות להמשך טיפול.</p>
            <button className="w-full py-2 bg-surface-container-highest text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">פתח CRM</button>
          </div>

          <div className="bg-primary p-6 flex flex-col gap-4 text-white">
            <span className="material-symbols-outlined text-on-primary-container">verified</span>
            <h4 className="font-headline font-bold">Curator Gold</h4>
            <p className="text-sm text-slate-300">מינוי הפרימיום שלך מתחדש בעוד 14 ימים.</p>
            <button className="mt-auto text-xs font-bold text-on-primary-container uppercase tracking-widest flex items-center gap-1 flex-row-reverse">
              <span>ניהול תוכנית</span>
              <span className="material-symbols-outlined text-xs">chevron_left</span>
            </button>
          </div>
        </section>

        {/* Recent Campaigns Section */}
        <section className="mb-16 text-right">
          <div className="flex justify-between items-center mb-8 flex-row-reverse">
            <h3 className="text-2xl font-extrabold font-headline tracking-tight text-primary">קמפיינים אחרונים</h3>
            <button className="text-sm font-bold text-primary flex items-center gap-1 uppercase tracking-widest hover:opacity-70 transition-opacity flex-row-reverse">
              <span>צפה בארכיון</span>
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Campaign Card 1 */}
            <div className="bg-surface-container-lowest shadow-sm group cursor-pointer overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  alt="Obsidian Pavilion" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2srYyPqaLbxHeaEpr7Sk3kYMJNlok0w-K-625YQS2qkNX4QHWm1KFClGdhfjum93OH5qWquyI5NZUNCv6DrfMM7Z3fG5UYTCbP6nQkZAuDWfm1Xx62NY5H_j43ttGnt-uwjBSnHked4gziuzM0kjzShTymdpl29HeDc86abNT_zpBYE2mUCFecN2RTbpICxKzWdZ8d4QrgvEyA2Vkc7PS070mRJA-GKZRr3fyxthw3v6Cw7-zWnrgrlLKnDo3mWAWTTuabjhisSs"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest">פעיל</div>
              </div>
              <div className="p-6">
                <p className="text-xs text-on-surface-variant font-medium mb-1 uppercase tracking-tighter">קולקציית יוקרה</p>
                <h4 className="text-xl font-bold font-headline mb-4">ביתן האובסידיאן</h4>
                <div className="flex justify-between items-center py-4 border-t border-surface-container-low flex-row-reverse">
                  <div className="text-center flex-1">
                    <p className="text-lg font-bold text-primary">4.2k</p>
                    <p className="text-[10px] uppercase text-on-surface-variant tracking-widest">צפיות</p>
                  </div>
                  <div className="w-px h-8 bg-surface-container-low"></div>
                  <div className="text-center flex-1">
                    <p className="text-lg font-bold text-primary">82</p>
                    <p className="text-[10px] uppercase text-on-surface-variant tracking-widest">לידים</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Card 2 */}
            <div className="bg-surface-container-lowest shadow-sm group cursor-pointer overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  alt="Skyline Loft" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjkVG4CyFOY0COFC6sBcgYhuAJ8TnZToGVPJSbwKelGx1Q7lLDmucG0rCgt5p91JG3ymYnnQw8Uqu2WJmUg77ajSogqJLUT0sEWyFx5ihwJ2W01GN5mh2H43cLmvYAwZUEPfgFCtJHBWWJXntvwADIUJQzBNHbQrEbEcQVI7oGpodNjQbZsq22eloq7dJDik_hW6NZ2nMALdhuVqsPQyNjbUfqsM5-DL3YO8uraHCWWCI_Qzrlah-SVsZ5i1TXtvC9_dXFHs_MCHQ"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest">הושלם</div>
              </div>
              <div className="p-6">
                <p className="text-xs text-on-surface-variant font-medium mb-1 uppercase tracking-tighter">חיים עירוניים</p>
                <h4 className="text-xl font-bold font-headline mb-4">סדרת לופט קו הרקיע</h4>
                <div className="flex justify-between items-center py-4 border-t border-surface-container-low flex-row-reverse">
                  <div className="text-center flex-1">
                    <p className="text-lg font-bold text-primary">12.5k</p>
                    <p className="text-[10px] uppercase text-on-surface-variant tracking-widest">צפיות</p>
                  </div>
                  <div className="w-px h-8 bg-surface-container-low"></div>
                  <div className="text-center flex-1">
                    <p className="text-lg font-bold text-primary">148</p>
                    <p className="text-[10px] uppercase text-on-surface-variant tracking-widest">לידים</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Card 3 */}
            <div className="bg-surface-container-lowest shadow-sm group cursor-pointer overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  alt="Vineyard Estate" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmG9KkasKNWGojfRQCN1qffya3MQVxBBRlN5TneGw0N6plq9b_EpUNFzNU81vTJiytqhFEYSMiDJN-uyirIprGqewJYLA3I1jQc0yHKGeEEPqqG6agk1bsbuOeByJGtHxfYjisSnfG5RxNKQvvhsl0R2cuNghXgUHIOI9Q8bh6tcbsWHovzaM9dR_-4dOq-ZTRz8PNrrgN3qdSEPcuwsvxB6qJ_8n4vGcJ95kjveeJvx8Zt0c88qxXOky3wNK3JL03hk7kTiPkIug"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest">טיוטה</div>
              </div>
              <div className="p-6">
                <p className="text-xs text-on-surface-variant font-medium mb-1 uppercase tracking-tighter">נחלות מורשת</p>
                <h4 className="text-xl font-bold font-headline mb-4">אחוזת הכרמים</h4>
                <div className="flex justify-between items-center py-4 border-t border-surface-container-low flex-row-reverse">
                  <div className="text-center flex-1">
                    <p className="text-lg font-bold text-primary">-</p>
                    <p className="text-[10px] uppercase text-on-surface-variant tracking-widest">צפיות</p>
                  </div>
                  <div className="w-px h-8 bg-surface-container-low"></div>
                  <div className="text-center flex-1">
                    <p className="text-lg font-bold text-primary">-</p>
                    <p className="text-[10px] uppercase text-on-surface-variant tracking-widest">לידים</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Tools & Resources */}
        <section className="bg-surface-container-low p-12 mb-16 relative overflow-hidden text-right">
          <div className="absolute top-0 left-0 w-1/3 h-full opacity-10 pointer-events-none">
            <img 
              alt="Pattern" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNo7eqDpGMVhIBPNy4eR8tXYNKe-EUTxKp64Hv1PvlSUxNPyu4UNp7zFTp6IQgiJWIZywTR-HVt5DJJBbqjZIuZnyL1Nfas75gwXtvmoW94b-jYCHsSmcqlMZjkl5MvU_7CSIG9MUpDenA_Bh3R037I1fWy_efFqh5DITiHZMIgk6RBvxyFmovM6TmKs6_Np4dhZtt398krdmVpazdrpetl6I-vUEWrn6VxBzteEoEFE5ev02VFPt0evmSSet5AD8xxMqyk-9v0YI"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-2xl mr-auto">
            <h3 className="text-3xl font-extrabold font-headline mb-4 text-primary">ערכת כלי שיווק</h3>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">שדרג את המותג שלך עם האוסף הבלעדי שלנו של תבניות שנאצרו במקצועיות, ערכות מדיה חברתית ודוחות תובנות שוק.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 flex items-center gap-4 group cursor-pointer hover:shadow-md transition-all flex-row-reverse">
                <span className="material-symbols-outlined text-primary text-3xl">photo_camera</span>
                <div>
                  <p className="font-bold font-headline">הגדרות צילום</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">מראה אדריכלי</p>
                </div>
              </div>
              <div className="bg-white p-6 flex items-center gap-4 group cursor-pointer hover:shadow-md transition-all flex-row-reverse">
                <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
                <div>
                  <p className="font-bold font-headline">מגמות שוק</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">דוח HNW שבועי</p>
                </div>
              </div>
              <div className="bg-white p-6 flex items-center gap-4 group cursor-pointer hover:shadow-md transition-all flex-row-reverse">
                <span className="material-symbols-outlined text-primary text-3xl">share</span>
                <div>
                  <p className="font-bold font-headline">נכסי סושיאל</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">ערכות IG ו-TikTok</p>
                </div>
              </div>
              <div className="bg-white p-6 flex items-center gap-4 group cursor-pointer hover:shadow-md transition-all flex-row-reverse">
                <span className="material-symbols-outlined text-primary text-3xl">history_edu</span>
                <div>
                  <p className="font-bold font-headline">טפסים משפטיים</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">תבניות פרימיום</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
