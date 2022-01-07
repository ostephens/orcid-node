const idMappings = [
  {
    name : "Aberystwyth University",
    domains : "aber.ac.uk",
    grid : "grid.8186.7",
    ror : "https://ror.org/015m2p889",
    ringgold : "1026"
  },
  {
    name : "Anglia Ruskin University",
    domains : "anglia.ac.uk",
    grid : "grid.5115.0",
    ror : "https://ror.org/0009t4v78",
    ringgold : "2369"
  },
  {
    name : "Aston University",
    domains : "aston.ac.uk",
    grid : "grid.7273.1",
    ror : "https://ror.org/05j0ve876",
    ringgold : "1722"
  },
  {
    name : "Birmingham City University",
    domains : "bcu.ac.uk",
    grid : "grid.19822.30",
    ror : "https://ror.org/00t67pt25",
    ringgold : "1725"
  },
  {
    name : "Bournemouth University",
    domains : "bournemouth.ac.uk",
    grid : "grid.17236.31",
    ror : "https://ror.org/05wwcw481",
    ringgold : "6657"
  },
  {
    name : "Brunel University",
    domains : "brunel.ac.uk",
    grid : "grid.7728.a",
    ror : "https://ror.org/00dn4t376",
    ringgold : "3890"
  },
  {
    name : "Cardiff University",
    domains : "cardiff.ac.uk",
    grid : "grid.5600.3",
    ror : "https://ror.org/03kk7td41",
    ringgold : "2112"
  },
  {
    name : "City, University of London",
    domains : "web.city.ac.uk|city.ac.uk",
    grid : "grid.28577.3f",
    ror : "https://ror.org/04489at23",
    ringgold : "4895"
  },
  {
    name : "Coventry University",
    domains : "coventry.ac.uk",
    grid : "grid.8096.7",
    ror : "https://ror.org/01tgmhj36",
    ringgold : "2706"
  },
  {
    name : "Cranfield University",
    domains : "cranfield.ac.uk",
    grid : "grid.12026.37",
    ror : "https://ror.org/05cncd958",
    ringgold : "2717"
  },
  {
    name : "De Montfort University",
    domains : "dmu.ac.uk",
    grid : "grid.48815.30",
    ror : "https://ror.org/0312pnr83",
    ringgold : "4487"
  },
  {
    name : "Diamond Light Source",
    domains : "diamond.ac.uk",
    grid : "grid.18785.33",
    ror : "https://ror.org/05etxs293",
    ringgold : "120796"
  },
  {
    name : "Durham University",
    domains : "durham.ac.uk",
    grid : "grid.8250.f",
    ror : "https://ror.org/01v29qb04",
    ringgold : "3057"
  },
  {
    name : "Edge Hill University",
    domains : "edgehill.ac.uk|ehche.ac.uk",
    grid : "grid.255434.1",
    ror : "https://ror.org/028ndzd53",
    ringgold : "6249"
  },
  {
    name : "Francis Crick Institute",
    domains : "crick.ac.uk",
    grid : "grid.451388.3",
    ror : "https://ror.org/04tnbqb63",
    ringgold : "376570"
  },
  {
    name : "Heriot-Watt University",
    domains : "hw.ac.uk",
    grid : "grid.9531.e",
    ror : "https://ror.org/04mghma93",
    ringgold : "3120"
  },
  {
    name : "Imperial College London",
    domains : "imperial.ac.uk",
    grid : "grid.7445.2",
    ror : "https://ror.org/041kmwe10",
    ringgold : "4615"
  },
  {
    name : "Institute of Cancer Research",
    domains : "icr.ac.uk",
    grid : "grid.18886.3f",
    ror : "https://ror.org/043jzw605",
    ringgold : "5053"
  },
  {
    name : "Keele University",
    domains : "keele.ac.uk",
    grid : "grid.9757.c",
    ror : "https://ror.org/00340yn33",
    ringgold : "4212"
  },
  {
    name : "King\"s College London",
    domains : "kcl.ac.uk",
    grid : "grid.13097.3c",
    ror : "https://ror.org/0220mzb33",
    ringgold : "4616"
  },
  {
    name : "Kingston University",
    domains : "kingston.ac.uk",
    grid : "grid.15538.3a",
    ror : "https://ror.org/05bbqza97",
    ringgold : "4264"
  },
  {
    name : "Lancaster University",
    domains : "lancs.ac.uk|lancaster.ac.uk",
    grid : "grid.9835.7",
    ror : "https://ror.org/04f2nsd36",
    ringgold : "4396"
  },
  {
    name : "Leeds Beckett University",
    domains : "leedsbeckett.ac.uk",
    grid : "grid.10346.30",
    ror : "https://ror.org/02xsh5r57",
    ringgold : "4467"
  },
  {
    name : "Liverpool Hope University",
    domains : "hope.ac.uk",
    grid : "grid.146189.3",
    ror : "https://ror.org/03ctjbj91",
    ringgold : "4588"
  },
  {
    name : "Liverpool John Moores University",
    domains : "ljmu.ac.uk",
    grid : "grid.4425.7",
    ror : "https://ror.org/04zfme737",
    ringgold : "4589"
  },
  {
    name : "Liverpool School of Tropical Medicine",
    domains : "lstmed.ac.uk",
    grid : "grid.48004.38",
    ror : "https://ror.org/03svjbs84",
    ringgold : "9655"
  },
  {
    name : "London Business School",
    domains : "london.edu|lbs.lon.ac.uk",
    grid : "grid.14868.33",
    ror : "https://ror.org/001c2sn75",
    ringgold : "4092"
  },
  {
    name : "London School of Economics & Political Science",
    domains : "lse.ac.uk",
    grid : "grid.13063.37",
    ror : "https://ror.org/0090zs177",
    ringgold : "4905"
  },
  {
    name : "London School of Hygiene & Tropical Medicine",
    domains : "lshtm.ac.uk",
    grid : "grid.8991.9",
    ror : "https://ror.org/00a0jsq62",
    ringgold : "4906"
  },
  {
    name : "London South Bank University",
    domains : "southbank-university.ac.uk|lsbu.ac.uk",
    grid : "grid.4756.0",
    ror : "https://ror.org/02vwnat91",
    ringgold : "4914"
  },
  {
    name : "Loughborough University",
    domains : "lboro.ac.uk",
    grid : "grid.6571.5",
    ror : "https://ror.org/04vg4w365",
    ringgold : "5156"
  },
  {
    name : "Manchester Metropolitan University",
    domains : "mmu.ac.uk",
    grid : "grid.25627.34",
    ror : "https://ror.org/02hstj355",
    ringgold : "5289"
  },
  {
    name : "Middlesex University",
    domains : "mdx.ac.uk",
    grid : "grid.15822.3c",
    ror : "https://ror.org/01rv4p989",
    ringgold : "4907"
  },
  {
    name : "Newcastle University",
    domains : "ncl.ac.uk",
    grid : "grid.1006.7",
    ror : "https://ror.org/01kj2bm70",
    ringgold : "5994"
  },
  {
    name : "Northumbria University",
    domains : "unn.ac.uk|northumbria.ac.uk",
    grid : "grid.42629.3b",
    ror : "https://ror.org/049e6bc10",
    ringgold : "5995"
  },
  {
    name : "Nottingham Trent University",
    domains : "ntu.ac.uk",
    grid : "grid.12361.37",
    ror : "https://ror.org/04xyxjd90",
    ringgold : "6122"
  },
  {
    name : "Queen\"s University Belfast",
    domains : "qub.ac.uk",
    grid : "grid.4777.3",
    ror : "https://ror.org/00hswnk62",
    ringgold : "1596"
  },
  {
    name : "Robert Gordon University",
    domains : "rgu.ac.uk",
    grid : "grid.59490.31",
    ror : "https://ror.org/04f0qj703",
    ringgold : "1018"
  },
  {
    name : "Rothamsted Research",
    domains : "rothamsted.ac.uk",
    grid : "grid.418374.d",
    ror : "https://ror.org/0347fy350",
    ringgold : "15552"
  },
  {
    name : "Royal College of Art",
    domains : "rca.ac.uk",
    grid : "grid.42167.36",
    ror : "https://ror.org/01egahc47",
    ringgold : "4910"
  },
  {
    name : "Royal Veterinary College, University of London",
    domains : "rvc.ac.uk",
    grid : "grid.20931.39",
    ror : "https://ror.org/01wka8n18",
    ringgold : "4912"
  },
  {
    name : "School of Advanced Study, University of London",
    domains : "sas.ac.uk",
    grid : "grid.467451.5",
    ror : "https://ror.org/039594g80",
    ringgold : "9758"
  },
  {
    name : "School of Oriental and African Studies",
    domains : "soas.ac.uk",
    grid : "grid.22631.34",
    ror : "https://ror.org/04vrxay34",
    ringgold : "4913"
  },
  {
    name : "Scottish Agricultural College",
    domains : "sruc.ac.uk",
    grid : "grid.426884.4",
    ror : "https://ror.org/044e2ja82",
    ringgold : "3123"
  },
  {
    name : "Sheffield Hallam University",
    domains : "shu.ac.uk",
    grid : "grid.5884.1",
    ror : "https://ror.org/019wt1929",
    ringgold : "7314"
  },
  {
    name : "St Mary\"s University College, Twickenham",
    domains : "stmarys.ac.uk|smuc.ac.uk",
    grid : "grid.417907.c",
    ror : "https://ror.org/0067fqk38",
    ringgold : "62693"
  },
  {
    name : "Swansea University",
    domains : "swansea.ac.uk",
    grid : "grid.4827.9",
    ror : "https://ror.org/053fq8t95",
    ringgold : "7759"
  },
  {
    name : "Teesside University",
    domains : "tees.ac.uk",
    grid : "grid.26597.3f",
    ror : "https://ror.org/03z28gk75",
    ringgold : "5462"
  },
  {
    name : "The Open University",
    domains : "open.ac.uk",
    grid : "grid.10837.3d",
    ror : "https://ror.org/05mzfcs16",
    ringgold : "5488"
  },
  {
    name : "UK Research and Innovation",
    domains : "ukri.org",
    grid : "grid.496779.2",
    ror : "https://ror.org/001aqnf71",
    ringgold : null
  },
  {
    name : "University College London - UCL",
    domains : "ucl.ac.uk",
    grid : "grid.83440.3b",
    ror : "https://ror.org/02jx3x895",
    ringgold : "4919|4901"
  },
  {
    name : "University of Aberdeen",
    domains : "abdn.ac.uk",
    grid : "grid.7107.1",
    ror : "https://ror.org/016476m91",
    ringgold : "1019"
  },
  {
    name : "University of Abertay Dundee",
    domains : "abertay.ac.uk",
    grid : "grid.44361.34",
    ror : "https://ror.org/04mwwnx67",
    ringgold : "3041"
  },
  {
    name : "University of Bath",
    domains : "bath.ac.uk",
    grid : "grid.7340.0",
    ror : "https://ror.org/002h8g185",
    ringgold : "1555"
  },
  {
    name : "University of Birmingham",
    domains : "bham.ac.uk|birmingham.ac.uk",
    grid : "grid.6572.6",
    ror : "https://ror.org/03angcq70",
    ringgold : "1724"
  },
  {
    name : "University of Bolton",
    domains : "bolton.ac.uk",
    grid : "grid.36076.34",
    ror : "https://ror.org/01t884y44",
    ringgold : "1796"
  },
  {
    name : "University of Bradford",
    domains : "brad.ac.uk",
    grid : "grid.6268.a",
    ror : "https://ror.org/00vs8d940",
    ringgold : "1905"
  },
  {
    name : "University of Brighton",
    domains : "brighton.ac.uk|bton.ac.uk",
    grid : "grid.12477.37",
    ror : "https://ror.org/04kp2b655",
    ringgold : "1947"
  },
  {
    name : "University of Bristol",
    domains : "bristol.ac.uk",
    grid : "grid.5337.2",
    ror : "https://ror.org/0524sp257",
    ringgold : "1980"
  },
  {
    name : "University of Buckingham",
    domains : "buckingham.ac.uk",
    grid : "grid.90685.32",
    ror : "https://ror.org/03kd28f18",
    ringgold : "2060"
  },
  {
    name : "University of Cambridge",
    domains : "cam.ac.uk",
    grid : "grid.5335.0",
    ror : "https://ror.org/013meh722",
    ringgold : "2152"
  },
  {
    name : "University of Central Lancashire",
    domains : "uclan.ac.uk",
    grid : "grid.7943.9",
    ror : "https://ror.org/010jbqd54",
    ringgold : "6723"
  },
  {
    name : "University of Derby",
    domains : "derby.ac.uk",
    grid : "grid.57686.3a",
    ror : "https://ror.org/02yhrrk59",
    ringgold : "2939"
  },
  {
    name : "University of East Anglia - UEA",
    domains : "uea.ac.uk",
    grid : "grid.8273.e",
    ror : "https://ror.org/026k5mg93",
    ringgold : "6106"
  },
  {
    name : "University of Edinburgh",
    domains : "ed.ac.uk",
    grid : "grid.4305.2",
    ror : "https://ror.org/01nrxwf90",
    ringgold : "3124"
  },
  {
    name : "University of Essex",
    domains : "essex.ac.uk",
    grid : "grid.8356.8",
    ror : "https://ror.org/02nkf1q06",
    ringgold : "2591"
  },
  {
    name : "University of Exeter",
    domains : "info.ex.ac.uk|exeter.ac.uk",
    grid : "grid.8391.3",
    ror : "https://ror.org/03yghzc09",
    ringgold : "3286"
  },
  {
    name : "University of Glasgow",
    domains : "gla.ac.uk",
    grid : "grid.8756.c",
    ror : "https://ror.org/00vtgdb53",
    ringgold : "3526"
  },
  {
    name : "University of Greenwich",
    domains : "gre.ac.uk",
    grid : "grid.36316.31",
    ror : "https://ror.org/00bmj0a71",
    ringgold : "4918"
  },
  {
    name : "University of Hertfordshire",
    domains : "herts.ac.uk",
    grid : "grid.5846.f",
    ror : "https://ror.org/0267vjk41",
    ringgold : "3769"
  },
  {
    name : "University of Huddersfield",
    domains : "hud.ac.uk",
    grid : "grid.15751.37",
    ror : "https://ror.org/05t1h8f27",
    ringgold : "4013"
  },
  {
    name : "University of Hull",
    domains : "hull.ac.uk",
    grid : "grid.9481.4",
    ror : "https://ror.org/04nkhwh30",
    ringgold : "4019"
  },
  {
    name : "University of Kent",
    domains : "kent.ac.uk|ukc.ac.uk",
    grid : "grid.9759.2",
    ror : "https://ror.org/00xkeyj56",
    ringgold : "2240"
  },
  {
    name : "University of Leeds",
    domains : "leeds.ac.uk",
    grid : "grid.9909.9",
    ror : "https://ror.org/024mrxd33",
    ringgold : "4468"
  },
  {
    name : "University of Leicester",
    domains : "le.ac.uk",
    grid : "grid.9918.9",
    ror : "https://ror.org/04h699437",
    ringgold : "4488"
  },
  {
    name : "University of Lincoln",
    domains : "lincoln.ac.uk|humber.ac.uk",
    grid : "grid.36511.30",
    ror : "https://ror.org/03yeq9x20",
    ringgold : "4547"
  },
  {
    name : "University of Liverpool",
    domains : "liv.ac.uk|liverpool.ac.uk",
    grid : "grid.10025.36",
    ror : "https://ror.org/04xs57h96",
    ringgold : "4591"
  },
  {
    name : "University of Manchester",
    domains : "manchester.ac.uk",
    grid : "grid.5379.8",
    ror : "https://ror.org/027m9bs27",
    ringgold : "5292"
  },
  {
    name : "University of Northampton",
    domains : "northampton.ac.uk|nene.ac.uk",
    grid : "grid.44870.3f",
    ror : "https://ror.org/04jp2hx10",
    ringgold : "6087"
  },
  {
    name : "University of Nottingham",
    domains : "nott.ac.uk|nottingham.ac.uk",
    grid : "grid.4563.4",
    ror : "https://ror.org/01ee9ar58",
    ringgold : "6123"
  },
  {
    name : "University of Oxford",
    domains : "ox.ac.uk",
    grid : "grid.4991.5",
    ror : "https://ror.org/052gg0110",
    ringgold : "6396"
  },
  {
    name : "University of Plymouth",
    domains : "plymouth.ac.uk",
    grid : "grid.11201.33",
    ror : "https://ror.org/008n7pv89",
    ringgold : "6633"
  },
  {
    name : "University of Portsmouth",
    domains : "port.ac.uk",
    grid : "grid.4701.2",
    ror : "https://ror.org/03ykbk197",
    ringgold : "6697"
  },
  {
    name : "University of Reading",
    domains : "rdg.ac.uk|reading.ac.uk",
    grid : "grid.9435.b",
    ror : "https://ror.org/05v62cm79",
    ringgold : "6816"
  },
  {
    name : "Roehampton University",
    domains : "roehampton.ac.uk",
    grid : "grid.35349.38",
    ror : "https://ror.org/043071f54",
    ringgold : "4920"
  },
  {
    name : "University of Salford",
    domains : "salford.ac.uk",
    grid : "grid.8752.8",
    ror : "https://ror.org/01tmqtf75",
    ringgold : "7046"
  },
  {
    name : "University of Sheffield",
    domains : "sheffield.ac.uk|shef.ac.uk",
    grid : "grid.11835.3e",
    ror : "https://ror.org/05krs5044",
    ringgold : "7315"
  },
  {
    name : "University of Southampton",
    domains : "southampton.ac.uk",
    grid : "grid.5491.9",
    ror : "https://ror.org/01ryk1543",
    ringgold : "7423"
  },
  {
    name : "University of St Andrews",
    domains : "st-andrews.ac.uk",
    grid : "grid.11914.3c",
    ror : "https://ror.org/02wn5qz54",
    ringgold : "7486"
  },
  {
    name : "University of Stirling",
    domains : "stir.ac.uk",
    grid : "grid.11918.30",
    ror : "https://ror.org/045wgfr59",
    ringgold : "7622"
  },
  {
    name : "University of Strathclyde",
    domains : "strath.ac.uk",
    grid : "grid.11984.35",
    ror : "https://ror.org/00n3w3b69",
    ringgold : "3527"
  },
  {
    name : "University of Surrey",
    domains : "surrey.ac.uk",
    grid : "grid.5475.3",
    ror : "https://ror.org/00ks66431",
    ringgold : "3660"
  },
  {
    name : "University of Sussex",
    domains : "sussex.ac.uk",
    grid : "grid.12082.39",
    ror : "https://ror.org/00ayhx656",
    ringgold : "1948"
  },
  {
    name : "University of the West of Scotland",
    domains : "uws.ac.uk",
    grid : "grid.15756.30",
    ror : "https://ror.org/04w3d2v20",
    ringgold : "6413"
  },
  {
    name : "University of Ulster",
    domains : "ulster.ac.uk",
    grid : "grid.12641.30",
    ror : "https://ror.org/01yp9g959",
    ringgold : "2596"
  },
  {
    name : "University of West London",
    domains : "uwl.ac.uk",
    grid : "grid.81800.31",
    ror : "https://ror.org/03e5mzp60",
    ringgold : "7364"
  },
  {
    name : "University of Westminster",
    domains : "westminster.ac.uk",
    grid : "grid.12896.34",
    ror : "https://ror.org/04ycpbx82",
    ringgold : "4921"
  },
  {
    name : "University of Wolverhampton",
    domains : "wlv.ac.uk",
    grid : "grid.6374.6",
    ror : "https://ror.org/01k2y1055",
    ringgold : "8695"
  },
  {
    name : "University of Worcester",
    domains : "worcester.ac.uk",
    grid : "grid.189530.6",
    ror : "https://ror.org/00v6s9648",
    ringgold : "8709"
  },
  {
    name : "University of York",
    domains : "york.ac.uk",
    grid : "grid.5685.e",
    ror : "https://ror.org/04m01e293",
    ringgold : "8748"
  },
  {
    name : "York St John University",
    domains : "yorksj.ac.uk",
    grid : "grid.23695.3b",
    ror : "https://ror.org/00z5fkj61",
    ringgold : "41872"
  }
]
