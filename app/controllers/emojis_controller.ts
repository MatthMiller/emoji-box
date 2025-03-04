import Emoji from '#models/emoji'
import { GetRandomEmojiService } from '#services/get_random_emoji_service'
import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'

export default class EmojisController {
  async index(ctx: HttpContext) {
    const emojis = await Emoji.all()

    console.log('teste')
    console.log(emojis)

    ctx.view.share({ emojis })
    return ctx.view.render('pages/home')
  }

  async create(ctx: HttpContext) {
    const randomEmoji = GetRandomEmojiService.getOne()
    console.log(randomEmoji)

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
}
