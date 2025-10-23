import { Children } from "react"



export const AI_prop = [
{lang:'Afrikaans',lcode:'af',lcodex:'af-ZA',name: {male:'	af-ZA-Standard-A',female: 'af-ZA-Standard-A'}}, 
{lang:'Arabic',lcode:'ar',lcodex:'ar-XA',name: {male:'ar-XA-Chirp3-HD-Orus',female: 'ar-XA-Chirp3-HD-Leda'}}, 
{lang:'Bulgarian',lcode:'bg',lcodex:'bg-BG',name: {male:'',female: 'bg-BG-Standard-B'}}, 
{lang:'Mandarin',lcode: 'zh',lcodex: 'cmn-CN',name: {male: 'cmn-CN-Chirp3-HD-Umbriel',female: 'cmn-CN-Chirp3-HD-Zephyr'}}, 
{lang:'Czech',lcode: 'cs',lcodex: 'cs-CZ',name: {male: '',female: 'cs-CZ-Standard-B'}},
{lang:'Danish',lcode:'da',lcodex:'da-DK',name: {male:'da-DK-Chirp3-HD-Algieba',female: 'da-DK-Chirp3-HD-Autonoe'}}, 
{lang:'Dutch',lcode: 'nl',lcodex: 'nl-NL',name: {male: 'nl-NL-Chirp3-HD-Zubenelgenubi',female: 'nl-NL-Chirp3-HD-Vindemiatrix'}},
{lang:'English',lcode:'en',lcodex:'en-US',name: {male:'en-US-Chirp-HD-D',female: 'en-US-Chirp3-HD-Aoede'}}, 
{lang:'Filipino',lcode:'fil',lcodex:'fil-PH',name: {male:'	fil-PH-Standard-D',female: 'fil-PH-Standard-B'}}, 
{lang:'Finnish',lcode: 'fi',lcodex: 'fi-FI',name: {male: 'fi-FI-Chirp3-HD-Algenib',female: 'fi-FI-Chirp3-HD-Achernar'}},
{lang:'French',lcode:'fr',lcodex:'fr-FR',name: {male:'fr-FR-Chirp3-HD-Fenrir',female:'fr-FR-Chirp3-HD-Gacrux'}}, 
{lang:'German',lcode:'de',lcodex:'de-DE',name: {male:'de-DE-Chirp-HD-D',female: 'de-DE-Chirp-HD-O'}}, 
{lang:'Hausa',lcode: 'ha',lcodex: '',name: {male: '',female: ''}},
{lang:'Hindi',lcode:'hi',lcodex:'bn-IN',name: {male:'bn-IN-Chirp3-HD-Sadaltager',female: 'bn-IN-Chirp3-HD-Sulafat'}}, 
{lang:'Igbo',lcode: 'ig',lcodex: '',name: {male: '',female: ''}},
{lang:'Indonesian',lcode:'id',lcodex:'id-ID',name: {male:'id-ID-Chirp3-HD-Achird',female: 'id-ID-Chirp3-HD-Achernar'}}, 
{lang:'Irish',lcode:'ga',lcodex: '',name: {male: '',female: ''}},
{lang:'Italian',lcode:'it',lcodex:'it-IT',name: {male:'it-IT-Chirp3-HD-Algenib',female: 'it-IT-Chirp-HD-F'}}, 
{lang:'Japanese',lcode: 'ja',lcodex: 'ja-JP',name: {male: 'ja-JP-Chirp3-HD-Charon',female: 'ja-JP-Chirp3-HD-Aoede'}},
{lang:'Korean',lcode:'ko',lcodex:'ko-KR',name: {male:'ko-KR-Chirp3-HD-Umbriel',female: 'ko-KR-Chirp3-HD-Sulafat'}}, 
{lang:'Polish',lcode: 'pl',lcodex: 'pl-PL',name: {male: 'pl-PL-Chirp3-HD-Algenib',female: 'pl-PL-Chirp3-HD-Achernar'}},
{lang:'Portuguese',lcode:'pt',lcodex:'pt-PT',name: {male:'pt-PT-Standard-F',female: 'pt-PT-Standard-E'}}, 
{lang:'Romanian',lcode: 'ro',lcodex: 'ro-RO',name: {male:'',female: 'ro-RO-Standard-B'}},
{lang:'Russian',lcode:'ru',lcodex:'ru-RU',name: {male:'ru-RU-Chirp3-HD-Fenrir',female: 'ru-RU-Chirp3-HD-Aoede'}}, 
{lang:'Spanish',lcode: 'es',lcodex: 'es-ES',name: {male: 'es-ES-Chirp3-HD-Achird',female: 'es-ES-Chirp-HD-O'}},
{lang:'Swedish',lcode:'sv',lcodex:'sv-SE',name: {male:'sv-SE-Chirp3-HD-Achird',female: 'sv-SE-Chirp3-HD-Achernar'}}, 
{lang:'Turkish',lcode: 'tk',lcodex: 'tr-TR',name: {male: 'tr-TR-Chirp3-HD-Algieba',female: 'tr-TR-Chirp3-HD-Achernar'}},
{lang:'Ukrainian',lcode:'uk',lcodex:'uk-UA',name: {male:'uk-UA-Chirp3-HD-Algenib',female: 'uk-UA-Chirp3-HD-Achernar'}}, 
{lang:'Yoruba',lcode: 'yo',lcodex: '',name: {male: '',female: ''}},

]















export const data = [
{name: 'NIGERIA', icon: 'ng', lcodex:'en-US',female: 'en-US-Chirp3-HD-Aoede', male:'en-US-Chirp-HD-D'},
{name: 'UNITED STATES OF AMERICA', icon: 'us', lcodex:'en-US', female: 'en-US-Chirp3-HD-Aoede', male:'en-US-Chirp-HD-D'},
{name: 'UNITED KINGDOM', icon: 'gb', lcodex:'en-GB', female:'en-GB-Chirp3-HD-Zephyr', male:'en-GB-Chirp3-HD-Charon'},
{name: 'UNITED ARAB EMIRATES', icon: 'ae', lcodex:'ar-XA', female: 'ar-XA-Chirp3-HD-Leda',male:'ar-XA-Chirp3-HD-Orus' },
{name: 'ARGENTINA', icon: 'ar', lcodex: 'es-ES', female: 'es-ES-Chirp-HD-O', male: 'es-ES-Chirp3-HD-Achird'},
{name: 'AUSTRALIA', icon: 'au', lcodex:'en-AU', female:'en-AU-News-F', male:'en-AU-Chirp3-HD-Iapetus'},
{name: 'BELGIUM', icon: 'be', lcodex: 'nl-BE', female:'nl-BE-Chirp3-HD-Despina', male:'nl-BE-Chirp3-HD-Alnilam'},
{name: 'BRAZIL', icon: 'br', lcodex:'pt-BR', female:'pt-BR-Chirp3-HD-Aoede', male:'pt-BR-Chirp3-HD-Sadaltager'},
{name: 'CAMEROON', icon: 'cm', lcodex:'fr-FR', female: 'fr-FR-Chirp3-HD-Gacrux', male:'fr-FR-Chirp3-HD-Fenrir'},
{name: 'CANADA', icon: 'ca', lcodex:'fr-CA', female:'fr-CA-Chirp3-HD-Achernar', male:'fr-CA-Chirp3-HD-Iapetus'},
{name: 'CHINA', icon: 'cn', lcodex:'yue-HK', female:'yue-HK-Standard-C', male:'yue-HK-Standard-B'},
{name: 'COTE D IVOIRE', icon: 'ci', lcodex:'fr-FR', female:'fr-FR-Chirp3-HD-Gacrux', male:'fr-FR-Chirp3-HD-Fenrir'},
{name: 'EGYPT', icon: 'eg', lcodex:'ar-XA', female: 'ar-XA-Chirp3-HD-Leda', male:'ar-XA-Chirp3-HD-Orus'},
{name: 'FRANCE', icon: 'fr', lcodex:'fr-FR', female: 'fr-FR-Chirp3-HD-Gacrux', male:'fr-FR-Chirp3-HD-Fenrir'},
{name: 'GABON', icon: 'ga', lcodex:'fr-FR', female: 'fr-FR-Chirp3-HD-Gacrux', male:'fr-FR-Chirp3-HD-Fenrir'},
{name: 'GERMANY', icon: 'de', lcodex:'de-DE', female: 'de-DE-Chirp-HD-O', male:'de-DE-Chirp-HD-D'},
{name: 'GHANA', icon: 'gh', lcodex:'en-US', female: 'en-US-Chirp3-HD-Aoede', male:'en-US-Chirp-HD-D'},
{name: 'INDIA', icon: 'in', lcodex:'bn-IN', female: 'bn-IN-Chirp3-HD-Sulafat', male:'bn-IN-Chirp3-HD-Sadaltager'},
{name: 'ISRAEL', icon: 'il', lcodex:'he-IL', female:'	he-IL-Standard-A', male:'he-IL-Standard-D	'},
{name: 'ITALY', icon: 'it', lcodex:'it-IT', female: 'it-IT-Chirp-HD-F', male:'it-IT-Chirp3-HD-Algenib'},
{name: 'JAMAICA', icon: 'jm', lcodex:'en-US', female: 'en-US-Chirp3-HD-Aoede', male:'en-US-Chirp-HD-D'},
{name: 'JAPAN', icon: 'jp', lcodex: 'ja-JP', female: 'ja-JP-Chirp3-HD-Aoede', male: 'ja-JP-Chirp3-HD-Charon'},
{name: 'KENYA', icon: 'ke', lcodex:'en-US', female: 'en-US-Chirp3-HD-Aoede', male:'en-US-Chirp-HD-D'},
{name: 'MEXICO', icon: 'mx', lcodex: 'es-ES', female: 'es-ES-Chirp-HD-O', male: 'es-ES-Chirp3-HD-Achird'},
{name: 'MONACO', icon: 'mc', lcodex:'fr-FR', female: 'fr-FR-Chirp3-HD-Gacrux', male:'fr-FR-Chirp3-HD-Fenrir'},
{name: 'MOROCCO', icon: 'ma', lcodex:'ar-XA', female: 'ar-XA-Chirp3-HD-Leda', male:'ar-XA-Chirp3-HD-Orus'},
{name: 'NETHERLANDS', icon: 'nl', lcodex: 'nl-NL', female: 'nl-NL-Chirp3-HD-Vindemiatrix', male:'nl-NL-Chirp3-HD-Charon'},
{name: 'NORWAY', icon: 'no', lcodex:'nb-NO', female:'nb-NO-Chirp3-HD-Pulcherrima', male:'nb-NO-Chirp3-HD-Umbriel'},
{name: 'PORTUGAL', icon: 'pt', lcodex:'pt-PT', female: 'pt-PT-Standard-E', male:'pt-PT-Standard-F'},
{name: 'QATAR', icon: 'qa', lcodex:'xr-XA', female: 'ar-XA-Chirp3-HD-Leda', male:'ar-XA-Chirp3-HD-Orus'},
{name: 'RUSSIA', icon: 'ru', lcodex:'ru-RU', female:'ru-RU-Chirp3-HD-Aoede', male:'ru-RU-Chirp3-HD-Fenrir'},
{name: 'PHILIPPINES', icon: 'ph', lcodex:'fil-PH', female: 'fil-PH-Standard-B', male:'	fil-PH-Standard-D'},
{name: 'SAUDI ARABIA', icon: 'sa', lcodex:'ar-XA', female: 'ar-XA-Chirp3-HD-Leda', male:'ar-XA-Chirp3-HD-Orus'},
{name: 'SENEGAL', icon: 'sn', lcodex:'fr-FR', female: 'fr-FR-Chirp3-HD-Gacrux', male:'fr-FR-Chirp3-HD-Fenrir'},
{name: 'NEW ZEALAND', icon: 'nz', lcodex:'en-US', female: 'en-US-Chirp3-HD-Aoede', male:'en-US-Chirp-HD-D'},
{name: 'SINGAPORE', icon: 'sg', lcodex: '	ms-MY', female:'ms-MY-Standard-A', male:'	ms-MY-Standard-B'},
{name: 'SOUTH AFRICA', icon: 'za',lcodex:'af-ZA', female: 'af-ZA-Standard-A', male:'	af-ZA-Standard-A'},
{name: 'SPAIN', icon: 'es', lcodex: 'es-ES', female: 'es-ES-Chirp-HD-O', male: 'es-ES-Chirp3-HD-Achird'},
{name: 'SWEDEN', icon: 'se', lcodex:'sv-SE', female:'sv-SE-Chirp3-HD-Callirrhoe', male:'sv-SE-Chirp3-HD-Zubenelgenubi'},
{name: 'SWITZERLAND', icon: 'ch', lcodex:'fr-FR', female: 'fr-FR-Chirp3-HD-Gacrux', male:'fr-FR-Chirp3-HD-Fenrir'},
{name: 'TANZANIA', icon: 'tz', lcodex:'en-US', female: 'en-US-Chirp3-HD-Aoede', male:'en-US-Chirp-HD-D'},
{name: 'TOGO', icon: 'tg', lcodex:'fr-FR', female: 'fr-FR-Chirp3-HD-Gacrux', male:'fr-FR-Chirp3-HD-Fenrir'},
{name: 'UGANDA', icon: 'ug', lcodex:'en-US', female: 'en-US-Chirp3-HD-Aoede', male:'en-US-Chirp-HD-D'},
{name: 'ZIMBABWE', icon: 'zw', lcodex:'en-US', female: 'en-US-Chirp3-HD-Aoede', male:'en-US-Chirp-HD-D'},
{name: 'ZAMBIA', icon: 'zm', lcodex:'en-US', female: 'en-US-Chirp3-HD-Aoede', male:'en-US-Chirp-HD-D'},
{name: 'URUGUAY', icon: 'uy', lcodex: 'es-ES', female: 'es-ES-Chirp-HD-O', male: 'es-ES-Chirp3-HD-Achird'},
{name: 'UKRAINE', icon: 'ua', lcodex:'uk-UA', female:'uk-UA-Chirp3-HD-Achernar', male:'uk-UA-Chirp3-HD-Algenib'},
{name: 'THAILAND', icon: 'th', lcodex: 'th-TH', female:'th-TH-Chirp3-HD-Sulafat', male:'th-TH-Chirp3-HD-Zubenelgenubi'},
{name: 'SIERRA LEONE', icon: 'sl', lcodex:'en-US', female: 'en-US-Chirp3-HD-Aoede', male:'en-US-Chirp-HD-D'},

]




export const Days = [
{label:'01', value:'01'},
{label:'02', value:'02'},
{label:'03', value:'03'},
{label:'04', value:'04'},
{label:'05', value:'05'},
{label:'06', value:'06'},
{label:'07', value:'07'},
{label:'08', value:'08'},
{label:'09', value:'09'},
{label:'10', value:'10'},
{label:'11', value:'11'},
{label:'12', value:'12'},
{label:'13', value:'13'},
{label:'14', value:'14'},
{label:'15', value:'15'},
{label:'16', value:'16'},
{label:'17', value:'17'},
{label:'18', value:'18'},
{label:'19', value:'19'},
{label:'20', value:'20'},
{label:'21', value:'21'},
{label:'22', value:'22'},
{label:'23', value:'23'},
{label:'24', value:'24'},
{label:'25', value:'25'},
{label:'26', value:'26'},
{label:'27', value:'27'},
{label:'28', value:'28'},
{label:'29', value:'29'},
{label:'30', value:'30'},
{label:'31', value:'31'},
]



export const Months = [
{label:'01', value:'01'},
{label:'02', value:'02'},
{label:'03', value:'03'},
{label:'04', value:'04'},
{label:'05', value:'05'},
{label:'06', value:'06'},
{label:'07', value:'07'},
{label:'08', value:'08'},
{label:'09', value:'09'},
{label:'10', value:'10'},
{label:'11', value:'11'},
{label:'12', value:'12'},
]


export const Years = [
{label:'2020', value:'2020'},
{label:'2021', value:'2021'},
{label:'2022', value:'2022'},
{label:'2023', value:'2023'},
{label:'2024', value:'2024'},
{label:'2025', value:'2025'},

]







