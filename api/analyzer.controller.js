const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: "" }); // Put your key here

exports.analysis = async (req, res) => {
  try {
    const dataset = req.body.dataset;
    const prompt = `
        Analyze the dataset:
        Months: ${dataset.months.join(". ")}
        Sales: ${dataset.data[0].data.join(". ")}
        Profit: ${dataset.data[1].data.join(". ")}

        Provide insights and trends based on the given data and provide me 5 bullet points numbered as 1, 2, 3, 4, 5 in json and please do suggest me a chart type in a field name chart which will be suitable to visulaize this relation between sales and profit across diferent month.
        `;
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        { role: "user", content: prompt },
      ],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
    });
    const openAIData = JSON.parse(completion.choices[0].message.content);
    if (!Object.keys(openAIData)?.length) {
      return res.status(400).json({
        message: openAIData,
      });
    }
    const firstProperty = Object.keys(openAIData)[0];
    const secondProperty = Object.keys(openAIData)[1];
    let defaultData = openAIData[firstProperty];
    let secondData = openAIData[secondProperty];
    return res.status(200).json({
      analysis: defaultData,
      chart: secondData,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
