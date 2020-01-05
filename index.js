const express = require('express');
const app = express();

const qr = require('qr-image');

app.set('view engine', 'ejs')

app.get('/', (_req, res) => res.render('home'))



app.get('/qrcode', (_req, res) => {
    const url = 'https://github.com/Deyo474'
    const code = qr.image(url, { type: 'svg' })

    res.type('svg')

    code.pipe(res)

})

app.listen(3000, () => {
    console.log('Hello tudo OK :)');
})


