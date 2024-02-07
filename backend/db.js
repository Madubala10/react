const mongoose = require('mongoose');
const mongoURI='mongodb+srv://healthfood:gayu123@cluster0.i0czslq.mongodb.net/healthyfoodmern?retryWrites=true&w=majority'
async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      
    });
    console.log('Connected to MongoDB');
    const fetched_data=await mongoose.connection.db.collection("food_items")
    fetched_data.find({}).toArray(function(err,data){
      if(err) 
      console.log(err);
      else
      console.log(data)
    })
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    // Handle the error as needed
  }
}

// Call the function to connect
module.exports=connectToDatabase;
