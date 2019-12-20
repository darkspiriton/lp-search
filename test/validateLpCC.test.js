const validateLpService = require('../js/validateLpCC')

const urls = ["https://www.freewayinsurance.com/lp/NT082-FWYCA-A-GO-LP-E-02502", "https://www.freewayinsurance.com/lp/NT087-FWYCA-A-GO-LP-E-02676","https://www.freewayinsurance.com/lp/NT087-FWYCA-A-GO-LP-E-02676/amp-index"]
const text = "By clicking the “GET A FREE QUOTE” button, I agree to the Terms & Conditions and Privacy Policy, provide my electronic signature, and consent to receive automated informational and promotional calls or text messages from Freeway Insurance Services, Inc. and its affiliates, successors and assigns. Consent is not a condition of any purchase."

urls.forEach((url) => {
  test(`Compare Comunication Consent in ${url}`, async () => {
    let quote = await validateLpService.getUrlData(url)
    expect(quote).toEqual(text)
  })
})
