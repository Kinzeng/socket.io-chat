import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

export default (app) => {
  app.use(express.static(path.join(__dirname, '..', 'public')))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.set('views', 'app/client/views')
  app.set('view engine', 'ejs')
  return app
}
