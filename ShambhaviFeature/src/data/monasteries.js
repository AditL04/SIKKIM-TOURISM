// src/data/monasteries.js
const panoramaImages = [
  "/images/pano1.png",
  "/images/pano2.png",
  "/images/pano3.png",
  "/images/pano4.png",
  "/images/pano5.png",
  "/images/pano6.png",
  "/images/pano7.png",
  "/images/pano8.png",
];

const monasteries = [
  { id: 1, name: "Rumtek Monastery", lat: 27.3254, lng: 88.6122, image: "/images/rumtek.jpg", description: "Seat of the Karmapa, one of the most important monasteries in Sikkim." },
  { id: 2, name: "Pemayangtse Monastery", lat: 27.3710, lng: 88.2340, image: "/images/pemayangtse.jpg", description: "One of the oldest monasteries in Sikkim, near Pelling." },
  { id: 3, name: "Tashiding Monastery", lat: 27.3176, lng: 88.2702, image: "/images/tashiding.jpg", description: "Famous for the holy Thongwa Rangdol chorten." },
  { id: 4, name: "Enchey Monastery", lat: 27.3410, lng: 88.6136, image: "/images/enchey.jpg", description: "Located near Gangtok, known for Mask Dance Festival." },
  { id: 5, name: "Phodong Monastery", lat: 27.4471, lng: 88.5937, image: "/images/phodong.jpg", description: "Built in the 18th century, houses beautiful murals." },
  { id: 6, name: "Ralong Monastery", lat: 27.2870, lng: 88.3575, image: "/images/ralong.jpg", description: "Famous Kagyu monastery near Ravangla." },
  { id: 7, name: "Lingdum (Ranka) Monastery", lat: 27.3567, lng: 88.6930, image: "/images/ranka.jpg", description: "Modern monastery with stunning architecture." },
  { id: 8, name: "Zurmang Kagyud Monastery", lat: 27.3275, lng: 88.6415, image: "/images/zurmang.jpg", description: "Known for elaborate Buddhist rituals." },
  { id: 9, name: "Dodrupchen Monastery", lat: 27.3272, lng: 88.6129, image: "/images/dodrupchen.jpg", description: "Important Nyingma monastery in Sikkim." },
  { id: 10, name: "Shugden Monastery", lat: 27.3360, lng: 88.6150, image: "/images/shugden.jpg", description: "Monastery dedicated to protector deity Dorje Shugden." },
  { id: 11, name: "Ngadak Monastery", lat: 27.3173, lng: 88.6114, image: "/images/ngadak.jpg", description: "Originally built in the 17th century by Chogyal." },
  { id: 12, name: "Karma Thekchen Ling Monastery", lat: 27.3345, lng: 88.6107, image: "/images/karma_thekchen.jpg", description: "Important Karma Kagyu monastery." },
  { id: 13, name: "Tholung Monastery", lat: 27.6953, lng: 88.4647, image: "/images/tholung.jpg", description: "Located in remote Dzongu, houses sacred relics." },
  { id: 14, name: "Gonjang Monastery", lat: 27.3671, lng: 88.5962, image: "/images/gonjang.jpg", description: "Near Gangtok, known for social services." },
  { id: 15, name: "Dubdi Monastery", lat: 27.3741, lng: 88.2590, image: "/images/dubdi.jpg", description: "Established in 1701, the oldest monastery in Sikkim." },
  { id: 16, name: "Sanga Choeling Monastery", lat: 27.3064, lng: 88.2323, image: "/images/sanga_choeling.jpg", description: "One of the oldest monasteries, above Pelling." },
  { id: 17, name: "Kartok Monastery", lat: 27.3080, lng: 88.3622, image: "/images/kartok.jpg", description: "Located in Yuksom, peaceful and scenic." },
  { id: 18, name: "Yangthang Monastery", lat: 27.3502, lng: 88.2310, image: "/images/yangyang.jpg", description: "Small monastery near Pelling." },
  { id: 19, name: "Bermiok Monastery", lat: 27.3132, lng: 88.2430, image: "/images/bermiok.jpg", description: "Traditional monastery in West Sikkim." },
  { id: 20, name: "Sangachoeling Hermitage", lat: 27.3091, lng: 88.2327, image: "/images/sangachoeling.jpg", description: "Hermitage connected with ancient Buddhist practice." },
  { id: 21, name: "Hee Gyathang Monastery", lat: 27.5567, lng: 88.6119, image: "/images/hee_gyathang.jpg", description: "Located in Dzongu, North Sikkim." },
  { id: 22, name: "Mangkhim Monastery", lat: 27.3274, lng: 88.6605, image: "/images/mangkhim.jpg", description: "Associated with the Rai community." },
  { id: 23, name: "Sirijonga Yuma Mangheem", lat: 27.1830, lng: 88.6140, image: "/images/sirijonga.jpg", description: "Sacred site for the Limboo community." },
  { id: 24, name: "Samdruptse Monastery", lat: 27.2153, lng: 88.5992, image: "/images/samdruptse.jpg", description: "Famous for the gigantic Guru Padmasambhava statue." },
  { id: 25, name: "Chorten Monastery", lat: 27.3279, lng: 88.6120, image: "/images/chorten.jpg", description: "Also called Do Drul Chorten, important stupa in Gangtok." },
  { id: 26, name: "Lingdum Zurmang Monastery", lat: 27.3531, lng: 88.6921, image: "/images/lingdum_zurmang.jpg", description: "Another branch of Zurmang tradition." },
  { id: 27, name: "Phensang Monastery", lat: 27.4167, lng: 88.6167, image: "/images/phensang.jpg", description: "Established in 1721, holds annual festival." },
  { id: 28, name: "Namchi Monastery", lat: 27.1650, lng: 88.6002, image: "/images/namchi.jpg", description: "Monastery near Namchi town." },
  { id: 29, name: "Yangyang Monastery", lat: 27.2801, lng: 88.3625, image: "/images/yangyang.jpg", description: "Monastery near Ravangla." },
  { id: 30, name: "Bokar Ngedon Chokhor Ling", lat: 27.1699, lng: 88.6043, image: "/images/bokar.jpg", description: "Monastery founded by Bokar Rinpoche." },
  { id: 31, name: "Chiwabhanjyang Monastery", lat: 27.1480, lng: 88.0550, image: "/images/chiwabhanjyang.jpg", description: "Small border monastery in West Sikkim." },
  { id: 32, name: "Lachen Monastery", lat: 27.7174, lng: 88.5577, image: "/images/lachen.jpg", description: "Important monastery in North Sikkim." },
].map((monastery, index) => ({
  ...monastery,
  panorama: panoramaImages[index % panoramaImages.length], // cycle pano1 → pano8
}));

export default monasteries;
