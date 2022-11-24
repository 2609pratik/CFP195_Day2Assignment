import axios from 'axios';

class EmployeeService{
    baseUrl ="http://localhost:8080/employeepayrollservice";

    addEmployee(data) {
        return axios.post(`${this.baseUrl}/create`, data);
    }

    getAllEmployees() {
        return axios.get(`${this.baseUrl}/getAll`);
    }
    deleteEmployee(employeeId) {
        return axios.delete(`${this.baseUrl}/delete/${employeeId}`);
    }
    getEmployeeById(employeeId) {
        return axios.get(`${this.baseUrl}/get/${employeeId}`);
    }

}

export default new EmployeeService();