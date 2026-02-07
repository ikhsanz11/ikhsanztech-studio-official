// Google Ads Conversion Tracking Utility
// Conversion ID: AW-17936483913
// Conversion Label: MvNFCLyppvQbEMmM5OhC

declare global {
    interface Window {
        gtag: (command: string, action: string, params?: Record<string, string>) => void;
    }
}

/**
 * Track Google Ads conversion when user clicks WhatsApp button
 */
export function trackWhatsAppConversion(): void {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-17936483913/MvNFCLyppvQbEMmM5OhC'
        });
    }
}

/**
 * Handle WhatsApp button click with conversion tracking
 * @param whatsappUrl - The WhatsApp URL to open
 */
export function handleWhatsAppClick(whatsappUrl: string): void {
    // Track conversion first
    trackWhatsAppConversion();

    // Then open WhatsApp link
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
