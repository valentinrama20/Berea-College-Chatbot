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


// Private recommendations

function saveRecommendations(topic){
  const rec = FOLLOWUPS[topic] || [];
  if (!rec.length) return;
  const key = 'berea_recos';
  const store = JSON.parse(localStorage.getItem(key) || '{}');
  const merged = new Set([...(store[topic] || []), ...rec]);
  store[topic] = Array.from(merged);
  localStorage.setItem(key, JSON.stringify(store));
}
function getRecommendations(topic){
  const key = 'berea_recos';
  const store = JSON.parse(localStorage.getItem(key) || '{}');
  return store[topic] || [];
}


// Casual tone helpers

function casualIntro(topic, q) {
  const labels = {
    location:   "You’re asking where Berea is.",
    tuition:    "You’re wondering how tuition and costs work.",
    labor:      "You’re asking about the Labor Program and campus jobs.",
    admissions: "You’re asking about getting into Berea.",
    majors:     "You’re asking what you can study here.",
    housing:    "You’re asking about housing and dining.",
    intl:       "You’re asking about international student stuff.",
    studyabroad:"You’re asking about studying abroad from Berea.",
    aid:        "You’re asking about financial aid beyond tuition.",
    visit:      "You’re asking about visiting campus.",
    contact:    "You’re asking how to reach the right office.",
    career:     "You’re asking about careers or internships.",
    about:      "You’re asking what Berea College is about.",
    faculty:    "You’re asking about faculty and classes.",
    registrar:  "You’re asking about registration or transcripts.",
    library:    "You’re asking about the library and research.",
    it:         "You’re asking about tech or account help.",
    counseling: "You’re asking about counseling or mental health support.",
    health:     "You’re asking about health services.",
    accessibility:"You’re asking about accessibility or accommodations.",
    safety:     "You’re asking about campus safety.",
    parking:    "You’re asking about parking or permits.",
    bookstore:  "You’re asking about the bookstore or textbooks.",
    studentlife:"You’re asking about student life and activities.",
    orientation:"You’re asking about new student orientation.",
    tutoring:   "You’re asking about tutoring or academic support.",
    chapel:     "You’re asking about chapel or spiritual life.",
    athletics:  "You’re asking about sports and athletics.",
    accounts:   "You’re asking about billing or student accounts.",
    service:    "You’re asking about service or volunteering.",
    events:     "You’re asking about campus events."
  };

  const label = labels[topic];
  if (!label) {
    return "Here’s the quick version, then some links if you want details.";
  }
  return label + " Here’s the simple version.";
}

// Sub-intent routing

