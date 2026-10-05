// Queen of the Baltic — single content & media registry.
// Unknown values stay null / [] — the UI shows an honest "to be announced" state for each.
// Replacing a photo or video = changing one field below. No markup edits needed.

export default {
  brand: { name: 'Queen of the Baltic', descriptor: 'International' },

  seo: {
    title: 'Queen of the Baltic — International beauty & self-expression contest',
    description: 'An international platform celebrating individuality, confidence and the power to make a difference.',
    ogImage: 'assets/photos/webp/footer.webp'
  },

  // Shown in the hero and the "Attend the event" panel only when filled.
  event: { date: 'September 15–18, 2026', location: 'Tallinn, Estonia', details: 'A luxurious event at a premium venue in Tallinn. Ticket information will be announced soon.', ticketUrl: null },

  // Name/role appear only when set. `quote` must be a real, approved quote.
  founder: { name: 'Ksenia Petrova', role: 'Founder', quote: 'For me, beauty is not only about appearance. It is a woman’s energy, her character, her voice and her ability to change the world around her.' },

  // [{ name, country, bio, photo: { src, alt, objectPosition } }]
  // Empty → four "Participant 01–04" placeholders, not clickable.
  contestants: [],

  // Approved quotes only: [{ quote, name, season: 'Season 2025' }] — the block stays hidden while empty.
  testimonials: [],

  // { name, url, logo: { src, monoSrc, alt } } — logos keep proportions (object-fit: contain).
  partners: {
    title: { name: 'Hearts Fine Jewellery', url: 'https://heartsfinejewellery.com/', logo: { src: 'assets/partners/hearts.png', alt: 'Hearts Fine Jewellery' } },
    general: [{ name: 'Decus Clinic', url: 'https://decus.ee/', logo: { src: 'assets/partners/decus.png', alt: 'Decus Clinic' } }, { name: 'Elitcar', url: 'https://elitcar.ee/', logo: { src: 'assets/partners/elitcar.png', alt: 'Elitcar' } }, { name: 'Medavita', url: 'https://www.medavita.ee/', logo: { src: 'assets/partners/medavita.png', alt: 'Medavita' } }],
    friends: [{ name: '20min', url: null, logo: { src: 'assets/partners/20min.png', alt: '20min' } }, { name: 'Mediabros', url: null, logo: { src: 'assets/partners/mediabros.png', alt: 'Mediabros' } }, { name: 'SASH', url: null, logo: { src: 'assets/partners/sash.png', alt: 'SASH' } }, { name: 'Favourite Beauty House', url: null, logo: { src: 'assets/partners/favourite-beauty-house.png', alt: 'Favourite Beauty House' } }, { name: 'Allikas', url: null, logo: { src: 'assets/partners/allikas.png', alt: 'Allikas' } }, { name: 'La Fée', url: null, logo: { src: 'assets/partners/lafee.png', alt: 'La Fée' } }, { name: 'Maximum', url: null, logo: { src: 'assets/partners/maximum.png', alt: 'Maximum' } }, { name: 'Dodo Pizza', url: null, logo: { src: 'assets/partners/dodo-pizza.png', alt: 'Dodo Pizza' } }, { name: 'Adelyne', url: null, logo: { src: 'assets/partners/adelyne.png', alt: 'Adelyne' } }, { name: 'Alex Model Coach', url: null, logo: { src: 'assets/partners/alex-model-coach.png', alt: 'Alex Model Coach' } }, { name: 'Fashion On', url: null, logo: { src: 'assets/partners/fashion-on.png', alt: 'Fashion On' } }, { name: 'Reach', url: null, logo: { src: 'assets/partners/reach.png', alt: 'Reach' } }]
  },

  // Footer contact grid: each empty field shows "To be announced".
  // socials: [{ label: 'Instagram', url: 'https://…' }]
  contacts: { email: 'contest@qotb.eu', phone: '+372 5592 1134', instagram: 'https://www.instagram.com/queenbaltic/', instagramHandle: '@queenbaltic', address: 'Tallinn, Estonia', mapUrl: null, socials: [{ label: 'Instagram', url: 'https://www.instagram.com/queenbaltic/' }] },

  links: { privacyPolicyUrl: '#privacy' },

  // POST endpoints (JSON). null → forms run in honest preview mode, nothing is sent or stored.
  forms: { applicationEndpoint: null, partnerEndpoint: null },

  media: {
    'hero-film':        { videoSrc: null, posterSrc: null, mobilePosterSrc: null },
    'about-portrait':   { src: 'assets/photos/webp/01.webp', alt: 'Contestant on stage at Queen of the Baltic 2026', objectPosition: '50% 50%' },   // 4:5
    'charity-01':       { src: 'assets/photos/webp/02.webp', alt: 'Queen of the Baltic charity evening, 2026', objectPosition: '50% 50%' },   // 3:4
    'charity-02':       { src: 'assets/photos/webp/03.webp', alt: 'Queen of the Baltic charity evening, 2026', objectPosition: '50% 50%' },   // 4:3
    'charity-03':       { src: 'assets/photos/webp/04.webp', alt: 'Queen of the Baltic charity evening, 2026', objectPosition: '50% 50%' },   // 3:4
    'founder-portrait': { src: 'assets/photos/webp/founder-kseniya-petrova.webp', alt: 'Ksenia Petrova, founder of Queen of the Baltic', objectPosition: '50% 30%' },   // 3:4
    'contestant-01':    { src: null, alt: '', objectPosition: '50% 30%' },   // 3:4
    'contestant-02':    { src: null, alt: '', objectPosition: '50% 30%' },
    'contestant-03':    { src: null, alt: '', objectPosition: '50% 30%' },
    'contestant-04':    { src: null, alt: '', objectPosition: '50% 30%' },
    'gallery-23': { src: 'assets/photos/webp/28.webp', alt: 'Queen of the Baltic 2026 — season moment 23', caption: null, objectPosition: '50% 50%' },
    'gallery-24': { src: 'assets/photos/webp/29.webp', alt: 'Queen of the Baltic 2026 — season moment 24', caption: null, objectPosition: '50% 50%' },
    'gallery-25': { src: 'assets/photos/webp/30.webp', alt: 'Queen of the Baltic 2026 — season moment 25', caption: null, objectPosition: '50% 50%' },
    'gallery-26': { src: 'assets/photos/webp/31.webp', alt: 'Queen of the Baltic 2026 — season moment 26', caption: null, objectPosition: '50% 50%' },
    'gallery-27': { src: 'assets/photos/webp/32.webp', alt: 'Queen of the Baltic 2026 — season moment 27', caption: null, objectPosition: '50% 50%' },
    'gallery-28': { src: 'assets/photos/webp/33.webp', alt: 'Queen of the Baltic 2026 — season moment 28', caption: null, objectPosition: '50% 50%' },
    'gallery-29': { src: 'assets/photos/webp/34.webp', alt: 'Queen of the Baltic 2026 — season moment 29', caption: null, objectPosition: '50% 50%' },
    'gallery-30': { src: 'assets/photos/webp/35.webp', alt: 'Queen of the Baltic 2026 — season moment 30', caption: null, objectPosition: '50% 50%' },
    'gallery-31': { src: 'assets/photos/webp/36.webp', alt: 'Queen of the Baltic 2026 — season moment 31', caption: null, objectPosition: '50% 50%' },
    'gallery-32': { src: 'assets/photos/webp/37.webp', alt: 'Queen of the Baltic 2026 — season moment 32', caption: null, objectPosition: '50% 50%' },
    'gallery-33': { src: 'assets/photos/webp/38.webp', alt: 'Queen of the Baltic 2026 — season moment 33', caption: null, objectPosition: '50% 50%' },
    'gallery-34': { src: 'assets/photos/webp/39.webp', alt: 'Queen of the Baltic 2026 — season moment 34', caption: null, objectPosition: '50% 50%' },
    'gallery-35': { src: 'assets/photos/webp/40.webp', alt: 'Queen of the Baltic 2026 — season moment 35', caption: null, objectPosition: '50% 50%' },
    'gallery-36': { src: 'assets/photos/webp/41.webp', alt: 'Queen of the Baltic 2026 — season moment 36', caption: null, objectPosition: '50% 50%' },
    'gallery-37': { src: 'assets/photos/webp/42.webp', alt: 'Queen of the Baltic 2026 — season moment 37', caption: null, objectPosition: '50% 50%' },
    'gallery-38': { src: 'assets/photos/webp/43.webp', alt: 'Queen of the Baltic 2026 — season moment 38', caption: null, objectPosition: '50% 50%' },
    'gallery-39': { src: 'assets/photos/webp/44.webp', alt: 'Queen of the Baltic 2026 — season moment 39', caption: null, objectPosition: '50% 50%' },
    'gallery-40': { src: 'assets/photos/webp/45.webp', alt: 'Queen of the Baltic 2026 — season moment 40', caption: null, objectPosition: '50% 50%' },
    'gallery-41': { src: 'assets/photos/webp/46.webp', alt: 'Queen of the Baltic 2026 — season moment 41', caption: null, objectPosition: '50% 50%' },
    'gallery-01':       { src: 'assets/photos/webp/06.webp', alt: 'Queen of the Baltic 2026 — season moment 01', caption: null, objectPosition: '50% 50%' }, // 16:10
    'gallery-02':       { src: 'assets/photos/webp/07.webp', alt: 'Queen of the Baltic 2026 — season moment 02', caption: null, objectPosition: '50% 50%' }, // 3:4
    'gallery-03':       { src: 'assets/photos/webp/08.webp', alt: 'Queen of the Baltic 2026 — season moment 03', caption: null, objectPosition: '50% 50%' }, // 3:4
    'gallery-04':       { src: 'assets/photos/webp/09.webp', alt: 'Queen of the Baltic 2026 — season moment 04', caption: null, objectPosition: '50% 50%' }, // 4:3
    'gallery-05':       { src: 'assets/photos/webp/10.webp', alt: 'Queen of the Baltic 2026 — season moment 05', caption: null, objectPosition: '50% 50%' }, // 4:3
    'footer-visual':    { src: 'assets/photos/webp/footer.webp', alt: 'Queen of the Baltic 2026 finale stage in Tallinn', objectPosition: '50% 50%' },   // footer event card
    'gallery-07':       { src: 'assets/photos/webp/12.webp', alt: 'Queen of the Baltic 2026 — season moment 07', caption: null, objectPosition: '50% 50%' },
    'gallery-08':       { src: 'assets/photos/webp/13.webp', alt: 'Queen of the Baltic 2026 — season moment 08', caption: null, objectPosition: '50% 50%' },
    'gallery-09':       { src: 'assets/photos/webp/47.webp', alt: 'Queen of the Baltic 2026 — season moment 09', caption: null, objectPosition: '50% 50%' },
    'gallery-10':       { src: 'assets/photos/webp/15.webp', alt: 'Queen of the Baltic 2026 — season moment 10', caption: null, objectPosition: '50% 50%' },
    'gallery-11':       { src: 'assets/photos/webp/16.webp', alt: 'Queen of the Baltic 2026 — season moment 11', caption: null, objectPosition: '50% 50%' },
    'gallery-12':       { src: 'assets/photos/webp/17.webp', alt: 'Queen of the Baltic 2026 — season moment 12', caption: null, objectPosition: '50% 50%' },
    'gallery-13':       { src: 'assets/photos/webp/18.webp', alt: 'Queen of the Baltic 2026 — season moment 13', caption: null, objectPosition: '50% 50%' },
    'gallery-14':       { src: 'assets/photos/webp/48.webp', alt: 'Queen of the Baltic 2026 — season moment 14', caption: null, objectPosition: '50% 50%' },
    'gallery-15':       { src: 'assets/photos/webp/20.webp', alt: 'Queen of the Baltic 2026 — season moment 15', caption: null, objectPosition: '50% 50%' },
    'gallery-16':       { src: 'assets/photos/webp/21.webp', alt: 'Queen of the Baltic 2026 — season moment 16', caption: null, objectPosition: '50% 50%' },
    'gallery-17':       { src: 'assets/photos/webp/22.webp', alt: 'Queen of the Baltic 2026 — season moment 17', caption: null, objectPosition: '50% 50%' },
    'gallery-18':       { src: 'assets/photos/webp/23.webp', alt: 'Queen of the Baltic 2026 — season moment 18', caption: null, objectPosition: '50% 50%' },
    'gallery-19':       { src: 'assets/photos/webp/24.webp', alt: 'Queen of the Baltic 2026 — season moment 19', caption: null, objectPosition: '50% 50%' },
    'gallery-20':       { src: 'assets/photos/webp/25.webp', alt: 'Queen of the Baltic 2026 — season moment 20', caption: null, objectPosition: '50% 50%' },
    'gallery-21':       { src: 'assets/photos/webp/26.webp', alt: 'Queen of the Baltic 2026 — season moment 21', caption: null, objectPosition: '50% 50%' },
    'gallery-22':       { src: 'assets/photos/webp/27.webp', alt: 'Queen of the Baltic 2026 — season moment 22', caption: null, objectPosition: '50% 50%' },
    'gallery-06':       { src: 'assets/photos/webp/11.webp', alt: 'Queen of the Baltic 2026 — season moment 06', caption: null, objectPosition: '50% 50%' },  // 4:3
    // optional per image: srcset, sizes
  }
};
