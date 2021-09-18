module.exports = (componentName) => ({
    content: `import * as React from "react";

export class ${componentName} extends React.Component {
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
            This ${componentName} component was automatically generated
        </div>
        );
    }
}

export default ${componentName};
  `,
    filename: `${componentName}.tsx`,
    folder: 'react'
  });