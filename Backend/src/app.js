const exprees = require('express');
const multer = require('multer');
const uploadfile = require('/Backend/Backend - Project/Backend/src/services/storage.service')
const postModel = require('/Backend/Backend - Project/Backend/src/models/post.model')
const cors = require('cors')
const app = exprees()

// Middle ware for Data read
app.use(exprees.json());
app.use(cors())

const upload = multer({ storage: multer.memoryStorage() })


/*
POST API FOR CREATE-POST
*/
app.post('/create-post', upload.single("image"), async (req, res) => {
    // await
    const result = await uploadfile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "upload successfully",
        post
    })
})


app.get('/post', async (req, res) => {
    const post = await postModel.find()


    return res.status(200).json({
        message: "fetch successfully",
        post
    })
})

module.exports = app;