import { useState } from "react";
import { SelectField, TextField} from "./FormInput"

export const FormCarUncontrolled = () => {

     const handleSubmit = (event) => {
        event.preventDefault();
        const brand = event.target.Brand.value;
        const model = event.target.Model.value;
        const color = event.target.Color.value;
        const cc = event.target.CC.value;
        console.log (brand, model, color, cc);
     }

     return (
        <form onSubmit={handleSubmit}>
            <h1>Car Input</h1>
            <TextField name= "Brand" type= "text"/>
            <SelectField name= "Model" options={['Sedan', 'SUV', 'MPV', 'Hatchback']}/>
            <TextField name= "Color" type= "color"/>
            <TextField name= "CC" type= "number"/>
            <button type="submit">Submit</button>

        </form>
     )
}

export const FormCarControlled = () => {
    const [brand,setBrand] = useState('');
    const [model,setModel] = useState('');
    const [color,setColor] = useState('');
    const [cc,setCC] = useState(0);
    const handleSubmit = (event) => {
       event.preventDefault();
       console.log (brand, model, color, cc);
    }

    return (
       <form onSubmit={handleSubmit}>
           <h1>Car Input Controlled</h1>
           <div> 
            {brand} <br/>
            {model} <br/>
            <div style= {{ background: color, height: '20px', width: '20px', margin: 'auto'}}/><br/>
            {cc} <br/>
            </div>
            <TextField 
            name= "Brand"
            value={brand}
            onChange={setBrand}
            type="text"
            validationFunction={(value) => {
                if(value === '') {
                    return 'Brand Should not be empty'
                }
                return true;
            }}
            />
            <SelectField 
            name= "Model"
            value={model}
            onChange={setModel}
            validationFunction={(value) => {
                if(value === '') {
                    return 'Model Should not be empty'
                }
                return true;
            }}
            options={[ '','Sedan', 'SUV', 'MPV', 'Hatchback']}
            />
            <TextField 
            value={color}
            onChange={setColor}
            name= "Color"
            type="color"
            />
            <TextField 
            value={cc}
            onChange={setCC}
            validationFunction={(value) => {
                if(value === '') {
                    return 'CC Should not be empty'
                }
                if (isNaN(parseInt(value))) {
                    return 'CC should be a number'
                }
                return true;
            }}
            name= "CC"
            type="text"
            />
            <button type="submit">Submit</button>
       </form>
    )
}