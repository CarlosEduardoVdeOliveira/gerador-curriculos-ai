interface CharacterCounterProps {
  current: number;
  max: number;
  className?: string;
}

export function CharacterCounter({ current, max, className = "" }: CharacterCounterProps) {
  const percentage = (current / max) * 100;
  const isNearLimit = percentage > 80;
  const isAtLimit = percentage >= 100;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span 
        className={`text-xs font-medium transition-colors ${
          isAtLimit 
            ? 'text-red-600' 
            : isNearLimit 
            ? 'text-yellow-600' 
            : 'text-gray-500'
        }`}
      >
        {current}/{max}
      </span>
      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${
            isAtLimit 
              ? 'bg-red-500' 
              : isNearLimit 
              ? 'bg-yellow-500' 
              : 'bg-green-500'
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
}

