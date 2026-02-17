const {ImageKit} = require('@imagekit/nodejs');


const imageKit = new ImageKit({
    privateKey :process.env.IMAGEKIT_PRIVATE_KEY
})


async function fileupload(Buffer){
    const result = await imageKit.files.upload({
        file:Buffer.toString("base64"),
        fileName:"image.jpg"
    })

    return result;
}
module.exports = fileupload