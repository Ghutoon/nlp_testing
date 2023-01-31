const fs = require("fs");
const { NlpManager } = require("node-nlp");

(async () => {
  const data = fs.readFileSync("mymodel.nlp", "utf8");
  const manager = new NlpManager();
  manager.import(data);
  const result = await manager.process(
    "en",
    "Movies of Tom Hanks"
  );
  //console.log(result.entities);

  let our_entities = { genre: [], hero: [], daterange: [] };
  console.dir(result);
  result.entities.forEach((element) => {
    let entity_type = element["entity"];
    if (our_entities[entity_type] != null) {
      if (entity_type === "daterange")
        our_entities[entity_type].push(element["resolution"]["timex"]);
      else our_entities[entity_type].push(element["option"]);
    }
  });
  console.log(our_entities);
})();
