import React, {Component} from 'react'
import moment  from 'moment'

export default class ErrorHandling extends Component {
    state={hasError:false, error: null}

    static getDerivedStateFromError(error){
        return {hasError:true, error: error}
    }

    componentDidCatch(error, info){
        //we can also log the error using error tracking service like Sentry
        console.log(error,info, moment(new Date()).calendar())
    }

    render() {
        if(this.state.hasError){
            return (
                <div className="section white">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Oops something went wrong</span>
    
                        </div>
                    </div>
                </div>
            )
        }
        return this.props.children
        
    }
}