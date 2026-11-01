/**
 * Chkela Web Platform & Natural Sciences Assessment Engine
 * Organization: Lolearn Solutions (Addis Ababa, Ethiopia)
 * Frontend Architecture & Natural Sciences Question Bank Author: Gosa Negeso Geleto
 */

const NATURAL_SCIENCES_BANK = [
  {
    id: "PHY-12-01",
    subject: "Physics",
    grade: "Grade 12 EUEE",
    topic: "Newtonian Mechanics & Inclined Planes",
    author: "Gosa Negeso Geleto",
    stem: "A 10 kg crate is pulled up a rough incline of angle θ = 37° (sin 37° = 0.6, cos 37° = 0.8) at a constant velocity of 2.5 m/s by a rope parallel to the incline. If the coefficient of kinetic friction is μk = 0.25 and g = 10 m/s², what is the power delivered by the tension force?",
    options: [
      "A) 150 W",
      "B) 200 W",
      "C) 250 W",
      "D) 80 W"
    ],
    correctIndex: 1,
    explanation: "Because the crate moves at a constant velocity (a = 0), the net force along the incline is zero. Therefore, Tension T balances both the parallel component of gravity and kinetic friction.",
    formula: "T = mg sin(37°) + μk mg cos(37°) = 100(0.6) + 0.25(100)(0.8) = 60 + 20 = 80 N  ⇒  P = T · v = 80 N × 2.5 m/s = 200 W",
    aiTutorNote: "Exam Trap Alert (English / አማርኛ): Many students forget that constant velocity means acceleration a = 0, or they forget to multiply the tension force (80 N) by the velocity (2.5 m/s) to get Power in Watts (200 W)."
  },
  {
    id: "PHY-12-02",
    subject: "Physics",
    grade: "Grade 12 EUEE",
    topic: "Electromagnetism & Kirchhoff's Loop Rule",
    author: "Gosa Negeso Geleto",
    stem: "A battery with EMF ε = 18 V and internal resistance r = 1.5 Ω is connected across a load resistor R = 7.5 Ω. What are the terminal voltage V_term across the battery and the power dissipated inside the internal resistance?",
    options: [
      "A) V_term = 15.0 V, P_internal = 6.0 W",
      "B) V_term = 16.5 V, P_internal = 3.0 W",
      "C) V_term = 15.0 V, P_internal = 30.0 W",
      "D) V_term = 18.0 V, P_internal = 4.5 W"
    ],
    correctIndex: 0,
    explanation: "First compute total circuit current I = ε / (R + r). Then find terminal voltage V_term = ε - I·r and internal heat dissipation P_internal = I²·r.",
    formula: "I = 18 / (7.5 + 1.5) = 2.0 A  ⇒  V_term = 18 - (2.0)(1.5) = 15.0 V  |  P_internal = (2.0)² × 1.5 = 6.0 W",
    aiTutorNote: "Remember: Terminal voltage drops below EMF when current flows out of the battery (discharging). Always divide EMF by the sum (R + r) first!"
  },
  {
    id: "CHEM-12-01",
    subject: "Chemistry",
    grade: "Grade 12 EUEE",
    topic: "Electrochemistry & Nernst Equation",
    author: "Gosa Negeso Geleto",
    stem: "In the galvanic cell Zn(s) | Zn²⁺(1.0 M) || Cu²⁺(1.0 M) | Cu(s), the standard reduction potentials are E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V. What is the standard Gibbs free energy change (ΔG°) for the reaction at 298 K? (F = 96,500 C/mol)",
    options: [
      "A) -106.15 kJ/mol",
      "B) -212.30 kJ/mol",
      "C) +212.30 kJ/mol",
      "D) -81.06 kJ/mol"
    ],
    correctIndex: 1,
    explanation: "Zinc is oxidized at the anode and Copper is reduced at the cathode. Two moles of electrons (n = 2) are transferred per mole of reaction.",
    formula: "E°cell = E°cathode - E°anode = +0.34 - (-0.76) = +1.10 V  ⇒  ΔG° = -nFE° = -(2)(96,500)(1.10) = -212,300 J/mol = -212.30 kJ/mol",
    aiTutorNote: "NEAEA examiners frequently include the n = 1 value (-106.15 kJ) and the positive sign (+212.30 kJ) as distractors. Always verify the number of electrons transferred (n = 2) and that spontaneous galvanic cells have ΔG° < 0."
  },
  {
    id: "CHEM-11-02",
    subject: "Chemistry",
    grade: "Grade 11–12 EUEE",
    topic: "Chemical Equilibrium & Buffer Solutions",
    author: "Gosa Negeso Geleto",
    stem: "What is the pH of an aqueous buffer solution containing 0.20 M acetic acid (CH₃COOH, Ka = 1.8 × 10⁻⁵) and 0.20 M sodium acetate (CH₃COONa) at 25°C? (log 1.8 = 0.26)",
    options: [
      "A) 4.74",
      "B) 5.26",
      "C) 2.87",
      "D) 7.00"
    ],
    correctIndex: 0,
    explanation: "By the Henderson-Hasselbalch equation, when the molar concentration of a weak acid equals that of its conjugate base ([A⁻] = [HA]), the ratio log([A⁻]/[HA]) = log(1) = 0, so pH = pKa.",
    formula: "pKa = -log(1.8 × 10⁻⁵) = 5 - log(1.8) = 5 - 0.26 = 4.74  ⇒  pH = 4.74 + log(0.20 / 0.20) = 4.74",
    aiTutorNote: "Shortcut for Matric: Whenever [Conjugate Base] == [Weak Acid], don't waste time doing division—pH is immediately equal to pKa!"
  },
  {
    id: "BIO-12-01",
    subject: "Biology",
    grade: "Grade 12 EUEE",
    topic: "Cellular Respiration & Bioenergetics",
    author: "Gosa Negeso Geleto",
    stem: "During aerobic cellular respiration of one molecule of glucose, which stage directly produces the greatest number of ATP molecules, and where does it occur in eukaryotic cells?",
    options: [
      "A) Krebs Cycle in the mitochondrial matrix",
      "B) Glycolysis in the cytosol",
      "C) Oxidative phosphorylation across the inner mitochondrial membrane",
      "D) Link reaction in the outer mitochondrial compartment"
    ],
    correctIndex: 2,
    explanation: "While glycolysis and the Krebs cycle each yield only 2 ATP via substrate-level phosphorylation, the electron transport chain and chemiosmosis (oxidative phosphorylation) across the cristae (inner mitochondrial membrane) generate ~32–34 ATP per glucose.",
    formula: "Net Yield ≈ 2 ATP (Glycolysis) + 2 ATP (Krebs) + 32–34 ATP (ETC / Chemiosmosis on Inner Mitochondrial Membrane)",
    aiTutorNote: "Pay close attention to location questions on the Ethiopian Biology Matric: Glycolysis = Cytosol; Link & Krebs = Mitochondrial Matrix; Electron Transport Chain & ATP Synthase = Inner Mitochondrial Membrane (Cristae)."
  },
  {
    id: "BIO-12-02",
    subject: "Biology",
    grade: "Grade 12 EUEE",
    topic: "Molecular Genetics & DNA Replication",
    author: "Gosa Negeso Geleto",
    stem: "A double-stranded DNA molecule from a bacteriophage contains 1,200 base pairs in total, of which 28% of the nitrogenous bases are Adenine (A). How many Cytosine (C) nucleotides are present in this DNA molecule?",
    options: [
      "A) 528 Cytosine nucleotides",
      "B) 264 Cytosine nucleotides",
      "C) 672 Cytosine nucleotides",
      "D) 336 Cytosine nucleotides"
    ],
    correctIndex: 0,
    explanation: "1,200 base pairs equals 2,400 total individual nucleotides. By Chargaff's rules, %A = %T = 28% (total 56%), leaving 44% for G + C, or 22% Cytosine.",
    formula: "Total bases = 1,200 bp × 2 = 2,400 bases  ⇒  %C = (100% - 2 × 28%) / 2 = 22%  ⇒  Number of C = 0.22 × 2,400 = 528",
    aiTutorNote: "Watch out for the 'base pairs' vs. 'bases' trap! 1,200 base pairs = 2,400 nucleotides. If you multiplied 0.22 by 1,200 you would get 264 (Option B, the classic NEAEA trap)."
  },
  {
    id: "MATH-12-01",
    subject: "Mathematics",
    grade: "Grade 12 EUEE",
    topic: "Differential Calculus & Optimization",
    author: "Gosa Negeso Geleto",
    stem: "If f(x) = x³ - 6x² + 9x + 2 on the closed interval [0, 4], what is the sum of the absolute maximum value and the absolute minimum value of f(x) on this interval?",
    options: [
      "A) 8",
      "B) 6",
      "C) 10",
      "D) 4"
    ],
    correctIndex: 0,
    explanation: "Set f'(x) = 3x² - 12x + 9 = 3(x - 1)(x - 3) = 0 to find critical points x = 1 and x = 3. Evaluate f(x) at critical points and endpoints x = 0, 1, 3, 4.",
    formula: "f(0) = 2,  f(1) = 1 - 6 + 9 + 2 = 6,  f(3) = 27 - 54 + 27 + 2 = 2,  f(4) = 64 - 96 + 36 + 2 = 6  ⇒  Max (6) + Min (2) = 8",
    aiTutorNote: "Always test both critical points (where f'(x) = 0) AND the interval endpoints [0, 4]."
  },
  {
    id: "MATH-11-02",
    subject: "Mathematics",
    grade: "Grade 11–12 EUEE",
    topic: "Vectors in 3D Space",
    author: "Gosa Negeso Geleto",
    stem: "For what value of scalar k are the three-dimensional vectors u = (2, -3, k) and v = (6, k, -3) orthogonal (perpendicular)?",
    options: [
      "A) k = 0",
      "B) k = 2",
      "C) k = -2",
      "D) k = 3"
    ],
    correctIndex: 1,
    explanation: "Two non-zero vectors are orthogonal if and only if their dot product u · v equals zero.",
    formula: "u · v = (2)(6) + (-3)(k) + (k)(-3) = 12 - 6k = 0  ⇒  6k = 12  ⇒  k = 2",
    aiTutorNote: "Orthogonal means perpendicular (θ = 90°), so cos(90°) = 0 and u · v = 0."
  }
];

