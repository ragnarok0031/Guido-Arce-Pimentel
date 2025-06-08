"use client";

import { useState } from 'react';
import { Button } from './button';
import { FileText, Download, ExternalLink, Maximize2, Minimize2 } from 'lucide-react';

interface PDFViewerProps {
    pdfUrl: string;
    title?: string;
}

export function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className={`pdf-viewer-container ${isFullScreen ? 'fixed inset-0 z-50 bg-background p-4' : 'relative'}`}>
            {title && (
                <div className="flex items-center justify-between mb-2 bg-muted p-2 rounded-t-md">
                    <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">{title}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={toggleFullScreen}
                            title={isFullScreen ? "Minimizar" : "Pantalla completa"}
                        >
                            {isFullScreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            asChild
                            title="Descargar"
                        >
                            <a href={pdfUrl} download>
                                <Download className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            asChild
                            title="Abrir en nueva pestaña"
                        >
                            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            )}
            <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0`}
                className={`w-full border border-border rounded-b-md ${isFullScreen ? 'h-[calc(100vh-120px)]' : 'h-[500px]'}`}
                title={title || "PDF Viewer"}
            />
        </div>
    );
} 