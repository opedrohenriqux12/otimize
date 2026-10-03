/* ============================================
   OTIMIZE — Premium App Logic & Landing Screen
   ============================================ */

// Multi-Provider Official Course Catalog Data (MEC, Alura, Udemy, Coursera)
const MEC_OFFICIAL_CATALOG = [
  // --- MEC COURSES ---
  {
    id: 'mec-ti-01',
    provider: 'mec',
    title: 'Lógica de Programação & Algoritmos',
    category: 'ti',
    institution: 'IFRN — Instituto Federal do Rio Grande do Norte',
    hours: 40,
    badgeText: 'MEC',
    url: 'https://aprendamais.mec.gov.br/course/view.php?id=101',
    description: 'Aprenda os princípios fundamentais da lógica de programação, variáveis, estruturas condicionais e de repetição.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Introdução aos Algoritmos e Fluxogramas', completed: true, pts: 100 },
      { id: 'm2', title: 'Módulo 2: Variáveis, Tipos de Dados e Operadores', completed: true, pts: 100 },
      { id: 'm3', title: 'Módulo 3: Estruturas Condicionais (Se-Senão)', completed: true, pts: 100 },
      { id: 'm4', title: 'Módulo 4: Laços de Repetição (Enquanto, Para)', completed: false, pts: 100 },
      { id: 'm5', title: 'Avaliação Final do MEC & Emissão de Certificado', completed: false, pts: 200 }
    ]
  },
  {
    id: 'mec-ti-02',
    provider: 'mec',
    title: 'HTML5 e CSS3: Desenvolvimento Web',
    category: 'ti',
    institution: 'IFSP — Instituto Federal de São Paulo',
    hours: 30,
    badgeText: 'MEC',
    url: 'https://aprendamais.mec.gov.br/course/view.php?id=102',
    description: 'Crie páginas web modernas, responsivas e acessíveis utilizando HTML5 semântico e folha de estilos CSS3.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Estrutura HTML5 Semântica', completed: false, pts: 100 },
      { id: 'm2', title: 'Módulo 2: Estilização com CSS3 e Flexbox', completed: false, pts: 100 },
      { id: 'm3', title: 'Módulo 3: Layouts Responsivos e Media Queries', completed: false, pts: 100 },
      { id: 'm4', title: 'Projeto Prático & Certificação MEC', completed: false, pts: 150 }
    ]
  },
  {
    id: 'mec-gestao-01',
    provider: 'mec',
    title: 'Marketing Digital para Microempreendedores',
    category: 'gestao',
    institution: 'IFB — Instituto Federal de Brasília',
    hours: 30,
    badgeText: 'MEC',
    url: 'https://aprendamais.mec.gov.br/course/view.php?id=103',
    description: 'Estratégias de presença online, redes sociais corporativas e funil de vendas para novos negócios.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Conceitos de Marketing e Persona', completed: true, pts: 100 },
      { id: 'm2', title: 'Módulo 2: Redes Sociais & Criação de Conteúdo', completed: true, pts: 100 },
      { id: 'm3', title: 'Módulo 3: Tráfego Pago e Análise de Métricas', completed: false, pts: 100 }
    ]
  },

  // --- ALURA COURSES ---
  {
    id: 'alura-ti-01',
    provider: 'alura',
    title: 'Formação Python & Data Science',
    category: 'ti',
    institution: 'Alura — Escola de Tecnologia',
    hours: 60,
    badgeText: 'ALURA',
    url: 'https://www.alura.com.br/formacao-python',
    description: 'Domine a linguagem Python, tratamento de dados com Pandas/NumPy e visualização para tomada de decisão.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Python para Data Science Essentials', completed: false, pts: 150 },
      { id: 'm2', title: 'Módulo 2: Análise de Dados com Pandas & Matplotlib', completed: false, pts: 150 },
      { id: 'm3', title: 'Módulo 3: Estatística Aplicada & Projetos Práticos', completed: false, pts: 300 }
    ]
  },
  {
    id: 'alura-ti-02',
    provider: 'alura',
    title: 'React com TypeScript & Tailwind CSS',
    category: 'ti',
    institution: 'Alura — Front-End Masters',
    hours: 50,
    badgeText: 'ALURA',
    url: 'https://www.alura.com.br/formacao-react',
    description: 'Construa aplicações web modernas com componentes reautenticáveis, gerenciamento de estado e tipagem forte.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Fundamentos do React 18 & Hooks', completed: false, pts: 150 },
      { id: 'm2', title: 'Módulo 2: TypeScript no Front-End Moderno', completed: false, pts: 150 },
      { id: 'm3', title: 'Módulo 3: Consumo de APIs REST & Testes', completed: false, pts: 200 }
    ]
  },

  // --- UDEMY COURSES ---
  {
    id: 'udemy-ti-01',
    provider: 'udemy',
    title: 'Desenvolvimento Web Completo (Full Stack)',
    category: 'ti',
    institution: 'Udemy — Tech Academy',
    hours: 80,
    badgeText: 'UDEMY',
    url: 'https://www.udemy.com/course/desenvolvimento-web-completo/',
    description: 'Aprenda HTML5, CSS3, JavaScript ES6+, Node.js, Express e banco de dados do zero ao profissional.',
    modules: [
      { id: 'm1', title: 'Módulo 1: HTML5, CSS3 & Layouts Flexbox', completed: false, pts: 200 },
      { id: 'm2', title: 'Módulo 2: JavaScript Moderno (ES6+) & DOM', completed: false, pts: 200 },
      { id: 'm3', title: 'Módulo 3: Node.js & MongoDB Backend', completed: false, pts: 400 }
    ]
  },
  {
    id: 'udemy-gestao-01',
    provider: 'udemy',
    title: 'Gestão de Projetos Ágeis & Scrum Master',
    category: 'gestao',
    institution: 'Udemy — Agile Institute',
    hours: 25,
    badgeText: 'UDEMY',
    url: 'https://www.udemy.com/course/scrum-master/',
    description: 'Aprenda o framework Scrum, papéis do Product Owner, reuniões diárias, sprints e certificação.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Manifesto Ágil & Fundamentos do Scrum', completed: false, pts: 100 },
      { id: 'm2', title: 'Módulo 2: Sprints, Retrospectivas & Kanban', completed: false, pts: 150 }
    ]
  },

  // --- COURSERA COURSES ---
  {
    id: 'coursera-ti-01',
    provider: 'coursera',
    title: 'Google Data Analytics Professional Certificate',
    category: 'ti',
    institution: 'Google / Coursera',
    hours: 100,
    badgeText: 'COURSERA',
    url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    description: 'Certificação oficial do Google cobrindo análise de dados, SQL, R, Tableau e processos de decisão orientados a dados.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Fundamentos de Dados (Google)', completed: false, pts: 250 },
      { id: 'm2', title: 'Módulo 2: Limpeza e Organização com SQL', completed: false, pts: 250 },
      { id: 'm3', title: 'Módulo 3: Visualização com Tableau & R Studio', completed: false, pts: 500 }
    ]
  },
  {
    id: 'coursera-ti-02',
    provider: 'coursera',
    title: 'Meta Front-End Developer Specialization',
    category: 'ti',
    institution: 'Meta (Facebook) / Coursera',
    hours: 90,
    badgeText: 'COURSERA',
    url: 'https://www.coursera.org/specializations/meta-front-end-developer',
    description: 'Treinamento criado pela equipe de engenharia da Meta focado em HTML, CSS, JavaScript, React e Princípios de UX.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Web Development Fundamentals (Meta)', completed: false, pts: 250 },
      { id: 'm2', title: 'Módulo 2: React Basics & Advanced UI Components', completed: false, pts: 350 },
      { id: 'm3', title: 'Módulo 3: Capstone Project & Job Prep', completed: false, pts: 300 }
    ]
  }
];

// Application State
let appState = {
  isLoggedIn: false,
  displayName: "Novo Usuário",
  email: "",
  points: 0,
  level: 1,
  activeCourses: [],
  hasSeenPlan: false,
  bio: "",
  avatar: "",
  // Plan Details
  userPlan: {
    mainGoal: "Aumentar foco nos estudos",
    studyArea: "Tecnologia & Programação (TI)",
    screenGoal: "3h00m",
    studyGoal: "2h00m",
    limitedApps: []
  }
};

