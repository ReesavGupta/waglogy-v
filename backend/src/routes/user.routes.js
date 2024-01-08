import { Router } from 'express'
import { contact } from '../controllers/contact.controller.js'
const router = Router()

router.route('/contact').post(contact)

export default router
