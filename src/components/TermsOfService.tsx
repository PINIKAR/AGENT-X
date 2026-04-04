/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function TermsOfService() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2 text-right">
              <h2 className="text-display-lg font-headline font-extrabold text-primary tracking-tight leading-none mb-6 text-5xl md:text-7xl">תנאי שימוש</h2>
              <p className="text-title-lg font-body text-on-surface-variant max-w-lg mb-8 leading-relaxed">
                עודכן לאחרונה: 24 באוקטובר 2023. תנאים אלו מגדירים את המחויבות שלנו ליושרה אדריכלית ומצוינות מקצועית.
              </p>
              <div className="flex items-center gap-4 flex-row-reverse">
                <div className="h-1 w-12 bg-primary"></div>
                <span className="font-label text-xs uppercase tracking-widest text-slate-500">ממשל משפטי</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/3] bg-surface-container-low rounded-lg overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                <img 
                  alt="חלל משרדי מודרני ומינימליסטי עם חלונות מהרצפה עד התקרה" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8adp6sLuVmgOUNza0olfxwn52pSKmy9BFFOE8XeJAaQQSb8qyJHxeKVHD5f-ZF6cyif5LJMjO_duOgtz3Z0xRJjk7B5ExMW6Lpkncvu0pJg8iiFkwD01HQAQQDq9iCcipUUBMgAjh8mbkXDGDoshScRqcFXgUxZMQS_M22Hd_c6YL84kBAJbH5PGLO4kGHNXUcNZaK4v9X_q6xPsZSeIaQ5sPx-BYRYCsxh1PtFy3lePQnu1jRKDNEhJjPhq0ueiOLWWHd_wK6ys"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Overlapping Glassmorphism Element */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 p-8 bg-white/70 backdrop-blur-xl rounded-lg shadow-[0px_20px_40px_rgba(25,28,29,0.06)] max-w-xs hidden md:block text-right">
                <p className="font-headline font-bold text-primary mb-2">סטנדרט שירות</p>
                <p className="text-sm text-on-surface-variant">הגדרת היחסים בין טכנולוגיה אוצרת לבין מומחיות בנדל"ן.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content - Bento Style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-right">
          {/* Section 1: User Responsibilities */}
          <div className="md:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-lg shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border-r-4 border-primary">
            <h3 className="font-headline text-2xl font-bold text-primary mb-6">1. אחריות המשתמש</h3>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>כאוצרים בפלטפורמה שלנו, מוטלת עליכם המשימה לשמור על הסטנדרטים הגבוהים ביותר של התנהלות מקצועית. אתם מסכימים לספק מידע מדויק ולא מטעה בנוגע לכל הנכסים האדריכליים ורישומי המקרקעין.</p>
              <ul className="space-y-4">
                <li className="flex gap-4 flex-row-reverse">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span>אימות המקוריות של כל התיעוד המסופק למערכת Architectural Curator.</span>
                </li>
                <li className="flex gap-4 flex-row-reverse">
                  <span className="material-symbols-outlined text-primary">security</span>
                  <span>שמירה על סודיות פרטי הכניסה לחשבון ותיקי העבודות האדריכליים.</span>
                </li>
                <li className="flex gap-4 flex-row-reverse">
                  <span className="material-symbols-outlined text-primary">gavel</span>
                  <span>ציות לתקנות המקרקעין המקומיות והבינלאומיות ולחוקי הדיור ההוגן.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: Quick Links / Sidebar */}
          <div className="md:col-span-4 space-y-8">
            <div className="bg-primary p-8 rounded-lg text-white text-right">
              <h4 className="font-headline font-bold text-xl mb-4">הודעת הסכם</h4>
              <p className="text-sm text-slate-300 mb-6">בגישה ל-Architectural Curator, אתם מאשרים כי קראתם והבנתם את המסגרות המשפטיות הללו.</p>
              <button className="w-full bg-surface-container-lowest text-primary font-headline font-bold py-3 rounded hover:opacity-90 transition-opacity">הורד PDF</button>
            </div>
            <div className="bg-surface-container-low p-8 rounded-lg text-right">
              <h4 className="font-headline font-bold text-primary mb-4">זקוקים להבהרה?</h4>
              <p className="text-sm text-on-surface-variant mb-4">הצוות המשפטי שלנו זמין לשאלות מותאמות אישית בנוגע למודל השירות שלנו.</p>
              <a className="text-primary font-bold text-sm underline decoration-2 underline-offset-4" href="mailto:legal@architecturalcurator.com">צרו קשר עם הייעוץ המשפטי</a>
            </div>
          </div>

          {/* Section 3: Intellectual Property */}
          <div className="md:col-span-12 lg:col-span-5 bg-surface-container-lowest p-8 md:p-12 rounded-lg shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
            <div className="mb-6 flex items-center justify-between flex-row-reverse">
              <h3 className="font-headline text-2xl font-bold text-primary">2. קניין רוחני</h3>
              <span className="material-symbols-outlined text-on-surface-variant text-4xl">copyright</span>
            </div>
            <div className="text-on-surface-variant leading-relaxed space-y-4">
              <p>כל תוכן שיווקי שנוצר, כולל תיאורים משופרי בינה מלאכותית ופרשנויות ויזואליות אדריכליות, נותר בבעלות Architectural Curator עד לרישוי ספציפי לסוכן.</p>
              <p className="font-bold text-primary italic">אלגוריתמי ה-"Maven Engine" הקנייניים ודפוסי עיצוב ממשק המשתמש מוגנים בקפידה.</p>
              <p>המשתמשים שומרים על זכויות הצילום המקורי שלהם, אך מעניקים רישיון גלובלי וקבוע לשימוש במנוע האוצרות שלנו לצורך שיפור השירות.</p>
            </div>
          </div>

          {/* Section 4: Limitation of Liability */}
          <div className="md:col-span-12 lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-lg">
            <h3 className="font-headline text-2xl font-bold text-primary mb-6">3. הגבלת אחריות</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-primary uppercase text-xs tracking-widest">החרגה כללית</h4>
                <p className="text-sm text-on-surface-variant">השירות ניתן כמות שהוא (AS IS) וככל שיהיה זמין. Architectural Curator אינה נותנת אחריות לגבי הדיוק המוחלט של מדדי השיווק או הערכות הנכסים שנוצרו.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-primary uppercase text-xs tracking-widest">תקרת נזק</h4>
                <p className="text-sm text-on-surface-variant">בשום מקרה לא תעלה האחריות הכוללת שלנו לכל הנזקים, ההפסדים ועילות התביעה על הסכום ששולם על ידך, אם בכלל, עבור גישה לשירותי האוצרות המובחרים שלנו.</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <p className="text-xs text-on-surface-variant italic">Architectural Curator לא תישא באחריות לכל נזק עקיף, מקרי או תוצאתי הנובע מהשימוש או מחוסר היכולת להשתמש בתוכן השיווקי שנוצר בפלטפורמה שלנו.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
