"use client";

export default function Terms() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-zinc-700 mb-4">
          Welcome to <strong>Artork Design</strong>. By using our site, you agree
          to these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Use of Our Services</h2>
        <p className="text-zinc-700 mb-4">
          You agree not to misuse our services or engage in unlawful activities.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. Intellectual Property</h2>
        <p className="text-zinc-700 mb-4">
          All content, visuals, and assets are the property of Artork Design unless
          stated otherwise.
        </p>

        <p className="mt-10 text-sm text-zinc-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  );
}
