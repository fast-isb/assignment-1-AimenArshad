import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://shahid0981:shahid0981@cluster0.6c0iksh.mongodb.net/test');
const Schema = mongoose.Schema;
const Annoucement = new Schema({
    date : { type: Date, required : true},
    desc : {type : String, required : true, max : [127, "Max Length is 127 characters"] },
    addedBy : {type : String, required : true, max : [127, "Max Length is 127 characters"] },
},
{
    timestamps: true
});




var ann = mongoose.model('Annoucement', Annoucement);
export default ann;