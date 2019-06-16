/* FiscalQtrs.js - Represent fiscal quarters */

export const FQ_STRING = 'FQ'
export const CQ_STRING = 'CQ'

export class FiscalQtrs {
  constructor(startFiscalMonth) {
    if (isNaN(startFiscalMonth) || (startFiscalMonth < 1) || (startFiscalMonth > 12)) {
      throw new Error('FiscalQtrs: startFiscalMonth must be a number between 1 and 12')
    }
    this._startFiscalMonth = startFiscalMonth
    // Create a mapping of month number to calendar quarter number
    this._monthToCQ = {1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 2, 7: 3, 8: 3, 9: 3, 10: 4, 11: 4, 12: 4}
    // Create a mapping of month number to fiscal quarter number
    this._monthToFQ = {}
    var monthIndex = this._startFiscalMonth
    for (var qtr = 1; qtr <= 4; qtr++) {
      for (var mon = 1; mon <= 3; mon++) {
        this._monthToFQ[monthIndex] = qtr
        monthIndex = monthIndex === 12 ? 1 : monthIndex + 1
      }
    }
  }
  getFQ(myDate) {
    return this._monthToFQ[myDate.getMonth() + 1]
  }
  getCQ(myDate) {
    return this._monthToCQ[myDate.getMonth() + 1]
  }
  getFQLabel(myDate) {
    const fq = this.getFQ(myDate)
    var myYear = myDate.getFullYear()
    var myMonth = myDate.getMonth()
    if (myMonth >= this._startFiscalMonth) {
      myYear = myYear + 1
    }
    return `FY${myYear % 100}Q${fq}`
  }
  getCQLabel(myDate) {
    const cq = this.getCQ(myDate)
    var myYear = myDate.getFullYear()
    return `CY${myYear % 100}Q${cq}`
  }
}
