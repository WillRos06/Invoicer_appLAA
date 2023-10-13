import { useRef, useState } from "react"
import Footer from "./components/Footer"
import Notes from "./components/Notes"
import Table from "./components/Table"
import Head from "./components/Head"
import MainDetails from "./components/MainDetails"
import ClientDetails from "./components/ClientDetails"
import Dates from "./components/Dates"
import TableForm from "./components/TableForm"
import Method from "./components/Method"
import ReactToPrint from "react-to-print"
import { BsCreditCard } from "react-icons/bs"
import { FaMoneyBillWave } from "react-icons/fa";
function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, sedtBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoicerNumber] = useState("")
  const [invoiceDate, setInvoicerDate] = useState("")
  const [dueDate, setDuedate] = useState("")
  const [notes, setNotes] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [paymethod, setPayMethod] = useState(0)
  const componentRef = useRef()

  const handleprint = () => {
    window.print()
  }
  return (
    <>
      {/* name, address, ema  il, phone, bank name, bank account number, website client name,
     client address, invoice number, invoice date, due date, notes*/}
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ?
          <>
            <ReactToPrint trigger={() => <button className="bg-green-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">Imprimir / Descargar</button>}
              content={() => componentRef.current} />
            <div ref={componentRef} className="p-5">
              <Head handleprint={handleprint} />
              <MainDetails name={name} address={address} />
              <ClientDetails clientName={clientName} clientAddress={clientAddress} />
              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
              <Method
                paymethod={paymethod}
              />
              <Table
                description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
              <Notes notes={notes} />
              <Footer name={name}
                address={address}
                website={website}
                email={email}
                phone={phone}
                bankAccount={bankAccount}
                bankName={bankName}
              />
            </div>
            <button onClick={() => setShowInvoice(false)} className="ml-5 mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              Editar información
            </button></> : (
            <>
              <div className="flex flex-col justify-center">
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="aflex flex-col">
                    <label htmlFor="name">Nombre completo</label>
                    <input type="text"
                      name="text"
                      id="name"
                      placeholder="Escribe tu nombre"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="aflex flex-col">
                    <label htmlFor="address">Dirección</label>
                    <input type="text"
                      name="text"
                      id="address"
                      placeholder="Escribe tu dirección"
                      autoComplete="off"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </article>
                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                      name="email"
                      id="email"
                      placeholder="Escribe tu email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="website">Página web</label>
                    <input type="url"
                      name="website"
                      id="website"
                      placeholder="Escribe tu pagina web"
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone">Número de teléfono</label>
                    <input type="text"
                      name="phone"
                      id="phone"
                      placeholder="Escribe tu numero de telefono"
                      autoComplete="off"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </article>
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="bankName">Entidad Bancaria</label>
                    <input type="text"
                      name="bankName"
                      id="bankName"
                      placeholder="Escribe el nombre del banco"
                      autoComplete="off"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="bankAccount">Número de cuenta</label>
                    <input type="text"
                      name="bankAccount"
                      id="bankAccount"
                      placeholder="Escribe el numero de cuenta de banco"
                      autoComplete="off"
                      value={bankAccount}
                      onChange={(e) => sedtBankAccount(e.target.value)}
                    />
                  </div>
                </article>
                <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                  <div className="flex flex-col">
                    <label htmlFor="clientName">Nombre del cliente</label>
                    <input type="text"
                      name="clientName"
                      id="clientName"
                      placeholder="Escribe el nombre del cliente"
                      autoComplete="off"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="clientAddress">Dirección del cliente</label>
                    <input type="text"
                      name="clientAddress"
                      id="clientAddress"
                      placeholder="Escribe la direccion del cliente"
                      autoComplete="off"
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                    />
                  </div>
                </article>
                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="invoiceNumber">Número de factura</label>
                    <input type="text"
                      name="invoiceNumber"
                      id="invoiceNumber"
                      placeholder="Escribe el numero de factura"
                      autoComplete="off"
                      value={invoiceNumber}
                      onChange={(e) => setInvoicerNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="invoiceDate">Fecha de facturación</label>
                    <input type="date"
                      name="invoiceDate"
                      id="invoiceDate"
                      placeholder="Fecha de la factura"
                      autoComplete="off"
                      value={invoiceDate}
                      onChange={(e) => setInvoicerDate(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dueDate">Fecha de pago</label>
                    <input type="date"
                      name="dueDate"
                      id="dueDate"
                      placeholder="Escribe la Fecha de pago"
                      autoComplete="off"
                      value={dueDate}
                      onChange={(e) => setDuedate(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="paymethod">Método de pago</label>
                    <article className="md:grid grid-cols-2">
                      <button id="creditcard" htmlFor="paymethod" className={paymethod == "Transferencia" ? 'text-yellow-500 font-bold text-6xl' : 'text-gray-500 font-bold text-6xl'}>
                        <BsCreditCard onClick={() => { setPayMethod("Transferencia");}} ></BsCreditCard></button>

                      <button id="money" htmlFor="paymethod" className={paymethod == "Efectivo" ? 'text-green-500 font-bold text-6xl' : 'text-gray-500 font-bold text-6xl'}>
                        <FaMoneyBillWave onClick={() => { setPayMethod("Efectivo");}} ></FaMoneyBillWave></button>
                    </article>
                  </div>
                </article>
                <article>
                  <TableForm
                    description={description}
                    setDescription={setDescription}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    price={price}
                    setPrice={setPrice}
                    amount={amount}
                    setAmount={setAmount}
                    list={list}
                    setList={setList}
                    total={total}
                    setTotal={setTotal}
                  />
                </article>
                <label htmlFor="dueDate">Notas adicionales</label>
                <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Notas adicionales
                para el cliente" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Ver factura</button>
              </div>
            </>
          )}
      </main>
    </>
  );
}

export default App;
