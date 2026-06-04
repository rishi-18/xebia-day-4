MIN_DAYS_REQUIRED = 20
MAX_LATE_DAYS = 3

def check_attendance_policy(summary):
    days_present = summary["days_present"]
    late_days = summary["late_days"]

    # Fix A: fewer than minimum required
    below_minimum = days_present < MIN_DAYS_REQUIRED

    # Fix B: exactly 3 should trigger warning
    exceeded_late = late_days >= MAX_LATE_DAYS

    if below_minimum or exceeded_late:
        return {
            "warning": True,
            "reason": []
                + (["Below minimum attendance"] if below_minimum else [])
                + (["Exceeded late check-ins"] if exceeded_late else [])
        }

    return {
        "warning": False,
        "reason": []
    }