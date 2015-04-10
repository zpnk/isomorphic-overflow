var hydrate = function(route, callback) {
  if ('fetch' in route.handler) {
    route.handler.fetch(route.params, function(data) {
      callback(data)
    })
  } else {
    callback({})
  }
}

module.exports = hydrate
