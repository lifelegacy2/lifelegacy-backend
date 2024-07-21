import { openai } from "../../../../config/chatgpt.config.js";

export async function GetDataService(data) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-1106",
            messages: [{ role: "user", content: data }],
            max_tokens: 500,
        });
        return response.choices[0]?.message.content;
    } catch (error) {
        console.error('Error calling GPT-3.5:', error);
        return false;
    }
}
