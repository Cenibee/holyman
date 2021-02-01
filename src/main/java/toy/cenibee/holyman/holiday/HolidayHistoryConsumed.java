package toy.cenibee.holyman.holiday;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@DiscriminatorValue("Consumed")
public class HolidayHistoryConsumed extends HolidayHistory{
    @NotNull
    private Boolean approved;

    // -------------------------
    // |-- getters & setters --|
    // -------------------------
    public Boolean getApproved() {
        return approved;
    }
    public void setApproved(Boolean approved) {
        this.approved = approved;
    }
}
