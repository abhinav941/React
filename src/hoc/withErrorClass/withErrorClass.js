import React,{Component} from 'react';
import Aux from '../Aux';
import Modal from '../../UI/Modal/Modal';


const withErrorClass = (WrappedComponent, axios) => {
    return class extends Component {
        state={
            error:null
        }


        componentWillMount(){
            this.request = axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req;
            })
            this.response = axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error})
            })
        }
        errorConfirmedHandler=()=>{
            this.setState({error:null})
        }

        componentWillUnmount(){
            
            axios.interceptors.request.eject(this.request)
            axios.interceptors.response.eject(this.response)
        }


        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} clickOnBackdrop={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message :null}
                    </Modal>

                    <WrappedComponent {...this.props} />

                </Aux>
            )
        }
    }
}
export default withErrorClass;