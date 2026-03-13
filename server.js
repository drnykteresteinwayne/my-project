//port config
const port = 3001;
//express config
const exp = require('express');
//config the server appliacation
const app = exp();
app.use(exp.json());

let userName = '';

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send(`
        <style>
            @keyframes gradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
            @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
            @keyframes rainbow { 0%{color:#ff0000} 10%{color:#ff7700} 20%{color:#ffff00} 30%{color:#00ff00} 40%{color:#00ffff} 50%{color:#0000ff} 60%{color:#8b00ff} 70%{color:#ff00ff} 80%{color:#ff1493} 90%{color:#00fa9a} 100%{color:#ff0000} }
            body {
                margin: 0; height: 100vh; display: flex; align-items: center; justify-content: center;
                background: linear-gradient(270deg, #ff0000,#ff7700,#ffff00,#00ff00,#00ffff,#0000ff,#8b00ff,#ff00ff,#ff1493,#00fa9a,#ffd700,#ff6347,#7fff00,#dc143c,#00bfff,#ff69b4,#adff2f,#ff4500,#da70d6,#1e90ff);
                background-size: 2000% 2000%;
                animation: gradient 8s ease infinite;
                font-family: Arial, sans-serif;
            }
            .card {
                background: rgba(255,255,255,0.15);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 50px 60px;
                box-shadow: 0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(255,100,255,0.3), 0 0 90px rgba(100,255,255,0.3);
                text-align: center;
                animation: float 3s ease-in-out infinite;
                border: 2px solid rgba(255,255,255,0.4);
            }
            h1 { animation: rainbow 2s linear infinite; font-size: 2.5rem; margin-bottom: 30px; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); }
            input {
                padding: 12px 20px; border-radius: 30px; border: 2px solid #fff;
                background: rgba(255,255,255,0.3); color: #fff; font-size: 1rem;
                outline: none; margin-right: 10px; placeholder-color: white;
            }
            input::placeholder { color: rgba(255,255,255,0.8); }
            button {
                padding: 12px 30px; border-radius: 30px; border: none; cursor: pointer; font-size: 1rem; font-weight: bold;
                background: linear-gradient(90deg,#ff0080,#ff8c00,#40e0d0,#7b2ff7,#ff0080);
                background-size: 300% 300%; animation: gradient 2s ease infinite; color: white;
                box-shadow: 0 4px 15px rgba(255,0,128,0.5); transition: transform 0.2s;
            }
            button:hover { transform: scale(1.1); }
        </style>
        <div class="card">
            <h1>Enter Your Name</h1>
            <form action="/submit" method="POST">
                <input type="text" name="name" placeholder="Enter your name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    `);
});

app.post('/submit', exp.urlencoded({ extended: false }), (req, res) => {
    userName = req.body.name;
    res.redirect('/welcome');
});

app.get('/welcome', (req, res) => {
    res.send(`
        <style>
            @keyframes gradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
            @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
            @keyframes rainbow { 0%{color:#ff0000} 10%{color:#ff7700} 20%{color:#ffff00} 30%{color:#00ff00} 40%{color:#00ffff} 50%{color:#0000ff} 60%{color:#8b00ff} 70%{color:#ff00ff} 80%{color:#ff1493} 90%{color:#00fa9a} 100%{color:#ff0000} }
            @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
            body {
                margin: 0; height: 100vh; display: flex; align-items: center; justify-content: center;
                background: linear-gradient(270deg, #ff1493,#ffd700,#00fa9a,#00bfff,#8b00ff,#ff4500,#7fff00,#dc143c,#1e90ff,#ff69b4,#adff2f,#da70d6,#ff6347,#00ffff,#ff0000,#ffff00,#0000ff,#ff00ff,#00ff00,#ff7700);
                background-size: 2000% 2000%;
                animation: gradient 6s ease infinite;
                font-family: Arial, sans-serif;
            }
            .card {
                background: rgba(255,255,255,0.15);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 60px 80px;
                box-shadow: 0 0 40px rgba(255,255,0,0.4), 0 0 80px rgba(255,0,255,0.4), 0 0 120px rgba(0,255,255,0.4);
                text-align: center;
                animation: float 2.5s ease-in-out infinite;
                border: 2px solid rgba(255,255,255,0.5);
            }
            h1 { animation: rainbow 1.5s linear infinite; font-size: 3rem; text-shadow: 3px 3px 10px rgba(0,0,0,0.4); }
            a {
                display: inline-block; margin-top: 20px; padding: 12px 30px; border-radius: 30px; text-decoration: none; font-weight: bold;
                background: linear-gradient(90deg,#40e0d0,#ff0080,#ff8c00,#7b2ff7,#40e0d0);
                background-size: 300% 300%; animation: gradient 2s ease infinite; color: white;
                box-shadow: 0 4px 15px rgba(64,224,208,0.5); transition: transform 0.2s;
            }
            a:hover { transform: scale(1.1); }
        </style>
        <div class="card">
            <h1>Welcome, ${userName}!</h1>
            <a href="/">Go Back</a>
        </div>
    `);
});