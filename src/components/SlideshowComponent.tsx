import * as React from "react"

export interface SlideshowComponentProps {
    imageSources: string[];
}

export class SlideshowComponent extends React.Component<SlideshowComponentProps>{
    render(): JSX.Element {
        return <div> </div>
    }
}