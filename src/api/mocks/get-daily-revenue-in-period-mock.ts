import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '03/04/2024', receipt: 2000 },
    { date: '03/05/2024', receipt: 800 },
    { date: '03/06/2024', receipt: 8000 },
    { date: '03/07/2024', receipt: 540 },
    { date: '03/08/2024', receipt: 400 },
    { date: '03/09/2024', receipt: 700 },
    { date: '03/10/2024', receipt: 1000 },
  ])
})
