const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://Shreyansh:MRSM__<>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const feedbackSchema = new mongoose.Schema({
    feedback: String,
    createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' })
        };
    }

    const { feedback } = JSON.parse(event.body);

    try {
        const newFeedback = new Feedback({ feedback });
        await newFeedback.save();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Feedback received and saved' })
        };
    } catch (error) {
        console.error('Error saving feedback:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to save feedback', details: error.message })
        };
    }
};
