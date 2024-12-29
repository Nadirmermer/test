export function formatText(text: string | undefined): string {
  if (!text) return '';
  
  // Replace **text** with bold text and handle line breaks
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
             .split('<hr>').join('\n');
}