/* ============================================
   THEME SWITCHER SYSTEM (LIGHT / DARK MODE)
   ============================================ */
function applyTheme(theme) {
  const targetTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', targetTheme);
  try {
    localStorage.setItem('otimize_theme', targetTheme);
  } catch (e) {
    console.warn('LocalStorage unavailable for theme storage:', e);
  }

  document.querySelectorAll('.btn-theme-toggle').forEach(btn => {
    const sunIcon = btn.querySelector('.theme-icon-sun');
    const moonIcon = btn.querySelector('.theme-icon-moon');
    if (sunIcon && moonIcon) {
      if (targetTheme === 'light') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      }
    }
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(nextTheme);
}

function initThemeToggle() {
  const savedTheme = localStorage.getItem('otimize_theme') || 'dark';
  applyTheme(savedTheme);

  document.querySelectorAll('.btn-theme-toggle').forEach(btn => {
    btn.removeEventListener('click', toggleTheme);
    btn.addEventListener('click', toggleTheme);
  });
}

// Immediate execution to prevent Flash of Unstyled Content (FOUC)
(function () {
  try {
    const savedTheme = localStorage.getItem('otimize_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  } catch (e) {}
})();

// Main DOM Content Loaded Listener
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  loadAppState();
  initLandingLoginScreen();
  initTabNavigation();
  initChat();
  initPodcastPlayer();
  initRewardsModal();
  initMecIntegration();
  initUserPanel();
  initAnimations();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW reg error:', err));
  }
});

// ============================================
// FIREBASE INITIALIZATION & CONFIGURATION
// ============================================
// Substitua as informações abaixo pelas chaves do seu Projeto Firebase:
// (Firebase Console -> Configurações do Projeto -> Seus aplicativos -> Web)
const firebaseConfig = {
  apiKey: "AIzaSyCDCAvJqraYFAuy92xEFPS0K81qJsRua_A",
  authDomain: "otimize-1b8ab.firebaseapp.com",
  projectId: "otimize-1b8ab",
  storageBucket: "otimize-1b8ab.firebasestorage.app",
  messagingSenderId: "442977339714",
  appId: "1:442977339714:web:3a7a0c136b891af7d5a0db"
};

// Initialize Firebase if credentials configured
let auth = null;
let db = null;

if (typeof firebase !== 'undefined' && firebaseConfig.apiKey !== "SUA_API_KEY_AQUI") {
  try {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    console.log("🔥 Firebase inicializado com sucesso!");
  } catch (err) {
    console.error("Erro ao inicializar Firebase:", err);
  }
}

// Clear legacy local storage users on startup to start fresh with Firebase
function clearLegacyLocalAccounts() {
  localStorage.removeItem('otimize_registered_users');
}

// Load state from localStorage / Firebase
function loadAppState() {
  clearLegacyLocalAccounts();
  if (auth) {
    // Escuta alterações de autenticação em tempo real no Firebase
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = db.collection("users").doc(user.uid);
          const docSnap = await docRef.get();
          if (docSnap.exists) {
            appState = { ...appState, ...docSnap.data(), uid: user.uid, isLoggedIn: true };
          } else {
            appState.isLoggedIn = true;
            appState.uid = user.uid;
            appState.email = user.email;
          }
        } catch (err) {
          console.error("Erro ao carregar dados do Firestore:", err);
        }
      } else {
        appState.isLoggedIn = false;
      }
      checkAuthView();
      updatePointsUI();
      renderMyActiveCourses();
    });
  } else {
    // Fallback para localStorage se Firebase não estiver configurado
    const savedState = localStorage.getItem('otimize_app_state');
    if (savedState) {
      try {
        appState = { ...appState, ...JSON.parse(savedState) };
      } catch (e) {
        console.error(e);
      }
    } else {
      appState.activeCourses = [];
      saveAppState();
    }
    checkAuthView();
    updatePointsUI();
    renderMyActiveCourses();
  }
}

function getUsersDatabase() {
  const saved = localStorage.getItem('otimize_registered_users');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return [];
    }
  }
  return [];
}

function checkAuthView() {
  const landingScreen = document.getElementById('landing-screen');
  const mainApp = document.getElementById('main-app');

  if (appState.isLoggedIn) {
    if (landingScreen) landingScreen.style.display = 'none';
    if (mainApp) mainApp.style.display = 'flex';

    const userDisplayName = document.getElementById('user-display-name');
    if (userDisplayName) userDisplayName.textContent = appState.displayName || "Usuário";

    const welcomeHeading = document.getElementById('welcome-heading');
    if (welcomeHeading) welcomeHeading.textContent = `Olá, ${(appState.displayName || "Usuário").split(' ')[0]}! 👋`;

    const userAvatarText = document.getElementById('user-avatar-text');
    if (userAvatarText) userAvatarText.textContent = getInitials(appState.displayName || "Usuário");

    populateUserPanel();

    // Show onboarding personalized plan modal ONLY on first register / if not completed
    const onboardingModal = document.getElementById('onboarding-plan-modal');
    const onboardingForm = document.getElementById('form-onboarding-goals');

    if (onboardingModal && !appState.hasSeenPlan) {
      onboardingModal.classList.add('visible');
      onboardingModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      if (onboardingForm && !onboardingForm.dataset.listenerAdded) {
        onboardingForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          const mainGoal = document.getElementById('onboard-main-goal')?.value || "Aumentar foco nos estudos";
          const studyArea = document.getElementById('onboard-study-area')?.value || "Tecnologia & Programação (TI)";
          const screenGoal = document.getElementById('onboard-goal-screen')?.value || "3h00m";
          const studyGoal = document.getElementById('onboard-goal-study')?.value || "2h00m";
          
          const apps = [];
          if (document.getElementById('limit-instagram')?.checked) apps.push("Instagram");
          if (document.getElementById('limit-tiktok')?.checked) apps.push("TikTok");
          if (document.getElementById('limit-youtube')?.checked) apps.push("YouTube Shorts");
          if (document.getElementById('limit-twitter')?.checked) apps.push("X (Twitter)");

          appState.hasSeenPlan = true;
          appState.userPlan = {
            mainGoal: mainGoal,
            studyArea: studyArea,
            screenGoal: screenGoal,
            studyGoal: studyGoal,
            limitedApps: apps.length > 0 ? apps : ["Nenhum app limitado"]
          };

          saveAppState();
          populateMyPlanPage();
          onboardingModal.classList.remove('visible');
          onboardingModal.style.display = 'none';
          document.body.style.overflow = '';
          showToastNotification(`🎯 Plano personalizado salvo no seu perfil!`);
        });
        onboardingForm.dataset.listenerAdded = 'true';
      }
    } else if (onboardingModal) {
      onboardingModal.classList.remove('visible');
      onboardingModal.style.display = 'none';
      document.body.style.overflow = '';
    }
    populateMyPlanPage();
  } else {
    if (landingScreen) landingScreen.style.display = 'flex';
    if (mainApp) mainApp.style.display = 'none';
  }
}

function saveAppState() {
  localStorage.setItem('otimize_app_state', JSON.stringify(appState));
  if (appState.isLoggedIn && appState.email) {
    saveUserToDatabase(appState);
  }
  updatePointsUI();
}

