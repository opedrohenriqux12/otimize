/* ============================================
   OTIMIZE — Premium App Logic & Landing Screen
   ============================================ */

// Real Official Aprenda Mais MEC Catalog Data
const MEC_OFFICIAL_CATALOG = [
  {
    id: 'mec-ti-01',
    title: 'Lógica de Programação & Algoritmos',
    category: 'ti',
    institution: 'IFRN — Instituto Federal do Rio Grande do Norte',
    hours: 40,
    thumb: '💻',
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
    title: 'HTML5 e CSS3: Desenvolvimento Web',
    category: 'ti',
    institution: 'IFSP — Instituto Federal de São Paulo',
    hours: 30,
    thumb: '🌐',
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
    title: 'Marketing Digital para Microempreendedores',
    category: 'gestao',
    institution: 'IFB — Instituto Federal de Brasília',
    hours: 30,
    thumb: '📊',
    url: 'https://aprendamais.mec.gov.br/course/view.php?id=103',
    description: 'Estratégias de presença online, redes sociais corporativas e funil de vendas para novos negócios.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Conceitos de Marketing e Persona', completed: true, pts: 100 },
      { id: 'm2', title: 'Módulo 2: Redes Sociais & Criação de Conteúdo', completed: true, pts: 100 },
      { id: 'm3', title: 'Módulo 3: Tráfego Pago e Análise de Métricas', completed: false, pts: 100 }
    ]
  },
  {
    id: 'mec-gestao-02',
    title: 'Educação Financeira Pessoal & Investimentos',
    category: 'gestao',
    institution: 'IFMG — Instituto Federal de Minas Gerais',
    hours: 20,
    thumb: '📈',
    url: 'https://aprendamais.mec.gov.br/course/view.php?id=104',
    description: 'Planejamento de orçamento doméstico, controle de dívidas, reserva de emergência e introdução à renda fixa.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Diagnóstico Financeiro & Orçamento', completed: false, pts: 100 },
      { id: 'm2', title: 'Módulo 2: Quitação de Dívidas & Reserva', completed: false, pts: 100 },
      { id: 'm3', title: 'Módulo 3: Primeiros Passos em Investimentos', completed: false, pts: 100 }
    ]
  },
  {
    id: 'mec-saude-01',
    title: 'Saúde Mental, Ergonomia e Hábitos no Trabalho',
    category: 'saude',
    institution: 'IFSEMG — Instituto Federal do Sudeste de MG',
    hours: 20,
    thumb: '🧠',
    url: 'https://aprendamais.mec.gov.br/course/view.php?id=105',
    description: 'Prevenção de burnout digital, técnicas de mindfulness e organização para saúde dos olhos e postura.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Fundamentos de Saúde Mental', completed: true, pts: 100 },
      { id: 'm2', title: 'Módulo 2: Ergonomia Digital e Postura', completed: true, pts: 100 },
      { id: 'm3', title: 'Módulo 3: Gestão de Estresse & Pausas Ativas', completed: true, pts: 100 }
    ]
  },
  {
    id: 'mec-idiomas-01',
    title: 'Inglês Aplicado ao Mercado de Trabalho (Básico 1)',
    category: 'idiomas',
    institution: 'IFRS — Instituto Federal do Rio Grande do Sul',
    hours: 40,
    thumb: '🗣️',
    url: 'https://aprendamais.mec.gov.br/course/view.php?id=106',
    description: 'Vocabulário essencial de inglês para apresentações profissionais, e-mails comerciais e reuniões de trabalho.',
    modules: [
      { id: 'm1', title: 'Módulo 1: Apresentações e Saudações Corporativas', completed: false, pts: 100 },
      { id: 'm2', title: 'Módulo 2: Leitura de Documentos & E-mails em Inglês', completed: false, pts: 100 },
      { id: 'm3', title: 'Módulo 3: Vocabulário Técnico e Entrevistas', completed: false, pts: 100 }
    ]
  }
];

