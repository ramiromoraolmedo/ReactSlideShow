import * as React from "react"

export interface ImageWindowProps {
    imageUrl: string;
    height: string;
    width: string;
}

export class ImageWindow extends React.Component<ImageWindowProps> {
    render(): JSX.Element {
        return <div>
            <img 
                style = {
                    {"maxHeight": this.props.height, "maxWidth": this.props.width}
                } 
                src = {
                    this.props.imageUrl
                }
            />
        </div>
    }
}