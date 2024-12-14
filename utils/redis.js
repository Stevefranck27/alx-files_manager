  async get(key) {
    const value = await this.getAsync(key);
    return value;
  }

  /**
   * Creates a new key in redis with a specific TTL
   * @key {string} key to be saved in redis
   * @value {string} value to be asigned to key
   * @duration {number} TTL of key
   * @return {undefined}  No return
   */
  async set(key, value, duration) {
    this.client.setex(key, duration, value);
  }

  /**
   * Deletes key in redis service
   * @key {string} key to be deleted
   * @return {undefined}  No return
   */
  async del(key) {
    this.client.del(key);
  }
}

const redisClient = new RedisClient();

export default redisClient;
