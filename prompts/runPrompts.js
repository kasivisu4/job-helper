import executor from "./executor.js";
import defaultPrompts from "./defaultPrompts.js";
async function runPrompts(prompt_id, initial_data, API_KEY) {
  //Get  prompts
  let stages = defaultPrompts[prompt_id];
  let data = initial_data;
  let finalOutputType = "text";
  for (let stage in stages) {
    let prompts = stages[stage];
    let parts = [{ text: data }];
    for (let prompt in prompts) {
      let question = prompts[prompt].question;
      let outputType = prompts[prompt].outputType;
      let exampleOutput = prompts[prompt].exampleOutput;
      let request = [
        question,
        `Provide Output in ${outputType} format`,
        `example Output : - ${exampleOutput}`,
      ].join("\n");
      parts.push({ text: request });
      finalOutputType = outputType;
    }

    data = await executor(API_KEY, parts);
    if (finalOutputType === "JSON") {
      data = JSON.parse(data.slice(3, -3));
    }
  }
  return data;
}

export default runPrompts;
