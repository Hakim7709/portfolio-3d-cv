#!/usr/bin/env python3
"""
50 Verified Employers in Ireland for Hospitality Operations & Shift Management
Target Candidate: Md Hakim Mia (6 Yrs Albaik Leadership, HACCP, IT & AI Automation)
"""

COMPANIES_50 = [
    {
        "id": 1,
        "name": "Supermac's Ireland",
        "category": "Fast-Casual & QSR",
        "hr_email": "careers@supermacs.ie",
        "portal_url": "https://supermacs.ie/careers/",
        "locations": "Galway, Dublin, Limerick, Nationwide (100+ stores)",
        "sponsorship": "High (General Employment Permit)",
        "notes": "Ireland's largest indigenous fast-food chain; high demand for experienced fast-food supervisors."
    },
    {
        "id": 2,
        "name": "Camile Thai Kitchen",
        "category": "Tech-Forward Fast-Casual",
        "hr_email": "recruitment@camile.ie",
        "portal_url": "https://www.camile.ie/careers",
        "locations": "Dublin, Cork, Belfast, Nationwide",
        "sponsorship": "High (Frequent work permit sponsor)",
        "notes": "Fastest-growing delivery/fast-casual franchise; heavily values technology and automated kitchens."
    },
    {
        "id": 3,
        "name": "Applegreen PLC",
        "category": "Motorway Service & Dining Hubs",
        "hr_email": "careers@applegreenstores.com",
        "portal_url": "https://careers.applegreenstores.com/",
        "locations": "Nationwide Motorway Plazas & Travel Plazas",
        "sponsorship": "High (Major sponsor)",
        "notes": "Operates high-volume multi-brand food courts (Burger King, Subway, Bakewell, Chopstix)."
    },
    {
        "id": 4,
        "name": "Press Up Hospitality Group",
        "category": "Casual Dining & Venues",
        "hr_email": "careers@pressup.ie",
        "portal_url": "https://pressup.ie/careers/",
        "locations": "Dublin, Cork, Major Urban Centers",
        "sponsorship": "Moderate to High",
        "notes": "Ireland's leading hospitality group with 65+ bars, restaurants, and cinemas (Wowburger, Elephant & Castle)."
    },
    {
        "id": 5,
        "name": "Musgrave Group (Centra & SuperValu)",
        "category": "Fresh Food Retail & Operations",
        "hr_email": "careers@musgravegroup.com",
        "portal_url": "https://www.musgravegroup.com/careers/",
        "locations": "Cork, Dublin, Nationwide",
        "sponsorship": "Moderate",
        "notes": "Ireland's largest grocery distributor; operates deli and hot food production counters."
    },
    {
        "id": 6,
        "name": "Dalata Hotel Group (Clayton & Maldron)",
        "category": "Hotel & Event Food Operations",
        "hr_email": "careers@dalatahotelgroup.com",
        "portal_url": "https://dalatahotelgroup.com/careers/",
        "locations": "Dublin, Cork, Galway, Limerick, Wexford",
        "sponsorship": "High (Largest hotel operator in Ireland)",
        "notes": "Runs high-volume hotel banqueting, room service, and restaurant dining."
    },
    {
        "id": 7,
        "name": "Circle K Ireland",
        "category": "Forecourt Convenience & Dining",
        "hr_email": "careers@circlekeurope.com",
        "portal_url": "https://www.circlek.ie/careers",
        "locations": "Over 400 service hubs across Ireland",
        "sponsorship": "Moderate to High",
        "notes": "Major forecourt dining operator with extensive hot food, deli, and coffee counter operations."
    },
    {
        "id": 8,
        "name": "Eddie Rocket's Ireland",
        "category": "American Diner & QSR",
        "hr_email": "careers@eddierockets.ie",
        "portal_url": "https://eddierockets.ie/careers",
        "locations": "Dublin, Kildare, Bray, Nationwide",
        "sponsorship": "Moderate to High",
        "notes": "Iconic retro diner chain with 40+ locations specializing in commercial fryers and grill velocity."
    },
    {
        "id": 9,
        "name": "Boojum Ireland",
        "category": "Fast-Casual Mexican",
        "hr_email": "careers@boojummex.com",
        "portal_url": "https://www.boojummex.com/careers",
        "locations": "Dublin, Galway, Cork, Limerick, Belfast",
        "sponsorship": "Moderate to High",
        "notes": "High-velocity burrito assembly lines; values speed, food safety, and crew energy."
    },
    {
        "id": 10,
        "name": "Chopped (The Healthy Food Co.)",
        "category": "Fast-Casual Healthy Food",
        "hr_email": "info@chopped.ie",
        "portal_url": "https://www.chopped.ie/careers/",
        "locations": "Dublin, Galway, Nationwide",
        "sponsorship": "Moderate",
        "notes": "Over 50 franchised salad and wrap bars across Ireland and travel hubs."
    },
    {
        "id": 11,
        "name": "Sodexo Ireland",
        "category": "Corporate & Contract Dining",
        "hr_email": "hr.ireland@sodexo.com",
        "portal_url": "https://ie.sodexo.com/careers",
        "locations": "Dublin, Shannon, Cork, Nationwide",
        "sponsorship": "High (Global Enterprise)",
        "notes": "Manages enterprise canteens, university dining, and high-volume corporate food services."
    },
    {
        "id": 12,
        "name": "Compass Group Ireland",
        "category": "Contract Catering & Foodservice",
        "hr_email": "careers@compass-group.ie",
        "portal_url": "https://www.compass-group.ie/careers/",
        "locations": "Dublin, Cork, Galway, Limerick",
        "sponsorship": "High (Global Catering Leader)",
        "notes": "Ireland's largest food and support services provider with hundreds of managed sites."
    },
    {
        "id": 13,
        "name": "Aramark Ireland",
        "category": "Hospitality & Dining Management",
        "hr_email": "careers@aramark.ie",
        "portal_url": "https://careers.aramark.com/",
        "locations": "Dublin, Cork, Galway, Kildare",
        "sponsorship": "High (Active permit sponsor)",
        "notes": "Operates high-volume dining, Avoca cafés, and institutional foodservice operations."
    },
    {
        "id": 14,
        "name": "KSG (Kylemore Services Group)",
        "category": "Hospitality & Restaurant Group",
        "hr_email": "recruitment@ksg.ie",
        "portal_url": "https://www.ksg.ie/careers",
        "locations": "Dublin, Cork, Limerick, Nationwide",
        "sponsorship": "High (Irish-owned catering giant)",
        "notes": "120+ restaurant and catering locations across Irish hospitals, colleges, and business parks."
    },
    {
        "id": 15,
        "name": "BaxterStorey Ireland",
        "category": "Premium Workplace Hospitality",
        "hr_email": "irelandcareers@baxterstorey.com",
        "portal_url": "https://baxterstorey.com/careers",
        "locations": "Dublin Silicon Docks & Tech Hubs",
        "sponsorship": "High (Tech campus catering)",
        "notes": "Runs dining services for top tech multinationals in Dublin; loves tech-savvy hospitality supervisors."
    },
    {
        "id": 16,
        "name": "Leonardo Hotels Ireland (Jurys Inn)",
        "category": "Hotel Operations",
        "hr_email": "recruitment@leonardohotels.co.uk",
        "portal_url": "https://www.leonardohotels.co.uk/careers",
        "locations": "Dublin (Christchurch, Parnell, Custom House), Galway, Cork",
        "sponsorship": "High",
        "notes": "Central city business hotels with high-occupancy breakfast and conference dining."
    },
    {
        "id": 17,
        "name": "Louis Fitzgerald Group",
        "category": "Pub, Hotel & Restaurant Group",
        "hr_email": "hr@louisfitzgerald.com",
        "portal_url": "https://louisfitzgerald.com/careers/",
        "locations": "Dublin & Kildare (Joel's Restaurant, Louis Fitzgerald Hotel, Stag's Head)",
        "sponsorship": "Moderate to High",
        "notes": "One of Ireland's largest family-owned pub and restaurant empires."
    },
    {
        "id": 18,
        "name": "PREM Group Ireland",
        "category": "Hospitality Management",
        "hr_email": "careers@premgroup.com",
        "portal_url": "https://premgroup.com/careers/",
        "locations": "Dublin, Kilkenny, Waterford",
        "sponsorship": "Moderate to High",
        "notes": "Operates premier serviced apartments, hotels, and restaurant venues across Ireland."
    },
    {
        "id": 19,
        "name": "BWG Foods (Spar, Mace, Londis)",
        "category": "Retail Foodservice & Wholesale",
        "hr_email": "careers@bwg.ie",
        "portal_url": "https://bwgfoods.ie/careers/",
        "locations": "Dublin, Nationwide",
        "sponsorship": "Moderate",
        "notes": "Operates over 1,000 stores with hot food delis and bakery operations."
    },
    {
        "id": 20,
        "name": "Dunnes Stores",
        "category": "Supermarket & Food Hall",
        "hr_email": "careers@dunnesstores.com",
        "portal_url": "https://www.dunnesstores.com/careers",
        "locations": "Nationwide flagship stores",
        "sponsorship": "Moderate",
        "notes": "Premium food halls, deli counters, and Café Sol chains."
    },
    {
        "id": 21,
        "name": "Tesco Ireland",
        "category": "Retail & Food Operations",
        "hr_email": "careers@tesco.ie",
        "portal_url": "https://www.tesco.ie/careers",
        "locations": "160+ locations across Ireland",
        "sponsorship": "Moderate to High",
        "notes": "Major shift leader and fresh food department team supervisor opportunities."
    },
    {
        "id": 22,
        "name": "Lidl Ireland",
        "category": "Discount Supermarket Operations",
        "hr_email": "jobs@lidl.ie",
        "portal_url": "https://jobs.lidl.ie/",
        "locations": "Nationwide (200+ stores)",
        "sponsorship": "Moderate to High",
        "notes": "Known for market-leading compensation and rigorous operational shift leadership."
    },
    {
        "id": 23,
        "name": "Aldi Ireland",
        "category": "Retail Store Management",
        "hr_email": "recruitment@aldi.ie",
        "portal_url": "https://www.aldirecruitment.ie/",
        "locations": "Nationwide (150+ stores)",
        "sponsorship": "Moderate to High",
        "notes": "Hires dynamic shift managers capable of fast stock turnaround and team efficiency."
    },
    {
        "id": 24,
        "name": "Insomnia Coffee Company",
        "category": "Coffee Shop & Quick Food",
        "hr_email": "jobs@insomnia.ie",
        "portal_url": "https://www.insomnia.ie/careers",
        "locations": "170+ stores across Ireland and UK",
        "sponsorship": "Moderate",
        "notes": "High transaction volume, sandwich prep, and store supervisor roles."
    },
    {
        "id": 25,
        "name": "Five Guys Ireland",
        "category": "Fast-Casual Burger & Fries",
        "hr_email": "careers@fiveguys.ie",
        "portal_url": "https://www.fiveguys.ie/careers",
        "locations": "Dublin (Dundrum, George's St, Swords), Belfast",
        "sponsorship": "Moderate to High",
        "notes": "Heavy focus on fresh potato frying, HACCP guidelines, and fast kitchen lines."
    },
    {
        "id": 26,
        "name": "Nando's Ireland",
        "category": "Casual Dining Flame-Grilled",
        "hr_email": "recruitment@nandos.ie",
        "portal_url": "https://www.nandos.ie/careers",
        "locations": "Dublin (Dundrum, Mary St, Dun Laoghaire), Cork",
        "sponsorship": "Moderate to High",
        "notes": "Known for stellar hospitality culture, assistant manager career paths, and crew coaching."
    },
    {
        "id": 27,
        "name": "Wagamama Ireland",
        "category": "Pan-Asian Casual Dining",
        "hr_email": "careers@wagamama.ie",
        "portal_url": "https://www.wagamama.ie/careers",
        "locations": "Dublin (South King St, Blanchardstown, Dundrum)",
        "sponsorship": "Moderate",
        "notes": "High speed open-kitchen dining, precision cooking line coordination."
    },
    {
        "id": 28,
        "name": "Milano / PizzaExpress Ireland",
        "category": "Pizzeria & Italian Dining",
        "hr_email": "careers@milano.ie",
        "portal_url": "https://www.milano.ie/careers",
        "locations": "Dublin, Cork, Limerick, Ennis",
        "sponsorship": "Moderate",
        "notes": "Established dining brand with 15+ prime restaurants across Ireland."
    },
    {
        "id": 29,
        "name": "The Mercantile Group",
        "category": "Hospitality & Venue Entertainment",
        "hr_email": "careers@mercantilegroup.ie",
        "portal_url": "https://mercantilegroup.ie/careers/",
        "locations": "Dublin City Center (Café en Seine, Nolita, Whelan's, Opium)",
        "sponsorship": "Moderate to High",
        "notes": "High-volume city center hospitality venues with full restaurant dining."
    },
    {
        "id": 30,
        "name": "The Doyle Collection",
        "category": "Luxury Boutique Hotels",
        "hr_email": "recruitment@doylecollection.com",
        "portal_url": "https://www.doylecollection.com/careers",
        "locations": "Dublin (The Westbury, The Croke Park)",
        "sponsorship": "Moderate to High",
        "notes": "Iconic luxury hotels in Dublin with world-class restaurant operations."
    },
    {
        "id": 31,
        "name": "Talbot Hotel Collection",
        "category": "Hotels & Dining",
        "hr_email": "careers@talbothotelcollection.ie",
        "portal_url": "https://www.talbothotelcollection.ie/careers.html",
        "locations": "Wexford, Dublin (Stillorgan), Carlow, Clonmel",
        "sponsorship": "Moderate to High",
        "notes": "Prominent Irish hotel group with busy food and beverage operations."
    },
    {
        "id": 32,
        "name": "Hastings Hotels",
        "category": "Hotels & Luxury Resorts",
        "hr_email": "careers@hastingshotels.com",
        "portal_url": "https://www.hastingshotels.com/careers",
        "locations": "Northern Ireland & Border Counties (Europa, Grand Central)",
        "sponsorship": "Moderate to High",
        "notes": "Seven prestigious hotels with massive event and dining volume."
    },
    {
        "id": 33,
        "name": "iNua Hospitality Collection",
        "category": "Regional Hotel Operator",
        "hr_email": "careers@inua.ie",
        "portal_url": "https://inua.ie/careers/",
        "locations": "Cork, Limerick, Athlone, Sligo, Killarney (Radisson Blu & Muckross Park)",
        "sponsorship": "High",
        "notes": "Ireland's largest regional hotel operator, actively hiring international hospitality talent."
    },
    {
        "id": 34,
        "name": "Choice Hotel Group Ireland",
        "category": "Hotel & Leisure Group",
        "hr_email": "jobs@choicehotelgroup.ie",
        "portal_url": "https://www.choicehotelgroup.ie/careers",
        "locations": "Galway, Dublin, Ennis, Clare",
        "sponsorship": "Moderate",
        "notes": "Owns The G Hotel Galway, Hotel Meyrick, and Hotel Woodstock."
    },
    {
        "id": 35,
        "name": "Griffin Hotel Group",
        "category": "Destination Resorts & Spas",
        "hr_email": "hr@griffinhotels.com",
        "portal_url": "https://www.griffinhotels.com/careers.html",
        "locations": "Wexford (Monart Destination Spa, Ferrycarrig Hotel)",
        "sponsorship": "Moderate to High",
        "notes": "Award-winning dining and restaurant operations with strict quality benchmarks."
    },
    {
        "id": 36,
        "name": "Windward Management",
        "category": "Hotel Asset & Operations Management",
        "hr_email": "careers@windward.ie",
        "portal_url": "https://www.windward.ie/careers",
        "locations": "Dublin Airport, Cork, Belfast",
        "sponsorship": "High",
        "notes": "Manages Radisson Blu Dublin Airport, Harvey's Point, and high-turnover airport transit hotels."
    },
    {
        "id": 37,
        "name": "Pembroke Hospitality Ireland",
        "category": "Hotel & Resort Operators",
        "hr_email": "info@pembrokehospitality.com",
        "portal_url": "https://pembrokehospitality.com/",
        "locations": "Dublin, Nationwide",
        "sponsorship": "Moderate",
        "notes": "Operates luxury boutique and mid-scale hotels across Ireland."
    },
    {
        "id": 38,
        "name": "Fallon & Byrne Dublin",
        "category": "Food Hall, Deli & Restaurant",
        "hr_email": "careers@fallonandbyrne.com",
        "portal_url": "https://www.fallonandbyrne.com/careers",
        "locations": "Exchequer Street, Dublin City Center",
        "sponsorship": "Moderate",
        "notes": "Renowned food hall, artisan deli, and 100-seat restaurant in central Dublin."
    },
    {
        "id": 39,
        "name": "Avoca Ireland",
        "category": "Artisan Food, Retail & Cafés",
        "hr_email": "careers@avoca.com",
        "portal_url": "https://www.avoca.com/en/careers",
        "locations": "Kilmacanogue, Rathcoole, Dublin City, Dunboyne",
        "sponsorship": "Moderate to High",
        "notes": "13 luxury food stores, cafés, and bakeries under the Aramark umbrella."
    },
    {
        "id": 40,
        "name": "Butlers Chocolate Cafés",
        "category": "Specialty Café & Confectionery",
        "hr_email": "jobs@butlerschocolates.com",
        "portal_url": "https://www.butlerschocolates.com/en/careers",
        "locations": "Dublin (Grafton St, Henry St, Airport), Cork, Galway, Limerick",
        "sponsorship": "Moderate",
        "notes": "25+ busy chocolate cafés in Ireland, including Dublin Airport terminals."
    },
    {
        "id": 41,
        "name": "Costa Coffee Ireland (MBCC Foods)",
        "category": "High-Volume Café Franchise",
        "hr_email": "careers@mbccfoodsireland.com",
        "portal_url": "https://mbccfoodsireland.com/careers/",
        "locations": "115+ stores across Ireland",
        "sponsorship": "Moderate",
        "notes": "Master franchisee for Costa Coffee in Ireland; values shift coaches and velocity."
    },
    {
        "id": 42,
        "name": "Starbucks Ireland (Entertainment Enterprises)",
        "category": "Specialty Coffee & QSR",
        "hr_email": "careers@starbucks.ie",
        "portal_url": "https://www.starbucks.ie/careers",
        "locations": "Dublin, Cork, Galway, Nationwide",
        "sponsorship": "Moderate",
        "notes": "High customer velocity, inventory controls, and shift supervision."
    },
    {
        "id": 43,
        "name": "Maxol Group Ireland",
        "category": "Forecourt Convenience & Dining",
        "hr_email": "careers@maxol.ie",
        "portal_url": "https://www.maxol.ie/careers",
        "locations": "240+ service stations across Ireland",
        "sponsorship": "Moderate to High",
        "notes": "Operates Maxol Deli and Rosa Coffee dining counters across the island."
    },
    {
        "id": 44,
        "name": "Carlton Hotel Group",
        "category": "Airport & City Hotels",
        "hr_email": "careers@carlton.ie",
        "portal_url": "https://www.carlton.ie/careers/",
        "locations": "Dublin Airport, Blanchardstown",
        "sponsorship": "Moderate to High",
        "notes": "High turnaround airport hospitality with continuous dining and banqueting operations."
    },
    {
        "id": 45,
        "name": "Fitzers Catering Ireland",
        "category": "Event & Stadium Catering",
        "hr_email": "careers@fitzerscatering.ie",
        "portal_url": "https://fitzerscatering.ie/careers/",
        "locations": "Croke Park, Convention Centre Dublin, Major Stadia",
        "sponsorship": "Moderate to High",
        "notes": "Handles massive 50,000+ guest stadium catering events with extreme fryer/kitchen velocity."
    },
    {
        "id": 46,
        "name": "Fresh The Good Food Market",
        "category": "Urban Food Market & Deli",
        "hr_email": "jobs@freshthegoodfoodmarket.ie",
        "portal_url": "https://freshthegoodfoodmarket.ie/careers/",
        "locations": "Dublin City (Grand Canal, Camden St, IFSC, Smithfield)",
        "sponsorship": "Moderate",
        "notes": "Specialty deli, hot food bar, and gourmet food retail in Dublin tech districts."
    },
    {
        "id": 47,
        "name": "Clayton Hotels Ireland",
        "category": "Business & Conference Hotels",
        "hr_email": "recruitment@claytonhotels.com",
        "portal_url": "https://www.claytonhotels.com/careers/",
        "locations": "Dublin (Ballsbridge, Burlington, Cardiff Lane), Cork, Galway",
        "sponsorship": "High (Part of Dalata)",
        "notes": "Extensive breakfast buffet, fine dining, and conference food operations."
    },
    {
        "id": 48,
        "name": "Maldron Hotels Ireland",
        "category": "Family & Travel Hospitality",
        "hr_email": "recruitment@maldronhotels.com",
        "portal_url": "https://www.maldronhotels.com/careers/",
        "locations": "Dublin Airport, Newlands Cross, Pearse St, Cork, Limerick",
        "sponsorship": "High (Part of Dalata)",
        "notes": "Grain & Grill restaurants, high volume dining and guest speed."
    },
    {
        "id": 49,
        "name": "Zumo Fresh Juice Bars",
        "category": "Juice, Smoothies & Healthy QSR",
        "hr_email": "careers@zumo.ie",
        "portal_url": "https://zumo.ie/",
        "locations": "Dublin, Cork, Shopping Centers Nationwide",
        "sponsorship": "Moderate",
        "notes": "Fast-paced fresh beverage and health snack counter service."
    },
    {
        "id": 50,
        "name": "Tolteca Mexican Style Grill",
        "category": "Fast-Casual Mexican Grill",
        "hr_email": "careers@tolteca.ie",
        "portal_url": "https://tolteca.ie/",
        "locations": "Dublin (Baggot St, Suffolk St, Rathmines)",
        "sponsorship": "Moderate",
        "notes": "Busy assembly-line Mexican grill in prominent student and office zones."
    }
]
