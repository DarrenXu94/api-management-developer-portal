import * as React from "react";

export class Test extends React.Component {
    public state: any;

    constructor(props) {
        super(props);
    
        this.state = {
        initialCount: props.initialCount || 0,
        };
    }
    
    public render(): JSX.Element {
        return (
        <div className={this.state.classNames}>
            This Test component was automatically generated
        </div>
        );
    }
}

export default Test;
  