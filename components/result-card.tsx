import { PredictionResult } from '@/lib/types';

export function ResultCard({ result }: { result: PredictionResult }) {
  const confidencePercentage = (result.confidence * 100).toFixed(1);

  const statusColor = result.label === 'healthy' ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200';
  const statusBadgeColor = result.label === 'healthy' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800';

  return (
    <div className={`rounded-lg border-2 p-8 ${statusColor}`}>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-foreground">Diagnosis Result</h2>
          <div className={`inline-block px-4 py-2 rounded-full font-semibold ${statusBadgeColor}`}>
            {result.label.charAt(0).toUpperCase() + result.label.slice(1)}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground">Confidence Level</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-border rounded-full h-3">
              <div
                className="h-3 rounded-full bg-primary transition-all duration-300"
                style={{ width: `${result.confidence * 100}%` }}
              />
            </div>
            <span className="font-bold text-lg min-w-fit">{confidencePercentage}%</span>
          </div>
        </div>

        <div className="bg-background rounded-lg p-4 border border-border">
          <h3 className="font-semibold mb-2 text-foreground">Recommendation</h3>
          <p className="text-foreground leading-relaxed">{result.suggestion}</p>
        </div>
      </div>
    </div>
  );
}
