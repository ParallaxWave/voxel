import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import http from 'http';
import * as sapper from '@sapper/server';
import * as io from 'socket.io';
const server = http.createServer();
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka({ server }) // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      session: (req, res) => ({
        user: false
      })
    })
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });

io(server).on('connection', socket => {
  socket.on('sendMsg', _ => {
    socket.broadcast.emit('receiveMsg', _);
  })
});
