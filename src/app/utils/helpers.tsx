import he from "he";
import DOMPurify from 'dompurify';

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export function stripHtmlAndDecode(html: string): string {
    // Sanitize HTML using DOMPurify
    const cleanHtml = DOMPurify.sanitize(html);
    // Decode HTML entities
    return he.decode(cleanHtml);
}