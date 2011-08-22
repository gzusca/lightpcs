$('.album').each(function (index, album) {
  album = $(album);
  album.galleria({
    picasa: 'useralbum:' + album.data('user-album'),
    height: 500
  });
});
