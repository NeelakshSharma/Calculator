import React from 'react';
import './Style.css';


class Calculator extends React.Component {

    constructor()
    {
        super({});
        this.state = {
            value1:"",
            value2:"",
            operator:null,
            history:"",
            result:null,
        }
        this.numberClicked=this.numberClicked.bind(this);
        this.clearAll=this.clearAll.bind(this);
        this.operatorClicked=this.operatorClicked.bind(this);
        // this.equalClicked=this.equalClicked.bind(this);
    }

    clearAll()
    {
        console.log(this.state.value1);
        console.log(this.state.value2);
        this.setState({
            value1:"",
            value2:"",
            operator:null,
            history:"",
            result: ""
        })
    }

    numberClicked(event)
    {
        if(!this.state.operator)
        {
            this.setState({
                value1:parseFloat(this.state.value1+event.target.value),
                result: parseFloat(this.state.value1+event.target.value),
                history: this.state.history+event.target.value,
            });
        }
        if(this.state.operator && this.state.value1)
        {
            this.setState({
                value2:parseFloat(this.state.value2+event.target.value),
                history: this.state.history+event.target.value
            });
        }
    }
    operatorClicked(event){
        
        if(this.state.value2=="" && !this.state.operator)
        {
            this.setState({
                operator: event.target.value,
                history: this.state.history+event.target.value
            })
        }
        if((this.state.operator && this.state.value2!="") || event.target.value=='=')
        {
            if(this.state.operator=='+')
            {
                this.setState({
                    result: parseFloat(this.state.value1)+parseFloat(this.state.value2),
                    value1: parseFloat(this.state.value1)+parseFloat(this.state.value2),
                    operator: event.target.value=="="?null:event.target.value,
                    value2: "",
                    history: event.target.value=="="?parseFloat(this.state.value1)+parseFloat(this.state.value2):this.state.history+""+event.target.value
                })
            }
            else if(this.state.operator=='-')
            {
                this.setState({
                    result: parseFloat(this.state.value1)-parseFloat(this.state.value2),
                    value1: parseFloat(this.state.value1)-parseFloat(this.state.value2),
                    operator: event.target.value=="="?null:event.target.value,
                    value2: "",
                    history: event.target.value=="="?parseFloat(this.state.value1)-parseFloat(this.state.value2):this.state.history+""+event.target.value
                })
            }
            else if(this.state.operator=='*')
            {
                this.setState({
                    result: parseFloat(this.state.value1)*parseFloat(this.state.value2),
                    value1: parseFloat(this.state.value1)*parseFloat(this.state.value2),
                    operator: event.target.value=="="?null:event.target.value,
                    value2: "",
                    history: event.target.value=="="?parseFloat(this.state.value1)*parseFloat(this.state.value2):this.state.history+""+event.target.value
                })
            }
            else if(this.state.operator=='/')
            {
                this.setState({
                    result: parseFloat(this.state.value1)/parseFloat(this.state.value2),
                    value1: parseFloat(this.state.value1)/parseFloat(this.state.value2),
                    operator: event.target.value=="="?null:event.target.value,
                    value2: "",
                    history: event.target.value=="="?parseFloat(this.state.value1)/parseFloat(this.state.value2):this.state.history+""+event.target.value
                })
            }
            else if(this.state.operator=='^')
            {
                this.setState({
                    result: Math.pow(parseFloat(this.state.value1),parseFloat(this.state.value2)),
                    value1: Math.pow(parseFloat(this.state.value1),parseFloat(this.state.value2)),
                    operator: event.target.value=="="?null:event.target.value,
                    value2: "",
                    history: event.target.value=="="?Math.pow(parseFloat(this.state.value1),parseFloat(this.state.value2)):this.state.history+""+event.target.value
                })
            }
        }
    }

    render() {
        return ( 
            <div className="Container">
                <h3 className = "Heading">My Calculator</h3>
                <form>  
                    <div>
                    <h4 className = "History">History: {this.state.history}</h4>
                    <h3 className = "Result">Result: {this.state.result}</h3>
                    </div>    
                    <div className="Button">
                    <div>
                        <input type="button" className = "NumericButton" onClick={this.numberClicked} value ="1"/>
                        <input type="button" className = "NumericButton" onClick={this.numberClicked} value ="2"/>
                        <input type="button" className = "NumericButton" onClick={this.numberClicked} value ="3"/>
                        <input type="button" className = "OperatorButton" onClick={this.operatorClicked} value ="+"/>
                    </div>
                    <div>
                        <input type="button" className = "NumericButton" onClick={this.numberClicked} value ="4"/>
                        <input type="button" className = "NumericButton" onClick={this.numberClicked} value ="5"/>
                        <input type="button" className = "NumericButton" onClick={this.numberClicked} value ="6"/>
                        <input type="button" className = "OperatorButton" onClick={this.operatorClicked} value ="-"/>
                    </div>
                    <div>
                        <input type="button" className = "NumericButton" onClick={this.numberClicked} value ="7"/>
                        <input type="button" className = "NumericButton" onClick={this.numberClicked} value ="8"/>
                        <input type="button" className = "NumericButton" onClick={this.numberClicked} value ="9"/>
                        <input type="button" className = "OperatorButton" onClick={this.operatorClicked} value ="="/>
                    </div>
                    <div>
                        <input type="button" className = "OperatorButton" onClick ={this.clearAll} value ="C"/>
                        <input type="button" className = "OperatorButton" onClick={this.operatorClicked} value ="/"/>
                        <input type="button" className = "OperatorButton" onClick={this.operatorClicked} value ="*"/>
                        <input type="button" className = "OperatorButton" onClick={this.operatorClicked} value ="^"/>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Calculator;