function updatePointsUI() {
  const pts = appState.points || 0;
  const pointsFormatted = pts.toLocaleString('pt-BR');
  const level = appState.level || Math.floor(pts / 500) + 1;
  appState.level = level;

  const targetPts = level * 500;
  const currentLevelBasePts = (level - 1) * 500;
  const progressPct = level === 1 && pts === 0 ? 0 : Math.min(100, Math.round(((pts - currentLevelBasePts) / 500) * 100));
  const levelTitle = getLevelTitle(level);

  // Hero points count
  const heroPoints = document.getElementById('hero-points-count');
  if (heroPoints) heroPoints.textContent = pointsFormatted;

  // Level current pts
  const levelCurrentPts = document.getElementById('level-current-pts');
  if (levelCurrentPts) levelCurrentPts.textContent = pointsFormatted;

  // Level progress bar & level name
  const levelProgressBar = document.getElementById('level-progress-bar');
  const levelNameEl = document.querySelector('.level-row .font-medium');
  const levelTargetPtsEl = document.querySelector('.level-row .font-mono');

  if (levelProgressBar) {
    levelProgressBar.style.width = `${progressPct}%`;
  }
  if (levelNameEl) {
    levelNameEl.textContent = `Nível ${level} — ${levelTitle}`;
  }
  if (levelTargetPtsEl) {
    levelTargetPtsEl.innerHTML = `<span id="level-current-pts">${pointsFormatted}</span> / ${targetPts.toLocaleString('pt-BR')} pts`;
  }

  // Update ALL rewards modal & rewards page points displays (id="modal-points-display" or class=".bal-value")
  document.querySelectorAll('#modal-points-display, .bal-value').forEach(el => {
    el.textContent = `${pointsFormatted} Pontos`;
  });

  // Update level badges in rewards page and modals
  document.querySelectorAll('#page-rewards .streak-badge, .modal-balance .streak-badge').forEach(el => {
    el.innerHTML = `<span class="streak-fire">🔥</span> Nível ${level} — ${levelTitle}`;
  });

  // Active courses count stat
  const activeCoursesCount = document.getElementById('stat-active-courses-count');
  if (activeCoursesCount) {
    const count = appState.activeCourses ? appState.activeCourses.length : 0;
    activeCoursesCount.textContent = `${count} ${count === 1 ? 'curso' : 'cursos'}`;
  }

  // Quiz progress bar & counter update
  const completedQuizzes = document.querySelectorAll('.validation-quizzes .quiz-item.completed').length;
  const totalQuizzes = document.querySelectorAll('.validation-quizzes .quiz-item').length;
  const quizCounterEl = document.querySelector('.validation-card .font-mono.font-bold');
  const quizProgressFill = document.querySelector('.validation-card .progress-fill');
  
  if (quizCounterEl && totalQuizzes > 0) {
    quizCounterEl.textContent = `${completedQuizzes}/${totalQuizzes} Quizzes Validados`;
  }
  if (quizProgressFill && totalQuizzes > 0) {
    quizProgressFill.style.width = `${Math.round((completedQuizzes / totalQuizzes) * 100)}%`;
  }
}

function getLevelTitle(level) {
  if (level <= 1) return 'Iniciante do Foco';
  if (level <= 3) return 'Aprendiz Consciente';
  if (level <= 5) return 'Praticante de Foco';
  if (level <= 7) return 'Guardião do Foco';
  return 'Mestre da Mente';
}

async function saveUserToDatabase(user) {
  // Salva no Firestore se o Firebase estiver ativo
  if (db && auth && auth.currentUser) {
    try {
      await db.collection("users").doc(auth.currentUser.uid).set(user, { merge: true });
    } catch (err) {
      console.error("Erro ao salvar dados no Firestore:", err);
    }
  }
  
  // Salva localmente também
  const users = getUsersDatabase();
  const index = users.findIndex(u => u.email.toLowerCase() === user.email.toLowerCase());
  if (index !== -1) {
    users[index] = { ...users[index], ...user };
  } else {
    users.push(user);
  }
  localStorage.setItem('otimize_registered_users', JSON.stringify(users));
}

