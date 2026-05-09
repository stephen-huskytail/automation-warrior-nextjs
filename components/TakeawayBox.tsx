import { ReactNode } from "react";

interface TakeawayBoxProps {
  children: ReactNode;
}

export function TakeawayBox({ children }: TakeawayBoxProps) {
  return (
    <div className="takeaway-box">
      <p className="takeaway-label">Key Takeaways</p>
      <div className="takeaway-content">{children}</div>
    </div>
  );
}
