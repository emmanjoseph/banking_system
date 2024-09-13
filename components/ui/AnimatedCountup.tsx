'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCountup = ({amount}:{amount:number}) => {
  return (
    <p>
        <CountUp 
        duration={2.75}
        decimals={2}
        decimal='.'
        prefix='$'
        end={amount}
        />
    </p>
  )
}

export default AnimatedCountup