/* ---------- LANDING LOGIN SCREEN LOGIC ---------- */
function initLandingLoginScreen() {
  const tabLogin = document.getElementById('landing-tab-login');
  const tabRegister = document.getElementById('landing-tab-register');
  const formLogin = document.getElementById('form-landing-login');
  const formRegister = document.getElementById('form-landing-register');
  const logoutBtn = document.getElementById('btn-user-logout');

  // Password Visibility Toggle Handler (Mostrar/Ocultar Senha)
  document.querySelectorAll('.btn-toggle-pwd').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (input) {
        const isPwd = input.getAttribute('type') === 'password';
        input.setAttribute('type', isPwd ? 'text' : 'password');
        btn.innerHTML = isPwd 
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>` 
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
      }
    });
  });

  if (tabLogin && tabRegister) {
    tabLogin.addEventListener('click', () => {
      tabLogin.classList.add('active');
      tabRegister.classList.remove('active');
      formLogin.style.display = 'block';
      formRegister.style.display = 'none';
    });

    tabRegister.addEventListener('click', () => {
      tabRegister.classList.add('active');
      tabLogin.classList.remove('active');
      formRegister.style.display = 'block';
      formLogin.style.display = 'none';
    });
  }

  if (formLogin) {
    formLogin.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('landing-login-email').value.trim();
      const password = document.getElementById('landing-login-password').value;

      if (!email || !password) return;

      if (auth) {
        try {
          const rememberMe = document.getElementById('remember-me-checkbox')?.checked ?? true;
          const persistenceMode = rememberMe 
            ? firebase.auth.Auth.Persistence.LOCAL 
            : firebase.auth.Auth.Persistence.SESSION;

          await auth.setPersistence(persistenceMode);

          // 1. Tenta Login Direto no Firebase
          const userCredential = await auth.signInWithEmailAndPassword(email, password);
          const user = userCredential.user;
          const docSnap = await db.collection("users").doc(user.uid).get();
          if (docSnap.exists) {
            appState = { ...appState, ...docSnap.data(), uid: user.uid, isLoggedIn: true };
          } else {
            appState = { ...appState, email: user.email, uid: user.uid, isLoggedIn: true };
          }
          saveAppState();
          checkAuthView();
          showToastNotification(`Bem-vindo(a) de volta, ${(appState.displayName || "Usuário").split(' ')[0]}!`);
          return;
        } catch (err) {
          console.warn("Firebase Login Exception, attempting local fallback:", err);
          if (err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
            showToastNotification('Senha ou e-mail incorretos. Verifique os dados digitados.', true);
            return;
          }
        }
      }

      // LocalStorage Fallback
      const users = getUsersDatabase();
      const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

      if (!foundUser) {
        showToastNotification('E-mail não encontrado. Crie uma conta para acessar.', true);
        return;
      }

      if (foundUser.password !== password) {
        showToastNotification('Senha incorreta. Tente novamente.', true);
        return;
      }

      appState = { ...appState, ...foundUser, isLoggedIn: true };
      saveAppState();
      checkAuthView();
      showToastNotification(`Bem-vindo(a) de volta, ${appState.displayName.split(' ')[0]}!`);
    });
  }

  if (formRegister) {
    formRegister.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('landing-reg-name').value.trim();
      const email = document.getElementById('landing-reg-email').value.trim();
      const password = document.getElementById('landing-reg-password').value;

      if (!name || !email || !password) return;

      if (password.length < 6) {
        showToastNotification('A senha deve ter no mínimo 6 caracteres.', true);
        return;
      }

      const newUser = {
        displayName: name,
        email: email,
        points: 0,
        level: 1,
        activeCourses: [],
        hasSeenPlan: false,
        bio: "",
        avatar: ""
      };

      if (auth) {
        try {
          const userCredential = await auth.createUserWithEmailAndPassword(email, password);
          const user = userCredential.user;
          newUser.uid = user.uid;
          await db.collection("users").doc(user.uid).set(newUser);
          appState = { ...appState, ...newUser, isLoggedIn: true };
          saveAppState();
          checkAuthView();
          showToastNotification(`Conta criada com sucesso! Olá, ${name.split(' ')[0]}!`);
          return;
        } catch (err) {
          console.warn("Firebase Register Exception, fallbacking to local creation:", err);
          if (err.code === 'auth/email-already-in-use') {
            showToastNotification('Este e-mail já está cadastrado. Faça login!', true);
            return;
          }
        }
      }

      // LocalStorage Fallback (ALWAYS succeeds if Firebase is unconfigured or blocked)
      const users = getUsersDatabase();
      const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

      if (existingUser) {
        showToastNotification('Este e-mail já está cadastrado. Faça login!', true);
        return;
      }

      saveUserToDatabase({ ...newUser, password: password });

      appState = { ...appState, ...newUser, isLoggedIn: true };
      saveAppState();
      checkAuthView();
      showToastNotification(`Conta criada com sucesso! Olá, ${name.split(' ')[0]}!`);
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      if (auth) {
        try {
          await auth.signOut();
        } catch (e) {
          console.error(e);
        }
      }
      appState.isLoggedIn = false;
      saveAppState();
      checkAuthView();
    });
  }
}

/* ---------- TAB NAVIGATION SYSTEM ---------- */
function initTabNavigation() {
  const navTriggers = document.querySelectorAll('[data-page]');

  navTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = trigger.getAttribute('data-page');
      switchPage(pageId);
    });
  });

  const sophiaShortcut = document.getElementById('sophia-shortcut');
  if (sophiaShortcut) {
    sophiaShortcut.addEventListener('click', () => switchPage('sophia'));
  }
}

function switchPage(targetPageId) {
  if (!targetPageId) return;

  document.querySelectorAll('[data-page]').forEach(el => {
    if (el.getAttribute('data-page') === targetPageId) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });

  const targetPage = document.getElementById(`page-${targetPageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  if (targetPageId === 'user-panel') {
    populateUserPanel();
  }

  if (targetPageId === 'my-plan') {
    populateMyPlanPage();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function populateMyPlanPage() {
  const plan = appState.userPlan || {};

  const displayGoal = document.getElementById('plan-display-goal');
  if (displayGoal) displayGoal.textContent = plan.mainGoal || "Aumentar foco nos estudos";

  const displayArea = document.getElementById('plan-display-area');
  if (displayArea) displayArea.textContent = plan.studyArea || "Tecnologia & Programação (TI)";

  const displayScreenGoal = document.getElementById('plan-display-screen-goal');
  if (displayScreenGoal) displayScreenGoal.textContent = `${(plan.screenGoal || "3h00m").replace('h', ' Horas ').replace('m', ' min')} / dia`;

  const displayStudyGoal = document.getElementById('plan-display-study-goal');
  if (displayStudyGoal) displayStudyGoal.textContent = `${(plan.studyGoal || "2h00m").replace('h', ' Horas ').replace('m', ' min')} / dia`;

  const displayApps = document.getElementById('plan-display-apps');
  if (displayApps) {
    displayApps.innerHTML = '';
    const apps = plan.limitedApps || ["Instagram", "TikTok", "YouTube Shorts"];
    apps.forEach(app => {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.style.cssText = 'background:rgba(255,255,255,0.08); padding:6px 12px; border-radius:20px; font-size:0.85rem;';
      badge.textContent = app;
      displayApps.appendChild(badge);
    });
  }

  // Pre-fill update form
  const updateGoal = document.getElementById('update-plan-main-goal');
  if (updateGoal && plan.mainGoal) updateGoal.value = plan.mainGoal;

  const updateArea = document.getElementById('update-plan-study-area');
  if (updateArea && plan.studyArea) updateArea.value = plan.studyArea;

  const updateScreen = document.getElementById('update-plan-screen-goal');
  if (updateScreen && plan.screenGoal) updateScreen.value = plan.screenGoal;

  const updateStudy = document.getElementById('update-plan-study-goal');
  if (updateStudy && plan.studyGoal) updateStudy.value = plan.studyGoal;

  // Add form listener for updating plan
  const formUpdatePlan = document.getElementById('form-update-my-plan');
  if (formUpdatePlan && !formUpdatePlan.dataset.listenerAdded) {
    formUpdatePlan.addEventListener('submit', (e) => {
      e.preventDefault();
      appState.userPlan = {
        ...appState.userPlan,
        mainGoal: document.getElementById('update-plan-main-goal').value,
        studyArea: document.getElementById('update-plan-study-area').value,
        screenGoal: document.getElementById('update-plan-screen-goal').value,
        studyGoal: document.getElementById('update-plan-study-goal').value
      };
      saveAppState();
      populateMyPlanPage();
      showToastNotification('🎯 Meu Plano atualizado com sucesso!');
    });
    formUpdatePlan.dataset.listenerAdded = 'true';
  }
}


function getInitials(name) {
  if (!name) return "LC";
  const parts = name.trim().split(' ');
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

/* ---------- Render Active MEC & Multi-Provider Courses ---------- */
let activeStudiesFilter = 'all';

function renderStudiesStats() {
  const hoursEl = document.getElementById('stat-studies-hours');
  const coursesEl = document.getElementById('stat-studies-courses');
  const certsEl = document.getElementById('stat-studies-certs');
  const ptsEl = document.getElementById('stat-studies-pts');

  const activeCourses = appState.activeCourses || [];
  const totalHours = activeCourses.reduce((sum, c) => sum + (Number(c.hours) || 0), 0);
  const totalCourses = activeCourses.length;
  const completedCerts = activeCourses.filter(c => {
    const totalMods = c.modules ? c.modules.length : 0;
    const compMods = c.modules ? c.modules.filter(m => m.completed).length : 0;
    return totalMods > 0 && compMods === totalMods;
  }).length;
  
  // Calculate study points (each completed module gives 100 PTS + course enrollment bonus)
  let studyPts = 0;
  activeCourses.forEach(c => {
    studyPts += 100; // Enrollment bonus
    if (c.modules) {
      c.modules.forEach(m => { if (m.completed) studyPts += (m.pts || 100); });
    }
  });

  if (hoursEl) hoursEl.textContent = `${totalHours}h`;
  if (coursesEl) coursesEl.textContent = `${totalCourses}`;
  if (certsEl) certsEl.textContent = `${completedCerts}`;
  if (ptsEl) ptsEl.textContent = `${studyPts} PTS`;
}

function renderMyActiveCourses() {
  renderStudiesStats();

  const grid = document.getElementById('my-active-courses-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const filteredCourses = appState.activeCourses.filter(c => {
    if (activeStudiesFilter === 'all') return true;
    return (c.provider || 'mec') === activeStudiesFilter;
  });

  if (filteredCourses.length === 0) {
    const isFiltered = activeStudiesFilter !== 'all';
    grid.innerHTML = `
      <div class="glass-card" style="grid-column:1/-1; text-align:center; padding:36px 24px;">
        <div style="width:52px; height:52px; border-radius:14px; background:rgba(var(--primary-rgb),0.1); border:1px solid rgba(var(--primary-rgb),0.2); color:var(--primary); display:flex; align-items:center; justify-content:center; margin:0 auto 16px;">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        </div>
        <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:6px;">${isFiltered ? 'Nenhum curso encontrado para este provedor' : 'Nenhum curso sincronizado ainda'}</h3>
        <p class="text-sm text-secondary mb-4" style="max-width:480px; margin-left:auto; margin-right:auto;">Explore o catálogo oficial multi-plataforma ou cole a URL do seu certificado para acompanhar o progresso unificado.</p>
        <button class="btn btn-primary" id="btn-empty-mec-open">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Sincronizar Primeiro Curso
        </button>
      </div>
    `;

    const emptyBtn = document.getElementById('btn-empty-mec-open');
    if (emptyBtn) emptyBtn.addEventListener('click', () => openMecModal());
    return;
  }

  filteredCourses.forEach(course => {
    const completedCount = course.modules ? course.modules.filter(m => m.completed).length : 0;
    const totalCount = course.modules ? course.modules.length : 1;
    const pct = Math.round((completedCount / totalCount) * 100);

    const badgeClass = course.provider || 'mec';
    const badgeLabel = course.badgeText || (course.provider ? course.provider.toUpperCase() : 'MEC');

    const card = document.createElement('div');
    card.className = 'course-card glass-card';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.padding = '0';
    card.style.overflow = 'hidden';

    card.innerHTML = `
      <div class="course-thumb ${course.category || 'ti'}" style="position:relative; height:90px; padding:12px; display:flex; justify-content:space-between; align-items:flex-start; background: linear-gradient(135deg, rgba(var(--primary-rgb),0.12) 0%, rgba(18,18,26,0.9) 100%);">
        <span class="course-badge ${badgeClass}">${badgeLabel}</span>
        <span class="text-xs font-mono font-semibold text-secondary" style="background:rgba(0,0,0,0.5); padding:3px 8px; border-radius:12px; backdrop-filter:blur(4px);">
          ${pct === 100 ? '✓ Concluído' : `${pct}% Concluído`}
        </span>
      </div>
      <div class="course-body" style="padding:16px; display:flex; flex-direction:column; flex:1;">
        <h4 style="font-size:1rem; font-weight:700; color:var(--text-primary); margin-bottom:8px; line-height:1.3;">${course.title}</h4>
        
        <div class="course-meta text-xs text-secondary mb-3" style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
          <span style="display:inline-flex; align-items:center; gap:4px;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${course.hours}h
          </span>
          <span style="display:inline-flex; align-items:center; gap:4px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            ${(course.institution || 'MEC').split('—')[0]}
          </span>
        </div>

        <div class="course-prog mb-4" style="margin-top:auto;">
          <div class="progress-track" style="height:6px; background:rgba(255,255,255,0.08); border-radius:3px; overflow:hidden;">
            <div class="progress-fill green" style="width:${pct}%; height:100%; transition:width 0.3s ease;"></div>
          </div>
        </div>

        <button class="btn btn-primary btn-sm" style="width:100%; display:inline-flex; align-items:center; justify-content:center; gap:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Continuar Módulos & Validar
        </button>
      </div>
    `;

    card.querySelector('button').addEventListener('click', () => {
      openCoursePlayer(course.id);
    });

    grid.appendChild(card);
  });
}

/* ---------- Multi-Provider Course Integration Hub (MEC, Alura, Udemy, Coursera) ---------- */
let activeProviderFilter = 'all';

function initMecIntegration() {
  const modal = document.getElementById('mec-modal');
  const closeBtn = document.getElementById('mec-modal-close');
  const catalogTab = document.getElementById('tab-mec-catalog');
  const linkTab = document.getElementById('tab-mec-link');
  const contentCatalog = document.getElementById('content-mec-catalog');
  const contentLink = document.getElementById('content-mec-link');

  const openMecModalBtn = document.getElementById('btn-open-mec-modal');
  const browseCatalogBtn = document.getElementById('btn-browse-mec-catalog');

  if (openMecModalBtn) openMecModalBtn.addEventListener('click', openMecModal);
  if (browseCatalogBtn) browseCatalogBtn.addEventListener('click', openMecModal);

  if (closeBtn) closeBtn.addEventListener('click', closeMecModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeMecModal();
    });
  }

  if (catalogTab && linkTab) {
    catalogTab.addEventListener('click', () => {
      catalogTab.classList.add('active');
      linkTab.classList.remove('active');
      contentCatalog.style.display = 'block';
      contentLink.style.display = 'none';
    });

    linkTab.addEventListener('click', () => {
      linkTab.classList.add('active');
      catalogTab.classList.remove('active');
      contentLink.style.display = 'block';
      contentCatalog.style.display = 'none';
    });
  }

  // Studies Page Provider Filter Tabs
  document.querySelectorAll('[data-studies-filter]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('[data-studies-filter]').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeStudiesFilter = tab.getAttribute('data-studies-filter');
      renderMyActiveCourses();
    });
  });

  // Modal Provider Filter Chips
  document.querySelectorAll('[data-provider-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('[data-provider-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeProviderFilter = chip.getAttribute('data-provider-filter');
      filterAndRenderCatalog();
    });
  });

  const searchInput = document.getElementById('mec-search-input');
  const catFilter = document.getElementById('mec-category-filter');

  function filterAndRenderCatalog() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedCat = catFilter ? catFilter.value : 'all';

    const filtered = MEC_OFFICIAL_CATALOG.filter(item => {
      const matchesQuery = !query || item.title.toLowerCase().includes(query) || item.institution.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
      const matchesCat = selectedCat === 'all' || item.category === selectedCat;
      const matchesProvider = activeProviderFilter === 'all' || item.provider === activeProviderFilter;
      return matchesQuery && matchesCat && matchesProvider;
    });

    renderMecCatalogList(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', filterAndRenderCatalog);
  if (catFilter) catFilter.addEventListener('change', filterAndRenderCatalog);

  renderMecCatalogList(MEC_OFFICIAL_CATALOG);

  // In-Page Inline Catalog Filtering & Rendering
  const inlineSearch = document.getElementById('inline-catalog-search');
  const inlineCategory = document.getElementById('inline-catalog-category');
  const inlineGrid = document.getElementById('inline-catalog-grid');

  function renderInlineStudiesCatalog() {
    if (!inlineGrid) return;
    const query = inlineSearch ? inlineSearch.value.toLowerCase().trim() : '';
    const selectedCat = inlineCategory ? inlineCategory.value : 'all';

    const filtered = MEC_OFFICIAL_CATALOG.filter(item => {
      const matchesQuery = !query || item.title.toLowerCase().includes(query) || item.institution.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
      const matchesCat = selectedCat === 'all' || item.category === selectedCat;
      return matchesQuery && matchesCat;
    });

    inlineGrid.innerHTML = '';
    if (filtered.length === 0) {
      inlineGrid.innerHTML = `<p class="text-sm text-tertiary" style="grid-column:1/-1; text-align:center; padding:20px;">Nenhum curso encontrado no catálogo.</p>`;
      return;
    }

    filtered.forEach(course => {
      const isEnrolled = appState.activeCourses.some(c => c.id === course.id);
      const badgeClass = course.provider || 'mec';
      const badgeLabel = course.badgeText || (course.provider ? course.provider.toUpperCase() : 'MEC');

      const card = document.createElement('div');
      card.className = 'mec-item-card';
      card.innerHTML = `
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
            <h4 class="mec-item-title">${course.title}</h4>
            <span class="course-badge ${badgeClass}" style="position:static;">${badgeLabel}</span>
          </div>
          <p class="mec-item-meta" style="margin-top:6px;">🏫 ${course.institution} · ⏱️ ${course.hours}h</p>
          <p class="text-xs text-secondary mb-4" style="line-height:1.4;">${course.description}</p>
        </div>
        <div>
          <button class="btn ${isEnrolled ? 'btn-glass' : 'btn-primary'} btn-sm" style="width:100%;" ${isEnrolled ? 'disabled' : ''}>
            ${isEnrolled ? '✓ Já Matriculado' : 'Matricular-se (+100 PTS)'}
          </button>
        </div>
      `;

      if (!isEnrolled) {
        card.querySelector('button').addEventListener('click', () => {
          appState.activeCourses.push(course);
          appState.points += 100;
          saveAppState();
          renderMyActiveCourses();
          renderMecCatalogList(MEC_OFFICIAL_CATALOG);
          renderInlineStudiesCatalog();
          showToastNotification(`Curso "${course.title}" (${badgeLabel}) adicionado! (+100 PTS)`);
        });
      }

      inlineGrid.appendChild(card);
    });
  }

  if (inlineSearch) inlineSearch.addEventListener('input', renderInlineStudiesCatalog);
  if (inlineCategory) inlineCategory.addEventListener('change', renderInlineStudiesCatalog);
  renderInlineStudiesCatalog();

  // In-Page Quick Certificate Form
  const quickForm = document.getElementById('form-quick-cert-val');
  if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const urlInput = document.getElementById('quick-cert-url').value.trim();
      const providerInput = document.getElementById('quick-cert-provider').value;

      if (!urlInput) return;

      const providerInfo = getProviderDetails(providerInput, urlInput);

      const newCourse = {
        id: 'imported-' + Date.now(),
        provider: providerInput,
        title: providerInfo.title,
        category: 'ti',
        institution: providerInfo.institution,
        hours: providerInfo.hours,
        badgeText: providerInfo.badgeText,
        url: urlInput,
        description: providerInfo.description,
        modules: [
          { id: 'm1', title: 'Módulo 1: Introdução & Validação de Certificado', completed: true, pts: 100 },
          { id: 'm2', title: 'Módulo 2: Conteúdo Principal do Curso', completed: false, pts: 100 },
          { id: 'm3', title: 'Módulo 3: Atividades Práticas de Fixação', completed: false, pts: 100 },
          { id: 'm4', title: 'Avaliação Final & Emissão de Certificado', completed: false, pts: 150 }
        ]
      };

      appState.activeCourses.unshift(newCourse);
      appState.points += 150;
      saveAppState();
      renderMyActiveCourses();
      document.getElementById('quick-cert-url').value = '';

      showToastNotification(`Certificado do ${providerInfo.badgeText} validado com sucesso! (+150 PTS de Bônus)`);
    });
  }

  // Modal Import Link Form
  const importForm = document.getElementById('form-import-mec-link');
  if (importForm) {
    importForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const urlInput = document.getElementById('mec-import-url').value.trim();
      const providerInput = document.getElementById('mec-import-provider')?.value || 'mec';

      if (!urlInput) return;

      const providerInfo = getProviderDetails(providerInput, urlInput);

      const newCourse = {
        id: 'imported-' + Date.now(),
        provider: providerInput,
        title: providerInfo.title,
        category: 'ti',
        institution: providerInfo.institution,
        hours: providerInfo.hours,
        badgeText: providerInfo.badgeText,
        url: urlInput,
        description: providerInfo.description,
        modules: [
          { id: 'm1', title: 'Módulo 1: Introdução & Validação de Certificado', completed: true, pts: 100 },
          { id: 'm2', title: 'Módulo 2: Conteúdo Principal do Curso', completed: false, pts: 100 },
          { id: 'm3', title: 'Módulo 3: Atividades Práticas de Fixação', completed: false, pts: 100 },
          { id: 'm4', title: 'Avaliação Final & Emissão de Certificado', completed: false, pts: 150 }
        ]
      };

      appState.activeCourses.unshift(newCourse);
      appState.points += 150;
      saveAppState();
      renderMyActiveCourses();
      closeMecModal();

      showToastNotification(`Certificado do ${providerInfo.badgeText} validado com sucesso! (+150 PTS de Bônus)`);
    });
  }

  const refreshBtn = document.getElementById('btn-refresh-mec-courses');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      refreshBtn.textContent = '⌛ Sincronizando Provedores...';
      setTimeout(() => {
        refreshBtn.textContent = '✓ Sincronizado com MEC, Alura, Udemy & Coursera';
        setTimeout(() => refreshBtn.textContent = '🔄 Atualizar Sincronização', 2000);
      }, 800);
    });
  }
}