export const myPrivacyPolicy = [

{

languages: [{ label:'English', value:"en"}, { label:'French', value:"fr"}, {label:'German', value:"de"}, { label:'Spanish',value:"es"}, { label:'Italian', value:"it"}, {label:'Dutch', value:"nl"}, {label:'Swedish', value:"sv"}],

region:"eu",

title:{
en: "This section covers privacy policies for EU residents under GDPR.This page informs users regarding our policies with the collection, use, and disclosure of Personal Information for those who choose to use our Service. At NEWSWORLD CORPORATION, the privacy of our customers, users of our services and their personal information is of importance to us.",

fr: "Cette section couvre les politiques de confidentialité pour les résidents de l'UE conformément au RGPD. Cette page informe les utilisateurs de nos politiques concernant la collecte, l'utilisation et la divulgation des informations personnelles pour ceux qui choisissent d'utiliser notre service. Chez NEWSWORLD CORPORATION, la confidentialité de nos clients, utilisateurs de nos services et de leurs informations personnelles est importante pour nous.",


de: "Dieser Abschnitt behandelt Datenschutzrichtlinien für EU-Bürger gemäß DSGVO.Diese Seite informiert die Nutzer über unsere Richtlinien zur Erhebung, Nutzung und Offenlegung personenbezogener Daten für diejenigen, die unseren Service nutzen. Bei NEWSWORLD CORPORATION ist der Schutz der Privatsphäre unserer Kunden, Nutzer unserer Dienste und ihrer persönlichen Daten für uns von Bedeutung.",


es: "Esta sección cubre las políticas de privacidad para residentes de la UE según el RGPD.Esta página informa a los usuarios sobre nuestras políticas con respecto a la recopilación, el uso y la divulgación de información personal para aquellos que eligen usar nuestro servicio. En NEWSWORLD CORPORATION, la privacidad de nuestros clientes, usuarios de nuestros servicios y su información personal es importante para nosotros.",


it: "Questa sezione riguarda le politiche sulla privacy per i residenti dell'UE secondo il GDPR.Questa pagina informa gli utenti sulle nostre politiche relative alla raccolta, all'uso e alla divulgazione delle informazioni personali per coloro che scelgono di utilizzare il nostro servizio. In NEWSWORLD CORPORATION, la privacy dei nostri clienti, utenti dei nostri servizi e delle loro informazioni personali è importante per noi.",


nl: "Deze sectie behandelt privacybeleid voor EU-bewoners volgens de AVG.Deze pagina informeert gebruikers over ons beleid met betrekking tot het verzamelen, gebruiken en bekendmaken van persoonlijke informatie voor degenen die ervoor kiezen onze dienst te gebruiken. Bij NEWSWORLD CORPORATION is de privacy van onze klanten, gebruikers van onze diensten en hun persoonlijke gegevens belangrijk voor ons.",


sv: "Denna sektion omfattar sekretesspolicy för EU-invånare enligt GDPR. Denna sida informerar användare om våra policys för insamling, användning och utlämning av personlig information för dem som väljer att använda vår tjänst. På NEWSWORLD CORPORATION är våra kunders, användares och deras personuppgifters integritet viktig för oss."
},

dataCollect:{
en: "We collect personal information that you provide to us voluntarily, such as name, email, and preferences.",
fr: "Nous collectons les informations personnelles que vous nous fournissez volontairement, telles que le nom, l'e-mail et les préférences.",
de: "Wir sammeln personenbezogene Daten, die Sie uns freiwillig zur Verfügung stellen, wie Name, E-Mail und Präferenzen.",
es: "Recopilamos información personal que usted nos proporciona voluntariamente, como nombre, correo electrónico y preferencias.",
it: "Raccogliamo informazioni personali che ci fornisci volontariamente, come nome, e-mail e preferenze.",
nl: "We verzamelen persoonlijke gegevens die u vrijwillig aan ons verstrekt, zoals naam, e-mail en voorkeuren.",
sv: "Vi samlar in personlig information som du frivilligt tillhandahåller, såsom namn, e-post och preferenser."

},

dataUsage:{

en: "Your information is used to improve our services, personalize content, and communicate with you.",
fr: "Vos informations sont utilisées pour améliorer nos services, personnaliser le contenu et communiquer avec vous.",
de: "Ihre Informationen werden verwendet, um unsere Dienste zu verbessern, Inhalte zu personalisieren und mit Ihnen zu kommunizieren.",
es: "Su información se utiliza para mejorar nuestros servicios, personalizar contenido y comunicarse con usted.",
it: "Le tue informazioni vengono utilizzate per migliorare i nostri servizi, personalizzare i contenuti e comunicare con te.",
nl: "Uw informatie wordt gebruikt om onze diensten te verbeteren, inhoud te personaliseren en met u te communiceren.",
sv: "Din information används för att förbättra våra tjänster, anpassa innehåll och kommunicera med dig."

},

dataSharing:{
en: "We do not share your personal data with third parties without your consent, except as required by law.",
fr: "Nous ne partageons pas vos données personnelles avec des tiers sans votre consentement, sauf si la loi l'exige.",
de: "Wir geben Ihre persönlichen Daten nicht ohne Ihre Zustimmung an Dritte weiter, außer wenn dies gesetzlich vorgeschrieben ist.",
es: "No compartimos sus datos personales con terceros sin su consentimiento, excepto cuando lo requiera la ley.",
it: "Non condividiamo i tuoi dati personali con terze parti senza il tuo consenso, salvo se richiesto dalla legge.",
nl: "We delen uw persoonlijke gegevens niet met derden zonder uw toestemming, behalve indien wettelijk verplicht.",
sv: "Vi delar inte dina personuppgifter med tredje part utan ditt samtycke, förutom när lagen kräver det."
},

userRights:{
en: "Under GDPR, you have the right to access, correct, or request deletion of your data.",
fr: "En vertu du RGPD, vous avez le droit d'accéder, de corriger ou de demander la suppression de vos données.",
de: "Nach der DSGVO haben Sie das Recht, auf Ihre Daten zuzugreifen, diese zu korrigieren oder deren Löschung zu verlangen.",
es: "Bajo el RGPD, usted tiene derecho a acceder, corregir o solicitar la eliminación de sus datos.",
it: "Ai sensi del GDPR, hai il diritto di accedere, correggere o richiedere la cancellazione dei tuoi dati.",
nl: "Onder de AVG hebt u het recht om toegang te krijgen tot, correcties aan te brengen in of verwijdering van uw gegevens te verzoeken.",
sv: "Enligt GDPR har du rätt att få tillgång till, korrigera eller begära radering av dina uppgifter."
},

cookies:{
en: "We use cookies and similar tracking technologies to enhance user experience, analyze usage, and deliver personalized content and advertisements.",
fr: "Nous utilisons des cookies et des technologies de suivi similaires pour améliorer l'expérience utilisateur, analyser l'utilisation et fournir un contenu et des publicités personnalisés.",
de: "Wir verwenden Cookies und ähnliche Tracking-Technologien, um die Benutzererfahrung zu verbessern, die Nutzung zu analysieren und personalisierte Inhalte und Werbung bereitzustellen.",
es: "Utilizamos cookies y tecnologías de seguimiento similares para mejorar la experiencia del usuario, analizar el uso y ofrecer contenido y anuncios personalizados.",
it: "Utilizziamo cookie e tecnologie di tracciamento simili per migliorare l'esperienza dell'utente, analizzare l'utilizzo e fornire contenuti e pubblicità personalizzati.",
nl: "We gebruiken cookies en vergelijkbare trackingtechnologieën om de gebruikerservaring te verbeteren, het gebruik te analyseren en gepersonaliseerde inhoud en advertenties te leveren.",
sv: "Vi använder cookies och liknande spårningstekniker för att förbättra användarupplevelsen, analysera användning och leverera personligt innehåll och annonser."

},

dataRetent:{
en: "We store personal information only as long as necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law.",
fr: "Nous conservons les informations personnelles uniquement aussi longtemps que nécessaire aux fins définies dans cette politique de confidentialité, sauf si une période de conservation plus longue est requise ou autorisée par la loi.",
de: "Wir speichern personenbezogene Daten nur so lange, wie es für die in dieser Datenschutzrichtlinie festgelegten Zwecke erforderlich ist, es sei denn, eine längere Aufbewahrungsfrist ist gesetzlich vorgeschrieben oder erlaubt.",
es: "Almacenamos la información personal solo durante el tiempo necesario para los fines establecidos en esta Política de Privacidad, a menos que la ley requiera o permita un período de retención más largo.",
it: "Conserviamo le informazioni personali solo per il tempo necessario agli scopi indicati in questa Informativa sulla privacy, salvo che la legge richieda o consenta un periodo di conservazione più lungo.",
nl: "Wij bewaren persoonlijke gegevens alleen zolang als nodig is voor de doeleinden die in dit privacybeleid zijn uiteengezet, tenzij een langere bewaartermijn wettelijk vereist of toegestaan is.",
sv: "Vi lagrar personlig information endast så länge som är nödvändigt för de syften som anges i denna integritetspolicy, om inte en längre lagringsperiod krävs eller tillåts enligt lag."
},

security:{
en: "We implement technical, administrative, and physical safeguards designed to protect your information against unauthorized access, disclosure, alteration, or destruction.",
fr: "Nous mettons en œuvre des mesures de protection techniques, administratives et physiques conçues pour protéger vos informations contre tout accès, divulgation, altération ou destruction non autorisés.",
de: "Wir setzen technische, administrative und physische Schutzmaßnahmen ein, die darauf ausgelegt sind, Ihre Daten vor unbefugtem Zugriff, Offenlegung, Änderung oder Zerstörung zu schützen.",
es: "Implementamos medidas técnicas, administrativas y físicas diseñadas para proteger su información contra el acceso, la divulgación, la alteración o la destrucción no autorizados.",
it: "Applichiamo misure tecniche, amministrative e fisiche progettate per proteggere le tue informazioni da accessi, divulgazioni, alterazioni o distruzioni non autorizzate.",
nl: "Wij treffen technische, administratieve en fysieke beveiligingsmaatregelen om uw gegevens te beschermen tegen onbevoegde toegang, openbaarmaking, wijziging of vernietiging.",
sv: "Vi implementerar tekniska, administrativa och fysiska skyddsåtgärder utformade för att skydda din information mot obehörig åtkomst, avslöjande, ändring eller förstörelse."
},

children:{
en: "Our Service is not directed to individuals under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children.",
fr: "Notre service ne s'adresse pas aux personnes de moins de 13 ans (ou 16 ans dans certaines juridictions). Nous ne collectons pas sciemment d'informations personnelles auprès des enfants.",
de: "Unser Dienst richtet sich nicht an Personen unter 13 Jahren (oder 16 Jahren in bestimmten Gerichtsbarkeiten). Wir erheben wissentlich keine personenbezogenen Daten von Kindern.",
es: "Nuestro servicio no está dirigido a personas menores de 13 años (o 16 en algunas jurisdicciones). No recopilamos intencionadamente información personal de niños.",
it: "Il nostro servizio non è rivolto a persone di età inferiore ai 13 anni (o 16 in alcune giurisdizioni). Non raccogliamo consapevolmente informazioni personali da bambini.",
nl: "Onze dienst is niet gericht op personen jonger dan 13 jaar (of 16 jaar in sommige rechtsgebieden). Wij verzamelen niet bewust persoonlijke gegevens van kinderen.",
sv: "Vår tjänst riktar sig inte till personer under 13 år (eller 16 år i vissa jurisdiktioner). Vi samlar inte medvetet in personlig information från barn."
},

change:{
en: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
fr: "Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date de 'dernière mise à jour'.",
de: "Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen und das Datum 'Zuletzt aktualisiert' anpassen.",
es: "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de 'Última actualización'.",
it: "Potremmo aggiornare la nostra Informativa sulla privacy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova Informativa sulla privacy in questa pagina e aggiornando la data 'Ultimo aggiornamento'.",
nl: "Wij kunnen ons privacybeleid van tijd tot tijd bijwerken. Wij zullen u op de hoogte stellen van wijzigingen door het nieuwe privacybeleid op deze pagina te plaatsen en de datum 'Laatst bijgewerkt' bij te werken.",
sv: "Vi kan komma att uppdatera vår integritetspolicy från tid till annan. Vi meddelar dig om ändringar genom att publicera den nya integritetspolicyn på denna sida och uppdatera datumet för 'Senast uppdaterad'."
},

contact:{
en: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [helpdesk@newsworldapp.org]",
fr: "Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou nos pratiques de données, veuillez nous contacter à l'adresse [helpdesk@newsworldapp.org]",
de: "Wenn Sie Fragen oder Bedenken zu dieser Datenschutzrichtlinie oder unseren Datenpraktiken haben, kontaktieren Sie uns bitte unter [helpdesk@newsworldapp.org]",
es: "Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o nuestras prácticas de datos, contáctenos en [helpdesk@newsworldapp.org]",
it: "Se hai domande o dubbi su questa Informativa sulla privacy o sulle nostre pratiche relative ai dati, contattaci all'indirizzo [helpdesk@newsworldapp.org]",
nl: "Als u vragen of opmerkingen heeft over dit privacybeleid of onze gegevenspraktijken, neem dan contact met ons op via [helpdesk@newsworldapp.org]",
sv: "Om du har några frågor eller funderingar kring denna integritetspolicy eller vår hantering av data, vänligen kontakta oss på [helpdesk@newsworldapp.org]"

}

},





{

languages: [{ label:'English', value:'en' }, { label:'Arabic', value:"ar" }, { label:'Russian', value:"ru" }, { label:'Japanese', value:"ja" }, { label:'Chinese', value:"zh" }],

region:"california",


title:{
en: "This section covers privacy policies for California residents under CCPA. This page informs users regarding our policies with the collection, use, and disclosure of Personal Information for those who choose to use our Service. At NEWSWORLD CORPORATION, the privacy of our customers, users of our services and their personal information is of importance to us.",


ar: "تغطي هذه القسم سياسات الخصوصية لسكان كاليفورنيا بموجب CCPA. تُبلغ هذه الصفحة المستخدمين بسياساتنا المتعلقة بجمع واستخدام والكشف عن المعلومات الشخصية لأولئك الذين يختارون استخدام خدمتنا. في شركة NEWSWORLD، خصوصية عملائنا ومستخدمي خدماتنا ومعلوماتهم الشخصية مهمة بالنسبة لنا.",


ru: "Этот раздел охватывает политику конфиденциальности для жителей Калифорнии в соответствии с CCPA. Эта страница информирует пользователей о нашей политике в отношении сбора, использования и раскрытия персональной информации для тех, кто выбирает использовать наши услуги. В компании NEWSWORLD конфиденциальность наших клиентов, пользователей наших услуг и их личной информации имеет важное значение.",


ja: "このセクションでは、CCPAに基づくカリフォルニア州の居住者向けのプライバシーポリシーについて説明します。 このページでは、当社のサービスを利用することを選択したユーザーの個人情報の収集、使用、開示に関するポリシーについてお知らせします。NEWSWORLD株式会社では、顧客、サービス利用者、その個人情報のプライバシーを重視しています。",


zh: "本部分涵盖加利福尼亚居民的隐私政策，根据CCPA规定。本页面告知用户有关我们在收集、使用和披露个人信息方面的政策，适用于选择使用我们服务的用户。在NEWSWORLD公司，我们重视客户、服务用户及其个人信息的隐私。"


},

dataCollect:{
en: "We collect personal information such as name, email, and browsing activity when you use our services.",
ar: "نجمع المعلومات الشخصية مثل الاسم والبريد الإلكتروني ونشاط التصفح عند استخدامك لخدماتنا.",
"ru": "Мы собираем личную информацию, такую как имя, адрес электронной почты и действия при просмотре, когда вы пользуетесь нашими услугами.",
"ja": "当社のサービスをご利用いただく際に、氏名、メールアドレス、閲覧履歴などの個人情報を収集します。",
"zh": "当您使用我们的服务时，我们会收集诸如姓名、电子邮件和浏览活动等个人信息。"
},

dataUsage:{
en: "Your information is used to enhance service quality, provide personalized content, and communicate updates.",
ar: "تُستخدم معلوماتك لتحسين جودة الخدمة، وتقديم محتوى مخصص، والتواصل بشأن التحديثات.",
ru: "Ваша информация используется для повышения качества услуг, предоставления персонализированного контента и уведомлений о обновлениях.",
ja: "お客様の情報は、サービスの品質向上、パーソナライズされたコンテンツの提供、更新情報の通知に使用されます。",
zh: "您的信息用于提升服务质量、提供个性化内容以及传达更新信息。"
},

dataSharing:{
en: "We do not sell your personal information. Third-party sharing occurs only when legally required or with your consent.",
ar: "نحن لا نبيع معلوماتك الشخصية. يتم مشاركة البيانات مع أطراف ثالثة فقط عند الضرورة القانونية أو بموافقتك.",
ru: "Мы не продаем вашу личную информацию. Передача третьим лицам происходит только в случае требования закона или с вашего согласия.",
ja: "当社はお客様の個人情報を販売しません。第三者への共有は、法的に必要な場合またはお客様の同意がある場合のみ行われます。",
zh: "我们不会出售您的个人信息。仅在法律要求或您同意的情况下与第三方共享。"
},


userRights:{
en: "Under CCPA, California residents can request access, deletion, or opt-out of the sale of personal information.",
ar: "بموجب قانون CCPA، يمكن لسكان كاليفورنيا طلب الوصول إلى المعلومات الشخصية أو حذفها أو رفض بيعها.",
ru: "В соответствии с CCPA жители Калифорнии могут запросить доступ к личной информации, ее удаление или отказ от продажи.",
ja: "CCPAに基づき、カリフォルニア州の居住者は個人情報へのアクセス、削除、販売のオプトアウトを要求できます。",
zh: "根据CCPA，加州居民可以请求访问、删除或选择不出售个人信息。"
},

cookies:{
en: "We use cookies and similar tracking technologies to enhance user experience, analyze usage, and deliver personalized content and advertisements.",
ar: "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتحسين تجربة المستخدم، وتحليل الاستخدام، وتقديم محتوى وإعلانات مخصصة.",
ru: "Мы используем файлы cookie и аналогичные технологии отслеживания, чтобы улучшить пользовательский опыт, проанализировать использование и предоставлять персонализированный контент и рекламу.",
ja: "当社は、ユーザー体験を向上させ、利用状況を分析し、パーソナライズされたコンテンツや広告を提供するために、クッキーや類似の追跡技術を使用します。",
zh: "我们使用 Cookie 和类似的跟踪技术来提升用户体验、分析使用情况，并提供个性化的内容和广告。"

},


dataRetent:{

en: "We store personal information only as long as necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law.",
ar: "نخزن المعلومات الشخصية فقط طالما كان ذلك ضروريًا للأغراض الموضحة في سياسة الخصوصية هذه، ما لم يتطلب القانون أو يسمح بفترة احتفاظ أطول.",
ru: "Мы храним личную информацию только столько времени, сколько необходимо для целей, изложенных в настоящей Политике конфиденциальности, если более длительный срок хранения не требуется или не разрешен законом.",
ja: "当社は、このプライバシーポリシーに記載された目的のために必要な期間のみ個人情報を保管し、法律でより長い保存期間が要求または許可されている場合を除きます。",
zh: "我们仅在本隐私政策所述目的所需的时间内存储个人信息，除非法律要求或允许更长的保存期限。"

},

security:{

en: "We implement technical, administrative, and physical safeguards designed to protect your information against unauthorized access, disclosure, alteration, or destruction.",
ar: "نطبق تدابير تقنية وإدارية ومادية مصممة لحماية معلوماتك من الوصول أو الكشف أو التعديل أو التدمير غير المصرح به.",
ru: "Мы внедряем технические, административные и физические меры защиты, предназначенные для защиты вашей информации от несанкционированного доступа, раскрытия, изменения или уничтожения.",
ja: "当社は、お客様の情報を不正アクセス、開示、改ざん、破壊から保護するために設計された技術的、管理的および物理的な保護策を実施しています。",
zh: "我们实施技术、管理和物理保护措施，以防止您的信息遭到未经授权的访问、披露、篡改或销毁。"

},

children:{
en: "Our Service is not directed to individuals under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children.",
ar: "خدمتنا ليست موجهة للأفراد الذين تقل أعمارهم عن 13 عامًا (أو 16 عامًا في بعض الولايات القضائية). نحن لا نجمع عن قصد معلومات شخصية من الأطفال.",
ru: "Наш сервис не предназначен для лиц младше 13 лет (или 16 лет в некоторых юрисдикциях). Мы сознательно не собираем личную информацию от детей.",
ja: "当社のサービスは13歳未満（または一部の法域では16歳未満）の方を対象としていません。私たちは子供から個人情報を意図的に収集しません。",
zh: "我们的服务不针对13岁以下（或在某些司法管辖区为16岁以下）的个人。我们不会故意收集儿童的个人信息。"
},


change:{
en: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
ar: "قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من حين لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ 'آخر تحديث'.",
ru: "Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую Политику конфиденциальности на этой странице и обновив дату 'Последнее обновление'.",
ja: "当社はプライバシーポリシーを随時更新する場合があります。変更があった場合は、このページに新しいプライバシーポリシーを掲載し、「最終更新日」を更新することでお知らせします。",
zh: "我们可能会不时更新我们的隐私政策。我们会通过在此页面上发布新的隐私政策并更新“最后更新”日期来通知您任何更改。"
},

contact:{
en: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [helpdesk@newsworldapp.org].",
ar: "إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يرجى الاتصال بنا على [helpdesk@newsworldapp.org].",
ru: "Если у вас есть вопросы или опасения по поводу этой Политики конфиденциальности или наших методов обработки данных, пожалуйста, свяжитесь с нами по адресу [helpdesk@newsworldapp.org].",
ja: "本プライバシーポリシーまたは当社のデータ取り扱いに関してご質問やご懸念がある場合は、[helpdesk@newsworldapp.org] までご連絡ください。",
zh: "如果您对本隐私政策或我们的数据处理方式有任何疑问或担忧，请通过 [helpdesk@newsworldapp.org] 与我们联系。"
}

},




{

languages: [{ label:'Portugese', value:"pt"}, { label:'English', value:"en"}, { label:'Arabic', value:"ar"},{ label:'Russian',value:"ru" }, { label:"Japanese", value:"ja" }, { label:'Chinese', value:"zh" }],

region:"brazil",


title:{
pt: "Esta seção cobre políticas de privacidade para residentes do Brasil sob a LGPD. Esta página informa os usuários sobre nossas políticas de coleta, uso e divulgação de informações pessoais para aqueles que escolhem utilizar nosso serviço. Na NEWSWORLD CORPORATION, a privacidade de nossos clientes, usuários de nossos serviços e suas informações pessoais é importante para nós.",


en: "This section covers privacy policies for Brazilian residents under LGPD. This page informs users regarding our policies with the collection, use, and disclosure of Personal Information for those who choose to use our Service. At NEWSWORLD CORPORATION, the privacy of our customers, users of our services and their personal information is of importance to us.",


ar: "يغطي هذا القسم سياسات الخصوصية للمقيمين في البرازيل بموجب LGPD.تُبلغ هذه الصفحة المستخدمين بسياساتنا المتعلقة بجمع واستخدام والكشف عن المعلومات الشخصية لأولئك الذين يختارون استخدام خدمتنا. في شركة NEWSWORLD، خصوصية عملائنا ومستخدمي خدماتنا ومعلوماتهم الشخصية مهمة بالنسبة لنا.",


ru: "Этот раздел охватывает политику конфиденциальности для жителей Бразилии в соответствии с LGPD. Эта страница информирует пользователей о нашей политике в отношении сбора, использования и раскрытия персональной информации для тех, кто выбирает использовать наши услуги. В компании NEWSWORLD конфиденциальность наших клиентов, пользователей наших услуг и их личной информации имеет важное значение.",


ja: "このセクションでは、LGPDに基づくブラジル居住者向けのプライバシーポリシーについて説明します。このページでは、当社のサービスを利用することを選択したユーザーの個人情報の収集、使用、開示に関するポリシーについてお知らせします。NEWSWORLD株式会社では、顧客、サービス利用者、その個人情報のプライバシーを重視しています。",


zh: "本部分涵盖巴西居民的隐私政策，根据LGPD规定。本页面告知用户有关我们在收集、使用和披露个人信息方面的政策，适用于选择使用我们服务的用户。在NEWSWORLD公司，我们重视客户、服务用户及其个人信息的隐私。"
},

dataCollect:{
pt: "Coletamos informações pessoais que você fornece voluntariamente, como nome, e-mail e preferências.",
en: "We collect personal information that you provide voluntarily, such as name, email, and preferences.",
ar: "نجمع المعلومات الشخصية التي تقدمها طواعية، مثل الاسم والبريد الإلكتروني والتفضيلات.",
ru: "Мы собираем личную информацию, которую вы предоставляете добровольно, например имя, электронную почту и предпочтения.",
ja: "氏名、メールアドレス、設定など、お客様が自主的に提供する個人情報を収集します。",
zh: "我们收集您自愿提供的个人信息，例如姓名、电子邮件和偏好。"
},

dataUsage:{
pt: "Suas informações são usadas para melhorar nossos serviços, personalizar conteúdo e nos comunicar com você.",
en: "Your information is used to improve our services, personalize content, and communicate with you.",
ar: "تُستخدم معلوماتك لتحسين خدماتنا وتخصيص المحتوى والتواصل معك.",
ru: "Ваша информация используется для улучшения наших услуг, персонализации контента и связи с вами.",
ja: "お客様の情報は、サービスの向上、コンテンツのパーソナライズ、およびコミュニケーションに使用されます。",
zh: "您的信息用于改进我们的服务、个性化内容并与您沟通。"
},

dataSharing:{
pt: "Não compartilhamos seus dados pessoais com terceiros sem seu consentimento, exceto quando exigido por lei.",
en: "We do not share your personal data with third parties without your consent, except as required by law.",
ar: "لا نشارك بياناتك الشخصية مع أطراف ثالثة دون موافقتك، إلا إذا كان القانون يقتضي ذلك.",
ru: "Мы не передаем ваши персональные данные третьим лицам без вашего согласия, кроме случаев, когда это требуется законом.",
ja: "お客様の個人情報は、法的に必要な場合を除き、第三者と共有しません。",
zh: "我们不会在未经您同意的情况下与第三方共享您的个人数据，法律要求除外。"
},


userRights:{
pt: "De acordo com a LGPD, você tem direito de acessar, corrigir ou solicitar a exclusão de seus dados.",
en: "Under LGPD, you have the right to access, correct, or request deletion of your data.",
ar: "بموجب LGPD، لديك الحق في الوصول إلى بياناتك وتصحيحها أو طلب حذفها.",
ru: "В соответствии с LGPD вы имеете право на доступ, исправление или удаление своих данных.",
ja: "LGPDに基づき、お客様はデータへのアクセス、修正、削除を要求する権利があります。",
zh: "根据LGPD，您有权访问、更正或请求删除您的数据。"
},


cookies:{
pt: "Utilizamos cookies e tecnologias de rastreamento semelhantes para melhorar a experiência do usuário, analisar o uso e fornecer conteúdo e anúncios personalizados.",
en: "We use cookies and similar tracking technologies to enhance user experience, analyze usage, and deliver personalized content and advertisements.",
ar: "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتحسين تجربة المستخدم، وتحليل الاستخدام، وتقديم محتوى وإعلانات مخصصة.",
ru: "Мы используем файлы cookie и аналогичные технологии отслеживания, чтобы улучшить пользовательский опыт, проанализировать использование и предоставлять персонализированный контент и рекламу.",
ja: "当社は、ユーザー体験を向上させ、利用状況を分析し、パーソナライズされたコンテンツや広告を提供するために、クッキーや類似の追跡技術を使用します。",
zh: "我们使用 Cookie 和类似的跟踪技术来提升用户体验、分析使用情况，并提供个性化的内容和广告。"

},

dataRetent:{
pt: "Armazenamos informações pessoais apenas pelo tempo necessário para os fins estabelecidos nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei.",
en: "We store personal information only as long as necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law.",
ar: "نخزن المعلومات الشخصية فقط طالما كان ذلك ضروريًا للأغراض الموضحة في سياسة الخصوصية هذه، ما لم يتطلب القانون أو يسمح بفترة احتفاظ أطول.",
ru: "Мы храним личную информацию только столько времени, сколько необходимо для целей, изложенных в настоящей Политике конфиденциальности, если более длительный срок хранения не требуется или не разрешен законом.",
ja: "当社は、このプライバシーポリシーに記載された目的のために必要な期間のみ個人情報を保管し、法律でより長い保存期間が要求または許可されている場合を除きます。",
zh: "我们仅在本隐私政策所述目的所需的时间内存储个人信息，除非法律要求或允许更长的保存期限。"
},

security:{
pt: "Implementamos medidas técnicas, administrativas e físicas projetadas para proteger suas informações contra acesso, divulgação, alteração ou destruição não autorizados.",
en: "We implement technical, administrative, and physical safeguards designed to protect your information against unauthorized access, disclosure, alteration, or destruction.",
ar: "نطبق تدابير تقنية وإدارية ومادية مصممة لحماية معلوماتك من الوصول أو الكشف أو التعديل أو التدمير غير المصرح به.",
ru: "Мы внедряем технические, административные и физические меры защиты, предназначенные для защиты вашей информации от несанкционированного доступа, раскрытия, изменения или уничтожения.",
ja: "当社は、お客様の情報を不正アクセス、開示、改ざん、破壊から保護するために設計された技術的、管理的および物理的な保護策を実施しています。",
zh: "我们实施技术、管理和物理保护措施，以防止您的信息遭到未经授权的访问、披露、篡改或销毁。"

},

children:{
pt: "Nosso serviço não se destina a indivíduos com menos de 13 anos (ou 16 em determinadas jurisdições). Não coletamos intencionalmente informações pessoais de crianças.",
en: "Our Service is not directed to individuals under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children.",
ar: "خدمتنا ليست موجهة للأفراد الذين تقل أعمارهم عن 13 عامًا (أو 16 عامًا في بعض الولايات القضائية). نحن لا نجمع عن قصد معلومات شخصية من الأطفال.",
ru: "Наш сервис не предназначен для лиц младше 13 лет (или 16 лет в некоторых юрисдикциях). Мы сознательно не собираем личную информацию от детей.",
ja: "当社のサービスは13歳未満（または一部の法域では16岁未満）の方を対象としていません。私たちは子供から個人情報を意図的に収集しません。",
zh: "我们的服务不针对13岁以下（或在某些司法管辖区为16岁以下）的个人。我们不会故意收集儿童的个人信息。"
},

change:{
pt: "Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data da 'Última atualização'.",
en: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
ar: "قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من حين لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ 'آخر تحديث'.",
ru: "Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую Политику конфиденциальности на этой странице и обновив дату 'Последнее обновление'.",
ja: "当社はプライバシーポリシーを随時更新する場合があります。変更があった場合は、このページに新しいプライバシーポリシーを掲載し、「最終更新日」を更新することでお知らせします。",
zh: "我们可能会不时更新我们的隐私政策。我们会通过在此页面上发布新的隐私政策并更新“最后更新”日期来通知您任何更改。"
},

contact:{
pt: "Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade ou nossas práticas de dados, entre em contato conosco pelo e-mail [helpdesk@newsworldapp.org].",
en: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [helpdesk@newsworldapp.org].",
ar: "إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يرجى الاتصال بنا على [helpdesk@newsworldapp.org].",
ru: "Если у вас есть вопросы или опасения по поводу этой Политики конфиденциальности или наших методов обработки данных, пожалуйста, свяжитесь с нами по адресу [helpdesk@newsworldapp.org].",
ja: "本プライバシーポリシーまたは当社のデータ取り扱いに関してご質問やご懸念がある場合は、[helpdesk@newsworldapp.org] までご連絡ください。",
zh: "如果您对本隐私政策或我们的数据处理方式有任何疑问或担忧，请通过 [helpdesk@newsworldapp.org] 与我们联系。"
}




},



{

languages: [{ label:'English', value:"en" }, { label:'Hausa', value:"ha" }, { label:'Yoruba', value:"yo" }, { label:'Igbo', value:"ig" }, { label:'Arabic', value:"ar" }],

region:"nigeria",


title:{
en: "This section covers privacy policies for Nigerian residents and users. This page informs users regarding our policies with the collection, use, and disclosure of Personal Information for those who choose to use our Service. At NEWSWORLD CORPORATION, the privacy of our customers, users of our services and their personal information is of importance to us.",


ha: "Wannan sashe yana rufe manufofin sirri ga mazauna Najeriya da masu amfani.Wannan shafi yana sanar da masu amfani game da manufofinmu na tattara, amfani da kuma bayyana Bayanan Sirri ga waɗanda suka zaɓi amfani da Ayyukanmu. A NEWSWORLD CORPORATION, sirrin abokan cinikinmu, masu amfani da ayyukanmu da bayanan su yana da muhimmanci a gare mu.",


yo: "Ẹ̀ka yìí bo àwọn ìlànà àṣírí fún àwọn olùgbé Nàìjíríà àti àwọn oníṣe. Ojú-ìwé yìí sọ fún àwọn oníṣe nípa àwọn ìlànà wa nípa ìkójọ, lílo àti ìṣàfihàn Alaye Àtọkànwá fún àwọn tí wọ́n bá yan láti lo Iṣẹ́ wa. Ní NEWSWORLD CORPORATION, ìpamọ́ àwọn oníbàárà wa, àwọn olùlo iṣẹ́ wa àti àwọn alaye tiwọn jẹ́ ohun pataki fún wa.",


ig: "Nke a ngalaba na-ekpuchi iwu nzuzo maka ndị bi na Nigeria na ndị ọrụ.Ihe a na-akpọ ibe a na-agwa ndị ọrụ gbasara iwu anyị na nchịkọta, ojiji na nkwupụta nke Ozi Nkeonwe maka ndị họrọ iji Ọrụ anyị. Na NEWSWORLD CORPORATION, nzuzo nke ndị ahịa anyị, ndị ọrụ ọrụ anyị na ozi nkeonwe ha bụ ihe dị mkpa nye anyị.",


ar: "يغطي هذا القسم سياسات الخصوصية للمقيمين والمستخدمين في نيجيريا.تُبلغ هذه الصفحة المستخدمين بسياساتنا المتعلقة بجمع واستخدام والكشف عن المعلومات الشخصية لأولئك الذين يختارون استخدام خدمتنا. في شركة NEWSWORLD، خصوصية عملائنا ومستخدمي خدماتنا ومعلوماتهم الشخصية مهمة بالنسبة لنا."
},

dataCollect:{
en: "We collect personal information such as name, email, and preferences when you use our services.",
ha: "Muna tattara bayanan mutum kamar suna, imel, da abubuwan da kuka fi so lokacin da kuke amfani da ayyukanmu.",
yo: "A a gba alaye ti ara ẹni gẹgẹbi orukọ, imeeli, ati awọn ayanfẹ nigbati o ba nlo awọn iṣẹ wa.",
ig: "Anyị na-anakọta ozi nkeonwe dị ka aha, email, na ihe masịrị gị mgbe ị na-eji ọrụ anyị.",
ar: "نجمع المعلومات الشخصية مثل الاسم والبريد الإلكتروني والتفضيلات عند استخدامك لخدماتنا."
},

dataUsage:{
en: "Your information is used to improve our services, provide personalized content, and communicate with you.",
ha: "Bayanan ku ana amfani da su don inganta ayyukanmu, samar da abun ciki na musamman, da sadarwa da ku.",
yo: "Alaye rẹ ni a lo lati mu iṣẹ wa dara, pese akoonu ti ara ẹni, ati ba ọ sọrọ.",
ig: "A na-eji ozi gị eme ka ọrụ anyị ka mma, nye ọdịnaya ahaziri iche, ma kọọrọ gị.",
ar: "تُستخدم معلوماتك لتحسين خدماتنا وتقديم محتوى مخصص والتواصل معك."
},

dataSharing:{
en: "We do not share your personal information with third parties without your consent, except when required by law.",
ha: "Ba mu raba bayanan ku na sirri da wasu ba tare da izinin ku ba, sai dai idan doka ta bukata.",
yo: "A ko pin alaye ti ara ẹni rẹ pẹlu awọn ẹni-kẹta laisi igbanilaaye rẹ, ayafi nigbati ofin ba nilo.",
ig: "Anyị anaghị ekekọrịta ozi nkeonwe gị na ndị ọzọ na-enweghị ikike gị, ma e wezụga mgbe iwu chọrọ ya.",
ar: "لا نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك، إلا إذا كانت هناك متطلبات قانونية."
},


userRights:{
en: "You have the right to access, correct, or request deletion of your personal information.",
ha: "Kuna da hakkin samun damar bayanan ku, gyara su, ko neman goge su.",
yo: "O ni ẹtọ lati wọle si alaye rẹ, ṣe atunṣe rẹ, tabi beere fun piparẹ rẹ.",
ig: "Ị nwere ikike ịnweta ozi nkeonwe gị, dozie ya, ma ọ bụ rịọ ka ewepụ ya.",
ar: "لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو طلب حذفها."
},

cookies:{
en: "We use cookies and similar tracking technologies to enhance user experience, analyze usage, and deliver personalized content and advertisements.",
ha: "Muna amfani da kukis da makamancin fasahar bin diddigi don ƙara ingancin ƙwarewar mai amfani, bincika amfani, da samar da abun ciki da tallace-tallace na musamman.",
yo: "A nlo àwọn kuki àti imọ̀ ẹrọ ìtẹ̀lé tí ó jọra láti mú ìrírí oníṣe dára síi, ṣe ìtúpalẹ̀ ìlò, àti pèsè àkóónú àti ìpolówó ti adani.",
ig: "Anyị na-eji kuki na teknụzụ ịchụso ndị yiri ya eme ka ahụmịhe onye ọrụ dịkwuo mma, nyochaa ojiji, ma nyefee ọdịnaya na mgbasa ozi ahaziri iche.",
ar: "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتحسين تجربة المستخدم، وتحليل الاستخدام، وتقديم محتوى وإعلانات مخصصة."
},


dataRetent:{
en: "We store personal information only as long as necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law.",
ha: "Muna adana bayanan sirri ne kawai muddin ya zama dole don dalilan da aka bayyana a cikin wannan Manufar Sirri, sai dai idan doka ta buƙaci ko ta yarda da tsawon lokaci.",
yo: "A n tọju alaye ti ara ẹni nikan fun igba to ba wulo fun awọn idi ti a ṣalaye ninu Ilana Asiri yii, ayafi ti ofin ba nilo tabi gba akoko ipamọ gigun sii.",
ig: "Anyị na-echekwa ozi nkeonwe naanị oge achọrọ maka ebumnuche e depụtara na Iwu Nzuzo a, belụsọ ma iwu chọrọ ma ọ bụ kwere ka echekwa ya ogologo oge.",
ar: "نخزن المعلومات الشخصية فقط طالما كان ذلك ضروريًا للأغراض الموضحة في سياسة الخصوصية هذه، ما لم يتطلب القانون أو يسمح بفترة احتفاظ أطول."
},


security:{
en: "We implement technical, administrative, and physical safeguards designed to protect your information against unauthorized access, disclosure, alteration, or destruction.",
ha: "Muna aiwatar da kariyar fasaha, gudanarwa da jiki don kare bayananka daga samun dama ba tare da izini ba, bayyana, canzawa ko rushewa.",
yo: "A n ṣe imuse awọn aabo imọ-ẹrọ, iṣakoso ati ti ara lati daabobo alaye rẹ lodi si wiwọle, ifihan, iyipada tabi iparun ti ko ni aṣẹ.",
ig: "Anyị na-eme atụmatụ nchedo teknụzụ, nchịkwa na anụ ahụ e mere iji chebe ozi gị pụọ na nnweta na-enweghị ikike, mkpughe, mgbanwe ma ọ bụ mbibi.",
ar: "نطبق تدابير تقنية وإدارية ومادية مصممة لحماية معلوماتك من الوصول أو الكشف أو التعديل أو التدمير غير المصرح به."

},

children:{
en: "Our Service is not directed to individuals under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children.",
ha: "Ayyukanmu ba ya nufin yara ƙasa da shekara 13 (ko 16 a wasu wurare). Ba mu taɓa tara bayanan sirri daga yara da gangan ba.",
yo: "Iṣẹ wa ko ni itọka si awọn ọmọde labẹ ọdun 13 (tabi 16 ni diẹ ninu awọn agbegbe). A ko mọọmọ gba alaye ti ara ẹni lati ọdọ awọn ọmọde.",
ig: "Ọrụ anyị adịghị maka ụmụaka n'okpuru afọ 13 (ma ọ bụ 16 n'ọtụtụ ebe iwu). Anyị anaghị anakọta ozi nkeonwe sitere n'aka ụmụaka n'echiche.",
ar: "خدمتنا ليست موجهة للأفراد الذين تقل أعمارهم عن 13 عامًا (أو 16 عامًا في بعض الولايات القضائية). نحن لا نجمع عن قصد معلومات شخصية من الأطفال."
},

change:{
en: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
ha: "Zai yiwu mu sabunta Manufar Sirrinmu lokaci zuwa lokaci. Za mu sanar da ku duk wani canji ta hanyar sanya sabon Manufar Sirri a wannan shafi da sabunta ranar 'An Sabunta Karshe'.",
yo: "A le ṣe imudojuiwọn Ilana Asiri wa lẹ́ẹ̀kọọ̀kan. A ó sọ fún ọ nípa àwọn ayipada kankan nipa fífi Ilana Asiri tuntun sí ojúewé yìí àti imudojúìwọ̀n ọjọ́ 'Imudojuiwọn Tó Kẹhin'.",
ig: "Anyị nwere ike imelite Atụmatụ Nzuzo anyị oge ụfọdụ. Anyị ga-agwa gị maka mgbanwe ọ bụla site n'ịtinye Atụmatụ Nzuzo ọhụrụ a na ibe a ma melite ụbọchị 'Emelitere Ikpeazụ'.",
ar: "قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من حين لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ 'آخر تحديث'."

},

contact:{
en: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [helpdesk@newsworldapp.org].",
ha: "Idan kuna da wasu tambayoyi ko damuwa game da wannan Manufar Sirri ko hanyoyinmu na sarrafa bayanai, da fatan za ku tuntube mu a [helpdesk@newsworldapp.org].",
yo: "Ti o ba ni ibeere tabi aniyan nipa Ilana Asiri yii tabi bi a ṣe n lo data rẹ, jọwọ kan si wa ni [helpdesk@newsworldapp.org].",
ig: "Ọ bụrụ na ịnwere ajụjụ ma ọ bụ nchegbu gbasara Atụmatụ Nzuzo a ma ọ bụ omume anyị banyere data, biko kpọtụrụ anyị na [helpdesk@newsworldapp.org].",
ar: "إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يرجى الاتصال بنا على [helpdesk@newsworldapp.org]."
}

},



{

languages: [{ label:'English', value:"en" }, { label:'Arabic', value:"ar" }, { label:'Russian', value:"ru" }, { label:'Japanese', value:"ja" }, { label:'Chinese', value:"zh" }],

region:"others",


title:{
en: "This section covers privacy policies for all other regions not explicitly listed. This page informs users regarding our policies with the collection, use, and disclosure of Personal Information for those who choose to use our Service. At NEWSWORLD CORPORATION, the privacy of our customers, users of our services and their personal information is of importance to us.",


ar: "يغطي هذا القسم سياسات الخصوصية لجميع المناطق الأخرى غير المدرجة صراحة.تُبلغ هذه الصفحة المستخدمين بسياساتنا المتعلقة بجمع واستخدام والكشف عن المعلومات الشخصية لأولئك الذين يختارون استخدام خدمتنا. في شركة NEWSWORLD، خصوصية عملائنا ومستخدمي خدماتنا ومعلوماتهم الشخصية مهمة بالنسبة لنا.",


ru: "Этот раздел охватывает политику конфиденциальности для всех остальных регионов, не указанных явно.Эта страница информирует пользователей о нашей политике в отношении сбора, использования и раскрытия персональной информации для тех, кто выбирает использовать наши услуги. В компании NEWSWORLD конфиденциальность наших клиентов, пользователей наших услуг и их личной информации имеет важное значение.",


ja: "このセクションでは、明示的に記載されていないその他の地域のプライバシーポリシーについて説明します。このページでは、当社のサービスを利用することを選択したユーザーの個人情報の収集、使用、開示に関するポリシーについてお知らせします。NEWSWORLD株式会社では、顧客、サービス利用者、その個人情報のプライバシーを重視しています。",


zh: "本部分涵盖未明确列出的其他地区的隐私政策。本页面告知用户有关我们在收集、使用和披露个人信息方面的政策，适用于选择使用我们服务的用户。在NEWSWORLD公司，我们重视客户、服务用户及其个人信息的隐私。"
},

dataCollect:{
en: "We collect personal information such as name, email, and usage preferences when you interact with our services.",
ar: "نجمع المعلومات الشخصية مثل الاسم والبريد الإلكتروني وتفضيلات الاستخدام عند تفاعلك مع خدماتنا.",
ru: "Мы собираем личную информацию, такую как имя, адрес электронной почты и предпочтения использования, когда вы взаимодействуете с нашими услугами.",
ja: "当社のサービスとやり取りする際に、氏名、メールアドレス、使用状況の設定などの個人情報を収集します。",
zh: "当您使用我们的服务时，我们会收集诸如姓名、电子邮件和使用偏好等个人信息。"
},

dataUsage:{
en: "Your information is used to improve our platform, provide customized content, and communicate important updates.",
ar: "تُستخدم معلوماتك لتحسين منصتنا، وتقديم محتوى مخصص، والتواصل بشأن التحديثات المهمة.",
ru: "Ваша информация используется для улучшения нашей платформы, предоставления персонализированного контента и передачи важных обновлений.",
ja: "お客様の情報は、当社のプラットフォームを改善し、カスタマイズされたコンテンツを提供し、重要な更新情報をお知らせするために使用されます。",
zh: "您的信息用于改进我们的平台、提供个性化内容并传达重要更新。"
},

dataSharing:{
en: "We do not share personal information with third parties without consent, except as required by law or for service purposes.",
ar: "نحن لا نشارك المعلومات الشخصية مع أطراف ثالثة دون موافقة، إلا عند الحاجة القانونية أو لأغراض الخدمة.",
ru: "Мы не передаем личную информацию третьим лицам без согласия, кроме случаев, предусмотренных законом или для обслуживания.",
ja: "お客様の個人情報は、法的に必要な場合またはサービス提供の目的を除き、第三者と共有しません。",
zh: "我们不会在未经同意的情况下与第三方共享个人信息，法律要求或服务目的除外。"
},


userRights:{
en: "You have the right to access, correct, or request deletion of your personal data at any time.",
ar: "لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها أو طلب حذفها في أي وقت.",
ru: "Вы имеете право в любое время получить доступ, исправить или запросить удаление ваших персональных данных.",
ja: "お客様は、個人データへのアクセス、修正、削除をいつでも要求する権利があります。",
zh: "您有权随时访问、更正或请求删除您的个人数据。"
},

cookies:{
en: "We use cookies and similar tracking technologies to enhance user experience, analyze usage, and deliver personalized content and advertisements.",
ar: "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتحسين تجربة المستخدم، وتحليل الاستخدام، وتقديم محتوى وإعلانات مخصصة.",
ru: "Мы используем файлы cookie и аналогичные технологии отслеживания, чтобы улучшить пользовательский опыт, проанализировать использование и предоставлять персонализированный контент и рекламу.",
ja: "当社は、ユーザー体験を向上させ、利用状況を分析し、パーソナライズされたコンテンツや広告を提供するために、クッキーや類似の追跡技術を使用します。",
zh: "我们使用 Cookie 和类似的跟踪技术来提升用户体验、分析使用情况，并提供个性化的内容和广告。"
},


dataRetent:{
en: "We store personal information only as long as necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law.",
ar: "نخزن المعلومات الشخصية فقط طالما كان ذلك ضروريًا للأغراض الموضحة في سياسة الخصوصية هذه، ما لم يتطلب القانون أو يسمح بفترة احتفاظ أطول.",
ru: "Мы храним личную информацию только столько времени, сколько необходимо для целей, изложенных в настоящей Политике конфиденциальности, если более длительный срок хранения не требуется или не разрешен законом.",
ja: "当社は、このプライバシーポリシーに記載された目的のために必要な期間のみ個人情報を保管し、法律でより長い保存期間が要求または許可されている場合を除きます。",
zh: "我们仅在本隐私政策所述目的所需的时间内存储个人信息，除非法律要求或允许更长的保存期限。"
},


security:{
en: "We implement technical, administrative, and physical safeguards designed to protect your information against unauthorized access, disclosure, alteration, or destruction.",
ar: "نطبق تدابير تقنية وإدارية ومادية مصممة لحماية معلوماتك من الوصول أو الكشف أو التعديل أو التدمير غير المصرح به.",
ru: "Мы внедряем технические, административные и физические меры защиты, предназначенные для защиты вашей информации от несанкционированного доступа, раскрытия, изменения или уничтожения.",
ja: "当社は、お客様の情報を不正アクセス、開示、改ざん、破壊から保護するために設計された技術的、管理的および物理的な保護策を実施しています。",
zh: "我们实施技术、管理和物理保护措施，以防止您的信息遭到未经授权的访问、披露、篡改或销毁。"
},

children:{
en: "Our Service is not directed to individuals under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children.",
ar: "خدمتنا ليست موجهة للأفراد الذين تقل أعمارهم عن 13 عامًا (أو 16 عامًا في بعض الولايات القضائية). نحن لا نجمع عن قصد معلومات شخصية من الأطفال.",
ru: "Наш сервис не предназначен для лиц младше 13 лет (или 16 лет в некоторых юрисдикциях). Мы сознательно не собираем личную информацию от детей.",
ja: "当社のサービスは13歳未満（または一部の法域では16歳未満）の方を対象としていません。私たちは子供から個人情報を意図的に収集しません。",
zh: "我们的服务不针对13岁以下（或在某些司法管辖区为16岁以下）的个人。我们不会故意收集儿童的个人信息。"
},


change:{
en: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
ar: "قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من حين لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ 'آخر تحديث'.",
ru: "Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую Политику конфиденциальности на этой странице и обновив дату 'Последнее обновление'.",
ja: "当社はプライバシーポリシーを随時更新する場合があります。変更があった場合は、このページに新しいプライバシーポリシーを掲載し、「最終更新日」を更新することでお知らせします。",
zh: "我们可能会不时更新我们的隐私政策。我们会通过在此页面上发布新的隐私政策并更新“最后更新”日期来通知您任何更改。"
},

contact:{
en: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [helpdesk@newsworldapp.org].",
ar: "إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يرجى الاتصال بنا على [helpdesk@newsworldapp.org].",
ru: "Если у вас есть вопросы или опасения по поводу этой Политики конфиденциальности или наших методов обработки данных, пожалуйста, свяжитесь с нами по адресу [helpdesk@newsworldapp.org].",
ja: "本プライバシーポリシーまたは当社のデータ取り扱いに関してご質問やご懸念がある場合は、[helpdesk@newsworldapp.org] までご連絡ください。",
zh: "如果您对本隐私政策或我们的数据处理方式有任何疑问或担忧，请通过 [helpdesk@newsworldapp.org] 与我们联系。"
}

}


]



