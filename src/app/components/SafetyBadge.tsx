import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';

interface SafetyBadgeProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export function SafetyBadge({ score, size = 'md' }: SafetyBadgeProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 75) return 'text-yellow-600 bg-yellow-50';
    return 'text-orange-600 bg-orange-50';
  };

  const getIcon = (score: number) => {
    if (score >= 90) return CheckCircle;
    if (score >= 75) return Shield;
    return AlertTriangle;
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const Icon = getIcon(score);

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full font-medium ${getScoreColor(score)} ${sizeClasses[size]}`}>
      <Icon className={iconSizes[size]} />
      <span>Safety: {score}%</span>
    </div>
  );
}