const REVISION_NOTES = [
  {
    subject: "Physics · Grade 12",
    title: "Rotational Dynamics & Conservation of Angular Momentum",
    summary: "Net external torque τ_ext = dL/dt. When τ_ext = 0, total angular momentum L = Iω remains constant (e.g., an ice skater pulling arms inward decreases moment of inertia I and increases angular speed ω).",
    formula: "L_i = L_f  ⇒  I₁ω₁ = I₂ω₂   |   K_rot = ½ I ω²"
  },
  {
    subject: "Chemistry · Grade 12",
    title: "Faraday's Laws of Electrolysis",
    summary: "The mass (m) of a substance deposited or liberated at an electrode is directly proportional to the total electric charge Q = I·t passed through the electrolyte.",
    formula: "m = (Q · M) / (n · F) = (I · t · M) / (n · 96,500)"
  },
  {
    subject: "Biology · Grade 11–12",
    title: "C3, C4, and CAM Carbon Fixation Pathways",
    summary: "C4 plants (e.g., maize, sugarcane, sorghum) spatially separate initial CO₂ fixation (via PEP carboxylase in mesophyll cells) from the Calvin cycle (in bundle-sheath cells) to minimize photorespiration in hot climates.",
    formula: "PEP + CO₂ → Oxaloacetate (4C) [No affinity of PEP carboxylase for O₂]"
  },
  {
    subject: "Mathematics · Grade 12",
    title: "Fundamental Theorem of Calculus & Integration by Parts",
    summary: "Used throughout Grade 12 NEAEA exams to evaluate definite areas and products of algebraic and transcendental functions using the LIATE priority rule.",
    formula: "∫ u dv = u·v - ∫ v du"
  }
];