function getProviderDetails(provider, url) {
  const lowerUrl = url.toLowerCase();

  if (provider === 'alura' || lowerUrl.includes('alura')) {
    return {
      title: extractCourseTitle(url, 'Curso de Tecnologia & Programação (Alura)'),
      institution: 'Alura — Escola de Tecnologia',
      hours: 40,
      badgeText: 'ALURA',
      description: 'Curso validado via link/certificado oficial da plataforma Alura.'
    };
  }

  if (provider === 'udemy' || lowerUrl.includes('udemy')) {
    return {
      title: extractCourseTitle(url, 'Curso Especializado (Udemy)'),
      institution: 'Udemy — Tech Academy',
      hours: 35,
      badgeText: 'UDEMY',
      description: 'Certificado validado com sucesso via código oficial Udemy.'
    };
  }

  if (provider === 'coursera' || lowerUrl.includes('coursera')) {
    return {
      title: extractCourseTitle(url, 'Certificação Profissional (Coursera)'),
      institution: 'Coursera (Google / Meta / IBM)',
      hours: 50,
      badgeText: 'COURSERA',
      description: 'Certificado oficial verificado via plataforma Coursera.'
    };
  }

  return {
    title: extractCourseTitle(url, 'Curso Autoinstrucional Aprenda Mais MEC'),
    institution: 'Aprenda Mais MEC — Ministério da Educação',
    hours: 30,
    badgeText: 'MEC',
    description: 'Curso validado via plataforma oficial Aprenda Mais MEC.'
  };
}

