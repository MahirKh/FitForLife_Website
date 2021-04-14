// const express = require('express')
// const app = express()
// const port = 3000;

// //Static files
// app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/images', express.static(__dirname + 'public/images'))

// //Set Views
// app.set('views', './views')
// app.set('view engine', 'ejs')

// app.get('', (req,res) => {
//     res.render('home', {text: 'This is EJS '})
// })


// app.listen(port, () => console.info(`Listening on port ${port}`))



const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('home'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));