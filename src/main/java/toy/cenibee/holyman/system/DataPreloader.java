package toy.cenibee.holyman.system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import toy.cenibee.holyman.department.Department;
import toy.cenibee.holyman.department.DepartmentRepository;
import toy.cenibee.holyman.employee.Employee;
import toy.cenibee.holyman.employee.EmployeeRepository;
import toy.cenibee.holyman.holiday.Holiday;

import java.util.Date;

@Component
public class DataPreloader implements CommandLineRunner {


    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;

    @Autowired
    public DataPreloader(EmployeeRepository employeeRepository, DepartmentRepository departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
    }

    @Override
    public void run(String... args) {
        Department dept1 = departmentRepository.save(new Department("backend"));
        Department dept2 = departmentRepository.save(new Department("frontend"));
        Department dept3 = departmentRepository.save(new Department("designer"));

        employeeRepository.save(new Employee("Bab", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept1));
        employeeRepository.save(new Employee("Aba", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept2));
        employeeRepository.save(new Employee("Dad", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept3));
        employeeRepository.save(new Employee("Cec", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept1));
        employeeRepository.save(new Employee("Eve", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept2));
        employeeRepository.save(new Employee("Fuf", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept3));
    }

}
