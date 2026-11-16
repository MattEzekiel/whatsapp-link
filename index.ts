export type LinkType = 'wa.me' | 'api' | 'app' | 'android';

const WA_ME_BASE = 'https://wa.me/';
const API_BASE = 'https://api.whatsapp.com/';
const APP_BASE = 'whatsapp://';
const ANDROID_INTENT_SUFFIX = '#Intent;scheme=whatsapp;package=com.whatsapp;S.browser_fallback_url=';

const waMeUrl = (digits: string, text: string): string => `${WA_ME_BASE}${digits}${text && `?${text}`}`;
const sendPath = (digits: string, text: string): string => `send?phone=${digits}${text && `&${text}`}`;

export const formatWhatsAppUrl = (phoneNumber: string | number, message?: string, type: LinkType = 'wa.me'): string => {
    const digits = String(phoneNumber).replace(/\D/g, '');
    if (!digits) throw new Error('phoneNumber must contain at least one digit');
    const trimmed = message?.trim();
    const text = trimmed ? `text=${encodeURIComponent(trimmed)}` : '';

    switch (type) {
        case 'wa.me':
            return waMeUrl(digits, text);
        case 'api':
            return `${API_BASE}${sendPath(digits, text)}`;
        case 'app':
            return `${APP_BASE}${sendPath(digits, text)}`;
        case 'android':
            return `intent://${sendPath(digits, text)}${ANDROID_INTENT_SUFFIX}${encodeURIComponent(waMeUrl(digits, text))};end`;
        default:
            throw new Error(`Unknown link type: ${String(type)}`);
    }
};

export default formatWhatsAppUrl;
