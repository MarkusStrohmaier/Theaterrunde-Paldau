let currentAlbum = [];
let currentIndex = 0;
let currentAlbumTitle = "";

function renderPage(page) {
    const area = document.getElementById('content-area');
    window.scrollTo(0,0);
    
    switch(page) {
        case 'Home':
            const heroImg = galleryAssets.termine[siteData.termine[0].bildKey];
            area.innerHTML = `
                <section class="relative h-[85vh] flex items-center justify-center bg-stone-200 overflow-hidden">
                    <img src="${heroImg}" class="absolute inset-0 w-full h-full object-cover scale-105 opacity-80 animate-pulse-slow">
                    <div class="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/40 to-transparent"></div>
                    <div class="relative z-10 text-center px-6 max-w-5xl">
                        <span class="bg-brand-red text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest shadow-2xl inline-block mb-8 animate-bounce">${siteData.termine[0].status}</span>
                        <h1 class="serif text-6xl md:text-9xl font-black text-gray-900 mb-6 drop-shadow-md">
                            ${siteData.termine[0].titel}
                        </h1>
                        <p class="text-2xl md:text-4xl font-bold text-red-700 mb-12">
                            <i class="fas fa-calendar-check mr-3 text-brand-amber"></i> ${siteData.termine[0].datum}
                        </p>
                        <button onclick="renderPage('Termine')" class="bg-brand-amber hover:bg-yellow-500 text-gray-900 font-bold px-12 py-5 rounded-full text-2xl shadow-xl transition transform hover:scale-110 active:scale-95">Spielplan & Tickets</button>
                    </div>
                </section>`;
            break;

        case 'Termine':
            let tHtml = siteData.termine.map(t => {
                // Hilfsfunktion um Tag und Monat für das Design zu trennen
                const datumTeile = t.datum.split(', ');
                const tagMonat = datumTeile[1] ? datumTeile[1].split('. ') : ["??", "??"];

                return `
                <div class="bg-white rounded-[2rem] shadow-xl overflow-hidden mb-12 flex flex-col lg:flex-row border-2 border-stone-100 group hover:border-brand-amber transition-all duration-500">
                    
                    <div class="bg-brand-red text-white flex flex-col items-center justify-center p-8 lg:w-48">
                        <span class="text-sm uppercase tracking-widest font-bold opacity-80">${datumTeile[0]}</span>
                        <span class="text-6xl font-black serif my-1">${tagMonat[0]}</span>
                        <span class="text-xl font-bold uppercase">${tagMonat[1] || ""}</span>
                    </div>

                    <div class="p-8 lg:p-12 flex-grow">
                        <div class="flex flex-wrap items-center gap-3 mb-4">
                            <span class="bg-brand-amber/20 text-brand-red text-xs font-black px-3 py-1 rounded-full uppercase">${t.status}</span>
                            <h3 class="serif text-4xl font-black text-gray-900 w-full lg:w-auto">${t.titel}</h3>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                            <div class="flex items-center text-gray-700">
                                <div class="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mr-4 text-brand-red">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-400 font-bold uppercase">Beginn</p>
                                    <p class="font-bold">${t.uhrzeit}</p>
                                </div>
                            </div>
                            <div class="flex items-center text-gray-700">
                                <div class="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mr-4 text-brand-red">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-400 font-bold uppercase">Ort der Handlung</p>
                                    <p class="font-bold">${t.ort}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-stone-50 p-8 lg:w-72 flex flex-col justify-center gap-4 border-t lg:border-t-0 lg:border-l border-stone-100">
                        <a href="mailto:${t.mail}" class="w-full bg-brand-red text-white text-center py-4 rounded-2xl font-black hover:bg-red-700 transition shadow-lg hover:shadow-red-200/50 flex items-center justify-center">
                            <i class="fas fa-ticket-alt mr-2"></i> Tickets reservieren
                        </a>
                        <a href="tel:${t.tel}" class="w-full bg-white text-gray-700 text-center py-4 rounded-2xl font-bold border border-stone-200 hover:border-brand-amber transition flex items-center justify-center">
                            <i class="fas fa-phone mr-2 text-brand-amber"></i> Rückfragen
                        </a>
                    </div>
                </div>`;
            }).join('');

            area.innerHTML = `
                <section class="py-24 container mx-auto px-6 max-w-6xl">
                    <div class="text-center mb-20">
                        <h2 class="serif text-6xl font-black text-gray-900 mb-4">Der <span class="text-brand-red">Spielplan</span></h2>
                        <div class="w-24 h-2 bg-brand-amber mx-auto rounded-full"></div>
                        <p class="text-xl text-gray-500 mt-6 max-w-2xl mx-auto italic font-serif">"Die ganze Welt ist Bühne und alle Frauen und Männer bloße Spieler."</p>
                    </div>
                    ${tHtml}
                </section>`;
            break;

        case 'Galerie':
            let gHtml = siteData.galerie.map(g => `
                <div onclick="openGallery('${g.id}')" class="group relative h-96 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition duration-500 border-4 border-white">
                    <img src="${g.vorschaubild}" class="w-full h-full object-cover group-hover:scale-110 transition duration-1000">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-red/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                        <div class="text-white">
                            <h4 class="serif text-3xl font-bold mb-2">${g.titel}</h4>
                            <p class="text-brand-amber font-black uppercase tracking-widest flex items-center">
                                Album öffnen <i class="fas fa-plus-circle ml-2"></i>
                            </p>
                        </div>
                    </div>
                </div>`).join('');
            area.innerHTML = `<section class="py-24 container mx-auto px-6 max-w-7xl"><h2 class="serif text-5xl text-center mb-16 font-black">Unsere <span class="text-brand-red">Erinnerungen</span></h2><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">${gHtml}</div></section>`;
            break;

        case 'Chronik':
            area.innerHTML = `<section class="py-24 container mx-auto px-6 max-w-4xl">
                <div class="text-center mb-16">
                    <h2 class="serif text-6xl font-black text-gray-900 mb-4">Unsere <span class="text-brand-red">Geschichte</span></h2>
                    <div class="w-24 h-2 bg-brand-amber mx-auto rounded-full"></div>
                </div>
                <div class="bg-white p-12 rounded-[3rem] shadow-xl border-t-8 border-brand-red">
                    <p class="text-2xl text-gray-700 leading-relaxed font-serif italic mb-8">Seit Generationen vereinen wir Theaterfreunde...</p>
                    <p class="text-lg text-gray-600 mb-6">Erfahren Sie hier mehr über die Meilensteine unseres Vereins (hier kann Ihr Text stehen).</p>
                </div>
            </section>`;
            break;

        case 'Kontakt':
            area.innerHTML = `
                <section class="py-24 container mx-auto px-6 max-w-6xl font-sans">
                    <div class="bg-white rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border-b-[12px] border-brand-amber">
                        <div class="bg-brand-red p-16 text-white md:w-1/2 flex flex-col justify-center">
                            <h2 class="serif text-6xl font-black mb-8">Kontakt</h2>
                            <p class="text-red-100 text-xl mb-12">Haben Sie Fragen oder möchten Sie uns buchen? Schreiben Sie uns einfach!</p>
                            <div class="space-y-6 text-xl">
                                <a href="tel:+436641234567" class="flex items-center hover:text-brand-amber transition font-bold"><i class="fas fa-phone-alt mr-6 bg-white/20 p-5 rounded-full"></i> +43 664 123 45 67</a>
                                <a href="mailto:info@theaterrunde.at" class="flex items-center hover:text-brand-amber transition font-bold"><i class="fas fa-envelope mr-6 bg-white/20 p-5 rounded-full"></i> info@theaterrunde.at</a>
                            </div>
                        </div>
                        <div class="p-16 md:w-1/2 bg-stone-50">
                            <h3 class="serif text-4xl font-black mb-10 pb-6 border-b-4 border-brand-amber/30 text-gray-900">Impressum</h3>
                            <div class="space-y-6 text-xl text-gray-600">
                                <div>
                                    <p class="text-xs uppercase font-black text-brand-red tracking-widest mb-2">Verein</p>
                                    <p class="font-bold text-gray-900 text-2xl">Theaterverein Musterspiel</p>
                                    <p>ZVR-Zahl: 123456789</p>
                                </div>
                                <div>
                                    <p class="text-xs uppercase font-black text-brand-red tracking-widest mb-2">Anschrift</p>
                                    <p class="flex items-center"><i class="fas fa-map-marker-alt text-brand-amber mr-3"></i> Theatergasse 1, 8010 Graz</p>
                                </div>
                                <p class="pt-8 text-sm italic text-gray-400 border-t border-stone-200">Offenlegung gem. § 25 Mediengesetz: Diese Website dient zur Information über Aufführungen des Vereins.</p>
                            </div>
                        </div>
                    </div>
                </section>`;
            break;
    }
}

// Hilfsfunktionen (Lightbox) bleiben wie zuvor...
function openGallery(id) {
    const data = siteData.galerie.find(g => g.id === id);
    const albumImgs = galleryAssets.alben[id];
    if (!data || !albumImgs) return;
    currentAlbum = albumImgs;
    currentAlbumTitle = data.titel;
    currentIndex = 0;
    updateLightbox();
    document.getElementById('lightbox-overlay').style.display = 'flex';
    document.body.classList.add('modal-open');
}

function updateLightbox() {
    document.getElementById('lightbox-img').src = currentAlbum[currentIndex];
    document.getElementById('lightbox-caption').innerText = currentAlbumTitle;
    document.getElementById('lightbox-counter').innerText = `${currentIndex + 1} / ${currentAlbum.length}`;
}

function changeImage(step) {
    currentIndex = (currentIndex + step + currentAlbum.length) % currentAlbum.length;
    updateLightbox();
}

function closeLightbox() {
    document.getElementById('lightbox-overlay').style.display = 'none';
    document.body.classList.remove('modal-open');
}

renderPage('Home');
