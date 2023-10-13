import React from 'react'

export default function Method({ paymethod, setPayMethod }) {
    return (
        <>
            <article className="mt-10 mb-14 flex items-end">
                <ul>
                    <li className='p-1'><span className="font-bold">Método de pago: </span>{paymethod}</li>
                </ul>
            </article>
        </>
    )
}
