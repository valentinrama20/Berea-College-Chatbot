// Data

const KB = [
  { keywords:["where","location","located","address","berea","kentucky","map","directions"],
    topic:"location",
    answer:"Berea College is in Berea, Kentucky (south of Lexington along I-75)." },
  { keywords:["tuition","free","cost","pay","scholarship","promise","no tuition","tuition promise"],
    topic:"tuition",
    answer:"Berea’s Tuition Promise Scholarship covers 100% of tuition for admitted students. Housing/meals/fees may still apply." },
  { keywords:["labor","work","job","campus job","work college","work hours","pay"],
    topic:"labor",
    answer:"All students work about 10 hours per week in the Labor Program in various campus roles." },
  { keywords:["admission","admissions","apply","application","requirements","sat","act","gpa","deadline","deadlines","transfer"],
    topic:"admissions",
    answer:"Admissions is holistic. Tests can be optional. Check the official site for the latest requirements and deadlines." },
  { keywords:["majors","programs","degrees","what can i study","cs","nursing","business","catalog","courses"],
    topic:"majors",
    answer:"Berea offers many liberal-arts majors (e.g., Computer Science, Business, Nursing, Education). See the catalog for the full list." },
  { keywords:["housing","dorm","residence","residence hall","meal","dining","food","meal plan"],
    topic:"housing",
    answer:"Most students live in residence halls and use campus dining plans. Options vary by hall and plan." },
  { keywords:["international","visa","toefl","ielts","intl","sevis","i-20"],
    topic:"intl",
    answer:"International students receive support for admissions, visas, and orientation. English proficiency can be shown by tests or other evidence." },
  { keywords:["study abroad","education abroad","exchange","semester abroad","year abroad","go abroad","intl programs","cie abroad"],
    topic:"studyabroad",
    answer:"Berea students can study abroad through Education Abroad (semester, year, or short-term faculty-led options). Advising and scholarships are available." },
  { keywords:["financial aid","fees","room and board","aid","cost of attendance","coa","award","student account"],
    topic:"aid",
    answer:"Beyond tuition, need-based aid and campus earnings help with housing, meals, books, and fees." },
  { keywords:["visit","tour","open house","info session","campus tour","virtual tour","schedule visit"],
    topic:"visit",
    answer:"You can schedule campus tours and info sessions. Check the admissions page for current options." },
  { keywords:["contact","email","phone","who do i contact","admissions contact"],
    topic:"contact",
    answer:"For official info, contact Berea College Admissions on the college website." },
  { keywords:["career","careers","career development","career center","resume","cv","cover letter","interview","internship","internships","job fair","handshake"],
    topic:"career",
    answer:"Career Development supports resumes, interviews, internships, and job search preparation." },
  { keywords:["berea","college","about","mission","history","values","tuition-free","founded"],
    topic:"about",
    answer:"Berea College is a tuition-free liberal arts college in Berea, Kentucky, founded in 1855 with a mission of learning, labor, and service." },
  { keywords:["faculty","professor","teachers","class size","mentoring","teaching","curriculum"],
    topic:"faculty",
    answer:"Berea faculty focus on teaching and mentorship, with small class sizes for personalized learning." },
  { keywords:["registrar","transcript","registration","register","add drop","drop class","enrollment","academic calendar","degree audit","records"],
    topic:"registrar",
    answer:"The Registrar handles registration, transcripts, degree progress, and academic calendars." },
  { keywords:["library","hutchins","study rooms","database","databases","research","ill","interlibrary loan","library hours","archives"],
    topic:"library",
    answer:"Hutchins Library offers study spaces, research databases, and interlibrary loan." },
  { keywords:["it","helpdesk","tech support","wifi","email","account","password","mfa","login","canvas","moodle"],
    topic:"it",
    answer:"IT Support helps with accounts, passwords, Wi-Fi, and learning systems." },
  { keywords:["counseling","mental health","therapy","crisis","caps","wellness","support"],
    topic:"counseling",
    answer:"Counseling Services provides confidential mental health support and crisis resources." },
  { keywords:["health","clinic","medical","immunization","vaccination","insurance","nurse","wellness clinic"],
    topic:"health",
    answer:"Student Health Services provides basic medical care, immunizations, and wellness resources." },
  { keywords:["accessibility","disability","accommodations","ada","testing accommodations","aro"],
    topic:"accessibility",
    answer:"Accessibility Services coordinates academic and housing accommodations under ADA." },
  { keywords:["safety","public safety","campus police","security","emergency","escort","report","blue light"],
    topic:"safety",
    answer:"Public Safety provides 24/7 campus security, escorts, and emergency response." },
  { keywords:["parking","permit","vehicle","car","transportation","shuttle","ticket","appeal"],
    topic:"parking",
    answer:"Parking & Transportation manages permits, rules, shuttles, and appeals." },
  { keywords:["bookstore","books","textbooks","merch","gear","regalia","supplies"],
    topic:"bookstore",
    answer:"The College Bookstore provides textbooks, course materials, and Berea gear." },
  { keywords:["student life","clubs","organizations","orgs","activities","events","sga","student government","leadership"],
    topic:"studentlife",
    answer:"Student Life supports clubs, organizations, events, and student government." },
  { keywords:["orientation","first year","new student","move-in","welcome week","transition","nsso"],
    topic:"orientation",
    answer:"New Student Orientation covers move-in, welcome programming, and first-year transitions." },
  { keywords:["tutoring","writing center","math lab","academic support","peer tutoring","study skills"],
    topic:"tutoring",
    answer:"Academic support includes tutoring, writing assistance, and study-skills resources." },
  { keywords:["chapel","campus ministries","worship","service","spiritual life","religious life"],
    topic:"chapel",
    answer:"Campus Ministries offers services, interfaith programs, and spaces for spiritual life." },
  { keywords:["athletics","sports","basketball","soccer","baseball","softball","track","volleyball","gym","ncaa","d3"],
    topic:"athletics",
    answer:"Berea competes in NCAA Division III with multiple varsity sports and recreation programs." },
  { keywords:["student accounts","billing","payment","tuition bill","refund","statement","cashier"],
    topic:"accounts",
    answer:"Student Accounts manages billing, payments, and account statements, coordinating with Financial Aid." },
  { keywords:["community","service","volunteer","civic","engagement","celts","bonner"],
    topic:"service",
    answer:"CELTS coordinates community engagement, volunteer opportunities, and Bonner Scholars." },
  { keywords:["calendar","events","schedule","activities","concert","lecture","holiday","mountain day","homecoming"],
    topic:"events",
    answer:"Campus events include lectures, concerts, athletics, and traditions like Mountain Day."
  }
];

