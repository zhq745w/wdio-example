describe('Smoke tests', () => {
  it('Open site', () => {
    browser.url('/')
    $('//a[@aria-label="Homepage"]').waitForDisplayed()
  })
})
