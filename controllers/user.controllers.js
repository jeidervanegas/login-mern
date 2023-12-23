import { UserModel } from '../models/user.model.js';
import messages from '../utils/messages.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const { messageGeneral } = messages

const userCtrl = {}

userCtrl.register = async (req, res) => {
  try {
    const data = req.body

    if (!data.names || !data.surnames || !data.email || !data.password || !data.nick) {
      return messageGeneral(
        res,
        400,
        false,
        '',
        'Todos los campos son obligatorios'
      )
    }

    //validamos si el correo existe
    const existEmail = await UserModel.findOne({ email: data.email })
    if (existEmail) {
      return messageGeneral(res, 400, false, '', 'El correo ya existe')
    }
    //ecryptamos la contraseña
    data.password = await bcrypt.hash(data.password, 10)

    //creamos el usuario
    const newUser = await UserModel.create(data)

    //generamos el token
    const token = jwt.sign({ _id: newUser._id }, 'secreta')
  
    //mandamos el mensaje de usuario creado
    messageGeneral(res, 201, true, { ...newUser._doc, password: null, token }, 'Usuario creado correctamente')
    
  } catch (error) {
    messageGeneral(res, 500, false, '', error.message)
  }
}

userCtrl.login = async(req, res) => {
  try {
    const data = req.body;

    //validamos si la data biene
    if(!data.email || !data.password) {
      return messageGeneral(res, 400, false, '', 'Todos los campos son obligatorios');
    }

    //validamos si el correo existe
    const existEmail = await UserModel.findOne({email: data.email});
    if(!existEmail) {
      return messageGeneral(res, 400, false, '', 'El correo no existe');
    }

    //comparamos las contraseñas
    const compare = await bcrypt.compare(data.password, existEmail.password);
    if(compare) {
      //creamos el token
      const token = jwt.sign({_id: existEmail._id}, 'secreta');

      //le damos la bienvenida
      return messageGeneral(res, 200, true, {...existEmail._doc, password:null, token}, 'Bienvenido');
    }
    messageGeneral(res, 400, false, '', 'La contraseña es incorrecta')
    
  } catch (error) {
    messageGeneral(res, 500, false, '', error.message);
  }
}



export default userCtrl
