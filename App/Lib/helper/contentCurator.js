import { isEmpty, isUndefined, get, find, toLower } from 'lodash'
import { textMessage } from './languageSelector'

export function getSeasonsText (seasons) {
  if (isEmpty(seasons)) {
    return `${textMessage('content-season')} 01`
  }
  return `${textMessage('content-season')} ${seasons}`
}

export function getEpisodeText (episodes) {
  if (isEmpty(episodes)) {
    return ''
  }
  return `${episodes} ${textMessage('content-episodes')} `
}

export function truncateTextLength (title, maxLength = 15) {
  const titleLength = title.length

  if (titleLength > maxLength) {
    return `${title.substring(0, maxLength)}...`
  }
  return title
}

export const getContentProviderName = (content, providers) => {
  if (content && providers && !isUndefined(content.providerId)) {
    const providerName = get(
      find(providers, { tid: content.providerId }),
      'name',
      ''
    )
    return providerName
  } else {
    return null
  }
}

export const checkContentSubscribed = (
  subscriptions,
  providerName,
  content,
  loggedInStatus
) => {
  if (!content) {
    return false
  }

  const isFree = content.free || content.freeTrial || false

  // no login is needed for free contents
  if (!isUndefined(isFree) && parseInt(isFree) === 1) {
    return true
  }

  if (content.keywords) {
    const keywords = content.keywords.split('|')

    // special check for basic channels
    if (loggedInStatus && keywords.includes('maxstreampayu')) {
      return true
    }

    // check for entitled items
    if (subscriptions && !isEmpty(providerName)) {
      const hit = find(
        subscriptions,
        subscription => toLower(subscription) === toLower(providerName)
      )
      return !!hit
    }
  }

  return false
}
