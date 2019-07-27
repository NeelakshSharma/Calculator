import React from 'react';


class Calculator extends React.Component {

    constructor()
    {
        super({});
        this.state = {
            value1:"",
            value2:"",
            operator:null,
            history:"",
            result:0,
        }
        this.numberClicked=this.numberClicked.bind(this);
        this.clearAll=this.clearAll.bind(this);
        this.operatorClicked=this.operatorClicked.bind(this);
        this.equalClicked=this.equalClicked.bind(this);
    }

    clearAll()
    {
        console.log(this.state.value1);
        console.log(this.state.value2);
        this.setState({
            value1:"",
            value2:"",
            operator:null,
            history:""
        })
    }

    numberClicked(event)
    {
        if(this.state.operator==null)
        {
            this.setState({
                history: this.state.history+event.target.value,
                value1: parseInt(this.state.history+event.target.value)
            });
            console.log(this.state.value1)
        }
        else
        {
            this.setState({
                history: this.state.history+event.target.value,
                value2: parseInt(this.state.value2+event.target.value)
            });
            console.log(this.state.value2)
        }
    }

    operatorClicked(event){
        this.setState({
            history: this.state.history+event.target.value,
            operator: event.target.value
        })
    }

    equalClicked()
    {
        if(this.state.operator=='+')
        {
            this.setState({
                result: parseInt(this.state.value1)+parseInt(this.state.value2)
            })
        }
    }

    render() {
        return ( 
            <div>
                <h3>My Calculator</h3>
                <form>  
                    <h3>{this.state.history}</h3>
                    <h4>{this.state.result}</h4>
                    <div>
                        <input type="button" onClick={this.numberClicked} value ="1"/>
                        <input type="button" onClick={this.numberClicked} value ="2"/>
                        <input type="button" onClick={this.numberClicked} value ="3"/>
                        <input type="button" onClick={this.operatorClicked} value ="+"/>
                    </div>
                    <div>
                        <input type="button" onClick={this.numberClicked} value ="4"/>
                        <input type="button" onClick={this.numberClicked} value ="5"/>
                        <input type="button" onClick={this.numberClicked} value ="6"/>
                        <input type="button" onClick={this.operatorClicked} value ="-"/>
                    </div>
                    <div>
                        <input type="button" onClick={this.numberClicked} value ="7"/>
                        <input type="button" onClick={this.numberClicked} value ="8"/>
                        <input type="button" onClick={this.numberClicked} value ="9"/>
                        <input type="button" onClick={this.equalClicked} value ="="/>
                    </div>
                    <div>
                        <input type="button" onClick ={this.clearAll} value ="C"/>
                        <input type="button" onClick={this.operatorClicked} value ="/"/>
                        <input type="button" onClick={this.operatorClicked} value ="*"/>
                        <input type="button" onClick={this.operatorClicked} value ="^"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Calculator;