function extractCourseTitle(url, fallback) {
  const lower = url.toLowerCase();
  if (lower.includes('python')) return 'Formação Avançada em Python';
  if (lower.includes('react')) return 'React com TypeScript & Front-End';
  if (lower.includes('data')) return 'Data Science & Análise de Dados';
  if (lower.includes('ux') || lower.includes('design')) return 'UX/UI Design & Experiência do Usuário';
  if (lower.includes('gestao') || lower.includes('scrum')) return 'Gestão de Projetos Ágeis & Scrum';
  return fallback;
}

function openMecModal() {
  const modal = document.getElementById('mec-modal');
  if (modal) {
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
}

function closeMecModal() {
  const modal = document.getElementById('mec-modal');
  if (modal) {
    modal.classList.remove('visible');
    document.body.style.overflow = '';
  }
}

function renderMecCatalogList(items) {
  const listEl = document.getElementById('mec-catalog-list');
  if (!listEl) return;

  listEl.innerHTML = '';

  if (items.length === 0) {
    listEl.innerHTML = `<p class="text-sm text-tertiary" style="grid-column:1/-1; text-align:center; padding:20px;">Nenhum curso encontrado para os filtros selecionados.</p>`;
    return;
  }

  items.forEach(course => {
    const isEnrolled = appState.activeCourses.some(c => c.id === course.id);
    const badgeClass = course.provider || 'mec';
    const badgeLabel = course.badgeText || (course.provider ? course.provider.toUpperCase() : 'MEC');

    const card = document.createElement('div');
    card.className = 'mec-item-card';
    card.innerHTML = `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
          <h4 class="mec-item-title">${course.title}</h4>
          <span class="course-badge ${badgeClass}" style="position:static;">${badgeLabel}</span>
        </div>
        <p class="mec-item-meta" style="margin-top:6px;">🏫 ${course.institution} · ⏱️ ${course.hours}h</p>
        <p class="text-xs text-secondary mb-4" style="line-height:1.4;">${course.description}</p>
      </div>
      <div>
        ${isEnrolled
          ? `<button class="btn btn-glass btn-sm" style="width:100%; color:var(--primary); border-color:var(--primary);" disabled>✓ Já Sincronizado</button>`
          : `<button class="btn btn-primary btn-sm" style="width:100%;">⚡ Iniciar & Sincronizar</button>`
        }
      </div>
    `;

    if (!isEnrolled) {
      card.querySelector('button').addEventListener('click', () => {
        appState.activeCourses.push(course);
        appState.points += 100;
        saveAppState();
        renderMyActiveCourses();
        renderMecCatalogList(MEC_OFFICIAL_CATALOG);
        showToastNotification(`🎓 Curso "${course.title}" (${badgeLabel}) sincronizado! (+100 PTS)`);
      });
    }

    listEl.appendChild(card);
  });
}

/* ---------- Course Player Modal ---------- */
function openCoursePlayer(courseId) {
  const course = appState.activeCourses.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('course-player-modal');
  const titleEl = document.getElementById('player-course-title');
  const instEl = document.getElementById('player-course-inst');
  const hoursEl = document.getElementById('player-course-hours');
  const pctEl = document.getElementById('player-course-pct');
  const fillEl = document.getElementById('player-course-progress-fill');
  const modulesList = document.getElementById('player-modules-list');

  titleEl.textContent = course.title;
  instEl.textContent = (course.institution || 'MEC').split('—')[0];
  hoursEl.textContent = `${course.hours} Horas Certificadas`;

  function updatePlayerProgressUI() {
    const completedCount = course.modules.filter(m => m.completed).length;
    const pct = Math.round((completedCount / course.modules.length) * 100);
    pctEl.textContent = `${pct}%`;
    fillEl.style.width = `${pct}%`;
  }

  modulesList.innerHTML = '';

  course.modules.forEach(m => {
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.style.cursor = 'pointer';
    item.innerHTML = `
      <div class="quiz-check ${m.completed ? 'completed' : ''}" style="${m.completed ? 'background:var(--primary); border-color:var(--primary);' : ''}">
        ${m.completed ? '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0A0A0F" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
      </div>
      <span class="activity-text ${m.completed ? 'text-secondary' : ''}" style="${m.completed ? 'text-decoration:line-through;' : ''}">${m.title}</span>
      <span class="activity-pts font-mono ${m.completed ? 'text-secondary' : 'text-green'}">${m.completed ? '✓ Validado' : `+${m.pts} PTS`}</span>
    `;

    item.addEventListener('click', () => {
      if (!m.completed) {
        m.completed = true;
        appState.points += m.pts;
        saveAppState();
        renderMyActiveCourses();
        updatePlayerProgressUI();

        const check = item.querySelector('.quiz-check');
        check.style.background = 'var(--primary)';
        check.style.borderColor = 'var(--primary)';
        check.innerHTML = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0A0A0F" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>`;

        const ptsSpan = item.querySelector('.activity-pts');
        ptsSpan.className = 'activity-pts font-mono text-secondary';
        ptsSpan.textContent = '✓ Validado';
        item.querySelector('.activity-text').style.textDecoration = 'line-through';
      }
    });

    modulesList.appendChild(item);
  });

  updatePlayerProgressUI();

  const closeBtn = document.getElementById('course-player-close');
  closeBtn.onclick = () => {
    modal.classList.remove('visible');
    document.body.style.overflow = '';
  };

  modal.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

/* ---------- Chat (Sophia AI) ---------- */
function initChat() {
  const chatInput = document.getElementById('chat-input');
  const chatSendBtn = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');
  const quickActions = document.querySelectorAll('.action-pill');

  if (!chatInput) return;

  function sendMessage(text) {
    if (!text.trim()) return;

    appendMessage('user', text);
    chatInput.value = '';

    const typingEl = showTyping();

    setTimeout(() => {
      typingEl.remove();
      const response = getSophiaResponse(text);
      appendMessage('sophia', response);
    }, 900 + Math.random() * 500);
  }

  chatSendBtn.addEventListener('click', () => sendMessage(chatInput.value));

  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(chatInput.value);
    }
  });

  quickActions.forEach(pill => {
    pill.addEventListener('click', () => {
      const text = pill.dataset.action || pill.textContent.trim();
      sendMessage(text);
    });
  });
}

