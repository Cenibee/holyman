package toy.cenibee.holyman.holiday;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;

@Entity
@DiscriminatorValue("Consumed")
public class HolidayHistoryConsumed extends HolidayHistory{
    @NotEmpty
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