let currentSubjectFilter = "ALL";
let filteredQuestions = [...NATURAL_SCIENCES_BANK];
let currentQuestionIndex = 0;
let sessionCorrect = 0;
let sessionAttempted = 0;
let currentUser = null;

// Switch Top-Level SPA Views
function switchView(viewName) {
  const views = ["landing", "portal", "auth-login", "auth-register", "about"];
  views.forEach((v) => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      el.classList.toggle("hidden", v !== viewName);
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (viewName === "portal") {
    renderQuestion();
    renderNotes();
  }
}

function scrollToSection(id) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, 60);
}

// Hero Phone Mini Drill Handler
function checkMiniAnswer(btnElement, isCorrect) {
  const parent = document.getElementById("miniOptions");
  const buttons = parent.querySelectorAll(".mini-opt");
  buttons.forEach((b) => b.classList.remove("correct", "wrong"));

  const feedback = document.getElementById("miniFeedback");
  feedback.classList.remove("hidden");

  if (isCorrect) {
    btnElement.classList.add("correct");
    feedback.innerHTML = "✅ <strong>Correct!</strong> f_s,max = μs mg cos(30°) = 22.5 N, which exceeds mg sin(30°) = 20.0 N. So block stays at rest and f_s = 20.0 N.";
  } else {
    btnElement.classList.add("wrong");
    feedback.innerHTML = "⚠️ <strong>Watch the trap!</strong> 22.5 N is the maximum possible static friction, but the block only needs 20.0 N (mg sin 30°) to stay in equilibrium.";
  }
}

