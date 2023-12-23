import { PostModel } from "../models/post.model.js";
import messages from "../utils/messages.js";

const { messageGeneral } = messages;
const postCtrl = {}

postCtrl.CreatePost = async(req, res) => {

    const { title, description } = req.body;

    const url = `http://localhost:3010/uploads/${req.file.filename}`

    await PostModel.create({title, description, url, userId:req.userId});

    messageGeneral(res, 200, true, '', 'Se ha creado la publicación')

}

postCtrl.getPostByUserId = async(req, res) => {

    const userId = req.params.userId
    const posts = await PostModel.find({userId});

    messageGeneral(res, 200, true, posts, 'Se ha creado la publicación')

}

export default postCtrl;