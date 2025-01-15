class HashTable {
  constructor(limit = 14) {
    this.storageLimit = limit;
    this.storage = [];
  }

  hashKey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.storageLimit;
  }

  set(key, value) {
    const index = this.hashKey(key);

    if (!this.storage[index]) {
      this.storage[index] = [[key, value]];
    } else {
      let updated = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          updated = true;
          break;
        }
      }
      if (!updated) {
        this.storage[index].push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hashKey(key);
    if (!this.storage[index]) {
      throw new Error("Key not found");
    }

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        return this.storage[index][i][1];
      }
    }
    throw new Error("Key not found");
  }

  remove(key) {
    const index = this.hashKey(key);

    if (!this.storage[index]) return;

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        this.storage[index].splice(i, 1);
        if (this.storage[index].length === 0) {
          delete this.storage[index];
        }
        return;
      }
    }
  }
}
