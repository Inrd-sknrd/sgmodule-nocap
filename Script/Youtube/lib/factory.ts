import {
  BrowseMessage,
  NextMessage,
  PlayerMessage,
  SearchMessage,
  ShortsMessage,
  GuideMessage,
  SettingMessage,
  WatchMessage
} from '../src/responseHandler'
import { YouTubeMessage } from '../src/youtube'

const messages = new Map<string, new () => YouTubeMessage>([
  ['browse', BrowseMessage],
  ['next', NextMessage],
  ['player', PlayerMessage],
  ['search', SearchMessage],
  ['reel_watch_sequence', ShortsMessage],
  ['guide', GuideMessage],
  ['get_setting', SettingMessage],
  ['get_watch', WatchMessage]
])

export default function createMessage (url): YouTubeMessage | null {
  console.log(url)
  for (const [path, MessageClass] of messages.entries()) {
    if (url.includes(path)) {
      return new MessageClass()
    }
  }
  return null
}
