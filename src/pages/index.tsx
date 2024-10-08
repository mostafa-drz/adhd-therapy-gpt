import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import {analytics} from '../utils'

export default function Home() {
  const [consentProvided, setConsentProvided] = useState(false);
  const router = useRouter();

  useEffect(()=>{
   console.log(analytics?.app.name);
  },[])
  useEffect(() => {
    // Check if the consent cookie exists
    const userConsent = Cookies.get('adhd-therapy-consent');
    if (userConsent) {
      setConsentProvided(true);
    }
  }, []);

  const handleActionClick = () => {
    if (consentProvided) {
      // If consent is already provided, go directly to the GPT URL
      router.push(process.env.NEXT_PUBLIC_GPT_URL || '/');
    } else {
      // Otherwise, go to the consent page
      router.push('/consent');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <h1 className="text-5xl font-bold mb-6 text-gray-800">
        ADHD Therapy GPT: Your AI-Powered Guide
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
        Welcome to ADHD Therapy GPT, a revolutionary AI-powered advisor designed to help you navigate
        the challenges of ADHD. Using the power of custom GPTs and the latest advancements in AI, this tool
        provides personalized advice and answers to your questions about ADHD.
      </p>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
        Our GPT offers guidance and support without replacing professional medical advice. Whether you&apos;re
        looking for strategies to improve focus, manage daily tasks, or understand ADHD better, our AI is here to help.
      </p>
      <button
        onClick={handleActionClick}
        className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700"
      >
        Get Started with ADHD Therapy GPT
      </button>
    </div>
  );
}
