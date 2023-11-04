import React, { useState } from "react";
import InputBox from "./component/InputBox";
import useCurrency from "./useHook/useCurrency";

function Index (){
    
    const [amount, setAmount]= useState(0)
    const [to, setTo]= useState("inr")
    const [from, setFrom]= useState('usd')
    const [changedAmount, setChangeAmount]=useState(0)

    const useCurrencyInfo= useCurrency(from)

    const options= Object.keys(useCurrencyInfo)

    const swap =()=>{
        setFrom(to)
        setTo(from)
        setAmount(changedAmount)
        setChangeAmount(amount)
    }
    const convert=()=> {
        setChangeAmount (amount * useCurrencyInfo[to])
    }

    return (     
        <div>
            <div
            className="w-full h-screen bg-slate-900 flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
           
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=> setFrom(currency)}
                                selectCurrency={from}
                      
                                onAmountChange={(amount)=> setAmount(amount)}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={changedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=> setTo(currency)}
                                onAmountChange=  {(amount)=> setAmount(amount)}
                                selectCurrency={to}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Index