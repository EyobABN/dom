import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import EmployeesList from '../Employees/EmployeesList';
import EditEmployee from '../Employees/EditEmployee';
import AddEmployee from '../Employees/AddEmployee';
import DepartmentsList from '../Departments/DepartmentsList';
import EditDepartment from '../Departments/EditDepartment';
import AddDepartment from '../Departments/AddDepartment';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/employees" exact element={<EmployeesList />} />
      <Route path="/employees/add" exact element={<AddEmployee />} />
      <Route path="/employees/edit/:id" element={<EditEmployee />} />
      <Route path="/departments" exact element={<DepartmentsList />} />
      <Route path="/departments/add" exact element={<AddDepartment />} />
      <Route path="/departments/edit/:id" element={<EditDepartment />} />
    </Routes>
  );
};

export default AppRoutes;
