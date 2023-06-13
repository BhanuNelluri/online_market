import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Product', productSchema);