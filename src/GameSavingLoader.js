import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data));
  }
}

/*
  задача 2 static async load() {
    const data = await read();
    return await json(data);
  }

 задача 2 app.js:
(async () => {
  try {
    const saving = await GameSavingLoader.load();
    } catch (err) {
    }
})();

 */
