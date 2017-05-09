import * as React from "react";

import { LoadingSpinner } from 'some-bootstrap-components';

export function renderWhenReady (wait: boolean = false, context: any)  {
    return  (wait) ?
        () => { return <LoadingSpinner size="sm" overlay={false} fullScreen={false}/> }:
        () => { return context };
}


//------------------------------------------------------------------------------------------------//
/*
    Import renderWhenReady function to your JSX/TSX
 */
import * as React from "react";
import {renderWhenReady} from './somehwereinmyfile';
export class MyAwesomeComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render()
    {
        const MyConditionalRender = renderWhenReady(this.props.loadingFlag,
            <div>
                Hello World! Welcome to Nasir Page.
            </div>
        );

        <MyConditionalRender />
    }
}
//------------------------------------------------------------------------------------------------//
