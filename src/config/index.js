const client = {
  source: "frontend-v2",
  version: "v1.1.5"
};

module.exports = {
  version: client.version,
  api: {
    submitParams: client
  },
  cdn: {
    global: "https://penguin.upyun.galvincdn.com"
  }
}