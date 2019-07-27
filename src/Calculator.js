
                value1:parseFloat(this.state.value1+event.target.value),
                result: parseFloat(this.state.value1+event.target.value),
                history: this.state.history+event.target.value,
                value2:parseFloat(this.state.value2+event.target.value),
                history: this.state.history+event.target.value
                operator: event.target.value,
                history: this.state.history+event.target.value
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