const QUICK = [
  "Where is Berea College located?",
  "Is tuition really free at Berea?",
  "What is the Labor Program?",
  "What majors does Berea offer?",
  "How do I apply as an international student?",
  "Can I tour the campus?",
  "How do internships work at Berea?",
  "How do I get my transcript?",
  "How do I buy a parking permit?",
  "What sports does Berea have?"
];

// simple defaults so code runs even without extra data

const EXPAND = {};
const FOLLOWUPS = {};

const LINKS = {
  location: [
    {label:"Admissions home", url:"https://www.berea.edu/admissions/"},
    {label:"Campus map / directions", url:"https://www.berea.edu/about-berea/maps-and-directions/"}
  ],
  tuition: [
    {label:"No Tuition / Tuition Promise", url:"https://www.berea.edu/no-tuition/"}
  ],
  labor: [
    {label:"Labor Program Office", url:"https://www.berea.edu/labor-program-office/"},
    {label:"Pay schedule & work scholarship", url:"https://www.berea.edu/labor-program-office/pay-schedule-scale/"}
  ],
  admissions: [
    {label:"Admission information", url:"https://www.berea.edu/admissions/admission-information/"},
    {label:"Apply online", url:"https://admissions.berea.edu/apply/"},
    {label:"Deadlines & requirements", url:"https://www.berea.edu/admissions/application-deadlines-requirements/"}
  ],
  majors: [
    {label:"Majors & Minors", url:"https://www.berea.edu/academics/majors-and-minors/"},
    {label:"Course Catalog", url:"https://catalog.berea.edu/en/current/Catalog/"}
  ],
  housing: [
    {label:"Housing & Dining", url:"https://www.berea.edu/life-at-berea/housing-dining/"}
  ],
  intl: [
    {label:"International FAQs / checklist", url:"https://www.berea.edu/admissions/admission-information/apply/checklist-items/international-faqs/"},
    {label:"International Student Services", url:"https://www.berea.edu/centers/center-for-international-education/international-student-and-scholar-services/"},
    {label:"International costs & aid", url:"https://www.berea.edu/costs-and-financial-aid-for-international-students/"}
  ],
  studyabroad: [
    {label:"Education Abroad (CIE)", url:"https://www.berea.edu/centers/center-for-international-education/education-abroad/"},
    {label:"Center for International Education (CIE)", url:"https://www.berea.edu/centers/center-for-international-education/"}
  ],
  aid: [
    {label:"Cost of Attendance", url:"https://www.berea.edu/student-financial-aid/cost-of-attendance/"},
    {label:"Understanding your aid award", url:"https://www.berea.edu/student-financial-aid/understanding-your-financial-aid-award/"},
    {label:"Student Accounts Office", url:"https://www.berea.edu/student-accounts-office/"}
  ],
  visit: [
    {label:"Visit campus overview", url:"https://www.berea.edu/admissions/visiting-campus/"},
    {label:"Book a daily visit (Slate)", url:"https://admissions.berea.edu/portal/visitSlate_ind_campus_visit"},
    {label:"Group visits", url:"https://admissions.berea.edu/portal/group_visits"},
    {label:"Virtual tour", url:"https://www.berea.edu/virtual-tour/"}
  ],
  contact: [
    {label:"Admissions contact", url:"https://www.berea.edu/admissions/contact-us/"},
    {label:"Directory", url:"https://www.berea.edu/directory/"}
  ],
  career: [
    {label:"Career Development Office", url:"https://www.berea.edu/career-development/"},
    {label:"Résumé & Interview Prep", url:"https://www.berea.edu/career-development/"}
  ],
  about: [
    {label:"About Berea College", url:"https://www.berea.edu/about-berea/"},
    {label:"Mission & Values", url:"https://www.berea.edu/about-berea/mission/"},
    {label:"History", url:"https://www.berea.edu/about-berea/history/"}
  ],
  faculty: [
    {label:"Academics Overview", url:"https://www.berea.edu/academics/"},
    {label:"Faculty & Staff Directory", url:"https://www.berea.edu/directory/"}
  ],
  registrar: [
    {label:"Registrar", url:"https://www.berea.edu/registrar/"},
    {label:"Academic Calendar", url:"https://www.berea.edu/registrar/academic-calendar/"},
    {label:"Transcripts", url:"https://www.berea.edu/registrar/transcripts/"}
  ],
  library: [
    {label:"Hutchins Library", url:"https://www.berea.edu/library/"},
    {label:"Databases", url:"https://www.berea.edu/library/databases/"},
    {label:"Interlibrary Loan", url:"https://www.berea.edu/library/interlibrary-loan/"}
  ],
  it: [
    {label:"IT Support", url:"https://www.berea.edu/it/"},
    {label:"Account & Password Help", url:"https://www.berea.edu/it/"}
  ],
  counseling: [
    {label:"Counseling Services", url:"https://www.berea.edu/counseling-services/"},
    {label:"Crisis Resources", url:"https://www.berea.edu/counseling-services/"}
  ],
  health: [
    {label:"Student Health Services", url:"https://www.berea.edu/student-health-services/"},
    {label:"Immunization Requirements", url:"https://www.berea.edu/student-health-services/"}
  ],
  accessibility: [
    {label:"Accessibility Services", url:"https://www.berea.edu/accessibility-services/"},
    {label:"Request Accommodations", url:"https://www.berea.edu/accessibility-services/"}
  ],
  safety: [
    {label:"Public Safety", url:"https://www.berea.edu/public-safety/"},
    {label:"Emergency Procedures", url:"https://www.berea.edu/public-safety/"}
  ],
  parking: [
    {label:"Parking & Transportation", url:"https://www.berea.edu/parking/"},
    {label:"Permits & Appeals", url:"https://www.berea.edu/parking/"}
  ],
  bookstore: [
    {label:"College Bookstore", url:"https://www.berea.edu/bookstore/"},
    {label:"Textbooks", url:"https://www.berea.edu/bookstore/"}
  ],
  studentlife: [
    {label:"Life at Berea", url:"https://www.berea.edu/life-at-berea/"},
    {label:"Student Activities & Organizations", url:"https://www.berea.edu/life-at-berea/student-activities/"},
    {label:"Student Government (SGA)", url:"https://www.berea.edu/sga/"}
  ],
  orientation: [
    {label:"New Student Orientation", url:"https://www.berea.edu/orientation/"},
    {label:"Move-In Info", url:"https://www.berea.edu/orientation/"}
  ],
  tutoring: [
    {label:"Academic Support", url:"https://www.berea.edu/academic-support/"},
    {label:"Writing Center", url:"https://www.berea.edu/writing-center/"}
  ],
  chapel: [
    {label:"Campus Ministries", url:"https://www.berea.edu/chapel/"},
    {label:"Service & Worship", url:"https://www.berea.edu/chapel/"}
  ],
  athletics: [
    {label:"Berea Athletics", url:"https://bereamountaineers.com/"},
    {label:"Sports & Schedules", url:"https://bereamountaineers.com/sports"}
  ],
  accounts: [
    {label:"Student Accounts Office", url:"https://www.berea.edu/student-accounts-office/"},
    {label:"Billing & Payments", url:"https://www.berea.edu/student-accounts-office/payments/"}
  ],
  service: [
    {label:"CELTS", url:"https://www.berea.edu/celts/"},
    {label:"Bonner Scholars", url:"https://www.berea.edu/bonner-scholars/"}
  ],
  events: [
    {label:"Campus Calendar", url:"https://www.berea.edu/events/"},
    {label:"Student Activities", url:"https://www.berea.edu/life-at-berea/student-activities/"}
  ],
  about_extra: []
};