// Subject Filtering & Question Rendering
function selectSubject(subject, btnEl) {
  currentSubjectFilter = subject;
  document.querySelectorAll(".subj-btn").forEach((b) => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");

  filteredQuestions =
    subject === "ALL"
      ? [...NATURAL_SCIENCES_BANK]
      : NATURAL_SCIENCES_BANK.filter((q) => q.subject === subject);

  currentQuestionIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  const q = filteredQuestions[currentQuestionIndex];
  if (!q) return;

  document.getElementById("activeQuestionBadge").textContent = `${q.subject.toUpperCase()} · ${q.grade}`;
  document.getElementById("activeQuestionTopic").textContent = q.topic;
  document.getElementById("questionCounter").textContent = `Question ${currentQuestionIndex + 1} of ${filteredQuestions.length}`;
  document.getElementById("questionAuthorTag").textContent = `Author: ${q.author} · Chkela Natural Sciences`;
  document.getElementById("questionStemText").textContent = q.stem;

  const optsContainer = document.getElementById("optionsContainer");
  optsContainer.innerHTML = "";

  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = optText;
    btn.onclick = () => evaluateAnswer(idx, btn);
    optsContainer.appendChild(btn);
  });

  document.getElementById("explanationBox").classList.add("hidden");
  document.getElementById("aiTutorPanel").classList.add("hidden");
}

function evaluateAnswer(selectedIndex, clickedBtn) {
  const q = filteredQuestions[currentQuestionIndex];
  const allButtons = document.querySelectorAll("#optionsContainer .option-btn");

  allButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctIndex) {
      btn.classList.add("correct");
    }
  });

  sessionAttempted++;
  const expBox = document.getElementById("explanationBox");
  const expVerdict = document.getElementById("expVerdict");

  if (selectedIndex === q.correctIndex) {
    sessionCorrect++;
    expVerdict.textContent = "✅ Correct! (+1 Matric Mastery Point)";
    expVerdict.style.color = "#34d399";
  } else {
    clickedBtn.classList.add("wrong");
    expVerdict.textContent = "❌ Incorrect — Review the Step-by-Step Solution Below";
    expVerdict.style.color = "#fca5a5";
  }

  document.getElementById("sessionScoreDisplay").textContent = `${sessionCorrect} / ${sessionAttempted}`;
  document.getElementById("expBodyText").textContent = q.explanation;
  document.getElementById("expFormulaText").textContent = q.formula;
  expBox.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % filteredQuestions.length;
  renderQuestion();
}

function prevQuestion() {
  currentQuestionIndex = (currentQuestionIndex - 1 + filteredQuestions.length) % filteredQuestions.length;
  renderQuestion();
}

function toggleAiTutorPrompt() {
  const panel = document.getElementById("aiTutorPanel");
  const q = filteredQuestions[currentQuestionIndex];
  document.getElementById("aiTutorResponse").innerHTML = `<p>${q.aiTutorNote}</p>`;
  panel.classList.toggle("hidden");
}

function switchPortalMode(mode) {
  const isDrill = mode === "drill";
  document.getElementById("portal-mode-drill").classList.toggle("hidden", !isDrill);
  document.getElementById("portal-mode-notes").classList.toggle("hidden", isDrill);
  document.getElementById("tab-drill").classList.toggle("active", isDrill);
  document.getElementById("tab-notes").classList.toggle("active", !isDrill);
}

