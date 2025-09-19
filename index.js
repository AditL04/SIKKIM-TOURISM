//index.js
import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";
const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY });
import { db, admin } from './firebase.js'; //imports the firestore instance and admin 
const app=express();
const PORT=process.env.PORT || 3000;
app.use(cors()); //for dev:allows all origins.Restrict in production
app.use(express.json()); // parse JSON bodies
//Simple logger middleware
app.get((req,res,next) =>{
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});
    /**
     * Helper:collection handlers generator (keeps code DRY)
     * Each collection will have:
     * GET /<col>  -> list all
     * GET /<col>/:id  -> get one
     * POST /<col>  -> create
     * PUT /<col>/:id  -> update (partial via merge)
     * DELETE /<col>/:id -> delete
     */
function createCollectionRoutes(collectionName){
    //list
    app.get(`/${collectionName}`,async ( req, res) => {
        try{
            const snapshot=await db.collection(collectionName).get();
            const items=snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            res.json(items);
        }catch(err){
            console.error(err);
            res.status(500).json({ error:'Error fetching ' + collectionName });
        }
    });
    //get single
    app.get(`/${collectionName}/:id`,async ( req, res) => {
        const id=req.params.id;
        try{
            const doc=await db.collection(collectionName).doc(id).get();
            if(!doc.exists) return res.status(404).json({ error: `${collectionName} not found` });
            res.json({ id: doc.id, ...doc.data() });
        }catch(err){
            console.error(err);
            res.status(500).json({ error: 'Error fetching ' + collectionName });
        }
    });
    //create
    app.post(`/${collectionName}`,async ( req, res) =>{
        try{
            const data=req.body || {};
            //add server timestamp
            data.createAt=admin.firestore.FieldValue.serverTimestamp();
            const docRef = await db.collection(collectionName).add(data);
            console.log(`${collectionName} written with ID:`,docRef.id);
            res.status(201).json({ id: docRef.id });
        }catch(err) {
            console.error(err);
            res.status(500).json({ error: 'Error creating' + collectionName });
        }
    });
    //update(merge)
    app.put(`/${collectionName}/:id`,async (req, res) => {
        try{
            const id=req.params.id;
            await db.collection(collectionName).doc(id).set(req.body, { merge: true });
            res.json({ success: true });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error updating ' + collectionName });
        }
    });
    //delete
    app.delete(`/${collectionName}/:id`,async(req, res) =>{
        try{
            const id=req.params.id;
            await db.collection(collectionName).doc(id).delete();
            res.json({ success:true });
        }catch(err){
            console.error(err);
            res.status(500).json({ error: 'Error deleting ' + collectionName });
        }
    });
}
//Create routes for our collections
['monasteries','tours','events'].forEach(name => createCollectionRoutes(name));
//Bookings:create+list+get single
app.post('/bookings',async (req, res) =>{
    try{
        const booking=req.body || {};
        booking.createdAt=admin.firestore.FieldValue.serverTimestamp();
        const docRef=await db.collection('bookings').add(booking);
        console.log('Booking written with ID:',docRef.id);
        res.status(201).json({ id: docRef.id });
    }catch(err){
        console.error(err);
        res.status(500).json({ error:'Error creating booking' });
    }
});
app.get('/bookings',async (req, res) => {
    try{
        let q=db.collection('bookings');
        if (req.query.email){
            q=q.where('email','==',req.query.email);
        }
        const snap=await q.get();
        const items=snap.docs.map(d => ({ id: d.id, ...d.data() }));
        res.json(items);
    }catch(err){
        console.error(err);
        res.status(500).json({ error:'Error fetching bookings' });
    }
});
app.get('/',(req, res) => {
    res.send('Server is working! Use /monasteries /tours /events /bookings');
});
app.post("/chat",async (req ,res) =>{
    const { message } =req.body;
    try{
        const response=await OpenAI.chat.completions.create({
            mode:"gpt-40-mini",
            messages:[{ role:"user",content:message }],
        });
        res.json({ reply: response.choices[0].message.content });
    } catch (err){
        res.status(500).send(err.message);
    }
});
app.listen(PORT,() =>{
    console.log(`Server running on http://localhost:${PORT}`);
});