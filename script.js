(function(){
  const categories = ["All","Illustration","Logo","Poster","Ads","Character Design","Asset","Animation"];

  // ---------------------------------------------------------------
  // ADD YOUR IMAGES HERE.
  // Each row is: [id, "Title", "Category", "Image URL", height]
  //  - id: any unique number
  //  - Title: shown on hover
  //  - Category: must match one of the categories above (or add a new one there too)
  //  - Image URL: a direct link to your image (e.g. your GitHub Pages link,
  //               or a Google Drive link in the format:
  //               https://drive.google.com/uc?export=view&id=YOUR_FILE_ID)
  //  - height: roughly the image's pixel height, used for masonry layout
  //            (a taller image = bigger number, doesn't need to be exact)
  // ---------------------------------------------------------------
  const rawItems = [
    [1,"Fate Strange Night","Illustration","https://drive.google.com/uc?export=view&id=15inU-_wzjpg5dY6yx77i9hW6bbIvQoLM",420],
    [2,"Lansir","Illustration","https://sicervantesto12.github.io/Portfolio/Lansir.png",420],
    // [3,"Your title here","Logo","PASTE_IMAGE_URL_HERE",400],
    // [4,"Your title here","Poster","PASTE_IMAGE_URL_HERE",400],
    // [5,"Your title here","Ads","PASTE_IMAGE_URL_HERE",400],
    // [6,"Your title here","Character Design","PASTE_IMAGE_URL_HERE",400],
    // [7,"Your title here","Asset","PASTE_IMAGE_URL_HERE",400],
    // [8,"Your title here","Animation","PASTE_IMAGE_URL_HERE",400],
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