function renderNotes() {
  const container = document.getElementById("notesContainer");
  if (!container) return;
  container.innerHTML = REVISION_NOTES.map(
    (n) => `
    <div class="note-card">
      <span class="badge-pill">${n.subject}</span>
      <h3 style="margin: 10px 0 8px;">${n.title}</h3>
      <p style="color: #94a3b8; font-size: 0.9rem;">${n.summary}</p>
      <div class="exp-formula">${n.formula}</div>
    </div>
  `
  ).join("");
}

// Ethiopian Phone Number Validator & Normalizer (+251 / 09 / 07)
function normalizeEthiopianPhone(rawInput) {
  const cleaned = rawInput.replace(/[\s\-()]/g, "");
  if (/^\+251[79]\d{8}$/.test(cleaned)) return cleaned;
  if (/^251[79]\d{8}$/.test(cleaned)) return "+" + cleaned;
  if (/^0[79]\d{8}$/.test(cleaned)) return "+251" + cleaned.slice(1);
  if (/^[79]\d{8}$/.test(cleaned)) return "+251" + cleaned;
  return null;
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const identifier = document.getElementById("loginIdentifier").value.trim();
  const errEl = document.getElementById("loginErrorMsg");

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
  const normalizedPhone = normalizeEthiopianPhone(identifier);

  if (!isEmail && !normalizedPhone) {
    errEl.textContent = "Please enter a valid Ethiopian phone number (+251 9... / 09... / 07...) or email address.";
    errEl.classList.remove("hidden");
    return;
  }

  errEl.classList.add("hidden");
  setAuthenticatedUser({
    name: isEmail ? identifier.split("@")[0] : `Student (${normalizedPhone.slice(-4)})`,
    school: "Dodola Ifa Boru Special Boarding School"
  });
  switchView("portal");
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const fullName = document.getElementById("regFullName").value.trim();
  const rawPhone = document.getElementById("regPhone").value.trim();
  const pass = document.getElementById("regPassword").value;
  const confirmPass = document.getElementById("regConfirmPassword").value;
  const school = document.getElementById("regSchool").value;
  const errEl = document.getElementById("registerErrorMsg");

  const normalizedPhone = normalizeEthiopianPhone(rawPhone);
  if (!normalizedPhone) {
    errEl.textContent = "Invalid phone format. Use +251 9XX XXX XXX, 09XX XXX XXX, or 07XX XXX XXX.";
    errEl.classList.remove("hidden");
    return;
  }

  if (pass.length < 6 || pass !== confirmPass) {
    errEl.textContent = "Passwords must match and be at least 6 characters long.";
    errEl.classList.remove("hidden");
    return;
  }

  errEl.classList.add("hidden");
  setAuthenticatedUser({ name: fullName, school });
  switchView("portal");
}

function loginDemoStudent() {
  setAuthenticatedUser({
    name: "Gosa Negeso",
    school: "Dodola Ifa Boru Boarding School"
  });
  switchView("portal");
}

function setAuthenticatedUser(userObj) {
  currentUser = userObj;
  document.getElementById("navLoginBtn").classList.add("hidden");
  document.getElementById("navRegisterBtn").classList.add("hidden");

  const pill = document.getElementById("userSessionPill");
  pill.classList.remove("hidden");
  document.getElementById("userDisplayName").textContent = userObj.name;
  const initials = userObj.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  document.getElementById("userAvatarInitials").textContent = initials;
}

function handleLogout() {
  currentUser = null;
  document.getElementById("navLoginBtn").classList.remove("hidden");
  document.getElementById("navRegisterBtn").classList.remove("hidden");
  document.getElementById("userSessionPill").classList.add("hidden");
  switchView("landing");
}

// Gift Modal Controls
function openGiftModal() {
  document.getElementById("giftModal").classList.remove("hidden");
}

function closeGiftModal() {
  document.getElementById("giftModal").classList.add("hidden");
}

function handleGiftRedeem(e) {
  e.preventDefault();
  const code = document.getElementById("giftCodeInput").value.trim().toUpperCase();
  closeGiftModal();
  alert(`🎉 Gift code "${code}" activated! Full Natural Sciences NEAEA Mock Pack unlocked.`);
  switchView("portal");
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
  renderNotes();
});
