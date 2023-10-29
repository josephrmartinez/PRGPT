import OpenAI from "openai";


const openai = new OpenAI({apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true})


export default async function getStyleFromRef(styleRef) {
    // Create prompt text with user input. Include data model schema description.
    const prompt = `Reference text: ${styleRef}.`;
  
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", "content": "You are an expert copywriter and editor. The user will give you a piece of text. Your job is to provide clear and concise guidelines for an AI to accurately emulate the style of this text. Focus on key style components, including tone, formality, vocabulary, perspective, terminology, sentence length, complexity, and voice. In your response, provide specific and concise guidelines for an AI to accurately emulate this style. Do not provide an intro or concluding statement. Do not provide specific details from this text. Just output the guidelines to replicate the style of the text."},
          { role: "user", content: prompt }],
      });
  
      // Handle API response
      console.log("completion:", completion);
      return completion.choices[0].message.content;
    } catch (error) {
      console.error(error);
      throw error; // Optionally rethrow the error for higher-level error handling
    }
  }