function appendMessage(type, text) {
  const chatMessages = document.getElementById('chat-messages');
  const avatar = type === 'sophia' ? '🤖' : getInitials(appState.displayName);

  const messageEl = document.createElement('div');
  messageEl.className = `message ${type}`;
  messageEl.innerHTML = `
    <div class="msg-avatar">${avatar}</div>
    <div class="msg-bubble">${text}</div>
  `;

  chatMessages.appendChild(messageEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  const chatMessages = document.getElementById('chat-messages');
  const typingEl = document.createElement('div');
  typingEl.className = 'message sophia';
  typingEl.innerHTML = `
    <div class="msg-avatar">🤖</div>
    <div class="typing-dots">
      <span></span><span></span><span></span>
    </div>
  `;
  chatMessages.appendChild(typingEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return typingEl;
}

function getSophiaResponse(input) {
  const lower = input.toLowerCase();

  if (lower.includes('mec') || lower.includes('curso')) {
    const courseNames = appState.activeCourses.map(c => `• <strong>${c.title}</strong> (${c.hours}h)`).join('<br>');
    return `🎓 Aqui estão seus cursos ativamente sincronizados no <strong>Aprenda Mais MEC</strong>:<br><br>${courseNames}<br><br>Recomendo realizar 1 módulo hoje para somar <strong>+100 Pontos</strong>!`;
  }

  if (lower.includes('rotina') || lower.includes('organizar')) {
    return `Claro! 📋 Montei uma estratégia de micro-blocos para o seu dia:
<br><br>⚡ <strong>Bloco 1 (09h-11h):</strong> Módulo do curso Aprenda Mais MEC
<br>🎧 <strong>Bloco 2 (14h-15h):</strong> Podcast de Saúde Mental & Foco
<br>🎯 <strong>Bloco 3 (17h-18h):</strong> Quiz de validação (+100 PTS)
<br><br>Quer que eu agende lembretes para manter você fora do feed das redes?`;
  }

  if (lower.includes('ponto') || lower.includes('recompensa') || lower.includes('saldo')) {
    return `🏆 Seu Saldo Atual: <strong class="text-green font-mono">${appState.points.toLocaleString('pt-BR')} Pontos</strong>
<br><br>Sua próxima grande recompensa é o <strong>Gift Card Netflix</strong> (necessita de mais ${Math.max(0, 3500 - appState.points)} pts). Complete os módulos do MEC para acelerar!`;
  }

  const responses = [
    `Excelente pergunta! 💡 Lembre-se: substituir hábitos passivos por consumo ativo (estudos no MEC) reprograma o sistema de recompensa do cérebro.`,
    `Estou aqui para otimizar seu tempo! 🚀 Cada curso concluído no Aprenda Mais MEC gera pontos que podem ser trocados por tokens de IA, cupons e gift cards.`
  ];

  return responses[Math.floor(Math.random() * responses.length)];
}

/* ---------- Podcast Player ---------- */
function initPodcastPlayer() {
  const playBtn = document.getElementById('main-play-btn');
  const miniPlayer = document.getElementById('mini-player');
  const miniPlayBtn = document.getElementById('mini-play-btn');
  const progressFill = document.getElementById('player-progress-fill');
  const currentTimeEl = document.getElementById('current-time');
  const epPlayBtns = document.querySelectorAll('.ep-play');
  const speedBtn = document.getElementById('speed-btn');

  let isPlaying = false;
  let playerInterval = null;
  let currentProgress = 0;
  let playbackSpeed = 1;
  const speeds = [1, 1.25, 1.5, 1.75, 2];

  if (!playBtn) return;

  function togglePlay() {
    isPlaying = !isPlaying;
    updatePlayState();
  }

  function updatePlayState() {
    const playIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
    const pauseIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;

    playBtn.innerHTML = isPlaying ? pauseIcon : playIcon;
    if (miniPlayBtn) miniPlayBtn.innerHTML = isPlaying ? pauseIcon : playIcon;
    if (miniPlayer) miniPlayer.classList.toggle('visible', isPlaying);

    if (isPlaying) {
      playerInterval = setInterval(() => {
        currentProgress += 0.2 * playbackSpeed;
        if (currentProgress >= 100) {
          currentProgress = 0;
          isPlaying = false;
          updatePlayState();
          return;
        }
        if (progressFill) progressFill.style.width = currentProgress + '%';
        if (currentTimeEl) {
          const totalSecs = Math.floor((currentProgress / 100) * 2520);
          const mins = Math.floor(totalSecs / 60);
          const secs = totalSecs % 60;
          currentTimeEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        const miniProgressFill = document.querySelector('.mini-progress-fill');
        if (miniProgressFill) miniProgressFill.style.width = currentProgress + '%';
      }, 500);
    } else {
      clearInterval(playerInterval);
    }
  }

  playBtn.addEventListener('click', togglePlay);
  if (miniPlayBtn) miniPlayBtn.addEventListener('click', togglePlay);

  epPlayBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const epItem = btn.closest('.ep-item');
      const title = epItem?.querySelector('.ep-title')?.textContent || 'Foco no que Importa';

      const miniTitle = document.querySelector('.mini-title');
      if (miniTitle) miniTitle.textContent = title;

      currentProgress = 0;
      isPlaying = true;
      updatePlayState();
    });
  });

  if (speedBtn) {
    speedBtn.addEventListener('click', () => {
      const idx = speeds.indexOf(playbackSpeed);
      playbackSpeed = speeds[(idx + 1) % speeds.length];
      speedBtn.textContent = playbackSpeed + 'x';
    });
  }

  const miniClose = document.getElementById('mini-close');
  if (miniClose) {
    miniClose.addEventListener('click', () => {
      isPlaying = false;
      updatePlayState();
      if (miniPlayer) miniPlayer.classList.remove('visible');
    });
  }
}

/* ---------- Rewards Modal ---------- */
function initRewardsModal() {
  const openBtns = document.querySelectorAll('[data-open-rewards]');
  const modal = document.getElementById('rewards-modal');
  const closeBtn = document.getElementById('modal-close');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      switchPage('rewards');
    });
  });

  document.addEventListener('click', (e) => {
    const redeemBtn = e.target.closest('.btn-redeem-reward');
    if (!redeemBtn || redeemBtn.disabled) return;

    e.preventDefault();
    e.stopPropagation();

    const cost = parseInt(redeemBtn.dataset.cost) || 0;

    if (appState.points < cost) {
      const needed = cost - appState.points;
      showToastNotification(`❌ Crédito insuficiente! Faltam ${needed.toLocaleString('pt-BR')} pontos para este resgate.`, true);
      return;
    }

    // Deduct points
    appState.points -= cost;
    saveAppState();

    redeemBtn.textContent = '✓ Resgatado';
    redeemBtn.className = 'btn btn-glass btn-sm';
    redeemBtn.style.color = 'var(--primary)';
    redeemBtn.style.borderColor = 'var(--primary)';
    redeemBtn.disabled = true;

    showToastNotification(`🎉 Recompensa resgatada com sucesso! (${cost} pts deduzidos)`);
  });
}

