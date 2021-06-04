import * as React from 'react'
import { DocTitle } from '../components/common'
import { NationalToday } from '../components/indexScreen/NationalToday'
import RegionsCarbon from '../components/indexScreen/RegionsCarbon'
import QuickView from '../components/indexScreen/QuickView'
import './index.screen.scss'

export default function IndexScreen() {
  return (
    <div className="home-page">
      <DocTitle title="Carbon Intensity" />
      <QuickView className="quick-view" />
      <NationalToday />
      <RegionsCarbon />
    </div>
  )
}
