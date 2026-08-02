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
      if (typeof window.initCommunityChat === 'function') window.initCommunityChat();
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

  // ==================== TAB‑SPECIFIC CONTENT ====================
  const tabHeadings = {
    general: '💬 General Chat',
    success: '🏆 Success Stories',
    market: '📢 Announcements & Updates',
    help: '🎧 Help Desk'
  };

  window.switchCommunityTab = function(tab) {
    document.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
    const active = document.querySelector(`.tab-pill[data-tab="${tab}"]`);
    if (active) active.classList.add('active');

    // Clear chat area and show heading, then re‑populate
    const chatArea = document.getElementById('chatArea');
    if (chatArea) {
      chatArea.innerHTML = `<div style="text-align:center; padding:10px; font-weight:700; color:var(--gold); border-bottom:1px solid var(--gold); margin-bottom:8px;">${tabHeadings[tab] || tabHeadings.general}</div>`;
    }

    // Re‑initialize the chat simulation (it will fill below the heading)
    if (typeof window.initCommunityChat === 'function') window.initCommunityChat();
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
