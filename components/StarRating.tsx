interface StarRatingProps {
  rating: number;
  max?: number;
}

export default function StarRating({ rating, max = 5 }: StarRatingProps) {
  // Clamp rating to valid range [0, max] to prevent negative repeat counts
  const clampedRating = Math.max(0, Math.min(rating, max));
  const fullStars = Math.floor(clampedRating);
  const hasHalf = clampedRating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="star-rating" aria-label={`${rating} out of ${max} stars`}>
      <span className="star-rating-stars">
        {"★".repeat(fullStars)}
        {hasHalf ? "½" : ""}
        {"☆".repeat(emptyStars)}
      </span>
      <span className="star-rating-value">
        {rating}/{max}
      </span>
    </div>
  );
}
