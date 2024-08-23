import Link from 'next/link';

export default function Home() {
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
        Our GPT offers guidance and support without replacing professional medical advice. Whether you're
        looking for strategies to improve focus, manage daily tasks, or understand ADHD better, our AI is here to help.
      </p>
      <Link href="/consent" className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700">
          Get Started with ADHD Therapy GPT
      </Link>
    </div>
  );
}
