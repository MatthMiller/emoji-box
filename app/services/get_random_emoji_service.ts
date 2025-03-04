export class GetRandomEmojiService {
  static emojiList = [
    '👽',
    '🐢',
    '🐈',
    '🐈‍⬛',
    '🦆',
    '🐸',
    '🦧',
    '🐒',
    '🐠',
    '🦈',
    '🐟',
    '🪅',
    '🦤',
    '🦘',
    '🦥',
    '🦎',
    '🦖',
    '🐳',
    '🪼',
    '🦃',
    '🐦‍⬛',
    '🪱',
    '🪰',
  ]

  static getOne() {
    const randomIndex = Math.floor(Math.random() * this.emojiList.length)
    console.log('[GetRandomEmojiService] Randomized Emoji:', this.emojiList[randomIndex])
    return this.emojiList[randomIndex]
  }
}
