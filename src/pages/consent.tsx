import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Consent() {
  const [consent, setConsent] = useState(false);
  const router = useRouter();

  const handleConsent = () => {
    if (consent) {
      // Set the cookie for 30 days
      Cookies.set('adhd-therapy-consent', 'true', { expires: 30 });
      // Redirect to GPT page
      router.push(process.env.NEXT_PUBLIC_GPT_URL || '/');
    } else {
      alert('You must agree to the terms before proceeding.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">User Consent Required</h1>
      <p className="text-lg text-gray-700 max-w-lg text-center mb-8">
        Before you begin, please acknowledge that ADHD Therapy GPT is an AI-powered tool providing guidance and
        support on ADHD-related questions. It is not a replacement for professional medical advice, diagnosis, or treatment.
      </p>
      <label className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mr-2"
        />
        <span className="text-lg text-gray-700">I understand and agree to the terms</span>
      </label>
      <button
        onClick={handleConsent}
        className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700"
      >
        Proceed to ADHD Therapy GPT
      </button>
    </div>
  );
}
