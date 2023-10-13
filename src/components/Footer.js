import React from 'react'

export default function Footer({ name, email, website, phone, bankAccount, bankName }) {
  return (
    <>
      <footer className='footer border-t-2 border-gray-300 pt-2'>
        <ul className="flex flex-wrap items-center justify-center">
          <li><span className="font-bold">Nombre:</span>{name}</li>
          <li><span className="font-bold">Email:</span>{email}</li>
          <li><span className="font-bold">Número de teléfono:</span>{phone}</li>
          <li><span className="font-bold">Banco:</span>{bankName}</li>
          <li><span className="font-bold">Propietario de cuenta:</span>{name}</li>
          <li><span className="font-bold">Número de cuenta:</span>{bankAccount}</li>
          <li><span className="font-bold">Página:</span><a target="_blank" rel="noopenner noreferrer" href={website}>{website}</a></li>
        </ul>
      </footer>
    </>
  )
}
