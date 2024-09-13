// import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimatedCountup from './ui/AnimatedCountup'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({accounts=[],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) => {
  return (
    <section
    className='total-balance'
    >
        <div className="  size-full max-w-[100px] items-center sm:max-w-[120px]">
          <DoughnutChart
          accounts={accounts}
          />
        </div>

        <div className="flex flex-col gap-6">
            <h2 className="header-2">
            Bank accounts{totalBanks} 
            </h2>
            <div className="flex flex-col gap-2">
                <p className='total-balance-label'>
                    Total Current Balance
                </p>
                <div className="total-balance-amount flex-center gap-2">
                    <AnimatedCountup
                  amount={totalCurrentBalance}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox