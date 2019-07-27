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
                result: parseFloat(this.state.value1+event.target.value)
            });
        }
        if(this.state.operator && this.state.value1)
        {
            this.setState({
                value2:parseFloat(this.state.value2+event.target.value)
            });
        }
    }
    operatorClicked(event){
        if(this.state.value2=="" && !this.state.operator)
        {
            this.setState({
                operator: event.target.value
            })
        }
        if((this.state.operator && this.state.value2!="") || event.target.value=='=')
        {
            if(this.state.operator=='+')
            {
                this.setState({
                    result: parseFloat(this.state.value1)+parseFloat(this.state.value2),
                    value1: this.state.value1+this.state.value2,
                    operator: event.target.value=="="?null:event.target.value,
                    value2: ""
                })
            }
            else if(this.state.operator=='-')
            {
                this.setState({
                    result: parseFloat(this.state.value1)-parseFloat(this.state.value2),
                    value1: this.state.value1-this.state.value2,
                    operator: event.target.value=="="?null:event.target.value,
                    value2: "",
                })
            }
            else if(this.state.operator=='*')
            {
                this.setState({
                    result: parseFloat(this.state.value1)*parseFloat(this.state.value2),
                    value1: this.state.value1-this.state.value2,
                    operator: event.target.value=="="?null:event.target.value,
                    value2: "",
                })
            }
            else if(this.state.operator=='/')
            {
                this.setState({
                    result: parseFloat(this.state.value1)/parseFloat(this.state.value2),
                    value1: this.state.value1-this.state.value2,
                    operator: event.target.value=="="?null:event.target.value,
                    value2: "",
                })
            }
            else if(this.state.operator=='^')
            {
                this.setState({
                    result: Math.pow(parseFloat(this.state.value1),parseFloat(this.state.value2)),
                    value1: this.state.value1-this.state.value2,
                    operator: event.target.value=="="?null:event.target.value,
                    value2: "",
                })
            }
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
                        <input type="button" onClick={this.operatorClicked} value ="="/>
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