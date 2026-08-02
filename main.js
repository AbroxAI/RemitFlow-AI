(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const NETWORK_FEE = 1;

  let balanceHidden = false;
  let totalFeeShare = 1250;
  let activeTier = 'premium';
  let selectedMethod = 'trc20';

  const tiers = {
    starter:  { name: 'Starter Tier',  min: 5,   max: 49,   rate: '3.0%', roi: '90%',  desc: 'Perfect for beginners dipping into diaspora savings.' },
    growth:   { name: 'Growth Tier',   min: 50,  max: 199,  rate: '3.5%', roi: '105%', desc: 'Higher returns for growing your liquidity pool.' },
    premium:  { name: 'Premium Tier',  min: 200, max: 499,  rate: '4.0%', roi: '120%', desc: 'Serious liquidity providers earn serious shares.' },
    diaspora: { name: 'Diaspora Tier', min: 500, max: Infinity, rate: '4.5%', roi: '135%', desc: 'Exclusive tier with highest fee share and priority support.' }
  };

  window.navigateTo = function(view) {
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    const target = $(`view-${view}`);
    if (target) target.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navItem = document.querySelector(`.nav-item[data-view="${view}"]`);
    if (navItem) navItem.classList.add('active');
    if (view === 'invest') buildTierCards();
    if (view === 'community') {
      if (typeof window.switchCommunityTab === 'function') window.switchCommunityTab('general');
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  window.selectTier = function(key) {
    if (!tiers[key]) return;
    activeTier = key;
    const name = tiers[key].name;
    const h = $('headerTier'); if (h) h.textContent = name.split(' ')[0];
    const s = $('statTier'); if (s) s.textContent = name.split(' ')[0];
    showToast(`✅ Switched to ${name}`);
  };

  window.collectNow = function() {
    const addr = ($('walletAddress')?.value || '').trim();
    const amt = parseFloat($('withdrawAmount')?.value);
    if (!addr) return showToast('⚠️ Enter wallet address');
    if (!amt || amt <= 0) return showToast('⚠️ Enter valid amount');
    if (amt > totalFeeShare) return showToast('⚠️ Insufficient balance');
    totalFeeShare -= amt;
    updateAllBalances();
    showReceipt(addr, amt);
  };

  window.toggleBalanceEye = function() {
    balanceHidden = !balanceHidden;
    updateAllBalances();
    const btn = $('eyeToggleBtn');
    if (btn) btn.innerHTML = balanceHidden
      ? '<i data-lucide="eye-off" style="width:14px;"></i> Show'
      : '<i data-lucide="eye" style="width:14px;"></i> Hide';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  // ==================== MEMBERS LIST ====================
  const TOTAL_MEMBERS = 12450;
  const memberList = [];          // the 80 visible members
  const allMembersHidden = [];    // additional fake members for "View All"

  function buildInitialMembers() {
    const all = window._communityPersonas || [];
    const members = [];
    // first use real personas
    for (let i = 0; i < Math.min(all.length, 80); i++) {
      const p = all[i];
      members.push({
        name: p.name,
        initials: p.initials,
        online: Math.random() < 0.4,
        locked: i >= 60,
        joinedDate: new Date(Date.now() - Math.floor(Math.random() * 180 * 24 * 3600 * 1000)).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      });
    }
    const fakeNames = ['Abigail Santos','Carlos Mendoza','Deepak Singh','Elena Petrova','Fatou Diop','Hassan Ali','Ingrid Svensson','Jin Soo Park','Kwesi Asare','Laila Nur','Mikhail Volkov','Nia Johnson','Omar Farouk','Priyanka Das','Ravi Kumar','Sofia Andersson','Tariq Mahmoud','Uche Okonkwo','Vera Ivanova','Wei Chen'];
    for (let i = members.length; i < 80; i++) {
      const name = fakeNames[(i - members.length) % fakeNames.length];
      const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
      members.push({
        name,
        initials,
        online: Math.random() < 0.3,
        locked: true,
        joinedDate: new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 3600 * 1000)).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      });
    }
    // sort online first
    members.sort((a,b) => (a.online && !b.online ? -1 : (!a.online && b.online ? 1 : a.name.localeCompare(b.name))));
    return members;
  }

  function buildHiddenMembers() {
    // generate a pool of 200 more fake members (to be revealed on "View All")
    const fakeNames = ['Abigail Santos','Carlos Mendoza','Deepak Singh','Elena Petrova','Fatou Diop','Hassan Ali','Ingrid Svensson','Jin Soo Park','Kwesi Asare','Laila Nur','Mikhail Volkov','Nia Johnson','Omar Farouk','Priyanka Das','Ravi Kumar','Sofia Andersson','Tariq Mahmoud','Uche Okonkwo','Vera Ivanova','Wei Chen'];
    const hidden = [];
    for (let i = 0; i < 200; i++) {
      const name = fakeNames[i % fakeNames.length] + ' ' + (i + 1);
      const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
      hidden.push({
        name,
        initials,
        online: Math.random() < 0.2,
        locked: false,
        joinedDate: new Date(Date.now() - Math.floor(Math.random() * 900 * 24 * 3600 * 1000)).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      });
    }
    return hidden;
  }

  function renderMembersTab(showAll = false) {
    const chatArea = document.getElementById('chatArea');
    if (!chatArea) return;
    if (memberList.length === 0) {
      const initial = buildInitialMembers();
      memberList.push(...initial);
    }
    if (allMembersHidden.length === 0) {
      allMembersHidden.push(...buildHiddenMembers());
    }

    const displayList = showAll ? [...memberList, ...allMembersHidden] : memberList;
    let html = `<div style="padding:10px;font-weight:700;color:var(--gold);border-bottom:1px solid var(--gold);margin-bottom:8px;">
      👥 Community Members (${showAll ? TOTAL_MEMBERS : memberList.length} of ${TOTAL_MEMBERS} online now)
    </div>`;
    displayList.forEach(m => {
      const dotColor = m.online ? '#22c55e' : '#555';
      const statusText = m.online ? 'Online' : 'Offline';
      const lockIcon = m.locked ? '<i data-lucide="lock" style="width:12px;height:12px;color:var(--text3);margin-left:6px;"></i>' : '';
      html += `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="position:relative;">
              <div style="width:32px;height:32px;border-radius:50%;background:var(--surface2);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.75rem;color:var(--text);">${m.initials}</div>
              <div style="position:absolute;bottom:-1px;right:-1px;width:10px;height:10px;border-radius:50%;background:${dotColor};border:2px solid var(--bg);"></div>
            </div>
            <div>
              <div style="font-size:0.8rem;font-weight:600;">${m.name} ${lockIcon}</div>
              <div style="font-size:0.6rem;color:var(--text3);">${statusText} · Joined ${m.joinedDate}</div>
            </div>
          </div>
        </div>`;
    });
    if (!showAll) {
      html += `<div style="text-align:center;margin-top:12px;">
        <button id="viewAllMembersBtn" class="btn btn-outline" style="padding:6px 16px;font-size:0.7rem;">
          <i data-lucide="unlock" style="width:14px;"></i> View All ${TOTAL_MEMBERS} Members
        </button>
      </div>`;
    }
    chatArea.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();

    if (!showAll) {
      const viewAllBtn = document.getElementById('viewAllMembersBtn');
      if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => renderMembersTab(true));
      }
    }
  }

  // Simulate new joiners (only when tab is members and not showing all)
  setInterval(() => {
    if (document.getElementById('view-community')?.classList.contains('active') &&
        document.querySelector('.tab-pill.active')?.dataset.tab === 'members') {
      // only add to memberList (not when viewing all)
      const fakeNames = ['Abigail Santos','Carlos Mendoza','Deepak Singh','Elena Petrova','Fatou Diop','Hassan Ali','Ingrid Svensson','Jin Soo Park','Kwesi Asare','Laila Nur','Mikhail Volkov','Nia Johnson','Omar Farouk','Priyanka Das','Ravi Kumar','Sofia Andersson','Tariq Mahmoud','Uche Okonkwo','Vera Ivanova','Wei Chen'];
      const newName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
      const initials = newName.split(' ').map(n => n[0]).join('').toUpperCase();
      memberList.unshift({
        name: newName,
        initials,
        online: true,
        locked: false,
        joinedDate: 'Just now'
      });
      if (memberList.length > 80) memberList.pop();
      // refresh view if still on members tab
      if (document.querySelector('.tab-pill.active')?.dataset.tab === 'members') {
        renderMembersTab(false);
      }
    }
  }, 15000);

  // ==================== COMMUNITY TABS ====================
  const tabHeadings = {
    general: '💬 General Chat',
    success: '🏆 Success Stories',
    announcements: '📢 Announcements',
    feecaptures: '💰 Recent Fee Captures',
    help: '🎧 Help Desk',
    members: '👥 Community Members'
  };

  function renderSuccessTab() {
    const chatArea = document.getElementById('chatArea');
    if (!chatArea) return;
    const testimonials = [
      { name: 'Rafiq Ahmed', location: 'Dubai, UAE', text: 'I used to lose $15 every month on fees. Now I earn from the same transactions. My family finally receives the full amount.' },
      { name: 'Farzana Chowdhury', location: 'Sylhet, Bangladesh', text: 'Started with 5 USDT just to test. Two months later, my fee share covers my parents’ monthly groceries.' },
      { name: 'Michael Chen', location: 'New York, USA', text: 'I send money to my relatives in Dhaka every month. RemitFlow has saved me over $200 in fees this year.' },
      { name: 'Aisha Al-Zaabi', location: 'Abu Dhabi, UAE', text: 'The platform is a blessing. My sister in London uses it to send money home without any charges.' },
      { name: 'Liam O\'Brien', location: 'Dublin, Ireland', text: 'I’ve saved over $180 in remittance fees since joining. This is the future.' },
      { name: 'Nomsa Dlamini', location: 'Johannesburg, SA', text: 'Finally a solution that actually helps families. I recommend it to everyone.' }
    ];
    let html = `<div style="padding:10px;font-weight:700;color:var(--gold);border-bottom:1px solid var(--gold);margin-bottom:8px;">🏆 Success Stories</div>`;
    testimonials.forEach(t => {
      html += `
        <div style="margin-bottom:12px;">
          <div style="font-weight:600;color:var(--text);">${t.name} <span style="font-weight:400;font-size:0.65rem;color:var(--text3);">${t.location}</span></div>
          <div style="font-size:0.8rem;color:var(--text2);margin-top:2px;">“${t.text}”</div>
        </div>`;
    });
    chatArea.innerHTML = html;
  }

  function renderAnnouncementsTab() {
    const chatArea = document.getElementById('chatArea');
    if (!chatArea) return;
    const announcements = [
      { text: '🚀 RemitFlow now supports BEP20 USDT for fee captures!', time: '2 hours ago' },
      { text: '📊 July fee shares have increased by 8% across all tiers.', time: '5 hours ago' },
      { text: '🌍 Diaspora Tier now available for liquidity above $500.', time: '1 day ago' },
      { text: '🔒 Enhanced security: 2FA is now live in wallet settings.', time: '2 days ago' },
      { text: '💸 New remittance corridor: Canada → Bangladesh now active.', time: '3 days ago' },
      { text: '🏦 Partnered with 3 new local banks for faster settlements.', time: '4 days ago' },
      { text: '🎉 Referral bonus doubled – invite friends and earn 10% extra!', time: '5 days ago' },
      { text: '📱 Mobile app coming soon – early access for Premium members.', time: '1 week ago' },
      { text: '🌐 USDT/BDT live spread now displayed on dashboard.', time: '1 week ago' },
      { text: '✅ Withdrawals processed in under 10 minutes – 99.9% uptime.', time: '1 week ago' },
      { text: '📈 Total fee shares distributed this week: $1.2M+', time: '2 weeks ago' }
    ];
    let html = `<div style="padding:10px;font-weight:700;color:var(--gold);border-bottom:1px solid var(--gold);margin-bottom:8px;">📢 Announcements</div>`;
    announcements.forEach(a => {
      html += `
        <div style="margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,.05);padding-bottom:6px;">
          <div style="font-size:0.8rem;">${a.text}</div>
          <div style="font-size:0.65rem;color:var(--text3);">${a.time}</div>
        </div>`;
    });
    chatArea.innerHTML = html;
  }

  function renderFeeCapturesTab() {
    const chatArea = document.getElementById('chatArea');
    if (!chatArea) return;
    const pairs = ['USD/BDT','AED/BDT','GBP/BDT','MYR/BDT','CAD/BDT','EUR/BDT','SGD/BDT'];
    let html = `<div style="padding:10px;font-weight:700;color:var(--gold);border-bottom:1px solid var(--gold);margin-bottom:8px;">💰 Recent Fee Captures</div>`;
    for (let i = 0; i < 15; i++) {
      const pair = pairs[Math.floor(Math.random() * pairs.length)];
      const cap = (Math.random() * 25 + 1).toFixed(2);
      const mins = Math.floor(Math.random() * 120);
      html += `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);">
          <div>
            <div style="font-weight:600;font-size:0.8rem;">${pair} spread – captured $${cap}</div>
            <div style="font-size:0.65rem;color:var(--text3);">${mins} min ago</div>
          </div>
          <div style="font-weight:700;color:var(--green);">$${cap}</div>
        </div>`;
    }
    chatArea.innerHTML = html;
  }

  // Help Desk – simple working simulation
  function renderHelpTab() {
    const chatArea = document.getElementById('chatArea');
    if (!chatArea) return;
    let html = `
      <div style="padding:10px;font-weight:700;color:var(--gold);border-bottom:1px solid var(--gold);margin-bottom:8px;">🎧 Help Desk</div>
      <div id="helpMessages" style="max-height:250px;overflow-y:auto;">
        <div style="font-size:0.75rem;color:var(--text2);margin-bottom:10px;">
          <strong>Support Bot:</strong> Hello! How can we help you today?
        </div>
      </div>
      <div style="display:flex;gap:6px;margin-top:10px;">
        <input type="text" id="helpInput" placeholder="Type your message..." style="flex:1;padding:10px;background:var(--surface2);border:1px solid var(--surface3);border-radius:20px;color:var(--text);font-family:Inter;">
        <button id="helpSendBtn" class="btn btn-gold" style="padding:8px 14px;border-radius:20px;"><i data-lucide="send" style="width:14px;"></i></button>
      </div>
    `;
    chatArea.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();

    const helpMessages = document.getElementById('helpMessages');
    const helpInput = document.getElementById('helpInput');
    const helpSendBtn = document.getElementById('helpSendBtn');

    function addMessage(text, isUser = false) {
      const msgDiv = document.createElement('div');
      msgDiv.style.cssText = 'margin-bottom:8px;font-size:0.75rem;';
      msgDiv.innerHTML = `<strong>${isUser ? 'You' : 'Support Bot'}:</strong> ${text}`;
      if (isUser) msgDiv.style.color = 'var(--gold)';
      helpMessages.appendChild(msgDiv);
      helpMessages.scrollTop = helpMessages.scrollHeight;
    }

    function botReply(userMsg) {
      const replies = [
        'Thanks for reaching out! Our team will review your request and get back to you soon.',
        'We received your message. A support agent will reply within 5 minutes.',
        'Thank you. If you have a transaction ID, please share it for faster assistance.',
        'I understand your concern. Can you provide more details?',
        'Our team is currently online. Please wait a moment while we connect you.'
      ];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      setTimeout(() => addMessage(reply), 800 + Math.random() * 1500);
    }

    helpSendBtn.addEventListener('click', () => {
      const msg = helpInput.value.trim();
      if (msg) {
        addMessage(msg, true);
        helpInput.value = '';
        botReply(msg);
      }
    });
    helpInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') helpSendBtn.click();
    });
  }

  window.switchCommunityTab = function(tab) {
    document.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
    const active = document.querySelector(`.tab-pill[data-tab="${tab}"]`);
    if (active) active.classList.add('active');

    const chatArea = document.getElementById('chatArea');
    if (!chatArea) return;

    if (window._chatLoopId) clearInterval(window._chatLoopId);
    chatArea.innerHTML = '';

    switch (tab) {
      case 'general':
        chatArea.innerHTML = `<div style="text-align:center;padding:10px;font-weight:700;color:var(--gold);border-bottom:1px solid var(--gold);margin-bottom:8px;">${tabHeadings.general}</div>`;
        if (typeof window.initCommunityChat === 'function') window.initCommunityChat();
        break;
      case 'success':
        renderSuccessTab();
        break;
      case 'announcements':
        renderAnnouncementsTab();
        break;
      case 'feecaptures':
        renderFeeCapturesTab();
        break;
      case 'help':
        renderHelpTab();
        break;
      case 'members':
        renderMembersTab(false);
        break;
      default:
        chatArea.innerHTML = `<div style="text-align:center;padding:10px;font-weight:700;color:var(--gold);border-bottom:1px solid var(--gold);margin-bottom:8px;">${tabHeadings.general}</div>`;
        if (typeof window.initCommunityChat === 'function') window.initCommunityChat();
    }
  };

  // ==================== TICKER ====================
  const remittancePairs = [
    { from: 'Dubai', to: 'Manila' }, { from: 'Riyadh', to: 'Cebu' },
    { from: 'London', to: 'Davao' }, { from: 'Singapore', to: 'Manila' },
    { from: 'Toronto', to: 'Quezon City' }, { from: 'Kuala Lumpur', to: 'Manila' },
    { from: 'Doha', to: 'Cebu' }, { from: 'Sydney', to: 'Manila' },
    { from: 'Dubai', to: 'Mumbai' }, { from: 'Riyadh', to: 'Kerala' },
    { from: 'London', to: 'Delhi' }, { from: 'Abu Dhabi', to: 'Hyderabad' },
    { from: 'Singapore', to: 'Chennai' }, { from: 'Doha', to: 'Kochi' },
    { from: 'Dubai', to: 'Karachi' }, { from: 'Riyadh', to: 'Lahore' },
    { from: 'London', to: 'Islamabad' }, { from: 'Dubai', to: 'Dhaka' },
    { from: 'Riyadh', to: 'Sylhet' }, { from: 'Kuala Lumpur', to: 'Chittagong' },
    { from: 'New York', to: 'Mexico City' }, { from: 'Paris', to: 'Cairo' },
    { from: 'Toronto', to: 'Kingston' }, { from: 'Sydney', to: 'Auckland' },
    { from: 'Milan', to: 'Lagos' }, { from: 'Los Angeles', to: 'Guatemala City' }
  ];

  function buildTicker() {
    const track = $('tickerTrack');
    if (!track) return;
    let html = '';
    for (let i = 0; i < 8; i++) {
      const p = remittancePairs[i % remittancePairs.length];
      const amt = (Math.random() * 2000 + 500).toFixed(0);
      const saved = (amt * 0.02).toFixed(2);
      html += `<span class="ticker-item"><span class="ticker-dot"></span> ${p.from} → ${p.to}: $${amt} routed, fee saved $${saved}</span>`;
    }
    track.innerHTML = html + html;
  }

  function buildFeeCaptures() {
    const c = $('feeCapturesContainer');
    if (!c) return;
    const pairs = ['USD/BDT','AED/BDT','GBP/BDT','MYR/BDT','CAD/BDT'];
    let html = '';
    for (let i=0; i<4; i++) {
      const pair = pairs[Math.floor(Math.random()*pairs.length)];
      const cap = (Math.random()*20+1).toFixed(2);
      const mins = Math.floor(Math.random()*60);
      html += `<div class="fee-card"><div class="fee-info"><div class="fee-title">${pair} spread – captured $${cap}</div><div class="fee-time">${mins} min ago</div></div><div class="fee-amount"><i data-lucide="arrow-up-right" style="width:14px;"></i> $${cap}</div></div>`;
    }
    c.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function buildTierCards() {
    const c = $('tierCardsContainer');
    if (!c) return;
    let html = '';
    for (const [k,t] of Object.entries(tiers)) {
      const pop = k==='starter'?'Most Popular':'';
      html += `<div class="tier-card" data-tier="${k}">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div class="tier-badge"><i data-lucide="star" style="width:16px;"></i> ${t.name}</div>
          ${pop?`<span style="font-size:0.65rem;background:rgba(34,197,94,.15);color:#22c55e;padding:2px 8px;border-radius:10px;">${pop}</span>`:''}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin:8px 0">
          <div class="tier-rate">${t.rate}</div><span style="font-size:0.7rem;color:var(--text3)">daily fee share</span>
        </div>
        <div class="tier-meta">
          <span>Min: $${t.min}</span><span>Max: ${t.max===Infinity?'Unlimited':'$'+t.max}</span><span>30d ROI: ${t.roi}</span>
        </div>
        <button class="btn-tier" onclick="window.selectTier('${k}')">Provide Liquidity</button>
      </div>`;
    }
    c.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function updateReceivePreview() {
    const amt = parseFloat($('withdrawAmount')?.value) || 0;
    const recv = Math.max(0, amt - NETWORK_FEE);
    const el = $('receivePreview');
    if (el) el.textContent = `$${recv.toFixed(2)}`;
  }
  function showReceipt(addr, amt) {
    const c = $('receiptArea');
    if (!c) return;
    const recv = (amt - NETWORK_FEE).toFixed(2);
    c.innerHTML = `<div class="receipt">
      <h3><i data-lucide="check-circle" style="width:20px;"></i> Collection Sent!</h3>
      <div class="detail-row"><span>Method</span><span>USDT (${selectedMethod.toUpperCase()})</span></div>
      <div class="detail-row"><span>Address</span><span>${addr.slice(0,8)}...</span></div>
      <div class="detail-row"><span>Amount</span><span>$${amt.toFixed(2)}</span></div>
      <div class="detail-row"><span>Network Fee</span><span>$${NETWORK_FEE.toFixed(2)}</span></div>
      <div class="detail-row" style="color:var(--green);font-weight:700"><span>You Received</span><span>$${recv}</span></div>
    </div>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function updateAllBalances() {
    const h = balanceHidden;
    const set = (id, val) => { const el = $(id); if (el) el.textContent = h ? '****' : val; };
    set('totalEarned', `$${totalFeeShare.toFixed(2)}`);
    set('availableShare', `$${totalFeeShare.toFixed(2)}`);
    set('totalBalance', `$${(totalFeeShare + 930).toFixed(2)}`);
    set('availBalance', `$${totalFeeShare.toFixed(2)}`);
    set('lockedBalance', '$930.00');
    set('trc20Balance', `$${(totalFeeShare * 0.7).toFixed(2)}`);
    set('bep20Balance', `$${(totalFeeShare * 0.3).toFixed(2)}`);
  }

  const fakeTransactions = [
    { type: 'Deposit', date: 'Jun 15, 2026', amount: 1000.00, incoming: true },
    { type: 'Fee Captured', date: 'Jun 16, 2026', amount: 12.40, incoming: true },
    { type: 'Fee Captured', date: 'Jun 18, 2026', amount: 8.90, incoming: true },
    { type: 'Fee Captured', date: 'Jun 20, 2026', amount: 15.20, incoming: true },
    { type: 'Fee Captured', date: 'Jun 22, 2026', amount: 10.75, incoming: true },
    { type: 'Withdrawal', date: 'Jun 28, 2026', amount: -200.00, incoming: false },
    { type: 'Fee Captured', date: 'Jul 01, 2026', amount: 13.50, incoming: true },
    { type: 'Fee Captured', date: 'Jul 03, 2026', amount: 9.20, incoming: true },
    { type: 'Deposit', date: 'Jul 05, 2026', amount: 500.00, incoming: true },
    { type: 'Fee Captured', date: 'Jul 07, 2026', amount: 11.80, incoming: true },
    { type: 'Withdrawal', date: 'Jul 10, 2026', amount: -150.00, incoming: false },
    { type: 'Fee Captured', date: 'Jul 12, 2026', amount: 14.60, incoming: true },
    { type: 'Fee Captured', date: 'Jul 14, 2026', amount: 7.90, incoming: true },
    { type: 'Fee Captured', date: 'Jul 16, 2026', amount: 16.30, incoming: true },
    { type: 'Fee Captured', date: 'Jul 18, 2026', amount: 12.10, incoming: true },
    { type: 'Withdrawal', date: 'Jul 20, 2026', amount: -300.00, incoming: false },
    { type: 'Fee Captured', date: 'Jul 22, 2026', amount: 10.40, incoming: true },
    { type: 'Fee Captured', date: 'Jul 24, 2026', amount: 18.20, incoming: true },
    { type: 'Fee Captured', date: 'Jul 25, 2026', amount: 11.75, incoming: true },
    { type: 'Fee Captured', date: 'Jul 26, 2026', amount: 13.90, incoming: true }
  ];

  function renderTransactions() {
    const container = $('txList');
    if (!container) return;
    let html = '';
    fakeTransactions.forEach(tx => {
      const cls = tx.incoming ? 'in' : 'out';
      const prefix = tx.incoming ? '+' : '';
      html += `<div class="tx-item">
        <div><div class="tx-type">${tx.type}</div><div class="tx-date">${tx.date}</div></div>
        <div class="tx-amount ${cls}">${prefix}$${Math.abs(tx.amount).toFixed(2)}</div>
      </div>`;
    });
    container.innerHTML = html;
  }

  function bindEvents() {
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => window.navigateTo(btn.dataset.view));
    });
    $('methodSelector')?.addEventListener('click', (e) => {
      const opt = e.target.closest('.method-option');
      if (!opt) return;
      document.querySelectorAll('.method-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedMethod = opt.dataset.method;
    });
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = $('withdrawAmount');
        if (input) {
          input.value = btn.dataset.amount === 'max' ? totalFeeShare : btn.dataset.amount;
          updateReceivePreview();
        }
      });
    });
    $('withdrawAmount')?.addEventListener('input', updateReceivePreview);
  }

  function showToast(msg) {
    const container = $('toastContainer');
    if (!container) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    container.appendChild(t);
    setTimeout(() => t.remove(), 2500);
  }

  function initApp() {
    window.selectTier('premium');
    buildTicker();
    buildFeeCaptures();
    updateAllBalances();
    renderTransactions();
    bindEvents();
    if (typeof lucide !== 'undefined') lucide.createIcons();
    setInterval(buildFeeCaptures, 30000);
    setInterval(() => {
      const el = $('todayFee');
      if (el && !balanceHidden) el.textContent = `$${(Math.random() * 8 + 2).toFixed(2)}`;
    }, 15000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
