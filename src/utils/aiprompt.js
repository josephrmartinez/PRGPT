import OpenAI from "openai";

// const extractStyle = "You are an expert copywriter and editor. I am going to give you a piece of text. Your job is to provide clear and concise guidelines for an AI to accurately emulate the style of this text. Focus on key style components, including tone, formality, structure, vocabulary, perspective, terminology, sentence length, complexity, and voice. In your response, provide specific and concise guidelines for an AI to accurately emulate this style."

// const formatPressRelease = "Format your response as a press release that adhears to the following structure"
// "Headline: Summarize the newsworthy element of the announcement in 10-15 words. Include any prominent names (individuals or organizations) that would be attractive to someone looking at the release.


const openai = new OpenAI({apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true})


export default async function getStyleFromRef(styleRef) {
    // Create prompt text with user input. Include data model schema description.
    const prompt = `Reference text: ${styleRef}.`;

    openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", "content": "You are an expert copywriter and editor. The user will give you a piece of text. Your job is to provide clear and concise guidelines for an AI to accurately emulate the style of this text. Focus on key style components, including tone, formality, structure, vocabulary, perspective, terminology, sentence length, complexity, and voice. In your response, provide specific and concise guidelines for an AI to accurately emulate this style."},
        { role: "user", content: prompt }],

    })
      .then((completion) => {
        // Handle API response
        return completion.choices[0].message.content;
      })
      .catch((error) => {
        console.log(error);
      });
  }