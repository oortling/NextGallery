import React from 'react'
import Group from '@/components/groups'

export default function Grid() {
  return (
    <div className='pt-30'>
      <Group data='2025-03-23' location='香港特别行政区' size={8} />
      <Group data='2025-03-22' location='故宫博物院' size={8} />
      <Group data='2025-03-21' location='张家界国家森林公园' size={8} />
      <Group data='2025-03-20' location='西湖风景区' size={8} />
      <Group data='2025-03-19' location='黄山风景区' size={8} />
      <Group data='2025-03-18' location='三亚亚龙湾' size={8} />
      <Group data='2025-03-17' location='布达拉宫' size={8} />
    </div>
  )
}
