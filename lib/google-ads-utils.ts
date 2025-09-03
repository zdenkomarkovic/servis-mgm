import { GOOGLE_ADS_CONFIG } from '@/constants/google-ads';

// Remarketing tracking functions
export const trackPageView = (pageName: string, category?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      'send_to': GOOGLE_ADS_CONFIG.REMARKETING_ID,
      'page_title': pageName,
      'page_category': category || 'general',
      'custom_parameter_1': category || 'general',
      'custom_parameter_2': 'visitor'
    });
  }
};

export const trackServiceView = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      'send_to': GOOGLE_ADS_CONFIG.REMARKETING_ID,
      'item_name': serviceName,
      'item_category': 'services',
      'custom_parameter_1': 'services',
      'custom_parameter_2': 'interested_visitor'
    });
  }
};

export const trackContactPageView = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_page_view', {
      'send_to': GOOGLE_ADS_CONFIG.REMARKETING_ID,
      'page_title': 'Contact Page',
      'page_category': 'contact',
      'custom_parameter_1': 'contact',
      'custom_parameter_2': 'high_intent_visitor'
    });
  }
};

export const trackPhoneClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      'send_to': GOOGLE_ADS_CONFIG.REMARKETING_ID,
      'event_category': 'engagement',
      'event_label': 'phone_call',
      'custom_parameter_1': 'contact',
      'custom_parameter_2': 'converting_visitor'
    });
  }
};

export const trackFormStart = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_start', {
      'send_to': GOOGLE_ADS_CONFIG.REMARKETING_ID,
      'event_category': 'engagement',
      'event_label': 'contact_form',
      'custom_parameter_1': 'contact',
      'custom_parameter_2': 'high_intent_visitor'
    });
  }
};
