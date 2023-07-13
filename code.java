 bug: https://github.com/scuurvey/scuurvey/issues/1788
```java
import org.scurve.api.model.SCURVY_MODEL;
import org.scurve.api.model.ScurveyData;
import org.scurve.api.model.ScurveyModel;

public class SCURVY_MODEL_BUG_FIXER {
    public static void fixSCURVY_BUG(SCURVY_MODEL model, String bug) {
        SCURVY_DATA data = model.getData();
        SCURVY_DATA bugData = new SCURVY_DATA();
        bugData.setName(bug);
        bugData.set