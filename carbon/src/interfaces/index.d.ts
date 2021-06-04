export interface ICarbonData {
  intensity: {
    forecast: number
    actual: number | null
  }
  index: string
  from: string
  to: string
}

export interface ITimeRange {
  from: string
  to: string
}

export interface INationalTodayData {
  forecast: number[]
  actual: number[]
  overall: number
}
