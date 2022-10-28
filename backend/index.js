import express from 'express'
import cors from 'cors'

var app=express();
app.use(cors()); //important for recieving api calls
app.use(express.static("public"));
app.use(express.json()); //important for recieving api calls

import AnnoucementRouter from './routes/Annoucement.js'
import ResidentRouter from './routes/Resident.js'

app.use('/api/Annoucement',AnnoucementRouter);
app.use('/api/Resident',ResidentRouter);





app.listen(5000);