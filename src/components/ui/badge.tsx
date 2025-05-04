
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-bell-primary)] text-white",
        room: "bg-[var(--color-bell-orange)] text-white",
        service: "bg-[var(--color-bell-primary)] text-white border border-[rgba(101,65,61,0.1)]",
        high: "bg-[var(--color-bell-red)] text-white",
        medium: "bg-[var(--color-bell-orange)] text-white",
        low: "bg-[var(--color-bell-green)] text-white",
        done: "bg-[rgba(229,221,211,0.9)] text-[rgba(101,65,61,0.5)]",
        outline: "bg-transparent border border-[var(--color-bell-gray-300)] text-[var(--color-bell-primary)]",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
        lg: "text-base px-4 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props} />
  );
}

export { Badge, badgeVariants }; 