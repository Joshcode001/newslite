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




// export const category = [{
// item:'business',
// color:'#052214'
// },
// {
// item:'crime',
// color:'#250434'
// },
// {
// item:'domestic',
// color:'#16212B'
// },
// {
// item:'education',
// color:'#322E07'
// },
// {
// item:'entertainment',
// color:'#391248'
// },
// {
// item:'environment',
// color:'#09037D'
// },
// {
// item:'food',
// color:'#7D0A03'
// },
// {
// item:'health',
// color:'#7D0360'
// },
// {
// item:'lifestyle',
// color:'#696200'
// },
// {
// item:'politics',
// color:'#00c5ff'
// },
// {
// item:'science',
// color:'#ffa5f2'
// },
// {
// item:'sports',
// color:'#7765c1'
// },
// {
// item:'technology',
// color:'#5f5f00'
// },
// {
// item:'tourism',
// color:'#ff76d9'
// },
// ]




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
en: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at newsworldofficial@gmail.com.",
fr: "Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou nos pratiques de données, veuillez nous contacter à l'adresse newsworldofficial@gmail.com.",
de: "Wenn Sie Fragen oder Bedenken zu dieser Datenschutzrichtlinie oder unseren Datenpraktiken haben, kontaktieren Sie uns bitte unter newsworldofficial@gmail.com.",
es: "Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o nuestras prácticas de datos, contáctenos en newsworldofficial@gmail.com.",
it: "Se hai domande o dubbi su questa Informativa sulla privacy o sulle nostre pratiche relative ai dati, contattaci all'indirizzo newsworldofficial@gmail.com.",
nl: "Als u vragen of opmerkingen heeft over dit privacybeleid of onze gegevenspraktijken, neem dan contact met ons op via newsworldofficial@gmail.com.",
sv: "Om du har några frågor eller funderingar kring denna integritetspolicy eller vår hantering av data, vänligen kontakta oss på newsworldofficial@gmail.com."

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
en: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at newsworldofficial@gmail.com.",
ar: "إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يرجى الاتصال بنا على newsworldofficial@gmail.com.",
ru: "Если у вас есть вопросы или опасения по поводу этой Политики конфиденциальности или наших методов обработки данных, пожалуйста, свяжитесь с нами по адресу newsworldofficial@gmail.com.",
ja: "本プライバシーポリシーまたは当社のデータ取り扱いに関してご質問やご懸念がある場合は、newsworldofficial@gmail.com までご連絡ください。",
zh: "如果您对本隐私政策或我们的数据处理方式有任何疑问或担忧，请通过 newsworldofficial@gmail.com 与我们联系。"
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
pt: "Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade ou nossas práticas de dados, entre em contato conosco pelo e-mail newsworldofficial@gmail.com.",
en: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at newsworldofficial@gmail.com.",
ar: "إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يرجى الاتصال بنا على newsworldofficial@gmail.com.",
ru: "Если у вас есть вопросы или опасения по поводу этой Политики конфиденциальности или наших методов обработки данных, пожалуйста, свяжитесь с нами по адресу newsworldofficial@gmail.com.",
ja: "本プライバシーポリシーまたは当社のデータ取り扱いに関してご質問やご懸念がある場合は、newsworldofficial@gmail.com までご連絡ください。",
zh: "如果您对本隐私政策或我们的数据处理方式有任何疑问或担忧，请通过 newsworldofficial@gmail.com 与我们联系。"
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
en: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at newsworldofficial@gmail.com.",
ha: "Idan kuna da wasu tambayoyi ko damuwa game da wannan Manufar Sirri ko hanyoyinmu na sarrafa bayanai, da fatan za ku tuntube mu a newsworldofficial@gmail.com.",
yo: "Ti o ba ni ibeere tabi aniyan nipa Ilana Asiri yii tabi bi a ṣe n lo data rẹ, jọwọ kan si wa ni newsworldofficial@gmail.com.",
ig: "Ọ bụrụ na ịnwere ajụjụ ma ọ bụ nchegbu gbasara Atụmatụ Nzuzo a ma ọ bụ omume anyị banyere data, biko kpọtụrụ anyị na newsworldofficial@gmail.com.",
ar: "إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يرجى الاتصال بنا على newsworldofficial@gmail.com."
}

},



