const Register = require("./../models/Register");

const insert = (req, res) =>{
    const student = new Register(req.body);
    student.save((error,documentos) => {
        if(error)
            return res.status(500).json({
                msg: "hubo un error"
            });
        return res.status(201).json({
            msg: "creado",
            register: documentos

        })
    })
}
const getRegister = (req, res)=>{
    Register.find({}, (error, documentos)=>{
        if(error)
            return res.status(500).json({
                msg: "hubo un error"
        });
        return res.status(200).json({
            msg: "ok",
            register: documentos

        });
    });

    

   
};
const getOneRegister = (req, res)=>{
    Register.findById(req.params.id, (error, documentos)=>{
        if(error)
            return res.status(500).json({
                msg: "hubo un error"
        });
        return res.status(200).json({
            msg: "ok",
            register: documentos

        });
    });
}
module.exports ={
    getRegister,
    insert,
    getOneRegister

};
