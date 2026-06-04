import requests

API_BASE_URL = "https://hr-internal.company.com/api"
API_TOKEN = "your_token"

def get_employee(employee_id):
    url = f"{API_BASE_URL}/employees/{employee_id}"

    # Fix A: Add Authorization header
    headers = {
        "Authorization": f"Bearer {API_TOKEN}"
    }

    response = requests.get(url, headers=headers)

    # Fix B: Return None when employee is not found
    if response.status_code == 404:
        return None

    data = response.json()

    return data.get("employee")