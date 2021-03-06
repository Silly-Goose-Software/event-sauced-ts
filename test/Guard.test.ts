import { Guard } from '../src/errors/Guard'

describe('Given a variety of invalid string values', () => {
  const invalidStringValues = ['', ' ', undefined, null]
  invalidStringValues.forEach((invalidStringValue) =>
    it('It should throw an error when guarding against these', () => {
      expect(() => Guard.againstNullOrEmpty('foo', invalidStringValue)).toThrow(
        'foo can not be null, empty string or contain only whitespace'
      )
    })
  )
})

describe('Given a valid string', () => {
  const validString = 'not an Empty String'
  it('It should simply let it all pass.', () => {
    expect(() => Guard.againstNullOrEmpty('foo', validString)).not.toThrow()
  })
})
