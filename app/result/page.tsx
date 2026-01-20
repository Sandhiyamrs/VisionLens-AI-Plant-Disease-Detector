'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ResultCard } from '@/components/result-card';
import { PredictionResult } from '@/lib/types';

interface StoredResult {
  result: PredictionResult;
  image: string;
}

export default function ResultPage() {
  const [resultData, setResultData] = useState<StoredResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem('detectionResult');
    if (stored) {
      setResultData(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <p className="text-muted-foreground">Loading result...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (!resultData) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4 text-foreground">No Result Found</h1>
              <p className="text-muted-foreground mb-8">
                Please upload an image from the scan page.
              </p>
              <Link
                href="/upload"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Go to Upload
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-foreground">Scan Results</h1>
            <p className="text-muted-foreground">Here is the analysis of your plant leaf</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="font-semibold mb-4 text-foreground">Uploaded Image</h2>
              <img
                src={resultData.image || "/placeholder.svg"}
                alt="Scanned plant"
                className="w-full rounded-lg border border-border"
              />
            </div>

            <div>
              <h2 className="font-semibold mb-4 text-foreground">Diagnosis</h2>
              <ResultCard result={resultData.result} />
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link
              href="/upload"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Scan Another Plant
            </Link>
            <Link
              href="/"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