export const EU = [ 'austria','belgium','bulgaria','croatia','cyprus','czech republic','denmark','estonia','finland','france','germany','greece','hungary','ireland','italy','latvia','lithuania','luxembourg','malta','netherlands','poland','portugal','romania','slovakia','slovenia','spain','sweden']



export const french_speak = [
"FR", // France
"BE", // Belgium
"CH", // Switzerland
"CA", // Canada (Quebec)
"LU", // Luxembourg
"MC", // Monaco
"HT", // Haiti
"SN", // Senegal
"CI", // Côte d’Ivoire
"TG", // Togo
"BJ", // Benin
"ML", // Mali
"BF", // Burkina Faso
"NE", // Niger
"GN", // Guinea
"CF", // Central African Republic
"CD", // Democratic Republic of the Congo
"CG", // Republic of the Congo
"GA", // Gabon
"CM", // Cameroon
"MG", // Madagascar
"DJ", // Djibouti
"KM", // Comoros
"VU"  // Vanuatu
];


export const spanish_speak = [
"ES", // Spain
"MX", // Mexico
"AR", // Argentina
"CO", // Colombia
"CL", // Chile
"PE", // Peru
"VE", // Venezuela
"EC", // Ecuador
"BO", // Bolivia
"PY", // Paraguay
"UY", // Uruguay
"CU", // Cuba
"DO", // Dominican Republic
"GT", // Guatemala
"HN", // Honduras
"SV", // El Salvador
"NI", // Nicaragua
"CR", // Costa Rica
"PA"  // Panama
];

