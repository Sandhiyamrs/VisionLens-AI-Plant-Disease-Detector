import { NextRequest, NextResponse } from 'next/server';

interface DetectionRequest {
  label: 'healthy' | 'fungal' | 'bacterial';
  confidence: number;
}

function getDiseaseResult(label: string): DetectionRequest {
  const results: Record<string, DetectionRequest> = {
    'healthy': {
      label: 'healthy',
      confidence: 0.92,
    },
    'fungal': {
      label: 'fungal',
      confidence: 0.88,
    },
    'bacterial': {
      label: 'bacterial',
      confidence: 0.85,
    },
  };

  return results[label] || results['healthy'];
}

function getSuggestion(label: string): string {
  const suggestions: Record<string, string> = {
    'healthy': 'Plant is healthy. Maintain proper watering & sunlight.',
    'fungal': 'Apply fungicide; remove infected leaves; reduce humidity.',
    'bacterial': 'Prune infected areas; sterilize tools; avoid overhead watering.',
  };

  return suggestions[label] || suggestions['healthy'];
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image') as File;

    if (!imageFile) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!imageFile.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload an image.' },
        { status: 400 }
      );
    }

    // In a production app, here you would:
    // 1. Load the TensorFlow model from /public/visionlens_model.h5
    // 2. Preprocess the image (resize to 128x128, normalize)
    // 3. Run inference through the model
    // 4. Return prediction with confidence

    // For now, we simulate a prediction based on image properties
    const buffer = await imageFile.arrayBuffer();
    const fileSize = buffer.byteLength;

    // Simulate different predictions based on file characteristics
    let predictedLabel: 'healthy' | 'fungal' | 'bacterial' = 'healthy';
    if (fileSize % 3 === 0) {
      predictedLabel = 'fungal';
    } else if (fileSize % 3 === 1) {
      predictedLabel = 'bacterial';
    }

    const detectionResult = getDiseaseResult(predictedLabel);
    const suggestion = getSuggestion(predictedLabel);

    return NextResponse.json({
      label: detectionResult.label,
      confidence: detectionResult.confidence,
      suggestion: suggestion,
    });
  } catch (error) {
    console.error('Detection error:', error);
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    );
  }
}
