const idMappings = [
    {
      name: "Aberystwyth University",
      domains: "aber.ac.uk",
      grid: "grid.8186.7",
      ror: "https://ror.org/015m2p889",
      ringgold: "1026"
    },
    {
      name: "Anglia Ruskin University",
      domains: "anglia.ac.uk",
      grid: "grid.5115.0",
      ror: "https://ror.org/0009t4v78",
      ringgold: "2369"
    },
    {
      name: "Arts University Bournemouth",
      domains: "aub.ac.uk",
      grid: "grid.417908.3",
      ror: "https://ror.org/0539kc598",
      ringgold: "6656"
    },
    {
      name: "Aston University",
      domains: "aston.ac.uk",
      grid: "grid.7273.1",
      ror: "https://ror.org/05j0ve876",
      ringgold: "1722"
    },
    {
      name: "Bangor University",
      domains: "bangor.ac.uk",
      grid: "grid.7362.0",
      ror: "https://ror.org/006jb1a24",
      ringgold: "1506"
    },
    {
      name: "Bath Spa University",
      domains: "bathspa.ac.uk",
      grid: "grid.252874.e",
      ror: "https://ror.org/0038jbq24",
      ringgold: "1554"
    },
    {
      name: "Birkbeck College",
      domains: "bbk.ac.uk",
      grid: "grid.88379.3d",
      ror: "https://ror.org/02mb95055",
      ringgold: "4894"
    },
    {
      name: "Birmingham City University",
      domains: "bcu.ac.uk",
      grid: "grid.19822.30",
      ror: "https://ror.org/00t67pt25",
      ringgold: "1725"
    },
    {
      name: "Bishop Grosseteste University",
      domains: "bishopg.ac.uk|bgc.ac.uk",
      grid: "grid.417784.9",
      ror: "https://ror.org/04kw8et29",
      ringgold: "4545"
    },
    {
      name: "Bournemouth University",
      domains: "bournemouth.ac.uk",
      grid: "grid.17236.31",
      ror: "https://ror.org/05wwcw481",
      ringgold: "6657"
    },
    {
      name: "Brunel University",
      domains: "brunel.ac.uk",
      grid: "grid.7728.a",
      ror: "https://ror.org/00dn4t376",
      ringgold: "3890"
    },
    {
      name: "Buckinghamshire New University",
      domains: "bucks.ac.uk|bcuc.ac.uk",
      grid: "grid.411820.e",
      ror: "https://ror.org/02q3bak66",
      ringgold: "3889"
    },
    {
      name: "Canterbury Christ Church University",
      domains: "canterbury.ac.uk|canterbury.ac.uk",
      grid: "grid.127050.1",
      ror: "https://ror.org/0489ggv38",
      ringgold: "2238"
    },
    {
      name: "Cardiff Metropolitan University",
      domains: "cardiffmet.ac.uk",
      grid: "grid.47170.35",
      ror: "https://ror.org/00bqvf857",
      ringgold: "11352"
    },
    {
      name: "Cardiff Metropolitan University",
      domains: "newport.ac.uk",
      grid: null,
      ror: null,
      ringgold: "6003"
    },
    {
      name: "Cardiff University",
      domains: "cardiff.ac.uk",
      grid: "grid.5600.3",
      ror: "https://ror.org/03kk7td41",
      ringgold: "2112"
    },
    {
      name: "Central School of Speech and Drama",
      domains: "cssd.ac.uk",
      grid: "grid.417786.b",
      ror: "https://ror.org/05wtfef22",
      ringgold: "4685"
    },
    {
      name: "City, University of London",
      domains: "city.ac.uk|web.city.ac.uk",
      grid: "grid.28577.3f",
      ror: "https://ror.org/04489at23",
      ringgold: "4895"
    },
    {
      name: "Conservatoire for Dance and Drama",
      domains: "cdd.ac.uk|hero.ac.uk",
      grid: "grid.417787.a",
      ror: "https://ror.org/02a079e24",
      ringgold: "129368"
    },
    {
      name: "Courtauld Institute of Art",
      domains: "courtauld.ac.uk|courtauld.ac.uk",
      grid: "grid.424182.9",
      ror: "https://ror.org/052411t69",
      ringgold: "4897"
    },
    {
      name: "Coventry University",
      domains: "coventry.ac.uk",
      grid: "grid.8096.7",
      ror: "https://ror.org/01tgmhj36",
      ringgold: "2706"
    },
    {
      name: "Cranfield University",
      domains: "cranfield.ac.uk",
      grid: "grid.12026.37",
      ror: "https://ror.org/05cncd958",
      ringgold: "2717"
    },
    {
      name: "De Montfort University",
      domains: "dmu.ac.uk",
      grid: "grid.48815.30",
      ror: "https://ror.org/0312pnr83",
      ringgold: "4487"
    },
    {
      name: "Durham University",
      domains: "durham.ac.uk",
      grid: "grid.8250.f",
      ror: "https://ror.org/01v29qb04",
      ringgold: "3057"
    },
    {
      name: "Edge Hill University",
      domains: "edgehill.ac.uk|ehche.ac.uk",
      grid: "grid.255434.1",
      ror: "https://ror.org/028ndzd53",
      ringgold: "6249"
    },
    {
      name: "Edinburgh Napier University",
      domains: "napier.ac.uk",
      grid: "grid.20409.3f",
      ror: "https://ror.org/03zjvnn91",
      ringgold: "3121"
    },
    {
      name: "Falmouth University",
      domains: "falmouth.ac.uk",
      grid: "grid.43086.39",
      ror: "https://ror.org/022gstf70",
      ringgold: "3314"
    },
    {
      name: "Glasgow Caledonian University",
      domains: "gcu.ac.uk",
      grid: "grid.5214.2",
      ror: "https://ror.org/03dvm1235",
      ringgold: "3525"
    },
    {
      name: "Glasgow School of Art",
      domains: "gsa.ac.uk",
      grid: "grid.420422.2",
      ror: "https://ror.org/01s033b11",
      ringgold: "3517"
    },
    {
      name: "Glyndwr University",
      domains: "glyndwr.ac.uk",
      grid: "grid.4862.8",
      ror: "https://ror.org/048kc0s52",
      ringgold: "8725"
    },
    {
      name: "Goldsmiths College, University of London",
      domains: "gold.ac.uk",
      grid: "grid.15874.3f",
      ror: "https://ror.org/01khx4a30",
      ringgold: "4898"
    },
    {
      name: "Guildhall School of Music and Drama",
      domains: "gsmd.ac.uk",
      grid: "grid.434939.0",
      ror: "https://ror.org/05v7fvh88",
      ringgold: "4691"
    },
    {
      name: "Harper Adams University College",
      domains: "harper-adams.ac.uk|haac.ac.uk",
      grid: "grid.417899.a",
      ror: "https://ror.org/00z20c921",
      ringgold: "6000"
    },
    {
      name: "Heriot-Watt University",
      domains: "hw.ac.uk",
      grid: "grid.9531.e",
      ror: "https://ror.org/04mghma93",
      ringgold: "3120"
    },
    {
      name: "Heythrop College, University of London",
      domains: "heythrop.ac.uk",
      grid: "grid.450939.2",
      ror: "https://ror.org/044gr8720",
      ringgold: "4899"
    },
    {
      name: "Imperial College London",
      domains: "imperial.ac.uk",
      grid: "grid.7445.2",
      ror: "https://ror.org/041kmwe10",
      ringgold: "4615"
    },
    {
      name: "Institute of Cancer Research",
      domains: "icr.ac.uk",
      grid: "grid.18886.3f",
      ror: "https://ror.org/043jzw605",
      ringgold: "5053"
    },
    {
      name: "Institute of Education",
      domains: "ioe.ac.uk",
      grid: null,
      ror: null,
      ringgold: "4901"
    },
    {
      name: "Keele University",
      domains: "keele.ac.uk",
      grid: "grid.9757.c",
      ror: "https://ror.org/00340yn33",
      ringgold: "4212"
    },
    {
      name: "King\"s College London",
      domains: "kcl.ac.uk",
      grid: "grid.13097.3c",
      ror: "https://ror.org/0220mzb33",
      ringgold: "4616"
    },
    {
      name: "Kingston University",
      domains: "kingston.ac.uk",
      grid: "grid.15538.3a",
      ror: "https://ror.org/05bbqza97",
      ringgold: "4264"
    },
    {
      name: "Lancaster University",
      domains: "lancaster.ac.uk|lancs.ac.uk",
      grid: "grid.9835.7",
      ror: "https://ror.org/04f2nsd36",
      ringgold: "4396"
    },
    {
      name: "Leeds Beckett University",
      domains: "leedsbeckett.ac.uk",
      grid: "grid.10346.30",
      ror: "https://ror.org/02xsh5r57",
      ringgold: "4467"
    },
    {
      name: "Leeds College of Music",
      domains: "lcm.ac.uk",
      grid: "grid.450940.c",
      ror: "https://ror.org/034td6c88",
      ringgold: "4459"
    },
    {
      name: "Leeds Trinity University (formerly Leeds Trinity and All Saints) ",
      domains: "leedstrinity.ac.uk",
      grid: "grid.417900.b",
      ror: "https://ror.org/02x80b031",
      ringgold: "12054"
    },
    {
      name: "Liverpool Hope University",
      domains: "hope.ac.uk",
      grid: "grid.146189.3",
      ror: "https://ror.org/03ctjbj91",
      ringgold: "4588"
    },
    {
      name: "Liverpool Institute for Performing Arts",
      domains: "lipa.ac.uk",
      grid: "grid.451001.1",
      ror: "https://ror.org/0371kdw96",
      ringgold: "11584"
    },
    {
      name: "Liverpool John Moores University",
      domains: "ljmu.ac.uk",
      grid: "grid.4425.7",
      ror: "https://ror.org/04zfme737",
      ringgold: "4589"
    },
    {
      name: "Liverpool School of Tropical Medicine",
      domains: "lstmed.ac.uk",
      grid: "grid.48004.38",
      ror: "https://ror.org/03svjbs84",
      ringgold: "9655"
    },
    {
      name: "London Business School",
      domains: "london.edu|lbs.lon.ac.uk",
      grid: "grid.14868.33",
      ror: "https://ror.org/001c2sn75",
      ringgold: "4092"
    },
    {
      name: "London Metropolitan University",
      domains: "londonmet.ac.uk",
      grid: "grid.23231.31",
      ror: "https://ror.org/00ae33288",
      ringgold: "4904"
    },
    {
      name: "London School of Economics & Political Science",
      domains: "lse.ac.uk",
      grid: "grid.13063.37",
      ror: "https://ror.org/0090zs177",
      ringgold: "4905"
    },
    {
      name: "London School of Hygiene & Tropical Medicine",
      domains: "lshtm.ac.uk",
      grid: "grid.8991.9",
      ror: "https://ror.org/00a0jsq62",
      ringgold: "4906"
    },
    {
      name: "London South Bank University",
      domains: "lsbu.ac.uk|southbank-university.ac.uk",
      grid: "grid.4756.0",
      ror: "https://ror.org/02vwnat91",
      ringgold: "4914"
    },
    {
      name: "Loughborough University",
      domains: "lboro.ac.uk",
      grid: "grid.6571.5",
      ror: "https://ror.org/04vg4w365",
      ringgold: "5156"
    },
    {
      name: "Manchester Metropolitan University",
      domains: "mmu.ac.uk",
      grid: "grid.25627.34",
      ror: "https://ror.org/02hstj355",
      ringgold: "5289"
    },
    {
      name: "Middlesex University",
      domains: "mdx.ac.uk",
      grid: "grid.15822.3c",
      ror: "https://ror.org/01rv4p989",
      ringgold: "4907"
    },
    {
      name: "Newcastle University",
      domains: "ncl.ac.uk",
      grid: "grid.1006.7",
      ror: "https://ror.org/01kj2bm70",
      ringgold: "5994"
    },
    {
      name: "Newman University",
      domains: "newman.ac.uk",
      grid: "grid.417901.a",
      ror: "https://ror.org/009tnsj43",
      ringgold: "1713"
    },
    {
      name: "Northern School of Contemporary Dance",
      domains: "nscd.ac.uk",
      grid: null,
      ror: null,
      ringgold: "12050"
    },
    {
      name: "Northumbria University",
      domains: "northumbria.ac.uk|unn.ac.uk",
      grid: "grid.42629.3b",
      ror: "https://ror.org/049e6bc10",
      ringgold: "5995"
    },
    {
      name: "Norwich University College of the Arts",
      domains: "nua.ac.uk",
      grid: "grid.261220.5",
      ror: "https://ror.org/02fw9q305",
      ringgold: "6103"
    },
    {
      name: "Nottingham Trent University",
      domains: "ntu.ac.uk|ntu.ac.uk",
      grid: "grid.12361.37",
      ror: "https://ror.org/04xyxjd90",
      ringgold: "6122"
    },
    {
      name: "Oxford Brookes University",
      domains: "brookes.ac.uk",
      grid: "grid.7628.b",
      ror: "https://ror.org/04v2twj65",
      ringgold: "6395"
    },
    {
      name: "Queen\"s University Belfast",
      domains: "qub.ac.uk",
      grid: "grid.4777.3",
      ror: "https://ror.org/00hswnk62",
      ringgold: "1596"
    },
    {
      name: "Queen Margaret University",
      domains: "qmu.ac.uk",
      grid: "grid.104846.f",
      ror: "https://ror.org/002g3cb31",
      ringgold: "3122"
    },
    {
      name: "Queen Mary, University of London",
      domains: "qmul.ac.uk",
      grid: "grid.4868.2",
      ror: "https://ror.org/026zzn846",
      ringgold: "4617"
    },
    {
      name: "Ravensbourne College of Design and Communication",
      domains: "rave.ac.uk",
      grid: "grid.450941.d",
      ror: "https://ror.org/001htc678",
      ringgold: "2482"
    },
    {
      name: "Robert Gordon University",
      domains: "rgu.ac.uk",
      grid: "grid.59490.31",
      ror: "https://ror.org/04f0qj703",
      ringgold: "1018"
    },
    {
      name: "Roehampton University",
      domains: "roehampton.ac.uk",
      grid: "grid.35349.38",
      ror: "https://ror.org/043071f54",
      ringgold: "4920"
    },
    {
      name: "Rose Bruford College",
      domains: "bruford.ac.uk",
      grid: "grid.450990.1",
      ror: "https://ror.org/00q3dfs08",
      ringgold: "11637"
    },
    {
      name: "Royal Academy of Music",
      domains: "ram.ac.uk",
      grid: "grid.421653.7",
      ror: "https://ror.org/045bx8592",
      ringgold: "5291"
    },
    {
      name: "Royal Agricultural University (formerly Royal Agricultural College) ",
      domains: "rau.ac.uk",
      grid: "grid.417905.e",
      ror: "https://ror.org/033byn085",
      ringgold: "2522"
    },
    {
      name: "Royal College of Art",
      domains: "rca.ac.uk",
      grid: "grid.42167.36",
      ror: "https://ror.org/01egahc47",
      ringgold: "4910"
    },
    {
      name: "Royal College of Music",
      domains: "rcm.ac.uk",
      grid: "grid.421665.2",
      ror: "https://ror.org/04kwn3124",
      ringgold: "4911"
    },
    {
      name: "Royal Conservatoire of Scotland",
      domains: "rcs.ac.uk",
      grid: "grid.451002.2",
      ror: "https://ror.org/037wqvd92",
      ringgold: "3519"
    },
    {
      name: "Royal Holloway, University of London",
      domains: "royalholloway.ac.uk|rhul.ac.uk|rhbnc.ac.uk",
      grid: "grid.4970.a",
      ror: "https://ror.org/04g2vpn86",
      ringgold: "3162"
    },
    {
      name: "Royal Northern College of Music",
      domains: "rncm.ac.uk",
      grid: "grid.437498.5",
      ror: "https://ror.org/023372f11",
      ringgold: "5290"
    },
    {
      name: "Royal Veterinary College, University of London",
      domains: "rvc.ac.uk",
      grid: "grid.20931.39",
      ror: "https://ror.org/01wka8n18",
      ringgold: "4912"
    },
    {
      name: "Royal Welsh College of Music & Drama",
      domains: "rwcmd.ac.uk",
      grid: "grid.450991.0",
      ror: "https://ror.org/023ent443",
      ringgold: "57340"
    },
    {
      name: "School of Oriental and African Studies",
      domains: "soas.ac.uk",
      grid: "grid.22631.34",
      ror: "https://ror.org/04vrxay34",
      ringgold: "4913"
    },
    {
      name: "Scottish Agricultural College",
      domains: "sruc.ac.uk",
      grid: "grid.426884.4",
      ror: "https://ror.org/044e2ja82",
      ringgold: "3123"
    },
    {
      name: "Sheffield Hallam University",
      domains: "shu.ac.uk",
      grid: "grid.5884.1",
      ror: "https://ror.org/019wt1929",
      ringgold: "7314"
    },
    {
      name: "Southampton Solent University",
      domains: "solent.ac.uk",
      grid: "grid.31044.32",
      ror: "https://ror.org/05xydav19",
      ringgold: "7422"
    },
    {
      name: "Staffordshire University",
      domains: "staffs.ac.uk",
      grid: "grid.19873.34",
      ror: "https://ror.org/00d6k8y35",
      ringgold: "7703"
    },
    {
      name: "St George\"s University of London",
      domains: "sgul.ac.uk|sgul.ac.uk",
      grid: "grid.264200.2",
      ror: "https://ror.org/040f08y74",
      ringgold: "4915"
    },
    {
      name: "St Mary\"s University College, Twickenham",
      domains: "smuc.ac.uk|stmarys.ac.uk",
      grid: "grid.417907.c",
      ror: "https://ror.org/0067fqk38",
      ringgold: "62693"
    },
    {
      name: "St Mary\"s University College Belfast",
      domains: "stmarys-belfast.ac.uk|stmarys-belfast.ac.uk",
      grid: "grid.417906.d",
      ror: "https://ror.org/00n208030",
      ringgold: "1598"
    },
    {
      name: "Stranmillis University College",
      domains: "stran.ac.uk",
      grid: "grid.470672.0",
      ror: "https://ror.org/05a49e175",
      ringgold: "64576"
    },
    {
      name: "Swansea Metropolitan University  (UWTSD) ",
      domains: "smu.ac.uk",
      grid: null,
      ror: null,
      ringgold: "7758"
    },
    {
      name: "Swansea University",
      domains: "swansea.ac.uk",
      grid: "grid.4827.9",
      ror: "https://ror.org/053fq8t95",
      ringgold: "7759"
    },
    {
      name: "Teesside University",
      domains: "tees.ac.uk",
      grid: "grid.26597.3f",
      ror: "https://ror.org/03z28gk75",
      ringgold: "5462"
    },
    {
      name: "The Open University",
      domains: "open.ac.uk",
      grid: "grid.10837.3d",
      ror: "https://ror.org/05mzfcs16",
      ringgold: "5488"
    },
    {
      name: "Trinity Laban Conservatoire of Music and Dance",
      domains: "trinitylaban.ac.uk",
      grid: "grid.421855.f",
      ror: "https://ror.org/01gx2kf62",
      ringgold: "169323"
    },
    {
      name: "University College Birmingham",
      domains: "ucb.ac.uk|bcftcs.ac.uk",
      grid: "grid.418023.c",
      ror: "https://ror.org/042ver755",
      ringgold: "1711"
    },
    {
      name: "University College London - UCL",
      domains: "ucl.ac.uk",
      grid: "grid.83440.3b",
      ror: "https://ror.org/02jx3x895",
      ringgold: "4919"
    },
    {
      name: "University for the Creative Arts",
      domains: "uca.ac.uk",
      grid: "grid.51008.3c",
      ror: "https://ror.org/04r0ks517",
      ringgold: "121205"
    },
    {
      name: "University of Aberdeen",
      domains: "abdn.ac.uk",
      grid: "grid.7107.1",
      ror: "https://ror.org/016476m91",
      ringgold: "1019"
    },
    {
      name: "University of Abertay Dundee",
      domains: "abertay.ac.uk",
      grid: "grid.44361.34",
      ror: "https://ror.org/04mwwnx67",
      ringgold: "3041"
    },
    {
      name: "University of Bath",
      domains: "bath.ac.uk",
      grid: "grid.7340.0",
      ror: "https://ror.org/002h8g185",
      ringgold: "1555"
    },
    {
      name: "University of Bedfordshire",
      domains: "beds.ac.uk",
      grid: "grid.15034.33",
      ror: "https://ror.org/0400avk24",
      ringgold: "5195"
    },
    {
      name: "University of Birmingham",
      domains: "birmingham.ac.uk|bham.ac.uk",
      grid: "grid.6572.6",
      ror: "https://ror.org/03angcq70",
      ringgold: "1724"
    },
    {
      name: "University of Bolton",
      domains: "bolton.ac.uk",
      grid: "grid.36076.34",
      ror: "https://ror.org/01t884y44",
      ringgold: "1796"
    },
    {
      name: "University of Bradford",
      domains: "brad.ac.uk",
      grid: "grid.6268.a",
      ror: "https://ror.org/00vs8d940",
      ringgold: "1905"
    },
    {
      name: "University of Brighton",
      domains: "brighton.ac.uk|bton.ac.uk",
      grid: "grid.12477.37",
      ror: "https://ror.org/04kp2b655",
      ringgold: "1947"
    },
    {
      name: "University of Bristol",
      domains: "bristol.ac.uk",
      grid: "grid.5337.2",
      ror: "https://ror.org/0524sp257",
      ringgold: "1980"
    },
    {
      name: "University of Cambridge",
      domains: "cam.ac.uk",
      grid: "grid.5335.0",
      ror: "https://ror.org/013meh722",
      ringgold: "2152"
    },
    {
      name: "University of Central Lancashire",
      domains: "uclan.ac.uk",
      grid: "grid.7943.9",
      ror: "https://ror.org/010jbqd54",
      ringgold: "6723"
    },
    {
      name: "University of Chester",
      domains: "www1.chester.ac.uk|chester.ac.uk",
      grid: "grid.43710.31",
      ror: "https://ror.org/01drpwb22",
      ringgold: "11965"
    },
    {
      name: "University of Chichester",
      domains: "chi.ac.uk|ucc.ac.uk",
      grid: "grid.266161.4",
      ror: "https://ror.org/029tw2407",
      ringgold: "2476"
    },
    {
      name: "University of Cumbria",
      domains: "cumbria.ac.uk",
      grid: "grid.266218.9",
      ror: "https://ror.org/05gd22996",
      ringgold: "9480"
    },
    {
      name: "University of Derby",
      domains: "derby.ac.uk",
      grid: "grid.57686.3a",
      ror: "https://ror.org/02yhrrk59",
      ringgold: "2939"
    },
    {
      name: "University of Dundee",
      domains: "dundee.ac.uk",
      grid: "grid.8241.f",
      ror: "https://ror.org/03h2bxq36",
      ringgold: "3042"
    },
    {
      name: "University of East Anglia - UEA",
      domains: "uea.ac.uk",
      grid: "grid.8273.e",
      ror: "https://ror.org/026k5mg93",
      ringgold: "6106"
    },
    {
      name: "University of East London",
      domains: "uel.ac.uk",
      grid: "grid.60969.30",
      ror: "https://ror.org/057jrqr44",
      ringgold: "4917"
    },
    {
      name: "University of Edinburgh",
      domains: "ed.ac.uk",
      grid: "grid.4305.2",
      ror: "https://ror.org/01nrxwf90",
      ringgold: "3124"
    },
    {
      name: "University of Essex",
      domains: "essex.ac.uk",
      grid: "grid.8356.8",
      ror: "https://ror.org/02nkf1q06",
      ringgold: "2591"
    },
    {
      name: "University of Exeter",
      domains: "exeter.ac.uk|info.ex.ac.uk",
      grid: "grid.8391.3",
      ror: "https://ror.org/03yghzc09",
      ringgold: "3286"
    },
    {
      name: "University of Glasgow",
      domains: "gla.ac.uk",
      grid: "grid.8756.c",
      ror: "https://ror.org/00vtgdb53",
      ringgold: "3526"
    },
    {
      name: "University of Gloucestershire",
      domains: "glos.ac.uk|chelt.ac.uk",
      grid: "grid.21027.36",
      ror: "https://ror.org/00wygct11",
      ringgold: "2376"
    },
    {
      name: "University of Greenwich",
      domains: "gre.ac.uk",
      grid: "grid.36316.31",
      ror: "https://ror.org/00bmj0a71",
      ringgold: "4918"
    },
    {
      name: "University of Hertfordshire",
      domains: "herts.ac.uk",
      grid: "grid.5846.f",
      ror: "https://ror.org/0267vjk41",
      ringgold: "3769"
    },
    {
      name: "University of Huddersfield",
      domains: "hud.ac.uk",
      grid: "grid.15751.37",
      ror: "https://ror.org/05t1h8f27",
      ringgold: "4013"
    },
    {
      name: "University of Hull",
      domains: "hull.ac.uk",
      grid: "grid.9481.4",
      ror: "https://ror.org/04nkhwh30",
      ringgold: "4019"
    },
    {
      name: "University of Kent",
      domains: "kent.ac.uk|ukc.ac.uk",
      grid: "grid.9759.2",
      ror: "https://ror.org/00xkeyj56",
      ringgold: "2240"
    },
    {
      name: "University of Leeds",
      domains: "leeds.ac.uk",
      grid: "grid.9909.9",
      ror: "https://ror.org/024mrxd33",
      ringgold: "4468"
    },
    {
      name: "University of Leicester",
      domains: "le.ac.uk",
      grid: "grid.9918.9",
      ror: "https://ror.org/04h699437",
      ringgold: "4488"
    },
    {
      name: "University of Lincoln",
      domains: "lincoln.ac.uk|humber.ac.uk",
      grid: "grid.36511.30",
      ror: "https://ror.org/03yeq9x20",
      ringgold: "4547"
    },
    {
      name: "University of Liverpool",
      domains: "liv.ac.uk",
      grid: "grid.10025.36",
      ror: "https://ror.org/04xs57h96",
      ringgold: "4591"
    },
    {
      name: "University of London",
      domains: "london.ac.uk",
      grid: "grid.4464.2",
      ror: "https://ror.org/04cw6st05",
      ringgold: "3163"
    },
    {
      name: "University of Manchester",
      domains: "manchester.ac.uk",
      grid: "grid.5379.8",
      ror: "https://ror.org/027m9bs27",
      ringgold: "5292"
    },
    {
      name: "University of Northampton",
      domains: "northampton.ac.uk|nene.ac.uk",
      grid: "grid.44870.3f",
      ror: "https://ror.org/04jp2hx10",
      ringgold: "6087"
    },
    {
      name: "University of Nottingham",
      domains: "nottingham.ac.uk|nott.ac.uk",
      grid: "grid.4563.4",
      ror: "https://ror.org/01ee9ar58",
      ringgold: "6123"
    },
    {
      name: "University of Oxford",
      domains: "ox.ac.uk",
      grid: "grid.4991.5",
      ror: "https://ror.org/052gg0110",
      ringgold: "6396"
    },
    {
      name: "University of Plymouth",
      domains: "plymouth.ac.uk",
      grid: "grid.11201.33",
      ror: "https://ror.org/008n7pv89",
      ringgold: "6633"
    },
    {
      name: "University of Portsmouth",
      domains: "port.ac.uk",
      grid: "grid.4701.2",
      ror: "https://ror.org/03ykbk197",
      ringgold: "6697"
    },
    {
      name: "University of Reading",
      domains: "reading.ac.uk|rdg.ac.uk",
      grid: "grid.9435.b",
      ror: "https://ror.org/05v62cm79",
      ringgold: "6816"
    },
    {
      name: "University of Salford",
      domains: "salford.ac.uk|salford.ac.uk",
      grid: "grid.8752.8",
      ror: "https://ror.org/01tmqtf75",
      ringgold: "7046"
    },
    {
      name: "University of Sheffield",
      domains: "sheffield.ac.uk|shef.ac.uk",
      grid: "grid.11835.3e",
      ror: "https://ror.org/05krs5044",
      ringgold: "7315"
    },
    {
      name: "University of Southampton",
      domains: "southampton.ac.uk",
      grid: "grid.5491.9",
      ror: "https://ror.org/01ryk1543",
      ringgold: "7423"
    },
    {
      name: "University of South Wales",
      domains: "southwales.ac.uk|kcrconsultants.com",
      grid: "grid.410658.e",
      ror: "https://ror.org/02mzn7s88",
      ringgold: "6654"
    },
    {
      name: "University of St Andrews",
      domains: "st-andrews.ac.uk",
      grid: "grid.11914.3c",
      ror: "https://ror.org/02wn5qz54",
      ringgold: "7486"
    },
    {
      name: "University of Stirling",
      domains: "stir.ac.uk",
      grid: "grid.11918.30",
      ror: "https://ror.org/045wgfr59",
      ringgold: "7622"
    },
    {
      name: "University of St Mark and St John",
      domains: "marjon.ac.uk|marjon.ac.uk",
      grid: "grid.418024.b",
      ror: "https://ror.org/03f914y84",
      ringgold: "6629"
    },
    {
      name: "University of Strathclyde",
      domains: "strath.ac.uk",
      grid: "grid.11984.35",
      ror: "https://ror.org/00n3w3b69",
      ringgold: "3527"
    },
    {
      name: "University of Suffolk",
      domains: "uos.ac.uk",
      grid: "grid.449668.1",
      ror: "https://ror.org/01cy0sz82",
      ringgold: "102099"
    },
    {
      name: "University of Sunderland",
      domains: "sunderland.ac.uk",
      grid: "grid.7110.7",
      ror: "https://ror.org/04p55hr04",
      ringgold: "7735"
    },
    {
      name: "University of Surrey",
      domains: "surrey.ac.uk",
      grid: "grid.5475.3",
      ror: "https://ror.org/00ks66431",
      ringgold: "3660"
    },
    {
      name: "University of Sussex",
      domains: "sussex.ac.uk",
      grid: "grid.12082.39",
      ror: "https://ror.org/00ayhx656",
      ringgold: "1948"
    },
    {
      name: "University of the Arts London",
      domains: "arts.ac.uk|linst.ac.uk",
      grid: "grid.20364.33",
      ror: "https://ror.org/04cnfrn26",
      ringgold: "4903"
    },
    {
      name: "University of the Highlands and Islands",
      domains: "uhi.ac.uk",
      grid: "grid.23378.3d",
      ror: "https://ror.org/02s08xt61",
      ringgold: "7709"
    },
    {
      name: "University of the West of England",
      domains: "uwe.ac.uk",
      grid: "grid.6518.a",
      ror: "https://ror.org/02nwg5t34",
      ringgold: "1981"
    },
    {
      name: "University of the West of Scotland",
      domains: "uws.ac.uk",
      grid: "grid.15756.30",
      ror: "https://ror.org/04w3d2v20",
      ringgold: "6413"
    },
    {
      name: "University of Ulster",
      domains: "ulster.ac.uk",
      grid: "grid.12641.30",
      ror: "https://ror.org/01yp9g959",
      ringgold: "2596"
    },
    {
      name: "University of Wales Trinity St David",
      domains: "uwtsd.ac.uk|uwtsd.ac.uk",
      grid: "grid.12362.34",
      ror: "https://ror.org/05gkzcc88",
      ringgold: "2284"
    },
    {
      name: "University of Wales Trinity St David",
      domains: "uwtsd.ac.uk",
      grid: null,
      ror: null,
      ringgold: "4393"
    },
    {
      name: "University of Wales Trinity St David",
      domains: "uwtsd.ac.uk|uwtsd.ac.uk",
      grid: "grid.12362.34",
      ror: "https://ror.org/05gkzcc88",
      ringgold: "2284"
    },
    {
      name: "University of Warwick",
      domains: "warwick.ac.uk",
      grid: "grid.7372.1",
      ror: "https://ror.org/01a77tt86",
      ringgold: "2707"
    },
    {
      name: "University of West London",
      domains: "uwl.ac.uk",
      grid: "grid.81800.31",
      ror: "https://ror.org/03e5mzp60",
      ringgold: "7364"
    },
    {
      name: "University of Westminster",
      domains: "westminster.ac.uk",
      grid: "grid.12896.34",
      ror: "https://ror.org/04ycpbx82",
      ringgold: "4921"
    },
    {
      name: "University of Winchester",
      domains: "winchester.ac.uk|wkac.ac.uk",
      grid: "grid.267454.6",
      ror: "https://ror.org/03fmjzx88",
      ringgold: "8629"
    },
    {
      name: "University of Wolverhampton",
      domains: "wlv.ac.uk",
      grid: "grid.6374.6",
      ror: "https://ror.org/01k2y1055",
      ringgold: "8695"
    },
    {
      name: "University of Worcester",
      domains: "worcester.ac.uk",
      grid: "grid.189530.6",
      ror: "https://ror.org/00v6s9648",
      ringgold: "8709"
    },
    {
      name: "University of York",
      domains: "york.ac.uk",
      grid: "grid.5685.e",
      ror: "https://ror.org/04m01e293",
      ringgold: "8748"
    },
    {
      name: "Wellcome Trust",
      domains: "wellcome.org",
      grid: "grid.52788.30",
      ror: "https://ror.org/029chgv08",
      ringgold: "5072"
    },
    {
      name: "Writtle College",
      domains: "writtle.ac.uk",
      grid: "grid.451003.3",
      ror: "https://ror.org/02f9n2c91",
      ringgold: "2366"
    },
    {
      name: "York St John University",
      domains: "yorksj.ac.uk|yorksj.ac.uk",
      grid: "grid.23695.3b",
      ror: "https://ror.org/00z5fkj61",
      ringgold: "41872"
    },
    {
      name: "American University",
      domains: "american.edu",
      grid: "grid.63124.32",
      ror: "https://ror.org/052w4zt36",
      ringgold: "8363"
    },
    {
      name: "Arizona State University",
      domains: "asu.edu",
      grid: "grid.215654.1",
      ror: "https://ror.org/03efmqc40",
      ringgold: "7864"
    },
    {
      name: "Auburn University",
      domains: "auburn.edu",
      grid: "grid.252546.2",
      ror: "https://ror.org/02v80fc35",
      ringgold: "1383"
    },
    {
      name: "Augusta University",
      domains: "augusta.edu",
      grid: "grid.410427.4",
      ror: "https://ror.org/012mef835",
      ringgold: "1421"
    },
    {
      name: "Baylor University",
      domains: "baylor.edu",
      grid: "grid.252890.4",
      ror: "https://ror.org/005781934",
      ringgold: "14643"
    },
    {
      name: "Boston College",
      domains: "bc.edu",
      grid: "grid.208226.c",
      ror: "https://ror.org/02n2fzt79",
      ringgold: "6019"
    },
    {
      name: "Boston University",
      domains: "bu.edu",
      grid: "grid.189504.1",
      ror: "https://ror.org/05qwgg493",
      ringgold: "1846"
    },
    {
      name: "Brandeis University",
      domains: "brandeis.edu",
      grid: "grid.253264.4",
      ror: "https://ror.org/05abbep66",
      ringgold: "8244"
    },
    {
      name: "Brown University",
      domains: "brown.edu",
      grid: "grid.40263.33",
      ror: "https://ror.org/05gq02987",
      ringgold: "6752"
    },
    {
      name: "Bucknell University",
      domains: "bucknell.edu",
      grid: "grid.253363.2",
      ror: "https://ror.org/00fc1qt65",
      ringgold: "4517"
    },
    {
      name: "California Digital Library",
      domains: "cdlib.org",
      grid: "grid.463323.3",
      ror: "https://ror.org/03yrm5c26",
      ringgold: "33320"
    },
    {
      name: "California State University Fullerton",
      domains: "fullerton.edu",
      grid: "grid.253559.d",
      ror: "https://ror.org/02avqqw26",
      ringgold: "14666"
    },
    {
      name: "California State University Northridge",
      domains: "csun.edu",
      grid: "grid.253563.4",
      ror: "https://ror.org/005f5hv41",
      ringgold: "14671"
    },
    {
      name: "Carnegie Mellon University",
      domains: "cmu.edu",
      grid: "grid.147455.6",
      ror: "https://ror.org/05x2bcf33",
      ringgold: "6612"
    },
    {
      name: "Case Western Reserve University",
      domains: "case.edu",
      grid: "grid.67105.35",
      ror: "https://ror.org/051fd9666",
      ringgold: "2546"
    },
    {
      name: "Catholic University of America",
      domains: "cua.edu",
      grid: "grid.39936.36",
      ror: "https://ror.org/047yk3s18",
      ringgold: "8365"
    },
    {
      name: "Clemson University",
      domains: "clemson.edu",
      grid: "grid.26090.3d",
      ror: "https://ror.org/037s24f05",
      ringgold: "2545"
    },
    {
      name: "Colorado State University",
      domains: "colostate.edu",
      grid: "grid.47894.36",
      ror: "https://ror.org/03k1gpj17",
      ringgold: "3447"
    },
    {
      name: "Cornell University",
      domains: "cornell.edu",
      grid: "grid.5386.8",
      ror: "https://ror.org/05bnh6r87",
      ringgold: "5922"
    },
    {
      name: "Dartmouth College",
      domains: "dartmouth.edu",
      grid: "grid.254880.3",
      ror: "https://ror.org/049s0rh22",
      ringgold: "3728"
    },
    {
      name: "Drexel University",
      domains: "drexel.edu",
      grid: "grid.166341.7",
      ror: "https://ror.org/04bdffz58",
      ringgold: "6527"
    },
    {
      name: "Duke University",
      domains: "duke.edu",
      grid: "grid.26009.3d",
      ror: "https://ror.org/00py81415",
      ringgold: "3065"
    },
    {
      name: "East Tennessee State University",
      domains: "etsu.edu",
      grid: "grid.255381.8",
      ror: "https://ror.org/05rfqv493",
      ringgold: "4154"
    },
    {
      name: "Emory University",
      domains: "emory.edu",
      grid: "grid.189967.8",
      ror: "https://ror.org/03czfpz43",
      ringgold: "1371"
    },
    {
      name: "Florida International University",
      domains: "fiu.edu",
      grid: "grid.65456.34",
      ror: "https://ror.org/02gz6gg07",
      ringgold: "5450"
    },
    {
      name: "Florida State University",
      domains: "fsu.edu",
      grid: "grid.255986.5",
      ror: "https://ror.org/05g3dte14",
      ringgold: "7823"
    },
    {
      name: "Fred Hutchinson Cancer Research Center",
      domains: "fredhutch.org",
      grid: "grid.270240.3",
      ror: "https://ror.org/007ps6h72",
      ringgold: "7286"
    },
    {
      name: "George Washington University",
      domains: "gwu.edu",
      grid: "grid.253615.6",
      ror: "https://ror.org/00y4zzh67",
      ringgold: "8367"
    },
    {
      name: "Georgetown University",
      domains: "georgetown.edu",
      grid: "grid.213910.8",
      ror: "https://ror.org/05vzafd60",
      ringgold: "8368"
    },
    {
      name: "Georgetown University Medical Center",
      domains: "gumc.georgetown.edu|gumc.georgetown.edu",
      grid: "grid.411667.3",
      ror: "https://ror.org/00hjz7x27",
      ringgold: "12231"
    },
    {
      name: "Georgia Institute of Technology",
      domains: "gatech.edu",
      grid: "grid.213917.f",
      ror: "https://ror.org/01zkghx44",
      ringgold: "1372"
    },
    {
      name: "Georgia State University",
      domains: "gsu.edu",
      grid: "grid.256304.6",
      ror: "https://ror.org/03qt6ba18",
      ringgold: "1373"
    },
    {
      name: "Harvard University",
      domains: "harvard.edu",
      grid: "grid.38142.3c",
      ror: "https://ror.org/03vek6s52",
      ringgold: "1812"
    },
    {
      name: "Harvard Medical School",
      domains: "hms.harvard.edu",
      grid: "grid.471403.5",
      ror: "https://ror.org/03wevmz92",
      ringgold: "1811"
    },
    {
      name: "Howard University",
      domains: "home.howard.edu",
      grid: "grid.257127.4",
      ror: "https://ror.org/05gt1vc06",
      ringgold: "8369"
    },
    {
      name: "Indiana University Bloomington",
      domains: "indiana.edu",
      grid: "grid.411377.7",
      ror: "https://ror.org/02k40bc56",
      ringgold: "1771"
    },
    {
      name: "Iowa State University",
      domains: "iastate.edu",
      grid: "grid.34421.30",
      ror: "https://ror.org/04rswrd78",
      ringgold: "1177"
    },
    {
      name: "Johns Hopkins University",
      domains: "jhu.edu",
      grid: "grid.21107.35",
      ror: "https://ror.org/00za53h95",
      ringgold: "1466"
    },
    {
      name: "Marymount University",
      domains: "marymount.edu",
      grid: "grid.259700.9",
      ror: "https://ror.org/0008kv292",
      ringgold: "1298"
    },
    {
      name: "Massachusetts Institute of Technology",
      domains: "web.mit.edu",
      grid: "grid.116068.8",
      ror: "https://ror.org/042nb2s44",
      ringgold: "2167"
    },
    {
      name: "Michigan State University",
      domains: "msu.edu",
      grid: "grid.17088.36",
      ror: "https://ror.org/05hs6h993",
      ringgold: "3078"
    },
    {
      name: "Mississippi State University",
      domains: "msstate.edu",
      grid: "grid.260120.7",
      ror: "https://ror.org/0432jq872",
      ringgold: "5547"
    },
    {
      name: "Montana State University Bozeman",
      domains: "montana.edu",
      grid: "grid.41891.35",
      ror: "https://ror.org/02w0trx84",
      ringgold: "33052"
    },
    {
      name: "New York University",
      domains: "nyu.edu",
      grid: "grid.137628.9",
      ror: "https://ror.org/0190ak572",
      ringgold: "5894"
    },
    {
      name: "North Carolina State University",
      domains: "ncsu.edu",
      grid: "grid.40803.3f",
      ror: "https://ror.org/04tj63d06",
      ringgold: "6798"
    },
    {
      name: "Northeastern University",
      domains: "northeastern.edu",
      grid: "grid.261112.7",
      ror: "https://ror.org/04t5xt781",
      ringgold: "1848"
    },
    {
      name: "Northwestern University",
      domains: "northwestern.edu",
      grid: "grid.16753.36",
      ror: "https://ror.org/000e0be47",
      ringgold: "3270"
    },
    {
      name: "Ohio State University",
      domains: "osu.edu",
      grid: "grid.261331.4",
      ror: "https://ror.org/00rs6vg23",
      ringgold: "2647"
    },
    {
      name: "Oklahoma State University Stillwater",
      domains: "go.okstate.edu",
      grid: "grid.65519.3e",
      ror: "https://ror.org/01g9vbr38",
      ringgold: "7618"
    },
    {
      name: "Old Dominion University",
      domains: "odu.edu",
      grid: "grid.261368.8",
      ror: "https://ror.org/04zjtrb98",
      ringgold: "6042"
    },
    {
      name: "Oregon State University",
      domains: "oregonstate.edu",
      grid: "grid.4391.f",
      ror: "https://ror.org/00ysfqy60",
      ringgold: "2694"
    },
    {
      name: "Pennsylvania State University",
      domains: "psu.edu",
      grid: "grid.29857.31",
      ror: "https://ror.org/04p491231",
      ringgold: "8082"
    },
    {
      name: "Princeton University",
      domains: "princeton.edu",
      grid: "grid.16750.35",
      ror: "https://ror.org/00hx57361",
      ringgold: "6740"
    },
    {
      name: "Purdue University",
      domains: "purdue.edu",
      grid: "grid.169077.e",
      ror: "https://ror.org/02dqehb95",
      ringgold: "311308"
    },
    {
      name: "RTI International",
      domains: "rti.org",
      grid: "grid.62562.35",
      ror: "https://ror.org/052tfza37",
      ringgold: "6856"
    },
    {
      name: "Rutgers The State University of New Jersey",
      domains: "rutgers.edu",
      grid: "grid.430387.b",
      ror: "https://ror.org/05vt9qd57",
      ringgold: "242612"
    },
    {
      name: "Southern Methodist University",
      domains: "smu.edu",
      grid: "grid.263864.d",
      ror: "https://ror.org/042tdr378",
      ringgold: "2765"
    },
    {
      name: "Stanford University",
      domains: "stanford.edu",
      grid: "grid.168010.e",
      ror: "https://ror.org/00f54p054",
      ringgold: "6429"
    },
    {
      name: "SUNY College at Buffalo",
      domains: "buffalo.edu",
      grid: "grid.273335.3",
      ror: "https://ror.org/01y64my43",
      ringgold: "14791"
    },
    {
      name: "Temple University",
      domains: "temple.edu",
      grid: "grid.264727.2",
      ror: "https://ror.org/00kx1jb78",
      ringgold: "6558"
    },
    {
      name: "Texas A&M University System",
      domains: "tamus.edu",
      grid: "grid.264763.2",
      ror: "https://ror.org/0034eay46",
      ringgold: "2655"
    },
    {
      name: "Texas Christian University",
      domains: "tcu.edu",
      grid: "grid.264766.7",
      ror: "https://ror.org/054b0b564",
      ringgold: "3402"
    },
    {
      name: "Texas Tech University",
      domains: "ttu.edu",
      grid: "grid.264784.b",
      ror: "https://ror.org/0405mnx93",
      ringgold: "6177"
    },
    {
      name: "Tufts University",
      domains: "tufts.edu",
      grid: "grid.429997.8",
      ror: "https://ror.org/05wvpxv85",
      ringgold: "1810"
    },
    {
      name: "Tulane University",
      domains: "tulane.edu",
      grid: "grid.265219.b",
      ror: "https://ror.org/04vmvtb21",
      ringgold: "5783"
    },
    {
      name: "University of Alabama",
      domains: "ua.edu",
      grid: "grid.411015.0",
      ror: "https://ror.org/03xrrjk67",
      ringgold: "8063"
    },
    {
      name: "University of Alabama at Birmingham",
      domains: "uab.edu",
      grid: "grid.265892.2",
      ror: "https://ror.org/008s83205",
      ringgold: "9968"
    },
    {
      name: "University of Arizona",
      domains: "arizona.edu",
      grid: "grid.134563.6",
      ror: "https://ror.org/03m2x1q45",
      ringgold: "8041"
    },
    {
      name: "University of California Irvine",
      domains: "uci.edu",
      grid: "grid.266093.8",
      ror: "https://ror.org/04gyf1771",
      ringgold: "8788"
    },
    {
      name: "University of California Los Angeles",
      domains: "ucla.edu",
      grid: "grid.19006.3e",
      ror: "https://ror.org/046rm7j60",
      ringgold: "8783"
    },
    {
      name: "University of California San Diego",
      domains: "ucsd.edu",
      grid: "grid.266100.3",
      ror: "https://ror.org/0168r3w48",
      ringgold: "8784"
    },
    {
      name: "University of California San Francisco",
      domains: "ucsf.edu",
      grid: "grid.266102.1",
      ror: "https://ror.org/043mz5j54",
      ringgold: "8785"
    },
    {
      name: "University of California Santa Barbara",
      domains: "ucsb.edu",
      grid: "grid.133342.4",
      ror: "https://ror.org/02t274463",
      ringgold: "8786"
    },
    {
      name: "University of Cincinnati",
      domains: "uc.edu",
      grid: "grid.24827.3b",
      ror: "https://ror.org/01e3m7079",
      ringgold: "2514"
    },
    {
      name: "University of Colorado Boulder",
      domains: "colorado.edu",
      grid: "grid.266190.a",
      ror: "https://ror.org/02ttsq026",
      ringgold: "1877"
    },
    {
      name: "University of Connecticut",
      domains: "uconn.edu",
      grid: "grid.63054.34",
      ror: "https://ror.org/02der9h97",
      ringgold: "7712"
    },
    {
      name: "University of Delaware",
      domains: "udel.edu",
      grid: "grid.33489.35",
      ror: "https://ror.org/01sbq1a82",
      ringgold: "5972"
    },
    {
      name: "University of Denver",
      domains: "du.edu",
      grid: "grid.266239.a",
      ror: "https://ror.org/04w7skc03",
      ringgold: "2927"
    },
    {
      name: "University of the District of Columbia",
      domains: "udc.edu",
      grid: "grid.267550.3",
      ror: "https://ror.org/037wegn60",
      ringgold: "8315"
    },
    {
      name: "University of Florida",
      domains: "ufl.edu",
      grid: "grid.15276.37",
      ror: "https://ror.org/02y3ad647",
      ringgold: "3463"
    },
    {
      name: "University of Georgia",
      domains: "uga.edu",
      grid: "grid.213876.9",
      ror: "https://ror.org/00te3t702",
      ringgold: "1355"
    },
    {
      name: "University of Illinois at Chicago",
      domains: "uic.edu|uic.edu",
      grid: "grid.185648.6",
      ror: "https://ror.org/02mpq6x41",
      ringgold: "14681"
    },
    {
      name: "University of Illinois at Urbana-Champaign",
      domains: "illinois.edu",
      grid: "grid.35403.31",
      ror: "https://ror.org/047426m28",
      ringgold: "14589"
    },
    {
      name: "University of Iowa",
      domains: "uiowa.edu",
      grid: "grid.214572.7",
      ror: "https://ror.org/036jqmy94",
      ringgold: "4083"
    },
    {
      name: "University of Kansas",
      domains: "ku.edu",
      grid: "grid.266515.3",
      ror: "https://ror.org/001tmjg57",
      ringgold: "4202"
    },
    {
      name: "University of Maryland Baltimore",
      domains: "umaryland.edu",
      grid: "grid.411024.2",
      ror: "https://ror.org/04rq5mt64",
      ringgold: "12265"
    },
    {
      name: "University of Massachusetts Amherst",
      domains: "umass.edu",
      grid: "grid.266683.f",
      ror: "https://ror.org/0072zz521",
      ringgold: "14707"
    },
    {
      name: "University of Michigan",
      domains: "umich.edu",
      grid: "grid.214458.e",
      ror: "https://ror.org/00jmfr291",
      ringgold: "1259"
    },
    {
      name: "University of Minnesota Twin Cities",
      domains: "twin-cities.umn.edu",
      grid: "grid.17635.36",
      ror: "https://ror.org/017zqws13",
      ringgold: "5635"
    },
    {
      name: "University of Missouri Columbia",
      domains: "missouri.edu",
      grid: "grid.134936.a",
      ror: "https://ror.org/02ymw8z06",
      ringgold: "14716"
    },
    {
      name: "University of Nebraska-Lincoln",
      domains: "unl.edu",
      grid: "grid.24434.35",
      ror: "https://ror.org/043mer456",
      ringgold: "14719"
    },
    {
      name: "University of Nevada Las Vegas",
      domains: "unlv.edu",
      grid: "grid.272362.0",
      ror: "https://ror.org/0406gha72",
      ringgold: "14722"
    },
    {
      name: "University of New Hampshire",
      domains: "unh.edu",
      grid: "grid.167436.1",
      ror: "https://ror.org/01rmh9n78",
      ringgold: "3067"
    },
    {
      name: "University of North Carolina at Chapel Hill",
      domains: "unc.edu",
      grid: "grid.10698.36",
      ror: "https://ror.org/0130frc33",
      ringgold: "2331"
    },
    {
      name: "University of North Texas",
      domains: "unt.edu",
      grid: "grid.266869.5",
      ror: "https://ror.org/00v97ad02",
      ringgold: "3404"
    },
    {
      name: "University of Notre Dame",
      domains: "nd.edu",
      grid: "grid.131063.6",
      ror: "https://ror.org/00mkhxb43",
      ringgold: "6111"
    },
    {
      name: "University of Oklahoma",
      domains: "ou.edu",
      grid: "grid.266900.b",
      ror: "https://ror.org/02aqsxs83",
      ringgold: "6187"
    },
    {
      name: "University of Oregon",
      domains: "uoregon.edu",
      grid: "grid.170202.6",
      ror: "https://ror.org/0293rh119",
      ringgold: "3265"
    },
    {
      name: "University of Pennsylvania",
      domains: "upenn.edu",
      grid: "grid.25879.31",
      ror: "https://ror.org/00b30xv10",
      ringgold: "6572"
    },
    {
      name: "University of Pittsburgh",
      domains: "pitt.edu",
      grid: "grid.21925.3d",
      ror: "https://ror.org/01an3r305",
      ringgold: "6614"
    },
    {
      name: "University of Rhode Island",
      domains: "uri.edu",
      grid: "grid.20431.34",
      ror: "https://ror.org/013ckk937",
      ringgold: "4260"
    },
    {
      name: "University of Rochester",
      domains: "rochester.edu",
      grid: "grid.16416.34",
      ror: "https://ror.org/022kthw22",
      ringgold: "6927"
    },
    {
      name: "University of Southern California",
      domains: "usc.edu",
      grid: "grid.42505.36",
      ror: "https://ror.org/03taz7m60",
      ringgold: "5116"
    },
    {
      name: "University of Tennessee Knoxville",
      domains: "utk.edu",
      grid: "grid.411461.7",
      ror: "https://ror.org/020f3ap87",
      ringgold: "4292"
    },
    {
      name: "University of Texas at Arlington",
      domains: "uta.edu",
      grid: "grid.267315.4",
      ror: "https://ror.org/019kgqr73",
      ringgold: "12329"
    },
    {
      name: "University of Texas at Austin",
      domains: "utexas.edu",
      grid: "grid.89336.37",
      ror: "https://ror.org/00hj54h04",
      ringgold: "12330"
    },
    {
      name: "University of Texas at Dallas",
      domains: "utdallas.edu",
      grid: "grid.267323.1",
      ror: "https://ror.org/049emcs32",
      ringgold: "12335"
    },
    {
      name: "University of Texas at San Antonio",
      domains: "utsa.edu",
      grid: "grid.215352.2",
      ror: "https://ror.org/01kd65564",
      ringgold: "12346"
    },
    {
      name: "University of Texas MD Anderson Cancer Center",
      domains: "mdanderson.org|uth.edu",
      grid: "grid.240145.6",
      ror: "https://ror.org/04twxam07",
      ringgold: "4002"
    },
    {
      name: "University of Texas Southwestern Medical Center at Dallas",
      domains: "utsouthwestern.edu",
      grid: "grid.267313.2",
      ror: "https://ror.org/05byvp690",
      ringgold: "12334"
    },
    {
      name: "University of Utah",
      domains: "utah.edu",
      grid: "grid.223827.e",
      ror: "https://ror.org/03r0ha626",
      ringgold: "7060"
    },
    {
      name: "University of Virginia",
      domains: "virginia.edu",
      grid: "grid.27755.32",
      ror: "https://ror.org/0153tk833",
      ringgold: "2358"
    },
    {
      name: "University of Washington",
      domains: "washington.edu",
      grid: "grid.34477.33",
      ror: "https://ror.org/00cvxb145",
      ringgold: "7284"
    },
    {
      name: "University of Wisconsin Madison",
      domains: "wisc.edu",
      grid: "grid.14003.36",
      ror: "https://ror.org/01y2jtd41",
      ringgold: "5228"
    },
    {
      name: "University of Wyoming",
      domains: "uwyo.edu",
      grid: "grid.135963.b",
      ror: "https://ror.org/01485tq96",
      ringgold: "4416"
    },
    {
      name: "Virginia Commonwealth University",
      domains: "vcu.edu",
      grid: "grid.224260.0",
      ror: "https://ror.org/02nkdxk79",
      ringgold: "6889"
    },
    {
      name: "Virginia Polytechnic Institute and State University",
      domains: "vt.edu",
      grid: "grid.438526.e",
      ror: "https://ror.org/02smfhw86",
      ringgold: "1757"
    },
    {
      name: "Washington State University",
      domains: "wsu.edu",
      grid: "grid.30064.31",
      ror: "https://ror.org/05dk0ce17",
      ringgold: "6760"
    },
    {
      name: "Washington University in Saint Louis",
      domains: "wustl.edu",
      grid: "grid.4367.6",
      ror: "https://ror.org/01yc7t268",
      ringgold: "7548"
    },
    {
      name: "West Virginia University",
      domains: "wvu.edu",
      grid: "grid.268154.c",
      ror: "https://ror.org/011vxgd24",
      ringgold: "5631"
    },
    {
      name: "William & Mary",
      domains: "wm.edu",
      grid: "grid.264889.9",
      ror: "https://ror.org/03hsf0573",
      ringgold: "8604"
    },
    {
      name: "Yale University",
      domains: "yale.edu",
      grid: "grid.47100.32",
      ror: "https://ror.org/03v76x132",
      ringgold: "5755"
    },
    {
      name: "American University",
      domains: "american.edu",
      grid: "grid.63124.32",
      ror: "https://ror.org/052w4zt36",
      ringgold: "8363"
    },
    {
      name: "Arizona State University",
      domains: "asu.edu",
      grid: "grid.215654.1",
      ror: "https://ror.org/03efmqc40",
      ringgold: "7864"
    },
    {
      name: "Auburn University",
      domains: "auburn.edu",
      grid: "grid.252546.2",
      ror: "https://ror.org/02v80fc35",
      ringgold: "1383"
    },
    {
      name: "Augusta University",
      domains: "augusta.edu",
      grid: "grid.410427.4",
      ror: "https://ror.org/012mef835",
      ringgold: "1421"
    },
    {
      name: "Baylor University",
      domains: "baylor.edu",
      grid: "grid.252890.4",
      ror: "https://ror.org/005781934",
      ringgold: "14643"
    },
    {
      name: "Boston College",
      domains: "bc.edu",
      grid: "grid.208226.c",
      ror: "https://ror.org/02n2fzt79",
      ringgold: "6019"
    },
    {
      name: "Boston University",
      domains: "bu.edu",
      grid: "grid.189504.1",
      ror: "https://ror.org/05qwgg493",
      ringgold: "1846"
    },
    {
      name: "Brandeis University",
      domains: "brandeis.edu",
      grid: "grid.253264.4",
      ror: "https://ror.org/05abbep66",
      ringgold: "8244"
    },
    {
      name: "Brown University",
      domains: "brown.edu",
      grid: "grid.40263.33",
      ror: "https://ror.org/05gq02987",
      ringgold: "6752"
    },
    {
      name: "Bucknell University",
      domains: "bucknell.edu",
      grid: "grid.253363.2",
      ror: "https://ror.org/00fc1qt65",
      ringgold: "4517"
    },
    {
      name: "California Digital Library",
      domains: "cdlib.org",
      grid: "grid.463323.3",
      ror: "https://ror.org/03yrm5c26",
      ringgold: "33320"
    },
    {
      name: "California State University Fullerton",
      domains: "fullerton.edu",
      grid: "grid.253559.d",
      ror: "https://ror.org/02avqqw26",
      ringgold: "14666"
    },
    {
      name: "California State University Northridge",
      domains: "csun.edu",
      grid: "grid.253563.4",
      ror: "https://ror.org/005f5hv41",
      ringgold: "14671"
    },
    {
      name: "Carnegie Mellon University",
      domains: "cmu.edu",
      grid: "grid.147455.6",
      ror: "https://ror.org/05x2bcf33",
      ringgold: "6612"
    },
    {
      name: "Case Western Reserve University",
      domains: "case.edu",
      grid: "grid.67105.35",
      ror: "https://ror.org/051fd9666",
      ringgold: "2546"
    },
    {
      name: "Catholic University of America",
      domains: "cua.edu",
      grid: "grid.39936.36",
      ror: "https://ror.org/047yk3s18",
      ringgold: "8365"
    },
    {
      name: "Clemson University",
      domains: "clemson.edu",
      grid: "grid.26090.3d",
      ror: "https://ror.org/037s24f05",
      ringgold: "2545"
    },
    {
      name: "Colorado State University",
      domains: "colostate.edu",
      grid: "grid.47894.36",
      ror: "https://ror.org/03k1gpj17",
      ringgold: "3447"
    },
    {
      name: "Cornell University",
      domains: "cornell.edu",
      grid: "grid.5386.8",
      ror: "https://ror.org/05bnh6r87",
      ringgold: "5922"
    },
    {
      name: "Dartmouth College",
      domains: "dartmouth.edu",
      grid: "grid.254880.3",
      ror: "https://ror.org/049s0rh22",
      ringgold: "3728"
    },
    {
      name: "Drexel University",
      domains: "drexel.edu",
      grid: "grid.166341.7",
      ror: "https://ror.org/04bdffz58",
      ringgold: "6527"
    },
    {
      name: "Duke University",
      domains: "duke.edu",
      grid: "grid.26009.3d",
      ror: "https://ror.org/00py81415",
      ringgold: "3065"
    },
    {
      name: "East Tennessee State University",
      domains: "etsu.edu",
      grid: "grid.255381.8",
      ror: "https://ror.org/05rfqv493",
      ringgold: "4154"
    },
    {
      name: "Emory University",
      domains: "emory.edu",
      grid: "grid.189967.8",
      ror: "https://ror.org/03czfpz43",
      ringgold: "1371"
    },
    {
      name: "Florida International University",
      domains: "fiu.edu",
      grid: "grid.65456.34",
      ror: "https://ror.org/02gz6gg07",
      ringgold: "5450"
    },
    {
      name: "Florida State University",
      domains: "fsu.edu",
      grid: "grid.255986.5",
      ror: "https://ror.org/05g3dte14",
      ringgold: "7823"
    },
    {
      name: "Fred Hutchinson Cancer Research Center",
      domains: "fredhutch.org",
      grid: "grid.270240.3",
      ror: "https://ror.org/007ps6h72",
      ringgold: "7286"
    },
    {
      name: "George Washington University",
      domains: "gwu.edu",
      grid: "grid.253615.6",
      ror: "https://ror.org/00y4zzh67",
      ringgold: "8367"
    },
    {
      name: "Georgetown University",
      domains: "georgetown.edu",
      grid: "grid.213910.8",
      ror: "https://ror.org/05vzafd60",
      ringgold: "8368"
    },
    {
      name: "Georgetown University Medical Center",
      domains: "gumc.georgetown.edu|gumc.georgetown.edu",
      grid: "grid.411667.3",
      ror: "https://ror.org/00hjz7x27",
      ringgold: "12231"
    },
    {
      name: "Georgia Institute of Technology",
      domains: "gatech.edu",
      grid: "grid.213917.f",
      ror: "https://ror.org/01zkghx44",
      ringgold: "1372"
    },
    {
      name: "Georgia State University",
      domains: "gsu.edu",
      grid: "grid.256304.6",
      ror: "https://ror.org/03qt6ba18",
      ringgold: "1373"
    },
    {
      name: "Harvard University",
      domains: "harvard.edu",
      grid: "grid.38142.3c",
      ror: "https://ror.org/03vek6s52",
      ringgold: "1812"
    },
    {
      name: "Harvard Medical School",
      domains: "hms.harvard.edu",
      grid: "grid.471403.5",
      ror: "https://ror.org/03wevmz92",
      ringgold: "1811"
    },
    {
      name: "Howard University",
      domains: "home.howard.edu",
      grid: "grid.257127.4",
      ror: "https://ror.org/05gt1vc06",
      ringgold: "8369"
    },
    {
      name: "Indiana University Bloomington",
      domains: "indiana.edu",
      grid: "grid.411377.7",
      ror: "https://ror.org/02k40bc56",
      ringgold: "1771"
    },
    {
      name: "Iowa State University",
      domains: "iastate.edu",
      grid: "grid.34421.30",
      ror: "https://ror.org/04rswrd78",
      ringgold: "1177"
    },
    {
      name: "Johns Hopkins University",
      domains: "jhu.edu",
      grid: "grid.21107.35",
      ror: "https://ror.org/00za53h95",
      ringgold: "1466"
    },
    {
      name: "Marymount University",
      domains: "marymount.edu",
      grid: "grid.259700.9",
      ror: "https://ror.org/0008kv292",
      ringgold: "1298"
    },
    {
      name: "Massachusetts Institute of Technology",
      domains: "web.mit.edu",
      grid: "grid.116068.8",
      ror: "https://ror.org/042nb2s44",
      ringgold: "2167"
    },
    {
      name: "Michigan State University",
      domains: "msu.edu",
      grid: "grid.17088.36",
      ror: "https://ror.org/05hs6h993",
      ringgold: "3078"
    },
    {
      name: "Mississippi State University",
      domains: "msstate.edu",
      grid: "grid.260120.7",
      ror: "https://ror.org/0432jq872",
      ringgold: "5547"
    },
    {
      name: "Montana State University Bozeman",
      domains: "montana.edu",
      grid: "grid.41891.35",
      ror: "https://ror.org/02w0trx84",
      ringgold: "33052"
    },
    {
      name: "New York University",
      domains: "nyu.edu",
      grid: "grid.137628.9",
      ror: "https://ror.org/0190ak572",
      ringgold: "5894"
    },
    {
      name: "North Carolina State University",
      domains: "ncsu.edu",
      grid: "grid.40803.3f",
      ror: "https://ror.org/04tj63d06",
      ringgold: "6798"
    },
    {
      name: "Northeastern University",
      domains: "northeastern.edu",
      grid: "grid.261112.7",
      ror: "https://ror.org/04t5xt781",
      ringgold: "1848"
    },
    {
      name: "Northwestern University",
      domains: "northwestern.edu",
      grid: "grid.16753.36",
      ror: "https://ror.org/000e0be47",
      ringgold: "3270"
    },
    {
      name: "Ohio State University",
      domains: "osu.edu",
      grid: "grid.261331.4",
      ror: "https://ror.org/00rs6vg23",
      ringgold: "2647"
    },
    {
      name: "Oklahoma State University Stillwater",
      domains: "go.okstate.edu",
      grid: "grid.65519.3e",
      ror: "https://ror.org/01g9vbr38",
      ringgold: "7618"
    },
    {
      name: "Old Dominion University",
      domains: "odu.edu",
      grid: "grid.261368.8",
      ror: "https://ror.org/04zjtrb98",
      ringgold: "6042"
    },
    {
      name: "Oregon State University",
      domains: "oregonstate.edu",
      grid: "grid.4391.f",
      ror: "https://ror.org/00ysfqy60",
      ringgold: "2694"
    },
    {
      name: "Pennsylvania State University",
      domains: "psu.edu",
      grid: "grid.29857.31",
      ror: "https://ror.org/04p491231",
      ringgold: "8082"
    },
    {
      name: "Princeton University",
      domains: "princeton.edu",
      grid: "grid.16750.35",
      ror: "https://ror.org/00hx57361",
      ringgold: "6740"
    },
    {
      name: "Purdue University",
      domains: "purdue.edu",
      grid: "grid.169077.e",
      ror: "https://ror.org/02dqehb95",
      ringgold: "311308"
    },
    {
      name: "RTI International",
      domains: "rti.org",
      grid: "grid.62562.35",
      ror: "https://ror.org/052tfza37",
      ringgold: "6856"
    },
    {
      name: "Rutgers The State University of New Jersey",
      domains: "rutgers.edu",
      grid: "grid.430387.b",
      ror: "https://ror.org/05vt9qd57",
      ringgold: "242612"
    },
    {
      name: "Southern Methodist University",
      domains: "smu.edu",
      grid: "grid.263864.d",
      ror: "https://ror.org/042tdr378",
      ringgold: "2765"
    },
    {
      name: "Stanford University",
      domains: "stanford.edu",
      grid: "grid.168010.e",
      ror: "https://ror.org/00f54p054",
      ringgold: "6429"
    },
    {
      name: "SUNY College at Buffalo",
      domains: "buffalo.edu",
      grid: "grid.273335.3",
      ror: "https://ror.org/01y64my43",
      ringgold: "14791"
    },
    {
      name: "Temple University",
      domains: "temple.edu",
      grid: "grid.264727.2",
      ror: "https://ror.org/00kx1jb78",
      ringgold: "6558"
    },
    {
      name: "Texas A&M University System",
      domains: "tamus.edu",
      grid: "grid.264763.2",
      ror: "https://ror.org/0034eay46",
      ringgold: "2655"
    },
    {
      name: "Texas Christian University",
      domains: "tcu.edu",
      grid: "grid.264766.7",
      ror: "https://ror.org/054b0b564",
      ringgold: "3402"
    },
    {
      name: "Texas Tech University",
      domains: "ttu.edu",
      grid: "grid.264784.b",
      ror: "https://ror.org/0405mnx93",
      ringgold: "6177"
    },
    {
      name: "Tufts University",
      domains: "tufts.edu",
      grid: "grid.429997.8",
      ror: "https://ror.org/05wvpxv85",
      ringgold: "1810"
    },
    {
      name: "Tulane University",
      domains: "tulane.edu",
      grid: "grid.265219.b",
      ror: "https://ror.org/04vmvtb21",
      ringgold: "5783"
    },
    {
      name: "University of Alabama",
      domains: "ua.edu",
      grid: "grid.411015.0",
      ror: "https://ror.org/03xrrjk67",
      ringgold: "8063"
    },
    {
      name: "University of Alabama at Birmingham",
      domains: "uab.edu",
      grid: "grid.265892.2",
      ror: "https://ror.org/008s83205",
      ringgold: "9968"
    },
    {
      name: "University of Arizona",
      domains: "arizona.edu",
      grid: "grid.134563.6",
      ror: "https://ror.org/03m2x1q45",
      ringgold: "8041"
    },
    {
      name: "University of California Irvine",
      domains: "uci.edu",
      grid: "grid.266093.8",
      ror: "https://ror.org/04gyf1771",
      ringgold: "8788"
    },
    {
      name: "University of California Los Angeles",
      domains: "ucla.edu",
      grid: "grid.19006.3e",
      ror: "https://ror.org/046rm7j60",
      ringgold: "8783"
    },
    {
      name: "University of California San Diego",
      domains: "ucsd.edu",
      grid: "grid.266100.3",
      ror: "https://ror.org/0168r3w48",
      ringgold: "8784"
    },
    {
      name: "University of California San Francisco",
      domains: "ucsf.edu",
      grid: "grid.266102.1",
      ror: "https://ror.org/043mz5j54",
      ringgold: "8785"
    },
    {
      name: "University of California Santa Barbara",
      domains: "ucsb.edu",
      grid: "grid.133342.4",
      ror: "https://ror.org/02t274463",
      ringgold: "8786"
    },
    {
      name: "University of Cincinnati",
      domains: "uc.edu",
      grid: "grid.24827.3b",
      ror: "https://ror.org/01e3m7079",
      ringgold: "2514"
    },
    {
      name: "University of Colorado Boulder",
      domains: "colorado.edu",
      grid: "grid.266190.a",
      ror: "https://ror.org/02ttsq026",
      ringgold: "1877"
    },
    {
      name: "University of Connecticut",
      domains: "uconn.edu",
      grid: "grid.63054.34",
      ror: "https://ror.org/02der9h97",
      ringgold: "7712"
    },
    {
      name: "University of Delaware",
      domains: "udel.edu",
      grid: "grid.33489.35",
      ror: "https://ror.org/01sbq1a82",
      ringgold: "5972"
    },
    {
      name: "University of Denver",
      domains: "du.edu",
      grid: "grid.266239.a",
      ror: "https://ror.org/04w7skc03",
      ringgold: "2927"
    },
    {
      name: "University of the District of Columbia",
      domains: "udc.edu",
      grid: "grid.267550.3",
      ror: "https://ror.org/037wegn60",
      ringgold: "8315"
    },
    {
      name: "University of Florida",
      domains: "ufl.edu",
      grid: "grid.15276.37",
      ror: "https://ror.org/02y3ad647",
      ringgold: "3463"
    },
    {
      name: "University of Georgia",
      domains: "uga.edu",
      grid: "grid.213876.9",
      ror: "https://ror.org/00te3t702",
      ringgold: "1355"
    },
    {
      name: "University of Illinois at Chicago",
      domains: "uic.edu|uic.edu",
      grid: "grid.185648.6",
      ror: "https://ror.org/02mpq6x41",
      ringgold: "14681"
    },
    {
      name: "University of Illinois at Urbana-Champaign",
      domains: "illinois.edu",
      grid: "grid.35403.31",
      ror: "https://ror.org/047426m28",
      ringgold: "14589"
    },
    {
      name: "University of Iowa",
      domains: "uiowa.edu",
      grid: "grid.214572.7",
      ror: "https://ror.org/036jqmy94",
      ringgold: "4083"
    },
    {
      name: "University of Kansas",
      domains: "ku.edu",
      grid: "grid.266515.3",
      ror: "https://ror.org/001tmjg57",
      ringgold: "4202"
    },
    {
      name: "University of Maryland Baltimore",
      domains: "umaryland.edu",
      grid: "grid.411024.2",
      ror: "https://ror.org/04rq5mt64",
      ringgold: "12265"
    },
    {
      name: "University of Massachusetts Amherst",
      domains: "umass.edu",
      grid: "grid.266683.f",
      ror: "https://ror.org/0072zz521",
      ringgold: "14707"
    },
    {
      name: "University of Michigan",
      domains: "umich.edu",
      grid: "grid.214458.e",
      ror: "https://ror.org/00jmfr291",
      ringgold: "1259"
    },
    {
      name: "University of Minnesota Twin Cities",
      domains: "twin-cities.umn.edu",
      grid: "grid.17635.36",
      ror: "https://ror.org/017zqws13",
      ringgold: "5635"
    },
    {
      name: "University of Missouri Columbia",
      domains: "missouri.edu",
      grid: "grid.134936.a",
      ror: "https://ror.org/02ymw8z06",
      ringgold: "14716"
    },
    {
      name: "University of Nebraska-Lincoln",
      domains: "unl.edu",
      grid: "grid.24434.35",
      ror: "https://ror.org/043mer456",
      ringgold: "14719"
    },
    {
      name: "University of Nevada Las Vegas",
      domains: "unlv.edu",
      grid: "grid.272362.0",
      ror: "https://ror.org/0406gha72",
      ringgold: "14722"
    },
    {
      name: "University of New Hampshire",
      domains: "unh.edu",
      grid: "grid.167436.1",
      ror: "https://ror.org/01rmh9n78",
      ringgold: "3067"
    },
    {
      name: "University of North Carolina at Chapel Hill",
      domains: "unc.edu",
      grid: "grid.10698.36",
      ror: "https://ror.org/0130frc33",
      ringgold: "2331"
    },
    {
      name: "University of North Texas",
      domains: "unt.edu",
      grid: "grid.266869.5",
      ror: "https://ror.org/00v97ad02",
      ringgold: "3404"
    },
    {
      name: "University of Notre Dame",
      domains: "nd.edu",
      grid: "grid.131063.6",
      ror: "https://ror.org/00mkhxb43",
      ringgold: "6111"
    },
    {
      name: "University of Oklahoma",
      domains: "ou.edu",
      grid: "grid.266900.b",
      ror: "https://ror.org/02aqsxs83",
      ringgold: "6187"
    },
    {
      name: "University of Oregon",
      domains: "uoregon.edu",
      grid: "grid.170202.6",
      ror: "https://ror.org/0293rh119",
      ringgold: "3265"
    },
    {
      name: "University of Pennsylvania",
      domains: "upenn.edu",
      grid: "grid.25879.31",
      ror: "https://ror.org/00b30xv10",
      ringgold: "6572"
    },
    {
      name: "University of Pittsburgh",
      domains: "pitt.edu",
      grid: "grid.21925.3d",
      ror: "https://ror.org/01an3r305",
      ringgold: "6614"
    },
    {
      name: "University of Rhode Island",
      domains: "uri.edu",
      grid: "grid.20431.34",
      ror: "https://ror.org/013ckk937",
      ringgold: "4260"
    },
    {
      name: "University of Rochester",
      domains: "rochester.edu",
      grid: "grid.16416.34",
      ror: "https://ror.org/022kthw22",
      ringgold: "6927"
    },
    {
      name: "University of Southern California",
      domains: "usc.edu",
      grid: "grid.42505.36",
      ror: "https://ror.org/03taz7m60",
      ringgold: "5116"
    },
    {
      name: "University of Tennessee Knoxville",
      domains: "utk.edu",
      grid: "grid.411461.7",
      ror: "https://ror.org/020f3ap87",
      ringgold: "4292"
    },
    {
      name: "University of Texas at Arlington",
      domains: "uta.edu",
      grid: "grid.267315.4",
      ror: "https://ror.org/019kgqr73",
      ringgold: "12329"
    },
    {
      name: "University of Texas at Austin",
      domains: "utexas.edu",
      grid: "grid.89336.37",
      ror: "https://ror.org/00hj54h04",
      ringgold: "12330"
    },
    {
      name: "University of Texas at Dallas",
      domains: "utdallas.edu",
      grid: "grid.267323.1",
      ror: "https://ror.org/049emcs32",
      ringgold: "12335"
    },
    {
      name: "University of Texas at San Antonio",
      domains: "utsa.edu",
      grid: "grid.215352.2",
      ror: "https://ror.org/01kd65564",
      ringgold: "12346"
    },
    {
      name: "University of Texas MD Anderson Cancer Center",
      domains: "mdanderson.org|uth.edu",
      grid: "grid.240145.6",
      ror: "https://ror.org/04twxam07",
      ringgold: "4002"
    },
    {
      name: "University of Texas Southwestern Medical Center at Dallas",
      domains: "utsouthwestern.edu",
      grid: "grid.267313.2",
      ror: "https://ror.org/05byvp690",
      ringgold: "12334"
    },
    {
      name: "University of Utah",
      domains: "utah.edu",
      grid: "grid.223827.e",
      ror: "https://ror.org/03r0ha626",
      ringgold: "7060"
    },
    {
      name: "University of Virginia",
      domains: "virginia.edu",
      grid: "grid.27755.32",
      ror: "https://ror.org/0153tk833",
      ringgold: "2358"
    },
    {
      name: "University of Washington",
      domains: "washington.edu",
      grid: "grid.34477.33",
      ror: "https://ror.org/00cvxb145",
      ringgold: "7284"
    },
    {
      name: "University of Wisconsin Madison",
      domains: "wisc.edu",
      grid: "grid.14003.36",
      ror: "https://ror.org/01y2jtd41",
      ringgold: "5228"
    },
    {
      name: "University of Wyoming",
      domains: "uwyo.edu",
      grid: "grid.135963.b",
      ror: "https://ror.org/01485tq96",
      ringgold: "4416"
    },
    {
      name: "Virginia Commonwealth University",
      domains: "vcu.edu",
      grid: "grid.224260.0",
      ror: "https://ror.org/02nkdxk79",
      ringgold: "6889"
    },
    {
      name: "Virginia Polytechnic Institute and State University",
      domains: "vt.edu",
      grid: "grid.438526.e",
      ror: "https://ror.org/02smfhw86",
      ringgold: "1757"
    },
    {
      name: "Washington State University",
      domains: "wsu.edu",
      grid: "grid.30064.31",
      ror: "https://ror.org/05dk0ce17",
      ringgold: "6760"
    },
    {
      name: "Washington University in Saint Louis",
      domains: "wustl.edu",
      grid: "grid.4367.6",
      ror: "https://ror.org/01yc7t268",
      ringgold: "7548"
    },
    {
      name: "West Virginia University",
      domains: "wvu.edu",
      grid: "grid.268154.c",
      ror: "https://ror.org/011vxgd24",
      ringgold: "5631"
    },
    {
      name: "William & Mary",
      domains: "wm.edu",
      grid: "grid.264889.9",
      ror: "https://ror.org/03hsf0573",
      ringgold: "8604"
    },
    {
      name: "Yale University",
      domains: "yale.edu",
      grid: "grid.47100.32",
      ror: "https://ror.org/03v76x132",
      ringgold: "5755"
    }
]
