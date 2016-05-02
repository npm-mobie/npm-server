const router = require( 'koa-router' )();

router.get( '/', async function ( ctx, next ) {
  ctx.state = {
    title: 'koa2 title'
  };
  ctx.body = 'this a users response!';
} );
module.exports = router;
