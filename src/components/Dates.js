import React from 'react'

export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
    return (
        <>
            <article className="mt-10 mb-14 flex items-end justify-end">
                <ul>
                    <li className='p-1'><span className="font-bold">Numero de factura: </span>{invoiceNumber}</li>
                    <li className='bg-gray-100'><span className="font-bold">Fecha de facturacion: </span>{invoiceDate}</li>
                    <li className='p-1'><span className="font-bold">Fecha de pago: </span>{dueDate}</li>
                </ul>
            </article>
        </>
    )
}
