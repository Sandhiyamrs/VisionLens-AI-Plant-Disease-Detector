export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-4 border-border rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
