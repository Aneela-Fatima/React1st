import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId()

  return (
    <div className={`rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-xl shadow-black/10 backdrop-blur-xl ${className}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex-1">
          <label htmlFor={amountInputId} className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.08em] text-slate-300/85">
            {label}
          </label>
          <input
            id={amountInputId}
            className="w-full border-0 bg-transparent py-3 text-3xl font-semibold text-white outline-none placeholder:text-slate-400"
            type="number"
            placeholder="0"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(e.target.value ? Number(e.target.value) : 0)}
          />
        </div>

        <div className="min-w-[140px]">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-slate-300/85">Currency</p>
          <select
            className="w-full rounded-2xl border border-white/15 bg-slate-950/80 px-3 py-3 text-sm font-semibold text-white shadow-inner shadow-black/10 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/20"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
          >
            {currencyOptions.length > 0 ? (
              currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency.toUpperCase()}
                </option>
              ))
            ) : (
              <option value={selectCurrency}>
                {selectCurrency?.toUpperCase() || 'Loading...'}
              </option>
            )}
          </select>
        </div>
      </div>
    </div>
  )
}

export default InputBox