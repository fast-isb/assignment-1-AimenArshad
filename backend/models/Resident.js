import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/scdProject');
const Schema = mongoose.Schema;
const Resident = new Schema({
    fname : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    lname : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    cnic : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    email : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    password : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    age : { type : Number, required : true },
},
{
    timestamps: true
});




var resi = mongoose.model('Resident', Resident);
export default resi;