//seed.js
import { db, admin } from "./firebase.js";
async function seedData(){
    const monasteries=[
        { name: "Rumtek",location:"Sikkim"},
        { name: "Pemayangtse",location:"Sikkim"},
        { name: "Tashiding",location:"Sikkim"},
        { name: "Sanga Choeling",location:"Sikkim"},
        { name: "Lachen",location:"Sikkim"},
        { name: "Lachung",location:"Sikkim"},
        { name: "Ralong",location:"Sikkim"},
        { name: "Kewzing",location:"Sikkim"},
        { name: "Ben",location:"Sikkim"},
        { name: "Enchey",location:"Sikkim"},
        { name: "Lingdum",location:"Sikkim"},
        { name: "Tsuk a Khang",location:"Sikkim"},
        { name: "Do Drul Chorten",location:"Sikkim"},
        { name: "Dubdi",location:"Sikkim"},
        { name: "Kheocheolpalri",location:"Sikkim"},
        { name: "Malam",location:"Sikkim"},
        { name: "Line Phagyal",location:"Sikkim"},
        { name: "Karthok",location:"Sikkim"},
        { name: "Phensang",location:"Sikkim"},
        { name: "Phodong",location:"Sikkim"},
        { name: "Labrong",location:"Sikkim"},
        { name: "Tolung",location:"Sikkim"},
        { name: "Bermoik",location:"Sikkim"},
        { name: "Dolling",location:"Sikkim"},
        { name: "Yangyang",location:"Sikkim"},
        { name: "Namchi",location:"Sikkim"},
        { name: "Rinchenpong",location:"Sikkim"},
        { name: "Tingbung",location:"Sikkim"},
        { name: "Burtuk",location:"Sikkim"},
        { name: "Wok Parbang",location:"Sikkim"},
        { name: "Mangbru",location:"Sikkim"},
        { name: "Tsungthang",location:"Sikkim"}
    ];
    const tours =[
        {
            name: "7-Day Monastery Trail",
            description: "Explore the most sacred monasteries across Sikkim.",
            price:1200,
            duration:"7 days",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        },
        {
            name: "Weekend Spiritual Gateway",
            description:"Visit Rumtek,Pemayangtse and Enchey in a 2-day tour.",
            price:400,
            duration:"2 days",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        },
        {
            name:"Rumtek Monastery Tour",
            description:"A spiritual journey through Rumtek,the seat of karmapa.",
            price:500,
            duration:"2 Hours",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        },
        {
            name:"Pemayangtse Heritage Tour",
            description:"A monastrery with its historic murals and relics .",
            price: 700,
            duration:"3 Hours",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        },
        {
            name:"Tashiding Pilgrimage Walk",
            description:"A serene pilgrimage experience to the sacred Tashiding Monastery.",
            price:600,
            duration:"2.5 Hours",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        },
        {
            name:"Sanga Choeling Hilltop Tour",
            description:"Enjoy a trek to Sanga Choeling,one of the oldest monasteries in Sikkim.",
            price:550,
            duration:"2 Hours",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        }
    ];
    const events=[
        {
            name:"Losar Festival",
            date:"2025-02-21",
            monastery:"Rumtek",
            description:"Tibetian New Year celebrated with vibrant dance and rituals.",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        },
        {
            name:"Saga Dawa",
            date:"2025-06-15",
            monastery:"Tashiding",
            description:"Commemoration of Buddha's birth,enlightenment,and death.",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        },
        {
            name:"Pang Lhabsol",
            date:"2025-09-05",
            monastery:"Ranbong",
            description:"Unique festival of Sikkim honoring Mount Khangchendzonga with warrior dance.",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        },
        {
            name:"Bumchu Festival",
            date:"2025-09-05",
            monastery:"Tashinding",
            description:"The sacred water vase ritual predicting the future of Sikkim.",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        },
        {
            name:"Mask Dance Festivak",
            date:"2025-12-10",
            monastery:"Pemayangtse",
            description:"Colourful Cham dance performance by monks to ward off evil.",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        },
        {
            name:"Drukpa Teshi",
            date:"2025-07-27",
            monastery:"Phodong",
            description:"Lord Bhuddha delivered his first sermon on Four Noble Truths.",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        },
        {
            name:"Kagyed Dance Festival",
            data:"2025-12-28",
            monastery:"Lingdum",
            description:"Cham dance performed by Losoong.",
            createdAt:admin.firestore.FieldValue.serverTimestamp()
        }
    ];
    try{
        //seed monasteries
        for( let m of monasteries){
            await db.collection("monasteries").add({
                ...m,
                createdAt:admin.firestore.FieldValue.serverTimestamp()
            });
            console.log(`Monastery added: ${m.name}`);
        }
        //seed tours
        for(let t of tours){
            await db.collection("tours").add(t);
            console.log(`Tour added: ${t.name}`);
        }
        //seed events
        for( let e of events){
            await db.collection("events").add(e);
            console.log(`Event added: ${e.name}`);
        }
        console.log("Sending complete: monasteries,tours,events!");
        process.exit(0);      
    } catch (err){
        console.error("Error seeding data:",err);
        process.exit(1);
    }
}
seedData();
