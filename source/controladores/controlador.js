const {Pool} = require('pg')

const pool= new Pool({
    host:'localhost',
    user:'postgres',
    password:'edgar',
    database:'Tiendita',
    port:'5432'
})

const getUsuario = async (req,res)=>{
    const respuesta=await pool.query('SELECT * FROM Cliente')
    res.status(200).json(respuesta.rows)
}

const createUsuario = async (req,resp) =>{
    const{ cedula,nombre,apellido}=req.body
    const respuesta=await pool.query('INSERT INTO cliente (cedula, nombre, apellido) VALUES ($1, $2, $3)',[cedula,nombre,apellido])
    console.log(respuesta)
    res.send('Usuario Creado')
}

module.exports={ 
    getUsuario,
    createUsuario
}