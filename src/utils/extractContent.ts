function extractContentWithinBackticks(response: string): string {
    // Utiliser un Regex pour capturer le contenu entre ```
    const match = response.match(/```([\s\S]*?)```/);
    // Si on trouve un match, on retourne le contenu extrait, sinon la réponse complète
    return match ? match[1].trim() : response.trim();
  }

  export default extractContentWithinBackticks;

  export function extractReturnContent(code: any): string {
    // Utiliser une expression régulière pour trouver la partie entre 'return (' et ')'
    const returnMatch = code.match(/return\s*\(([\s\S]*?)\);?\s*}$/);
    
    if (returnMatch && returnMatch[1]) {
      return returnMatch[1].trim();
    }
    
    return code;
  }