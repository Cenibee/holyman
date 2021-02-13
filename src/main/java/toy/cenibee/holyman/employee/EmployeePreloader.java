package toy.cenibee.holyman.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import toy.cenibee.holyman.department.Department;
import toy.cenibee.holyman.department.DepartmentRepository;
import toy.cenibee.holyman.holiday.Holiday;

import java.util.Date;

@Component
public class EmployeePreloader implements CommandLineRunner {


    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;

    @Autowired
    public EmployeePreloader(EmployeeRepository employeeRepository, DepartmentRepository departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
    }

    @Override
    public void run(String... args) {
        Department dept = new Department();
        dept.setName("test dept");

        dept = departmentRepository.save(dept);

        employeeRepository.save(new Employee("Bab", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept));
        employeeRepository.save(new Employee("Aba", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept));
        employeeRepository.save(new Employee("Dad", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept));
        employeeRepository.save(new Employee("Cec", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept));
        employeeRepository.save(new Employee("Eve", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept));
        employeeRepository.save(new Employee("Fuf", "abc@asdf.com", "Seoul",
                "010-1234-1234", new Date(), new Holiday(15, 0), dept));
    }

}
