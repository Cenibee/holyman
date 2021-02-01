package toy.cenibee.holyman.holiday;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@DiscriminatorValue("Produced")
public class HolidayHistoryProduced extends HolidayHistory{
    @NotNull
    private Date expiryDate;

    // -------------------------
    // |-- getters & setters --|
    // -------------------------
    public Date getExpiryDate() {
        return expiryDate;
    }
    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }
}
