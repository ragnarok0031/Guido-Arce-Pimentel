import React from 'react';
import { LucideProps } from 'lucide-react';

interface IconWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export function IconWrapper({ children, className }: IconWrapperProps) {
    return (
        <span className={className} suppressHydrationWarning>
            {children}
        </span>
    );
}

export function withSuppressHydration<P extends LucideProps>(
    IconComponent: React.ComponentType<P>
): React.FC<P> {
    const WrappedIcon = (props: P) => {
        return (
            <span suppressHydrationWarning>
                <IconComponent {...props} />
            </span>
        );
    };

    WrappedIcon.displayName = `SuppressHydration(${IconComponent.displayName || IconComponent.name})`;
    return WrappedIcon;
} 