export const portuguese_speak = [
"PT", // Portugal
"BR", // Brazil
"AO", // Angola
"MZ", // Mozambique
"CV", // Cape Verde
"GW", // Guinea-Bissau
"ST"  // São Tomé and Príncipe
];

export const arabic_speak = [
"EG", "SD", "DZ", "MA", "TN", "LY", "MR", // North Africa
"SA", "AE", "QA", "KW", "BH", "OM", "YE", // Arabian Peninsula
"IQ", "SY", "JO", "LB", "PS"             // Levant
];

export const russian_speak = [
"RU", // Russia
"BY", // Belarus
"KZ", // Kazakhstan
"KG", // Kyrgyzstan
"UA"  // Ukraine (partially Russian-speak)
];

export const japanese_speak = [
"JP" // Japan
];

export const chinese_speak = [
"CN", // China
"TW", // Taiwan
"SG"  // Sapore (official Mandarin use)
];

export const english_speak = [
"US", // United States
"GB", // United Kdom
"CA", // Canada
"AU", // Australia
"NZ", // New Zealand
"IE", // Ireland
"ZA", // South Africa
"NG", // Nigeria
"GH", // Ghana
"KE", // Kenya
"UG", // Uganda
"TZ", // Tanzania
"ZW", // Zimbabwe
"BW", // Botswana
"ZM", // Zambia
"MW", // Malawi
"SL", // Sierra Leone
"LR", // Liberia
"GM"  // Gambia
];

export const german_speak = [
"DE", // Germany
"AT", // Austria
"CH", // Switzerland
"LI", // Liechtenstein
"LU"  // Luxembourg (also French)
];

export const italian_speak = [
"IT", // Italy
"CH", // Switzerland (part)
"SM", // San Marino
"VA"  // Vatican City
];

export const dutch_speak = [
"NL", // Netherlands
"BE", // Belgium (Flemish)
"SR"  // Suriname
];


export const polish_speak = [
"PL" // Poland
];

export const hindi_speak = [
"IN", // India (Hindi is official but not exclusive)
"FJ", // Fiji (Fiji Hindi)
"MU", // Mauritius (part of population)
"NP"  // Nepal (close relation, but official is Nepali)
];

export const urdu_speak = [
"PK", // Pakistan
"IN"  // India (large Urdu-speak population)
];

export const persian_speak = [
"IR", // Iran (Farsi)
"AF", // Afghanistan (Dari, a Persian variant)
"TJ"  // Tajikistan (Tajik, Persian variant)
];

export const turkish_speak = [
"TR", // Turkey
"CY"  // Cyprus (Northern Cyprus, recognized partially)
];

export const korean_speak = [
"KR", // South Korea
"KP"  // North Korea
];

export const swedish_speak = [
"SE", // Sweden
"FI"  // Finland (Swedish is co-official)
];

export const danish_speak = [
"DK", // Denmark
"GL", // Greenland
"FO"  // Faroe Islands
];

export const norwegian_speak = [
"NO" // Norway
];

export const finnish_speak = [
"FI" // Finland
];

export const czech_speak = [
"CZ" // Czech Republic
];

export const ukrainian_speak = [
"UA" // Ukraine
];

export const greek_speak = [
"GR", // Greece
"CY"  // Cyprus
];

export const bulgarian_speak = [
"BG" // Bulgaria
];

export const romanian_speak = [
"RO", // Romania
"MD"  // Moldova
];

export const slovak_speak = [
"SK" // Slovakia
];

export const hungarian_speak = [
"HU" // Hungary
];





export const category = [
  {
    item: {
      en: "business", fr: "affaires", pt: "negócios", es: "negocios", ar: "الأعمال",
      zh: "商业", ja: "ビジネス", ru: "бизнес", hi: "व्यवसाय", sw: "biashara", ko: "비즈니스",
      de: "geschäft", it: "affari", nl: "zaken", tr: "iş", pl: 'biznes', id: "bisnis"
    },
    color: "#052214"
  },
  {
    item: {
      en: "crime", fr: "crime", pt: "crime", es: "crimen", ar: "جريمة",
      zh: "犯罪", ja: "犯罪", ru: "преступление", hi: "अपराध",sw: "uhalifu", ko: "범죄",
      de: "verbrechen", it: "crimine", nl: "misdaad", tr: "suç", pl: 'przestępczość', id: "kejahatan"
    },
    color: "#250434"
  },
  {
    item: {
      en: "domestic", fr: "domestique", pt: "doméstico", es: "doméstico", ar: "محلي",
      zh: "国内", ja: "国内", ru: "внутренний", hi: "घरेलू", sw: "ndani ya nchi", ko: "국내",
      de: "inländisch", it: "domestico", nl: "binnenlands", tr: "yerel",  pl: 'krajowe', id: "domestik"
    },
    color: "#16212B"
  },
  {
    item: {
      en: "education", fr: "éducation", pt: "educação", es: "educación", ar: "التعليم",
      zh: "教育", ja: "教育", ru: "образование", hi: "शिक्षा", sw: "elimu", ko: "교육",
      de: "bildung", it: "istruzione", nl: "onderwijs", tr: "eğitim", pl: 'edukacja', id: "pendidikan"
    },
    color: "#322E07"
  },
  {
    item: {
      en: "entertainment", fr: "divertissement", pt: "entretenimento", es: "entretenimiento", ar: "ترفيه",
      zh: "娱乐", ja: "エンターテインメント", ru: "развлечения",hi: "मनोरंजन", sw: "burudani", ko: "엔터테인먼트",
      de: "unterhaltung", it: "intrattenimento", nl: "entertainment", tr: "eğlence",  pl: 'rozrywka', id:"hiburan"
    },
    color: "#391248"
  },
  {
    item: {
      en: "environment", fr: "environnement", pt: "meio ambiente", es: "medio ambiente", ar: "بيئة",
      zh: "环境", ja: "環境", ru: "окружающая среда", hi: "पर्यावरण", sw: "mazingira", ko: "환경",
      de: "umwelt", it: "ambiente", nl: "milieu", tr: "çevre",  pl: 'środowisko', id: "lingkungan"
    },
    color: "#09037D"
  },
  {
    item: {
      en: "food", fr: "nourriture", pt: "comida", es: "comida", ar: "طعام",
      zh: "食物", ja: "食べ物", ru: "еда", hi: "भोजन", sw: "chakula", ko: "음식",
      de: "essen", it: "cibo", nl: "eten", tr: "yemek", pl: 'jedzenie', id:"makanan"
    },
    color: "#7D0A03"
  },
  {
    item: {
      en: "health", fr: "santé", pt: "saúde", es: "salud", ar: "صحة",
      zh: "健康", ja: "健康", ru: "здоровье", hi: "स्वास्थ्य", sw: "afya", ko: "건강",
      de: "gesundheit", it: "salute", nl: "gezondheid", tr: "sağlık", pl: 'zdrowie', id: "kesehatan"
    },
    color: "#7D0360"
  },
  {
    item: {
      en: "lifestyle", fr: "mode de vie", pt: "estilo de vida", es: "estilo de vida", ar: "نمط الحياة",
      zh: "生活方式", ja: "ライフスタイル", ru: "образ жизни", hi: "जीवनशैली", sw: "mtindo wa maisha", ko: "라이프스타일",
      de: "lebensstil", it: "stile di vita", nl: "levensstijl", tr: "yaşam tarzı", pl: 'styl życia', id: "gaya hidup"
    },
    color: "#696200"
  },
  {
    item: {
      en: "politics", fr: "politique", pt: "política", es: "política", ar: "سياسة",
      zh: "政治", ja: "政治", ru: "политика",  hi: "राजनीति", sw: "siasa",  ko: "정치",
      de: "politik", it: "politica", nl: "politiek", tr: "siyaset", pl: 'polityka', id: "politik"
    },
    color: "#00c5ff"
  },
  {
    item: {
      en: "science", fr: "science", pt: "ciência", es: "ciencia", ar: "علم",
      zh: "科学", ja: "科学", ru: "наука",hi: "विज्ञान", sw: "sayansi", ko: "과학",
      de: "wissenschaft", it: "scienza", nl: "wetenschap", tr: "bilim", pl: 'nauka', id: "sains"
    },
    color: "#ffa5f2"
  },
  {
    item: {
      en: "sports", fr: "sports", pt: "esportes", es: "deportes", ar: "رياضة",
      zh: "体育", ja: "スポーツ", ru: "спорт", hi: "खेल",  sw: "michezo", ko: "스포츠",
      de: "sport", it: "sport", nl: "sport", tr: "spor",  pl: 'sport', id: "olahraga"
    },
    color: "#7765c1"
  },
  {
    item: {
      en: "technology", fr: "technologie", pt: "tecnologia", es: "tecnología", ar: "تكنولوجيا",
      zh: "技术", ja: "技術", ru: "технология", hi: "प्रौद्योगिकी", sw: "teknolojia", ko: "기술",
      de: "technologie", it: "tecnologia", nl: "technologie", tr: "teknoloji", pl: 'technologia', id: "teknologi"
    },
    color: "#5f5f00"
  },
  {
    item: {
      en: "tourism", fr: "tourisme", pt: "turismo", es: "turismo", ar: "سياحة",
      zh: "旅游", ja: "観光", ru: "туризм", hi: "पर्यटन", sw: "utalii", ko: "관광",
      de: "tourismus", it: "turismo", nl: "toerisme", tr: "turizm", pl: 'turystyka', id: "pariwisata"
    },
    color: "#ff76d9"
  }
];








