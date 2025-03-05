import Emoji from '#models/emoji'
import { GetRandomEmojiService } from '#services/get_random_emoji_service'
import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'

export default class EmojisController {
  async index(ctx: HttpContext) {
    const emojis = await Emoji.all()

    // console.log(emojis)

    ctx.view.share({ emojis, emojisLength: emojis?.length | 0 })
    return ctx.view.render('pages/home')
  }

  async create(ctx: HttpContext) {
    const randomEmoji = GetRandomEmojiService.getOne()

    // Cria um Emoji com base na tabela NamesList
    // Que é baseada em seeding (ainda a fazer)
    try {
      Emoji.create({
        name: 'Nome temporário',
        emoji: randomEmoji,
      })
    } catch (error) {
      throw new Exception('Error connecting database.', {
        code: 'E_INTERNAL_ERROR',
        status: 500,
      })
    }

    ctx.response.redirect().toRoute('emoji.index')
  }

  async delete(ctx: HttpContext) {
    const requestedId = ctx.request.params().id

    try {
      const emojiRow = await Emoji.findByOrFail({ id: requestedId })
      await emojiRow.delete()
    } catch (error) {
      console.log(error)
    }

    ctx.response.redirect().toRoute('emoji.index')
  }
}