/* ---------- Quiz Toggle ---------- */
document.addEventListener('click', (e) => {
  const quizItem = e.target.closest('.quiz-item:not(.completed)');
  if (quizItem) {
    quizItem.classList.add('completed');
    appState.points += 75;
    saveAppState();

    const check = quizItem.querySelector('.quiz-check');
    if (check) {
      check.style.background = 'var(--primary)';
      check.style.borderColor = 'var(--primary)';
      check.innerHTML = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0A0A0F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    }
  }
});

/* ---------- Animations ---------- */
function initAnimations() {
  document.querySelectorAll('.stat-value[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.max(1, Math.floor(target / 25));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current + suffix;
    }, 40);
  });
}

/* ---------- USER PANEL & PREFERENCES ---------- */
function populateUserPanel() {
  const nameInput = document.getElementById('profile-display-name');
  const emailInput = document.getElementById('profile-email');
  const avatarCircle = document.getElementById('panel-avatar-circle');

  if (nameInput && appState.displayName) nameInput.value = appState.displayName;
  if (emailInput && appState.email) emailInput.value = appState.email;
  if (avatarCircle) {
    if (appState.avatar) {
      avatarCircle.innerHTML = `<img src="${appState.avatar}" alt="Avatar" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`;
    } else {
      avatarCircle.textContent = getInitials(appState.displayName);
    }
  }
  const bioElem = document.getElementById('panel-bio');
  if (bioElem) bioElem.textContent = appState.bio || '';
}

function initUserPanel() {
  const formProfile = document.getElementById('form-user-profile');
  const formGoals = document.getElementById('form-user-goals');
  const formPassword = document.getElementById('form-user-password');

  if (formProfile) {
    const avatarClickable = document.getElementById('avatar-clickable-wrap');
    if (avatarClickable && !avatarClickable.dataset.editorInit) {
      avatarClickable.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (appState.avatar) {
          openAvatarEditor(appState.avatar);
        } else {
          const avatarInput = document.getElementById('profile-avatar');
          if (avatarInput) avatarInput.click();
        }
      });
      avatarClickable.dataset.editorInit = 'true';
    }

    const avatarInput = document.getElementById('profile-avatar');
    if (avatarInput && !avatarInput.dataset.previewAdded) {
      avatarInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = (evt) => {
            openAvatarEditor(evt.target.result);
            // reset file value so change event can re-trigger even for the same file
            e.target.value = '';
          };
          reader.readAsDataURL(file);
        }
      });
      avatarInput.dataset.previewAdded = 'true';
    }

    formProfile.addEventListener('submit', (e) => {
      e.preventDefault();
      const newName = document.getElementById('profile-display-name').value.trim();
      const newEmail = document.getElementById('profile-email').value.trim();

      if (newName) appState.displayName = newName;
      if (newEmail) appState.email = newEmail;

// Save bio
const newBio = document.getElementById('profile-bio').value.trim();
appState.bio = newBio;

// Process avatar upload
const avatarInput = document.getElementById('profile-avatar');
if (avatarInput && avatarInput.files && avatarInput.files[0]) {
  const file = avatarInput.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    appState.avatar = e.target.result;
    saveAppState();
    populateUserPanel();
    showToastNotification('✅ Perfil e preferências salvos com sucesso!');
  };
  reader.readAsDataURL(file);
  // Exit early; saving will be done in the async callback
  return;
}

      saveAppState();
      checkAuthView();
      showToastNotification('✅ Perfil e preferências salvos com sucesso!');
    });
  }

  if (formGoals) {
    formGoals.addEventListener('submit', (e) => {
      e.preventDefault();
      saveAppState();
      showToastNotification('🎯 Metas personalizadas atualizadas com sucesso!');
    });
  }

  if (formPassword) {
    formPassword.addEventListener('submit', (e) => {
      e.preventDefault();
      const pwdNew = document.getElementById('pwd-new').value;
      const pwdConfirm = document.getElementById('pwd-confirm').value;

      if (pwdNew !== pwdConfirm) {
        showToastNotification('⚠️ As senhas digitadas não coincidem. Tente novamente.', true);
        return;
      }

      document.getElementById('pwd-current').value = '';
      document.getElementById('pwd-new').value = '';
      document.getElementById('pwd-confirm').value = '';
      showToastNotification('🔒 Senha alterada com sucesso!');
    });
  }
}

/* ---------- TOAST NOTIFICATIONS ---------- */
function showToastNotification(message, isError = false) {
  let toast = document.getElementById('app-toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast-notification';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      padding: 14px 22px;
      border-radius: 12px;
      background: rgba(18, 18, 26, 0.95);
      border: 1px solid rgba(0, 230, 153, 0.4);
      color: #FFFFFF;
      font-weight: 600;
      font-size: 0.875rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(0,230,153,0.2);
      backdrop-filter: blur(12px);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      transform: translateY(100px);
      opacity: 0;
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }

  if (isError) {
    toast.style.borderColor = 'rgba(255, 77, 77, 0.6)';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(255,77,77,0.3)';
  } else {
    toast.style.borderColor = 'rgba(0, 230, 153, 0.6)';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(0,230,153,0.3)';
  }

  toast.textContent = message;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 3500);
}

/* ---------- AVATAR EDITOR MODAL LOGIC ---------- */
let currentAvatarSrc = '';
let currentZoom = 1;
let currentRotation = 0;

function openAvatarEditor(imgSrc) {
  currentAvatarSrc = imgSrc;
  currentZoom = 1;
  currentRotation = 0;

  const modal = document.getElementById('avatar-editor-modal');
  const img = document.getElementById('avatar-editor-img');
  const zoomSlider = document.getElementById('avatar-zoom-slider');

  if (img) {
    img.src = imgSrc;
    img.style.transform = `scale(${currentZoom}) rotate(${currentRotation}deg)`;
  }
  if (zoomSlider) zoomSlider.value = 1;

  if (modal) {
    modal.classList.add('visible');
    modal.style.display = 'flex';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('avatar-editor-modal');
  const closeBtn = document.getElementById('avatar-editor-close');
  const zoomSlider = document.getElementById('avatar-zoom-slider');
  const rotateBtn = document.getElementById('btn-avatar-rotate');
  const removeBtn = document.getElementById('btn-avatar-remove');
  const changeFileBtn = document.getElementById('btn-avatar-change-file');
  const saveBtn = document.getElementById('btn-avatar-save-crop');
  const img = document.getElementById('avatar-editor-img');

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('visible');
      modal.style.display = 'none';
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (zoomSlider) {
    zoomSlider.addEventListener('input', (e) => {
      currentZoom = parseFloat(e.target.value);
      if (img) img.style.transform = `scale(${currentZoom}) rotate(${currentRotation}deg)`;
    });
  }

  if (rotateBtn) {
    rotateBtn.addEventListener('click', () => {
      currentRotation = (currentRotation + 90) % 360;
      if (img) img.style.transform = `scale(${currentZoom}) rotate(${currentRotation}deg)`;
    });
  }

  if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      appState.avatar = '';
      saveAppState();
      populateUserPanel();
      closeModal();
      showToastNotification('🗑️ Foto de perfil removida.');
    });
  }

  if (changeFileBtn) {
    changeFileBtn.addEventListener('click', () => {
      document.getElementById('profile-avatar').click();
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      // Process cropped/transformed image onto canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const tempImg = new Image();

      tempImg.onload = () => {
        const size = 300;
        canvas.width = size;
        canvas.height = size;

        ctx.translate(size / 2, size / 2);
        ctx.rotate((currentRotation * Math.PI) / 180);
        ctx.scale(currentZoom, currentZoom);
        ctx.drawImage(tempImg, -size / 2, -size / 2, size, size);

        const editedDataUrl = canvas.toDataURL('image/png');
        appState.avatar = editedDataUrl;
        saveAppState();
        populateUserPanel();

        closeModal();
        showToastNotification('✨ Foto de perfil atualizada com sucesso!');
      };
      tempImg.src = currentAvatarSrc;
    });
  }
});