{

languages: [{ label:'English', value:"en" }, { label:'Arabic', value:"ar" }, { label:'Russian', value:"ru" }, { label:'Japanese', value:"ja" }, { label:'Chinese', value:"zh" }],

region:"other",


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
en: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at newsworldofficial@gmail.com.",
ar: "إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يرجى الاتصال بنا على newsworldofficial@gmail.com.",
ru: "Если у вас есть вопросы или опасения по поводу этой Политики конфиденциальности или наших методов обработки данных, пожалуйста, свяжитесь с нами по адресу newsworldofficial@gmail.com.",
ja: "本プライバシーポリシーまたは当社のデータ取り扱いに関してご質問やご懸念がある場合は、newsworldofficial@gmail.com までご連絡ください。",
zh: "如果您对本隐私政策或我们的数据处理方式有任何疑问或担忧，请通过 newsworldofficial@gmail.com 与我们联系。"
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
      de: "geschäft", it: "affari", nl: "zaken", tr: "iş", pl: 'biznes'
    },
    color: "#052214"
  },
  {
    item: {
      en: "crime", fr: "crime", pt: "crime", es: "crimen", ar: "جريمة",
      zh: "犯罪", ja: "犯罪", ru: "преступление", hi: "अपराध",sw: "uhalifu", ko: "범죄",
      de: "verbrechen", it: "crimine", nl: "misdaad", tr: "suç", pl: 'przestępczość'
    },
    color: "#250434"
  },
  {
    item: {
      en: "domestic", fr: "domestique", pt: "doméstico", es: "doméstico", ar: "محلي",
      zh: "国内", ja: "国内", ru: "внутренний", hi: "घरेलू", sw: "ndani ya nchi", ko: "국내",
      de: "inländisch", it: "domestico", nl: "binnenlands", tr: "yerel",  pl: 'krajowe'
    },
    color: "#16212B"
  },
  {
    item: {
      en: "education", fr: "éducation", pt: "educação", es: "educación", ar: "التعليم",
      zh: "教育", ja: "教育", ru: "образование", hi: "शिक्षा", sw: "elimu", ko: "교육",
      de: "bildung", it: "istruzione", nl: "onderwijs", tr: "eğitim", pl: 'edukacja'
    },
    color: "#322E07"
  },
  {
    item: {
      en: "entertainment", fr: "divertissement", pt: "entretenimento", es: "entretenimiento", ar: "ترفيه",
      zh: "娱乐", ja: "エンターテインメント", ru: "развлечения",hi: "मनोरंजन", sw: "burudani", ko: "엔터테인먼트",
      de: "unterhaltung", it: "intrattenimento", nl: "entertainment", tr: "eğlence",  pl: 'rozrywka'
    },
    color: "#391248"
  },
  {
    item: {
      en: "environment", fr: "environnement", pt: "meio ambiente", es: "medio ambiente", ar: "بيئة",
      zh: "环境", ja: "環境", ru: "окружающая среда", hi: "पर्यावरण", sw: "mazingira", ko: "환경",
      de: "umwelt", it: "ambiente", nl: "milieu", tr: "çevre",  pl: 'środowisko'
    },
    color: "#09037D"
  },
  {
    item: {
      en: "food", fr: "nourriture", pt: "comida", es: "comida", ar: "طعام",
      zh: "食物", ja: "食べ物", ru: "еда", hi: "भोजन", sw: "chakula", ko: "음식",
      de: "essen", it: "cibo", nl: "eten", tr: "yemek", pl: 'jedzenie'
    },
    color: "#7D0A03"
  },
  {
    item: {
      en: "health", fr: "santé", pt: "saúde", es: "salud", ar: "صحة",
      zh: "健康", ja: "健康", ru: "здоровье", hi: "स्वास्थ्य", sw: "afya", ko: "건강",
      de: "gesundheit", it: "salute", nl: "gezondheid", tr: "sağlık", pl: 'zdrowie'
    },
    color: "#7D0360"
  },
  {
    item: {
      en: "lifestyle", fr: "mode de vie", pt: "estilo de vida", es: "estilo de vida", ar: "نمط الحياة",
      zh: "生活方式", ja: "ライフスタイル", ru: "образ жизни", hi: "जीवनशैली", sw: "mtindo wa maisha", ko: "라이프스타일",
      de: "lebensstil", it: "stile di vita", nl: "levensstijl", tr: "yaşam tarzı", pl: 'styl życia'
    },
    color: "#696200"
  },
  {
    item: {
      en: "politics", fr: "politique", pt: "política", es: "política", ar: "سياسة",
      zh: "政治", ja: "政治", ru: "политика",  hi: "राजनीति", sw: "siasa",  ko: "정치",
      de: "politik", it: "politica", nl: "politiek", tr: "siyaset", pl: 'polityka'
    },
    color: "#00c5ff"
  },
  {
    item: {
      en: "science", fr: "science", pt: "ciência", es: "ciencia", ar: "علم",
      zh: "科学", ja: "科学", ru: "наука",hi: "विज्ञान", sw: "sayansi", ko: "과학",
      de: "wissenschaft", it: "scienza", nl: "wetenschap", tr: "bilim", pl: 'nauka'
    },
    color: "#ffa5f2"
  },
  {
    item: {
      en: "sports", fr: "sports", pt: "esportes", es: "deportes", ar: "رياضة",
      zh: "体育", ja: "スポーツ", ru: "спорт", hi: "खेल",  sw: "michezo", ko: "스포츠",
      de: "sport", it: "sport", nl: "sport", tr: "spor",  pl: 'sport'
    },
    color: "#7765c1"
  },
  {
    item: {
      en: "technology", fr: "technologie", pt: "tecnologia", es: "tecnología", ar: "تكنولوجيا",
      zh: "技术", ja: "技術", ru: "технология", hi: "प्रौद्योगिकी", sw: "teknolojia", ko: "기술",
      de: "technologie", it: "tecnologia", nl: "technologie", tr: "teknoloji", pl: 'technologia'
    },
    color: "#5f5f00"
  },
  {
    item: {
      en: "tourism", fr: "tourisme", pt: "turismo", es: "turismo", ar: "سياحة",
      zh: "旅游", ja: "観光", ru: "туризм", hi: "पर्यटन", sw: "utalii", ko: "관광",
      de: "tourismus", it: "turismo", nl: "toerisme", tr: "turizm", pl: 'turystyka'
    },
    color: "#ff76d9"
  }
];








