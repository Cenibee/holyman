package toy.cenibee.holyman.admin;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Embeddable
public class Authority {

    @NotNull
    private Boolean employee_man;

    @NotNull
    private Boolean authority_man;

    @NotNull
    private Boolean holiday_man;

    // -------------------------
    // |-- getters & setters --|
    // -------------------------
    public Boolean getEmployee_man() {
        return employee_man;
    }
    public void setEmployee_man(Boolean employee_man) {
        this.employee_man = employee_man;
    }
    public Boolean getAuthority_man() {
        return authority_man;
    }
    public void setAuthority_man(Boolean authority_man) {
        this.authority_man = authority_man;
    }
    public Boolean getHoliday_man() {
        return holiday_man;
    }
    public void setHoliday_man(Boolean holiday_man) {
        this.holiday_man = holiday_man;
    }
}
