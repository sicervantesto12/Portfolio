(function(){
 const categories = ["All","Illustration","Logo","Poster","Ads","Character Design","Asset","Animation","Stickers","Emotes"];

  const rawItems = [
    [1,"Cute Rabbit","Emotes","https://sicervantesto12.github.io/IMAGESforportfolio/1.png",400],
    [2,"Cute Kaiju","Stickers","https://sicervantesto12.github.io/IMAGESforportfolio/2.png",400],
    [3,"Seething Kaiju","Stickers","https://sicervantesto12.github.io/IMAGESforportfolio/3.png",400],
    [4,"Angery Rabbit","Emotes","https://sicervantesto12.github.io/IMAGESforportfolio/4.png",400],
    [5,"Saber","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/5.png",400],
    [6,"Mermaid","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/6.png",400],
    [7,"Oh my Maomao","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/7.png",400],
    [8,"solemn Butterfly","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/8.png",400],
    [9,"Ywuria's MV","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/9.png",400],
    [10,"Ywuria's MV part 2","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/10.png",400],
    [11,"Ywuria's MV part 2","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/11.png",400],
    [12,"Ywuria's MV part 2","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/12.png",400],
    [13,"Ywuria's MV part 2","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/13.png",400],
    [14,"Ywuria's MV part 2","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/14.png",400],
    [15,"Ywuria's MV part 2","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/15.png",400],
    [16,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/16.png",400],
    [17,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/17.png",400],
    [18,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/18.png",400],
    [19,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/19.png",400],
    [20,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/20.png",400],
    [21,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/21.png",400],
    [22,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/22.png",400],
    [23,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/23.png",400],
    [24,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/24.png",400],
    [25,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/25.png",400],
    [26,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/26.png",400],
    [27,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/27.png",400],
    [28,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/28.png",400],
    [29,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/29.png",400],
    [30,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/30.png",400],
    [31,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/31.png",400],
    [32,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/32.png",400],
    [33,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/33.png",400],
    [34,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/34.png",400],
    [35,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/35.png",400],
    [36,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/36.png",400],
    [37,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/37.png",400],
    [38,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/38.png",400],
    [39,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/39.png",400],
    [40,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/40.png",400],
    [41,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/41.png",400],
    [42,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/42.png",400],
    [43,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/43.png",400],
    [44,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/44.png",400],
    [45,"Your title here","Illustration","https://sicervantesto12.github.io/IMAGESforportfolio/45.png",400],
  ];
 
  const items = rawItems.map(([id,title,cat,src,h])=>({
    id, title, cat,
    src,
    h
  }));

  const grid = document.getElementById('grid');
  const pillsNav = document.getElementById('pills');
  const aboutToggle = document.getElementById('aboutToggle');
  const aboutOverlay = document.getElementById('aboutOverlay');
  const aboutClose = document.getElementById('aboutClose');
  const emptyState = document.getElementById('emptyState');
  const resetBtn = document.getElementById('resetBtn');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxTag = document.getElementById('lightboxTag');
  const lightboxClose = document.getElementById('lightboxClose');

  let activeCat = "All";

  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.className = 'pill' + (cat==="All" ? " active" : "");
    btn.textContent = cat;
    btn.setAttribute('aria-pressed', cat==="All" ? "true":"false");
    btn.addEventListener('click', ()=>{
      activeCat = cat;
      [...pillsNav.children].forEach(c=>{
        c.classList.toggle('active', c===btn);
        c.setAttribute('aria-pressed', c===btn ? "true":"false");
      });
      render();
    });
    pillsNav.appendChild(btn);
  });

  function matches(item){
    return activeCat==="All" || item.cat===activeCat;
  }

  function render(){
    let list = items.filter(matches);

    grid.innerHTML = "";

    if(list.length===0){
      emptyState.style.display = "block";
      grid.style.display = "none";
    } else {
      emptyState.style.display = "none";
      grid.style.display = "";
      list.forEach((item, idx)=>{
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = (idx*18)+'ms';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'View ' + item.title);

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        img.loading = 'lazy';
        card.appendChild(img);

        const overlay = document.createElement('div');
        overlay.className = 'card-overlay';

        const bottom = document.createElement('div');
        bottom.className = 'card-bottom';
        bottom.innerHTML = `<p class="card-title">${item.title}</p><span class="card-tag">${item.cat}</span>`;

        overlay.appendChild(bottom);
        card.appendChild(overlay);

        card.addEventListener('click', ()=> openLightbox(item));
        card.addEventListener('keydown', (e)=>{
          if(e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            openLightbox(item);
          }
        });

        grid.appendChild(card);
      });
    }

  }

  function openLightbox(item){
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxTag.textContent = item.cat;
    lightboxOverlay.classList.add('open');
    lightboxClose.focus();
  }
  function closeLightbox(){
    lightboxOverlay.classList.remove('open');
    lightboxImg.src = "";
  }
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', (e)=>{
    if(e.target === lightboxOverlay) closeLightbox();
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && lightboxOverlay.classList.contains('open')) closeLightbox();
  });

  function openAbout(){
    aboutOverlay.classList.add('open');
    aboutToggle.classList.add('active');
    aboutToggle.setAttribute('aria-expanded','true');
    aboutClose.focus();
  }
  function closeAbout(){
    aboutOverlay.classList.remove('open');
    aboutToggle.classList.remove('active');
    aboutToggle.setAttribute('aria-expanded','false');
    aboutToggle.focus();
  }
  aboutToggle.addEventListener('click', openAbout);
  aboutClose.addEventListener('click', closeAbout);
  aboutOverlay.addEventListener('click', (e)=>{
    if(e.target === aboutOverlay) closeAbout();
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && aboutOverlay.classList.contains('open')) closeAbout();
  });

  resetBtn.addEventListener('click', ()=>{
    activeCat = "All";
    [...pillsNav.children].forEach(c=>{
      c.classList.toggle('active', c.textContent==="All");
      c.setAttribute('aria-pressed', c.textContent==="All"?"true":"false");
    });
    render();
  });

  render();
})();
