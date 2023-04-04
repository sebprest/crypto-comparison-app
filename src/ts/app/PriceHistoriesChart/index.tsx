import { Line } from 'react-chartjs-2'
import { TokenPriceHistory } from '^/state/tokensPriceHistories/types'

import type { ChartData } from 'chart.js'
import { formatUnixDate, createDatasetColor } from './utils'

interface Props {
  priceHistories: TokenPriceHistory[]
}

const PriceHistoriesChart: React.FC<Props> = ({ priceHistories }): JSX.Element => {
  const data: ChartData<'line'> = {
    labels: [],
    datasets: []
  }

  for (const priceHistory of priceHistories) {
    const labels: string[] = []
    const color = createDatasetColor(priceHistory.tokenId)
    for (const priceHistoryData of priceHistory.priceHistory) {
      labels.push(formatUnixDate(priceHistoryData[0]))
    }
    data.datasets.push({
      label: priceHistory.tokenId,
      data: priceHistory.priceHistory.map(dataPoint => dataPoint[1]),
      backgroundColor: color,
      borderColor: color,
      yAxisID: priceHistory.tokenId
    })
    data.labels = labels
  }

  return (
    <div style={{ height: 512, width: 800 }}>
      <Line data={data} height={512} width={800} />
    </div>
  )
}

export default PriceHistoriesChart
