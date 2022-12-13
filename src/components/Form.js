import React from 'react'
import { useState } from 'react';

const Form = ({props}) => {
    const [errors, setErrors] = useState([]),
          [counter, setCounter] = useState(0);


    const {setName,
         setCard,
         setGroup,
         setTel,
         setVariant,
         setStatus,
         data} = props
    
    
    const onFormSubmit = (e) => {
        const arr = []
        e.preventDefault()
        data.forEach((item) => {
            inputValidation(item.value, item.name, arr)
        })
        setErrors(arr);
        if(arr.length === 0) {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }
    const regCheck = (reg, value, name, errorArr) => {
        const status = value.match(reg);
        if(!status) {
            errorArr.push(name);
        } else {
            setCounter(counter + 1)
        }
    }
          
    const inputValidation = (value, name, errorArr) => {
        //#region RegExpressions 
        const regName = /^[А-ЯЄІ][а-яєі]{0,30}\s[А-Я]\.[А-Я]\.$/,
              regVar = /^\d{2}$/,
              regGroup = /[А-ЯЄІ]{2}-\d{2}$/,
              regTel = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
              regCard = /^\w{2}\s№\d{6}$/;
        //#endregion
        switch (name) {
            case 'name':
                regCheck(regName,value, name,errorArr)
                break;
            case 'variant':
                regCheck(regVar,value, name,errorArr)
                break;
            case 'group':
                regCheck(regGroup,value, name,errorArr)
                break;
            case 'tel':
                regCheck(regTel,value, name,errorArr)
                break;
            case 'card':
                regCheck(regCard,value, name,errorArr)
                break;
            default:
                break;
        }
    }

    const handleChange = (e) => {
        const value = e.target.value,
              name = e.target.name;
        switch (name) {
            case 'name':
                setName({value,name});
                break
            case 'variant':
                setVariant({value,name});
                break
            case 'group':
                setGroup({value,name});
                break
            case 'tel':
                setTel({value,name});
                break
            case 'card':
                setCard({value,name});
                break
            default:
                break
        }
    }

    return (
        <>
            <form action="">
                <input  name='name' 
                        className={(errors.includes('name') ? 'error':null)} 
                        placeholder="ПІБ" 
                        value={data.name} 
                        onChange={handleChange}/>

                <input  name='variant'
                        className={(errors.includes('variant') ? 'error':null)} 
                        type="number" placeholder="Варіант"
                        value={data.variant}
                        onChange={handleChange}/>

                <input  name='group' 
                        className={(errors.includes('group') ? 'error':null)} 
                        maxLength="5" 
                        type="text" 
                        placeholder="Група" 
                        value={data.group} 
                        onChange={handleChange}/>

                <input  name='tel' 
                        className={(errors.includes('tel') ? 'error':null)} 
                        type="tel" 
                        maxLength="15" 
                        placeholder="Телефон" 
                        value={data.tel} 
                        onChange={handleChange}/>

                <input  name='card' 
                        className={(errors.includes('card') ? 'error':null)} 
                        type="text" 
                        maxLength="10" 
                        placeholder="ID-card" 
                        value={data.card} 
                        onChange={handleChange}/>
                <button onClick={onFormSubmit}>Підтвердити</button>
            </form>
        </>
    )
}

export default Form;