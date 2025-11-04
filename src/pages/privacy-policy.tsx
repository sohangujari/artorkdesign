"use client";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-zinc-700 mb-4">
          At <strong>Artork Design</strong>, we respect your privacy. This policy
          outlines how we collect, use, and protect your data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
        <p className="text-zinc-700 mb-4">
          We may collect information such as your name, email address, and project
          details when you contact us or use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use It</h2>
        <p className="text-zinc-700 mb-4">
          This data helps us communicate with clients, improve our services, and
          ensure a better user experience.
        </p>

        <p className="mt-10 text-sm text-zinc-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  );
}
