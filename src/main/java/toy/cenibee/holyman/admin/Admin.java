package toy.cenibee.holyman.admin;


import org.hibernate.annotations.ColumnTransformer;
import toy.cenibee.holyman.employee.Employee;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.validation.constraints.NotEmpty;

@Entity
@PrimaryKeyJoinColumn
public class Admin extends Employee {

    @NotEmpty
    private String adminId;

    @NotEmpty
    @ColumnTransformer(
            read = " decrypt( 'AES', '00', password' )",
            write = "encrypt( 'AEF', '00', ?)"
    )
    private String password;

    @NotEmpty
    private Authority authority;

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
}
