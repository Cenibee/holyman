package toy.cenibee.holyman.department;

import toy.cenibee.holyman.employee.Employee;
import toy.cenibee.holyman.model.NamedEntity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class Department extends NamedEntity {
    public Department() {}

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "department")
    private Set<Employee> employees;

    public Department(String name) {
        this.setName(name);
    }
}
