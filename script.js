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
                <section class="relative w-full h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-black">
                    <img src="${heroImg}" 
                         class="absolute inset-0 w-full h-full object-cover object-top opacity-50 transition-opacity duration-700"
                         alt="Hero Image">

                    <div class="absolute inset-0 bg-gradient-to-t from-paldau-dark via-transparent to-black/40"></div>

                    <div class="relative container mx-auto px-6 z-10 text-center animate-fadeIn">
                        <div class="inline-block border border-paldau-green text-paldau-green px-4 py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 md:mb-8 bg-black/40 backdrop-blur-sm">
                            ${siteData.termine[0].status} am 23.01.2026
                        </div>

                        <h1 class="serif text-4xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 leading-tight uppercase drop-shadow-2xl">
                            Im Knast ist <br><span class="text-paldau-green neon-text">(k)ein Zimmer frei</span>
                        </h1>

                        <p class="text-lg md:text-2xl font-light text-gray-200 mb-8 md:mb-12 italic drop-shadow-md">
                            Lachgarantie in 2 Akten von Jonas Jetten
                        </p>

                        <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <button onclick="renderPage('Termine')" 
                                    class="w-full md:w-auto bg-paldau-green hover:bg-white hover:text-paldau-green text-white font-bold px-8 py-3 md:px-10 md:py-4 rounded-full text-lg transition-all shadow-[0_0_20px_rgba(22,163,74,0.4)] transform hover:scale-105 active:scale-95">
                                <i class="fas fa-calendar-alt mr-2"></i> Termine & Karten
                            </button>
                        </div>
                    </div>
                </section>`;
            break;

        case 'Termine':
            // Der Inhaltstext aus image_e0b4cb.png
            const synopsisHtml = `
                <div class="bg-paldau-card rounded-[2.5rem] shadow-2xl overflow-hidden mb-16 border border-gray-800 flex flex-col md:flex-row">
                    <div class="p-8 md:p-12 md:w-2/3">
                        <span class="text-paldau-green font-black uppercase tracking-widest text-xs">Zum Stück</span>
                        <h3 class="serif text-4xl font-black mt-2 mb-6 text-white leading-tight uppercase italic">
                            Im Knast ist <span class="text-paldau-green">(k)ein Zimmer frei</span>
                        </h3>
                        <p class="text-gray-400 italic mb-8 border-l-2 border-paldau-green pl-4">Komödie von Jonas Jetten in 2 Akten</p>
                        
                        <div class="space-y-4 text-gray-300 leading-relaxed text-lg">
                            <p>In einer kleinen Landpolizeistation steht seit Jahren eine ungenutzte Zelle. Jakob Müller und seine Frau Gertrude bauen sie kurzerhand zu einem Wohnzimmer um.</p>
                            <p>Doch als in der Landeshauptstadt alle Gefängniszellen belegt sind, werden drei Kleinganoven – ein Heiratsschwindler, ein Taschendieb und ein Verkehrssünder – dort untergebracht.</p>
                            <p>Gertrude hat jedoch gerade die Ortsbäuerinnen eingeladen. Als dann das Gerücht über einen Millionengewinn der Müllers entsteht, geben sie die Häftlinge kurzerhand als ihr Dienstpersonal aus.</p>
                        </div>
                    </div>
                    <div class="bg-paldau-green/5 p-8 md:w-1/3 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-800">
                        <div class="bg-black/40 p-6 rounded-2xl border border-paldau-green/20 shadow-xl text-center">
                            <p class="text-white font-bold italic text-xl mb-4">"Verwechslungen, Dienstpersonal wider Willen und jede Menge Humor sind garantiert!"</p>
                            <div class="w-12 h-1 bg-paldau-green mx-auto rounded-full"></div>
                        </div>
                    </div>
                </div>
            `;

            let tHtml = siteData.termine.map(t => {
                const datumTeile = t.datum.split(', ');
                const tagMonat = datumTeile[1] ? datumTeile[1].split('. ') : ["??", "??"];
                const displayPreis = t.preis ? t.preis : "Eintritt: € 12,00 / Kinder: € 3,00";

                return `
                <div class="bg-paldau-card rounded-3xl shadow-xl overflow-hidden mb-6 flex flex-col lg:flex-row border border-gray-800 group hover:border-paldau-green/40 transition-all duration-500">
                    <div class="bg-paldau-green text-white flex flex-col items-center justify-center p-8 lg:w-40">
                        <span class="text-xs uppercase font-bold opacity-70">${datumTeile[0]}</span>
                        <span class="text-5xl font-black serif my-1">${tagMonat[0]}</span>
                        <span class="text-lg font-bold uppercase">${tagMonat[1] || ""}</span>
                    </div>
                    <div class="p-8 lg:p-10 flex-grow">
                        <div class="flex items-center gap-3 mb-4">
                            <h3 class="serif text-2xl font-black text-white uppercase tracking-tight">${t.titel}</h3>
                            ${t.status === 'Premiere' ? '<span class="bg-paldau-green/20 text-paldau-green text-[10px] font-bold px-2 py-1 rounded">PREMIERE</span>' : ''}
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div class="flex items-center text-gray-400">
                                <i class="fas fa-clock text-paldau-green mr-3"></i>
                                <span>Beginn: <strong>${t.uhrzeit}</strong></span>
                            </div>
                            <div class="flex items-center text-gray-400">
                                <i class="fas fa-map-marker-alt text-paldau-green mr-3"></i>
                                <span>${t.ort}</span>
                            </div>
                        </div>
                        <div class="text-sm text-gray-500 border-t border-gray-800 pt-4">
                            <p><i class="fas fa-ticket-alt mr-2 text-paldau-green"></i> ${displayPreis}</p>
                            ${t.hinweis ? `<p class="mt-1 text-paldau-green font-bold"><i class="fas fa-glass-cheers mr-2"></i> ${t.hinweis}</p>` : ''}
                        </div>
                    </div>
                    <div class="bg-black/30 p-8 lg:w-64 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-800 text-center">
                        <a href="tel:${t.tel}" class="w-full border border-paldau-green text-paldau-green hover:bg-paldau-green hover:text-white py-3 rounded-xl font-bold transition-all mb-2">
                            Karten reservieren
                        </a>
                        <span class="text-[10px] text-gray-600 uppercase tracking-tighter">Abholung 30 Min. vor Beginn</span>
                    </div>
                </div>`;
            }).join('');

            area.innerHTML = `
                <section class="py-24 container mx-auto px-6 max-w-6xl">
                    <div class="text-center mb-16 animate-fadeIn">
                        <h2 class="serif text-5xl font-black text-white mb-4 uppercase">Spielplan <span class="text-paldau-green">2026</span></h2>
                        <p class="text-gray-500">Reservierung unter ${siteData.termine[0].tel} (Freie Platzwahl)</p>
                    </div>
                    
                    ${synopsisHtml}
                    
                    <div class="space-y-4">
                        <h4 class="serif text-2xl text-white mb-8 uppercase italic border-b border-gray-800 pb-2">Alle Aufführungen</h4>
                        ${tHtml}
                    </div>
                </section>`;
            break;


        case 'Chronik':
            const abschnitteHtml = siteData.chronikText.abschnitte.map((text, index) => `
                <div class="relative">
                    <div class="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-paldau-green ${index % 2 === 0 ? 'shadow-[0_0_10px_#16a34a]' : 'opacity-40'}"></div>
                    <p class="text-gray-300 leading-relaxed text-lg">${text}</p>
                </div>
            `).join('');

            const historieHtml = siteData.historie.map(s => `
                <div class="flex justify-between border-b border-gray-800 py-3 hover:bg-paldau-green/5 transition px-6">
                    <div class="flex gap-4 items-center">
                        <span class="text-paldau-green font-bold w-12">${s.jahr}</span>
                        <span class="text-gray-500 text-xs uppercase w-20">${s.monat || ""}</span>
                    </div>
                    <span class="text-gray-300 italic flex-grow text-right">${s.titel}</span>
                </div>
            `).join('');

            area.innerHTML = `
                <section class="py-24 container mx-auto px-6 max-w-4xl">
                    <div class="text-center mb-20 animate-fadeIn">
                        <h2 class="serif text-5xl font-black text-white mb-4 uppercase tracking-tight">
                            ${siteData.chronikText.titel}
                        </h2>
                        <div class="w-24 h-1 bg-paldau-green mx-auto opacity-50"></div>
                    </div>
                    
                    <div class="space-y-12 relative border-l border-gray-800 pl-8 ml-4 md:ml-0 mb-24">
                        ${abschnitteHtml}
                    </div>

                    <div class="mt-32">
                        <h3 class="serif text-4xl font-black text-white mb-12 uppercase text-center italic">
                            Blick in die <span class="text-paldau-green">Vergangenheit</span>
                        </h3>
                        <div class="bg-paldau-card rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
                            <div class="bg-gray-900/50 px-6 py-4 border-b border-gray-800 flex justify-between text-xs uppercase font-black tracking-widest text-gray-500">
                                <span>Jahr / Monat</span>
                                <span>Titel des Stücks</span>
                            </div>
                            <div class="max-h-[600px] overflow-y-auto custom-scrollbar">
                                ${historieHtml}
                            </div>
                        </div>
                    </div>
                </section>`;
            break;


        case 'Galerie':
            let gHtml = siteData.galerie.map(g => `
                <div onclick="openGallery('${g.id}')" class="group relative h-72 rounded-3xl overflow-hidden cursor-pointer border border-gray-800 hover:border-paldau-green/50 transition-all">
                    <img src="${g.vorschaubild}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-60">
                    <div class="absolute inset-0 bg-gradient-to-t from-black flex items-end p-8">
                        <div>
                            <h4 class="serif text-2xl font-bold text-white">${g.titel}</h4>
                            <p class="text-paldau-green text-xs font-bold uppercase tracking-widest mt-1">Fotos öffnen +</p>
                        </div>
                    </div>
                </div>`).join('');
            area.innerHTML = `<section class="py-24 container mx-auto px-6 max-w-6xl">
                <h2 class="serif text-5xl text-center mb-16 font-black text-white uppercase italic">Galerie</h2>
                <div class="grid md:grid-cols-2 gap-8">${gHtml}</div>
            </section>`;
            break;

        case 'Kontakt':
            area.innerHTML = `
                <section class="py-24 container mx-auto px-6 max-w-4xl">
                    <div class="bg-paldau-card rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-800">
                        <div class="bg-paldau-green p-12 text-white md:w-1/2 flex flex-col justify-center">
                            <h2 class="serif text-4xl font-black mb-8 uppercase leading-none">Reservierung</h2>
                            <p class="text-white/90 mb-8 font-light">Wir freuen uns auf Ihren Besuch im Momentum Paldau!</p>
                            <a href="tel:067764769876" class="flex items-center text-2xl font-bold hover:translate-x-2 transition-transform italic">
                                <i class="fas fa-phone-alt mr-4 text-sm"></i> 0677 / 64 769 876
                            </a>
                        </div>
                        <div class="p-12 md:w-1/2 bg-black flex flex-col justify-center text-sm">
                            <h3 class="serif text-xl font-bold mb-4 text-paldau-green uppercase">Impressum</h3>
                            <p class="text-gray-400"><strong>Theaterrunde Paldau</strong><br>Obmann: Josef Hütter<br>Momentum Paldau<br>8341 Paldau, Österreich</p>
                            <p class="mt-4 text-[10px] text-gray-600 uppercase border-t border-gray-900 pt-4">Inhaltlich verantwortlich: Markus Strohmaier</p>
                        </div>
                    </div>
                </section>`;
            break;
    }
}

// Lightbox-Logik
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
    const img = document.getElementById('lightbox-img');
    img.src = currentAlbum[currentIndex];
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