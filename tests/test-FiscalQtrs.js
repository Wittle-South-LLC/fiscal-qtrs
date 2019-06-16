import { describe, it } from 'mocha'
import chai from 'chai'
import { FiscalQtrs } from '../src/FiscalQtrs'

describe('FiscalQtrs Core Functions', () => {
  it('Creates successfully', () => {
    const fq = new FiscalQtrs(5)
    chai.expect(fq).to.be.an.instanceof(FiscalQtrs)
  })
  it('Throws an exception with invalid input', () => {
    chai.expect(() => new FiscalQtrs('May')).to.throw()
  })
  it('Returns correct calendar quarter', () => {
    const fq = new FiscalQtrs(5)
    chai.expect(fq.getCQ(new Date('2019-12-03T00:00:00Z'))).to.equal(4)
  })
  it('Returns correct fiscal quarter', () => {
    const fq = new FiscalQtrs(5)
    chai.expect(fq.getFQ(new Date('2019-12-03T00:00:00Z'))).to.equal(3)
  })
  it('Returns correct fiscal quarter label', () => {
    const fq = new FiscalQtrs(5)
    chai.expect(fq.getFQLabel(new Date('2019-12-03T00:00:00Z'))).to.equal('FY20Q3')
    chai.expect(fq.getFQLabel(new Date('2019-04-03T00:00:00Z'))).to.equal('FY19Q4')
  })
  it('Returns correct calendar quarter label', () => {
    const fq = new FiscalQtrs(5)
    chai.expect(fq.getCQLabel(new Date('2019-12-03T00:00:00Z'))).to.equal('CY19Q4')
    chai.expect(fq.getCQLabel(new Date('2019-04-03T00:00:00Z'))).to.equal('CY19Q2')
  })
})