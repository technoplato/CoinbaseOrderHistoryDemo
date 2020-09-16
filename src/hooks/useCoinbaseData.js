import axios from 'axios'
import { useEffect, useState } from 'react'

const sortData = (
  data,
  criteria = 'price',
  order = 'desc'
) => {
  return data.sort((o1, o2) => {
    const v1 = o1[criteria]
    const v2 = o2[criteria]

    if (order === 'asc') {
      return v1 < v2 ? -1 : 1
    } else {
      return v1 < v2 ? 1 : -1
    }
  })
}

export const useCoinbaseData = (
  sort = 'time',
  order = 'asc'
) => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const result = await axios(
      'https://api.pro.coinbase.com/products/BTC-USD/trades'
    )

    setData(sortData(result.data, sort, order))
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setData(data => sortData(data, sort, order))
  }, [sort, order])

  return { data, fetchData }
}
