import React from 'react';


class Calculator extends React.Component {

    constructor()
    {
        super({});
        this.state = {
            value1:"",
            value2:"",
            operator:null,
            history:""
        }
        this.historyHandler=this.historyHandler.bind(this);
        this.clearAll=this.clearAll.bind(this);
    }

    historyHandler(event){
        this.setState({
            history:this.state.history+event.target.value,
        });
    }

    clearAll()
    {
        this.setState({
            value1:"",
            value2:"",
            operator:null,
            history:""
        })
    }

    render() {
        return ( 
            <div>
                <h3>My Calculator</h3>
                <form>  
                    <h3>{this.state.history}</h3>
                    <h4>0</h4>
                    <div>
                        <input type="button" onClick={this.historyHandler} value ="1"/>
                        <input type="button" onClick={this.historyHandler} value ="2"/>
                        <input type="button" onClick={this.historyHandler} value ="3"/>
                        <input type="button" onClick={this.historyHandler} value ="+"/>
                    </div>
                    <div>
                        <input type="button" onClick={this.historyHandler} value ="4"/>
                        <input type="button" onClick={this.historyHandler} value ="5"/>
                        <input type="button" onClick={this.historyHandler} value ="6"/>
                        <input type="button" onClick={this.historyHandler} value ="-"/>
                    </div>
                    <div>
                        <input type="button" onClick={this.historyHandler} value ="7"/>
                        <input type="button" onClick={this.historyHandler} value ="8"/>
                        <input type="button" onClick={this.historyHandler} value ="9"/>
                        <input type="button" onClick={this.historyHandler} value ="="/>
                    </div>
                    <div>
                        <input type="button" onClick ={this.clearAll} value ="C"/>
                        <input type="button" onClick={this.historyHandler} value ="/"/>
                        <input type="button" onClick={this.historyHandler} value ="*"/>
                        <input type="button" onClick={this.historyHandler} value ="^"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Calculator;