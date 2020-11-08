import * as mongoose from 'mongoose';

const URLSchema = mongoose.Schema({
	originalUrl: { type: String, required: true },
	shortenedUrl: { type: String, required: true },
	numberOfVisits: { type: Number, required: true },
	createdAt: { type: Date, default: Date.now },
	lastHitAt: { type: Date, default: Date.now },
	uniqueCode: { type: String, required: true },
});

let URL;

if (mongoose.models.URL) {
  URL = mongoose.model('URL');
} else {
  URL = mongoose.model('URL', URLSchema);
}


export default URL;