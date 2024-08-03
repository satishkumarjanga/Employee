import axios from 'axios';

const EMP_API_BASE_URL="http://localhost:9090/api/v1/employees";

class Employee
{
    getEmployees(){
        return axios.get(EMP_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMP_API_BASE_URL,employee);
    }

    getEmpoyeeByID(employeeId)
    {
        return axios.get(EMP_API_BASE_URL+"/"+employeeId);

    }

    updateEmployee(employeeId,employee){
        return axios.put(EMP_API_BASE_URL+"/"+employeeId,employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMP_API_BASE_URL+"/"+employeeId);
    }
}

export default new Employee();