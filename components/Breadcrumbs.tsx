import React from 'react';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumb" className="py-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <li className="text-gray-400">/</li>}
                        <li>
                            {index === items.length - 1 ? (
                                <span className="text-secondary font-semibold">{item.name}</span>
                            ) : (
                                <a
                                    href={item.url}
                                    className="hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </a>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
