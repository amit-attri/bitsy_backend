import * as express from 'express';
const app = express();
import * as bodyParser from'body-parser';
import * as mongoose from'mongoose';
import URLRoutes from'./routes/url';


//Database Connection via mongoose
mongoose.connect("mongodb+srv://mongo_dev_rw:ZoMW8CBFbSbKu3ii@mongocluster1.npeai.mongodb.net/bitsy_db?retryWrites=true&w=majority", {
  useNewUrlParser: true
}).then(() => {
  console.log('Database Connected');
})
  .catch(err => {
    console.log(err);
    process.exit(1);
  });



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// To avoid CORS errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  
  if(req.methods === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods','PUT, POST, GET, DELETE, PATCH');
    return res.status(200).json({});
  }
  
  next();
});

app.use('/api/item', URLRoutes);


app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Welcome to UrlShort'
  });
});


//Error Handling for main page
app.use((req, res, next) => {
  const error = new Error("Not found");
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);