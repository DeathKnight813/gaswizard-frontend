

interface IData {
  percentage: string;
  title: string;
  description: string;
  bgColorClassName: string;
}

const DATA: Array<IData> = [
  {
    percentage: '7%',
    title: 'Community',
    description: 'Community rewards, lottery & (FREE GAS ⛽)',
    bgColorClassName: 'bg-primary'
  },
  {
    percentage: '3%',
    title: 'Marketing & Advertising',
    description: 'Helps to expand awareness, plus attracts more investors and consumers to the ecosystem!',
    bgColorClassName: 'bg-[#0085AB]'
  },
  {
    percentage: '1%',
    title: 'Auto Liquidity',
    description: 'Adds additional liquidity to increase price more!',
    bgColorClassName: 'bg-[#005A8F]'
  },
]

export default function Diagram() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 items-center">
        <div className="col-span-1">
          <div className="w-4/5 flex flex-col gap-4">
            {DATA.map(dataItem => (
              <div key={dataItem.title} className={`flex flex-col gap-4 p-8 ${dataItem.bgColorClassName}`}>
                <p className="text-8xl font-black text-white text-center">
                  {dataItem.percentage}
                </p>
                <p className="text-xl font-bold text-white text-center">
                  {dataItem.title}
                </p>
                <p className="text-xl text-white text-center">
                  {dataItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <img src="/assets/images/chart.png" alt="chart" />
          </div>
        </div>
      </div>
    </div>
  )
}