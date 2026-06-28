import { useEffect, useMemo, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('PKR')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const { data: rates, loading, error } = useCurrencyInfo(from)
  const options = useMemo(() => {
    const rateKeys = Object.keys(rates)
    return rateKeys.length ? Array.from(new Set([from, ...rateKeys])).sort() : [from, 'EUR', 'INR', 'GBP']
  }, [from, rates])
  const isConvertDisabled = loading || options.length === 0 || rates[to] === undefined

  useEffect(() => {
    if (!loading && rates[to] !== undefined) {
      setConvertedAmount(Number((amount * rates[to]).toFixed(4)))
    } else if (!loading) {
      setConvertedAmount(0)
    }
  }, [amount, to, rates, loading])

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
  }

  const convert = () => {
    if (rates[to] !== undefined) {
      setConvertedAmount(Number((amount * rates[to]).toFixed(4)))
    }
  }

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_24%),linear-gradient(135deg,_#020617_0%,_#0b1220_45%,_#020617_100%)] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl items-center justify-center">
        <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/50 px-6 py-8 shadow-2xl shadow-cyan-900/20 backdrop-blur-xl sm:px-10 sm:py-10">
          <div className="absolute -left-16 top-8 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -right-16 bottom-10 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/90">Live converter</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Currency Exchange</h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300 sm:text-base">Convert between global currencies in a single tap.</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
            className="relative space-y-6"
          >
            <div className="space-y-5">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />

              <div className="flex justify-center">
                <button
                  type="button"
                  className="relative -mt-4 rounded-full border border-cyan-400/30 bg-slate-900/95 px-6 py-3 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-500/20 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-500 hover:text-white"
                  onClick={swap}
                  aria-label="Swap currencies"
                >
                  swap
                </button>
              </div>

              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              disabled={isConvertDisabled}
              className={`w-full rounded-3xl px-6 py-4 text-base font-semibold text-white shadow-xl transition duration-200 ${isConvertDisabled ? 'cursor-not-allowed bg-slate-600/80 shadow-none' : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 shadow-cyan-500/20 hover:-translate-y-0.5 hover:shadow-cyan-500/30'}`}
            >
              {loading ? 'Loading rates...' : `Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
            </button>
            {error && <p className="text-sm text-rose-300">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default App