// Application State
let appState = {
  isLoggedIn: false,
  displayName: "Lucas Costa",
  email: "lucas@exemplo.com",
  points: 2450,
  level: 7,
  activeCourses: [],
  // Flag to indicate if the personalized plan has been shown
  hasSeenPlan: false,
  // User bio (free text)
  bio: "",
  // Avatar image (base64 data URL)
  avatar: ""
};

// Main DOM Content Loaded Listener
document.addEventListener('DOMContentLoaded', () => {
  loadAppState();
  initLandingLoginScreen();
  initTabNavigation();
  initChat();
  initPodcastPlayer();
  initRewardsModal();
  initMecIntegration();
  initUserPanel();
  initAnimations();
});

// Load state from localStorage
function loadAppState() {
  const savedState = localStorage.getItem('otimize_app_state');
  if (savedState) {
    try {
      appState = { ...appState, ...JSON.parse(savedState) };
    } catch (e) {
      console.error(e);
    }
  } else {
    appState.activeCourses = [
      MEC_OFFICIAL_CATALOG[0],
      MEC_OFFICIAL_CATALOG[2],
      MEC_OFFICIAL_CATALOG[4]
    ];
    saveAppState();
  }

  checkAuthView();
  updatePointsUI();
  renderMyActiveCourses();
}

