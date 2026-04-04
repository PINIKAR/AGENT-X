/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <div className="mb-20 text-center md:text-right">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight font-headline text-primary mb-6">מדיניות פרטיות</h2>
          <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
            עודכן לאחרונה: 24 במאי, 2024. האמון שלכם הוא הבסיס לחזון האדריכלי שלנו. אנו מחויבים להגן על הנתונים האישיים שלכם באותו דיוק שאנו מיישמים בשיווק נדל"ן.
          </p>
        </div>

        {/* Content Grid (Asymmetric) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Side Navigation/Quick Links */}
          <aside className="lg:col-span-3 sticky top-32 hidden lg:block">
            <div className="bg-surface-container-low p-8 rounded-lg">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 font-headline text-right">סעיפים</h3>
              <ul className="space-y-4 text-right">
                <li><a className="text-primary font-semibold hover:opacity-70 transition-opacity block border-r-4 border-primary pr-4" href="#data-collection">איסוף נתונים</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors block border-r-4 border-transparent pr-4" href="#use-of-info">שימוש במידע</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors block border-r-4 border-transparent pr-4" href="#third-party">שיתוף עם צדדים שלישיים</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors block border-r-4 border-transparent pr-4" href="#security">תקני אבטחה</a></li>
              </ul>
            </div>
          </aside>

          {/* Main Legal Content */}
          <div className="lg:col-span-9 space-y-24 text-right">
            {/* Data Collection */}
            <section className="group" id="data-collection">
              <div className="flex items-center gap-4 mb-8 flex-row-reverse">
                <div className="h-[2px] w-12 bg-primary"></div>
                <h3 className="text-3xl font-bold font-headline">01. איסוף נתונים</h3>
              </div>
              <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0px_20px_40px_rgba(25,28,29,0.04)]">
                <p className="text-on-surface-variant mb-8 leading-relaxed text-lg">
                  Architectural Curator אוספת מידע כדי לספק חוויה מותאמת אישית לקהל לקוחותינו המובחר. אנו אוספים נתונים בשלוש דרכים עיקריות:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 bg-surface-container-low rounded-lg">
                    <span className="material-symbols-outlined text-primary mb-4">person_search</span>
                    <h4 className="font-bold mb-2">אינטראקציה ישירה</h4>
                    <p className="text-sm text-on-surface-variant">מידע המסופק בעת ההרשמה לפורטל הסוכנים, בקשת ברושור נכס, או הרשמה לניוזלטר האוצרותי שלנו.</p>
                  </div>
                  <div className="p-6 bg-surface-container-low rounded-lg">
                    <span className="material-symbols-outlined text-primary mb-4">auto_awesome</span>
                    <h4 className="font-bold mb-2">טכנולוגיות אוטומטיות</h4>
                    <p className="text-sm text-on-surface-variant">בזמן הניווט בפלטפורמה שלנו, אנו עשויים לאסוף באופן אוטומטי נתונים טכניים על הציוד שלכם, פעולות הגלישה ודפוסי השימוש.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Visual Break / Glassmorphism Card */}
            <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden group">
              <img 
                alt="חלל משרדי מודרני ויוקרתי עם חלונות גדולים ואדריכלות מינימליסטית" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRFux6mEhj0EQTbi-5tVFP4RtzFv5v29EWI95Z3dUNb7IhPJggqtj4-fh-j3EnQNDOtnUGmA-RS5RHhTCflRY4TeViTfnvR-NvOeXkqqxFdmN7Wk6N3M-4djjOrcdgvn25BZy2raOkRxkg1FfjCh0LKwgq6GdtSgBBTQlEMv-KtIWkGtfs35eKUaAOWY2PBwUjI0esSceYj7TguN3_UVOUPifeLbQhi5dz1NScylUvF6LNyLQqVqHf0Uqt4rif6XZJIjPc0_Fbeww"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center p-8">
                <div className="bg-surface/70 backdrop-blur-xl p-8 rounded-lg max-w-xl text-center">
                  <h4 className="text-2xl font-bold font-headline text-primary mb-2">יושרה אדריכלית</h4>
                  <p className="text-sm text-on-surface">אנו מקדישים את אותה רמת תשומת לב לפרטיות הנתונים שלכם כפי שאנו מקדישים לנכסים האוצרותיים שאנו מציגים.</p>
                </div>
              </div>
            </div>

            {/* Use of Information */}
            <section id="use-of-info">
              <div className="flex items-center gap-4 mb-8 flex-row-reverse">
                <div className="h-[2px] w-12 bg-primary"></div>
                <h3 className="text-3xl font-bold font-headline">02. שימוש במידע</h3>
              </div>
              <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0px_20px_40px_rgba(25,28,29,0.04)] space-y-6">
                <p className="text-on-surface-variant leading-relaxed">
                  אנו משתמשים בנתונים האישיים שלכם רק כאשר החוק מתיר לנו לעשות זאת. לרוב, אנו משתמשים בנתונים בנסיבות הבאות:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3 flex-row-reverse">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span className="text-sm">כדי להתאים אישית את המלצות הנכסים עבורכם.</span>
                  </li>
                  <li className="flex items-start gap-3 flex-row-reverse">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span className="text-sm">כדי לתחזק את פורטל הקמפיינים האדריכליים שלנו.</span>
                  </li>
                  <li className="flex items-start gap-3 flex-row-reverse">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span className="text-sm">כדי לעדכן אתכם על שינויים ברישומי היוקרה שלנו.</span>
                  </li>
                  <li className="flex items-start gap-3 flex-row-reverse">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span className="text-sm">כדי לשפר את חווית העריכה של הפלטפורמה שלנו.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Third-Party Sharing */}
            <section id="third-party">
              <div className="flex items-center gap-4 mb-8 flex-row-reverse">
                <div className="h-[2px] w-12 bg-primary"></div>
                <h3 className="text-3xl font-bold font-headline">03. שיתוף עם צדדים שלישיים</h3>
              </div>
              <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0px_20px_40px_rgba(25,28,29,0.04)]">
                <div className="flex flex-col md:flex-row gap-12 items-center flex-row-reverse">
                  <div className="flex-1">
                    <p className="text-on-surface-variant leading-relaxed mb-6">
                      איננו מוכרים, סוחרים או מעבירים בדרך אחרת את המידע המזהה האישי שלכם לגורמים חיצוניים ללא הסכמתכם, אלא לצורך מתן השירות שביקשתם. זה כולל צדדים שלישיים מהימנים המסייעים לנו בתפעול הפלטפורמה שלנו, בניהול העסק שלנו או במתן שירות לכם.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full text-xs font-bold uppercase tracking-widest text-primary">
                      <span className="material-symbols-outlined text-sm">lock</span>
                      התחייבות לאי-מכירה
                    </div>
                  </div>
                  <div className="w-full md:w-64 h-64 bg-surface-container-low rounded-xl flex flex-col items-center justify-center p-8 text-center border-l-8 border-primary">
                    <span className="material-symbols-outlined text-5xl text-primary mb-4">hub</span>
                    <p className="text-xs font-semibold text-on-surface-variant">רשת מהימנה בלבד</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Security Standards */}
            <section className="pb-24" id="security">
              <div className="flex items-center gap-4 mb-8 flex-row-reverse">
                <div className="h-[2px] w-12 bg-primary"></div>
                <h3 className="text-3xl font-bold font-headline">04. תקני אבטחה</h3>
              </div>
              <div className="p-8 border border-outline-variant/20 rounded-xl bg-surface-container-low">
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  הטמענו אמצעי אבטחה מתאימים כדי למנוע אובדן מקרי, שימוש או גישה לנתונים האישיים שלכם באופן לא מורשה. אנו מגבילים את הגישה לנתונים האישיים שלכם לעובדים, סוכנים, קבלנים וצדדים שלישיים אחרים שיש להם צורך עסקי לדעת.
                </p>
                <button className="bg-gradient-to-tr from-primary to-primary-container text-on-primary px-8 py-3 rounded text-sm font-bold tracking-wide hover:opacity-90 transition-all active:scale-95">
                  צרו קשר עם הממונה על הפרטיות
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
