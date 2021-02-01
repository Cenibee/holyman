package toy.cenibee.holyman.admin;


import org.hibernate.annotations.ColumnTransformer;
import toy.cenibee.holyman.employee.Employee;
import toy.cenibee.holyman.model.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
public class Admin extends BaseEntity {

    @NotEmpty
    private String adminId;

    @NotEmpty
    @ColumnTransformer(
            read = " decrypt( 'AES', '00', password' )",
            write = "encrypt( 'AEF', '00', ?)"
    )
    private String password;

    @NotNull
    private Authority authority;

    @NotNull
    @OneToOne
    private Employee employee;

    // -------------------------
    // |-- getters & setters --|
    // -------------------------
    public String getAdminId() {
        return adminId;
    }
    public void setAdminId(String adminId) {
        this.adminId = adminId;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public Authority getAuthority() {
        return authority;
    }
    public void setAuthority(Authority authority) {
        this.authority = authority;
    }
    public Employee getEmployee() {
        return employee;
    }
    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
