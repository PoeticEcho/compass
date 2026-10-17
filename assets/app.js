try {

    // =========================================================================
    // 1. ANCIENT GUARDIANS & DIRECTION LORE DATA (8 DIRECTIONS FOR KIDS)
    // =========================================================================
    const DIRECTION_LORE = [
      {
        deg: 0,
        code: 'N',
        ko: '정북쪽 (North)',
        guardian: '북방 현무 (玄武)',
        icon: '🐢',
        title: '북극성과 현무의 얼음 신전',
        desc: '나침반의 빨간 태양 바늘(N극)은 언제나 북쪽을 가리켜요! 지구가 거대한 자석이기 때문이죠. 옛날 탐험가들은 밤하늘의 북극성과 나침반을 함께 보며 바다를 건넜답니다.'
      },
      {
        deg: 45,
        code: 'NE',
        ko: '북동쪽 (Northeast)',
        guardian: '별자리 아스트롤라베',
        icon: '🔭',
        title: '고대 천문학자의 별빛 전망대',
        desc: '북동쪽 하늘에서는 계절마다 회전하는 별자리를 관측할 수 있어요. 고대 과학자들은 아스트롤라베(별자리 원반)를 돌려 시간과 배의 위치를 정확히 계산했답니다!'
      },
      {
        deg: 90,
        code: 'E',
        ko: '정동쪽 (East)',
        guardian: '동방 청룡 (靑龍)',
        icon: '🐉',
        title: '푸른 용이 지키는 해돋이 제단',
        desc: '태양과 달, 별이 매일 아침 힘차게 떠오르는 동쪽이에요! 고대 전설에서는 푸른 용(청룡)이 봄과 아침의 생명을 깨우며 동쪽 하늘을 수호한다고 믿었답니다.'
      },
      {
        deg: 135,
        code: 'SE',
        ko: '남동쪽 (Southeast)',
        guardian: '황금 보물섬 항로',
        icon: '🏴‍☠️',
        title: '대항해시대 비밀의 보물섬',
        desc: '바람을 타고 미지의 바다로 나아가던 무역선들의 황금 항로예요! 안개가 자욱한 바다에서도 나침반 유물 덕분에 선장들은 보물섬의 위치를 잃지 않았어요.'
      },
      {
        deg: 180,
        code: 'S',
        ko: '정남쪽 (South)',
        guardian: '남방 주작 (朱雀)',
        icon: '🦅',
        title: '불꽃의 새 주작과 태양의 피라미드',
        desc: '우리나라에서는 태양이 하루 중 가장 높이 뜰 무렵 대체로 남쪽에서 보여요. 이 시각은 날짜와 장소에 따라 달라져요! 우리나라와 중국의 고대 나침반인 "지남철(指南鐵)"은 이름 그대로 남쪽을 가리키는 신비한 철이라는 뜻이랍니다.'
      },
      {
        deg: 225,
        code: 'SW',
        ko: '남서쪽 (Southwest)',
        guardian: '신비한 산호초 해협',
        icon: '🐬',
        title: '바다거북의 생체 나침반 해협',
        desc: '바다거북과 일부 철새도 몸속에 보이지 않는 생체 나침반을 가지고 있다는 걸 알고 있나요? 지구의 자기장을 느끼며 수천 킬로미터 떨어진 고향 바다를 찾아간답니다!'
      },
      {
        deg: 270,
        code: 'W',
        ko: '정서쪽 (West)',
        guardian: '서방 백호 (白虎)',
        icon: '🐯',
        title: '하얀 호랑이 백호와 황혼의 유적',
        desc: '하루를 마친 태양이 붉은 노을을 남기며 저무는 서쪽이에요. 용맹한 하얀 호랑이(백호)가 가을의 황금빛 들판과 저녁 하늘의 별빛 문을 지킨다고 전해져요.'
      },
      {
        deg: 315,
        code: 'NW',
        ko: '북서쪽 (Northwest)',
        guardian: '바이킹의 태양석 해안',
        icon: '💎',
        title: '전설의 바이킹 태양석(Sunstone)',
        desc: '먹구름이 낀 북서쪽 바다를 항해하던 태양석 전설이 전해져요. 방해석 같은 결정을 이용해 태양 방향을 추정했을 가능성이 연구되고 있지만 실제 사용 여부는 확실하지 않아요!'
      }
    ];

    const THEMES = {
      solar: {
        name: '태양의 황금 아스트롤라베',
        primaryHex: 0xf59e0b,
        secondaryHex: 0xd97706,
        metalHex: 0xb45309,
        crystalNorthHex: 0xff2a4b,
        crystalSouthHex: 0x00d2ff,
        coreHex: 0xfbbf24,
        dialBg1: '#1d140b',
        dialBg2: '#090604',
        dialGold: '#fbbf24',
        dialAccent: '#38bdf8',
        auraCss: 'radial-gradient(circle at 50% 48%, rgba(217, 119, 6, 0.22) 0%, rgba(15, 23, 42, 0.55) 48%, rgba(5, 5, 9, 0.98) 100%)'
      },
      atlantis: {
        name: '아틀란티스 심해 오리할콘 유물',
        primaryHex: 0x06b6d4,
        secondaryHex: 0x0284c7,
        metalHex: 0x0f766e,
        crystalNorthHex: 0x10b981,
        crystalSouthHex: 0x6366f1,
        coreHex: 0x22d3ee,
        dialBg1: '#061c24',
        dialBg2: '#020b10',
        dialGold: '#22d3ee',
        dialAccent: '#34d399',
        auraCss: 'radial-gradient(circle at 50% 48%, rgba(6, 182, 212, 0.24) 0%, rgba(15, 23, 42, 0.6) 48%, rgba(3, 7, 14, 0.98) 100%)'
      },
      celestial: {
        name: '별자리 마법사의 성배 나침반',
        primaryHex: 0xa855f7,
        secondaryHex: 0xec4899,
        metalHex: 0x4c1d95,
        crystalNorthHex: 0xf43f5e,
        crystalSouthHex: 0x38bdf8,
        coreHex: 0xe879f9,
        dialBg1: '#190b28',
        dialBg2: '#07030d',
        dialGold: '#e879f9',
        dialAccent: '#fbbf24',
        auraCss: 'radial-gradient(circle at 50% 48%, rgba(168, 85, 247, 0.24) 0%, rgba(17, 12, 34, 0.6) 48%, rgba(4, 3, 9, 0.98) 100%)'
      }
    };

    // =========================================================================
    // 2. SYNTHESIZED WEB AUDIO SOUND ENGINE (ANCIENT MECHANICAL & CHIMES)
    // =========================================================================
    class RelicAudioEngine {
      constructor() {
        this.ctx = null;
        this.enabled = false;
        this.lastTickStep = 0;
      }

      init() {
        if (!this.ctx) {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (AudioCtx) {
            this.ctx = new AudioCtx();
          }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
      }

      playTick(isCardinal = false) {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = isCardinal ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(isCardinal ? 680 : 320, now);
        osc.frequency.exponentialRampToValueAtTime(isCardinal ? 220 : 95, now + (isCardinal ? 0.09 : 0.035));

        gain.gain.setValueAtTime(isCardinal ? 0.14 : 0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + (isCardinal ? 0.09 : 0.035));

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + (isCardinal ? 0.095 : 0.04));
      }

      playAwakeningChord() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);

          gain.gain.setValueAtTime(0.001, now + idx * 0.06);
          gain.gain.linearRampToValueAtTime(0.11, now + idx * 0.06 + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0008, now + idx * 0.06 + 1.1);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 1.15);
        });
      }
    }

    const soundEngine = new RelicAudioEngine();

    // =========================================================================
    // 3. PROCEDURAL ANCIENT DIAL TEXTURE GENERATOR (HTML5 CANVAS -> THREE.JS)
    // =========================================================================
    function createCompassDialTexture(themeKey = 'solar') {
      const theme = THEMES[themeKey] || THEMES.solar;
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      const cx = 512;
      const cy = 512;

      // Radial Background
      const grad = ctx.createRadialGradient(cx, cy, 30, cx, cy, 500);
      grad.addColorStop(0, theme.dialBg1);
      grad.addColorStop(0.65, theme.dialBg2);
      grad.addColorStop(1, '#020204');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, 504, 0, Math.PI * 2);
      ctx.fill();

      // Concentric Engraved Gold Rings
      const rings = [490, 472, 430, 382, 330, 260, 175, 95];
      rings.forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = idx % 2 === 0 ? theme.dialGold : theme.dialAccent;
        ctx.globalAlpha = idx === 0 || idx === 2 ? 0.85 : 0.4;
        ctx.lineWidth = idx === 0 ? 6 : idx === 2 ? 3 : 1.5;
        ctx.stroke();
      });
      ctx.globalAlpha = 1;

      // 360 Degree Ticks & Numbers
      for (let deg = 0; deg < 360; deg += 2) {
        const rad = (deg - 90) * (Math.PI / 180);
        const isMajor30 = deg % 30 === 0;
        const isMid10 = deg % 10 === 0;
        const outerR = 468;
        const innerR = isMajor30 ? 434 : isMid10 ? 446 : 456;

        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(rad) * outerR, cy + Math.sin(rad) * outerR);
        ctx.lineTo(cx + Math.cos(rad) * innerR, cy + Math.sin(rad) * innerR);
        ctx.strokeStyle = isMajor30 ? '#ffffff' : theme.dialGold;
        ctx.globalAlpha = isMajor30 ? 0.95 : isMid10 ? 0.75 : 0.4;
        ctx.lineWidth = isMajor30 ? 3.5 : isMid10 ? 2 : 1;
        ctx.stroke();

        if (isMajor30 && deg % 90 !== 0) {
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(deg * (Math.PI / 180));
          ctx.fillStyle = theme.dialGold;
          ctx.globalAlpha = 0.85;
          ctx.font = 'bold 22px Orbitron, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(String(deg), 0, -405);
          ctx.restore();
        }
      }
      ctx.globalAlpha = 1;

      // Ancient Runic Glyph Ring (between r=330 and r=382)
      const runes = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ'];
      for (let i = 0; i < 24; i++) {
        const angle = (i * 15) * (Math.PI / 180);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        ctx.fillStyle = i % 2 === 0 ? theme.dialGold : theme.dialAccent;
        ctx.globalAlpha = 0.75;
        ctx.font = 'bold 26px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(runes[i % runes.length], 0, -356);
        ctx.restore();
      }

      // Compass Rose Star Geometry (8-Pointed Ancient Star)
      ctx.save();
      ctx.translate(cx, cy);
      for (let i = 0; i < 8; i++) {
        ctx.save();
        ctx.rotate((i * 45) * (Math.PI / 180));
        const len = i % 2 === 0 ? 315 : 235;
        const width = i % 2 === 0 ? 36 : 24;

        // Left half of star point (bright)
        ctx.beginPath();
        ctx.moveTo(0, -len);
        ctx.lineTo(-width, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fillStyle = i === 0 ? '#ef4444' : theme.dialGold;
        ctx.globalAlpha = i % 2 === 0 ? 0.85 : 0.55;
        ctx.fill();

        // Right half of star point (shaded)
        ctx.beginPath();
        ctx.moveTo(0, -len);
        ctx.lineTo(width, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fillStyle = i === 0 ? '#991b1b' : theme.dialAccent;
        ctx.globalAlpha = i % 2 === 0 ? 0.55 : 0.35;
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();

      // Cardinal & Intercardinal Labels
      const dirs = [
        { deg: 0, label: 'N', sub: '북', color: '#ff4d6d', size: 54 },
        { deg: 45, label: 'NE', sub: '북동', color: theme.dialGold, size: 28 },
        { deg: 90, label: 'E', sub: '동', color: '#ffffff', size: 46 },
        { deg: 135, label: 'SE', sub: '남동', color: theme.dialGold, size: 28 },
        { deg: 180, label: 'S', sub: '남', color: '#38bdf8', size: 46 },
        { deg: 225, label: 'SW', sub: '남서', color: theme.dialGold, size: 28 },
        { deg: 270, label: 'W', sub: '서', color: '#ffffff', size: 46 },
        { deg: 315, label: 'NW', sub: '북서', color: theme.dialGold, size: 28 }
      ];

      dirs.forEach((d) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(d.deg * (Math.PI / 180));
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Main English Letter
        ctx.fillStyle = d.color;
        ctx.shadowColor = d.color;
        ctx.shadowBlur = 12;
        ctx.font = `900 ${d.size}px "Cinzel Decorative", serif`;
        ctx.fillText(d.label, 0, -398);

        // Korean Sub-label inside
        ctx.shadowBlur = 4;
        ctx.font = 'bold 22px "Noto Sans KR", sans-serif';
        ctx.fillStyle = '#fef3c7';
        ctx.fillText(d.sub, 0, -292);
        ctx.restore();
      });

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 4;
      texture.needsUpdate = true;
      return texture;
    }

    // =========================================================================
    // 4. THREE.JS 3D ANCIENT ARTIFACT COMPASS SCENE
    // =========================================================================
    const container = document.getElementById('canvas-container');
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 7.2, 5.6);
    camera.lookAt(0, 0, 0);

    let renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
        catch (error) {
      // Keep the compass usable when a browser/GPU cannot create a WebGL context.
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas 그래픽을 사용할 수 없습니다.');
      canvas.setAttribute('aria-label', '2D 호환 나침반');
      const note = document.createElement('p');
      note.textContent = '2D 호환 화면 · 이 브라우저는 3D 그래픽을 지원하지 않아요';
      Object.assign(note.style,{position:'absolute',bottom:'4px',width:'100%',textAlign:'center',fontSize:'11px',color:'#fcd34d',pointerEvents:'none'});
      container.appendChild(note);
      let width=0,height=0,ratio=1;
      renderer = {
        domElement: canvas, shadowMap: {},
        setPixelRatio(value) { ratio=value; this.setSize(width,height); },
        setSize(w,h) { width=w;height=h;canvas.width=Math.round(w*ratio);canvas.height=Math.round(h*ratio);canvas.style.width=`${w}px`;canvas.style.height=`${h}px`; },
        render() {
          ctx.setTransform(ratio,0,0,ratio,0,0);ctx.clearRect(0,0,width,height);
          const x=width/2,y=height/2,r=Math.max(30,Math.min(width,height)*0.40);
          const themeKey=document.querySelector('.theme-btn.relic-btn-active')?.getAttribute('data-theme') || 'solar';
          const color=THEMES[themeKey].dialGold;
          ctx.save();ctx.translate(x,y);
          const glow=ctx.createRadialGradient(0,0,r*.2,0,0,r);glow.addColorStop(0,'#292016');glow.addColorStop(1,'#08070c');
          ctx.fillStyle=glow;ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();ctx.strokeStyle=color;ctx.lineWidth=3;ctx.stroke();
          ctx.rotate(-currentHeading*Math.PI/180);
          for(let deg=0;deg<360;deg+=5){const a=deg*Math.PI/180;ctx.beginPath();ctx.moveTo(Math.sin(a)*r*.96,-Math.cos(a)*r*.96);ctx.lineTo(Math.sin(a)*r*(deg%45===0?.80:.89),-Math.cos(a)*r*(deg%45===0?.80:.89));ctx.lineWidth=deg%45===0?2:1;ctx.stroke();}
          ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`bold ${Math.max(12,r*.14)}px system-ui`;
          ['N','NE','E','SE','S','SW','W','NW'].forEach((label,i)=>{const a=i*Math.PI/4;ctx.fillStyle=i===0?'#ff627d':color;ctx.fillText(label,Math.sin(a)*r*.69,-Math.cos(a)*r*.69);});
          ctx.fillStyle='#ff2a4b';ctx.beginPath();ctx.moveTo(0,-r*.50);ctx.lineTo(r*.10,r*.09);ctx.lineTo(0,0);ctx.lineTo(-r*.10,r*.09);ctx.closePath();ctx.fill();
          ctx.fillStyle='#38bdf8';ctx.beginPath();ctx.moveTo(0,r*.50);ctx.lineTo(-r*.10,-r*.09);ctx.lineTo(0,0);ctx.lineTo(r*.10,-r*.09);ctx.closePath();ctx.fill();ctx.restore();
        }
      };
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffedd5, 0.75);
    scene.add(ambientLight);

    const mainGoldLight = new THREE.PointLight(0xf59e0b, 2.3, 25);
    mainGoldLight.position.set(4, 7, 4);
    scene.add(mainGoldLight);

    const rimCyanLight = new THREE.PointLight(0x38bdf8, 1.8, 25);
    rimCyanLight.position.set(-5, 5, -4);
    scene.add(rimCyanLight);

    const coreGlowLight = new THREE.PointLight(0xff2a4b, 1.6, 10);
    coreGlowLight.position.set(0, 1.8, 0);
    scene.add(coreGlowLight);

    // Root Artifact Group (Tilts with user drag or device orientation)
    const artifactRoot = new THREE.Group();
    scene.add(artifactRoot);

    // Materials (Updated dynamically on theme switch)
    const bronzeMaterial = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      metalness: 0.85,
      roughness: 0.28
    });

    const brightGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.92,
      roughness: 0.18,
      emissive: 0x451a03,
      emissiveIntensity: 0.25
    });

    const darkObsidianMaterial = new THREE.MeshStandardMaterial({
      color: 0x111827,
      metalness: 0.6,
      roughness: 0.35
    });

    const northCrystalMat = new THREE.MeshStandardMaterial({
      color: 0xff2a4b,
      emissive: 0xff1e42,
      emissiveIntensity: 0.85,
      metalness: 0.2,
      roughness: 0.1,
      transparent: true,
      opacity: 0.94
    });

    const southCrystalMat = new THREE.MeshStandardMaterial({
      color: 0x00d2ff,
      emissive: 0x0284c7,
      emissiveIntensity: 0.75,
      metalness: 0.2,
      roughness: 0.12,
      transparent: true,
      opacity: 0.92
    });

    const coreCrystalMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.9,
      metalness: 0.3,
      roughness: 0.08
    });

    // 4.1 Base Pedestal & Outer Relic Bezel
    const baseCylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(3.45, 3.7, 0.42, 64),
      darkObsidianMaterial
    );
    baseCylinder.position.y = -0.25;
    artifactRoot.add(baseCylinder);

    const outerTorus = new THREE.Mesh(
      new THREE.TorusGeometry(3.45, 0.22, 24, 96),
      bronzeMaterial
    );
    outerTorus.rotation.x = Math.PI / 2;
    outerTorus.position.y = 0.04;
    artifactRoot.add(outerTorus);

    // 8 Ornate Claws & Glowing Gem Nodes around the Outer Bezel
    const bezelNodesGroup = new THREE.Group();
    artifactRoot.add(bezelNodesGroup);
    const nodeGems = [];

    for (let i = 0; i < 8; i++) {
      const angle = (i * 45) * (Math.PI / 180);
      const r = 3.48;
      const clawGroup = new THREE.Group();
      clawGroup.position.set(Math.sin(angle) * r, 0.12, -Math.cos(angle) * r);
      clawGroup.rotation.y = -angle;

      const mount = new THREE.Mesh(
        new THREE.BoxGeometry(0.42, 0.28, 0.48),
        brightGoldMaterial
      );
      clawGroup.add(mount);

      const gem = new THREE.Mesh(
        new THREE.OctahedronGeometry(i === 0 ? 0.22 : 0.15, 0),
        i === 0 ? northCrystalMat : (i % 2 === 0 ? coreCrystalMat : southCrystalMat)
      );
      gem.position.y = 0.22;
      clawGroup.add(gem);
      nodeGems.push(gem);

      bezelNodesGroup.add(clawGroup);
    }

    // 4.2 Rotating Astrolabe Gimbal Ring (Tilts & Spins around the Dial)
    const astrolabeRingGroup = new THREE.Group();
    artifactRoot.add(astrolabeRingGroup);

    const gimbalTorus = new THREE.Mesh(
      new THREE.TorusGeometry(3.08, 0.09, 16, 80),
      brightGoldMaterial
    );
    gimbalTorus.rotation.x = Math.PI / 2;
    gimbalTorus.position.y = 0.14;
    astrolabeRingGroup.add(gimbalTorus);

    // 12 Astrolabe Star Pointers along the gimbal ring
    for (let i = 0; i < 12; i++) {
      const a = (i * 30) * (Math.PI / 180);
      const tooth = new THREE.Mesh(
        new THREE.ConeGeometry(0.08, 0.25, 4),
        brightGoldMaterial
      );
      tooth.position.set(Math.sin(a) * 2.95, 0.14, -Math.cos(a) * 2.95);
      tooth.rotation.x = -Math.PI / 2;
      tooth.rotation.z = -a;
      astrolabeRingGroup.add(tooth);
    }

    // 4.3 Rotating Engraved Ancient Dial Plate (Rotates with Compass Heading!)
    const rotatingDialGroup = new THREE.Group();
    artifactRoot.add(rotatingDialGroup);

    const dialMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(2.92, 2.92, 0.1, 64),
      [
        bronzeMaterial,
        new THREE.MeshStandardMaterial({
          map: createCompassDialTexture('solar'),
          metalness: 0.45,
          roughness: 0.35
        }),
        darkObsidianMaterial
      ]
    );
    // Cylinder cap UVs place the top of the canvas on +X. Align N with -Z.
    dialMesh.rotation.y = Math.PI / 2;
    dialMesh.position.y = 0.02;
    rotatingDialGroup.add(dialMesh);

    // 4.4 Ornate 3D Magnetic Needle Assembly & Floating Core Crystal
    const needleGroup = new THREE.Group();
    needleGroup.position.y = 0.24;
    artifactRoot.add(needleGroup);

    // North Spearhead (Points to -Z in 3D space, which is Top/North on screen)
    const northBladeGeo = new THREE.ConeGeometry(0.28, 2.45, 4);
    northBladeGeo.scale(1, 1, 0.38);
    const northBlade = new THREE.Mesh(northBladeGeo, northCrystalMat);
    northBlade.rotation.x = -Math.PI / 2;
    northBlade.position.z = -1.22;
    needleGroup.add(northBlade);

    // Golden Filigree Collar on North Needle
    const northCollar = new THREE.Mesh(
      new THREE.ConeGeometry(0.34, 0.9, 4),
      brightGoldMaterial
    );
    northCollar.scale.set(1, 1, 0.48);
    northCollar.rotation.x = -Math.PI / 2;
    northCollar.position.z = -0.55;
    needleGroup.add(northCollar);

    // South Arcane Tail (Points to +Z in 3D space)
    const southBladeGeo = new THREE.ConeGeometry(0.24, 2.1, 4);
    southBladeGeo.scale(1, 1, 0.35);
    const southBlade = new THREE.Mesh(southBladeGeo, southCrystalMat);
    southBlade.rotation.x = Math.PI / 2;
    southBlade.position.z = 1.05;
    needleGroup.add(southBlade);

    // Central Ornate Hub & Levitating Mana Crystal
    const centerHub = new THREE.Mesh(
      new THREE.CylinderGeometry(0.46, 0.54, 0.22, 32),
      brightGoldMaterial
    );
    needleGroup.add(centerHub);

    const centerRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.58, 0.05, 16, 48),
      brightGoldMaterial
    );
    centerRing.rotation.x = Math.PI / 2;
    needleGroup.add(centerRing);

    const floatingCrystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.32, 0),
      coreCrystalMat
    );
    floatingCrystal.position.y = 0.42;
    needleGroup.add(floatingCrystal);

    // 4.5 Floating Ancient Mana / Firefly Particles around the Compass
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleSpeeds = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.6 + Math.random() * 3.4;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.random() * 2.4;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      particleSpeeds.push({
        angle,
        radius,
        speedY: 0.004 + Math.random() * 0.01,
        speedRot: (Math.random() - 0.5) * 0.012
      });
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xfde68a,
      size: 0.09,
      transparent: true,
      opacity: 0.85
    });
    const manaParticles = new THREE.Points(particleGeo, particleMat);
    artifactRoot.add(manaParticles);

    // =========================================================================
    // 5. STATE MANAGEMENT, INTERACTION & SENSOR LOGIC
    // =========================================================================
    let currentHeading = 0;     // Smoothed displayed heading (0 - 360)
    let targetHeading = 0;      // Target heading from user/sensor
    let tiltX = 0;              // 3D artifact X tilt
    let tiltZ = 0;              // 3D artifact Z tilt
    let targetTiltX = 0;
    let targetTiltZ = 0;

    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let autoSpinActive = false;
    let sensorActive = false;
    let awakeningEnergy = 0;    // 0 to 1 burst animation state

    // Treasure Hunt Quest State
    let questActive = false;
    let questPending = false;
    let questTargetIndex = 2;   // Starts with East (90°)
    const unlockedRelics = new Set();

    // DOM Elements
    const elHeadingDeg = document.getElementById('heading-deg');
    const elHeadingDirEn = document.getElementById('heading-dir-en');
    const elHeadingDirKo = document.getElementById('heading-dir-ko');
    const elGuardianIcon = document.getElementById('guardian-icon');
    const elGuardianName = document.getElementById('guardian-name');
    const elResonanceBar = document.getElementById('resonance-bar');
    const elResonanceStatus = document.getElementById('resonance-status');
    const elLoreBadge = document.getElementById('lore-badge');
    const elLoreTitle = document.getElementById('lore-title');
    const elLoreDesc = document.getElementById('lore-desc');
    const elHeadingSlider = document.getElementById('heading-slider');
    const elSensorBadge = document.getElementById('sensor-badge');
    const elToastBanner = document.getElementById('toast-banner');
    const elToastText = document.getElementById('toast-text');
    const elToastIcon = document.getElementById('toast-icon');

    let toastTimer = null;
    function showToast(text, icon = '✨') {
      elToastText.textContent = text;
      elToastIcon.textContent = icon;
      elToastBanner.classList.remove('opacity-0', '-translate-y-3');
      elToastBanner.classList.add('opacity-100', 'translate-y-0');
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        elToastBanner.classList.add('opacity-0', '-translate-y-3');
        elToastBanner.classList.remove('opacity-100', 'translate-y-0');
      }, 2800);
    }

    function normalizeAngle(deg) {
      return ((deg % 360) + 360) % 360;
    }

    function shortestAngleDiff(from, to) {
      return ((to - from + 540) % 360) - 180;
    }

    function getClosestLoreIndex(deg) {
      const norm = normalizeAngle(deg);
      return Math.round(norm / 45) % 8;
    }

    let lastLoreIdx = -1;
    function updateHUD(deg) {
      const rounded = Math.round(normalizeAngle(deg)) % 360;
      elHeadingDeg.textContent = `${rounded}°`;
      elHeadingSlider.value = String(rounded);

      const idx = getClosestLoreIndex(rounded);
      const info = DIRECTION_LORE[idx];

      elHeadingDirEn.textContent = info.code;
      elHeadingDirKo.textContent = info.ko;

      // Update Cardinal Button Active Highlight
      document.querySelectorAll('.dir-jump-btn').forEach((btn) => {
        const btnDeg = Number(btn.getAttribute('data-heading'));
        const diff = Math.abs(shortestAngleDiff(rounded, btnDeg));
        if (diff <= 12) {
          btn.classList.add('relic-btn-active');
        } else {
          btn.classList.remove('relic-btn-active');
        }
      });

      // Update Guardian & Lore when sector changes
      if (idx !== lastLoreIdx) {
        lastLoreIdx = idx;
        elGuardianIcon.textContent = info.icon;
        elGuardianName.textContent = info.guardian;
        elLoreBadge.textContent = `🏛️ 고대 유물 도감 · ${info.deg}° ${info.code}`;
        elLoreTitle.textContent = info.title;
        elLoreDesc.textContent = info.desc;
      }

      // Calculate Resonance (either to North or to active Quest Target)
      const targetRef = questActive ? DIRECTION_LORE[questTargetIndex].deg : 0;
      const dist = Math.abs(shortestAngleDiff(rounded, targetRef));
      const alignmentPct = Math.max(8, Math.round((1 - dist / 180) * 100));
      elResonanceBar.style.width = `${alignmentPct}%`;

      if (questActive) {
        const targetInfo = DIRECTION_LORE[questTargetIndex];
        if (dist <= 10) {
          elResonanceStatus.textContent = `🔥 목표 유물(${targetInfo.code}) 포착 완료! 봉인을 해제하세요!`;
        } else {
          elResonanceStatus.textContent = `보물 신호 공명도 ${alignmentPct}% (목표: ${targetInfo.deg}° ${targetInfo.code})`;
        }
      } else {
        if (dist <= 5) {
          elResonanceStatus.textContent = '🌟 북쪽 정렬 · 게임 효과';
        } else {
          elResonanceStatus.textContent = `북쪽 정렬 ${alignmentPct}% · 게임 효과`;
        }
      }
    }

    // =========================================================================
    // 6. POINTER DRAG, WHEEL, SLIDER & BUTTON CONTROLS
    // =========================================================================
    container.addEventListener('pointerdown', (e) => {
      soundEngine.init();
      stopSensor();
      isDragging = true;
      autoSpinActive = false;
      updateAutoSpinBtn();
      dragStartX = e.clientX;
      dragStartY = e.clientY;
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) {
        // Subtle parallax tilt on mouse move
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        if (!sensorActive) {
          targetTiltZ = -nx * 0.16;
          targetTiltX = ny * 0.16;
        }
        return;
      }
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      dragStartX = e.clientX;
      dragStartY = e.clientY;

      targetHeading = normalizeAngle(targetHeading + dx * 0.55);
      targetTiltX = Math.max(-0.38, Math.min(0.38, targetTiltX + dy * 0.003));
    });

    window.addEventListener('pointercancel', () => { isDragging = false; });
    window.addEventListener('pointerup', () => {
      isDragging = false;
    });

    container.addEventListener('wheel', (e) => {
      stopSensor();
      e.preventDefault();
      soundEngine.init();
      autoSpinActive = false;
      updateAutoSpinBtn();
      targetHeading = normalizeAngle(targetHeading + (e.deltaY > 0 ? 5 : -5));
    }, { passive: false });

    // Slider Input
    elHeadingSlider.addEventListener('input', (e) => {
      stopSensor();
      soundEngine.init();
      autoSpinActive = false;
      updateAutoSpinBtn();
      targetHeading = Number(e.target.value);
    });

    // 8 Cardinal Direction Shortcut Buttons
    document.querySelectorAll('.dir-jump-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        soundEngine.init();
        autoSpinActive = false;
        updateAutoSpinBtn();
        stopSensor();
        const deg = Number(btn.getAttribute('data-heading'));
        targetHeading = deg;
        soundEngine.playTick(true);
      });
    });

    // Auto-Explore Spin Button
    const btnAutoSpin = document.getElementById('btn-auto-spin');
    const elAutoSpinText = document.getElementById('auto-spin-text');
    function updateAutoSpinBtn() {
      if (autoSpinActive) {
        btnAutoSpin.classList.add('relic-btn-active');
        elAutoSpinText.textContent = '탐험 중지';
      } else {
        btnAutoSpin.classList.remove('relic-btn-active');
        elAutoSpinText.textContent = '자동 탐험';
      }
    }
    btnAutoSpin.addEventListener('click', () => {
      stopSensor();
      soundEngine.init();
      autoSpinActive = !autoSpinActive;
      updateAutoSpinBtn();
      if (autoSpinActive) {
        showToast('자동 방위 탐험 모드가 시작되었습니다!', '🔄');
      }
    });

    // Sound Toggle Button
    const btnSound = document.getElementById('btn-sound');
    const elSoundIcon = document.getElementById('sound-icon');
    const elSoundLabel = document.getElementById('sound-label');
    btnSound.addEventListener('click', () => {
      soundEngine.enabled = !soundEngine.enabled;
      if (soundEngine.enabled) {
        soundEngine.init();
        soundEngine.playTick(true);
        elSoundIcon.textContent = '🔊';
        elSoundLabel.textContent = '효과음 켜짐';
        showToast('고대 유물 음향 효과가 켜졌습니다.', '🔊');
      } else {
        elSoundIcon.textContent = '🔇';
        elSoundLabel.textContent = '음소거';
        showToast('효과음이 음소거되었습니다.', '🔇');
      }
    });

    // Relic Awakening Special Effect Button
    function triggerRelicAwakening(customMessage) {
      soundEngine.init();
      soundEngine.playAwakeningChord();
      awakeningEnergy = 1.0;
      showToast(customMessage || '✨ 고대 아스트라 나침반의 마법 룬이 각성했습니다!', '✨');
    }

    document.getElementById('btn-awakening').addEventListener('click', () => {
      triggerRelicAwakening();
    });

    // Theme Switcher Buttons
    document.querySelectorAll('.theme-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        soundEngine.init();
        const themeKey = btn.getAttribute('data-theme');
        const theme = THEMES[themeKey];
        if (!theme) return;

        document.querySelectorAll('.theme-btn').forEach((b) => b.classList.remove('relic-btn-active'));
        btn.classList.add('relic-btn-active');

        // Update 3D Materials & Dial Texture
        dialMesh.material[1].map.dispose();
        dialMesh.material[1].map = createCompassDialTexture(themeKey);
        dialMesh.material[1].needsUpdate = true;

        brightGoldMaterial.color.setHex(theme.primaryHex);
        bronzeMaterial.color.setHex(theme.metalHex);
        northCrystalMat.color.setHex(theme.crystalNorthHex);
        northCrystalMat.emissive.setHex(theme.crystalNorthHex);
        southCrystalMat.color.setHex(theme.crystalSouthHex);
        southCrystalMat.emissive.setHex(theme.crystalSouthHex);
        coreCrystalMat.color.setHex(theme.coreHex);
        coreCrystalMat.emissive.setHex(theme.primaryHex);
        particleMat.color.setHex(theme.coreHex);
        mainGoldLight.color.setHex(theme.primaryHex);

        document.getElementById('bg-aura').style.background = theme.auraCss;
        triggerRelicAwakening(`🏛️ [${theme.name}] 테마가 적용되었습니다!`);
      });
    });

    // =========================================================================
    // 7. TREASURE HUNT MINI-GAME FOR KIDS
    // =========================================================================
    const btnQuestMode = document.getElementById('btn-quest-mode');
    const elQuestBox = document.getElementById('quest-box');
    const elQuestBtnText = document.getElementById('quest-btn-text');
    const elQuestInstruction = document.getElementById('quest-instruction');
    const elQuestScore = document.getElementById('quest-score');
    const btnUnlockRelic = document.getElementById('btn-unlock-relic');

    function pickNextQuestTarget() {
      const remaining = [];
      for (let i = 0; i < 8; i++) {
        if (!unlockedRelics.has(i)) remaining.push(i);
      }
      if (remaining.length === 0) {
        unlockedRelics.clear();
        questTargetIndex = Math.floor(Math.random() * 8);
      } else {
        questTargetIndex = remaining[Math.floor(Math.random() * remaining.length)];
      }
      const target = DIRECTION_LORE[questTargetIndex];
      elQuestInstruction.innerHTML = `나침반을 돌려 <strong class="text-amber-300">${target.ko} (${target.deg}° ${target.code})</strong> 방향의 <strong class="text-cyan-200">${target.guardian}</strong> 유적을 찾으세요!`;
      elQuestScore.textContent = `발견: ${unlockedRelics.size} / 8`;
      updateHUD(currentHeading);
    }

    btnQuestMode.addEventListener('click', () => {
      soundEngine.init();
      questActive = !questActive;
      if (questActive) {
        elQuestBox.classList.remove('hidden');
        btnQuestMode.classList.add('relic-btn-active');
        elQuestBtnText.textContent = '미션 진행중';
        pickNextQuestTarget();
        showToast('🗺️ 보물 탐색 미션이 시작되었습니다! 목표 방위를 맞춰보세요!', '🗺️');
      } else {
        elQuestBox.classList.add('hidden');
        btnQuestMode.classList.remove('relic-btn-active');
        elQuestBtnText.textContent = '보물 미션 시작';
        updateHUD(currentHeading);
      }
    });

    btnUnlockRelic.addEventListener('click', () => {
      if (!questActive || questPending) return;
      soundEngine.init();
      const target = DIRECTION_LORE[questTargetIndex];
      const diff = Math.abs(shortestAngleDiff(currentHeading, target.deg));
      if (diff <= 10) {
        questPending = true;
        btnUnlockRelic.disabled = true;
        unlockedRelics.add(questTargetIndex);
        elQuestScore.textContent = `발견: ${unlockedRelics.size} / 8`;
        if (unlockedRelics.size === 8) {
          triggerRelicAwakening('👑 축하합니다! 8방위의 모든 고대 수호 유물을 발견했습니다!');
        } else {
          triggerRelicAwakening(`🎉 [${target.guardian}] 봉인 해제 성공! (${unlockedRelics.size}/8 발견)`);
        }
        setTimeout(() => {
          questPending = false;
          btnUnlockRelic.disabled = false;
          if (questActive) pickNextQuestTarget();
        }, 1200);
      } else {
        soundEngine.playTick(false);
        showToast(`아직 목표 방위(${target.deg}° ${target.code})와 ${Math.round(diff)}° 떨어져 있어요! 조금 더 돌려보세요!`, '🧭');
      }
    });

    // =========================================================================
    // 8. FULLSCREEN & CLEAN HUD TOGGLE
    // =========================================================================
    const btnFullscreen = document.getElementById('btn-fullscreen');
    const elFsLabel = document.getElementById('fs-label');
    const btnToggleHud = document.getElementById('btn-toggle-hud');
    const elHudToggleLabel = document.getElementById('hud-toggle-label');
    let hudVisible = true;

    function toggleHudVisibility(forceState) {
      hudVisible = typeof forceState === 'boolean' ? forceState : !hudVisible;
      const hudIds = ['hud-top', 'hud-bottom', 'hud-side'];
      hudIds.forEach((id) => {
        const el = document.getElementById(id);
        el.inert = !hudVisible;
        if (hudVisible) {
          el.classList.remove('hud-hidden');
        } else {
          el.classList.add('hud-hidden');
        }
      });
      elHudToggleLabel.textContent = hudVisible ? '유물만 보기' : '메뉴 펼치기';
      btnToggleHud.classList.toggle('relic-btn-active', !hudVisible);
      document.getElementById('heading-marker').hidden = !hudVisible;
      handleResize();
    }

    btnToggleHud.addEventListener('click', () => {
      soundEngine.init();
      toggleHudVisibility();
      if (!hudVisible) {
        showToast('전체 3D 유물 감상 모드입니다. 우측 상단 버튼으로 메뉴를 다시 열 수 있어요!', '👁️');
      }
    });

    btnFullscreen.addEventListener('click', async () => {
      soundEngine.init();
      try {
        if (!document.fullscreenElement) {
          if (document.documentElement.requestFullscreen) {
            await document.documentElement.requestFullscreen();
            elFsLabel.textContent = '전체화면 종료';
            showToast('전체화면 모드로 전환되었습니다!', '⛶');
          } else {
            toggleHudVisibility(false);
            showToast('화면을 가득 채운 몰입형 유물 뷰로 전환되었습니다!', '⛶');
          }
        } else {
          if (document.exitFullscreen) {
            await document.exitFullscreen();
            elFsLabel.textContent = '전체화면';
          }
        }
      } catch (err) {
        // Fallback inside restricted iframe containers: maximize 3D view cleanly
        toggleHudVisibility(!hudVisible);
        elFsLabel.textContent = hudVisible ? '전체화면' : '기본화면';
        showToast(hudVisible ? '기본 화면 모드로 돌아왔습니다.' : '몰입형 전체화면 뷰로 전환되었습니다!', '⛶');
      }
    });

    document.addEventListener('fullscreenchange', () => {
      elFsLabel.textContent = document.fullscreenElement ? '전체화면 종료' : '전체화면';
    });

    // 9. Hardware: orientation only controls heading; location is display-only.
    const elGpsBadge = document.getElementById('gps-badge');
    const elGpsCoordReadout = document.getElementById('gps-coord-readout');
    const elPermissionModal = document.getElementById('permission-modal');
    const elModalSensorStatus = document.getElementById('modal-sensor-status');
    const elModalSensorDetail = document.getElementById('modal-sensor-detail');
    const elModalFeedbackMsg = document.getElementById('modal-feedback-msg');
    const elRawErrorReadout = document.getElementById('raw-error-readout');
    let sensorRequested = false;
    let sensorGeneration = 0;
    let sensorTimer = null;
    let lastSensorAt = 0;
    let hardwareEventsReceived = 0;
    let gpsWatchId = null;
    let gpsGeneration = 0;
    let lastFixAt = 0;
    let modalOpener = null;
    let closeOnSensor = false;
    const secure = window.isSecureContext;
    document.getElementById('env-detect-badge').textContent = secure ? '센서 지원 기기에서 사용할 수 있어요' : '실제 센서는 HTTPS 웹주소에서 연결하세요';
    document.getElementById('raw-protocol-readout').textContent = `연결: ${location.protocol} · 보안 환경: ${secure ? '예' : '아니요'}`;

    function closePermissionModal() {
      elPermissionModal.classList.add('hidden');
      (modalOpener || document.getElementById('btn-sensor')).focus();
    }
    function openPermissionModal() {
      closeOnSensor = false;
      modalOpener = document.activeElement;
      elPermissionModal.classList.remove('hidden');
      document.getElementById('btn-grant-all').focus();
    }
    function stopSensor(message = '🎮 수동 탐험 · 센서 꺼짐') {
      sensorRequested = false;
      sensorGeneration++;
      clearTimeout(sensorTimer);
      window.removeEventListener('deviceorientationabsolute', handleOrientation, true);
      window.removeEventListener('deviceorientation', handleOrientation, true);
      sensorActive = false;
      lastSensorAt = 0;
      elSensorBadge.textContent = message;
      elModalSensorStatus.textContent = '꺼짐';
    }
    function handleOrientation(event) {
      if (!sensorRequested) return;
      const angle = screen.orientation?.angle ?? window.orientation ?? 0;
      const deg = CompassMath.headingFromEvent(event, angle);
      if (deg === null) return; // Ignore relative rotations, nulls and near-vertical projections.
      lastSensorAt = Date.now();
      hardwareEventsReceived++;
      sensorActive = true;
      if (!isDragging) targetHeading = deg;
      autoSpinActive = false;
      const beta = Number.isFinite(event.beta) ? event.beta : 0;
      const gamma = Number.isFinite(event.gamma) ? event.gamma : 0;
      targetTiltX = Math.max(-0.25, Math.min(0.25, beta * 0.004));
      targetTiltZ = Math.max(-0.25, Math.min(0.25, -gamma * 0.004));
      if (hardwareEventsReceived === 1 || hardwareEventsReceived % 10 === 0) {
        elSensorBadge.textContent = `🧭 센서 방위 ${Math.round(deg) % 360}° · 진북 보정 없음`;
        elModalSensorStatus.textContent = '수신 중';
        elModalSensorDetail.textContent = '기기를 수평에 가깝게 유지하세요. 브라우저 제공 방위를 사용합니다.';
        document.getElementById('raw-packet-count').textContent = `수신: ${hardwareEventsReceived}회`;
        document.getElementById('raw-sensor-readout').textContent = `${typeof event.webkitCompassHeading === 'number' ? 'iOS 나침반' : '절대방위'} · ${deg.toFixed(1)}° · 화면 ${angle}°`;
      }
      if (closeOnSensor) { closeOnSensor = false; closePermissionModal(); }
    }
    function sensorFailure(message) {
      stopSensor('⚠️ 센서 연결 안 됨 · 수동 탐험');
      elModalSensorStatus.textContent = '연결 안 됨';
      elModalSensorDetail.textContent = message;
      elModalFeedbackMsg.textContent = message;
      elRawErrorReadout.textContent = message;
      elRawErrorReadout.classList.remove('hidden');
      showToast(message, '⚠️');
    }
    function startSensor() {
      stopSensor('🧭 센서 연결 중…');
      if (!secure) { sensorFailure('HTTPS 주소로 접속한 뒤 다시 시도해주세요.'); return; }
      if (typeof DeviceOrientationEvent === 'undefined') { sensorFailure('방위 센서를 지원하지 않는 환경입니다. 수동 탐험을 이용해주세요.'); return; }
      sensorRequested = true;
      closeOnSensor = true;
      autoSpinActive = false;
      updateAutoSpinBtn();
      const generation = sensorGeneration;
      elModalSensorStatus.textContent = '연결 중';
      elModalFeedbackMsg.textContent = '권한 요청이 표시되면 허용해주세요. 안드로이드는 별도 팝업이 없을 수 있어요.';
      elRawErrorReadout.classList.add('hidden');
      const attach = () => {
        if (!sensorRequested || generation !== sensorGeneration) return;
        window.addEventListener('deviceorientationabsolute', handleOrientation, true);
        window.addEventListener('deviceorientation', handleOrientation, true);
        sensorTimer = setTimeout(() => {
          if (sensorRequested && generation === sensorGeneration && !lastSensorAt) {
            sensorFailure('북쪽 기준 센서 신호가 없습니다. 동작 센서 설정을 확인하거나 수동 탐험을 선택하세요.');
          }
        }, 10000);
      };
      // Call within the original click; never attach iOS listeners before permission resolves.
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        try {
          DeviceOrientationEvent.requestPermission(true).then(state => {
            if (generation !== sensorGeneration) return;
            if (state === 'granted') attach();
            else sensorFailure('센서 권한이 허용되지 않았습니다. 브라우저 설정에서 변경할 수 있어요.');
          }).catch(error => { if (generation === sensorGeneration) sensorFailure(`센서 권한 오류: ${error.message}`); });
        } catch (error) { sensorFailure(`센서 요청 오류: ${error.message}`); }
      } else attach();
    }
    function stopGps() {
      gpsGeneration++;
      if (gpsWatchId !== null) navigator.geolocation.clearWatch(gpsWatchId);
      gpsWatchId = null;
      lastFixAt = 0;
      elGpsBadge.textContent = '📍 위치 꺼짐';
      elGpsCoordReadout.textContent = '위치는 선택 사항 · 방향은 기기 센서 기준입니다';
      document.getElementById('modal-gps-status').textContent = '꺼짐';
      document.getElementById('raw-gps-readout').textContent = '아직 수신된 위치 없음';
      document.getElementById('modal-gps-detail').textContent = '좌표를 화면에 표시합니다. 나침반 방향에는 영향을 주지 않습니다.';
    }
    function startGps() {
      stopGps();
      if (!secure || !navigator.geolocation) {
        document.getElementById('modal-gps-status').textContent = '이 환경에서 지원하지 않음'; return;
      }
      const generation = gpsGeneration;
      document.getElementById('modal-gps-status').textContent = '요청 중';
      try {
        gpsWatchId = navigator.geolocation.watchPosition(pos => {
          if (generation !== gpsGeneration) return;
          const { latitude, longitude, accuracy } = pos.coords;
          if (![latitude, longitude, accuracy].every(Number.isFinite)) return;
          lastFixAt = Date.now();
          elGpsBadge.textContent = `📍 위치 수신 ±${Math.round(accuracy)}m`;
          elGpsCoordReadout.textContent = `위도 ${latitude.toFixed(5)}° · 경도 ${longitude.toFixed(5)}° · ±${Math.round(accuracy)}m`;
          document.getElementById('modal-gps-status').textContent = '수신 중';
          document.getElementById('modal-gps-detail').textContent = '위치 좌표만 표시합니다. 이동 방향을 나침반 방향으로 쓰지 않습니다.';
          document.getElementById('raw-gps-readout').textContent = elGpsCoordReadout.textContent;
        }, error => {
          if (generation !== gpsGeneration) return;
          stopGps();
          const message = error.code === 1 ? '위치 권한이 거부되었습니다. 브라우저 설정을 확인해주세요.' : '위치를 받지 못했습니다. 야외에서 다시 시도해주세요.';
          document.getElementById('modal-gps-status').textContent = '연결 안 됨';
          document.getElementById('modal-gps-detail').textContent = message;
          elGpsBadge.textContent = '⚠️ 위치 연결 안 됨';
        }, {enableHighAccuracy:true, maximumAge:1000, timeout:20000});
      } catch (error) {
        stopGps();
        document.getElementById('modal-gps-status').textContent = '위치 요청 차단됨';
      }
    }
    document.getElementById('btn-req-sensor').addEventListener('click', startSensor);
    document.getElementById('btn-stop-sensor').addEventListener('click', () => stopSensor());
    document.getElementById('btn-req-gps').addEventListener('click', startGps);
    document.getElementById('btn-stop-gps').addEventListener('click', stopGps);
    document.getElementById('btn-grant-all').addEventListener('click', startSensor);
    document.getElementById('btn-skip-permission').addEventListener('click', () => {
      stopSensor(); stopGps(); closePermissionModal();
      showToast('수동 탐험 · 드래그와 방위 버튼으로 움직여보세요', '🎮');
    });
    document.getElementById('btn-sensor').addEventListener('click', openPermissionModal);
    elPermissionModal.addEventListener('keydown', event => {
      if (event.key === 'Escape') { stopSensor(); closePermissionModal(); }
      if (event.key === 'Tab') {
        const nodes = [...elPermissionModal.querySelectorAll('button, a, summary')].filter(el => el.getClientRects().length);
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    setTimeout(() => document.getElementById('btn-grant-all').focus(), 0);
    setInterval(() => {
      if (sensorRequested && lastSensorAt && Date.now() - lastSensorAt > 5000) {
        sensorActive = false;
        elSensorBadge.textContent = '⚠️ 센서 신호 대기 · 마지막 방위';
        elModalSensorStatus.textContent = '신호 대기';
      }
      if (gpsWatchId !== null && lastFixAt && Date.now() - lastFixAt > 30000) {
        elGpsBadge.textContent = '⚠️ 위치 갱신 대기 · 마지막 좌표';
      }
    }, 2000);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { stopSensor('🧭 일시 정지 · 다시 연결하세요'); stopGps(); }
    });
    window.addEventListener('pagehide', () => { stopSensor(); stopGps(); });

    // =========================================================================
    // 10. MAIN RENDER & ANIMATION LOOP
    // =========================================================================
    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      if (document.hidden) { clock.getDelta(); return; }
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.elapsedTime;

      if (autoSpinActive && !isDragging) {
        targetHeading = normalizeAngle(targetHeading + 21 * delta);
      }

      // Smooth Shortest-Path Angular Interpolation for Compass Heading
      const angleDiff = shortestAngleDiff(currentHeading, targetHeading);
      currentHeading = normalizeAngle(currentHeading + angleDiff * (1 - Math.exp(-7.67 * delta)));

      // Play Mechanical Ancient Tick Sound every 5 degrees or Cardinal
      const currentStep = Math.floor(currentHeading / 5);
      if (currentStep !== soundEngine.lastTickStep && Math.abs(angleDiff) > 0.35) {
        soundEngine.lastTickStep = currentStep;
        const isCardinal = (currentStep * 5) % 45 === 0;
        soundEngine.playTick(isCardinal);
      }

      updateHUD(currentHeading);

      // Rotate the Ancient Dial Plate and Needle according to Heading
      const headingRad = currentHeading * (Math.PI / 180);
      rotatingDialGroup.rotation.y = headingRad;

      // Subtle counter-rotation and mystical oscillation on the astrolabe ring
      astrolabeRingGroup.rotation.y = -headingRad * 0.5 + elapsed * 0.15;
      astrolabeRingGroup.rotation.x = Math.sin(elapsed * 0.9) * 0.06;
      astrolabeRingGroup.rotation.z = Math.cos(elapsed * 0.7) * 0.06;

      // Needle points smoothly toward Magnetic North with realistic damping wobble
      needleGroup.rotation.y = headingRad;

      // Awakening Burst Animation
      if (awakeningEnergy > 0.005) {
        awakeningEnergy *= 0.95;
        floatingCrystal.position.y = 0.42 + awakeningEnergy * 0.65;
        floatingCrystal.rotation.y += 0.22;
        astrolabeRingGroup.rotation.y += awakeningEnergy * 0.25;
        coreGlowLight.intensity = 1.6 + awakeningEnergy * 4.5;
      } else {
        floatingCrystal.position.y = 0.42 + Math.sin(elapsed * 2.6) * 0.07;
        floatingCrystal.rotation.y = elapsed * 1.4;
        coreGlowLight.intensity = 1.6 + Math.sin(elapsed * 3.0) * 0.3;
      }

      // Rotate Outer Bezel Gems
      nodeGems.forEach((gem, idx) => {
        gem.rotation.y = elapsed * 1.5 + idx;
      });

      // Smooth 3D Artifact Tilt
      tiltX += (targetTiltX - tiltX) * 0.08;
      tiltZ += (targetTiltZ - tiltZ) * 0.08;
      artifactRoot.rotation.x = tiltX;
      artifactRoot.rotation.z = tiltZ;

      // Animate Floating Mana Particles
      const posAttr = particleGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        const p = particleSpeeds[i];
        p.angle += p.speedRot + awakeningEnergy * 0.04;
        let py = posAttr.getY(i) + p.speedY + awakeningEnergy * 0.05;
        if (py > 2.5) py = 0.05;
        posAttr.setXYZ(
          i,
          Math.cos(p.angle) * p.radius,
          py,
          Math.sin(p.angle) * p.radius
        );
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    }

    // Responsive Resize Handling
    function handleResize() {
      const top = document.getElementById('hud-top').getBoundingClientRect().bottom;
      const bottom = document.getElementById('hud-bottom').getBoundingClientRect().height;
      const side = document.getElementById('hud-side').getBoundingClientRect().height;
      const mobile = window.innerWidth < 1024;
      document.documentElement.style.setProperty('--side-bottom', `${bottom + 6}px`);
      const insetTop = hudVisible ? top + 4 : 0;
      const available = Math.max(120, window.innerHeight - insetTop - (hudVisible ? bottom + (mobile ? side + 10 : 0) : 0));
      container.style.top = `${insetTop}px`;
      container.style.height = `${available}px`;
      document.documentElement.style.setProperty('--marker-top', `${insetTop + 3}px`);
      const w = container.clientWidth;
      const h = available;
      camera.aspect = w / h;
      // Adjust camera distance automatically so the 3D compass fits portrait mobile & landscape desktop
      const aspectFactor = w < h ? Math.min(1.45, (h / w) * 0.72) : 1.0;
      camera.position.set(0, 7.0 * aspectFactor, 5.4 * aspectFactor);
      camera.lookAt(0, -0.15, 0);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    window.addEventListener('resize', handleResize);
    new ResizeObserver(handleResize).observe(document.getElementById('hud-bottom'));
    new ResizeObserver(handleResize).observe(document.getElementById('hud-side'));
    new ResizeObserver(handleResize).observe(document.getElementById('hud-top'));
    window.onload = () => {
      handleResize();
      updateHUD(0);
      animate();
    };
  
} catch (error) {
 document.getElementById('permission-modal').innerHTML = '<div class="relic-panel p-5 rounded-2xl"><h2>나침반을 시작하지 못했어요</h2><p>브라우저를 업데이트하고 다시 시도해주세요. WebGL 그래픽 지원이 필요합니다.</p><a href="./about.html">앱 소개와 사용법</a></div>';
 console.error(error);
}
