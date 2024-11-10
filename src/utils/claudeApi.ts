import { toast } from "sonner";
import { anthropic } from "./anthropic";

export const convertMuiToTailwind = async (muiCode: string): Promise<string> => {
  try {
    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1000,
      temperature: 0.2,
      system: "convert material ui components into tailwind classes with corresponding html tags",
      messages: [
        {
          role: "user",
          content: `Convert the following and generate code only without any explanation before and after:\n\n${muiCode}`,
        },
      ],
    });

    // Retourner le code généré
    console.log(response);
    return response.content[0].type === "text" ? response.content[0].text : "";
  } catch (error) {
    toast.error("Une erreur s'est produite lors de la conversion: " + error);
    return "Erreur : Impossible de convertir le code.";
  }
};