function specificAnswer(topic, q){
  const lq = q.toLowerCase();

  if (topic === "admissions"){
    if (/deadline|due|when\b.*(apply|application)/.test(lq) || /\bdeadlines?\b/.test(lq)){
      return "Deadlines change by term and by whether you are first-year, transfer, or international. The safest move is to check the Deadlines & Requirements page, then start your application in the online portal.";
    }
    if (/gpa|requirement|requirements?|sat|act|test/.test(lq)){
      return "Berea uses a holistic review. Test scores can be optional. Make sure you read the Admissions Information page for what they want to see: transcripts, recommendations, essays, and any test scores you plan to send.";
    }
    if (/transfer/.test(lq)){
      return "Transfers follow their own process and timeline. Before you apply, read the Transfer Students section so you understand how your previous courses will be reviewed and what dates matter for you.";
    }
  }

  if (topic === "tuition"){
    if (/cover|covered|not covered|fees|room|board|books|expenses|costs?/.test(lq)){
      return "The Tuition Promise covers tuition only. You still need a plan for housing, meals, books, and fees. The Cost of Attendance page gives a good breakdown so you can see the bigger picture.";
    }
    if (/qualif|eligib|how.*qualify/.test(lq)){
      return "To benefit from the Tuition Promise, you first need to be admitted and show financial need. The No Tuition page explains the basics, and Financial Aid can walk through your specific situation.";
    }
  }

  if (topic === "aid"){
    if (/cost of attendance|coa|estimate|budget/.test(lq)){
      return "Use the Cost of Attendance chart as your starting budget for housing, meals, books, personal, and travel costs. Then think about how need-based aid plus campus earnings can help cover those pieces.";
    }
    if (/award|package|letter|how much/.test(lq)){
      return "Your aid award puts together grants, scholarships, and campus earnings. The 'Understanding Your Aid Award' page explains how it all fits. For detailed numbers, it’s best to talk directly with Student Financial Aid or Student Accounts.";
    }
  }

  if (topic === "labor"){
    if (/how many|hours|schedule/.test(lq)){
      return "Most students work around 10 hours per week. Your exact schedule gets set up with your labor department and supervisor, usually during orientation or early in the term.";
    }
    if (/pay|wage|salary/.test(lq)){
      return "Pay is based on the Labor Program pay scale. Your assignment level affects your rate, so checking the pay schedule is the easiest way to see what to expect.";
    }
    if (/first[- ]?year|freshman|first year|new student/.test(lq)){
      return "First-year students can be placed in lots of different roles across campus offices, student life, facilities, IT, and more. You’ll get guidance during labor onboarding so you aren’t guessing on your own.";
    }
  }

  if (topic === "majors"){
    if (/list|which|what (are|is) (the )?majors|programs?/.test(lq)){
      return "For the full list of majors and minors, go straight to the Majors & Minors page. If you want details on requirements and classes, the Catalog is the best place to read through.";
    }
    if (/calendar|when.*(term|semester)/.test(lq)){
      return "If you’re planning around terms and breaks, the Academic Calendar is the place to check dates for each semester, registration windows, and holidays.";
    }
  }

  if (topic === "housing"){
    if (/meal|dining|plan/.test(lq)){
      return "Meal plans connect to both where you live and your student status. The Housing & Dining page walks through the different plan options and how to request a change if you need it.";
    }
    if (/policy|policies|rules/.test(lq)){
      return "Housing policies cover things like visitation, quiet hours, and safety rules. Housing & Residence Life posts these policies so you can read them before you pick or change a room.";
    }
  }

  if (topic === "intl"){
    if (/visa|i-20|sevis|embassy|consulate/.test(lq)){
      return "Once you’re admitted and your finances are documented, you can move into the I-20 and visa steps. International Student Services is the office that helps you with SEVIS, embassy appointments, and the details.";
    }
    if (/english|toefl|ielts|duolingo|proficien/.test(lq)){
      return "Berea accepts several ways to show English proficiency, including approved tests. The International FAQs list the options so you can see which one fits you best.";
    }
  }

  if (topic === "visit"){
    if (/book|schedule|reserve|appointment/.test(lq)){
      return "To lock in a visit, use the online scheduler for daily campus visits. If you’re bringing a group, use the Group Visits form. If you can’t travel, the Virtual Tour is an easy way to see campus from home.";
    }
    if (/virtual|online tour/.test(lq)){
      return "If you just want to get a feel for campus from a distance, the Virtual Tour is a quick way to look around buildings and spaces without having to travel.";
    }
  }

  if (topic === "career"){
    if (/internship|internships?/.test(lq)){
      return "Career Development can help you find and prepare for internships by checking your résumé, coaching you on search strategies, and connecting you to employers. A good first step is to book a résumé review and then explore their internship resources.";
    }
    if (/resume|cv|cover letter|interview/.test(lq)){
      return "If you want help with a résumé, cover letter, or interview prep, book a Career Development appointment. They also run workshops and employer events where you can practice and get feedback.";
    }
    if (/job fair|employer|event|workshop/.test(lq)){
      return "Keep an eye on Career Development events like job fairs, employer talks, and skills workshops. Those are the best times to meet recruiters and practice networking in a low-pressure way.";
    }
  }

  return null;
}

// Topic matching

function matchTopic(q){
  const low = q.toLowerCase();
  const scored = KB.map(item => {
    let score = 0;
    for (const k of item.keywords){ if (low.includes(k)) score += 1; }
    return { topic: item.topic, score };
  }).sort((a,b)=>b.score-a.score);
  const top = scored[0];
  if (!top || top.score === 0) return null;
  return top.topic;
}

