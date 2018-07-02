// Simple React Native specific changes
import Config from 'react-native-config'
import cred from '../db'
import '../I18n/I18n'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  analyticsTrackerId: '',
  bannerAdUnitID: __DEV__ ? 'ca-app-pub-3940256099942544/6300978111' : 'ca-app-pub-3940256099942544/6300978111',
  contributorSpace: 'Data Entry By Nofrets Poai. IG:@opetstudio, FB:nofrets poai, Tw:@opetstudio. Salam untuk jemaat Prisma, Tuhan memberkati.',
  getContributorSpace: (contributorSpace) => {
    return `<div style="border: solid blue 2px; padding: 5px; margin-bottom: 70px;">${contributorSpace}</div>`
  },
  auth0: {
    clientId: cred.AUTH0_CLIENT_ID,
    host: cred.AUTH0_HOST
  },
  backendURL: cred.backendURL,
  isContributorSpaceActive: false,
  isCommentActive: false,
  isDrawerFooterActive: false,
  isAdsActive: false,
  env: Config.ENV
}
