module.exports = (componentName) => ({
    content: `import * as React from "react";
import { RuntimeComponent } from "@paperbits/react/decorators";

@RuntimeComponent({
    selector: '${componentName}-runtime',
})
export class ${componentName}Runtime extends React.Component {}
`,
    filename: `${componentName}-runtime.tsx`,
    folder: 'react/runtime',
  });
