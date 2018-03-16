import { expect } from 'chai'
import { defineSupportCode } from 'cucumber'

defineSupportCode(({ Given, When, Then }) => {
    Given('I visit {stringInDoubleQuotes}', (url) => browser.url(url))

    When('I click the clickable region', () => browser.click('#clickable'))

    Then('I should get the result: {int}', (num) => {
        expect(num).to.be.equal(1)
    })

    Then('I run failing step', () => {
        expect(true).to.be.equal(false)
    })

    Then('I see steps after as pending', () => {
        expect(true).to.be.equal(true)
    })
})
