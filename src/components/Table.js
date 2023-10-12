import React from 'react'

export default function Table({ list }) {
  return (
    <>
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
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </>
  )
}
