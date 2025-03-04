/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const EmojisController = () => import('#controllers/emojis_controller')
import router from '@adonisjs/core/services/router'

// Se fosse renderizar uma página para cada item da lista
// Teria que ser um endpoint com parametro na rota.
// Aí passa o share na view

router.get('/', [EmojisController, 'index']).as('emoji.index')
router.post('/emoji', [EmojisController, 'create']).as('emoji.create')
