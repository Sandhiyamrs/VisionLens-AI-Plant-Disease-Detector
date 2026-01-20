'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LoadingSpinner } from '@/components/loading-spinner';
import { UploadedImage } from '@/lib/types';

export default function UploadPage() {
  const router = useRouter();
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage({
          file,
          preview: event.target?.result as string,
        });
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScan = async () => {
    if (!uploadedImage) return;

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', uploadedImage.file);

      const response = await fetch('/api/detect', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to scan image');
      }

      // Store result in session storage for the result page
      sessionStorage.setItem('detectionResult', JSON.stringify({
        result: data,
        image: uploadedImage.preview,
      }));

      router.push('/result');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-foreground">Scan Your Plant</h1>
            <p className="text-muted-foreground text-lg">Upload a clear image of a plant leaf to detect diseases</p>
          </div>

          <div className="bg-card border-2 border-dashed border-primary/30 rounded-lg p-12 text-center mb-8 hover:border-primary/60 transition-colors">
            {uploadedImage ? (
              <div className="space-y-4">
                <img
                  src={uploadedImage.preview || "/placeholder.svg"}
                  alt="Uploaded plant"
                  className="max-h-96 mx-auto rounded-lg"
                />
                <button
                  onClick={() => setUploadedImage(null)}
                  className="text-primary hover:underline font-medium"
                >
                  Choose Different Image
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-5xl">🍃</div>
                <div>
                  <label className="cursor-pointer">
                    <span className="text-primary font-semibold hover:underline">Click to upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <p className="text-muted-foreground mt-2">or drag and drop</p>
                </div>
                <p className="text-muted-foreground text-sm">PNG, JPG, GIF up to 10MB</p>
              </div>
            )}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {uploadedImage && !loading && (
            <button
              onClick={handleScan}
              className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Scan Leaf
            </button>
          )}

          {loading && (
            <div className="bg-card border border-border rounded-lg p-12">
              <div className="flex flex-col items-center gap-4">
                <LoadingSpinner />
                <p className="text-muted-foreground">Analyzing your plant leaf...</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
