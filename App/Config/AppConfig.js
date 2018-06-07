// Simple React Native specific changes

import '../I18n/I18n'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  bannerAdUnitID: __DEV__ ? 'ca-app-pub-3940256099942544/6300978111' : 'ca-app-pub-3940256099942544/6300978111',
  contributorSpace: 'Data Entry By Nofrets Poai. IG:@opetstudio, FB:nofrets poai, Tw:@opetstudio. Salam untuk jemaat Prisma, Tuhan memberkati.',
  getContributorSpace: (contributorSpace) => {
    return `<div style="border: solid blue 2px; padding: 5px; margin-bottom: 70px;">${contributorSpace}</div>`
  }
}
