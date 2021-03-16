const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!

const socketInfo = {};
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    const { user_id } = socket.handshake.query;  //get จาก   const socket = socketio("http://192.168.1.7:3333", { query: { user_id } }) //port : 3333  ของ backend , const user_id = "art123456"
    socketInfo.socket_id = socket.id;
    socketInfo.user_id = user_id;
    // console.log("socket.id",socket.id)
});
// end of socket.io logic

module.exports = {socketapi , socketInfo};