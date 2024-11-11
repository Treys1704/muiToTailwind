import Anthropic from "@anthropic-ai/sdk";

export const anthropic = new Anthropic({
    apiKey: import.meta.env.ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
});