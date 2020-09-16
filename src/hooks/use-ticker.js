import { useEffect, useRef, useState } from 'react'

const START_PRICE = 11021.81

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    }
  )
}

export const useTicker = () => {
  const [lines, setLines] = useState([])
  const timeoutId = useRef(null)

  useEffect(() => {
    const handleTick = () => {
      const nextTickAt = Math.random() * 2000

      timeoutId.current = setTimeout(() => {
        setLines(lines => [
          {
            id: uuidv4(),
            time: new Date().toLocaleTimeString(),
            trade: {
              size: Math.random().toFixed(4),
              price: (
                (1 + Math.random() / 100) *
                START_PRICE
              ).toFixed(2),
            },
            prev: {
              price:
                lines[lines.length - 1] &&
                lines[lines.length - 1].trade.price,
            },
          },
          ...lines,
        ])
        handleTick()
      }, nextTickAt)
    }

    handleTick()

    return () => clearTimeout(timeoutId.current)
  }, [])

  return { lines }
}