export const multilingual = {
  "Email": {
    "en": "E-mail",
    "fr": "E-mail",
    "es": "Correo electrónico",
    "de": "E-Mail",
    "it": "E-mail",
    "pt": "E-mail",
    "ru": "Электронная почта",
    "ar": "البريد الإلكتروني",
    "zh": "电子邮件",
    "ja": "メール",
    "ko": "이메일",
    "hi": "ईमेल",
    "tr": "E-posta",
    "nl": "E-mail",
    "sw": "Barua pepe",
    "pl":"E-mail",
    "id": "Surel"
  },
  "Gender": {
    "en": "Gender",
    "fr": "Genre",
    "es": "Género",
    "de": "Geschlecht",
    "it": "Genere",
    "pt": "Gênero",
    "ru": "Пол",
    "ar": "الجنس",
    "zh": "性别",
    "ja": "性別",
    "ko": "성별",
    "hi": "लिंग",
    "tr": "Cinsiyet",
    "nl": "Geslacht",
    "sw": "Jinsia",
    "pl":"Płeć",
    "id": "Jenis Kelamin"
  },
  "Username": {
    "en": "Username",
    "fr": "Nom d'utilisateur",
    "es": "Nombre de usuario",
    "de": "Benutzername",
    "it": "Nome utente",
    "pt": "Nome de usuário",
    "ru": "Имя пользователя",
    "ar": "اسم المستخدم",
    "zh": "用户名",
    "ja": "ユーザー名",
    "ko": "사용자 이름",
    "hi": "उपयोगकर्ता नाम",
    "tr": "Kullanıcı adı",
    "nl": "Gebruikersnaam",
    "sw": "Jina la mtumiaji",
    "pl":"Nazwa użytkownika",
    "id": "Nama Pengguna"
  },
  "Birthday": {
    "en": "Birthday",
    "fr": "Anniversaire",
    "es": "Cumpleaños",
    "de": "Geburtstag",
    "it": "Compleanno",
    "pt": "Aniversário",
    "ru": "День рождения",
    "ar": "عيد الميلاد",
    "zh": "生日",
    "ja": "誕生日",
    "ko": "생일",
    "hi": "जन्मदिन",
    "tr": "Doğum günü",
    "nl": "Verjaardag",
    "sw": "Siku ya kuzaliwa",
    "pl":"Data urodzenia",
    "id": "Tanggal Lahir"
  },
  "Location": {
    "en": "Location",
    "fr": "Emplacement",
    "es": "Ubicación",
    "de": "Standort",
    "it": "Posizione",
    "pt": "Localização",
    "ru": "Местоположение",
    "ar": "الموقع",
    "zh": "位置",
    "ja": "場所",
    "ko": "위치",
    "hi": "स्थान",
    "tr": "Konum",
    "nl": "Locatie",
    "sw": "Mahali",
    "pl":"Lokalizacja",
    "id": "Lokasi"
  },
  "Subscription": {
    "en": "Subscription",
    "fr": "Abonnement",
    "es": "Suscripción",
    "de": "Abonnement",
    "it": "Abbonamento",
    "pt": "Assinatura",
    "ru": "Подписка",
    "ar": "اشتراك",
    "zh": "订阅",
    "ja": "サブスクリプション",
    "ko": "구독",
    "hi": "सदस्यता",
    "tr": "Abonelik",
    "nl": "Abonnement",
    "sw": "Usajili",
    "pl":"Subskrypcja",
    "id": "Langganan"
  },
  "Signout": {
    "en": "Sign out",
    "fr": "Se déconnecter",
    "es": "Cerrar sesión",
    "de": "Abmelden",
    "it": "Disconnettersi",
    "pt": "Sair",
    "ru": "Выйти",
    "ar": "تسجيل الخروج",
    "zh": "退出登录",
    "ja": "サインアウト",
    "ko": "로그아웃",
    "hi": "साइन आउट",
    "tr": "Oturumu kapat",
    "nl": "Uitloggen",
    "sw": "Ondoka",
    "pl":"Wyloguj się",
    "id": "Keluar"
  },
  "Deleteaccount": {
    "en": "Delete account",
    "fr": "Supprimer le compte",
    "es": "Eliminar cuenta",
    "de": "Konto löschen",
    "it": "Elimina account",
    "pt": "Excluir conta",
    "ru": "Удалить аккаунт",
    "ar": "حذف الحساب",
    "zh": "删除账户",
    "ja": "アカウント削除",
    "ko": "계정 삭제",
    "hi": "खाता हटाएं",
    "tr": "Hesabı sil",
    "nl": "Account verwijderen",
    "sw": "Futa akaunti",
    "pl":"Usuń konto",
    "id": "Hapus Akun"
  },
  "Profile": {
    "en": "Profile",
    "fr": "Profil",
    "es": "Perfil",
    "de": "Profil",
    "it": "Profilo",
    "pt": "Perfil",
    "ru": "Профиль",
    "ar": "الملف الشخصي",
    "zh": "个人资料",
    "ja": "プロフィール",
    "ko": "프로필",
    "hi": "प्रोफ़ाइल",
    "tr": "Profil",
    "nl": "Profiel",
    "sw": "Wasifu",
    "pl":"Profil",
    "id": "Profil"
  },
  "Settings": {
    "en": "Settings",
    "fr": "Paramètres",
    "es": "Configuración",
    "de": "Einstellungen",
    "it": "Impostazioni",
    "pt": "Configurações",
    "ru": "Настройки",
    "ar": "الإعدادات",
    "zh": "设置",
    "ja": "設定",
    "ko": "설정",
    "hi": "सेटिंग्स",
    "tr": "Ayarlar",
    "nl": "Instellingen",
    "sw": "Mipangilio",
    "pl":"Ustawienia",
    "id": "Pengaturan"
  },
  "PrivacyPolicy": {
    "en": "Privacy Policy",
    "fr": "Politique de confidentialité",
    "es": "Política de privacidad",
    "de": "Datenschutzrichtlinie",
    "it": "Informativa sulla privacy",
    "pt": "Política de Privacidade",
    "ru": "Политика конфиденциальности",
    "ar": "سياسة الخصوصية",
    "zh": "隐私政策",
    "ja": "プライバシーポリシー",
    "ko": "개인정보 보호정책",
    "hi": "गोपनीयता नीति",
    "tr": "Gizlilik Politikası",
    "nl": "Privacybeleid",
    "sw": "Sera ya Faragha",
    "pl":"Polityka prywatności",
    "id": "Kebijakan Privasi"
  },
  "ContactSupport": {
    "en": "Contact Support",
    "fr": "Contacter le support",
    "es": "Contactar soporte",
    "de": "Support kontaktieren",
    "it": "Contatta il supporto",
    "pt": "Contatar suporte",
    "ru": "Связаться с поддержкой",
    "ar": "الاتصال بالدعم",
    "zh": "联系支持",
    "ja": "サポートに連絡",
    "ko": "지원 문의",
    "hi": "सहायता से संपर्क करें",
    "tr": "Destek ile iletişim",
    "nl": "Contact opnemen met support",
    "sw": "Wasiliana na msaada",
    "pl":"Skontaktuj się z pomocą techniczną",
    "id": "Hubungi Dukungan"
  },
  "Home": {
    "en": "Home",
    "fr": "Accueil",
    "es": "Inicio",
    "de": "Startseite",
    "it": "Home",
    "pt": "Início",
    "ru": "Главная",
    "ar": "الصفحة الرئيسية",
    "zh": "首页",
    "ja": "ホーム",
    "ko": "홈",
    "hi": "मुखपृष्ठ",
    "tr": "Ana sayfa",
    "nl": "Home",
    "sw": "Nyumbani",
    "pl":"Strona główna",
    "id": "Beranda" 
  },
  "Search": {
    "en": "Search",
    "fr": "Rechercher",
    "es": "Buscar",
    "de": "Suchen",
    "it": "Cerca",
    "pt": "Pesquisar",
    "ru": "Поиск",
    "ar": "بحث",
    "zh": "搜索",
    "ja": "検索",
    "ko": "검색",
    "hi": "खोजें",
    "tr": "Arama",
    "nl": "Zoeken",
    "sw": "Tafuta",
    "pl":"Szukaj",
    "id": "Cari" 
  },
  "Watch": {
    "en": "Watch",
    "fr": "Regarder",
    "es": "Ver",
    "de": "Ansehen",
    "it": "Guarda",
    "pt": "Assistir",
    "ru": "Смотреть",
    "ar": "شاهد",
    "zh": "观看",
    "ja": "見る",
    "ko": "시청",
    "hi": "देखें",
    "tr": "İzle",
    "nl": "Kijken",
    "sw": "Tazama",
    "pl":"Oglądaj",
    "id": "Tonton"
  },
  "Themeswitch": {
    "en": "Theme switch",
    "fr": "Commutateur de thème",
    "es": "Interruptor de tema",
    "de": "Themenumschalter",
    "it": "Interruttore tema",
    "pt": "Alternar tema",
    "ru": "Переключатель темы",
    "ar": "تبديل السمة",
    "ja": "テーマ切り替え",
    "zh": "主题切换",
    "tr": "Tema değiştirici",
    "nl": "Thema wissel",
    "hi": "थीम स्विच",
    "sw": "Badilisha mandhari",
    "ko": "테마 전환",
    "pl":"Przełącznik motywu",
    "id": "Pengalih Tema"
  },
  "Themesettings": {
    "en": "Theme settings",
    "fr": "Paramètres du thème",
    "es": "Configuración del tema",
    "de": "Themen-Einstellungen",
    "it": "Impostazioni tema",
    "pt": "Configurações de tema",
    "ru": "Настройки темы",
    "ar": "إعدادات السمة",
    "ja": "テーマ設定",
    "zh": "主题设置",
    "tr": "Tema ayarları",
    "nl": "Thema-instellingen",
    "hi": "थीम सेटिंग्स",
    "sw": "Mipangilio ya mandhari",
    "ko": "테마 설정",
    "pl":"Ustawienia motywu",
    "id": "Pengaturan Tema" 
  },
  "Voiceswitch": {
    "en": "Voice switch",
    "fr": "Commutateur vocal",
    "es": "Interruptor de voz",
    "de": "Sprachumschalter",
    "it": "Interruttore vocale",
    "pt": "Alternar voz",
    "ru": "Переключатель голоса",
    "ar": "تبديل الصوت",
    "ja": "音声切り替え",
    "zh": "语音切换",
    "tr": "Ses değiştirici",
    "nl": "Stemschakelaar",
    "hi": "वॉयस स्विच",
    "sw": "Kubadilisha sauti",
    "ko": "음성 전환",
    "pl":"Przełącznik głosu",
    "id": "Pengalih Suara"
  },
  "Translate": {
    "en": "Translate",
    "fr": "Traduire",
    "es": "Traducir",
    "de": "Übersetzen",
    "it": "Tradurre",
    "pt": "Traduzir",
    "ru": "Перевести",
    "ar": "ترجمة",
    "ja": "翻訳",
    "zh": "翻译",
    "tr": "Çevir",
    "nl": "Vertalen",
    "hi": "अनुवाद",
    "sw": "Tafsiri",
    "ko": "번역",
    "pl":"Tłumacz",
    "id": "Terjemahkan"
  },
  "Applanguage": {
    "en": "App language",
    "fr": "Langue de l'application",
    "es": "Idioma de la aplicación",
    "de": "App-Sprache",
    "it": "Lingua dell'app",
    "pt": "Idioma do aplicativo",
    "ru": "Язык приложения",
    "ar": "لغة التطبيق",
    "ja": "アプリの言語",
    "zh": "应用语言",
    "tr": "Uygulama dili",
    "nl": "App-taal",
    "hi": "ऐप भाषा",
    "sw": "Lugha ya programu",
    "ko": "앱 언어",
    "pl":"Język aplikacji",
    "id": "Bahasa Aplikasi"
  },
  "Darkmode": {
    "en": "Dark mode",
    "fr": "Mode sombre",
    "es": "Modo oscuro",
    "de": "Dunkelmodus",
    "it": "Modalità scura",
    "pt": "Modo escuro",
    "ru": "Темный режим",
    "ar": "الوضع الداكن",
    "ja": "ダークモード",
    "zh": "深色模式",
    "tr": "Karanlık mod",
    "nl": "Donkere modus",
    "hi": "डार्क मोड",
    "sw": "Hali ya giza",
    "ko": "다크 모드",
    "pl":"Tryb ciemny",
    "id": "Mode Gelap"
  },
  "Light": {
    "en": "Light",
    "fr": "Clair",
    "es": "Claro",
    "de": "Hell",
    "it": "Chiaro",
    "pt": "Claro",
    "ru": "Светлый",
    "ar": "فاتح",
    "ja": "ライト",
    "zh": "浅色",
    "tr": "Açık",
    "nl": "Licht",
    "hi": "लाइट",
    "sw": "Mwanga",
    "ko": "라이트",
    "pl":"Jasny",
    "id": "Terang"
  },
  "Dark": {
    "en": "Dark",
    "fr": "Sombre",
    "es": "Oscuro",
    "de": "Dunkel",
    "it": "Scuro",
    "pt": "Escuro",
    "ru": "Темный",
    "ar": "داكن",
    "ja": "ダーク",
    "zh": "深色",
    "tr": "Koyu",
    "nl": "Donker",
    "hi": "डार्क",
    "sw": "Giza",
    "ko": "다크",
    "pl":"Ciemny",
    "id": "Gelap"
  },
  "System": {
    "en": "System",
    "fr": "Système",
    "es": "Sistema",
    "de": "System",
    "it": "Sistema",
    "pt": "Sistema",
    "ru": "Система",
    "ar": "النظام",
    "ja": "システム",
    "zh": "系统",
    "tr": "Sistem",
    "nl": "Systeem",
    "hi": "सिस्टम",
    "sw": "Mfumo",
    "ko": "시스템",
    "pl":"System",
    "id": "Sistem"
  },
  "Male": {
    "en": "Male",
    "fr": "Homme",
    "es": "Hombre",
    "de": "Männlich",
    "it": "Maschio",
    "pt": "Masculino",
    "ru": "Мужчина",
    "ar": "ذكر",
    "ja": "男性",
    "zh": "男",
    "tr": "Erkek",
    "nl": "Man",
    "hi": "पुरुष",
    "sw": "Mwanaume",
    "ko": "남성",
    "pl":"Mężczyzna",
    "id": "Laki-laki"
  },
  "Female": {
    "en": "Female",
    "fr": "Femme",
    "es": "Mujer",
    "de": "Weiblich",
    "it": "Femmina",
    "pt": "Feminino",
    "ru": "Женщина",
    "ar": "أنثى",
    "ja": "女性",
    "zh": "女",
    "tr": "Kadın",
    "nl": "Vrouw",
    "hi": "महिला",
    "sw": "Mwanamke",
    "ko": "여성",
    "pl":"Kobieta",
    "id":"Perempuan" 
  },
  "Text": {
    "en": "Text",
    "fr": "Texte",
    "es": "Texto",
    "de": "Text",
    "it": "Testo",
    "pt": "Texto",
    "ru": "Текст",
    "ar": "نص",
    "ja": "テキスト",
    "zh": "文本",
    "tr": "Metin",
    "nl": "Tekst",
    "hi": "पाठ",
    "sw": "Maandishi",
    "ko": "텍스트",
    "pl":"Tekst",
    "id":"Teks"
  },
  "CreateAccount": {
    "en": "Create Account",
    "fr": "Créer un compte",
    "es": "Crear cuenta",
    "pt": "Criar conta",
    "de": "Konto erstellen",
    "it": "Crea account",
    "ru": "Создать аккаунт",
    "ar": "إنشاء حساب",
    "ja": "アカウント作成",
    "zh": "创建账户",
    "hi": "खाता बनाएँ",
    "sw": "Unda Akaunti",
    "ko": "계정 만들기",
    "tr": "Hesap Oluştur",
    "nl": "Account aanmaken",
    "pl": "Utwórz konto",
    "id": "Buat Akun"
  },
  "ForgotPassword": {
    "en": "Forgot Password",
    "fr": "Mot de passe oublié",
    "es": "Olvidé mi contraseña",
    "pt": "Esqueci minha senha",
    "de": "Passwort vergessen",
    "it": "Password dimenticata",
    "ru": "Забыли пароль",
    "ar": "نسيت كلمة المرور",
    "ja": "パスワードを忘れた",
    "zh": "忘记密码",
    "hi": "पासवर्ड भूल गए",
    "sw": "Umesahau Nenosiri",
    "ko": "비밀번호를 잊으셨나요",
    "tr": "Şifreyi Unuttum",
    "nl": "Wachtwoord vergeten",
    "pl": "Zaplmniałeś hasła",
    "id": "Lupa Kata Sandi"
  },
  "Login": {
    "en": "Login",
    "fr": "Connexion",
    "es": "Iniciar sesión",
    "pt": "Entrar",
    "de": "Anmelden",
    "it": "Accedi",
    "ru": "Войти",
    "ar": "تسجيل الدخول",
    "ja": "ログイン",
    "zh": "登录",
    "hi": "लॉग इन करें",
    "sw": "Ingia",
    "ko": "로그인",
    "tr": "Giriş Yap",
    "nl": "Inloggen",
    "pl": "Zaloguj się",
    "id": "Masuk"
  },
  "Next": {
    "en": "Next",
    "fr": "Suivant",
    "es": "Siguiente",
    "pt": "Próximo",
    "de": "Weiter",
    "it": "Avanti",
    "ru": "Далее",
    "ar": "التالي",
    "ja": "次へ",
    "zh": "下一步",
    "hi": "अगला",
    "sw": "Ifuatayo",
    "ko": "다음",
    "tr": "Sonraki",
    "nl": "Volgende",
    "pl": "Dalej",
    "id": "Berikutnya"
  },
   "Loadmore": {
  "en": "Load more",
  "fr": "Charger plus",
  "es": "Cargar más",
  "de": "Mehr laden",
  "it": "Carica di più",
  "pt": "Carregar mais",
  "ru": "Загрузить ещё",
  "ar": "تحميل المزيد",
  "zh": "加载更多",
 "ja": "もっと読み込む",
  "hi": "और लोड करें",
  "sw": "Pakia zaidi",
  "ko": "더 불러오기",
  "tr": "Daha fazla yükle",
  "nl": "meer laden",
  "pl": "Załaduj więcej",
  "id": "Komentar"
   },
   "Comments": {
  "en": "Comments",
  "fr": "Commentaires",
  "es": "Comentarios",
  "de": "Kommentare",
  "it": "Commenti",
  "pt": "Comentários",
  "ru": "Комментарии",
  "ar": "التعليقات",
  "zh":"评论",
 "ja": "コメント",
  "hi": "टिप्पणियाँ",
  "sw": "Maoni",
  "ko":  "댓글",
  "tr": "Yorumlar",
  "nl": "Reacties",
  "pl": "Komentarze",
  "id": "Komentar"
   },
   "thoughts": {
  "en": "What are your thoughts",
  "fr": "Quelles sont vos pensées",
  "es": "Cargar más",
  "de": "Was sind deine Gedanken",
  "it": "Quali sono i tuoi pensieri",
  "pt": "Quais são os seus pensamentos",
  "ru": "Что вы думаете",
  "ar": "ما هي أفكارك",
  "zh": "你有什么想法",
 "ja": "あなたの考えは何ですか",
  "hi": "आपके विचार क्या हैं",
  "sw": "Maoni yako ni yapi",
  "ko": "당신의 생각은 무엇입니까",
  "tr": "Düşünceleriniz neler",
  "nl": "Wat zijn je gedachten",
  "pl":  "Jakie są twoje przemyślenia",
  "id": "Apa pendapatmu"
   },
   "firstName": {
    "en": "First name",
    "fr": "Prénom",
    "es": "Nombre",
    "de": "Vorname",
    "pt": "Primeiro nome",
    "it": "Nome",
    "ru": "Имя",
    "ar": "الاسم الأول",
    "zh": "名字",
    "ja": "名",
    "hi": "पहला नाम",
    "sw": "Jina la kwanza",
    "ko": "이름",
    "pl": "Imię",
    "tr": "Ad",
    "nl": "Voornaam",
    "id": "Nama depan"
  },
  "lastName": {
    "en": "Last name",
    "fr": "Nom de famille",
    "es": "Apellido",
    "de": "Nachname",
    "pt": "Último nome",
    "it": "Cognome",
    "ru": "Фамилия",
    "ar": "اسم العائلة",
    "zh": "姓氏",
    "ja": "姓",
    "hi": "अंतिम नाम",
    "sw": "Jina la mwisho",
    "ko": "성",
    "pl": "Nazwisko",
    "tr": "Soyad",
    "nl": "Achternaam",
    "id": "Nama belakang"
  },
  "selectGender": {
    "en": "Select your Gender",
    "fr": "Sélectionnez votre sexe",
    "es": "Seleccione su género",
    "de": "Wählen Sie Ihr Geschlecht",
    "pt": "Selecione seu gênero",
    "it": "Seleziona il tuo genere",
    "ru": "Выберите ваш пол",
    "ar": "اختر جنسك",
    "zh": "选择您的性别",
    "ja": "性別を選択してください",
    "hi": "अपना लिंग चुनें",
    "sw": "Chagua jinsia yako",
    "ko": "성별을 선택하세요",
    "pl": "Wybierz swoją płeć",
    "tr": "Cinsiyetinizi seçin",
    "nl": "Selecteer je geslacht",
    "id": "Pilih jenis kelamin Anda"
  },
  "password": {
    "en": "Password",
    "fr": "Mot de passe",
    "es": "Contraseña",
    "de": "Passwort",
    "pt": "Senha",
    "it": "Password",
    "ru": "Пароль",
    "ar": "كلمة المرور",
    "zh": "密码",
    "ja": "パスワード",
    "hi": "पासवर्ड",
    "sw": "Nenosiri",
    "ko": "비밀번호",
    "pl": "Hasło",
    "tr": "Şifre",
    "nl": "Wachtwoord",
    "id": "Kata sandi"
  },
  "confirmPassword": {
    "en": "Confirm Password",
    "fr": "Confirmer le mot de passe",
    "es": "Confirmar contraseña",
    "de": "Passwort bestätigen",
    "pt": "Confirmar senha",
    "it": "Conferma password",
    "ru": "Подтвердите пароль",
    "ar": "تأكيد كلمة المرور",
    "zh": "确认密码",
    "ja": "パスワードを確認",
    "hi": "पासवर्ड की पुष्टि करें",
    "sw": "Thibitisha nenosiri",
    "ko": "비밀번호 확인",
    "pl": "Potwierdź hasło",
    "tr": "Şifreyi onayla",
    "nl": "Bevestig wachtwoord",
    "id": "Konfirmasi kata sandi"
  },
  "nameValidation": {
    "en": "Name must be more than 3 characters",
    "fr": "Le nom doit contenir plus de 3 caractères",
    "es": "El nombre debe tener más de 3 caracteres",
    "de": "Der Name muss mehr als 3 Zeichen enthalten",
    "pt": "O nome deve ter mais de 3 caracteres",
    "it": "Il nome deve contenere più di 3 caratteri",
    "ru": "Имя должно содержать более 3 символов",
    "ar": "يجب أن يحتوي الاسم على أكثر من 3 أحرف",
    "zh": "姓名必须多于3个字符",
    "ja": "名前は3文字以上である必要があります",
    "hi": "नाम 3 से अधिक अक्षरों का होना चाहिए",
    "sw": "Jina lazima liwe na zaidi ya herufi 3",
    "ko": "이름은 3자 이상이어야 합니다",
    "pl": "Imię musi mieć więcej niż 3 znaki",
    "tr": "İsim 3 karakterden uzun olmalı",
    "nl": "Naam moet meer dan 3 tekens bevatten",
    "id": "Nama harus lebih dari 3 karakter"
  },
  "passwordValidation": {
    "en": "Password cannot be less than 5 digits and must contain a number and a special character like [ @ , $ , % , !, & , * ]",
    "fr": "Le mot de passe ne peut pas comporter moins de 5 caractères et doit contenir un chiffre et un caractère spécial comme [ @ , $ , % , !, & , * ]",
    "es": "La contraseña no puede tener menos de 5 caracteres y debe contener un número y un carácter especial como [ @ , $ , % , !, & , * ]",
    "de": "Das Passwort darf nicht kürzer als 5 Zeichen sein und muss eine Zahl und ein Sonderzeichen wie [ @ , $ , % , !, & , * ] enthalten",
    "pt": "A senha não pode ter menos de 5 caracteres e deve conter um número e um caractere especial como [ @ , $ , % , !, & , * ]",
    "it": "La password non può essere inferiore a 5 caratteri e deve contenere un numero e un carattere speciale come [ @ , $ , % , !, & , * ]",
    "ru": "Пароль не может быть короче 5 символов и должен содержать цифру и специальный символ, например [ @ , $ , % , !, & , * ]",
    "ar": "لا يمكن أن تكون كلمة المرور أقل من 5 أحرف ويجب أن تحتوي على رقم ورمز خاص مثل [ @ , $ , % , !, & , * ]",
    "zh": "密码不能少于5个字符，且必须包含一个数字和一个特殊字符，如 [ @ , $ , % , !, & , * ]",
    "ja": "パスワードは5文字以上で、数字と [ @ , $ , % , !, & , * ] のような特殊文字を含める必要があります",
    "hi": "पासवर्ड 5 अक्षरों से कम नहीं हो सकता और इसमें एक संख्या और एक विशेष चिन्ह जैसे [ @ , $ , % , !, & , * ] होना चाहिए",
    "sw": "Nenosiri haliwezi kuwa chini ya herufi 5 na lazima liwe na namba na alama maalum kama [ @ , $ , % , !, & , * ]",
    "ko": "비밀번호는 5자리 이상이어야 하며 숫자와 [ @ , $ , % , !, & , * ] 같은 특수문자를 포함해야 합니다",
    "pl": "Hasło nie może mieć mniej niż 5 znaków i musi zawierać cyfrę oraz znak specjalny, np. [ @ , $ , % , !, & , * ]",
    "tr": "Şifre 5 karakterden kısa olamaz ve bir sayı ile [ @ , $ , % , !, & , * ] gibi özel bir karakter içermelidir",
    "nl": "Wachtwoord mag niet minder dan 5 tekens bevatten en moet een cijfer en een speciaal teken zoals [ @ , $ , % , !, & , * ] bevatten",
    "id": "Kata sandi tidak boleh kurang dari 5 karakter dan harus mengandung angka serta karakter khusus seperti [ @ , $ , % , !, & , * ]"
  },
  "passwordMismatch": {
    "en": "Passwords do not match",
    "fr": "Les mots de passe ne correspondent pas",
    "es": "Las contraseñas no coinciden",
    "de": "Passwörter stimmen nicht überein",
    "pt": "As senhas não coincidem",
    "it": "Le password non corrispondono",
    "ru": "Пароли не совпадают",
    "ar": "كلمات المرور غير متطابقة",
    "zh": "密码不匹配",
    "ja": "パスワードが一致しません",
    "hi": "पासवर्ड मेल नहीं खाते",
    "sw": "Nywila hazilingani",
    "ko": "비밀번호가 일치하지 않습니다",
    "pl": "Hasła nie są zgodne",
    "tr": "Şifreler eşleşmiyor",
    "nl": "Wachtwoorden komen niet overeen",
    "id": "Kata sandi tidak cocok"
  },
  "emailValidation": {
    "en": "Please provide a valid email address",
    "fr": "Veuillez fournir une adresse e-mail valide",
    "es": "Por favor, proporcione una dirección de correo electrónico válida",
    "de": "Bitte geben Sie eine gültige E-Mail-Adresse an",
    "pt": "Por favor, forneça um endereço de e-mail válido",
    "it": "Si prega di fornire un indirizzo email valido",
    "ru": "Пожалуйста, укажите действительный адрес электронной почты",
    "ar": "يرجى تقديم عنوان بريد إلكتروني صالح",
    "zh": "请输入有效的电子邮件地址",
    "ja": "有効なメールアドレスを入力してください",
    "hi": "कृपया एक मान्य ईमेल पता प्रदान करें",
    "sw": "Tafadhali toa anwani sahihi ya barua pepe",
    "ko": "유효한 이메일 주소를 입력하세요",
    "pl": "Podaj prawidłowy adres e-mail",
    "tr": "Lütfen geçerli bir e-posta adresi girin",
    "nl": "Geef een geldig e-mailadres op",
    "id": "Harap masukkan alamat email yang valid"
  },
  "genderValidation": {
    "en": "Please select your Gender",
    "fr": "Veuillez sélectionner votre sexe",
    "es": "Por favor, seleccione su género",
    "de": "Bitte wählen Sie Ihr Geschlecht",
    "pt": "Por favor, selecione seu gênero",
    "it": "Si prega di selezionare il proprio genere",
    "ru": "Пожалуйста, выберите ваш пол",
    "ar": "يرجى تحديد جنسك",
    "zh": "请选择您的性别",
    "ja": "性別を選択してください",
    "hi": "कृपया अपना लिंग चुनें",
    "sw": "Tafadhali chagua jinsia yako",
    "ko": "성별을 선택하세요",
    "pl": "Proszę wybrać swoją płeć",
    "tr": "Lütfen cinsiyetinizi seçin",
    "nl": "Selecteer uw geslacht",
    "id": "Silakan pilih jenis kelamin Anda"
  },
  "selectCountry": {
    "en": "Select country",
    "fr": "Sélectionnez le pays",
    "es": "Seleccione el país",
    "de": "Land auswählen",
    "pt": "Selecione o país",
    "it": "Seleziona il paese",
    "ru": "Выберите страну",
    "ar": "اختر الدولة",
    "zh": "选择国家",
    "ja": "国を選択",
    "hi": "देश चुनें",
    "sw": "Chagua nchi",
    "ko": "국가 선택",
    "pl": "Wybierz kraj",
    "tr": "Ülke seçin",
    "nl": "Selecteer land",
    "id": "Pilih negara"
  },
  "selectCity": {
    "en": "Select city",
    "fr": "Sélectionnez la ville",
    "es": "Seleccione la ciudad",
    "de": "Stadt auswählen",
    "pt": "Selecione a cidade",
    "it": "Seleziona la città",
    "ru": "Выберите город",
    "ar": "اختر المدينة",
    "zh": "选择城市",
    "ja": "都市を選択",
    "hi": "शहर चुनें",
    "sw": "Chagua mji",
    "ko": "도시 선택",
    "pl": "Wybierz miasto",
    "tr": "Şehir seçin",
    "nl": "Selecteer stad",
    "id": "Pilih kota"
  },
  "selectState": {
    "en": "Select state",
    "fr": "Sélectionnez l'État",
    "es": "Seleccione el estado",
    "de": "Bundesland auswählen",
    "pt": "Selecione o estado",
    "it": "Seleziona lo stato",
    "ru": "Выберите штат/регион",
    "ar": "اختر الولاية",
    "zh": "选择州/省",
    "ja": "州を選択",
    "hi": "राज्य चुनें",
    "sw": "Chagua jimbo",
    "ko": "주 선택",
    "pl": "Wybierz stan",
    "tr": "Eyalet seçin",
    "nl": "Selecteer staat",
    "id": "Pilih provinsi"
  },
  "selectCategory": {
    "en": "Select category",
    "fr": "Sélectionnez la catégorie",
    "es": "Seleccione la categoría",
    "de": "Kategorie auswählen",
    "pt": "Selecione a categoria",
    "it": "Seleziona la categoria",
    "ru": "Выберите категорию",
    "ar": "اختر الفئة",
    "zh": "选择类别",
    "ja": "カテゴリを選択",
    "hi": "श्रेणी चुनें",
    "sw": "Chagua kategoria",
    "ko": "카테고리 선택",
    "pl": "Wybierz kategorię",
    "tr": "Kategori seçin",
    "nl": "Selecteer categorie",
    "id": "Pilih kategori"
  },
  "globalSearch": {
    "en": "Global Search",
    "fr": "Recherche globale",
    "es": "Búsqueda global",
    "de": "Globale Suche",
    "pt": "Pesquisa global",
    "it": "Ricerca globale",
    "ru": "Глобальный поиск",
    "ar": "بحث عالمي",
    "zh": "全局搜索",
    "ja": "グローバル検索",
    "hi": "वैश्विक खोज",
    "sw": "Utafutaji wa Ulimwengu",
    "ko": "글로벌 검색",
    "pl": "Wyszukiwanie globalne",
    "tr": "Küresel Arama",
    "nl": "Globaal zoeken",
    "id": "Pencarian global"
  },
  "search": {
    "en": "Search",
    "fr": "Rechercher",
    "es": "Buscar",
    "de": "Suchen",
    "pt": "Pesquisar",
    "it": "Cerca",
    "ru": "Поиск",
    "ar": "بحث",
    "zh": "搜索",
    "ja": "検索",
    "hi": "खोजें",
    "sw": "Tafuta",
    "ko": "검색",
    "pl": "Szukaj",
    "tr": "Ara",
    "nl": "Zoeken",
    "id": "Cari"
  },
  "refresh": {
    "en": "Refresh",
    "fr": "Rafraîchir",
    "es": "Actualizar",
    "de": "Aktualisieren",
    "pt": "Atualizar",
    "it": "Aggiorna",
    "ru": "Обновить",
    "ar": "تحديث",
    "zh": "刷新",
    "ja": "更新",
    "hi": "रिफ्रेश करें",
    "sw": "Onyesha upya",
    "ko": "새로 고침",
    "pl": "Odśwież",
    "tr": "Yenile",
    "nl": "Vernieuwen",
    "id": "Muat ulang"
  },
  "searchingDatabase": {
    "en": "Searching Database",
    "fr": "Recherche dans la base de données",
    "es": "Buscando en la base de datos",
    "de": "Datenbank wird durchsucht",
    "pt": "Pesquisando no banco de dados",
    "it": "Ricerca nel database",
    "ru": "Поиск в базе данных",
    "ar": "جارٍ البحث في قاعدة البيانات",
    "zh": "正在搜索数据库",
    "ja": "データベースを検索中",
    "hi": "डेटाबेस खोज रहे हैं",
    "sw": "Inatafuta hifadhidata",
    "ko": "데이터베이스 검색 중",
    "pl": "Przeszukiwanie bazy danych",
    "tr": "Veritabanı aranıyor",
    "nl": "Database doorzoeken",
    "id": "Mencari di basis data"
  },
  "refreshingSystem": {
    "en": "Refreshing System",
    "fr": "Actualisation du système",
    "es": "Actualizando sistema",
    "de": "System wird aktualisiert",
    "pt": "Atualizando sistema",
    "it": "Aggiornamento del sistema",
    "ru": "Обновление системы",
    "ar": "تحديث النظام",
    "zh": "正在刷新系统",
    "ja": "システムを更新中",
    "hi": "सिस्टम रीफ्रेश हो रहा है",
    "sw": "Mfumo unafanywa upya",
    "ko": "시스템 새로 고치는 중",
    "pl": "Odświeżanie systemu",
    "tr": "Sistem yenileniyor",
    "nl": "Systeem vernieuwen",
    "id": "Menyegarkan sistem"
  },
  "from": {
    "en": "From",
    "fr": "De",
    "es": "De",
    "de": "Von",
    "pt": "De",
    "it": "Da",
    "ru": "От",
    "ar": "من",
    "zh": "从",
    "ja": "から",
    "hi": "से",
    "sw": "Kutoka",
    "ko": "부터",
    "pl": "Od",
    "tr": "Kimden",
    "nl": "Van",
    "id": "Dari"
  },
  "to": {
    "en": "To",
    "fr": "À",
    "es": "A",
    "de": "Bis",
    "pt": "Para",
    "it": "A",
    "ru": "До",
    "ar": "إلى",
    "zh": "到",
    "ja": "まで",
    "hi": "तक",
    "sw": "Hadi",
    "ko": "까지",
    "pl": "Do",
    "tr": "Kime",
    "nl": "Tot",
    "id": "Ke"
  },
  "day": {
    "en": "Day",
    "fr": "Jour",
    "es": "Día",
    "de": "Tag",
    "pt": "Dia",
    "it": "Giorno",
    "ru": "День",
    "ar": "يوم",
    "zh": "日",
    "ja": "日",
    "hi": "दिन",
    "sw": "Siku",
    "ko": "일",
    "pl": "Dzień",
    "tr": "Gün",
    "nl": "Dag",
    "id": "Hari"
  },
  "month": {
    "en": "Month",
    "fr": "Mois",
    "es": "Mes",
    "de": "Monat",
    "pt": "Mês",
    "it": "Mese",
    "ru": "Месяц",
    "ar": "شهر",
    "zh": "月",
    "ja": "月",
    "hi": "महीना",
    "sw": "Mwezi",
    "ko": "월",
    "pl": "Miesiąc",
    "tr": "Ay",
    "nl": "Maand",
    "id": "Bulan"
  },
  "year": {
    "en": "Year",
    "fr": "Année",
    "es": "Año",
    "de": "Jahr",
    "pt": "Ano",
    "it": "Anno",
    "ru": "Год",
    "ar": "سنة",
    "zh": "年",
    "ja": "年",
    "hi": "साल",
    "sw": "Mwaka",
    "ko": "년",
    "pl": "Rok",
    "tr": "Yıl",
    "nl": "Jaar",
    "id": "Tahun"
  },
  "notTrending": {
    "en": "is not Trending at this Hour, Check Later",
    "fr": "n'est pas tendance à cette heure, revenez plus tard",
    "es": "no es tendencia en esta hora, vuelva más tarde",
    "de": "ist zu dieser Stunde nicht im Trend, später erneut prüfen",
    "pt": "não está em alta neste momento, verifique mais tarde",
    "it": "non è di tendenza in quest'ora, controlla più tardi",
    "ru": "сейчас не в тренде, попробуйте позже",
    "ar": "ليست رائجة في هذه الساعة، تحقق لاحقًا",
    "zh": "此时未流行，请稍后查看",
    "ja": "この時間はトレンドではありません、後で確認してください",
    "hi": "इस समय ट्रेंडिंग में नहीं है, बाद में जाँच करें",
    "sw": "haijawa maarufu saa hii, angalia baadaye",
    "ko": "이 시간에는 트렌드가 아닙니다, 나중에 확인하세요",
    "pl": "nie jest w trendach o tej godzinie, sprawdź później",
    "tr": "bu saatte trend değil, daha sonra kontrol edin",
    "nl": "is op dit uur niet trending, controleer later",
    "id": "tidak sedang tren pada jam ini, periksa lagi nanti"
  },
  "locationRequired": {
    "en": "Location Service required, Please enable your location and grant access when prompted to allow NEWSWORLD provide relevant information efficiently",
    "fr": "Service de localisation requis, veuillez activer votre localisation et accorder l'accès lorsqu'on vous le demande pour permettre à NEWSWORLD de fournir des informations pertinentes efficacement",
    "es": "Se requiere servicio de ubicación, habilite su ubicación y otorgue acceso cuando se le solicite para permitir que NEWSWORLD proporcione información relevante de manera eficiente",
    "de": "Standortdienst erforderlich, bitte aktivieren Sie Ihren Standort und gewähren Sie Zugriff, wenn Sie dazu aufgefordert werden, damit NEWSWORLD relevante Informationen effizient bereitstellen kann",
    "pt": "Serviço de localização necessário, ative sua localização e conceda acesso quando solicitado para permitir que o NEWSWORLD forneça informações relevantes de forma eficiente",
    "it": "Servizio di localizzazione richiesto, abilita la tua posizione e concedi l'accesso quando richiesto per consentire a NEWSWORLD di fornire informazioni pertinenti in modo efficiente",
    "ru": "Требуется служба определения местоположения, включите геолокацию и предоставьте доступ по запросу, чтобы NEWSWORLD мог эффективно предоставлять актуальную информацию",
    "ar": "خدمة الموقع مطلوبة، يرجى تفعيل موقعك ومنح الإذن عند الطلب للسماح لـ NEWSWORLD بتقديم المعلومات ذات الصلة بكفاءة",
    "zh": "需要定位服务，请启用您的位置并在提示时授予访问权限，以便 NEWSWORLD 高效提供相关信息",
    "ja": "位置情報サービスが必要です。位置情報を有効にし、要求があった際にアクセスを許可して、NEWSWORLD が効率的に関連情報を提供できるようにしてください",
    "hi": "स्थान सेवा आवश्यक है, कृपया अपना स्थान सक्षम करें और NEWSWORLD को प्रासंगिक जानकारी कुशलतापूर्वक प्रदान करने की अनुमति देने के लिए संकेत मिलने पर एक्सेस दें",
    "sw": "Huduma ya eneo inahitajika, tafadhali wezesha eneo lako na toa ruhusa unapoulizwa ili kuruhusu NEWSWORLD kutoa taarifa muhimu kwa ufanisi",
    "ko": "위치 서비스가 필요합니다. 위치를 활성화하고 요청 시 액세스를 허용하여 NEWSWORLD가 관련 정보를 효율적으로 제공할 수 있도록 하세요",
    "pl": "Wymagana usługa lokalizacji, włącz swoją lokalizację i udziel dostępu, gdy zostaniesz o to poproszony, aby NEWSWORLD mógł sprawnie dostarczać odpowiednie informacje",
    "tr": "Konum hizmeti gerekli, lütfen konumunuzu etkinleştirin ve istendiğinde erişime izin verin, böylece NEWSWORLD ilgili bilgileri verimli bir şekilde sağlayabilir",
    "nl": "Locatieservice vereist, schakel uw locatie in en geef toegang wanneer hierom wordt gevraagd zodat NEWSWORLD relevante informatie efficiënt kan verstrekken",
    "id": "Layanan lokasi diperlukan, aktifkan lokasi Anda dan berikan akses saat diminta agar NEWSWORLD dapat memberikan informasi yang relevan secara efisien"
  },
  "permissionDenied": {
    "en": "Permission Denied!, Allow NEWSWORLD to use your location for adequate performance.",
    "fr": "Autorisation refusée ! Autorisez NEWSWORLD à utiliser votre localisation pour des performances adéquates.",
    "es": "¡Permiso denegado! Permita que NEWSWORLD use su ubicación para un rendimiento adecuado.",
    "de": "Zugriff verweigert! Erlauben Sie NEWSWORLD, Ihren Standort für eine ordnungsgemäße Leistung zu verwenden.",
    "pt": "Permissão negada! Permita que o NEWSWORLD use sua localização para um desempenho adequado.",
    "it": "Autorizzazione negata! Consenti a NEWSWORLD di utilizzare la tua posizione per un funzionamento adeguato.",
    "ru": "Доступ запрещён! Разрешите NEWSWORLD использовать ваше местоположение для корректной работы.",
    "ar": "تم رفض الإذن! اسمح لـ NEWSWORLD باستخدام موقعك للحصول على أداء مناسب.",
    "zh": "权限被拒绝！请允许 NEWSWORLD 使用您的位置以保证正常运行。",
    "ja": "許可が拒否されました！NEWSWORLD が適切に動作するために位置情報を許可してください。",
    "hi": "अनुमति अस्वीकृत! कृपया NEWSWORLD को आपके स्थान का उपयोग करने की अनुमति दें ताकि प्रदर्शन बेहतर हो सके।",
    "sw": "Ruhusa imekataliwa! Ruhusu NEWSWORLD kutumia eneo lako kwa utendaji bora.",
    "ko": "권한 거부됨! NEWSWORLD가 적절히 작동할 수 있도록 위치 사용을 허용하세요.",
    "pl": "Odmowa dostępu! Zezwól NEWSWORLD na korzystanie z Twojej lokalizacji w celu zapewnienia odpowiedniej wydajności.",
    "tr": "İzin reddedildi! NEWSWORLD'un uygun performans için konumunuzu kullanmasına izin verin.",
    "nl": "Toestemming geweigerd! Sta NEWSWORLD toe uw locatie te gebruiken voor goede prestaties.",
    "id": "Izin ditolak! Izinkan NEWSWORLD menggunakan lokasi Anda untuk kinerja yang memadai."
  },
  "emailNotAuthorized": {
    "en": "This Email Address is not yet Authorized! please create account then try again.",
    "fr": "Cette adresse e-mail n'est pas encore autorisée ! Veuillez créer un compte puis réessayer.",
    "es": "¡Esta dirección de correo electrónico aún no está autorizada! Cree una cuenta y vuelva a intentarlo.",
    "de": "Diese E-Mail-Adresse ist noch nicht autorisiert! Bitte erstellen Sie ein Konto und versuchen Sie es erneut.",
    "pt": "Este endereço de e-mail ainda não está autorizado! Crie uma conta e tente novamente.",
    "it": "Questo indirizzo email non è ancora autorizzato! Crea un account e riprova.",
    "ru": "Этот адрес электронной почты ещё не авторизован! Создайте аккаунт и попробуйте снова.",
    "ar": "لم يتم تفويض عنوان البريد الإلكتروني هذا بعد! يرجى إنشاء حساب ثم المحاولة مرة أخرى.",
    "zh": "此电子邮件地址尚未授权！请创建帐户后再试。",
    "ja": "このメールアドレスはまだ認証されていません！アカウントを作成してからもう一度お試しください。",
    "hi": "यह ईमेल पता अभी अधिकृत नहीं है! कृपया खाता बनाएँ और पुनः प्रयास करें।",
    "sw": "Anwani hii ya barua pepe haijaruhusiwa bado! Tafadhali unda akaunti kisha ujaribu tena.",
    "ko": "이 이메일 주소는 아직 인증되지 않았습니다! 계정을 만든 후 다시 시도하세요.",
    "pl": "Ten adres e-mail nie jest jeszcze autoryzowany! Utwórz konto i spróbuj ponownie.",
    "tr": "Bu e-posta adresi henüz yetkilendirilmedi! Lütfen bir hesap oluşturun ve tekrar deneyin.",
    "nl": "Dit e-mailadres is nog niet geautoriseerd! Maak een account aan en probeer het opnieuw.",
    "id": "Alamat email ini belum diotorisasi! Silakan buat akun lalu coba lagi."
  },
  "wrongPassword": {
    "en": "Wrong Password! kindly click on forgot Password to set new digits.",
    "fr": "Mot de passe incorrect ! Veuillez cliquer sur mot de passe oublié pour définir de nouveaux chiffres.",
    "es": "¡Contraseña incorrecta! Haga clic en olvidar contraseña para establecer nuevos dígitos.",
    "de": "Falsches Passwort! Bitte klicken Sie auf Passwort vergessen, um neue Ziffern festzulegen.",
    "pt": "Senha incorreta! Clique em esqueci a senha para definir novos dígitos.",
    "it": "Password errata! Fare clic su password dimenticata per impostare nuove cifre.",
    "ru": "Неверный пароль! Нажмите «Забыли пароль», чтобы задать новые данные.",
    "ar": "كلمة المرور غير صحيحة! يرجى النقر على نسيت كلمة المرور لتعيين أرقام جديدة.",
    "zh": "密码错误！请点击忘记密码以设置新密码。",
    "ja": "パスワードが間違っています！パスワードを忘れたをクリックして新しい桁を設定してください。",
    "hi": "गलत पासवर्ड! कृपया नया अंक सेट करने के लिए पासवर्ड भूल गए पर क्लिक करें।",
    "sw": "Nenosiri si sahihi! Tafadhali bonyeza umesahau nenosiri ili kuweka tarakimu mpya.",
    "ko": "비밀번호가 잘못되었습니다! 새 비밀번호를 설정하려면 비밀번호 찾기를 클릭하세요.",
    "pl": "Nieprawidłowe hasło! Kliknij „Zapomniałem hasła”, aby ustawić nowe cyfry.",
    "tr": "Yanlış şifre! Yeni rakamlar ayarlamak için şifremi unuttum'a tıklayın.",
    "nl": "Onjuist wachtwoord! Klik op wachtwoord vergeten om nieuwe cijfers in te stellen.",
    "id": "Kata sandi salah! Silakan klik lupa kata sandi untuk mengatur digit baru."
  },
  "emailExists": {
    "en": "Email already exists!",
    "fr": "L'adresse e-mail existe déjà !",
    "es": "¡El correo electrónico ya existe!",
    "de": "E-Mail existiert bereits!",
    "pt": "O e-mail já existe!",
    "it": "L'email esiste già!",
    "ru": "Электронная почта уже существует!",
    "ar": "البريد الإلكتروني موجود بالفعل!",
    "zh": "电子邮件已存在！",
    "ja": "メールアドレスはすでに存在します！",
    "hi": "ईमेल पहले से मौजूद है!",
    "sw": "Barua pepe tayari ipo!",
    "ko": "이메일이 이미 존재합니다!",
    "pl": "Adres e-mail już istnieje!",
    "tr": "E-posta zaten var!",
    "nl": "E-mailadres bestaat al!",
    "id": "Email sudah ada!"
  },
  "passwordChanged": {
    "en": "Password Changed Successfully!",
    "fr": "Mot de passe changé avec succès !",
    "es": "¡Contraseña cambiada con éxito!",
    "de": "Passwort erfolgreich geändert!",
    "pt": "Senha alterada com sucesso!",
    "it": "Password cambiata con successo!",
    "ru": "Пароль успешно изменён!",
    "ar": "تم تغيير كلمة المرور بنجاح!",
    "zh": "密码修改成功！",
    "ja": "パスワードが正常に変更されました！",
    "hi": "पासवर्ड सफलतापूर्वक बदल गया!",
    "sw": "Nenosiri limebadilishwa kwa mafanikio!",
    "ko": "비밀번호가 성공적으로 변경되었습니다!",
    "pl": "Hasło zostało pomyślnie zmienione!",
    "tr": "Şifre başarıyla değiştirildi!",
    "nl": "Wachtwoord succesvol gewijzigd!",
    "id": "Kata sandi berhasil diubah!"
  },
  "success": {
    "en": "Success!",
    "fr": "Succès !",
    "es": "¡Éxito!",
    "de": "Erfolg!",
    "pt": "Sucesso!",
    "it": "Successo!",
    "ru": "Успешно!",
    "ar": "نجاح!",
    "zh": "成功！",
    "ja": "成功！",
    "hi": "सफलता!",
    "sw": "Mafanikio!",
    "ko": "성공!",
    "pl": "Sukces!",
    "tr": "Başarılı!",
    "nl": "Succes!",
    "id": "Berhasil!"
  },
  "invalidCode": {
    "en": "Invalid code!",
    "fr": "Code invalide !",
    "es": "¡Código inválido!",
    "de": "Ungültiger Code!",
    "pt": "Código inválido!",
    "it": "Codice non valido!",
    "ru": "Неверный код!",
    "ar": "رمز غير صالح!",
    "zh": "无效的代码！",
    "ja": "無効なコード！",
    "hi": "अमान्य कोड!",
    "sw": "Msimbo batili!",
    "ko": "잘못된 코드!",
    "pl": "Nieprawidłowy kod!",
    "tr": "Geçersiz kod!",
    "nl": "Ongeldige code!",
    "id": "Kode tidak valid!"
  },
  "resetFailed": {
    "en": "Reset Failed. Try Again!",
    "fr": "Échec de la réinitialisation. Réessayez !",
    "es": "Error al restablecer. ¡Inténtalo de nuevo!",
    "de": "Zurücksetzen fehlgeschlagen. Versuchen Sie es erneut!",
    "pt": "Falha na redefinição. Tente novamente!",
    "it": "Ripristino non riuscito. Riprova!",
    "ru": "Сброс не удался. Попробуйте снова!",
    "ar": "فشل إعادة التعيين. حاول مرة أخرى!",
    "zh": "重置失败。请再试一次！",
    "ja": "リセットに失敗しました。もう一度お試しください！",
    "hi": "रीसेट विफल। पुनः प्रयास करें!",
    "sw": "Kuseti upya kumeharibika. Jaribu tena!",
    "ko": "재설정 실패. 다시 시도하세요!",
    "pl": "Reset nie powiódł się. Spróbuj ponownie!",
    "tr": "Sıfırlama başarısız oldu. Tekrar deneyin!",
    "nl": "Reset mislukt. Probeer het opnieuw!",
    "id": "Reset gagal. Coba lagi!"
  },
  "searchbyname": {
    "en": "search by name",
    "fr": "rechercher par nom",
    "es": "buscar por nombre",
    "pt": "pesquisar por nome",
    "de": "nach Namen suchen",
    "it": "cerca per nome",
    "pl": "szukaj według nazwy",
    "ru": "искать по имени",
    "ar": "البحث بالاسم",
    "zh": "按姓名搜索",
    "ja": "名前で検索",
    "hi": "नाम से खोजें",
    "sw": "tafuta kwa jina",
    "ko": "이름으로 검색",
    "tr": "isme göre ara",
    "nl": "zoeken op naam",
    "id": "cari berdasarkan nama"
  },
  
  "Availableagain": {
    "en": "News not Available at this Hour, Please try again",
    "fr": "Actualités non disponibles pour le moment, veuillez réessayer",
    "es": "Noticias no disponibles en este momento, inténtelo de nuevo",
    "pt": "Notícias não disponíveis neste momento, tente novamente",
    "de": "Nachrichten sind derzeit nicht verfügbar, bitte versuchen Sie es erneut",
    "it": "Notizie non disponibili in questo momento, riprova",
    "pl": "Wiadomości niedostępne w tej chwili, spróbuj ponownie",
    "ru": "Новости недоступны в данный момент, попробуйте снова",
    "ar": "الأخبار غير متوفرة في هذه الساعة، يرجى المحاولة مرة أخرى",
    "zh": "此时新闻不可用，请重试",
    "ja": "この時間はニュースが利用できません。もう一度お試しください",
    "hi": "इस समय समाचार उपलब्ध नहीं है, कृपया पुनः प्रयास करें",
    "sw": "Habari hazipatikani kwa saa hii, tafadhali jaribu tena",
    "ko": "현재 이 시간에는 뉴스를 이용할 수 없습니다. 다시 시도해 주세요",
    "tr": "Bu saatte haberler mevcut değil, lütfen tekrar deneyin",
    "nl": "Nieuws niet beschikbaar op dit uur, probeer het opnieuw",
    "id": "Berita tidak tersedia saat ini, silakan coba lagi"
  },
  "verifycreate": {
    "en": "verify and create your ACCOUNT",
    "fr": "vérifiez et créez votre COMPTE",
    "es": "verifique y cree su CUENTA",
    "pt": "verifique e crie sua CONTA",
    "de": "überprüfen und Ihr KONTO erstellen",
    "it": "verifica e crea il tuo ACCOUNT",
    "pl": "zweryfikuj i utwórz swoje KONTO",
    "ru": "подтвердите и создайте свой АККАУНТ",
    "ar": "تحقق وأنشئ حسابك",
    "zh": "验证并创建您的账户",
    "ja": "確認してアカウントを作成",
    "hi": "सत्यापित करें और अपना खाता बनाएं",
    "sw": "thibitisha na unda AKAUNTI yako",
    "ko": "확인 후 계정을 생성하세요",
    "tr": "hesabınızı doğrulayın ve oluşturun",
    "nl": "verifieer en maak uw ACCOUNT aan",
    "id": "verifikasi dan buat AKUN Anda"
  },
  "retrieve": {
    "en": "retrieve and update your PASSWORD",
    "fr": "récupérez et mettez à jour votre MOT DE PASSE",
    "es": "recupere y actualice su CONTRASEÑA",
    "pt": "recupere e atualize sua SENHA",
    "de": "Ihr PASSWORT abrufen und aktualisieren",
    "it": "recupera e aggiorna la tua PASSWORD",
    "pl": "odzyskaj i zaktualizuj swoje HASŁO",
    "ru": "восстановите и обновите свой ПАРОЛЬ",
    "ar": "استرجع وقم بتحديث كلمة المرور الخاصة بك",
    "zh": "找回并更新您的密码",
    "ja": "パスワードを取得して更新する",
    "hi": "अपना पासवर्ड पुनः प्राप्त करें और अपडेट करें",
    "sw": "pata na usasishe NYWILA yako",
    "ko": "비밀번호를 복구하고 업데이트하세요",
    "tr": "Şifrenizi alın ve güncelleyin",
    "nl": "haal uw WACHTWOORD op en werk het bij",
    "id": "ambil dan perbarui KATA SANDI Anda"
  },
  "emailsent": {
    "en": "A Verification email has been sent to ",
    "fr": "Un e-mail de vérification a été envoyé à ",
    "es": "Se ha enviado un correo de verificación a ",
    "pt": "Um e-mail de verificação foi enviado para ",
    "de": "Eine Bestätigungs-E-Mail wurde gesendet an ",
    "it": "Una e-mail di verifica è stata inviata a ",
    "pl": "E-mail weryfikacyjny został wysłany do ",
    "ru": "Письмо с подтверждением было отправлено на ",
    "ar": "تم إرسال بريد إلكتروني للتحقق إلى ",
    "zh": "验证邮件已发送至 ",
    "ja": "確認メールが送信されました: ",
    "hi": "सत्यापन ईमेल भेजा गया है ",
    "sw": "Barua pepe ya uthibitisho imetumwa kwa ",
    "ko": "확인 이메일이 전송되었습니다: ",
    "tr": "Bir doğrulama e-postası gönderildi: ",
    "nl": "Een verificatie-e-mail is verzonden naar ",
    "id": "Email verifikasi telah dikirim ke "
  },
  "entercode": {
    "en": "Please enter the code below to",
    "fr": "Veuillez entrer le code ci-dessous pour",
    "es": "Por favor, ingrese el código a continuación para",
    "pt": "Por favor, insira o código abaixo para",
    "de": "Bitte geben Sie den untenstehenden Code ein, um",
    "it": "Inserisci il codice qui sotto per",
    "pl": "Wprowadź poniżej kod, aby",
    "ru": "Введите ниже код, чтобы",
    "ar": "الرجاء إدخال الرمز أدناه لـ",
    "zh": "请输入以下代码以",
    "ja": "以下のコードを入力してください: ",
    "hi": "कृपया नीचे दिया गया कोड दर्ज करें",
    "sw": "Tafadhali weka msimbo hapa chini ili",
    "ko": "아래 코드를 입력하세요:",
    "tr": "Lütfen aşağıdaki kodu giriniz",
    "nl": "Voer onderstaande code in om",
    "id": "Silakan masukkan kode di bawah ini untuk"
  },
  "Verify": {
    "en": "Verify",
    "fr": "Vérifier",
    "es": "Verificar",
    "pt": "Verificar",
    "de": "Überprüfen",
    "it": "Verifica",
    "pl": "Zweryfikuj",
    "ru": "Подтвердить",
    "ar": "تحقق",
    "zh": "验证",
    "ja": "確認",
    "hi": "सत्यापित करें",
    "sw": "Thibitisha",
    "ko": "확인",
    "tr": "Doğrula",
    "nl": "Verifiëren",
    "id": "Verifikasi"
  },
  "clickLogin": {
    "en": "click here to Login",
    "fr": "cliquez ici pour vous connecter",
    "es": "haga clic aquí para iniciar sesión",
    "pt": "clique aqui para entrar",
    "de": "klicken Sie hier, um sich anzumelden",
    "it": "clicca qui per accedere",
    "pl": "kliknij tutaj, aby się zalogować",
    "ru": "нажмите здесь, чтобы войти",
    "ar": "انقر هنا لتسجيل الدخول",
    "zh": "点击此处登录",
    "ja": "ログインするにはここをクリック",
    "hi": "लॉगिन करने के लिए यहां क्लिक करें",
    "sw": "bonyeza hapa ili kuingia",
    "ko": "로그인하려면 여기를 클릭하세요",
    "tr": "Giriş yapmak için buraya tıklayın",
    "nl": "klik hier om in te loggen",
    "id": "klik di sini untuk masuk"
  },
  "clickcontinue": {
    "en": "click here to continue",
    "fr": "cliquez ici pour continuer",
    "es": "haga clic aquí para continuar",
    "pt": "clique aqui para continuar",
    "de": "klicken Sie hier, um fortzufahren",
    "it": "clicca qui per continuare",
    "pl": "kliknij tutaj, aby kontynuować",
    "ru": "нажмите здесь, чтобы продолжить",
    "ar": "انقر هنا للمتابعة",
    "zh": "点击此处继续",
    "ja": "続行するにはここをクリック",
    "hi": "जारी रखने के लिए यहां क्लिक करें",
    "sw": "bonyeza hapa ili kuendelea",
    "ko": "계속하려면 여기를 클릭하세요",
    "tr": "Devam etmek için buraya tıklayın",
    "nl": "klik hier om door te gaan",
    "id": "klik di sini untuk melanjutkan"
  },
  "livenews": {
    "en": "live news",
    "fr": "nouvelles en direct",
    "es": "noticias en vivo",
    "pt": "notícias ao vivo",
    "de": "Live-Nachrichten",
    "it": "notizie in diretta",
    "pl": "wiadomości na żywo",
    "ru": "прямые новости",
    "ar": "أخبار مباشرة",
    "zh": "直播新闻",
    "ja": "ライブニュース",
    "hi": "लाइव समाचार",
    "sw": "habari za moja kwa moja",
    "ko": "실시간 뉴스",
    "tr": "canlı haberler",
    "nl": "live nieuws",
    "id": "berita langsung"
  },
  "sporthighlights": {
    "en": "sport highlights",
    "fr": "faits saillants du sport",
    "es": "momentos destacados deportivos",
    "pt": "destaques esportivos",
    "de": "Sporthöhepunkte",
    "it": "momenti salienti sportivi",
    "pl": "najważniejsze wydarzenia sportowe",
    "ru": "спортивные моменты",
    "ar": "أبرز الأحداث الرياضية",
    "zh": "体育亮点",
    "ja": "スポーツハイライト",
    "hi": "खेल की मुख्य झलकियाँ",
    "sw": "mambo muhimu ya michezo",
    "ko": "스포츠 하이라이트",
    "tr": "spor özetleri",
    "nl": "sport hoogtepunten",
    "id": "sorotan olahraga"
  },
  "PASSWORDRESET": {
    "en": "PASSWORD RESET",
    "fr": "RÉINITIALISATION DU MOT DE PASSE",
    "de": "PASSWORT ZURÜCKSETZEN",
    "ar": "إعادة تعيين كلمة المرور",
    "es": "RESTABLECER CONTRASEÑA",
    "tr": "ŞİFRE SIFIRLAMA",
    "nl": "WACHTWOORD OPNIEUW INSTELLEN",
    "it": "REIMPOSTA PASSWORD",
    "ja": "パスワードリセット",
    "zh": "密码重置",
    "ko": "비밀번호 재설정",
    "hi": "पासवर्ड रीसेट",
    "pt": "REDEFINIR SENHA",
    "ru": "СБРОС ПАРОЛЯ",
    "sw": "Weka Upya Nenosiri",
    "pl": "RESET HASŁA",
    "id": "SETEL ULANG KATA SANDI"
  },
  "NewPassword": {
    "en": "New Password",
    "fr": "Nouveau mot de passe",
    "de": "Neues Passwort",
    "ar": "كلمة مرور جديدة",
    "es": "Nueva contraseña",
    "tr": "Yeni Şifre",
    "nl": "Nieuw wachtwoord",
    "it": "Nuova password",
    "ja": "新しいパスワード",
    "zh": "新密码",
    "ko": "새 비밀번호",
    "hi": "नया पासवर्ड",
    "pt": "Nova senha",
    "ru": "Новый пароль",
    "sw": "Nenosiri Jipya",
    "pl": "Nowe hasło",
    "id": "Kata Sandi Baru"
  },
  "RESET": {
    "en": "RESET",
    "fr": "RÉINITIALISER",
    "de": "ZURÜCKSETZEN",
    "ar": "إعادة تعيين",
    "es": "RESTABLECER",
    "tr": "SIFIRLA",
    "nl": "RESETTEN",
    "it": "REIMPOSTA",
    "ja": "リセット",
    "zh": "重置",
    "ko": "재설정",
    "hi": "रीसेट",
    "pt": "REDEFINIR",
    "ru": "СБРОСИТЬ",
    "sw": "Weka Upya",
    "pl": "RESETUJ",
    "id": "RESET"
  },
  "selectIssue": {
    "en": "Select type of issue",
    "fr": "Sélectionner le type de problème",
    "de": "Art des Problems auswählen",
    "ar": "اختر نوع المشكلة",
    "es": "Seleccionar tipo de problema",
    "tr": "Sorun türünü seç",
    "nl": "Selecteer type probleem",
    "it": "Seleziona tipo di problema",
    "ja": "問題の種類を選択",
    "zh": "选择问题类型",
    "ko": "문제 유형 선택",
    "hi": "समस्या का प्रकार चुनें",
    "pt": "Selecionar tipo de problema",
    "ru": "Выберите тип проблемы",
    "sw": "Chagua aina ya tatizo",
    "pl": "Wybierz rodzaj problemu",
    "id": "Pilih jenis masalah"
  },
  "assistance": {
    "en": "Please briefly describe your problem so our support team can understand it and provide assistance",
    "fr": "Veuillez décrire brièvement votre problème afin que notre équipe d'assistance puisse le comprendre et fournir de l'aide",
    "de": "Bitte beschreiben Sie Ihr Problem kurz, damit unser Support-Team es verstehen und Unterstützung leisten kann",
    "ar": "يرجى وصف مشكلتك بإيجاز حتى يتمكن فريق الدعم لدينا من فهمها وتقديم المساعدة",
    "es": "Describa brevemente su problema para que nuestro equipo de soporte pueda entenderlo y brindar asistencia",
    "tr": "Lütfen sorununuzu kısaca açıklayın, böylece destek ekibimiz anlayabilir ve yardım sağlayabilir",
    "nl": "Beschrijf alstublieft kort uw probleem zodat ons ondersteuningsteam het kan begrijpen en hulp kan bieden",
    "it": "Descrivi brevemente il tuo problema in modo che il nostro team di supporto possa comprenderlo e fornire assistenza",
    "ja": "サポートチームが理解して支援できるように、問題を簡単に説明してください",
    "zh": "请简要描述您的问题，以便我们的支持团队能够理解并提供帮助",
    "ko": "지원팀이 이해하고 도움을 드릴 수 있도록 문제를 간단히 설명해 주세요",
    "hi": "कृपया अपनी समस्या का संक्षेप में वर्णन करें ताकि हमारी सहायता टीम इसे समझ सके और सहायता प्रदान कर सके",
    "pt": "Descreva brevemente seu problema para que nossa equipe de suporte possa entendê-lo e fornecer assistência",
    "ru": "Пожалуйста, кратко опишите вашу проблему, чтобы наша команда поддержки могла понять её и помочь",
    "sw": "Tafadhali eleza kwa ufupi tatizo lako ili timu yetu ya msaada iweze kulielewa na kutoa msaada",
    "pl": "Proszę krótko opisać swój problem, aby nasz zespół wsparcia mógł go zrozumieć i udzielić pomocy",
    "id": "Harap jelaskan secara singkat masalah Anda agar tim dukungan kami dapat memahaminya dan memberikan bantuan"
  },
  "Supporting": {
    "en": "Upload Supporting Documents",
    "fr": "Télécharger les documents justificatifs",
    "de": "Unterstützende Dokumente hochladen",
    "ar": "تحميل المستندات الداعمة",
    "es": "Subir documentos de respaldo",
    "tr": "Destekleyici belgeleri yükle",
    "nl": "Ondersteunende documenten uploaden",
    "it": "Carica documenti di supporto",
    "ja": "補足資料をアップロード",
    "zh": "上传支持文件",
    "ko": "지원 문서 업로드",
    "hi": "सहायक दस्तावेज़ अपलोड करें",
    "pt": "Carregar documentos de apoio",
    "ru": "Загрузить подтверждающие документы",
    "sw": "Pakia Hati za Msaada",
    "pl": "Prześlij dokumenty wspierające",
    "id": "Unggah Dokumen Pendukung"
  },
  "Optional": {
    "en": "Optional",
    "fr": "Optionnel",
    "de": "Optional",
    "ar": "اختياري",
    "es": "Opcional",
    "tr": "İsteğe bağlı",
    "nl": "Optioneel",
    "it": "Opzionale",
    "ja": "任意",
    "zh": "可选",
    "ko": "선택 사항",
    "hi": "वैकल्पिक",
    "pt": "Opcional",
    "ru": "Необязательно",
    "sw": "Hiari",
    "pl": "Opcjonalne",
    "id": "Opsional"
  },
  "Submit": {
    "en": "Submit",
    "fr": "Soumettre",
    "de": "Absenden",
    "ar": "إرسال",
    "es": "Enviar",
    "tr": "Gönder",
    "nl": "Verzenden",
    "it": "Invia",
    "ja": "送信",
    "zh": "提交",
    "ko": "제출",
    "hi": "जमा करें",
    "pt": "Enviar",
    "ru": "Отправить",
    "sw": "Tuma",
    "pl": "Prześlij",
    "id": "Kirim"
  },
  "Delivered": {
    "en": "Your Message has been Delivered! Please check your Email",
    "fr": "Votre message a été envoyé ! Veuillez vérifier votre e-mail",
    "de": "Ihre Nachricht wurde zugestellt! Bitte prüfen Sie Ihre E-Mails",
    "ar": "تم تسليم رسالتك! يرجى التحقق من بريدك الإلكتروني",
    "es": "¡Tu mensaje ha sido entregado! Por favor, revisa tu correo electrónico",
    "tr": "Mesajınız teslim edildi! Lütfen e-postanızı kontrol edin",
    "nl": "Uw bericht is afgeleverd! Controleer uw e-mail",
    "it": "Il tuo messaggio è stato consegnato! Controlla la tua email",
    "ja": "メッセージが配信されました！メールを確認してください",
    "zh": "您的消息已送达！请检查您的电子邮件",
    "ko": "메시지가 전달되었습니다! 이메일을 확인해 주세요",
    "hi": "आपका संदेश पहुंचा दिया गया है! कृपया अपना ईमेल देखें",
    "pt": "Sua mensagem foi entregue! Verifique seu e-mail",
    "ru": "Ваше сообщение было доставлено! Пожалуйста, проверьте вашу электронную почту",
    "sw": "Ujumbe wako umefikishwa! Tafadhali angalia barua pepe yako",
    "pl": "Twoja wiadomość została dostarczona! Sprawdź swoją pocztę e-mail",
    "id": "Pesan Anda telah terkirim! Silakan periksa email Anda"
  },
  "Feedback": {
    "en": "for a Feedback",
    "fr": "pour un retour",
    "de": "für ein Feedback",
    "ar": "للحصول على ملاحظات",
    "es": "para comentarios",
    "tr": "geri bildirim için",
    "nl": "voor feedback",
    "it": "per un feedback",
    "ja": "フィードバックのために",
    "zh": "用于反馈",
    "ko": "피드백을 위해",
    "hi": "प्रतिक्रिया के लिए",
    "pt": "para um feedback",
    "ru": "для обратной связи",
    "sw": "kwa maoni",
    "pl": "dla opinii",
    "id": "untuk umpan balik"
  },
  "Done": {
    "en": "Done",
    "fr": "Terminé",
    "de": "Fertig",
    "ar": "تم",
    "es": "Hecho",
    "tr": "Bitti",
    "nl": "Klaar",
    "it": "Fatto",
    "ja": "完了",
    "zh": "完成",
    "ko": "완료",
    "hi": "हो गया",
    "pt": "Concluído",
    "ru": "Готово",
    "sw": "Imekamilika",
    "pl": "Gotowe",
    "id": "Selesai"
  },
"GetPremium": {
    "en": "Get Premium",
    "fr": "Obtenir Premium",
    "de": "Premium erhalten",
    "ar": "احصل على بريميوم",
    "es": "Obtener Premium",
    "tr": "Premium Al",
    "nl": "Premium krijgen",
    "it": "Ottieni Premium",
    "ja": "プレミアムを入手",
    "zh": "获取高级版",
    "ko": "프리미엄 받기",
    "hi": "प्रीमियम प्राप्त करें",
    "pt": "Obter Premium",
    "ru": "Получить Премиум",
    "sw": "Pata Premium",
    "pl": "Uzyskaj Premium",
    "id": "Dapatkan Premium"
  },
  "Exclusive": {
    "en": "Subscribe to Premium for Exclusive Features and an ad-free experience!",
    "fr": "Abonnez-vous à Premium pour des fonctionnalités exclusives et une expérience sans publicité !",
    "de": "Abonnieren Sie Premium für exklusive Funktionen und ein werbefreies Erlebnis!",
    "ar": "اشترك في بريميوم للحصول على ميزات حصرية وتجربة خالية من الإعلانات!",
    "es": "Suscríbete a Premium para funciones exclusivas y una experiencia sin anuncios.",
    "tr": "Özel özellikler ve reklamsız deneyim için Premium'a abone olun!",
    "nl": "Abonneer je op Premium voor exclusieve functies en een advertentievrije ervaring!",
    "it": "Abbonati a Premium per funzionalità esclusive e un'esperienza senza pubblicità!",
    "ja": "プレミアムに登録して、独自機能と広告なしの体験を手に入れましょう！",
    "zh": "订阅高级版，享受专属功能和无广告体验！",
    "ko": "독점 기능과 광고 없는 경험을 위해 프리미엄에 가입하세요!",
    "hi": "विशेष सुविधाओं और बिना विज्ञापन अनुभव के लिए प्रीमियम की सदस्यता लें!",
    "pt": "Assine o Premium para recursos exclusivos e uma experiência sem anúncios!",
    "ru": "Подпишитесь на Premium, чтобы получить эксклюзивные функции и отсутствие рекламы!",
    "sw": "Jiandikishe kwa Premium kwa vipengele vya kipekee na uzoefu bila matangazo!",
    "pl": "Zasubskrybuj Premium, aby uzyskać ekskluzywne funkcje i doświadczenie bez reklam!",
    "id": "Berlangganan Premium untuk fitur eksklusif dan pengalaman bebas iklan!"
  },
  "iiCountries": {
    "en": "News Articles from 200+ Countries",
    "fr": "Articles de presse de plus de 200 pays",
    "de": "Nachrichtenartikel aus über 200 Ländern",
    "ar": "مقالات إخبارية من أكثر من 200 دولة",
    "es": "Artículos de noticias de más de 200 países",
    "tr": "200'den fazla ülkeden haber makaleleri",
    "nl": "Nieuwsartikelen uit meer dan 200 landen",
    "it": "Articoli di notizie da oltre 200 paesi",
    "ja": "200以上の国からのニュース記事",
    "zh": "来自200多个国家的新闻文章",
    "ko": "200개 이상의 국가에서 온 뉴스 기사",
    "hi": "200+ देशों से समाचार लेख",
    "pt": "Artigos de notícias de mais de 200 países",
    "ru": "Новости из более чем 200 стран",
    "sw": "Makala za Habari kutoka nchi 200+",
    "pl": "Artykuły z ponad 200 krajów",
    "id": "Artikel berita dari 200+ negara"
  },
  "iiiCategory": {
    "en": "3000+ News Articles per Category",
    "fr": "Plus de 3000 articles de presse par catégorie",
    "de": "3000+ Nachrichtenartikel pro Kategorie",
    "ar": "أكثر من 3000 مقال إخباري لكل فئة",
    "es": "Más de 3000 artículos de noticias por categoría",
    "tr": "Her kategori için 3000+ haber makalesi",
    "nl": "3000+ nieuwsartikelen per categorie",
    "it": "Oltre 3000 articoli di notizie per categoria",
    "ja": "カテゴリーごとに3000以上のニュース記事",
    "zh": "每个类别3000+新闻文章",
    "ko": "카테고리별 3000개 이상의 뉴스 기사",
    "hi": "प्रति श्रेणी 3000+ समाचार लेख",
    "pt": "Mais de 3000 artigos de notícias por categoria",
    "ru": "Более 3000 новостей в каждой категории",
    "sw": "Makala 3000+ kwa kila aina",
    "pl": "Ponad 3000 artykułów na kategorię",
    "id": "3000+ artikel berita per kategori"
  },
  "SearchName": {
    "en": "Search Trending News by Name",
    "fr": "Rechercher les actualités tendance par nom",
    "de": "Trendsuche nach Namen",
    "ar": "ابحث عن الأخبار الشائعة بالاسم",
    "es": "Buscar noticias de tendencia por nombre",
    "tr": "İsme göre trend haberleri ara",
    "nl": "Zoek trending nieuws op naam",
    "it": "Cerca notizie di tendenza per nome",
    "ja": "名前でトレンドニュースを検索",
    "zh": "按名称搜索热门新闻",
    "ko": "이름으로 트렌드 뉴스 검색",
    "hi": "नाम से ट्रेंडिंग समाचार खोजें",
    "pt": "Pesquise notícias em alta por nome",
    "ru": "Ищите популярные новости по имени",
    "sw": "Tafuta Habari Zinazotrend kwa jina",
    "pl": "Szukaj trendów wiadomości po nazwie",
    "id": "Cari berita tren berdasarkan nama"
  },
  "SearchCities": {
    "en": "Search News Articles by Cities",
    "fr": "Rechercher des articles de presse par villes",
    "de": "Nachrichtenartikel nach Städten suchen",
    "ar": "ابحث عن المقالات الإخبارية حسب المدن",
    "es": "Buscar artículos de noticias por ciudades",
    "tr": "Şehirlere göre haber makalelerini ara",
    "nl": "Zoek nieuwsartikelen per stad",
    "it": "Cerca articoli di notizie per città",
    "ja": "都市別ニュース記事を検索",
    "zh": "按城市搜索新闻文章",
    "ko": "도시별 뉴스 기사 검색",
    "hi": "शहरों के अनुसार समाचार लेख खोजें",
    "pt": "Pesquise artigos de notícias por cidades",
    "ru": "Ищите новости по городам",
    "sw": "Tafuta Makala ya Habari kwa Miji",
    "pl": "Szukaj artykułów według miast",
    "id": "Cari artikel berita berdasarkan kota"
  },
  "SearchNews": {
    "en": "Search News from 6 years ago",
    "fr": "Rechercher des actualités d'il y a 6 ans",
    "de": "Nachrichten von vor 6 Jahren suchen",
    "ar": "ابحث عن الأخبار منذ 6 سنوات",
    "es": "Buscar noticias de hace 6 años",
    "tr": "6 yıl öncesine ait haberleri ara",
    "nl": "Zoek nieuws van 6 jaar geleden",
    "it": "Cerca notizie di 6 anni fa",
    "ja": "6年前のニュースを検索",
    "zh": "搜索6年前的新闻",
    "ko": "6년 전 뉴스 검색",
    "hi": "6 साल पहले की खबरें खोजें",
    "pt": "Pesquise notícias de 6 anos atrás",
    "ru": "Искать новости 6-летней давности",
    "sw": "Tafuta Habari za miaka 6 iliyopita",
    "pl": "Szukaj wiadomości sprzed 6 lat",
    "id": "Cari berita dari 6 tahun lalu"
  },
  "WatchLive": {
    "en": "Watch Live News and Events",
    "fr": "Regarder les actualités et événements en direct",
    "de": "Live-Nachrichten und Veranstaltungen ansehen",
    "ar": "شاهد الأخبار والفعاليات مباشرة",
    "es": "Ver noticias y eventos en vivo",
    "tr": "Canlı haberleri ve etkinlikleri izle",
    "nl": "Bekijk live nieuws en evenementen",
    "it": "Guarda notizie ed eventi in diretta",
    "ja": "ライブニュースとイベントを見る",
    "zh": "观看直播新闻和活动",
    "ko": "실시간 뉴스와 이벤트 시청",
    "hi": "लाइव समाचार और कार्यक्रम देखें",
    "pt": "Assista a notícias e eventos ao vivo",
    "ru": "Смотрите новости и события в прямом эфире",
    "sw": "Tazama Habari na Matukio Mubashara",
    "pl": "Oglądaj wiadomości i wydarzenia na żywo",
    "id": "Tonton berita dan acara langsung"
  },
  "Sharethought": {
    "en": "Share your thoughts with the world",
    "fr": "Partagez vos pensées avec le monde",
    "de": "Teilen Sie Ihre Gedanken mit der Welt",
    "ar": "شارك أفكارك مع العالم",
    "es": "Comparte tus pensamientos con el mundo",
    "tr": "Düşüncelerinizi dünyayla paylaşın",
    "nl": "Deel je gedachten met de wereld",
    "it": "Condividi i tuoi pensieri con il mondo",
    "ja": "あなたの考えを世界と共有しましょう",
    "zh": "与世界分享你的想法",
    "ko": "당신의 생각을 세상과 공유하세요",
    "hi": "अपने विचार दुनिया के साथ साझा करें",
    "pt": "Compartilhe seus pensamentos com o mundo",
    "ru": "Поделитесь своими мыслями с миром",
    "sw": "Shiriki mawazo yako na dunia",
    "pl": "Podziel się swoimi myślami ze światem",
    "id": "Bagikan pikiranmu dengan dunia"
  },
  "Translatelanguage": {
    "en": "Translate Articles to 30+ languages",
    "fr": "Traduire les articles en plus de 30 langues",
    "de": "Artikel in über 30 Sprachen übersetzen",
    "ar": "ترجم المقالات إلى أكثر من 30 لغة",
    "es": "Traduce artículos a más de 30 idiomas",
    "tr": "Makaleleri 30'dan fazla dile çevirin",
    "nl": "Vertaal artikelen naar 30+ talen",
    "it": "Traduci articoli in oltre 30 lingue",
    "ja": "記事を30以上の言語に翻訳",
    "zh": "将文章翻译成30多种语言",
    "ko": "기사들을 30개 이상의 언어로 번역",
    "hi": "लेखों को 30+ भाषाओं में अनुवाद करें",
    "pt": "Traduza artigos para mais de 30 idiomas",
    "ru": "Переводите статьи на более чем 30 языков",
    "sw": "Tafsiri Makala kwa lugha 30+",
    "pl": "Tłumacz artykuły na ponad 30 języków",
    "id": "Terjemahkan artikel ke lebih dari 30 bahasa"
  },
  "ListenNews": {
    "en": "Listen to AI models read News",
    "fr": "Écoutez les modèles d'IA lire les actualités",
    "de": "KI-Modelle lesen Nachrichten vor",
    "ar": "استمع إلى نماذج الذكاء الاصطناعي تقرأ الأخبار",
    "es": "Escucha a modelos de IA leer noticias",
    "tr": "Yapay zeka modellerinin haber okumasını dinleyin",
    "nl": "Luister naar AI-modellen die nieuws lezen",
    "it": "Ascolta i modelli AI leggere le notizie",
    "ja": "AIモデルがニュースを読むのを聞く",
    "zh": "听AI模型读新闻",
    "ko": "AI 모델이 뉴스를 읽는 것을 들어보세요",
    "hi": "एआई मॉडल को समाचार पढ़ते हुए सुनें",
    "pt": "Ouça modelos de IA lerem notícias",
    "ru": "Слушайте, как модели ИИ читают новости",
    "sw": "Sikiliza mifano ya AI ikisoma Habari",
    "pl": "Posłuchaj, jak modele AI czytają wiadomości",
    "id": "Dengarkan model AI membaca berita"
  },
  "TransformAudio": {
    "en": "Transform News Articles to Audio",
    "fr": "Transformer les articles de presse en audio",
    "de": "Nachrichtenartikel in Audio umwandeln",
    "ar": "حوّل المقالات الإخبارية إلى صوت",
    "es": "Transforma artículos de noticias en audio",
    "tr": "Haber makalelerini sese dönüştür",
    "nl": "Zet nieuwsartikelen om in audio",
    "it": "Trasforma articoli di notizie in audio",
    "ja": "ニュース記事を音声に変換",
    "zh": "将新闻文章转换为音频",
    "ko": "뉴스 기사를 오디오로 변환",
    "hi": "समाचार लेखों को ऑडियो में बदलें",
    "pt": "Transforme artigos de notícias em áudio",
    "ru": "Преобразуйте новости в аудио",
    "sw": "Geuza Makala ya Habari kuwa Sauti",
    "pl": "Przekształć artykuły w audio",
    "id": "Ubah artikel berita menjadi audio"
  },
  "TranslateComment": {
    "en": "Translate Comments to your chosen language",
    "fr": "Traduire les commentaires dans la langue de votre choix",
    "de": "Kommentare in die gewünschte Sprache übersetzen",
    "ar": "ترجم التعليقات إلى اللغة التي تختارها",
    "es": "Traduce comentarios a tu idioma elegido",
    "tr": "Yorumları seçtiğiniz dile çevirin",
    "nl": "Vertaal opmerkingen naar de door jou gekozen taal",
    "it": "Traduci i commenti nella lingua che preferisci",
    "ja": "コメントを希望する言語に翻訳",
    "zh": "将评论翻译成您选择的语言",
    "ko": "댓글을 원하는 언어로 번역",
    "hi": "टिप्पणियों को अपनी चुनी हुई भाषा में अनुवाद करें",
    "pt": "Traduza comentários para o idioma escolhido",
    "ru": "Переводите комментарии на выбранный вами язык",
    "sw": "Tafsiri Maoni kwa lugha uliyochagua",
    "pl": "Tłumacz komentarze na wybrany język",
    "id": "Terjemahkan komentar ke bahasa pilihan Anda"
  },
  "Subscribe": {
    "en": "Subscribe",
    "fr": "S'abonner",
    "de": "Abonnieren",
    "ar": "اشترك",
    "es": "Suscribirse",
    "tr": "Abone Ol",
    "nl": "Abonneren",
    "it": "Iscriviti",
    "ja": "購読する",
    "zh": "订阅",
    "ko": "구독하기",
    "hi": "सदस्यता लें",
    "pt": "Inscrever-se",
    "ru": "Подписаться",
    "sw": "Jiandikishe",
    "pl": "Subskrybuj",
    "id": "Berlangganan"
  },
  "peryear": {
    "en": "per year",
    "fr": "par an",
    "de": "pro Jahr",
    "ar": "سنوياً",
    "es": "por año",
    "tr": "yılda",
    "nl": "per jaar",
    "it": "all'anno",
    "ja": "年間",
    "zh": "每年",
    "ko": "연간",
    "hi": "प्रति वर्ष",
    "pt": "por ano",
    "ru": "в год",
    "sw": "kwa mwaka",
    "pl": "rocznie",
    "id": "per tahun"
  },
  "permonth": {
    "en": "per month",
    "fr": "par mois",
    "de": "pro Monat",
    "ar": "شهرياً",
    "es": "por mes",
    "tr": "ayda",
    "nl": "per maand",
    "it": "al mese",
    "ja": "毎月",
    "zh": "每月",
    "ko": "매월",
    "hi": "प्रति माह",
    "pt": "por mês",
    "ru": "в месяц",
    "sw": "kwa mwezi",
    "pl": "miesięcznie",
    "id": "per bulan"
  },

"Reply": {
    "en": "Reply",
    "fr": "Répondre",
    "de": "Antworten",
    "ar": "الرد",
    "es": "Responder",
    "tr": "Yanıtla",
    "nl": "Antwoorden",
    "it": "Rispondi",
    "ja": "返信",
    "zh": "回复",
    "ko": "답글",
    "hi": "जवाब दें",
    "pt": "Responder",
    "ru": "Ответить",
    "sw": "Jibu",
    "pl": "Odpowiedz",
    "id": "Balas"
  },
  
  "Original": {
    "en": "Original",
    "fr": "Original",
    "de": "Original",
    "ar": "الأصلي",
    "es": "Original",
    "tr": "Orijinal",
    "nl": "Origineel",
    "it": "Originale",
    "ja": "オリジナル",
    "zh": "原文",
    "ko": "원본",
    "hi": "मूल",
    "pt": "Original",
    "ru": "Оригинал",
    "sw": "Asili",
    "pl": "Oryginał",
    "id": "Asli"
  }


}








