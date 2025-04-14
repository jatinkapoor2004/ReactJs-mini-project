import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import {InputBox} from './components/index.js';

function App() {
  const [amount, setAmount] = useState();
  const[from,setFrom] = useState('usd');
  const[to,setTo] = useState('inr');
  const[convertedAmount,setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from);// it will give object of conversion rates from FROM wali currency
  const options = Object.keys(currencyInfo)// all option in which we can convert from these option we will find TO wali currency and then multiple the value to amount
  // but this option is used just to show dropdown 

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  // const swap = () =>{
  //   setFrom(to)
  //   setTo(from);
  //   const temp = amount
  //   setAmount(convertedAmount)
  //   setConvertedAmount(temp)
  // }

  const swap = () => {
    setFrom(to);
    setTo(from);

    setConvertedAmount(amount);
    setAmount(convertedAmount);
};


  return (
    <>
        <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh"
        }}
        >


        {/* <h1>hello</h1> */}

          <div className='w-full'>
              <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                  <form onSubmit={(e) =>{
                    e.preventDefault()
                    convert()
                  }}>

                    {/* now creating our first component i.e. TO WALI FIELD */}

                      <div className='w-full mb-1'>
                        <InputBox
                          label="from"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setFrom(currency)}
                          onAmountChange={(amount) => setAmount(amount)}
                          selectedCurrency={from}
                          // amountDisabled={true}
                        />
                      </div>

                      <div className='relative w-full h-0.5'>
                          <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                             onClick={(e) => {
                              e.preventDefault();  // ⛔ Prevent accidental form submission
                              swap();
                          }}
                          >

                            swap
                          </button>
                      </div>

                      <div className='w-full mb-1'>
                        <InputBox
                          label="To"
                          currencyOptions={options}
                          amount={convertedAmount}
                          onCurrencyChange={(currency) => setTo(currency)}
                          selectedCurrency={to}
                          amountDisabled
                        />
                      </div>

                      <button
                      type='submit'
                      className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
                      > 
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>

                  </form>
              </div>
          </div>
        </div>
    </>
  )
}

export default App
