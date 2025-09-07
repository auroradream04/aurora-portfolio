import he from "he";

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export function stripHtmlAndDecode(html: string): string {
    // Remove HTML tags (Server-safe)
    const textWithoutTags = html.replace(/<[^>]*>?/g, '');
    // Decode HTML entities
    return he.decode(textWithoutTags);
}