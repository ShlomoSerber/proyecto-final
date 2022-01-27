import { useContext, useEffect, useState } from 'react';
import './FormProductos.css'
import { ProductsContext } from '../../../../store/productsContext';
import Alert from '@mui/material/Alert';
import Switch from '@mui/material/Switch';

const FormProductos = ({initialValues, values, setValues, editando, setEditando, setVerForm}) => {
    
    const {setProductos, productos, secciones} = useContext(ProductsContext)


    const [mostrarWarning, setMostrarWarning] = useState(false)
    const [mostrarExito, setMostrarExito] = useState(false)
    const [oferta, setOferta] = useState(false)
    const [destacado, setDestacado] = useState(false)
    

    const handleInputChange = (name, value) => {
        setValues({...values, [name]: name==="precio" || name==="stock" ? parseInt(value): value})
    }

    const handleInputChangeSeccion = (e) => {
        const {value} = e.target
        setValues({...values, seccionPrincipal: value, subSeccion: ""})
    }

    const confirmarEdicion = (e) => {
        e.preventDefault()
        let array = []
        if(productos.length > 0){
            array = productos.filter(producto => producto.id !== values.id)
        }
        array.push(values)
        setProductos(array)
        setValues(initialValues)
        setEditando(false)
    }


    const hacerOferta = () => {
        setOferta(!oferta)
    }
    useEffect(() => {
        handleInputChange("oferta", oferta)
    },[oferta])

    const hacerDestacado = () => {
        setDestacado(!destacado)
    }
    useEffect(() => {
        handleInputChange("destacado", destacado)
    },[destacado])

    const guardarProducto = (e) => {
        e.preventDefault()
        if(estaCompleto()){
            setProductos([...productos, values])
            setValues(initialValues)
            setMostrarWarning(false)
            setMostrarExito(true)
        }else{
            setMostrarWarning(true)
        }
    }

    useEffect(() => {
        if(mostrarExito){
            setTimeout(() => {
                setMostrarExito(false)
            }, 4000);
        }
    },[mostrarExito])


    useEffect(() =>{
        localStorage.setItem("productos", JSON.stringify(productos))
    },[productos])

    const estaCompleto = () => {
        for (const key in values) {
            if(values[key] === ""){
                console.log(key)
               return false
            }
        }
        return true
    }

    useEffect(() => {
        console.log(values)
    },[values])

    return ( 
        <>
            <form onSubmit={(e) => !editando ? guardarProducto(e) : confirmarEdicion(e)} className="contenedorFormPrdocutos" action="">
                <h2 className="tituloFormProductos">Datos del producto</h2>
                <div className="itemForm">
                    <label className="item-label" htmlFor="nombre">Nombre</label>
                    <input onChange={(e) => handleInputChange(e.target.name, e.target.value)} value={values.nombre} className="item-input" type="text" name="nombre" id="nombre" />
                </div>
                <div className="itemForm">
                    <label className="item-label" htmlFor="urlImagen">Nombre de la imagen</label>
                    <input onChange={(e) => handleInputChange(e.target.name, e.target.value)} value={values.urlImagen} className="item-input" type="text" name="urlImagen" id="urlImagen" />
                </div>
                <div className="itemForm">
                    <label className="item-label" htmlFor="descripcionChicha">Descrpicion chica</label>
                    <textarea value={values.descripcionChicha} onChange={(e) => handleInputChange(e.target.name, e.target.value)} className="item-input" name="descripcionChicha" id="descripcionChicha" /* cols="30" */ rows="2"></textarea>
                </div>
                <div className="itemForm">
                    <label className="item-label" htmlFor="descripcionGrande">Descripcion grande</label>
                    <textarea value={values.descripcionGrande} onChange={(e) => handleInputChange(e.target.name, e.target.value)} className="item-input" name="descripcionGrande" id="descripcionGrande" /* cols="30" */ rows="2"></textarea>
                </div>
                <div className="itemForm">
                    <label className="item-label" htmlFor="precio">Precio</label>
                    <input value={values.precio} onChange={(e) => handleInputChange(e.target.name, e.target.value)} className="item-input-number" type="number" min={0} name="precio" id="precio" />
                </div>
                <div className="itemForm">
                    <label className="item-label" htmlFor="stock">Stock</label>
                    <input value={values.stock} onChange={(e) => handleInputChange(e.target.name, e.target.value)} className="item-input-number" type="number" min={0} name="stock" id="stock" />
                 </div>
                 <div className='dropdowns'>
                    <div className="itemForm-dropdown">
                        <select className="item-dropdown" onChange={(e) => handleInputChangeSeccion(e)} name="seccionPrincipal" value={values.seccionPrincipal}>
                            <option value="">SeccionPrincipal</option>
                            {
                                secciones.map((seccion, index) => (
                                    <option key={index} value={`${seccion.seccion}`}>{seccion.seccion}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="itemForm-dropdown">
                        <select disabled={values.seccionPrincipal === ""} className="item-dropdown" onChange={(e) => handleInputChange(e.target.name, e.target.value)} name="subSeccion" value={values.subSeccion}>
                            <option value="">Subsección</option>
                            {
                                values.seccionPrincipal !== "" ?
                                    secciones.find(sec => sec.seccion === values.seccionPrincipal).subSecciones.map((subseccion, index) => (
                                        <option key={index} value={`${subseccion.seccion}`}>{subseccion.seccion}</option>
                                    )) : ""
                            }
                        </select>
                    </div>
                    <div className="itemForm-dropdown">
                        <select className="item-dropdown" onChange={(e) => handleInputChange(e.target.name, e.target.value)} name="marca" value={values.marca}>
                            <option value="">Marca</option>
                            <option value="Natura">Natura</option>
                            <option value="Arcor">Arcor</option>
                            <option value="CocaCola">CocaCola</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className='item-label' htmlFor="oferta">Producto en oferta</label>
                    <Switch onClick={() => hacerOferta()} id='oferta' name="oferta" />
                </div>

                <div>
                    <label className='item-label' htmlFor="destacado">Producto destacado</label>
                    <Switch onClick={() => hacerDestacado()} id='destacado' name="destacado" />
                </div>
                {
                    mostrarWarning ? 
                    <div className="w-75">
                        <Alert severity="error" className="alert">Debes completar todos los datos!</Alert>
                    </div>
                    : ""
                }
                <div className='tituloFormProductos'>
                    <button type="sumbit" className="guardar-button">Guardar producto</button>
                </div>
            </form>
            {
                mostrarExito ? 
                <div className="w-75">
                    <Alert severity="success">Agregado con éxito!</Alert>
                </div>
                : ""
            }
            <button onClick={() => setVerForm(false) } className="cerrar-button">Cerrar</button>
        </>
    );
}
 
export default FormProductos;