// Blocks

function linkBlock(topic){
  const links = LINKS[topic] || [];
  if (!links.length) return "";
  const items = links
    .map(l => `<li><a href="${l.url}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a></li>`)
    .join("");
  return `\n\n<strong>Helpful links</strong>\n<ul>${items}</ul>`;
}
function nextSteps(topic){
  const map = {
    admissions: ["Check deadlines", "Start your online application", "Request your transcripts"],
    tuition: ["Read Tuition Promise details", "Estimate non-tuition costs", "Ask Financial Aid questions"],
    aid: ["Review Cost of Attendance", "Compare aid vs. campus earnings", "Plan books/transport"],
    visit: ["Pick a date", "Reserve a slot", "Review parking info"],
    intl: ["Check checklist & FAQs", "Confirm deposit requirements", "Review visa guidance"],
    career: ["Book a résumé review", "Browse internship resources", "Attend a career workshop"],
    registrar: ["Check the academic calendar", "Request your transcript", "Review add/drop dates"],
    parking: ["Review permit options", "Buy a permit", "Check lot maps"]
  };
  const steps = map[topic] || [];
  if (!steps.length) return "";
  const items = steps.map(s => `<li>${escapeHtml(s)}</li>`).join("");
  return `\n\n<strong>Next steps</strong>\n<ol>${items}</ol>`;
}
function buildAnswer(topic, q){
  const baseObj = KB.find(x => x.topic === topic);
  const base = baseObj ? baseObj.answer : "";
  const extra = (EXPAND[topic] || "").trim();
  const specific = specificAnswer(topic, q);
  const intro = casualIntro(topic, q);

  let bodyText = specific || base || "";
  if (!specific && extra) {
    bodyText = (base + "\n\n" + extra).trim();
  }

  const introHtml = intro ? `<p>${escapeHtml(intro)}</p>` : "";
  const bodyHtml  = bodyText ? `<p>${escapeHtml(bodyText)}</p>` : "";

  return `${introHtml}${bodyHtml}${linkBlock(topic)}${nextSteps(topic)}`;
}

// Small talk

function handleSmallTalk(q){
  const l = q.toLowerCase().trim();

  if (/\bhow\s*(are|r)\s*(you|u)\b/.test(l) || /(how'?s|hows)\s+(it|things)\s+(going|goin)/.test(l)) {
    return "I’m doing alright. I’m mainly here to help you with Berea College questions like admissions, tuition, majors, housing, Labor Program, visits, financial aid, and campus services.";
  }

  const greetingOnly = /\b(hi|hello|hey|yo|hiya|greetings)\b/.test(l) && !matchTopic(q);
  if (greetingOnly) {
    return "Hi. Ask me anything about Berea College — for example admissions, tuition, majors, campus jobs, housing, visits, or financial aid — in one short sentence.";
  }

  return null;
}
function findAnswer(q, topicHint=null, fromFollowup=false){
  const small = handleSmallTalk(q);
  if (small) return { html: `<p>${escapeHtml(small)}</p>`, topic: null };

  let topic = matchTopic(q);
  if (!topic && fromFollowup && topicHint) topic = topicHint;

  if (topic) return { html: buildAnswer(topic, q), topic };

  return {
    html: `<p>I’m not totally sure what you mean. Try asking in one short sentence about admissions, tuition, majors, housing, Labor Program, visits, financial aid, or other Berea topics.</p>`,
    topic: null
  };
}

//Ask Flow

async function ask(q, topicHint=null, fromFollowup=false){
  addBubble(q,'me'); input.value='';
  disableForm(true);

  const loader = addLoadingBubble();
  const { html, topic } = findAnswer(q, topicHint, fromFollowup);

  renderProgressiveHTML(loader, html);

  if (topic) {
    lastTopic = topic;
    saveRecommendations(topic);
  } else {
    lastTopic = null;
  }

  disableForm(false);
  input.focus();
}


// Drawer & tags

function openDrawer(){
  drawer.classList.add('open');
  scrim.hidden = false;
  menuBtn.setAttribute('aria-expanded','true');
}
function closeDrawer(){
  drawer.classList.remove('open');
  scrim.hidden = true;
  menuBtn.setAttribute('aria-expanded','false');
}
menuBtn.addEventListener('click', ()=> {
  const open = drawer.classList.contains('open');
  open ? closeDrawer() : openDrawer();
});
closeBtn.addEventListener('click', closeDrawer);
scrim.addEventListener('click', closeDrawer);
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeDrawer(); });

