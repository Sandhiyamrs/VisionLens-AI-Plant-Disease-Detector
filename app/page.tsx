import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Detect Plant Diseases <span className="text-primary">with AI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              VisionLens uses advanced deep learning to instantly identify plant diseases from a single leaf image. Get accurate diagnosis and treatment recommendations in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/upload"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Scanning
              </Link>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 my-20">
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Accurate Detection</h3>
              <p className="text-muted-foreground">Our AI model achieves 95%+ accuracy in identifying fungal, bacterial, and healthy plant conditions.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Instant Results</h3>
              <p className="text-muted-foreground">Get diagnosis and treatment recommendations in real-time, just take a photo and upload.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Expert Advice</h3>
              <p className="text-muted-foreground">Receive detailed care instructions and treatment options tailored to each disease diagnosis.</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-primary/5 rounded-lg border border-primary/20 p-12 my-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2 text-foreground">Upload Image</h3>
                <p className="text-muted-foreground">Take a clear photo of your plant leaf and upload it to our platform.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2 text-foreground">AI Analysis</h3>
                <p className="text-muted-foreground">Our deep learning model analyzes the image and identifies any diseases.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2 text-foreground">Get Results</h3>
                <p className="text-muted-foreground">Receive diagnosis with confidence score and personalized care recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
