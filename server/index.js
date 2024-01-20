import express from 'express';
import pg from 'pg'
import cors from 'cors'
const API_KEY = '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'
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const db=new pg.Client({
    user:'postgres',
    host:'localhost',
    database:'mmec',
    password:'123456',
    port:5432
    
})
db.connect()
// const recivedData = req.body.query;

// Routes
app.get('/',async (req, res) => {

    
    res.send('Hello, world!');
  });

 
app.post('/data',async (req, res) => {
  try{
    const recivedData = req.body.query;
    console.log('data is ');
    console.log(recivedData);

    console.log('the raw data is ');
    console.log(req.body);
    // console.log(recivedData.data);
  // res.send(recivedData)
  }catch(e){
    console.error('error found'+e.message);
  }

});
app.post("/submit", async (req, res) => {
 console.log('hello world');
 const recivedData = req.body.query;
  
  const config = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content:recivedData}],
          max_tokens: 500, // length of req message
        }),
      };
    
      try {
  
          
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          config
        );
        const data = await response.json();
        const gpt_response = data.choices[0].message.content;
        console.log('gpt response is ');
        console.log(gpt_response);
        res.json(gpt_response)
        
        try{
            await db.query("insert into message_database (user_query , gpt_response) values($1,$2)",[recivedData,JSON.stringify(gpt_response)])
        }catch(e){
            console.error('error found'+e.message);
        }
     


         
         
      }
    catch(err){
  res.send('errore fond')
    }
   
  
  
  })
  

app.get('/send',async (req, res) => {

    try{
        const client = await db.connect();
        console.log('database connected');
    }catch(e){
        console.error('error connecting'+e.message);
    }

    try{
        const query  = await db.query('insert into login_users (email,password) values($1,$2)',['user2','pass22']);
        console.log('data stored success');
    }catch(e){
        console.error('error connecting'+e.message);
    }
  res.send('Hello, world!');
});

// Start the server
app.listen(3002, () => {
  console.log('Server listening on port 3001');
});
