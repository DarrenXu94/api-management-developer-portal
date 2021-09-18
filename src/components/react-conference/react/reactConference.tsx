import * as React from "react";
import { useEffect } from "react";

export class ReactConference extends React.Component {
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
        <p className="not-configured">
          This is an example widget that is yet to be implemented. You can use
          it as a scaffold for your own widget.
        </p>

        <p className="not-configured">
          Please refer to documentation to learn about{" "}
          <a href="https://paperbits.io/wiki/widget-anatomy">widget anatomy</a>.
        </p>
        <p>BIG TEST</p>
        {this.state.initialCount}
        {this.state.apiService && (
          <ApiCaller apiService={this.state.apiService} />
        )}
      </div>
    );
  }
}

const ApiCaller = ({ apiService }) => {
  const getAllApis = async () => {
    const res = await apiService.getApis("");
    console.log({ res });
  };
  useEffect(() => {
    if (apiService) {
      getAllApis();
    }
  }, [apiService]);

  return <div>API calls</div>;
};