function loadTags(){
  tagWrap.innerHTML = '';
  for(const label of QUICK){
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tag';
    b.textContent = label;
    b.addEventListener('click', ()=>{ input.value = label; form.requestSubmit(); closeDrawer(); });
    tagWrap.appendChild(b);
  }
}
function welcome(){
  addBubble(
    "Hi, I’m the Tuishin’ You Well Bot. Ask me about Berea College — things like admissions, tuition, Labor Program jobs, majors, housing, visiting campus, financial aid, and student services."
  );
}
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const q = input.value.trim(); if(!q) return;
  ask(q, lastTopic, false);
});
input.addEventListener('keydown', (e)=>{
  if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); form.requestSubmit(); }
});
if (clearBtn) {
  clearBtn.addEventListener('click', ()=>{
    chatBox.innerHTML=''; lastTopic = null; welcome(); input.focus();
  });
}
if (saveBtn){
  saveBtn.addEventListener('click', saveChatAsPDF);
}
loadTags();
welcome();


// Mode -> feature toggle

function applyMode(mode) {
  currentMode = mode;
  const isAccount = mode === 'account';

  if (saveBtn) {
    saveBtn.disabled = !isAccount;

    if (isAccount) {
      saveBtn.title = "Save current chat as PDF";
    } else {
      saveBtn.title = "Save chat is only available when you continue with an account.";
    }
  }

  // Show/hide Account button based on mode

  if (accountBtn) {
    accountBtn.style.display = isAccount ? 'block' : 'none';
  }
}


// Landing + login logic 

function hideLanding(){
  if (landing) landing.style.display = 'none';
}
function showLanding(){
  if (landing) landing.style.display = 'flex';
}
function hideLogin(){
  if (loginOverlay) loginOverlay.style.display = 'none';
}
function showLogin(){
  if (loginOverlay) loginOverlay.style.display = 'flex';
}
function setMode(mode){
  try { sessionStorage.setItem('berea_mode', mode); } catch {}
}
function getMode(){
  try { return sessionStorage.getItem('berea_mode'); } catch { return null; }
}

// On load: restore mode for this tab or default to guest
const existingMode = getMode();
if (existingMode){
  hideLanding();
  hideLogin();
  applyMode(existingMode);
} else {
  // No mode yet: guest features, show landing, keep login hidden
  applyMode('guest');
  showLanding();
  hideLogin();
}

// Landing actions
if (continueAccount){
  continueAccount.addEventListener('click', ()=>{
    // Go from landing -> login overlay (demo login)
    hideLanding();
    showLogin();
  });
}
if (continueGuest){
  continueGuest.addEventListener('click', ()=>{
    setMode('guest');
    applyMode('guest');
    hideLanding();
    hideLogin();
    input.focus();
  });
}

// Login form: continue even if fields are empty
if (loginForm && loginContinue){
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    hideLogin();
    setMode('account');
    applyMode('account');
    input.focus();
  });
}

// Account button behavior

if (accountBtn){
  accountBtn.addEventListener('click', ()=>{
    addBubble(
      "Account settings aren’t wired up yet in this demo. In a full version, this is where you’d manage your profile or saved chats.",
      "bot"
    );
    closeDrawer();
  });
}


// Additions

EXPAND.studyabroad = `• Options: semester/year exchanges, summer/short-term faculty-led, and independent programs
• Support: advising, course approvals, and scholarship guidance
• Plan early: language prep, finances, and credit transfer steps`;