function checkAuthView() {
  const landingScreen = document.getElementById('landing-screen');
  const mainApp = document.getElementById('main-app');

  if (appState.isLoggedIn) {
    if (landingScreen) landingScreen.style.display = 'none';
    if (mainApp) mainApp.style.display = 'flex';

    const userDisplayName = document.getElementById('user-display-name');
    if (userDisplayName) userDisplayName.textContent = appState.displayName;

    const welcomeHeading = document.getElementById('welcome-heading');
    if (welcomeHeading) welcomeHeading.textContent = `Olá, ${appState.displayName.split(' ')[0]}! 👋`;

    const userAvatarText = document.getElementById('user-avatar-text');
    if (userAvatarText) userAvatarText.textContent = getInitials(appState.displayName);

    populateUserPanel();

    // Show or hide personalized plan form based on flag
    const planForm = document.getElementById('form-user-goals');
    if (planForm) {
      if (appState.hasSeenPlan) {
        planForm.style.display = 'none';
      } else {
        planForm.style.display = 'block';
      }
      // Attach submit handler once
      if (!planForm.dataset.listenerAdded) {
        planForm.addEventListener('submit', (e) => {
          e.preventDefault();
          appState.hasSeenPlan = true;
          saveAppState();
          planForm.style.display = 'none';
        });
        planForm.dataset.listenerAdded = 'true';
      }
    }
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
  const userPtsDisplays = [
    document.getElementById('hero-points-count'),
    document.getElementById('level-current-pts'),
    document.getElementById('modal-points-display')
  ];

  userPtsDisplays.forEach(el => {
    if (el) {
      if (el.id === 'modal-points-display') {
        el.textContent = `${appState.points.toLocaleString('pt-BR')} Pontos`;
      } else {
        el.textContent = appState.points.toLocaleString('pt-BR');
      }
    }
  });

  const levelProgressFill = document.getElementById('level-progress-bar');
  if (levelProgressFill) {
    const pct = Math.min(100, Math.round((appState.points / 3000) * 100));
    levelProgressFill.style.width = pct + '%';
  }

  const activeCountEl = document.getElementById('stat-active-courses-count');
  if (activeCountEl) {
    activeCountEl.textContent = `${appState.activeCourses.length} cursos`;
  }
}

function getUsersDatabase() {
  const users = localStorage.getItem('otimize_registered_users');
  return users ? JSON.parse(users) : [];
}

function saveUserToDatabase(user) {
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
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('landing-login-email').value.trim();
      const password = document.getElementById('landing-login-password').value;

      if (!email || !password) return;

      const users = getUsersDatabase();
      const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

      if (!foundUser) {
        showToastNotification('❌ E-mail não encontrado. Crie uma conta para acessar.', true);
        return;
      }

      if (foundUser.password !== password) {
        showToastNotification('❌ Senha incorreta. Tente novamente.', true);
        return;
      }

      // Valid Authentication: Load User Data
      appState = { ...appState, ...foundUser, isLoggedIn: true };
      saveAppState();
      checkAuthView();
      showToastNotification(`✨ Bem-vindo(a) de volta, ${appState.displayName.split(' ')[0]}!`);
    });
  }

  if (formRegister) {
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('landing-reg-name').value.trim();
      const email = document.getElementById('landing-reg-email').value.trim();
      const password = document.getElementById('landing-reg-password').value;

      if (!name || !email || !password) return;

      if (password.length < 6) {
        showToastNotification('❌ A senha deve ter no mínimo 6 caracteres.', true);
        return;
      }

      const users = getUsersDatabase();
      const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

      if (existingUser) {
        showToastNotification('❌ Este e-mail já está cadastrado. Faça login!', true);
        return;
      }

      // Create Fresh User (Stats Zeroed for New Account)
      const newUser = {
        displayName: name,
        email: email,
        password: password,
        points: 0,
        level: 1,
        activeCourses: [],
        hasSeenPlan: false,
        bio: "",
        avatar: ""
      };

      saveUserToDatabase(newUser);

      appState = { ...appState, ...newUser, isLoggedIn: true };
      saveAppState();
      checkAuthView();
      showToastNotification(`🎉 Conta criada com sucesso! Olá, ${name.split(' ')[0]}!`);
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
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

  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function getInitials(name) {
  if (!name) return "LC";
  const parts = name.trim().split(' ');
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

/* ---------- Render Active MEC Courses ---------- */
function renderMyActiveCourses() {
  const grid = document.getElementById('my-active-courses-grid');
  if (!grid) return;

  grid.innerHTML = '';

  if (appState.activeCourses.length === 0) {
    grid.innerHTML = `
      <div class="glass-card" style="grid-column:1/-1; text-align:center; padding:32px;">
        <h3>Nenhum curso do MEC sincronizado ainda</h3>
        <p class="text-sm text-secondary mt-3 mb-4">Explore o catálogo oficial do Aprenda Mais MEC ou cole a URL da sua matrícula para acompanhar seu progresso!</p>
        <button class="btn btn-primary" id="btn-empty-mec-open">⚡ Sincronizar Primeiro Curso do MEC</button>
      </div>
    `;

    const emptyBtn = document.getElementById('btn-empty-mec-open');
    if (emptyBtn) emptyBtn.addEventListener('click', () => switchPage('import-mec'));
    return;
  }

  appState.activeCourses.forEach(course => {
    const completedCount = course.modules.filter(m => m.completed).length;
    const pct = Math.round((completedCount / course.modules.length) * 100);

    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <div class="course-thumb ${course.category || 'ti'}">
        ${course.thumb || '💻'}
        <span class="course-badge mec">MEC APRENDA+</span>
      </div>
      <div class="course-body">
        <h4>${course.title}</h4>
        <div class="course-meta">
          <span>⏱️ ${course.hours}h</span>
          <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">🏫 ${(course.institution || 'MEC').split('—')[0]}</span>
        </div>
        <div class="course-prog mb-4">
          <div class="progress-track">
            <div class="progress-fill green" style="width:${pct}%;"></div>
          </div>
          <span class="course-pct font-mono">${pct}%</span>
        </div>
        <button class="btn btn-primary btn-sm" style="width:100%; margin-top:auto;">
          ▶ Continuar Módulos & Validar
        </button>
      </div>
    `;

    card.querySelector('button').addEventListener('click', () => {
      openCoursePlayer(course.id);
    });

    grid.appendChild(card);
  });
}

/* ---------- MEC Modal Integration ---------- */
function initMecIntegration() {
  const modal = document.getElementById('mec-modal');
  const closeBtn = document.getElementById('mec-modal-close');
  const catalogTab = document.getElementById('tab-mec-catalog');
  const linkTab = document.getElementById('tab-mec-link');
  const contentCatalog = document.getElementById('content-mec-catalog');
  const contentLink = document.getElementById('content-mec-link');

  const quickImportBtn = document.getElementById('btn-quick-import-mec');
  const openMecModalBtn = document.getElementById('btn-open-mec-modal');
  const browseCatalogBtn = document.getElementById('btn-browse-mec-catalog');

  [quickImportBtn, openMecModalBtn, browseCatalogBtn].forEach(btn => {
    if (btn) btn.addEventListener('click', () => switchPage('import-mec'));
  });

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

  const searchInput = document.getElementById('mec-search-input');
  const catFilter = document.getElementById('mec-category-filter');

  function filterAndRenderCatalog() {
    const query = searchInput.value.toLowerCase().trim();
    const selectedCat = catFilter.value;

    const filtered = MEC_OFFICIAL_CATALOG.filter(item => {
      const matchesQuery = item.title.toLowerCase().includes(query) || item.institution.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
      const matchesCat = selectedCat === 'all' || item.category === selectedCat;
      return matchesQuery && matchesCat;
    });

    renderMecCatalogList(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', filterAndRenderCatalog);
  if (catFilter) catFilter.addEventListener('change', filterAndRenderCatalog);

  renderMecCatalogList(MEC_OFFICIAL_CATALOG);

  const importForm = document.getElementById('form-import-mec-link');
  if (importForm) {
    importForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const urlInput = document.getElementById('mec-import-url').value.trim();
      const instInput = document.getElementById('mec-import-institution').value;

      if (!urlInput) return;

      const newCourse = {
        id: 'imported-' + Date.now(),
        title: extractCourseTitleFromUrl(urlInput),
        category: 'ti',
        institution: instInput,
        hours: 30,
        thumb: '🎓',
        url: urlInput,
        description: 'Curso importado via link oficial do Aprenda Mais MEC.',
        modules: [
          { id: 'm1', title: 'Módulo 1: Introdução & Orientações do MEC', completed: true, pts: 100 },
          { id: 'm2', title: 'Módulo 2: Conteúdo Principal do Curso', completed: false, pts: 100 },
          { id: 'm3', title: 'Módulo 3: Atividades de Fixação', completed: false, pts: 100 },
          { id: 'm4', title: 'Avaliação Final & Emissão de Certificado', completed: false, pts: 200 }
        ]
      };

      appState.activeCourses.unshift(newCourse);
      appState.points += 100;
      saveAppState();
      renderMyActiveCourses();
      closeMecModal();

      alert(`🎉 Curso "${newCourse.title}" importado e sincronizado com sucesso! (+100 PTS de Bônus)`);
    });
  }

  const refreshBtn = document.getElementById('btn-refresh-mec-courses');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      refreshBtn.textContent = '⌛ Sincronizando...';
      setTimeout(() => {
        refreshBtn.textContent = '✓ Sincronizado com MEC';
        setTimeout(() => refreshBtn.textContent = '🔄 Atualizar Sincronização', 2000);
      }, 800);
    });
  }
}

function extractCourseTitleFromUrl(url) {
  if (url.includes('python')) return 'Curso Avançado de Python (MEC)';
  if (url.includes('gestao')) return 'Gestão Empresarial Aplicada (MEC)';
  if (url.includes('ingles')) return 'Inglês Instrumental (MEC)';
  return 'Curso Autoinstrucional Aprenda Mais MEC';
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
    listEl.innerHTML = `<p class="text-sm text-tertiary" style="grid-column:1/-1; text-align:center; padding:20px;">Nenhum curso encontrado para este filtro.</p>`;
    return;
  }

  items.forEach(course => {
    const isEnrolled = appState.activeCourses.some(c => c.id === course.id);

    const card = document.createElement('div');
    card.className = 'mec-item-card';
    card.innerHTML = `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
          <h4 class="mec-item-title">${course.thumb} ${course.title}</h4>
          <span class="course-badge mec" style="position:static;">MEC</span>
        </div>
        <p class="mec-item-meta">🏫 ${course.institution} · ⏱️ ${course.hours}h</p>
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
        appState.points += 50;
        saveAppState();
        renderMyActiveCourses();
        renderMecCatalogList(MEC_OFFICIAL_CATALOG);
        closeMecModal();
        alert(`🎓 Você se matriculou em "${course.title}"! (+50 PTS)`);
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
