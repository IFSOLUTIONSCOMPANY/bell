import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  "rounded-[35px] overflow-hidden transition-shadow backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "bg-[rgba(250,249,245,0.7)] border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-sm",
        activity: "bg-[rgba(250,249,245,0.7)] border-[0.5px] border-[rgba(217,208,195,0.5)] shadow-sm",
        today: "bg-[#65413D] border-[0.5px] border-[rgba(85,70,64,0.2)] shadow-sm",
      },
      theme: {
        light: "text-[#65413D]",
        dark: "text-[#E5DED4]",
      },
    },
    defaultVariants: {
      variant: "default",
      theme: "light",
    },
  }
);

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  title?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, theme, title, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardVariants({ variant, theme, className })}
        {...props}
      >
        <div className="p-6">
          {title && (
            <h2 className={`font-['Jubilat'] font-normal text-[28px] mb-4`}>
              {title}
            </h2>
          )}
          
          {/* Arrow icon */}
          {title && (
            <div className={`absolute right-6 top-6 w-[40px] h-[40px] rounded-full ${theme === 'dark' ? 'bg-[rgba(229,222,212,0.15)]' : 'bg-[rgba(221,176,104,0.1)]'} flex items-center justify-center`}>
              <div className={`w-5 h-5 ${theme === 'dark' ? 'text-[#E5DED4]' : 'text-[#DDB068]'} flex items-center justify-center transform rotate-45`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          )}
          
          {children}
        </div>
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 ${className || ""}`}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`font-semibold text-xl leading-none tracking-tight ${className || ""}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-base ${className || ""}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-0 pt-2 ${className || ""}`} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center justify-between pt-4 ${className || ""}`}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }; 