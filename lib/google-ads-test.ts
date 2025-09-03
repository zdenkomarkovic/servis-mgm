// Google Ads Testing Utility
export const testGoogleAds = () => {
  console.log('🔍 Testing Google Ads Implementation...');
  
  // Test 1: Check if gtag is loaded
  if (typeof window !== 'undefined' && window.gtag) {
    console.log('✅ Google Ads gtag is loaded');
    
    // Test 2: Check dataLayer
    if (window.dataLayer) {
      console.log('✅ dataLayer is initialized');
      console.log('📊 dataLayer contents:', window.dataLayer);
    } else {
      console.log('❌ dataLayer is not initialized');
    }
    
    // Test 3: Test conversion tracking
    try {
      window.gtag('event', 'test_conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'test_mode': true
      });
      console.log('✅ Conversion tracking test sent');
    } catch (error) {
      console.log('❌ Conversion tracking test failed:', error);
    }
    
    // Test 4: Test GA4
    try {
      window.gtag('event', 'test_ga4_event', {
        'send_to': 'G-XXXXXXXXXX',
        'test_mode': true
      });
      console.log('✅ GA4 tracking test sent');
    } catch (error) {
      console.log('❌ GA4 tracking test failed:', error);
    }
    
  } else {
    console.log('❌ Google Ads gtag is not loaded');
  }
  
  // Test 5: Check Schema.org markup
  const schemaScript = document.querySelector('script[type="application/ld+json"]');
  if (schemaScript) {
    console.log('✅ Schema.org markup found');
    try {
      const schemaData = JSON.parse(schemaScript.textContent);
      console.log('📋 Schema data:', schemaData);
    } catch (error) {
      console.log('❌ Schema.org markup parsing failed:', error);
    }
  } else {
    console.log('❌ Schema.org markup not found');
  }
  
  // Test 6: Check Privacy Policy link
  const privacyLink = document.querySelector('a[href="/privacy-policy"]');
  if (privacyLink) {
    console.log('✅ Privacy Policy link found');
  } else {
    console.log('❌ Privacy Policy link not found');
  }
  
  console.log('🎯 Google Ads testing completed');
};

// Auto-run test when page loads
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(testGoogleAds, 2000); // Wait 2 seconds for scripts to load
  });
}
