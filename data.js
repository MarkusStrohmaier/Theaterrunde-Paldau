const siteData = {
    // Informationen zum aktuellen Stück und den Terminen
    termine: [
        {
            titel: "Im Knast ist (k)ein Zimmer frei",
            datum: "Freitag, 23. Jänner 2026",
            uhrzeit: "19:30 Uhr",
            ort: "Momentum Paldau",
            bildKey: "knast",
            status: "Premiere",
            tel: "067764769876",
            mail: "info@theaterrunde-paldau.at",
            preis: "Eintritt: € 12,00 / Kinder (schulpflichtig): € 3,00",
            hinweis: "Nach der Premiere lädt die Theaterrunde auf 1 Glas Sekt ein!"
        },
        {
            titel: "Im Knast ist (k)ein Zimmer frei",
            datum: "Samstag, 24. Jänner 2026",
            uhrzeit: "19:30 Uhr",
            ort: "Momentum Paldau",
            bildKey: "knast",
            status: "Vorverkauf",
            tel: "067764769876",
            mail: "info@theaterrunde-paldau.at",
            preis: "Eintritt: € 12,00 / Kinder (schulpflichtig): € 3,00"
        },
        {
            titel: "Im Knast ist (k)ein Zimmer frei",
            datum: "Sonntag, 25. Jänner 2026",
            uhrzeit: "14:30 Uhr",
            ort: "Momentum Paldau",
            bildKey: "knast",
            status: "Vorverkauf",
            tel: "067764769876",
            mail: "info@theaterrunde-paldau.at",
            preis: "Eintritt: € 12,00 / Kinder (schulpflichtig): € 3,00"
        },
        {
            titel: "Im Knast ist (k)ein Zimmer frei",
            datum: "Freitag, 30. Jänner 2026",
            uhrzeit: "19:30 Uhr",
            ort: "Momentum Paldau",
            bildKey: "knast",
            status: "Vorverkauf",
            tel: "067764769876",
            mail: "info@theaterrunde-paldau.at",
            preis: "Eintritt: € 12,00 / Kinder (schulpflichtig): € 3,00"
        },
        {
            titel: "Im Knast ist (k)ein Zimmer frei",
            datum: "Samstag, 31. Jänner 2026",
            uhrzeit: "19:30 Uhr",
            ort: "Momentum Paldau",
            bildKey: "knast",
            status: "Vorverkauf",
            tel: "067764769876",
            mail: "info@theaterrunde-paldau.at",
            preis: "Eintritt: € 12,00 / Kinder (schulpflichtig): € 3,00"
        },
        {
            titel: "Im Knast ist (k)ein Zimmer frei",
            datum: "Sonntag, 01. Februar 2026",
            uhrzeit: "14:30 Uhr",
            ort: "Momentum Paldau",
            bildKey: "knast",
            status: "Vorverkauf",
            tel: "067764769876",
            mail: "info@theaterrunde-paldau.at",
            preis: "Eintritt: € 12,00 / Kinder (schulpflichtig): € 3,00"
        }
    ],

    // Der historische Text für die Chronik-Sektion
    chronikText: {
        titel: "Die „Theaterrunde Paldau“",
        abschnitte: [
            "Schon vor dem 2. Weltkrieg wurden von Burschen und Mädchen aus Paldau mehrere Male Theaterstücke aufgeführt.",
            "Diese Art des Kulturlebens wurde jäh unterbrochen durch den Anschluss Österreichs an das Deutsche Reich und den Ausbruch des Krieges.",
            "Mitglieder der Katholischen Jugend begannen bald nach dem Krieg unter der Leitung eines Kaplans mit der Aufführung von Theaterstücken im Saal eines Gasthauses.",
            "Als das Stallgebäude des Pfarrhofes zu einem Jugendsaal umgebaut wurde, errichtete man dort auch eine stabile Bühne. Es folgte dann die Gründung der „Theaterrunde Paldau“.",
            "Jährlich werden nun verschiedene Theaterstücke zur Aufführung gebracht. Eine große Herausforderung war immer das Spiel vom Leben und Sterben des „JEDERMANN“, welches heuer schon zum 5. Mal auf der Freilichtbühne am Saazkogel aufgeführt wird.",
            "Etwaige Gewinne werden meist karitativen Zwecken zugeführt."
        ]
    },

    // Liste der vergangenen Stücke
    historie: [
        { jahr: "2025", titel: "Der Meisterboxer" },
        { jahr: "2024", titel: "Der Nächste bitte" },
        { jahr: "2023", titel: "Da Himmel wart´ net" },
        { jahr: "2019", titel: "Männerwirtschaft" },
        { jahr: "2018", titel: "Jedermann (Saazkogel)" },
        { jahr: "2018", titel: "Wer ist Wer ?" },
        { jahr: "2017", titel: "Wellness, Witwen und heiße Wünsche" },
        { jahr: "2016", titel: "Die g´mischte Sauna" },
        { jahr: "2015", titel: "Gauner im Doppelpack" },
        { jahr: "2010", titel: "Auf dem Meyerhof ist was los" },
        { jahr: "2009", titel: "Dem Himmel sei Dank" },
        { jahr: "2008", titel: "Urlaub auf dem Bauernhof" },
        { jahr: "2008", titel: "Jedermann (Saazkogel)" },
        { jahr: "2007", titel: "Eine unvergessliche Nacht" },
        { jahr: "2006", titel: "Lügen über Lügen" },
        { jahr: "2005", titel: "Schwing die Hüften Alois" },
        { jahr: "2004", titel: "Urlaub vom Ehebett" },
        { jahr: "2003", titel: "Der ledige Bauplatz" },
        { jahr: "2002", titel: "Oaner spinnt immer" },
        { jahr: "2001", titel: "Power Paula" },
        { jahr: "2000", titel: "Der Frühpensionist" },
        { jahr: "1999", titel: "Jedermann (Saazkogel)" },
        { jahr: "1999", titel: "Drei Fliag´n mit oan Schlog!" },
        { jahr: "1998", titel: "Wer ist wer?" },
        { jahr: "1997", titel: "Herz am rechten Fleck" },
        { jahr: "1996", titel: "Klaus - jetzt ist´s aus" }
    ],

    galerie: [
        { id: "proben", titel: "Proben 2026", vorschaubild: "https://images.unsplash.com/photo-1503095396549-8072f6f39002?auto=format&fit=crop&q=80&w=500" },
        { id: "chronik", titel: "Blick zurück", vorschaubild: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=500" }
    ]
};