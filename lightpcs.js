$('.album').each(function (index, album) {
  album = $(album);
  album.galleria({
    picasa: 'useralbum:' + album.data('user-album'),
    imageTimeout: 300000,
    height: 500
  });
});
