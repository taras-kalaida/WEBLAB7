import React from "react";
import Form from '../components/Form';
import Content from '../components/Content';
import Table from '../components/Table';
import { useState } from "react";

const FirstExerсise = () => {
    const [name, setName] = useState({value:'', name:'name'}),
          [variant, setVariant] = useState({value:'', name:'variant'}),
          [group, setGroup] = useState({value:'', name:'group'}),
          [tel, setTel] = useState({value:'', name:'tel'}),
          [card, setCard] = useState({value:'', name:'card'}),
          [status, setStatus] = useState(false);

    return (
        <div className="App">
            <div className="wrapper">
                <Form props={{data:[name,variant,group,tel,card],setName, setVariant, setGroup, setCard, setTel, setStatus}}/>
                {(status) ? <Content name={name.value}
                                        variant={variant.value}
                                        tel={tel.value}
                                        card={card.value}
                                        group={group.value}/> : null}
            </div>
            <Table/>
        </div>
    );

}

export default FirstExerсise;