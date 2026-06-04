def generate_summary(records):
    total_hours = 0
    late_days = 0

    # Fix A: Stop at len(records)-1
    for i in range(len(records)):
        record = records[i]

        total_hours += record["hours"]

        if record["is_late"]:
            late_days += 1

    # Fix B: Avoid division by zero
    avg_hours = (
        total_hours / len(records)
        if len(records) > 0
        else 0
    )

    return {
        "total_hours": round(total_hours, 2),
        "avg_hours": round(avg_hours, 2),
        "late_days": late_days,
        "days_present": len(records)
    }