export const multilingual = {
  "E-mail": {
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
    "pl":"E-mail"
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
    "pl":"Płeć"
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
    "pl":"Nazwa użytkownika"
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
    "pl":"Data urodzenia"
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
    "pl":"Lokalizacja"
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
    "pl":"Subskrypcja"
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
    "pl":"Wyloguj się"
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
    "pl":"Usuń konto"
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
    "pl":"Profil"
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
    "pl":"Ustawienia"
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
    "pl":"Polityka prywatności"
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
    "pl":"Skontaktuj się z pomocą techniczną"
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
    "pl":"Strona główna"
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
    "pl":"Szukaj"
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
    "pl":"Oglądaj"
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
    "pl":"Przełącznik motywu"
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
    "pl":"Ustawienia motywu"
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
    "pl":"Przełącznik głosu"
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
    "pl":"Tłumacz"
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
    "pl":"Język aplikacji"
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
    "pl":"Tryb ciemny"
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
    "pl":"Jasny"
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
    "pl":"Ciemny"
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
    "pl":"System"
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
    "pl":"Mężczyzna"
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
    "pl":"Kobieta"
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
    "pl":"Tekst"
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
    "pl": "Utwórz konto"
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
    "pl": "Zaplmniałeś hasła"
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
    "pl": "Zaloguj się"
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
    "pl": "Dalej"
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