import './ProductsAdmin.css'
import TextField from '@mui/material/TextField';
import { useContext, useEffect, useState } from 'react';
import FormProductos from './FormProductos/FormProductos';
import { v4 as uuidv4 } from 'uuid';
import { ProductsContext } from '../../../store/productsContext';
import ItemProducto from './ItemProducto/ItemProducto';

const ProductsAdmin = () => {

    const initialValues = {
        id: uuidv4(),
        nombre: "",
        marca: "",
        descripcionChicha: "",
        descripcionGrande: "",
        urlImagen: "",
        precio: 0,
        stock: 0,
        seccionPrincipal: "",
        subSeccion: "",
        oferta: false,
        destacado: false,
    }
    
    const [values, setValues] = useState(initialValues)
    const [editando, setEditando] = useState(false)
    const [verForm, setVerForm] = useState(false)
    const { productos, setProductos } = useContext(ProductsContext)

   /*  useEffect(() => {
        console.log(productos)
    }, [productos]) */

    const editar = (id) => {
        console.log("editando")
        setValues(productos.find(producto => producto.id === id))
        setEditando(true)
    }

    const eliminar = (id) => {
        if(window.confirm("Estas seguro de eliminar este producto?")){
            setProductos(productos.filter(producto => producto.id !== id))
        }

    }

    return (
        <div className="contenedorABMProductos" >
            
            {
                verForm ?     
                <FormProductos setVerForm={setVerForm} initialValues={initialValues} values={values} setValues={setValues} setEditando={setEditando} editando={editando}/>
                : <button className="add-product-button" onClick={() => setVerForm(true)}>Agregar Producto</button>    
            }
            {
                productos.length > 0 ?
                    <div className="contenedorItemsProductos">
                        {
                            <table className="table">
                                <tbody className='table-header'>
                                    <tr className="text-white">
                                        <th></th>
                                        <th>Nombre</th>
                                        <th></th>
                                        <th>Precio</th>
                                        <th>Stock</th>
                                        <th>Sección principal</th>
                                        <th>Subsección</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </tbody>

                                <tbody>
                                    {
                                        productos.map(producto => (
                                            <ItemProducto key={producto.id} {...producto} eliminar={eliminar} editar={editar}/>
                                        ))
                                    }
                                </tbody>
                            </table>
                    }
                    </div>
                    : <h3>No hay productos</h3>
            }
        </div>
    );
}

export default ProductsAdmin;