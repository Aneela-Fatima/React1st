import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!currency) return

    const baseCurrency = currency.toUpperCase()
    const controller = new AbortController()
    setLoading(true)
    setError('')

    fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load ${baseCurrency} rates`)
        }
        return res.json()
      })
      .then((res) => {
        if (res && res.rates) {
          setData(res.rates)
        } else {
          setData({})
          setError('Unexpected API response')
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error(err)
          setData({})
          setError(err.message || 'Unable to load currency data')
        }
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [currency])

  return { data, loading, error }
}

export default useCurrencyInfo;
