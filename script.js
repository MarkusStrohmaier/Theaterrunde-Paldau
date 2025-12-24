let currentAlbum = [];
let currentIndex = 0;
let currentAlbumTitle = "";

function renderPage(page) {
    const area = document.getElementById('content-area');
    window.scrollTo(0,0);
    
    switch(page) {
        case 'Home':
            const heroImg = galleryAssets.termine[siteData.termine[0].bildKey];
            // ÄNDERUNG:
            // 1. Die <section> hat keine feste Höhe (h-[85vh]) mehr.
            // 2. Das <img> ist nicht mehr 'absolute', sondern 'relative w-full h-auto'. Es bestimmt nun die Höhe der Sektion, dadurch wird nichts abgeschnitten.
            // 3. Der Inhalt (Text & Buttons) wird nun mit 'absolute inset-0' über das Bild gelegt und zentriert.
            area.innerHTML = `
                <section class="relative w-full bg-stone-200 overflow-hidden">
                    <img src="${heroImg}" class="w-full h-auto block opacity-90 animate-pulse-slow">

                    <div class="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/40 to-transparent"></div>

                    <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
                        <div class="text-center max-w-5xl">
                            <span class="bg-brand-red text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest shadow-2xl inline-block mb-8 animate-bounce">${siteData.termine[0].status}</span>
                            <h1 class="serif text-6xl md:text-9xl font-black text-gray-900 mb-6 drop-shadow-md lg:text-white lg:text-shadow-dark">
                                ${siteData.termine[0].titel}
                            </h1>
                            <p class="text-2xl md:text-4xl font-bold text-red-700 mb-12 lg:text-red-200">
                                <i class="fas fa-calendar-check mr-3 text-brand-amber"></i> ${siteData.termine[0].datum}
                            </p>
                            <button onclick="renderPage('Termine')" class="bg-brand-amber hover:bg-yellow-500 text-gray-900 font-bold px-12 py-5 rounded-full text-2xl shadow-xl transition transform hover:scale-110 active:scale-95">Spielplan & Tickets</button>
                        </div>
                    </div>
                </section>`;
            break;

        // Ersetze die entsprechenden Fälle in deiner renderPage() Funktion in der script.js

        case 'Termine':
            const heroImg2 = galleryAssets.termine[siteData.termine[0].bildKey];
            let tHtml = siteData.termine.map(t => {
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
                                    <p class="text-xs text-gray-400 font-bold uppercase">Ort</p>
                                    <p class="font-bold">${t.ort}</p>
                                </div>
                            </div>
                        </div>
                        ${t.preis ? `<p class="mt-6 text-brand-red font-bold"><i class="fas fa-info-circle mr-2"></i> ${t.preis}</p>` : ''}
                    </div>

                    <div class="bg-stone-50 p-8 lg:w-72 flex flex-col justify-center gap-4 border-t lg:border-t-0 lg:border-l border-stone-200">
                        <a href="tel:${t.tel}" class="w-full bg-brand-red text-white text-center py-4 rounded-2xl font-black hover:bg-red-700 transition shadow-lg flex items-center justify-center">
                            <i class="fas fa-phone-alt mr-2"></i> Jetzt reservieren
                        </a>
                        <p class="text-[10px] text-center text-gray-400 uppercase font-bold tracking-tighter">Karten bitte 30 Min. vor Beginn abholen</p>
                    </div>
                </div>`;
            }).join('');

            area.innerHTML = `
                <section class="py-24 container mx-auto px-6 max-w-6xl">
                    <div class="text-center mb-16">
                        <h2 class="serif text-6xl font-black text-gray-900 mb-4">Der <span class="text-brand-red">Spielplan</span></h2>
                        <div class="w-24 h-2 bg-brand-amber mx-auto rounded-full"></div>
                    </div>

                    <div class="mb-20 bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border-b-8 border-brand-red">
                        <div class="md:w-1/3 bg-stone-100">
                            <img src="${heroImg2}" class="h-full w-full object-cover">
                        </div>
                        <div class="p-10 md:p-16 md:w-2/3">
                            <span class="text-brand-red font-black uppercase tracking-widest text-sm">Aktuelles Stück</span>
                            <h3 class="serif text-4xl font-black mt-2 mb-6 text-gray-900">Im Knast ist (k)ein Zimmer frei</h3>
                            <p class="text-xl text-gray-600 leading-relaxed mb-6 italic">Komödie von Jonas Jetten in 2 Akten</p>
                            <p class="text-lg text-gray-700 leading-relaxed mb-6">
                                In einer kleinen Landpolizeistation bauen Jakob Müller und seine Frau Gertrude eine ungenutzte Zelle kurzerhand zu einem Wohnzimmer um. 
                                Doch die Idylle währt nicht lange: Als alle Gefängniszellen der Landeshauptstadt belegt sind, bekommt das Paar unerwarteten Besuch von drei Kleinganoven.
                            </p>
                            <div class="bg-brand-amber/10 p-6 rounded-2xl border-l-4 border-brand-amber">
                                <p class="text-gray-800 font-bold">"Ein Millionengewinn, Dienstpersonal wider Willen und jede Menge Verwechslungen sind garantiert!"</p>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-4">
                        ${tHtml}
                    </div>
                </section>`;
            break;

        case 'Chronik':
            area.innerHTML = `
            <section class="py-24 container mx-auto px-6 max-w-5xl">
                <div class="text-center mb-20">
                    <h2 class="serif text-7xl font-black text-gray-900 mb-4">Unsere <span class="text-brand-red">Geschichte</span></h2>
                    <p class="text-xl text-stone-500 font-serif italic">Seit Generationen ein fester Teil von Paldau</p>
                    <div class="w-32 h-2 bg-brand-amber mx-auto mt-8 rounded-full"></div>
                </div>

                <div class="space-y-16 relative">
                    <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-stone-200"></div>

                    <div class="relative flex flex-col md:flex-row items-center group">
                        <div class="md:w-1/2 md:pr-12 text-right">
                            <h4 class="serif text-3xl font-black text-brand-red mb-2">Vor dem Krieg</h4>
                            <p class="text-gray-600 leading-relaxed">Schon in der Vorkriegszeit fanden sich junge Burschen und Mädchen der Pfarre zusammen. Unter kundiger Leitung der Kapläne wurden mehrmals im Jahr Theaterstücke aufgeführt, bis der Anschluss Österreichs und der Krieg das Kulturleben jäh unterbrachen.</p>
                        </div>
                        <div class="w-12 h-12 bg-brand-amber rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0"></div>
                        <div class="md:w-1/2 md:pl-12">
                             <div class="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-brand-amber">
                                <i class="fas fa-masks-theater text-4xl text-stone-200 mb-4"></i>
                                <p class="font-bold text-gray-800">Die ersten Schritte des Laienspiels in Paldau.</p>
                             </div>
                        </div>
                    </div>

                    <div class="relative flex flex-col md:flex-row-reverse items-center group">
                        <div class="md:w-1/2 md:pl-12 text-left">
                            <h4 class="serif text-3xl font-black text-brand-red mb-2">Neuanfang & 1963</h4>
                            <p class="text-gray-600 leading-relaxed">Nach dem Krieg begann Kaplan Franz Kober mit dem Wiederaufbau. Im Saal des Gasthauses Groß wurde eine neue Bühne geschaffen. Ein Meilenstein war das Jahr 1963 mit der Aufführung von <span class="font-bold">"DER DORFDETEKTIV"</span>.</p>
                        </div>
                        <div class="w-12 h-12 bg-brand-red rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0"></div>
                        <div class="md:w-1/2 md:pr-12">
                             <div class="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-brand-red md:text-right">
                                <p class="text-sm text-brand-red font-black uppercase mb-2">Premiere im Gasthaus Groß</p>
                                <p class="font-bold text-gray-800 italic">"Nichts aus der alten Zeit war mehr vorhanden – alles wurde neu erschaffen."</p>
                             </div>
                        </div>
                    </div>

                    <div class="relative flex flex-col md:flex-row items-center group">
                        <div class="md:w-1/2 md:pr-12 text-right">
                            <h4 class="serif text-3xl font-black text-brand-red mb-2">Die Jedermann-Tradition</h4>
                            <p class="text-gray-600 leading-relaxed">Unter der Leitung von Friedrich Schaden wurde 1979 erstmals der <span class="font-bold">"JEDERMANN"</span> am Saazkogel aufgeführt. Diese Tradition wurde 1987, 1999, 2008 und zuletzt 2018 fortgesetzt. Die Erlöse fließen seit jeher in karitative Zwecke, wie die Renovierung der Kirche am Saazkogel.</p>
                        </div>
                        <div class="w-12 h-12 bg-brand-amber rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0"></div>
                        <div class="md:w-1/2 md:pl-12">
                             <div class="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-brand-amber">
                                <p class="text-xl font-black text-gray-900 mb-2">Freilichtbühne Saazkogel</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="bg-stone-100 px-3 py-1 rounded-full text-xs font-bold">1979</span>
                                    <span class="bg-stone-100 px-3 py-1 rounded-full text-xs font-bold">1987</span>
                                    <span class="bg-stone-100 px-3 py-1 rounded-full text-xs font-bold">1999</span>
                                    <span class="bg-stone-100 px-3 py-1 rounded-full text-xs font-bold">2008</span>
                                    <span class="bg-stone-100 px-3 py-1 rounded-full text-xs font-bold">2018</span>
                                </div>
                             </div>
                        </div>
                    </div>

                    <div class="relative flex flex-col md:flex-row-reverse items-center group">
                        <div class="md:w-1/2 md:pl-12 text-left">
                            <h4 class="serif text-3xl font-black text-brand-red mb-2">Die Theaterrunde heute</h4>
                            <p class="text-gray-600 leading-relaxed">Nach Josef Hütter (Leitung ab 1988) übernahm 2014 Peter Riedler die Führung des Vereins. Heute bespielen wir mit Leidenschaft das <span class="font-bold">Momentum Paldau</span> und freuen uns, unser Publikum mit anspruchsvollen Komödien zu begeistern.</p>
                        </div>
                        <div class="w-12 h-12 bg-gray-900 rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0 flex items-center justify-center">
                            <i class="fas fa-star text-white text-xs"></i>
                        </div>
                        <div class="md:w-1/2 md:pr-12">
                             <div class="bg-stone-900 text-white p-8 rounded-3xl shadow-2xl md:text-right">
                                <h5 class="serif text-2xl mb-2 text-brand-amber">Unsere Obmänner</h5>
                                <ul class="text-sm space-y-1 opacity-80 font-sans uppercase tracking-widest">
                                    <li>Friedrich Schaden</li>
                                    <li>Alois Frühwirth</li>
                                    <li>Josef Hütter</li>
                                    <li class="text-brand-red font-bold">Peter Riedler (seit 2014)</li>
                                </ul>
                             </div>
                        </div>
                    </div>
                </div>
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
