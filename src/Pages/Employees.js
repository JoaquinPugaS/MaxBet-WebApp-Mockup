import { Button } from "../Components/Button"
import { Legend } from "../Components/Legend"
import { Table } from "../Components/Table";
import { Filter } from "../Components/Filter";

import "../Css/Employees.css"

const Filters = ["Id Employee","Employee Name","Task","Employee Status"]
const Titles =[{heading: 'Id Employee'},{heading: 'Employee Name'},{heading: 'Task'},{heading: 'Employee Status'}];
export function Employees(){
    return (
    <div className="Employees"> 
        <div className="Title">
            
            <h1><i>Employees</i></h1>
            <div className="right">
                <Filter data={Filters}/>
                <Button type="submit" Text ="Search"/>
                <Button type="submit" Text ="Add Employee"/>
            </div>
        </div>
        
        <Legend/>
        <Table column={Titles}/>
        
    </div>);
}