export const app_data = [
{label:"English", value:"en"},
{label:"French", value:"fr"},
{label:"German", value:"de"},
{label:"Arabic", value:"ar"},
{label:"Spanish", value:"es"},
{label:"Turkish", value:"tr"},
{label:"Dutch", value:"nl"},
{label:"Italian", value:"it"},
{label:"Japanese", value:"ja"},
{label:"Chinese", value:"zh"},
{label:"Korean", value:"ko"},
{label:"Hindi", value:"hi"},
{label:"Portugese", value:"pt"},
{label:"Russian", value:"ru"},
{label:"Swahili", value:"sw"},
{label:"Polish", value:"pl"},
]





export const suggest = [
{ 
type:{
"en": "Functional Issues",
"fr": "Problèmes fonctionnels",
"de": "Funktionale Probleme",
"ar": "مشاكل وظيفية",
"es": "Problemas funcionales",
"tr": "Fonksiyonel Sorunlar",
"nl": "Functionele problemen",
"it": "Problemi funzionali",
"ja": "機能上の問題",
"zh": "功能问题",
"ko": "기능 문제",
"hi": "कार्यात्मक समस्याएँ",
"pt": "Problemas funcionais",
"ru": "Функциональные проблемы",
"sw": "Shida za Kazi",
"pl": "Problemy funkcjonalne",
"id": "Masalah Fungsional"
}, 
more:{
"en": "App malfunction/unavailable features",
"fr": "Dysfonctionnement de l'application/fonctionnalités indisponibles",
"de": "App-Fehlfunktion/nicht verfügbare Funktionen",
"ar": "عطل في التطبيق/ميزات غير متاحة",
"es": "Mal funcionamiento de la aplicación/características no disponibles",
"tr": "Uygulama arızası/kullanılamayan özellikler",
"nl": "App-storing/niet-beschikbare functies",
"it": "Malfunzionamento dell'app/funzionalità non disponibili",
"ja": "アプリの不具合/利用できない機能",
"zh": "应用故障/功能不可用",
"ko": "앱 오작동/사용할 수 없는 기능",
"hi": "ऐप खराबी/अनुपलब्ध विशेषताएँ",
"pt": "Mau funcionamento do aplicativo/recursos indisponíveis",
"ru": "Сбой приложения/недоступные функции",
"sw": "Hitilafu ya programu/vipengele visivyopatikana",
"pl": "Awaria aplikacji/niedostępne funkcje",
"id": "Kerusakan aplikasi/fitur tidak tersedia"
},
},


{
type:{
"en": "Suggestions",
"fr": "Suggestions",
"de": "Vorschläge",
"ar": "اقتراحات",
"es": "Sugerencias",
"tr": "Öneriler",
"nl": "Suggesties",
"it": "Suggerimenti",
"ja": "提案",
"zh": "建议",
"ko": "제안",
"hi": "सुझाव",
"pt": "Sugestões",
"ru": "Предложения",
"sw": "Mapendekezo",
"pl": "Sugestie",
"id": "Saran"
},

more:{
"en": "Feedback/Improvement Ideas",
"fr": "Retour/Idées d'amélioration",
"de": "Feedback/Verbesserungsideen",
"ar": "ملاحظات/أفكار للتحسين",
"es": "Comentarios/Ideas de mejora",
"tr": "Geri Bildirim/İyileştirme Fikirleri",
"nl": "Feedback/Verbeterideeën",
"it": "Feedback/Idee di miglioramento",
"ja": "フィードバック/改善アイデア",
"zh": "反馈/改进建议",
"ko": "피드백/개선 아이디어",
"hi": "प्रतिक्रिया/सुधार विचार",
"pt": "Feedback/Ideias de melhoria",
"ru": "Отзывы/Идеи по улучшению",
"sw": "Mrejesho/Maoni ya Maboresho",
"pl": "Opinie/Pomysły na ulepszenia",
"id": "Masukan/Ide Perbaikan"
},
},



{
type:{
"en": "Security Issues",
"fr": "Problèmes de sécurité",
"de": "Sicherheitsprobleme",
"ar": "مشاكل أمنية",
"es": "Problemas de seguridad",
"tr": "Güvenlik Sorunları",
"nl": "Beveiligingsproblemen",
"it": "Problemi di sicurezza",
"ja": "セキュリティの問題",
"zh": "安全问题",
"ko": "보안 문제",
"hi": "सुरक्षा समस्याएँ",
"pt": "Problemas de segurança",
"ru": "Проблемы безопасности",
"sw": "Shida za Usalama",
"pl": "Problemy z bezpieczeństwem",
"id": "Masalah Keamanan"
},


more:{
"en": "Password/Privacy/Fraud",
"fr": "Mot de passe/Confidentialité/Fraude",
"de": "Passwort/Datenschutz/Betrug",
"ar": "كلمة المرور/الخصوصية/الاحتيال",
"es": "Contraseña/Privacidad/Fraude",
"tr": "Şifre/Gizlilik/Dolandırıcılık",
"nl": "Wachtwoord/Privacy/Fraude",
"it": "Password/Privacy/Frode",
"ja": "パスワード/プライバシー/詐欺",
"zh": "密码/隐私/欺诈",
"ko": "비밀번호/개인정보/사기",
"hi": "पासवर्ड/गोपनीयता/धोखाधड़ी",
"pt": "Senha/Privacidade/Fraude",
"ru": "Пароль/Конфиденциальность/Мошенничество",
"sw": "Nenosiri/Usiri/Ulaghai",
"pl": "Hasło/Prywatność/Oszustwo",
"id": "Kata Sandi/Privasi/Penipuan"
},
},


{
type:{
"en": "Network Issues",
"fr": "Problèmes de réseau",
"de": "Netzwerkprobleme",
"ar": "مشاكل الشبكة",
"es": "Problemas de red",
"tr": "Ağ Sorunları",
"nl": "Netwerkproblemen",
"it": "Problemi di rete",
"ja": "ネットワークの問題",
"zh": "网络问题",
"ko": "네트워크 문제",
"hi": "नेटवर्क समस्याएँ",
"pt": "Problemas de rede",
"ru": "Проблемы с сетью",
"sw": "Shida za Mtandao",
"pl": "Problemy sieciowe",
"id": "Masalah Jaringan"
}, 


more:{
"en": "Payment Failure/Slow Processing",
"fr": "Échec du paiement/traitement lent",
"de": "Zahlungsfehler/langsame Verarbeitung",
"ar": "فشل الدفع/المعالجة البطيئة",
"es": "Fallo en el pago/procesamiento lento",
"tr": "Ödeme Hatası/Yavaş İşlem",
"nl": "Betalingsfout/trage verwerking",
"it": "Errore di pagamento/Elaborazione lenta",
"ja": "支払い失敗/処理の遅延",
"zh": "支付失败/处理缓慢",
"ko": "결제 실패/처리 지연",
"hi": "भुगतान विफल/धीमी प्रक्रिया",
"pt": "Falha no pagamento/Processamento lento",
"ru": "Ошибка платежа/Медленная обработка",
"sw": "Kushindwa kwa Malipo/Usindikaji Polepole",
"pl": "Nieudana płatność/Wolne przetwarzanie",
"id": "Kegagalan Pembayaran/Pemrosesan Lambat"
},
},



{
type:{
"en": "Wording Issues",
"fr": "Problèmes de formulation",
"de": "Formulierungsprobleme",
"ar": "مشاكل الصياغة",
"es": "Problemas de redacción",
"tr": "İfade Sorunları",
"nl": "Formuleringsproblemen",
"it": "Problemi di formulazione",
"ja": "表現の問題",
"zh": "措辞问题",
"ko": "표현 문제",
"hi": "शब्दांकन की समस्याएँ",
"pt": "Problemas de redação",
"ru": "Проблемы формулировки",
"sw": "Shida za Ufasiri",
"pl": "Problemy z sformułowaniem",
"id": "Masalah Kata-kata"
},

more:{
"en": "Unclear Instructions/Confusing steps",
"fr": "Instructions peu claires/étapes confuses",
"de": "Unklare Anweisungen/verwirrende Schritte",
"ar": "تعليمات غير واضحة/خطوات مربكة",
"es": "Instrucciones poco claras/pasos confusos",
"tr": "Belirsiz Talimatlar/Kafa karıştırıcı adımlar",
"nl": "Onduidelijke instructies/verwarde stappen",
"it": "Istruzioni poco chiare/passaggi confusi",
"ja": "不明確な指示/混乱する手順",
"zh": "不清楚的说明/令人困惑的步骤",
"ko": "불명확한 지시/혼란스러운 단계",
"hi": "अस्पष्ट निर्देश/भ्रमित कदम",
"pt": "Instruções pouco claras/etapas confusas",
"ru": "Неясные инструкции/Запутанные шаги",
"sw": "Maagizo Yasiyo Wazi/Hatua Zinazochanganya",
"pl": "Niejasne instrukcje/Zamieszane kroki",
"id": "Instruksi Tidak Jelas/Langkah Membingungkan"
}
},



{
type: {
"en": "Other Issues",
"fr": "Autres problèmes",
"de": "Andere Probleme",
"ar": "مشاكل أخرى",
"es": "Otros problemas",
"tr": "Diğer Sorunlar",
"nl": "Andere problemen",
"it": "Altri problemi",
"ja": "その他の問題",
"zh": "其他问题",
"ko": "기타 문제",
"hi": "अन्य समस्याएँ",
"pt": "Outros problemas",
"ru": "Другие проблемы",
"sw": "Masuala Mengine",
"pl": "Inne problemy",
"id": "Masalah Lain"
},


more:{
"en": "",
"fr": "",
"de": "",
"ar": "",
"es": "",
"tr": "",
"nl": "",
"it": "",
"ja": "",
"zh": "",
"ko": "",
"hi": "",
"pt": "",
"ru": "",
"sw": "",
"pl": "",
"id": ""
},
},
]