// Elements

const chatBox   = document.getElementById('chat');
const form      = document.getElementById('form');
const input     = document.getElementById('text');
const sendBtn   = document.getElementById('send');
const tagWrap   = document.getElementById('tags');
const clearBtn  = document.getElementById('clear');
const drawer    = document.getElementById('drawer');
const scrim     = document.getElementById('scrim');
const menuBtn   = document.getElementById('menuToggle');
const closeBtn  = document.getElementById('closeDrawer');

/* Save PDF elements */
const saveBtn   = document.getElementById('savePdf');
const printHdr  = document.getElementById('printHeader');

/* Landing + login elements */
const landing         = document.getElementById('landing');
const continueAccount = document.getElementById('continueAccount');
const continueGuest   = document.getElementById('continueGuest');

const loginOverlay    = document.getElementById('loginOverlay');
const loginForm       = document.getElementById('loginForm');
const loginContinue   = document.getElementById('loginContinue');
// const loginEmail    = document.getElementById('loginEmail');
// const loginPassword = document.getElementById('loginPassword');

/* Account button in drawer footer */
const accountBtn      = document.getElementById('accountBtn');

let lastTopic   = null;
let currentMode = null; 

// Utilities

function escapeHtml(str){
  return str.replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}
function linkify(text){
  const urlRe = /((?:https?:\/\/|file:\/\/)[^\s]+)/gi;
  const safe = escapeHtml(text);
  return safe.replace(urlRe, (m)=>`<a href="${m}" target="_blank" rel="noopener">${m}</a>`);
}
function addBubble(text, who='bot', asHtml=false){
  const div = document.createElement('div');
  div.className = `msg ${who}`;
  if (asHtml) {
    div.innerHTML = text;
  } else {
    div.innerHTML = (who === 'me') ? linkify(text) : escapeHtml(text);
  }
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  return div;
}
function addLoadingBubble(){
  const div = document.createElement('div');
  div.className = 'msg bot loading';
  div.innerHTML = '<span class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>';
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  return div;
}
function disableForm(disabled){ input.disabled = disabled; sendBtn.disabled = disabled; }
function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }
async function typewriterInto(el, text, chunk=3, delay=12){
  el.textContent = "";
  let i = 0;
  while (i < text.length){
    el.textContent += text.slice(i, i+chunk);
    i += chunk;
    chatBox.scrollTop = chatBox.scrollHeight;
    await sleep(delay);
  }
}
function stripToText(html){
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || '').trim();
}
function renderProgressiveHTML(el, html){
  el.classList.remove('loading');
  el.innerHTML = html;
  chatBox.scrollTop = chatBox.scrollHeight;
}

/* Save-as-PDF */
function formatNow(){
  const d = new Date();
  return d.toLocaleString(undefined, {
    weekday:'short', year:'numeric', month:'short', day:'2-digit',
    hour:'2-digit', minute:'2-digit'
  });
}
function saveChatAsPDF(){
  // This section to only allow when in account mode
  if (currentMode !== 'account') {
    alert('Saving chat as PDF is only available when you continue with an account.');
    return;
  }

  if (!chatBox || chatBox.children.length === 0){
    alert('No messages yet. Ask something first, then try again.');
    return;
  }
  if (printHdr){
    printHdr.textContent = `Tuishin' You Well Bot — Chat transcript • ${formatNow()}`;
  }
  const loaders = chatBox.querySelectorAll('.msg.loading');
  loaders.forEach(l => l.classList.remove('loading'));
  window.print();
}