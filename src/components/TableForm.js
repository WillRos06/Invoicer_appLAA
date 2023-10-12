import React, { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid"
import { AiOutlineDelete } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"
export default function TableForm({ description, setDescription, quantity, setQuantity, price
  , setPrice, amount, setAmount, list, setList, total, setTotal }) {

  const [isEditing, setIsEditing] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount
    }
    setDescription("")
    setQuantity("")
    setPrice("")
    setAmount("")
    setList([...list, newItems])
    setIsEditing(false)
    console.log(list)
  }

  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price)
    }
    calculateAmount(amount)
  }, [amount, price, quantity])

  useEffect(() => {
    let rows = document.querySelectorAll(".amount")
    let sum = 0

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.setQuantity)
    setPrice(editingRow.setPrice)
  }
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col md:mt-16'>
          <label htmlFor='description'>Descripción</label>
          <input type='text' name='description' id='description'
            placeholder='Descripcion del producto'
            value={description} onChange={(e) => setDescription(e.target.value)}>
          </input>
        </div>
        <div className='md:grid grid-cols-3 gap-10'>
          <div className='flex flex-col'>
            <label htmlFor='quantity'>Cantidad</label>
            <input type='text' name='quantity' id='quantity'
              placeholder='Cantidad'
              value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            </input>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='price'>Precio Unitario</label>
            <input type='text' name='price' id='price'
              placeholder='Precio Unitario'
              value={price} onChange={(e) => setPrice(e.target.value)}>
            </input>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='amount'>Importe</label>
            <p>{amount}</p>
          </div>
        </div>
        <button type='submit' className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 
        rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 
        transition-all duration-300">{isEditing ? "Editando artículo" : "Agregar artículo"}</button>
      </form>

      <table width="100%" className='mb-10'>
        <thead>
          <tr className='bg-gray-200 p-1'>
            <td className='font-bold'>Artículo</td>
            <td className='font-bold'>Cantidad</td>
            <td className='font-bold'>Precio unitario</td>
            <td className='font-bold'>Importe</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>${price}</td>
                <td className='amount'>{amount}</td>
                <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className='text-red-500 font-bold text-xl'></AiOutlineDelete></button></td>
                <td><button onClick={() => editRow(id)}><AiOutlineEdit className='text-green-500 font-bold text-xl'></AiOutlineEdit></button></td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className='flex items-end justify-end text-gray-800 text-4xl'>Total: {total.toLocaleString()}</h2>
      </div>
    </>
  )
}
